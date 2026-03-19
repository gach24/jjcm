---
name: repo-audit-for-cursor
description: Audits this repository to ensure it is optimized for Cursor without losing portability to other editors and agents. Use when preparing the repo for AI workflows, checking rules and skills, or reviewing repo-first documentation quality.
---

# Repo Audit for Cursor

## Audit goal

Verify that:

- the portable layer exists and is the main source of truth;
- Cursor rules and skills derive from that layer;
- Astro + Starlight structure stays simple and maintainable;
- validation scripts are present and usable.

## Workflow

1. Inspect `AGENTS.md` and `docs/`.
2. Inspect `.cursor/rules/` and `.cursor/skills/`.
3. Detect knowledge that exists only in Cursor-specific files.
4. Check `src/content/docs/`, `src/content.config.ts`, `astro.config.mjs`, and `package.json`.
5. Propose or implement the minimum fixes.
6. Run available validation commands if structure or config changed.

## Deliverable

Return:

- initial situation
- missing or weak pieces
- changes made
- remaining risks
