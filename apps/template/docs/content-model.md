## Objetivo

Definir una estructura de contenido compatible con Starlight, fácil de mantener y clara para agentes y autores humanos.

## Colección activa

El proyecto usa la colección `docs` de Starlight definida en `src/content.config.ts`.

No se crean colecciones adicionales salvo necesidad real.

## Estructura base

```text
src/content/docs/
  index.mdx
  unidades/
    index.mdx
    unidad-01/
      index.mdx
  practicas/
    index.mdx
    practica-01.mdx
  videos/
    index.mdx
    video-introduccion-a-astro.mdx
  proyecto/
    index.mdx
  recursos/
    index.mdx
```

## Tipos de página

### Portada

Ruta: `src/content/docs/index.mdx`

Uso:

- presentar el módulo;
- explicar la organización del sitio;
- enlazar a unidades, prácticas, vídeos, proyecto y recursos.

### Unidad didáctica

Ruta recomendada: `src/content/docs/unidades/unidad-XX/index.mdx`

Convenciones:

- slug estable y secuencial: `unidad-01`, `unidad-02`, etc.;
- una unidad por carpeta para permitir subpáginas futuras;
- incluye objetivos, contenidos, actividades y evaluación.

### Práctica

Ruta recomendada: `src/content/docs/practicas/practica-XX.mdx`

Convenciones:

- secuencia clara: `practica-01`, `practica-02`, etc.;
- foco en tarea, entregables y criterios de revisión;
- si una práctica crece mucho, puede migrar a carpeta propia.

### Vídeo

Ruta recomendada: `src/content/docs/videos/video-slug.mdx`

Convenciones:

- el slug describe el tema, no la plataforma;
- la página contextualiza el vídeo y qué debe aprenderse al verlo;
- incluye relación con unidad o práctica cuando aplique.

### Proyecto

Ruta recomendada: `src/content/docs/proyecto/index.mdx`

Uso:

- describir objetivo integrador;
- definir entregables, hitos y criterios.

### Recursos

Ruta recomendada: `src/content/docs/recursos/index.mdx`

Uso:

- agrupar enlaces, herramientas, bibliografía y referencias.

## Frontmatter recomendado

Mínimo:

```yaml
---
title: Título visible
description: Resumen corto y útil para la página
---
```

Opcional según el caso:

```yaml
---
title: Unidad 01 · Maquetación base
description: Introducción a la estructura visual y al layout de interfaces.
sidebar:
  label: Unidad 01
tableOfContents:
  minHeadingLevel: 2
---
```

## Convenciones de naming

- carpetas y slugs en **minúsculas**
- separar palabras con **guiones**
- usar prefijos solo cuando aporten orden docente:
  - `unidad-01`
  - `practica-03`
  - `video-flexbox-layouts`

## Criterios de modelado

- prioriza páginas simples antes que jerarquías profundas;
- crea subcarpetas solo si una unidad necesita materiales hijos;
- mantén alineación entre slug, título corto y sidebar;
- evita mezclar borradores internos con contenido público.
