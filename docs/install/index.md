---
title: 平台总览
description: 呼波特电话数字员工 Skill 在 Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等平台的接入方式对比与选择建议。
---

# 各平台接入方案

Skill 是一个目录（`SKILL.md` + `release.json` + `references/`），放进宿主会扫描的 skills 目录即可生效。业务操作由 Skill 调用官方 CLI `@whobot/cli` 完成，所以**宿主必须能执行本机命令**，且命令超时可以设到 130 秒以上。

## 所有平台都可以：一句话安装

不管用哪个 Agent，最简单的方式都是把这句话发给它：

<div class="prompt">请帮我安装这个 Skill：https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill</div>

Agent 会自己下载并放到它的技能目录；装好后新开一个对话即可。下面的表格和各平台页面是给想了解细节或手动安装的人看的。

## 怎么选

| 平台 | 命令行 / 市场安装 | 安装位置（用户级） | 页面 |
|---|---|---|---|
| **WorkBuddy**（推荐）/ CodeBuddy | 一句话安装即可；手动可复制文件夹 | `~/.workbuddy/skills/`、`~/.codebuddy/skills/` | [WorkBuddy 使用指南](workbuddy.md) |
| Claude Code | 插件市场，或 `npx skills add … -a claude-code` | `~/.claude/skills/` | [Claude Code](claude-code.md) |
| Codex | `npx skills add … -a codex` | `~/.agents/skills/` | [Codex](codex.md) |
| OpenClaw | ClawHub：`openclaw skills install @whobot/whobot-phonecall-skill` | 工作区 `skills/` 或 `~/.openclaw/skills/` | [OpenClaw](openclaw.md) |
| Cursor | `npx skills add … -a cursor` | `~/.cursor/skills/` | [Cursor](cursor.md) |
| Cline、Gemini CLI、GitHub Copilot、Trae、Qoder、Qwen Code、Kimi Code 等 | `npx skills add … -a <agent>` | 见页面 | [其他 Agent 工具](other-agents.md) |
| DeepSeek Harness | 安装插件 `@whobot/dsh-agent-whobot`（不是 Skill） | Harness 插件管理器 | [DeepSeek Harness 插件](deepseek-harness.md) |

`…` 代表 `whobot-ai/skills --skill whobot-phonecall-skill -g -y`。

## 三个安装来源，内容相同

| 来源 | 地址 | 适合 |
|---|---|---|
| 合集仓库（主源） | `whobot-ai/skills` 下的 `skills/whobot-phonecall-skill` | `npx skills`、Claude Code 插件市场、手动复制 |
| 专用仓库 | `whobot-com/openclaw-whobot-skill`（Skill 在仓库根目录，另含 `.skill` 安装包） | 下载 ZIP 安装包、只想要这一个 Skill |
| ClawHub | `@whobot/whobot-phonecall-skill`（组织版）、`@whobot-ai/whobot-phonecall-skill`（个人版） | OpenClaw |

ClawHub 的发布版本号与 Skill 文件内的版本号分别管理，详见[版本与发布渠道](../reference/releases.md)。

## 命令行安装（任何平台）

```bash
# 自动识别本机的 Agent 工具并安装到用户目录
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -y

# 只装到指定工具，可写多个 -a
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a claude-code -a codex -y

# 不用安装工具：手动复制
git clone https://github.com/whobot-ai/skills.git
cp -R skills/skills/whobot-phonecall-skill <宿主的 skills 目录>/
```

装好后重启宿主或新开会话。之后的 CLI 安装、登录都由 Skill 在对话中引导，不需要提前手动做。

## 所有平台共同的要求

- **能执行命令**：只能聊天、不能运行本机命令的环境无法完成业务操作，只能回答产品问题。
- **命令超时 ≥ 130 秒**：Skill 会要求 Agent 自己这样设置；如果宿主有全局上限，请调高。
- **结构化提问工具（可选）**：宿主有 AskUserQuestion 一类的选择卡工具时，Skill 会用点选的方式问你；没有时会列出编号选项，回复序号即可。
- **不要同时启用旧版**：旧的 `openclaw-whobot` 知识库 Skill 和新版同时存在会重复触发，先停用旧版。
