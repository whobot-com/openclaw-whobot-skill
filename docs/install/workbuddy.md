---
title: WorkBuddy 使用指南
description: 在腾讯 WorkBuddy 中一句话安装呼波特电话数字员工 Skill，并用对话完成找员工、体验通话、创建员工和外呼。也适用于 CodeBuddy。
---

# WorkBuddy 使用指南

WorkBuddy 是腾讯的桌面 AI 助手。装上呼波特 Skill 后，你在 WorkBuddy 里用说话的方式，就能挑选、体验、创建会打电话的 AI 数字员工，并让它给客户外呼。

## 一句话安装

打开 WorkBuddy，新建一个对话，把这句话发给它：

<div class="prompt">请帮我安装这个 Skill：https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill</div>

WorkBuddy 会下载 Skill 并放进自己的技能目录。过程中如果它请你允许下载或运行命令，点“允许”。看到安装完成后，**新建一个对话**再开始使用。

## 开始使用

在新对话里，像和同事说话一样说需求就行：

| 想做的事 | 可以这样说 |
|---|---|
| 了解能做什么 | 呼波特能做什么？ |
| 找现成的员工 | 我们是做少儿英语的，有没有能约家长来试听的电话员工？ |
| 体验一下 | 先用网页和它聊一次。 / 给我打个电话试试。 |
| 做自己的员工 | 这是我们销售打得好的几段录音，帮我做一个我们自己的员工。 |
| 改话术 | 把开场白改成“您好，我是阳光英语的小林”。 |
| 给客户外呼 | 把这份客户名单交给它打，只在工作日白天拨。 |
| 查进度、查余额 | 这批客户打得怎么样了？ / 账户里还有多少钱？ |

WorkBuddy 会用选项卡片让你点选（比如选行业、选员工、确认开始），不用打字。

## 第一次使用会发生什么

1. **准备工具**：WorkBuddy 会安装呼波特官方工具，请你允许它运行命令。
2. **登录**：展示隐私协议和用户协议，问你的手机号和短信验证码。验证码只用于这次登录，WorkBuddy 不会在对话里复述。
3. **开始办事**：登录成功后，它会自动接着做你刚才要求的事，不用再说一遍。

## 体验通话

- **网页通话**：WorkBuddy 会给出一个链接。请在电脑的浏览器里打开，并允许麦克风，然后直接对着电脑说话。通话结束后回到 WorkBuddy，它会告诉你结果。
- **电话试打**：员工会拨打你登录用的手机号；要拨给别人，需要对方提供短信验证码。

## 让员工给客户外呼之前

新做好的员工处于“培训中”，还不能给客户名单拨打。需要先到 [呼波特管理平台](https://work.whobot.com/) 完成企业认证，并让员工上岗。详见[线索外呼](../guide/leads.md)。

## 常见问题

**WorkBuddy 说电脑上没有 Node.js？**
让它帮你安装，或到 [nodejs.org](https://nodejs.org/) 下载长期支持版（LTS）安装后，重新打开 WorkBuddy。

**装好了但说话没反应？**
确认是在安装后**新建**的对话里使用；并确认 WorkBuddy 当前允许运行命令（只能聊天的模式下，它只能回答产品问题）。

**等通话结果时被打断了？**
回复“刚才那通怎么样了”，它会接着查同一通电话，不会重复拨打。

**一句话安装失败？**
可以手动安装：下载 [openclaw-whobot.skill](https://github.com/whobot-com/openclaw-whobot-skill/raw/main/openclaw-whobot.skill)（ZIP 格式，可改后缀为 `.zip` 解压），把里面的 `whobot-phonecall-skill` 文件夹放进：

| 系统 | 目录 |
|---|---|
| Windows | `%USERPROFILE%\.workbuddy\skills\` |
| macOS | `~/.workbuddy/skills/` |

然后新建对话。

## CodeBuddy

CodeBuddy 与 WorkBuddy 是同一套引擎，同样可以把上面那句话发给它安装。命令行安装：

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a codebuddy -y
```
