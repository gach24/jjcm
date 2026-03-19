## Objetivo

Crear una nueva unidad didáctica en Starlight con estructura consistente y lista para crecer.

## Ruta recomendada

```text
src/content/docs/unidades/unidad-XX/index.mdx
```

## Pasos

1. Busca la última unidad existente y calcula el siguiente identificador.
2. Crea la carpeta `unidad-XX`.
3. Añade `index.mdx` con frontmatter mínimo.
4. Escribe el contenido base con objetivos, contenidos, actividades y evaluación.
5. Si la unidad debe aparecer destacada en navegación manual, revisa `astro.config.mjs`.
6. Ejecuta validación técnica.

## Plantilla base

```mdx
---
title: Unidad XX · Título breve
description: Qué aprende el alumnado en esta unidad.
sidebar:
  label: Unidad XX
---

## Objetivos

- Objetivo 1
- Objetivo 2

## Contenidos

- Contenido clave 1
- Contenido clave 2

## Actividades

- Actividad guiada
- Actividad de refuerzo o ampliación

## Evaluación

- Evidencia esperada
- Criterio principal

## Relación con el módulo

- Conecta con [Prácticas](/practicas/)
- Conecta con [Vídeos](/videos/)
```

## Criterios de calidad

- slug secuencial: `unidad-01`, `unidad-02`, etc.;
- título corto y reconocible;
- descripción útil, no vacía;
- estructura suficiente para ampliarse sin rehacer la página.
