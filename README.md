# Portafolio — Orlando López

Sitio web de portafolio personal de **Orlando López**, desarrollador de software.
Construido como sitio estático con Astro, con animaciones GSAP, Tailwind CSS v4 y
foco en accesibilidad (WCAG 2.2 AA) y rendimiento.

- **Producción:** Orlando López
- **Diseño / tokens:** ver [`DESIGN.md`](./DESIGN.md)

---

## Stack

| Área      | Tecnología                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------------ |
| Framework | [Astro 7](https://docs.astro.build) (SSG, `ClientRouter` / View Transitions)                      |
| Estilos   | [Tailwind CSS v4](https://tailwindcss.com) vía `@tailwindcss/vite`                                |
| Animación | [GSAP 3](https://gsap.com) + [`gsap-presets-kit`](https://www.npmjs.com/package/gsap-presets-kit) |
| Iconos    | [`astro-icon`](https://github.com/natemoo-re/astro-icon) (Lucide + Simple Icons)                  |
| Tipado    | TypeScript (config `astro/tsconfigs/strict`)                                                      |
| Sitemap   | `@astrojs/sitemap`                                                                                |
| Contacto  | [Web3Forms](https://web3forms.com) (AJAX, sin backend)                                            |

## Requisitos

- Node.js `>= 22.12.0`
- [pnpm](https://pnpm.io) (el proyecto usa `pnpm-lock.yaml`)

## Comandos

| Comando            | Acción                                                       |
| :----------------- | :----------------------------------------------------------- |
| `pnpm install`     | Instala dependencias                                         |
| `pnpm dev`         | Servidor de desarrollo en `localhost:4321`                   |
| `pnpm build`       | Genera el sitio de producción en `dist/`                     |
| `pnpm preview`     | Previsualiza el build de producción                          |
| `pnpm check`       | Ejecuta `astro check` (errores/warnings de tipos y `.astro`) |
| `pnpm astro <cmd>` | CLI de Astro (`astro add`, `astro --help`, etc.)             |

### Servidor de desarrollo en segundo plano

Este proyecto usa el modo `--background` de Astro para que el agente/asistente
pueda arrancar el servidor sin bloquear la terminal:

```sh
pnpm astro dev --background   # arranca en segundo plano
pnpm astro dev status         # estado del servidor
pnpm astro dev logs           # logs
pnpm astro dev stop           # detener
```

---

## Estructura del proyecto

```text
/
├── public/
│   ├── avatar/                 # avatar + assets del hero
│   ├── fonts/                  # variable fonts (woff2) + preload en Layout
│   ├── icons/                  # iconos sueltos (p. ej. antigravity.svg)
│   ├── projects/               # capturas por proyecto (webp)
│   ├── apple-touch-icon.png    # iconos generados (ver SEO)
│   ├── favicon.svg / .ico
│   ├── logo.svg
│   ├── og-image.png            # imagen para Open Graph (1200x630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/             # Button, SectionContainer
│   │   ├── layout/             # Layout (head/SEO/a11y) y Header (nav)
│   │   ├── projects/           # tarjetas, carrusel, métricas, retos...
│   │   └── sections/           # Hero, Projects, Workflow, Skills, About, Contact
│   ├── constants/              # CONTENIDO editable (ver abajo)
│   ├── pages/
│   │   ├── index.astro
│   │   └── project/[slug].astro  # rutas dinámicas por proyecto
│   ├── styles/global.css       # tokens de diseño (@theme) + base + a11y
│   └── utils/                  # gsap, dom, counter, highlight, highlighted-words
├── astro.config.mjs
└── tsconfig.json
```

## Editar contenido

Todo el contenido vive en `src/constants/` (no hay CMS):

| Archivo             | Contenido                                                    |
| :------------------ | :----------------------------------------------------------- |
| `hero.constants.ts` | Título, descripción, iconos del hero, stack y `CV_URL`       |
| `projects.ts`       | Proyectos: textos, techs, métricas, imágenes, enlaces, retos |
| `skills.ts`         | Categorías de habilidades                                    |
| `workflow.ts`       | Pasos del flujo de trabajo                                   |
| `about.ts`          | Secciones "Sobre mí" y logros                                |
| `contact.ts`        | Canales de contacto y textos                                 |

### Añadir o editar un proyecto

1. Coloca las imágenes en `public/projects/<nombre>/` en formato `.webp`
   (miniatura en `public/projects/<nombre>-thumbnail.webp`).
2. Añade una entrada en `src/constants/projects.ts` respetando la interfaz
   `Project` (`slug`, `title`, `thumbnail`, `images`, `tagline`, `summary`,
   `techs`, `metrics`, `before`, `after`, `features`, `challenges`, `links`...).
3. La ruta `/project/<slug>/`, el sitemap, las tarjetas y el JSON-LD se generan
   automáticamente.

> `tagline` se usa como **meta description** (procura ~120-155 caracteres).
> `summary` es el texto largo visible en la página.

---

## SEO

- **Sitemap automático:** `@astrojs/sitemap` genera `sitemap-index.xml` /
  `sitemap-0.xml` en cada build. `public/robots.txt` los referencia. No editar a mano.
- **Open Graph / Twitter:** `Layout.astro` publica `og:image` y `twitter:image`.
  - La imagen global es `public/og-image.png` (1200x630).
  - Cada página de proyecto reutiliza su thumbnail como `og:image`.
- **Datos estructurados (JSON-LD):** `Person` + `WebSite` en todas las páginas;
  `CreativeWork` + `BreadcrumbList` en las páginas de proyecto.
- **Canonical / idioma:** `rel="canonical"` autorreferencial y `<html lang="es">`.

### Regenerar `og-image.png` y `apple-touch-icon.png`

Ambas se generan con navegador (Playwright) a partir de un HTML temporal servido
localmente. Si cambian la marca o el avatar:

1. Levanta `pnpm dev`.
2. Crea un HTML `1200x630` en `public/` que use las fuentes de `/fonts` y
   `/avatar/avatar.webp`, y otro `180x180` con `/logo.svg`.
3. Captura con Playwright a `public/og-image.png` y `public/apple-touch-icon.png`.
4. Elimina los HTML temporales y vuelve a compilar.

## Accesibilidad

- Objetivo **WCAG 2.2 AA**. Incluye: enlace "Saltar al contenido", landmarks con
  nombre accesible, `aria-current` en la navegación, gestión de foco en el
  lightbox del carrusel y control de pausa del autoplay.
- **Movimiento reducido:** todas las animaciones GSAP se omiten o se resuelven
  sin movimiento cuando el sistema declara `prefers-reduced-motion: reduce`
  (ver `src/utils/gsap.ts` y `src/styles/global.css`).
- **Contraste:** los textos verdes usan `secondary-700/800` (no `secondary-500/600`)
  sobre fondos claros para cumplir AA.

## Rendimiento

- Imágenes en WebP, `loading="lazy"` bajo el pliegue y `fetchpriority="high"` en
  el LCP.
- Fuentes variables con `font-display: swap` y `preload`.
- Sin islas de framework: JavaScript solo para las animaciones y el formulario.

## Despliegue

El build es 100% estático (`dist/`). Publica `dist/` en cualquier hosting
estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages...). Asegúrate de que
el dominio final coincida con `site` en `astro.config.mjs`
(`https://orlandolopez.dev`), ya que alimenta canonical, sitemap y OG.
