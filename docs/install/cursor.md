---
title: Cursor
description: 在 Cursor 中安装和使用呼波特电话数字员工 Skill。
---

# Cursor

Cursor 的 Agent 会在启动时发现 Skill，并根据描述自动选用；也可以在 Agent 对话里输入 `/` 搜索 Skill 名手动调用（只作用于当前这条消息）。


## 一句话安装

在对话里发送：

```text
请帮我安装呼波特的电话 Skill https://github.com/whobot-com/openclaw-whobot-skill
```

装好后新开一个对话。以下是命令行和手动方式，供需要时使用。

## 命令行安装

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a cursor -y
```

或手动复制到以下任一目录：

| 范围 | 目录 |
|---|---|
| 用户级 | `~/.cursor/skills/` 或 `~/.agents/skills/` |
| 项目级 | `.cursor/skills/` 或 `.agents/skills/` |

Cursor 也会兼容读取 `~/.claude/skills/`、`~/.codex/skills/`，所以已经给 Claude Code 装过的话不必重复安装。

安装后重启 Cursor。

## 注意

- 业务操作需要 Agent 执行终端命令；请在 Agent 模式下使用，并允许它运行 `whobot` 与 `npx` 命令。
- Cursor 的终端命令有自己的超时策略；等待通话或生成结果时如被中断，回复“继续”即可，Skill 会用查询命令接着查，不会重复拨打或重复创建。
