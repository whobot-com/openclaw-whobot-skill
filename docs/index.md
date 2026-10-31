---
title: 概览
description: 呼波特（WhoBot）AI 电话数字员工 Skill：在 Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等 Agent 工具里，用自然语言挑选、体验、创建和调优会打电话的数字员工。
---

# 呼波特电话数字员工 Skill

<p class="lead">在你常用的 AI Agent 工具里，用一句话找到、体验、创建并调优会接打真实电话的 AI 数字员工。</p>

`whobot-phonecall-skill` 是呼波特（WhoBot）官方 Agent Skill，当前版本 **2.0.0**，配套官方命令行工具 `@whobot/cli`（协议 **2**）。Skill 本身是纯文本说明（`SKILL.md` + 参考资料），由宿主 Agent 读取后调用 CLI 完成业务操作；账号、员工和费用都在呼波特服务端。

## 能做什么

| 你说 | Skill 做的事 |
|---|---|
| “做口腔到店邀约的，有现成的员工吗？” | 按行业和电话目标找标杆数字员工，挑最贴近的 3 个以内推荐 |
| “先体验一下这个员工。” | 发起网页语音通话，或确认后拨一通真实电话试打 |
| “用这几段录音做一个我们自己的员工。” | 用录音、资料、标杆或一段业务描述创建专属员工，等待生成并雇佣 |
| “把开场白改成……” | 调优培训中的员工，查看版本、撤销到上一版 |
| “这批客户交给它打，工作日白天拨。” | 检查表头、确认时段与去重后上传线索，查询和暂停线索包 |
| “账户里还有多少钱？” | 登录、退出、重置本机账号，查询企业总余额 |

涉及费用、真实拨打、上传客户资料的操作，都会先给你看确认卡，你同意后才执行。详见[确认、费用与隐私](reference/safety.md)。

## 从这里开始

<ul class="cards">
  <li><a href="quickstart.html"><strong>五分钟上手</strong><span>一句话安装，说第一句话，完成第一次体验。</span></a></li>
  <li><a href="install/workbuddy.html"><strong>WorkBuddy 使用指南</strong><span>在 WorkBuddy 里安装和使用，从找员工到外呼。</span></a></li>
  <li><a href="install/"><strong>选择你的平台</strong><span>WorkBuddy、Claude Code、Codex、OpenClaw、Cursor 等平台说明。</span></a></li>
  <li><a href="guide/find-benchmark.html"><strong>使用指南</strong><span>找标杆、体验、创建、调优、外呼，每一步会发生什么。</span></a></li>
  <li><a href="reference/protocol.html"><strong>工作原理</strong><span>Skill 如何驱动 CLI，协议 v2 的动作与确认机制。</span></a></li>
</ul>

## 一句话安装

把这句话发给你正在用的 AI Agent（WorkBuddy、Claude Code、Codex、OpenClaw、Cursor 等），它会自己装好：

```text
请帮我安装呼波特的电话 Skill https://github.com/whobot-com/openclaw-whobot-skill
```

装好后新开一个对话，说“呼波特能做什么”。第一次办事时，Agent 会引导你准备工具和用手机号登录。详见[五分钟上手](quickstart.md)；WorkBuddy 用户看 [WorkBuddy 使用指南](install/workbuddy.md)。

## 适用与不适用

- 适用：客户回访、到店 / 试听 / 看房邀约、通知提醒、线索筛选与加微、电话销售、热线接听、满意度回访等**真实电话**场景。
- 不适用：只需要网站文字客服、聊天机器人或纯语音合成。
- 只服务符合中国法律法规和社会主流价值观的合法业务。正式业务能力、费用和可用操作以产品资料及系统返回为准。

## 相关入口

- 官网：<https://www.whobot.com>　管理平台（员工上岗、企业认证）：<https://work.whobot.com/>
- Skill 源码（合集仓库）：<https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill>
- 专用仓库与本文档：<https://github.com/whobot-com/openclaw-whobot-skill>
- ClawHub：<https://clawhub.ai/whobot/whobot-phonecall-skill>　ModelScope 魔搭：<https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill>
- 给 AI 读的索引：[llms.txt](llms.txt) · [llms-full.txt](llms-full.txt) · 公司与产品全量介绍 [whobot.com/llms.txt](https://www.whobot.com/llms.txt)（GitHub 同步：[whobot-com/llms.txt](https://github.com/whobot-com/llms.txt)）
- DeepSeek Harness 用户：安装插件 [`@whobot/dsh-agent-whobot`](install/deepseek-harness.md)
