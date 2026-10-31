---
title: DeepSeek Harness 插件
description: DeepSeek Harness 用户使用呼波特插件 @whobot/dsh-agent-whobot，以卡片方式完成数字员工的查看、试打、导入线索与调优。
---

# DeepSeek Harness 插件

DeepSeek Harness 不使用这个 Skill，而是安装呼波特的专用插件 **`@whobot/dsh-agent-whobot`**。插件提供 **WhoBot（呼波特）** 会话预设，用卡片完成登录、浏览数字员工市场、试打、线索导入和调优，不需要安装 `@whobot/cli`。

## 能做什么（0.1.1）

- 用卡片浏览数字员工市场，查看介绍、试听或发起网页试打（需要你点击开始并授权麦克风）。
- 查看账号所属企业，确认切换企业后管理该企业的数字员工。
- 按员工模板选择 CSV / XLSX 线索文件，在本机校验、预览后确认导入。
- 调优助手：先确认平台费用，再逐句调优，跟踪任务进度与复测结果。
- 员工卡上的上岗、解雇等操作逐项确认；上岗或开工可能启动真实拨打并产生费用。
- 站点提供话单能力时，可按线索、员工、日期、意向及接听状态筛选通话记录、查看摘要和手动播放录音。

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
| 安装 | `npx skills add …` / 平台市场 | Harness 插件管理器，npm 包 [`@whobot/dsh-agent-whobot`](https://www.npmjs.com/package/@whobot/dsh-agent-whobot) |
| 适用宿主 | Claude Code、Codex、OpenClaw、WorkBuddy、Cursor 等 | 仅 DeepSeek Harness |

两者使用同一个呼波特账号和服务，员工、线索和余额是同一份数据。

从旧的 `dsh-agent-whobot` 包升级时，先在管理器中移除旧包再安装新的 `@whobot/dsh-agent-whobot`，无需退出账号；避免两个包同时激活同一个 WhoBot 预设。
