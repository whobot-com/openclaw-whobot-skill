---
title: DeepSeek Harness 插件
description: DeepSeek Harness 用户使用呼波特插件 @whobot/dsh-agent-whobot，以卡片方式完成数字员工的查看、试打、导入线索与调优。
---

# DeepSeek Harness 插件

DeepSeek Harness 不使用这个 Skill，而是安装呼波特的专用插件 **`@whobot/dsh-agent-whobot`**。插件提供 **WhoBot（呼波特）** 会话预设，用卡片完成登录、浏览数字员工市场、试打、线索导入和调优，不需要安装 `@whobot/cli`。

## 安装

1. 安装 DeepSeek Harness（插件声明的兼容范围为 `>=0.2.1-rc.2 <0.3.0`，Host Node.js `>=22`）。
2. 打开 Harness 的 **Plugins（插件管理器）**，在安装入口输入：

   ```text
   @whobot/dsh-agent-whobot@latest
   ```

3. 按提示启用，需要时重启 Harness。
4. 新建会话，选择 **WhoBot（呼波特）** 预设。
5. 在账号卡片里用你自己的手机号接收短信并登录。验证码只填在卡片表单中，不要发到聊天里。

## 和 Skill 的区别

| | Skill（本文档） | DeepSeek Harness 插件 |
|---|---|---|
| 交互 | 对话 + 确认卡 / 选择卡 | 对话 + 可点击的业务卡片 |
| 依赖 | `@whobot/cli`（Skill 引导安装） | 插件自带，凭证由 Harness 管理 |
| 适用宿主 | Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等 | 仅 DeepSeek Harness |

两者使用同一个呼波特账号和服务，员工、线索和余额是同一份数据。
