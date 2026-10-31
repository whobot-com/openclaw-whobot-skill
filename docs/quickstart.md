---
title: 五分钟上手
description: 安装呼波特电话数字员工 Skill、安装官方 CLI、登录并完成第一次网页体验通话。
---

# 五分钟上手

## 1. 准备环境

| 需要 | 说明 |
|---|---|
| Node.js 22.20+（含 npm、npx） | `npx skills` 安装工具要求 22.20+；只手动复制 Skill 时 Node.js 20+ 即可运行 CLI |
| 一个支持 Agent Skills 的宿主 | Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等，见[平台总览](install/) |
| 一个能接收短信的手机号 | 登录呼波特账号用；验证码只用于本次登录 |

检查版本：

```bash
node -v
npx -v
```

## 2. 安装 Skill

通用方式（自动识别本机已安装的 Agent 工具，`-g` 装到用户目录，所有项目可用）：

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -y
```

只装给某一个工具时加 `-a`，例如 `-a claude-code`、`-a codex`、`-a cursor`。不想用安装工具，或你的平台有自己的市场，见各平台页面。

装好后**重启宿主或新开一个会话**，让它重新加载 Skill。

## 3. 第一次对话

对 Agent 说：

> 呼波特能做什么？

Agent 会用产品资料回答，不调用任何命令。接着说：

> 帮我找一个做客户回访的电话数字员工，先用网页体验一下。

这时 Skill 第一次需要执行业务，会自动做三件事：

1. 运行 `whobot status --skill 2.0.0` 自检；
2. 没装 CLI 时按说明执行 `npx --yes @whobot/cli@latest install`；
3. 需要登录时给你看隐私协议和用户协议，问手机号，再问短信验证码。

之后它会推荐标杆员工，给出网页通话链接。点开链接、允许麦克风，就能和数字员工直接对话；结束后 Agent 会告诉你通话结果。

> 注意：宿主执行命令的超时时间至少要 130 秒，否则等待通话或生成结果时会被提前打断。各平台的设置方法见对应平台页面。

## 4. 接下来

- 用录音或资料做自己的员工：[创建数字员工](guide/create-agent.md)
- 让员工给客户名单外呼：[线索外呼](guide/leads.md)（员工需先在管理平台上岗）
- 装不上、用不了：[更新与排障](reference/troubleshooting.md)
