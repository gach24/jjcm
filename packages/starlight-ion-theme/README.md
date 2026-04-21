# Ion

![Ion](./assets/showcase.png)

Ion is a sleek, modern theme for [Starlight](https://starlight.astro.build).

## Features

- Custom Sidebar with icon support
- Footer
- Wide screen layout
- Fully customizable

## Curious?

Check out the [Getting Started Guide](https://louisescher.github.io/starlight-ion-theme/getting-started) to find out more.

## Deply diagram

TU PC                          GITHUB
─────                          ──────
Escribes código
     │
     ├─ git push ──────────►  Recibe push en main
                                    │
                               Actions detecta deploy.yml
                                    │
                               Runner (máquina temporal):
                                 1. Clona repo
                                 2. Instala pnpm + Node
                                 3. pnpm install
                                 4. pnpm build (genera dist/)
                                 5. Copia dist/ a .pages/di/
                                 6. Sube artifact
                                    │
                               GitHub Pages:
                                 Publica en gach24.github.io/jjcm/di/
                                    │
                               ✅ Sitio público actualizado