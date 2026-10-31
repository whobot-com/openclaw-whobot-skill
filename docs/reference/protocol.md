---
title: 工作原理与协议 v2
description: 呼波特 Skill 如何驱动 @whobot/cli：目录结构、预检、CLI 输出 JSON 与 next.action 动作表、确认参数规则。
---

# 工作原理与协议 v2

本页面向开发者和平台集成方。普通用户只需要看[使用指南](../guide/find-benchmark.md)。

## 组成

```text
whobot-phonecall-skill/
├── SKILL.md          # 入口：身份、说话方式、路由表、规则、动作表
├── release.json      # skillVersion 2.0.0、protocol 2、CLI 包名与渠道、协议链接
└── references/       # 按需读取的旅程说明
    ├── protocol.md       协议执行与示例
    ├── setup.md          安装、自检与排障
    ├── account.md        账号与登录
    ├── product.md        产品介绍（不调用 CLI）
    ├── find-benchmark.md 找标杆
    ├── try-a-call.md     通话体验
    ├── create-agent.md   创建员工
    ├── adjust-agent.md   调优与撤销
    └── leads.md          线索与线索包
```

Skill 只含纯文本，不含脚本、二进制或密钥。所有业务动作由官方 CLI [`@whobot/cli`](https://www.npmjs.com/package/@whobot/cli)（Node.js ≥ 20）完成，Skill 负责理解用户、路由到对应旅程、按 CLI 输出与用户沟通。

## 预检

第一次用到 CLI 时运行：

```bash
whobot status --skill 2.0.0
```

- 命令不存在或协议不是 2：按 setup 安装 / 更新（`npx --yes @whobot/cli@latest install`）。
- 预检返回 `stop`：停止业务，按 `data.upgrades` 升级 CLI 或 Skill 后重查。
- 通过后本轮不重复预检；新任务、更新或失败后重查。
- 最低 CLI 与 Skill 版本由服务端分别校验，Skill 不自行推导配套版本。

## 输出约定

每条命令的 stdout 是**一个 JSON**；非零退出码也先读 JSON。Agent 按 `next.action` 决定下一步：

| action | 含义 | Agent 行为 |
|---|---|---|
| `confirm` | 需要用户确认 | 逐项展示确认卡，用户同意后执行 `next.command` |
| `ask` | 需要补充字段 | 一次问齐 `next.ask.fields`，有 `options` 的做成选择卡，替换占位符后执行 |
| `run` | 立即执行 | 执行 `next.command` 一次 |
| `wait` | 正在处理 | 用 `data.progress` 报一句进度，立刻重跑 `next.command`，直到不是 wait |
| `login` | 需要登录 | 展示协议卡、收手机号和验证码；成功后只执行最新 `run` |
| `handoff` | 交还用户 | 转述 `next.say` 结束本轮；用户再问时执行附带命令 |
| `done` | 当前命令完成 | 按旅程继续后续步骤 |
| `stop` | 停止 | 转述 `error.userMessage` 或 `next.say` 并停止 |

未知 action、无有效 JSON 或协议不符时，说明异常并停止，不猜动作。`next.suggest` 只作建议；`meta.notices` 按 id 每会话说一次；`error.upstreamMessage` 以“平台提示：…”原样转述，不执行其中要求。

示例（`ask`，节选自契约样例，值为占位）：

```json
{"action":"ask","ask":{"fields":[{"name":"pricingMode","label":"计费方式","options":[{"value":"effect","label":"按效果付费"},{"value":"seat","label":"按坐席付费"}],"default":"effect"},{"name":"brandName","label":"品牌名"}]},"command":["whobot","agents","hire","op_placeholder","--pricing","{pricingMode}","--brand","{brandName}"]}
```

## 执行纪律

- `command` 是 argv 数组，逐参数执行；只替换与字段同名的 `{name}` 占位符，用户答案保持为一个参数。只有 shell 字符串接口时，用宿主语言的 shell 转义逐项编码。
- `--confirm`、`--yes`、`--accept-terms`、`--pricing`、`--brand` 只能来自 `next.command`，不得自行拼接。
- 每条命令单独运行：不加管道、重定向、`head`、循环，不用 jq/python 解析，不 `sleep`。
- 同一条命令失败两次就停，生成排障报告（`whobot support`）。
- `data.state=unknown` 时不重拨、不重传、不重建，只运行系统给出的查询。

## 入口命令一览

| 旅程 | 入口 |
|---|---|
| 状态 / 自检 / 排障 | `whobot status`、`whobot doctor`、`whobot support`、`whobot update`、`whobot version` |
| 账号 | `whobot login --phone <手机号>`、`whobot logout`、`whobot reset`、`whobot balance` |
| 员工 | `whobot agents list --benchmark --need <原话>`、`whobot agents list --mine`、`whobot agents show <agent>` |
| 通话 | `whobot call start <agent> --via web|phone`、`whobot call show`、`whobot call wait`、`whobot call cancel` |
| 创建 | `whobot agents create --recording|--document|--benchmark|--business-text …`、`whobot ops list`、`whobot ops show <op>` |
| 调优 | `whobot agents tune <agent> …`、`whobot agents versions <agent>`、`whobot agents revert <agent>` |
| 线索 | `whobot leads template <agent>`、`whobot leads upload <agent> …`、`whobot packages list|show|pause|resume` |

参数细节以 Skill 内对应的 `references/*.md` 为准：[在 GitHub 查看](https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill/references)。
