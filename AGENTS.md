# AGENTS.md — Portafolio Orlando López

## Proyecto

Sitio web de portafolio personal de Orlando López, desarrollador de software full-stack.
Es un sitio 100% estático (SSG) construido con Astro 7, Tailwind CSS v4 y animaciones GSAP,
dirigido a reclutadores y clientes freelance. Todo el contenido editable vive en archivos
TypeScript dentro de `src/constants/` (no hay CMS ni backend).

## Comandos

- Ejecutar (dev): `pnpm dev` — servidor en `localhost:4321`
- Dev en segundo plano: `pnpm astro dev --background` (gestionar con `pnpm astro dev status`, `pnpm astro dev logs` y `pnpm astro dev stop`)
- Tests: no hay suite automatizada; validar con `pnpm check`
- Lint/formato: `pnpm check` (`astro check`: tipos y errores en archivos `.astro`)
- Build: `pnpm build` — salida estática en `dist/`
- Previsualizar build: `pnpm preview`

## Estilo y convenciones

- **Código:** en inglés — identificadores, variables, IDs, nombres de componentes y archivos.
- **Documentación, commits y comentarios:** en español.
- **Estructura y nombres:** componentes Astro en `PascalCase` (`Hero.astro`,
  `SectionContainer.astro`); constantes y utilidades en `camelCase`; rutas en `kebab-case`
  (`src/pages/project/[slug].astro`).
- **Estilo:** imitar el código existente; no añadir comentarios salvo que aporten contexto no obvio.

## Reglas

- Lee `docs/constitution.md` y la spec activa (`spec/NNN-.../spec.md`) antes de tocar o analizar código.
- Si la tarea incluye cambios visuales o componentes UI, lee obligatoriamente `DESIGN.md` y respeta sus tokens.
- No instales dependencias adicionales sin consultar previamente.
- Todo el contenido editable vive en `src/constants/`; no introducir CMS ni textos hardcodeados fuera de ahí.
- Accesibilidad WCAG 2.2 AA y `prefers-reduced-motion` son requisitos no negociables.
- Mantener el build 100% estático y sin islas de framework (JS solo para animaciones y formulario).

## Al terminar cualquier tarea

- Ejecutar la validación (`pnpm check`) para garantizar que no hay errores de tipos ni regresiones.
- Ejecutar `pnpm build` cuando el cambio afecte a rutas, contenido o configuración.

## Documentación de Astro

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
