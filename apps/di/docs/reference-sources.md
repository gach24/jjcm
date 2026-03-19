# Reference Sources

## Canonical sources
### Astro
- Source: official documentation
- URL: https://docs.astro.build
- Version policy: use the version installed in package.json
- Use for: routing, content collections, integrations, build config
- Priority: high
- Last reviewed: 2026-03-18

### Starlight
- Source: official documentation
- URL: https://starlight.astro.build
- Version policy: use the version installed in package.json
- Use for: docs structure, frontmatter, sidebar, i18n, components
- Priority: high
- Last reviewed: 2026-03-18

### MDN
- Source: official documentation
- URL: https://developer.mozilla.org
- Version policy: latest stable web platform behavior
- Use for: HTML, CSS, JavaScript, accessibility
- Priority: medium

### TypeScript
- Source: official documentation
- URL: https://www.typescriptlang.org/docs/
- Version policy: use the version installed in package.json
- Use for: types, interfaces, utility types, tsconfig, module typing, component props typing
- Priority: high
- Last reviewed: 2026-03-18

## Rules for agents
- Consult these sources before proposing framework-specific code.
- Prefer official docs over blog posts.
- Match examples to the installed package versions in package.json.
- If sources conflict, prefer the package version used in this repo and the official docs.
- Do not rely on memory for framework APIs when the docs are available.