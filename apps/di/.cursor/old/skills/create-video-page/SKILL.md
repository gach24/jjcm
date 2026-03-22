---
name: create-video-page
description: Creates a contextualized video page in the teaching site. Use when the user asks to add a video summary, screencast page, recorded class page, or learning video under `src/content/docs/videos`.
---

# Create Video Page

## Read first

- `AGENTS.md`
- `docs/content-model.md`
- `docs/style-guide.md`
- `docs/workflows/create-video-page.md`

## Workflow

1. Choose a semantic slug based on the topic, not the platform.
2. Create `src/content/docs/videos/video-slug.mdx`.
3. Add frontmatter with a useful `title` and `description`.
4. Write:
   - `## Qué vas a ver`
   - `## Ideas clave`
   - `## Antes de verlo`
   - `## Después de verlo`
   - `## Relación con el módulo`
5. Ensure the page is useful even without opening the external video.
6. Link to related units or practices when they exist.
7. Validate if the change affects navigation or structure.

## Goal

The page must behave like learning material, not like a bare link dump.
