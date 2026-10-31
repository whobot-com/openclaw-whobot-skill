---
title: Claude Code
description: 在 Claude Code 中安装和使用呼波特电话数字员工 Skill：插件市场、npx skills、手动安装三种方式。
---

# Claude Code

Claude Code 原生支持 Agent Skills，会根据 Skill 的描述自动加载，也可以用 `/whobot-phonecall-skill` 手动调用。它自带 AskUserQuestion 选择卡，体验最完整。

## 方式一：插件市场（推荐）

在 Claude Code 里输入：

```text
/plugin marketplace add whobot-ai/skills
/plugin install whobot-skills@whobot-skills
```

这会安装 WhoBot 的 Skill 合集插件（包含 `whobot-phonecall-skill` 和 `clean-commits`）。之后用 `/plugin` 管理和更新。

## 方式二：npx skills

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a claude-code -y
```

安装到 `~/.claude/skills/whobot-phonecall-skill/`。去掉 `-g` 则装到当前项目的 `.claude/skills/`，可以随仓库共享给团队。

## 方式三：手动复制

```bash
git clone https://github.com/whobot-ai/skills.git
mkdir -p ~/.claude/skills
cp -R skills/skills/whobot-phonecall-skill ~/.claude/skills/
```

## 加载与调用

- Claude Code 会监视 skills 目录，新增或修改通常在当前会话就生效；如果 `~/.claude/skills/` 是本次会话启动后才新建的，运行 `/reload-skills`。
- 自动触发：直接说“帮我找一个做到店邀约的电话数字员工”。
- 手动触发：输入 `/whobot-phonecall-skill`。

## 命令超时

Skill 会让 Claude 在执行等待类命令时把超时设到 130 秒以上（Bash 工具单次上限默认 10 分钟）。如果你在设置里调低过上限，可在 `~/.claude/settings.json` 中设置：

```json
{
  "env": {
    "BASH_MAX_TIMEOUT_MS": "600000"
  }
}
```

## 权限提示

Skill 会运行 `whobot …` 命令。不想每次确认时，可以在权限设置里允许 `Bash(whobot:*)`。涉及费用或真实拨打的操作仍会由 Skill 给出确认卡，这一层不受权限设置影响。
