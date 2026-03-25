## Repository Purpose

This repository contains the teaching site for the **Desarrollo de Interfaces** module in vocational education, built with **Astro + Starlight**.

The professional module **0488 — Desarrollo de interfaces** follows the **official Spanish FP curriculum** established in **Real Decreto 405/2023** (catálogo de títulos de Formación Profesional). The teaching extract used in this repository is identified as **BOE-A-2023-13221** and is stored at **`fp/boe/modulo_0488_desarrollo_de_interfaces_boe.pdf`**. Use that file for canonical wording of **resultados de aprendizaje**, **criterios de evaluación**, and scope when authoring or tagging didactic content.

- The default language for content and functional documentation is **Spanish**.
- The priority is **repo-first**: important knowledge should live here before it lives in editor rules.
- Cursor consumes this knowledge base; it is not the source of truth.

## Source of Truth

When there is doubt or a conflict between instructions:

1. `AGENTS.md`
2. `ai/` (context, rules, promps, workflows, architecture)
3. `docs/` (architecture, content-model, style-guide, workflows)
4. editor rules or skills

For **curriculum alignment** (learning outcomes, evaluation criteria, BOE wording): prefer `fp/boe/modulo_0488_desarrollo_de_interfaces_boe.pdf` over informal notes. It does not replace legal advice, but it is the canonical curriculum reference in this repo.

## Documentation Policy

Before making framework-specific changes, consult:

- `aocs/reference-sources.md`
- `docs/architecture.md`
- `docs/content-model.md`

Use official documentation first.
Match recommendations to installed dependency versions.
Do not invent APIs when docs are available.

## Site Goal

The site should serve as a clear, maintainable, and pedagogically useful teaching space for:

- the module landing page
- didactic units
- guided practice work
- videos with teaching context
- a final or integrative project
- supporting resources

## Operational Principles

- Make **small, coherent changes**.
- **Do not overwrite** content or configuration without reading what already exists.
- **Do not duplicate** documentation: if a convention already exists, extend it or link to it.
- **Do not add dependencies** unless there is a clear technical need.
- Maintain **Starlight compatibility** and avoid premature complexity.
- Use custom components only when Markdown, MDX, and native Starlight components are not enough.
- If you introduce a new convention that affects the project, document it in `docs/`.

## Canonical Structure

```text
src/content/docs/
  index.mdx
  unidades/
  practicas/
  videos/
  proyecto/
  recursos/
ai/
  architecture/  # Mirror of docs/ for agents
  context/       # Pedagogical and project context
  promps/        # Prompt templates (e.g. generate-section)
  rules/         # Global rules (e.g. 00-global-course-rule)
  templates/     # MDX and Frontmatter templates
  workflows/     # Step-by-step guides for AI tasks
docs/
  architecture.md
  content-model.md
  style-guide.md
  workflows/
.cursor/
  rules/
  skills/
```

## Editorial Model

- `index.mdx`: module landing page and general context.
- `unidades/`: unit pages and, when needed, related subpages.
- `practicas/`: work guides with deliverables and assessment criteria.
- `videos/`: video pages with a teaching purpose.
- `proyecto/`: framework for the final project.
- `recursos/`: references, tools, and supporting materials.

Naming, frontmatter, and structure details are defined in `docs/content-model.md`.

## Rules for Agents

Before editing:

1. inspect the existing structure;
2. check whether the convention is already documented;
3. change only what is necessary;
4. validate with the repo scripts if the change warrants it.

After editing:

1. review `package.json` if you touched workflows;
2. run `npm run check` and `npm run build` when you affect content, configuration, or structure;
3. fix reasonable issues before closing the task.

## Quality Criteria

- natural, clear, pedagogical Spanish;
- where content maps to the official module, **alignment with RAs and criteria** in `fp/boe/modulo_0488_desarrollo_de_interfaces_boe.pdf`;
- consistent titles and slugs;
- minimal but useful frontmatter;
- navigation that is easy to understand in Starlight;
- no leftover starter content once it stops adding teaching value.

## AI Specifics

- **No YAML frontmatter in Skills**: Las skills en `.cursor/skills/` no necesitan bloque `---`. Su descripción se gestiona mediante el sistema de Cursor.
- **Project Context**: Al generar ejemplos, consulta `ai/context/03-project-context.md`. Actualmente, el contexto preferente es **usuarios** (otros contextos como productos o pedidos están comentados y deben evitarse por ahora).
- **Pedagogical Rules**: Sigue `ai/rules/00-global-course-rule.md`. No generes teoría aislada; conecta siempre con la construcción de interfaces reales y el ecosistema React.
- **Prompting**: Usa las plantillas en `ai/promps/` (nota: se mantiene el nombre `promps` por consistencia en el repo) para mantener un tono y estructura uniformes.
