import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  site: "https://gach24.github.io/di/",
  base: "/di/",
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
