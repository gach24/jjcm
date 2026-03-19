## Visión general

El proyecto es un sitio estático docente basado en **Astro** y **Starlight**. La arquitectura debe seguir una idea simple:

- **contenido en `src/content/docs/`**
- **convenciones en `AGENTS.md` y `docs/`**
- **configuración ligera en `astro.config.mjs` y `src/content.config.ts`**
- **reglas/skills del editor derivadas de la documentación portable**

## Capas del proyecto

### 1. Capa portable del repositorio

Contiene el conocimiento que debe sobrevivir aunque se cambie de editor o de agente:

- `AGENTS.md`
- `docs/architecture.md`
- `docs/content-model.md`
- `docs/style-guide.md`
- `docs/workflows/*.md`

### 2. Capa de contenido

Starlight usa `src/content/docs/` como base documental. La estructura docente mínima recomendada es:

```text
src/content/docs/
  index.mdx
  unidades/
    index.mdx
  practicas/
    index.mdx
  videos/
    index.mdx
  proyecto/
    index.mdx
  recursos/
    index.mdx
```

### 3. Capa específica de editor

Cursor consume reglas y skills ubicadas en:

```text
.cursor/rules/
.cursor/skills/
```

Estas piezas no deben contener conocimiento exclusivo que no exista también en la capa portable.

### 4. Capa de validación

La validación mínima del repositorio debe basarse en herramientas ya disponibles:

- `astro check`
- `astro build`

## Decisiones de diseño

### Repo-first

Las instrucciones editoriales y arquitectónicas viven primero en el repositorio. Las reglas del editor solo resumen, enfocan o automatizan.

### Compatibilidad con Starlight

Se mantiene `docsSchema()` y `docsLoader()` para no romper el modelo nativo de Starlight ni inventar colecciones sin necesidad.

### Complejidad contenida

No se añaden componentes, integraciones ni colecciones nuevas mientras el sitio pueda resolverse con Markdown, MDX y configuración estándar.

## Flujo de cambios recomendado

1. Cambiar o crear contenido.
2. Ajustar navegación si el contenido nuevo debe ser visible en sidebar.
3. Documentar la convención si afecta a futuros cambios.
4. Ejecutar validación técnica.

## Qué evitar

- convertir reglas del editor en la única fuente de verdad;
- mezclar contenido docente con documentación operativa del repositorio;
- introducir estructuras profundas antes de necesitarlas;
- dejar restos del starter de Starlight sin intención pedagógica.
