---
title: 更新与排障
description: 呼波特 Skill 与 @whobot/cli 的安装检查、更新、自检、排障报告和常见错误处理。
---

# 更新与排障

## 自检

对 Agent 说“帮我看看为什么用不了”，Skill 会运行 `whobot doctor`。你也可以自己在终端运行：

```bash
whobot status --skill 2.1.0
whobot doctor --pretty
```

## 常见问题

| 现象 | 处理 |
|---|---|
| `whobot: command not found` | 确认 Node.js 20+ 可用，运行 `npx --yes @whobot/cli@latest install`，新开终端再试 |
| 一句话安装失败 | 确认 Agent 能联网、能运行命令；或按各平台页面手动安装 |
| Windows 提示“此应用的一部分已被阻止” | 先确认是否为智能应用控制拦截，按[Windows 安全拦截处理](windows-security.md)操作 |
| `npx skills` 安装失败 | 安装工具需要 Node.js 22.20+；或改用[手动复制](../install/index.md#命令行安装任何平台) |
| 预检提示需要升级 | 按 Skill 给出的确认卡升级 CLI 或 Skill，然后新开会话 |
| 安装输出 `PREVIOUS_CLI_MISSING` 或 `CREDENTIAL_ORIGIN_MISMATCH` | 原来的程序被清理或服务地址已变。同意后用安装命令加 `--reset-local` 重装，再重新登录一次；员工和数据在服务端不受影响 |
| 显示已登录却不能用 | 说“为什么显示已登录却不能用”，Skill 会查询状态，必要时引导重置 |
| 等待中被宿主打断 | 回复“继续”或“刚才那通怎么样”，Skill 会查询同一个任务，不会重复操作 |
| 验证码错误或过期 | 错误时重新输入正确的验证码；过期时需要重新获取，旧验证码不能再用 |
| 提示操作太频繁（限流） | Skill 会转述系统给出的具体限制，不估计何时解除，也不会反复重试 |
| 提示员工试打资源正在使用 | 本次没有拨出，不代表你有电话没挂断；稍后再试 |
| 真实电话想挂断 | 真实电话和自己拨入的电话目前不能由 Skill 挂断，在电话上直接挂机；只有网页通话能说“挂了吧”结束 |
| 同一句话触发了两个 Skill | 停用旧版 `openclaw-whobot` |

## 更新

- **CLI**：说“CLI 要不要更新”，Skill 运行 `whobot update` 展示当前版本和目标版本，确认后才更新。有正在进行的网页通话时，更新会被拒绝并提示先结束通话。
- **Skill**：用原来的安装渠道更新，例如 `npx skills update`、Claude Code 的 `/plugin`、`openclaw skills` 的更新命令；或重新复制最新文件。更新后新开会话。

## 联系客服

说“我要反馈问题”，Skill 会运行 `whobot support`，把报告放进代码块交给你，并在有客服二维码时一起展示。把这份报告直接发给客服即可。

官网 <https://www.whobot.com> · 管理平台 <https://work.whobot.com/>
