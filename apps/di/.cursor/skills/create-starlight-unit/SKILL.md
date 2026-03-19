---
name: create-starlight-unit
description: Creates a new didactic unit page for this Astro + Starlight teaching site. Use when the user asks to add a unidad, lesson page, or new teaching block under `src/content/docs/unidades`.
---

# Create Starlight Unit

## Read first

- `AGENTS.md`
- `docs/content-model.md`
- `docs/style-guide.md`
- `docs/workflows/create-unit.md`

## Workflow

1. Inspect existing unit folders in `src/content/docs/unidades/`.
2. Choose the next sequential slug: `unidad-01`, `unidad-02`, etc.
3. Create `src/content/docs/unidades/unidad-XX/index.mdx`.
4. Add frontmatter with `title`, `description` and, if useful, `sidebar.label`.
5. Write these sections:
   - `## Objetivos`
   - `## Contenidos`
   - `## Actividades`
   - `## Evaluación`
   - `## Relación con el módulo`
6. Keep the content in Spanish and pedagogically direct.
7. Update navigation only if the repo uses manual sidebar entries.
8. Validate with `npm run check` and `npm run build` when the change is substantive.

## Output shape

- Unit folder created under `unidades/`
- `index.mdx` ready to extend
- No starter text
