---
title: 版本与发布渠道
description: 呼波特电话数字员工 Skill 的版本号含义、各发布渠道与仓库关系。
---

# 版本与发布渠道

## 当前版本

| 项目 | 值 |
|---|---|
| Skill 文件版本（`SKILL.md` / `release.json`） | 2.0.6 |
| CLI 协议 | 2 |
| CLI 包 | `@whobot/cli`，渠道 `latest`，Node.js ≥ 20 |
| ClawHub 发布版本 | 独立发布，以各条目页面显示的已上线版本为准 |

Skill 文件版本和 ClawHub 发布版本分别管理：ClawHub 每次上传都需要新的版本号，文件内容不变时也会递增。

## 渠道

| 渠道 | 地址 | 说明 |
|---|---|---|
| GitHub 合集仓库（主源） | <https://github.com/whobot-ai/skills> | 所有 WhoBot Skill；`npx skills`、Claude Code 插件市场从这里安装 |
| GitHub 专用仓库 | <https://github.com/whobot-com/openclaw-whobot-skill> | 只含电话 Skill（根目录），附 `.skill` 安装包、旧版知识库 MCP 与本文档 |
| ClawHub 组织版 | <https://clawhub.ai/whobot/whobot-phonecall-skill> | `openclaw skills install @whobot/whobot-phonecall-skill` |
| ClawHub 个人版 | <https://clawhub.ai/whobot-ai/whobot-phonecall-skill> | 与组织版同源 |
| ModelScope 魔搭 | <https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill> | 组织 WhoBot 发布，从合集仓库自动同步；`npx skills add https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill` |
| skills.sh | <https://www.skills.sh/whobot-ai/skills/whobot-phonecall-skill> | 以 GitHub 为源，按安装记录收录 |

## 历史

- **2.0.6**（2026-11）：同步上游新版，新增个人助理标杆代拨（如替用户给餐厅打电话订位），支持调整员工状态（上岗、开工、休息、下岗培训、解雇），电话试打受理后等待并展示通话摘要、完整文字对话与录音；公司资料合并进产品介绍，介绍类问题不再触发 CLI 预检。

- **2.0.5**（2026-11）：同步上游新版，支持参照本企业已有员工创建员工，新增用词与费用说明，线索上传回执即导入结果，补充 Windows 安全拦截处理、自有员工试打计费与打给客户的说明。

- **2.0.4**（2026-11）：同步上游新版，补充公司资料、登录与通话体验流程，以及活动网页通话阻止升级时的恢复说明。

- **2.0.0**（2026-10）：改为由官方 CLI `@whobot/cli` 驱动，协议 2；支持找标杆、网页 / 电话体验、创建与调优员工、线索外呼、账号与余额。Skill 名改为 `whobot-phonecall-skill`。
- **1.x**：`openclaw-whobot`，基于知识库的产品问答 Skill（含可选的知识库 MCP），已由 2.0 取代。
