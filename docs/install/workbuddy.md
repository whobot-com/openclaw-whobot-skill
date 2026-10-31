---
title: WorkBuddy / CodeBuddy
description: 在腾讯 WorkBuddy 和 CodeBuddy 中安装呼波特电话数字员工 Skill。
---

# WorkBuddy / CodeBuddy

WorkBuddy 与 CodeBuddy 使用同一套 Agent 引擎，都支持 Agent Skills。

## WorkBuddy

最简单的方式是直接对 WorkBuddy 说：

> 帮我安装 whobot-ai/skills@whobot-phonecall-skill

它会下载并放到自己的 skills 目录。也可以手动复制：

| 系统 | 目录 |
|---|---|
| macOS / Linux | `~/.workbuddy/skills/whobot-phonecall-skill/` |
| Windows | `%USERPROFILE%\.workbuddy\skills\whobot-phonecall-skill\` |

```bash
git clone https://github.com/whobot-ai/skills.git
mkdir -p ~/.workbuddy/skills
cp -R skills/skills/whobot-phonecall-skill ~/.workbuddy/skills/
```

Windows 上可以从专用仓库下载 `openclaw-whobot.skill`（ZIP 格式），解压后把 `whobot-phonecall-skill` 文件夹放进上表目录。安装后新建对话。

## CodeBuddy

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a codebuddy -y
```

用户级目录为 `~/.codebuddy/skills/`，项目级为 `.codebuddy/skills/`。

## 注意

- WorkBuddy 需要处在可以执行本机命令的模式，Skill 才能安装和调用 `@whobot/cli`；只读或纯对话模式只能回答产品问题。
- Windows 需要先安装 Node.js（含 npm、npx），并确保在新打开的终端里 `node -v` 可用。
- 网页通话链接请在系统浏览器中打开并允许麦克风；Skill 不会用宿主的内置预览打开通话页。
