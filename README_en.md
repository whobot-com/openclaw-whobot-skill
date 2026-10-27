[简体中文](README.md) | [English](README_en.md)

# WhoBot AI Phone Agent Skill

Synced from [`whobot-phonecall-skill`](https://github.com/whobot-ai/skills/tree/main/skills/whobot-phonecall-skill). Skill version **2.0.0**, CLI protocol **2**.

Discover agents by industry and task, try browser voice or real phone calls, create and tune agents, upload leads, check outbound progress, and manage account access. Available operations and pricing depend on product references and system responses. Follow the skill confirmation flow for real calls and paid actions.

## Install

Requires Node.js 20+ with npm and npx.

```bash
npx skills add whobot-com/openclaw-whobot-skill -g -y
```

Manual OpenClaw installation:

```bash
git clone https://github.com/whobot-com/openclaw-whobot-skill.git
mkdir -p ~/.openclaw/skills/whobot-phonecall-skill
cp openclaw-whobot-skill/SKILL.md openclaw-whobot-skill/release.json ~/.openclaw/skills/whobot-phonecall-skill/
cp -R openclaw-whobot-skill/references ~/.openclaw/skills/whobot-phonecall-skill/
```

Restart or reload your host. Disable an existing legacy `openclaw-whobot` installation to avoid duplicate triggers.

`openclaw-whobot.skill` is the updated ZIP package containing `whobot-phonecall-skill/`. ClawHub releases are maintained separately; this repository sync does not update ClawHub.

Follow [SKILL.md](SKILL.md) and [setup](references/setup.md) to install or check the official CLI:

```bash
npx --yes @whobot/cli@latest install
whobot status --skill 2.0.0
```

This repository stores the skill at its root. References to `skills/whobot-phonecall-skill` refer to the upstream multi-skill repository layout.

## Contents

- `SKILL.md`, `release.json`, and reference documents: the phone agent skill.
- `openclaw-whobot.skill`: packaged upstream skill files.
- `mcp-server/`, `references/knowledge.md`, and `scripts/sync-knowledge.sh`: preserved legacy knowledge MCP integration, independent of the new CLI workflow.

## Optional legacy knowledge MCP

```bash
claude mcp add whobot-knowledge python3 /path/to/openclaw-whobot-skill/mcp-server/server.py
```

Run `./scripts/sync-knowledge.sh` to update the legacy knowledge document from `whobot-ai/whobot-ai`. This script does not sync the new phone agent skill.

[WhoBot](https://whobot.com) · [Console](https://work.whobot.com/) · [Upstream](https://github.com/whobot-ai/skills)

## License

[MIT](LICENSE)
