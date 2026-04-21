import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightClientMermaid from "@pasqal-io/starlight-client-mermaid";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  site: "https://gach24.github.io/jjcm/di/",
  base: "/jjcm/di/",
  integrations: [
    starlight({
      title: "Desarrollo de Interfaces",
      logo: {
        dark: "./src/assets/logo-dark.png",
        light: "./src/assets/logo-light.png",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/gach24/",
        },
      ],
      sidebar: [
        {
          label: "[home] Home",
          link: "/",
        },
        {
          label: "[list] Getting Started",
          link: "/getting-started/",
        },
        {
          label: "[box] Instalaciones",
          link: "/installations/",
        },
        {
          label: "[lucide:book-open] Unidades",
          items: [
            {
              label: "[lucide:book-open] Introducción",
              collapsed: true, 
              items: [
                {
                  label: "[lucide:braces] JavaScript",
                  autogenerate: {
                    directory: "units/introduction/javascript",
                  },
                },
              ],
            },
            {
              label: "[lucide:book-open] Informes",
              collapsed: true, 
                items: [
                  {
                    label: "[lucide:braces] Despliegue",
                    autogenerate: {
                      directory: "units/reports/environment/",
                    },
                  },
                  {
                    label: "[lucide:braces] App",
                    autogenerate: {
                      directory: "units/reports/sakila-app/",
                    },
                  },
              ],
            },
            {
              label: "[lucide:book-open] Documentación",
              collapsed: true, 
              items: [
                {
                  label: "[lucide:braces] Typedoc",
                  autogenerate: {
                    directory: "units/documentation/typedoc/",
                  },
                },
              ],
            }
          ],
        },
        {
          label: "[changelog] Changelog",
          link: "/changelog/",
        },
        {
          label: "[book] Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: [
        "@fontsource-variable/space-grotesk/index.css",
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/global.css",
      ],
      lastUpdated: true,
      pagination: false,
      plugins: [
        starlightClientMermaid(),
        ion({
          icons: {
            iconDir: "./src/icons",
          },
          footer: {
            text: "©️ Germán Carreño 2026",
            links: [
              {
                text: "Homepage",
                href: "https://lou.gg",
              },
            ],
            icons: [
              {
                name: "github",
                href: "https://github.com/gach24/",
              },
            ],
          },
        }),
      ],
    }),
  ],
  output: "static",
});
