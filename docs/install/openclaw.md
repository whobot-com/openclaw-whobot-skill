---
title: OpenClaw
description: 通过 ClawHub 或手动方式在 OpenClaw 中安装呼波特电话数字员工 Skill，以及从旧版 openclaw-whobot 迁移。
---

# OpenClaw

## 方式一：ClawHub（推荐）

```bash
# 安装到当前工作区的 skills/
openclaw skills install @whobot/whobot-phonecall-skill

# 安装到 ~/.openclaw/skills/，本机所有 agent 共用
openclaw skills install @whobot/whobot-phonecall-skill --global
```

条目页面：<https://clawhub.ai/whobot/whobot-phonecall-skill>（组织 `whobot`）。另有个人发布者条目 `@whobot-ai/whobot-phonecall-skill`，两者内容同源，装一个即可。

ClawHub 上显示的是 ClawHub 发布版本（如 2.0.1），Skill 文件内的版本是 2.0.0，两者分别管理，不矛盾。

## 方式二：npx skills

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a openclaw -y
```

## 方式三：手动复制

```bash
git clone https://github.com/whobot-com/openclaw-whobot-skill.git
mkdir -p ~/.openclaw/skills/whobot-phonecall-skill
cp openclaw-whobot-skill/SKILL.md openclaw-whobot-skill/release.json ~/.openclaw/skills/whobot-phonecall-skill/
cp -R openclaw-whobot-skill/references ~/.openclaw/skills/whobot-phonecall-skill/
```

专用仓库里还有 `openclaw-whobot.skill`，它是 ZIP 安装包，内部目录为 `whobot-phonecall-skill/`，解压到 skills 目录同样可用。

## 加载

`openclaw skills install`、更新、卸载以及重启 Gateway 都会立即重新扫描；默认开启的目录监视也会自动发现变化，已有会话在下一轮生效。同名 Skill 的优先级：工作区 `skills/` > 工作区 `.agents/skills` > `~/.agents/skills` > `~/.openclaw/skills` 等。

## 从旧版 openclaw-whobot 迁移

旧版 ClawHub 条目 `openclaw-whobot-skill` 是基于知识库的问答 Skill，没有业务操作能力。新版装好后请在 OpenClaw 中停用或卸载旧版，避免同一句话触发两个 Skill。

专用仓库里保留的 `mcp-server/` 和 `references/knowledge.md` 属于旧版知识库，与新版 CLI 流程无关，不需要安装。
