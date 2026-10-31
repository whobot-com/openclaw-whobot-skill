---
title: 五分钟上手
description: 一句话安装呼波特电话数字员工 Skill：把一句话发给 WorkBuddy、Claude Code、Codex 等 Agent，它会自己装好，然后直接开始用。
---

# 五分钟上手

不用打开终端，也不用记命令。复制下面这句话，发给你正在用的 AI Agent（WorkBuddy、Claude Code、Codex、OpenClaw、Cursor 都可以），就能装好。

## 第一步：一句话安装

点代码框右上角的“复制”，粘贴到 Agent 的对话框发送：

```text
请帮我安装这个 Skill：https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill
```

Agent 会自己下载并放到正确的位置。装好后，**新开一个对话**让它生效。

> 注意：Agent 安装时可能会请你允许它下载文件、运行命令，点“允许”即可。电脑上需要有 Node.js；没有的话 Agent 会提示你，按提示安装或直接让它帮你装。

## 第二步：说第一句话

在新对话里说：

```text
呼波特能做什么？
```

Agent 会介绍能做的事。接着可以直接说你的需求，例如：

```text
我是做口腔诊所的，想找一个能邀约老客户到店的电话数字员工，先让我体验一下。
```

## 第三步：按提示完成第一次使用

第一次办事时，Agent 会按顺序带你完成：

1. **准备工具**：自动安装呼波特官方工具，可能请你再点一次“允许”。
2. **登录**：给你看隐私协议和用户协议，问手机号，再问短信验证码。
3. **体验通话**：推荐合适的数字员工，给出网页通话链接。点开链接、允许麦克风，就能直接和它对话；结束后 Agent 告诉你结果。

从这里开始都是用说的：想做自己的员工、改话术、给客户外呼，直接告诉 Agent。涉及费用或真实拨打时，它会先给你看确认卡，你同意后才执行。

## 接下来

- 用 WorkBuddy：[WorkBuddy 使用指南](install/workbuddy.md)
- 想知道还能说什么：[使用指南](guide/find-benchmark.md)
- 装不上、用不了：[更新与排障](reference/troubleshooting.md)

## 附：用命令安装（开发者）

习惯命令行的话，也可以在终端运行（需要 Node.js 22.20+）：

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -y
```

各平台的安装目录和手动方式见[平台总览](install/)。
