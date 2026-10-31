---
title: 其他 Agent 工具
description: 在 Cline、Gemini CLI、GitHub Copilot、Trae、Qoder、Qwen Code、Kimi Code、OpenCode、Windsurf 等工具中安装呼波特电话数字员工 Skill。
---

# 其他 Agent 工具

凡是支持 [Agent Skills 规范](https://agentskills.io) 的工具，都可以用 `npx skills` 安装，把 `-a` 换成对应的名字：

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a <agent> -y
```

| 工具 | `-a` 取值 | 用户级目录 | 项目级目录 |
|---|---|---|---|
| Cline | `cline` | `~/.agents/skills/` | `.agents/skills/` |
| Gemini CLI | `gemini-cli` | `~/.gemini/skills/` | `.agents/skills/` |
| GitHub Copilot | `github-copilot` | `~/.copilot/skills/` | `.agents/skills/` |
| Trae / Trae CN | `trae` / `trae-cn` | `~/.trae/skills/` / `~/.trae-cn/skills/` | `.trae/skills/` |
| Qoder / Qoder CN | `qoder` / `qoder-cn` | `~/.qoder/skills/` / `~/.qoder-cn/skills/` | `.qoder/skills/` |
| Qwen Code | `qwen-code` | `~/.qwen/skills/` | `.qwen/skills/` |
| Kimi Code CLI | `kimi-code-cli` | `~/.agents/skills/` | `.agents/skills/` |
| 通义灵码 Lingma | `lingma` | `~/.lingma/skills/` | `.lingma/skills/` |
| OpenCode | `opencode` | `~/.config/opencode/skills/` | `.agents/skills/` |
| Windsurf | `windsurf` | `~/.codeium/windsurf/skills/` | `.windsurf/skills/` |
| Roo Code | `roo` | `~/.roo/skills/` | `.roo/skills/` |

目录来自 `skills` 安装工具的[官方支持列表](https://github.com/vercel-labs/skills/blob/main/docs/agents.md)，以该列表的最新版本为准。上表没有的工具，可以先查列表；完全不在列表里的，把 `whobot-phonecall-skill` 整个文件夹手动复制到该工具的 skills 目录。

## 使用前确认三件事

1. 工具能在本机执行命令（Skill 依赖 `@whobot/cli`）。
2. 命令超时可以 ≥ 130 秒。
3. 工具能联网访问 npm 和呼波特服务。

只支持聊天、不能执行命令的环境，Skill 只能回答“呼波特是什么、能做什么”这类产品问题。
