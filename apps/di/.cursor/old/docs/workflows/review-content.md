## Objetivo

Revisar contenido docente antes de darlo por bueno en términos pedagógicos, editoriales y técnicos.

## Checklist de revisión

### Enfoque docente

- ¿la página tiene objetivo claro?
- ¿se entiende qué debe aprender o hacer el alumnado?
- ¿hay relación explícita con otra parte del módulo?

### Calidad editorial

- ¿el español es claro y natural?
- ¿el título y la descripción dicen algo útil?
- ¿hay secciones demasiado largas o genéricas?
- ¿quedan restos del starter o frases de relleno?

### Modelo de contenido

- ¿la página está en la carpeta correcta?
- ¿el slug sigue la convención del repositorio?
- ¿el frontmatter es mínimo pero suficiente?

### Compatibilidad con Starlight

- ¿la página funciona con Markdown/MDX sin inventar estructura rara?
- ¿si requiere navegación visible se ha revisado `astro.config.mjs`?

### Validación técnica

- ejecutar `npm run check`
- ejecutar `npm run build`

## Resultado esperado de la revisión

La revisión debe terminar con una de estas salidas:

- **aprobado**
- **aprobado con ajustes menores**
- **necesita reescritura parcial**

## Formato recomendado para feedback

```md
- Correcto:
  - Qué está bien y por qué.
- Mejorar:
  - Qué cambiar.
  - Dónde cambiarlo.
  - Qué criterio incumple.
```
