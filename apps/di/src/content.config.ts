import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

/** Campos de frontmatter propios (BOE / metadatos de página); todo opcional para no forzar páginas Starlight genéricas. */
const docPageExtendSchema = z.object({
  evaluations: z
    .array(
      z.object({
        id: z.string(),
        statement: z.string(),
        criteria: z.array(z.string()),
        contents: z.array(z.string()).optional(),
      }),
    )
    .optional(),
  author: z
    .object({
      name: z.string(),
      email: z.string().email().optional(),
      url: z.url().optional(),
      image: z.url().optional(),
      social: z
        .array(
          z.object({
            name: z.string(),
            url: z.url(),
          }),
        )
        .optional(),
    })
    .optional(),
  date: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: docPageExtendSchema }),
  }),
};
