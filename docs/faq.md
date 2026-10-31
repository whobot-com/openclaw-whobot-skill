---
title: 常见问题
description: 关于呼波特电话数字员工 Skill 的常见问题：费用、账号、平台支持、数据与安全。
---

# 常见问题

### 安装 Skill 要钱吗？

不要。Skill 和 CLI 都免费，采用 MIT 许可。体验、创建、外呼等业务按呼波特的收费规则计费，每次收费前都会给你看确认卡。

### 一定要有呼波特账号吗？

问产品、看介绍不需要。查看员工、体验通话、创建员工等需要登录，Skill 会在需要时引导你用手机号登录。

### 我用的工具不在列表里，能用吗？

只要它支持 Agent Skills、能执行本机命令、命令超时可以 ≥ 130 秒，就能用。把 `whobot-phonecall-skill` 文件夹放进它的 skills 目录即可，见[其他 Agent 工具](install/other-agents.md)。

### 只能聊天的网页版 AI 能用吗？

只能回答产品问题。业务操作需要执行 `@whobot/cli`。

### 员工和数据存在哪里？

都在呼波特服务端。换电脑、重装或重置本机账号都不影响；Skill、CLI 和 DeepSeek Harness 插件看到的是同一份数据。

### 为什么员工建好了不能外呼？

新员工处于培训中，需要先在[管理平台](https://work.whobot.com/)完成企业认证并让员工上岗。见[线索外呼](guide/leads.md)。

### 能看每个号码的拨打结果吗？

暂不支持，目前只能看线索包的整包汇总。

### 会不会自动帮我打电话或扣费？

不会。真实拨打、收费、上传客户资料都要你明确同意；结果不确定时 Skill 只查询，不重复操作。

### 新版和旧版 openclaw-whobot 有什么不同？

旧版只能基于知识库回答产品问题；新版 2.0 能实际完成找员工、体验、创建、调优和外呼。两个同时启用会重复触发，请停用旧版。

### 访问 GitHub 慢或打不开怎么办？

Skill 也发布在 ModelScope 魔搭：<https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill>。可以对 Agent 说“请帮我从 https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill 安装这个 Skill”，或在终端运行 `npx skills add https://modelscope.cn/skills/WhoBot/whobot-phonecall-skill`。

### 去哪里反馈问题？

对 Agent 说“我要反馈问题”，把生成的排障报告发给客服；或在 [GitHub](https://github.com/whobot-com/openclaw-whobot-skill/issues) 提 issue（不要贴验证码、Token、完整手机号和客户资料）。
