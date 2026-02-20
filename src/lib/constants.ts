import {
  Antigravity,
  Astro,
  Bun,
  Dribbble,
  Express,
  Figma,
  Git,
  GitColor,
  GitHub,
  Gsap,
  JavaScript,
  MySQL,
  n8n,
  Nextjs,
  Nodejs,
  NodejsColor,
  PostgreSQL,
  Railway,
  React,
  ReactColor,
  Render,
  TailwindCSS,
  TypeScript,
  TypeScriptColor,
  Vercel,
} from "@/components/ui/Brands";
import type {
  navItem,
  brandItem,
  Project,
  Workflow,
  Skill,
  Principle,
  Stat,
} from "./types";
import {
  Brain,
  Chain,
  Code,
  Document,
  HandShake,
  Link,
  NoteBook,
  Palette,
  Puzzle,
  Right,
  Rocket,
  SearchCode,
  Settings,
  Test,
} from "@/components/ui/Icons";

export const NAV_ITEMS: navItem[] = [
  {
    label: "Inicio",
    href: "#",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Habilidades Técnicas",
    href: "#skills",
  },
  {
    label: "Sobre Mí",
    href: "#about",
  },
];

export const BRANDS_LIST: brandItem[] = [
  {
    name: "React",
    icon: React,
  },
  {
    name: "Next.js",
    icon: Nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },
  {
    name: "Node.js",
    icon: Nodejs,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "Dribbble",
    icon: Dribbble,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "Astro",
    icon: Astro,
  },
  {
    name: "n8n",
    icon: n8n,
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    title: "Worklyst - Ecosistema Inteligente de Gestión de Proyectos",
    description: `Desarrollé la interfaz completa con Next.js y TypeScript, integrándola a microservicios mediante Axios y optimizando la experiencia con animaciones en GSAP. El proyecto destaca por la automatización de flujos mediante un agente en n8n y una arquitectura escalable, todo diseñado previamente en Figma y respaldado por documentación técnica detallada.`,
    techs: [
      {
        name: "Next.js",
        icon: Nextjs,
      },
      {
        name: "TypeScript",
        icon: TypeScript,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindCSS,
      },
      {
        name: "GSAP",
        icon: Gsap,
      },
      {
        name: "n8n",
        icon: n8n,
      },
      {
        name: "Figma",
        icon: Figma,
      },
    ],
    image: "/projects/worklyst.webp",
    links: [
      {
        url: "https://github.com/OrlandoDev17/worklyst",
        icon: GitHub,
      },
      {
        url: "https://worklyst-smoky.vercel.app/",
        icon: Link,
      },
    ],
    order: "order-0",
  },
];

export const WORKFLOW: Workflow[] = [
  {
    step: 1,
    icon: SearchCode,
    title: "Investigación",
    description: "Analizo necesidades y contexto del proyecto.",
  },
  {
    step: 2,
    icon: Document,
    title: "Documentación",
    description: "Registro requisitos y objetivos clave.",
  },
  {
    step: 3,
    icon: Figma,
    title: "Diseño",
    description: "Defino arquitectura, UX y estilo visual.",
  },
  {
    step: 4,
    icon: Code,
    title: "Desarrollo",
    description: "Construyo funcionalidades con código limpio y escalable.",
  },
  {
    step: 5,
    icon: Test,
    title: "Testeo",
    description: "Verifico calidad y corrijo errores.",
  },
  {
    step: 6,
    icon: Rocket,
    title: "Despliegue",
    description: "Lanzo el proyecto y preparo mantenimiento.",
  },
];

export const SKILLS: Skill[] = [
  {
    title: "Desarrollo Frontend",
    description:
      "Desarrollo interfaces modernas, rápidas y responsivas, enfocadas en la experiencia de usuario.",
    icon: ReactColor,
    techs: [
      {
        name: "Next.js",
        icon: Nextjs,
      },
      {
        name: "React",
        icon: React,
      },
      {
        name: "Tailwind",
        icon: TailwindCSS,
      },
      {
        name: "Astro",
        icon: Astro,
      },
      {
        name: "TypeScript",
        icon: TypeScript,
      },
      {
        name: "GSAP",
        icon: Gsap,
      },
      {
        name: "Vercel",
        icon: Vercel,
      },
    ],
    bgColor: "bg-gradient-to-br from-violet-500/20 to-violet-500",
    textColor: "text-purple",
    hoverShadow: "hover:shadow-purple/80",
    animation: "fade-right",
  },
  {
    title: "Desarrollo Backend",
    description:
      "Construyo arquitecturas escalables y seguras, integrando APIs y bases de datos eficientes.",
    icon: NodejsColor,
    techs: [
      {
        name: "Node.js",
        icon: Nodejs,
      },
      {
        name: "Express.js",
        icon: Express,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "Render",
        icon: Render,
      },
      {
        name: "Railway",
        icon: Railway,
      },
    ],
    bgColor: "bg-gradient-to-br from-lime-green/20 to-lime-green",
    textColor: "text-lime-green",
    hoverShadow: "hover:shadow-lime-green/80",
    animation: "fade-top",
  },
  {
    title: "Herramientas y Diseño",
    description:
      "Herramientas que optimizan el flujo de trabajo y diseño de interfaces modernas.",
    icon: GitColor,
    techs: [
      {
        name: "Antigravity",
        icon: Antigravity,
      },
      {
        name: "Bun",
        icon: Bun,
      },
      {
        name: "n8n",
        icon: n8n,
      },
      {
        name: "Git",
        icon: Git,
      },
      {
        name: "Figma",
        icon: Figma,
      },
      {
        name: "Dribbble",
        icon: Dribbble,
      },
    ],
    bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-500",
    textColor: "text-orange-500",
    hoverShadow: "hover:shadow-orange-500/80",
    animation: "fade-top",
  },
  {
    title: "Conocimientos Clave",
    description:
      "Además de las tecnologías, manejo conceptos y prácticas que fortalecen la arquitectura y la experiencia del usuario final.",
    icon: TypeScriptColor,
    techs: [
      {
        name: "API REST",
        icon: Chain,
      },
      {
        name: "Testing",
        icon: Test,
      },
      {
        name: "Documentación",
        icon: Document,
      },
      {
        name: "Requisitos",
        icon: HandShake,
      },
      {
        name: "Estados",
        icon: Code,
      },
      {
        name: "Automatización",
        icon: Settings,
      },
    ],
    bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-500",
    textColor: "text-blue-500",
    hoverShadow: "hover:shadow-blue-500/80",
    animation: "fade-left",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    id: 1,
    title: "Modularidad Estructural",
    description: "Componentes independientes y reutilizables.",
    icon: Puzzle,
  },
  {
    id: 2,
    title: "Código Autoexplicativo",
    description: "Lógica clara y semántica sin necesidad de comentarios.",
    icon: NoteBook,
  },
  {
    id: 3,
    title: "Consistencia Visual",
    description: "Sistemas de diseño uniformes y cohesivos.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Enfoque Lineal",
    description: "Flujos simples y directos para evitar complejidad.",
    icon: Right,
  },
  {
    id: 5,
    title: "Legibilidad como Prioridad",
    description: "Claridad total para facilitar el mantenimiento.",
    icon: Brain,
  },
];

export const STATS: Stat[] = [
  {
    value: 3,
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    value: 4,
    suffix: "",
    label: "Proyectos Realizados",
  },
  {
    value: 11,
    suffix: "+",
    label: "Tecnologías aprendidas",
  },
];

export const CONTACT_FORM_ENDPOINT =
  "https://formsubmit.co/ajax/orlandodev1707@gmail.com";
