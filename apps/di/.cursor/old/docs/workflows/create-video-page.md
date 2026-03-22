## Objetivo

Crear una página de vídeo que no sea solo un enlace, sino una pieza didáctica útil dentro del sitio.

## Ruta recomendada

```text
src/content/docs/videos/video-slug.mdx
```

## Pasos

1. Define un slug semántico ligado al tema del vídeo.
2. Añade frontmatter con título y descripción útil.
3. Explica qué debe observar el alumnado al ver el vídeo.
4. Relaciona el vídeo con una unidad, práctica o bloque del proyecto.
5. Añade siguiente paso recomendado.

## Plantilla base

```mdx
---
title: Vídeo · Título breve
description: Contexto didáctico del vídeo y aprendizajes esperados.
---

## Qué vas a ver

Resumen de 2 o 3 líneas.

## Ideas clave

- Idea 1
- Idea 2
- Idea 3

## Antes de verlo

- Qué conviene saber

## Después de verlo

- Qué revisar o practicar

## Relación con el módulo

- Unidad relacionada
- Práctica relacionada
```

## Criterios de calidad

- la página debe tener valor aunque el vídeo no se abra;
- evita títulos genéricos como “vídeo 1”;
- no dependas de una plataforma concreta en el slug.
