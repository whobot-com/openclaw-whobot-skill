---
title: Codex
description: 在 OpenAI Codex（CLI / IDE 扩展 / App）中安装和使用呼波特电话数字员工 Skill。
---

# Codex

Codex 从 `.agents/skills` 目录加载 Skill：用户级 `~/.agents/skills/`，仓库级为工作目录到仓库根之间的各级 `.agents/skills/`。

## 安装

```bash
npx skills add whobot-ai/skills --skill whobot-phonecall-skill -g -a codex -y
```

或手动复制：

```bash
git clone https://github.com/whobot-ai/skills.git
mkdir -p ~/.agents/skills
cp -R skills/skills/whobot-phonecall-skill ~/.agents/skills/
```

也可以在 Codex 里用内置的 `$skill-installer`，让它从 `whobot-ai/skills` 仓库安装 `skills/whobot-phonecall-skill`。

Codex 通常会自动发现新 Skill；没出现时重启 Codex。

## 调用

- 自动：任务和 Skill 描述匹配时 Codex 会自己选用，例如“有没有能打回访电话的 AI 员工？”
- 手动：输入 `/skills` 选择，或输入 `$whobot-phonecall-skill` 提及它。

## 注意

- **沙箱与网络**：CLI 需要访问呼波特服务并安装 npm 包。如果 Codex 运行在禁止联网的沙箱模式，安装 CLI 和业务命令会失败，请为当前任务放开网络或改用允许联网的审批模式。
- **选择卡**：Codex 有 `request_user_input` 时 Skill 会用它让你点选；没有时会给编号选项。
- **超时**：Skill 会要求等待类命令的超时 ≥ 130 秒。
