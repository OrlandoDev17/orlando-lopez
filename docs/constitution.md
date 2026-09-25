# Project Constitution & SDD Rules — Portafolio Orlando López

Este documento define los estándares inmutables del proyecto. Cualquier agente o
persona debe respetarlos antes de proponer o implementar cambios.

## 1. Principios de Código y Calidad

- **Tipado:** TypeScript en modo estricto (`astro/tsconfigs/strict`) sin relajaciones.
  Prohibido `any` salvo justificación explícita en un comentario; preferir `unknown`
  más narrowing. Tipar de forma explícita el dominio (p. ej. `Project`,
  `HighlightedWords`). Prohibido `@ts-ignore` / `@ts-expect-error` sin justificar.
- **Manejo de Errores:** En el JavaScript de cliente (animaciones GSAP y formulario de
  contacto) usar `try/catch` explícito, sin fallos silenciosos. Ante un error, degradar
  con elegancia (el contenido debe seguir visible y accesible) y respetar
  `prefers-reduced-motion`. No existe backend ni API propia, por lo que no aplica
  manejo de errores de servidor.
- **Persistencia y Caché:** Manejar siempre estados de carga, error y
  sincronización/caché cuando aplique (p. ej. envío del formulario de contacto).
- **Formato y Calidad:** Ejecutar `pnpm check` (`astro check`) sin errores ni warnings
  antes de considerar una tarea terminada.

## 2. Reglas del Protocolo SDD

1. Ninguna tarea se implementa sin un archivo `spec/NNN-[feature]/spec.md` aprobado.
2. Cada spec debe desglosarse en `plan.md` y `tasks.md`.
3. Está prohibido modificar archivos o componentes fuera del alcance indicado en la
   tarea activa de `tasks.md`.

## 3. Límites e Invariantes

- **Build estático:** el sitio debe permanecer 100% estático (SSG) y sin islas de
  framework; el JavaScript se reserva solo para animaciones y el formulario.
- **Contenido centralizado:** todo el contenido editable vive en `src/constants/`.
  Prohibido introducir un CMS o textos hardcodeados fuera de ahí.
- **Diseño:** los cambios visuales y de UI deben respetar los tokens de `DESIGN.md`;
  prohibido inventar colores, tipografías o espaciados fuera del sistema.
- **Accesibilidad:** WCAG 2.2 AA y el soporte de `prefers-reduced-motion` son
  requisitos no negociables.
- **Dependencias:** prohibido instalar dependencias nuevas sin aprobación previa.
