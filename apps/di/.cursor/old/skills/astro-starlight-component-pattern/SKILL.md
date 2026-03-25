---
name: astro-starlight-component-pattern
description: Builds or reviews simple component patterns for Astro + Starlight. Use when the user asks for reusable UI blocks, MDX support components, cards, callouts, or lightweight components in this repo.
---

# Astro Starlight Component Pattern

## Read first

- `AGENTS.md`
- `docs/architecture.md`
- `docs/style-guide.md`

## Workflow

1. Check whether Markdown, MDX, or built-in Starlight components already solve the need.
2. If a custom component is justified, keep it presentational and minimal.
3. Prefer Astro components over client-side islands unless interactivity is truly required.
4. Keep props explicit and low-complexity.
5. Show usage from MDX if the component is content-facing.
6. Validate with `npm run check` and `npm run build`.

## Defaults

- prefer `Card`, `CardGrid` and standard Markdown for static pedagogy
- avoid shipping logic-heavy UI for simple content layouts
