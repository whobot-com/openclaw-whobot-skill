[简体中文](README.md) | [English](README_en.md)

# WhoBot AI 电话数字员工 Skill

同步自 [whobot-ai/skills](https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill) 的 `whobot-phonecall-skill`，当前版本 **2.0.0**，CLI 协议 **2**。

📖 **完整文档：<https://whobot-com.github.io/openclaw-whobot-skill/>**（各平台接入、使用指南、协议参考、[llms.txt](https://whobot-com.github.io/openclaw-whobot-skill/llms.txt)）

支持按行业和任务找标杆、网页语音与真实电话体验、创建及调优数字员工、上传线索和查询外呼进度、账号登录与余额查询。实际能力和费用以产品资料及系统返回为准；真实拨打和收费操作按 skill 的确认流程执行。

## 安装

**一句话安装（推荐）**：把这句话发给你的 AI Agent（WorkBuddy、Claude Code、Codex、OpenClaw、Cursor 等），装好后新开一个对话即可。

```text
请帮我安装呼波特的电话 Skill https://github.com/whobot-com/openclaw-whobot-skill
```

**给 Agent 的安装说明**：本仓库根目录就是 Skill。安装时把 `SKILL.md`、`release.json` 和 `references/` 复制到宿主 skills 目录下的 `whobot-phonecall-skill/` 文件夹（如 `~/.workbuddy/skills/`、`~/.claude/skills/`、`~/.agents/skills/`、`~/.openclaw/skills/`），不需要复制 `docs/`、`mcp-server/`、`scripts/`；完成后提示用户新开对话。

WorkBuddy 用户请看 [WorkBuddy 使用指南](https://whobot-com.github.io/openclaw-whobot-skill/install/workbuddy.html)。

命令行安装：

运行环境：Node.js 20+（含 npm、npx）；使用 `npx skills` 安装工具需要 Node.js 22.20+。各平台（Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等）的安装方式见[平台总览](https://whobot-com.github.io/openclaw-whobot-skill/install/)。

```bash
npx skills add whobot-com/openclaw-whobot-skill -g -y
```

也可以手动安装到 OpenClaw：

```bash
git clone https://github.com/whobot-com/openclaw-whobot-skill.git
mkdir -p ~/.openclaw/skills/whobot-phonecall-skill
cp openclaw-whobot-skill/SKILL.md openclaw-whobot-skill/release.json ~/.openclaw/skills/whobot-phonecall-skill/
cp -R openclaw-whobot-skill/references ~/.openclaw/skills/whobot-phonecall-skill/
```

重启或重新加载宿主。原先安装过旧版 `openclaw-whobot` 的用户，应先在宿主中停用旧版，避免重复触发。

仓库中的 `openclaw-whobot.skill` 是新版 skill 的 ZIP 安装包，内部目录为 `whobot-phonecall-skill/`。ClawHub 的既有发布版本独立维护，本仓库同步不代表 ClawHub 已更新。

首次使用时按 [SKILL.md](SKILL.md) 和 [安装说明](references/setup.md) 安装或检查官方 `@whobot/cli`：

```bash
npx --yes @whobot/cli@latest install
whobot status --skill 2.0.0
```

本仓库采用单 skill 根目录布局；参考资料中提到的 `skills/whobot-phonecall-skill` 是上游多 skill 仓库的路径，在本仓库对应根目录。

## 使用示例

- 帮我找一个做客户回访的电话数字员工。
- 我想先体验一下这个员工。
- 用这份资料创建员工，或者调整已有员工的话术。
- 上传客户名单，查看外呼进度。

## 仓库内容

- `SKILL.md`、`release.json`、`references/`：电话数字员工 skill 及参考资料。
- `openclaw-whobot.skill`：与上游 skill 文件一致的安装包。
- `docs/`：文档站源码（GitHub Pages），`llms.txt` / `llms-full.txt` 由此发布。
- `mcp-server/`、`references/knowledge.md`、`scripts/sync-knowledge.sh`：保留的旧版知识库 MCP 功能，独立于新版 CLI 流程。

## 旧版知识库 MCP（可选）

```bash
claude mcp add whobot-knowledge python3 /path/to/openclaw-whobot-skill/mcp-server/server.py
```

知识库更新使用 `./scripts/sync-knowledge.sh`，来源为 `whobot-ai/whobot-ai` 的 `openclaw-knowledge.md`。该脚本只更新旧知识库，不同步新版电话 skill。

## 官方入口

[WhoBot 官网](https://whobot.com) · [管理平台](https://work.whobot.com/) · [上游 Skills](https://github.com/whobot-ai/skills)

## License

[MIT](LICENSE)
