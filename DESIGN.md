# Design System & Tokens Visuales

Este documento define la paleta de colores, la jerarquía tipográfica y las reglas de aplicación visual para el portafolio.

---

## 1. Paleta de Colores

### Color Primario — Violeta Accent (`primary`)

Color principal de marca. Representa acción, tecnología e identidad visual. Se utiliza para elementos clave que deben capturar la atención inmediata del usuario.

- **Base (`500`):** `#7A5CFA`

#### Escala Completa:

| Tone              | Hex Code      | Uso Principal                                                   |
| :---------------- | :------------ | :-------------------------------------------------------------- |
| `primary-50`      | `#F2EFFF`     | Fondos de tarjetas con hover, badges suaves                     |
| `primary-100`     | `#E3DBFF`     | Bordes activos, fondos sutiles de resaltado                     |
| `primary-200`     | `#C6B5FF`     | Elementos de estado secundario o deshabilitados                 |
| `primary-300`     | `#A68CFF`     | Indicadores secundarios, hovers en fondos oscuros               |
| `primary-400`     | `#8F6EFC`     | Hover de botones primarios                                      |
| **`primary-500`** | **`#7A5CFA`** | **Botones primarios, enlaces, texto destacado, bordes activos** |
| `primary-600`     | `#6340E3`     | Active/Pressed state de botones primarios                       |
| `primary-700`     | `#4C2CBD`     | Textos de alto contraste en fondos claros                       |
| `primary-800`     | `#381E96`     | Sombras acentuadas o modos oscuros                              |
| `primary-900`     | `#25126F`     | Elementos estructurales de máximo contraste                     |

---

### Color Secundario — Verde Lima (`secondary`)

Un verde lima optimizado para mejorar la legibilidad y el contraste. Se utiliza para acentos, elementos de apoyo, estados de éxito y componentes secundarios.

- **Base (`500`):** `#A3E862`

#### Escala Completa:

| Tone                | Hex Code      | Uso Principal                                                  |
| :------------------ | :------------ | :------------------------------------------------------------- |
| `secondary-50`      | `#F5FCEF`     | Fondos de alertas de éxito, badges de estado                   |
| `secondary-100`     | `#E7F9D7`     | Fondos de contenedores secundarios                             |
| `secondary-200`     | `#D1F4B0`     | Bordes suaves en tarjetas de características                   |
| `secondary-300`     | `#BBEE88`     | Hover de botones secundarios                                   |
| `secondary-400`     | `#ACEC72`     | Elementos gráficos, iconos de apoyo                            |
| **`secondary-500`** | **`#A3E862`** | **Botones secundarios, separadores, badges, acentos visuales** |
| `secondary-600`     | `#83CC43`     | Active state de botones secundarios                            |
| `secondary-700`     | `#63A12C`     | Texto secundario o iconos sobre fondos claros                  |
| `secondary-800`     | `#477A1C`     | Contraste de texto en componentes verdes                       |
| `secondary-900`     | `#2D520E`     | Títulos en tarjetas de éxito                                   |

---

### Colores Neutros & Fondos

| Token           | Hex Code  | Nombre            | Uso Principal                                             |
| :-------------- | :-------- | :---------------- | :-------------------------------------------------------- |
| `bg-main`       | `#FAF9FE` | Off-White Violet  | Fondo principal del sitio web (blanco con matiz violeta)  |
| `bg-surface`    | `#FFFFFF` | Puro Blanco       | Fondo de tarjetas, modales e inputs para crear elevación  |
| `text-main`     | `#363636` | Dark Charcoal     | Texto principal del cuerpo, títulos e interfaces          |
| `text-muted`    | `#6B6B6B` | Slate Gray        | Subtítulos, fechas, metadatos y descripciones secundarias |
| `border-subtle` | `#EAE7F6` | Light Tint Border | Líneas divisorias y bordes de tarjetas                    |

---

## 2. Guía de Aplicación de Colores

### ¿Cuándo usar cada color?

- **Botones Primarios:** Fondo `primary-500`, texto `#FFFFFF`. Hover en `primary-400`.
- **Botones Secundarios:** Fondo `secondary-500`, texto `#363636`. Hover en `secondary-300` o borde en `primary-500` con fondo `primary-50`.
- **Separadores y Líneas de Sección:** Usar `secondary-500` para acentos llamativos (como debajo de un título) o `border-subtle` (`#EAE7F6`) para división estructural limpia.
- **Badges / Tags de Tecnologías:** Fondo `primary-50` con texto `primary-700`, o fondo `secondary-50` con texto `secondary-800`.
- **Texto Resaltado (Highlighting):** Utilizar `primary-500` en palabras clave dentro de párrafos o mediante un degradado entre `primary-500` y `secondary-500`.

---

## 3. Tipografía

### Fuentes Acentuadas / Títulos — **Space Grotesk**

- **Uso:** Headings (`<h1>`, `<h2>`, `<h3>`), números destacados, títulos de proyectos y botones principales.
- **Pesos:** `Bold (700)` para `<h1>` y `<h2>`; `Medium (500)` para `<h3>` y UI principal.
- **Estilo:** Moderno, geométrico, de corte tecnológico.

### Texto Base / Cuerpo — **Plus Jakarta Sans**

- **Uso:** Párrafos, descripciones de proyectos, menús de navegación, textos secundarios y pie de página.
- **Pesos:** `Regular (400)` para cuerpo; `Medium (500)` para énfasis y etiquetas.
- **Estilo:** Limpio, altamente legible, optimizado para interfaces digitales.

---

## 4. Configuración CSS Global (`styles.css` / Tailwind v4)

A continuación se muestra el código listo para incluir en tu archivo de estilos principal (`src/styles/styles.css` o `global.css`):

```css
@import "tailwindcss";

/* Declaración de Fuentes Locales */
@font-face {
  font-family: "Space Grotesk";
  src: url("/fonts/space-grotesk-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("/fonts/plus-jakarta-sans-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("/fonts/plus-jakarta-sans-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Tokens del Sistema de Diseño (Tailwind v4 @theme) */
@theme {
  --font-heading: "Space Grotesk", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;

  --color-primary-50: #f2efff;
  --color-primary-100: #e3dbff;
  --color-primary-200: #c6b5ff;
  --color-primary-300: #a68cff;
  --color-primary-400: #8f6efc;
  --color-primary-500: #7a5cfa;
  --color-primary-600: #6340e3;
  --color-primary-700: #4c2cbd;
  --color-primary-800: #381e96;
  --color-primary-900: #25126f;

  --color-secondary-50: #f5fcef;
  --color-secondary-100: #e7f9d7;
  --color-secondary-200: #d1f4b0;
  --color-secondary-300: #bbee88;
  --color-secondary-400: #acec72;
  --color-secondary-500: #a3e862;
  --color-secondary-600: #83cc43;
  --color-secondary-700: #63a12c;
  --color-secondary-800: #477a1c;
  --color-secondary-900: #2d520e;

  --color-bg-main: #faf9fe;
  --color-bg-surface: #ffffff;
  --color-text-main: #363636;
  --color-text-muted: #6b6b6b;
  --color-border-subtle: #eae7f6;
}

/* Estilos Base del Documento */
body {
  font-family: var(--font-body);
  background-color: var(--color-bg-main);
  color: var(--color-text-main);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}
```
