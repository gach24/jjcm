---
name: create-practice-guide
description: Creates a practice guide page for this teaching repo. Use when the user asks for a práctica, lab, exercise guide, deliverable instructions, or hands-on activity under `src/content/docs/practicas`.
---

# Create Practice Guide

## Read first

- `AGENTS.md`
- `ai/architecture/content-model.md`
- `ai/architecture/style-guide.md`
- `ai/workflows/create-practice.md`

## Workflow

1. Inspect existing practice pages in `src/content/docs/practicas/`.
2. Choose the next sequential slug: `practica-01`, `practica-02`, etc.
3. Create the new `.mdx` page.
4. Include:
   - `## Objetivo`
   - `## Requisitos previos`
   - `## Desarrollo`
   - `## Entregables`
   - `## Criterios de revisión`
   - `## Ampliación opcional`
5. Make deliverables explicit and verifiable.
6. Link the related unit or video when relevant.
7. Validate with `npm run check` and `npm run build` when finished.

## Anti-patterns

- vague titles
- hidden deliverables
- theory-heavy pages presented as practice guides
