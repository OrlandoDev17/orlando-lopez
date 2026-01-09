import {
  Astro,
  Css,
  Dribbble,
  Express,
  Figma,
  GitHub,
  JavaScript,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Railway,
  React,
  TailwindCSS,
  TypeScript,
  Vercel,
} from "@/components/ui/Brands";
import type { navItem, brandItem, Project, Workflow } from "./types";
import {
  Code,
  Document,
  Link,
  Rocket,
  SearchCode,
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
];

export const PROJECTS_LIST: Project[] = [
  {
    title: "RIVO - Plataforma de movilidad",
    description:
      "RIVO es una app movil desarrollada con Next.js y TailwindCSS para el frontend junto con NodeJs para el backend y una base de datos con PostgreSQL, la app permite a los usuarios solicitar un servicio de taxi desde su movil y a el conductor aceptar el servicio para que pueda realizar el viaje.",
    image: "/projects/rivo.webp",
    techs: [
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
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "Vercel",
        icon: Vercel,
      },
      {
        name: "Railway",
        icon: Railway,
      },
    ],
    links: [
      {
        url: "https://github.com/OrlandoDev17/Rivo",
        icon: GitHub,
      },
      {
        url: "https://rivo-frontend.vercel.app",
        icon: Link,
      },
    ],
    order: "order-0",
  },
  {
    title: "Web de Gestión de Ventas",
    description:
      "Desarrollé una aplicación web para gestionar las ventas de una cafetería, con productos personalizados en divisas y cálculo automático del cambio en bolívares según la tasa diaria. La plataforma clasifica ingresos por método de pago, genera un resumen consolidado del día, guarda la información en localStorage y permite exportar un PDF con el detalle de las ventas.",
    image: "/projects/gestion-ventas.webp",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "CSS",
        icon: Css,
      },
      {
        name: "JavaScript",
        icon: JavaScript,
      },
      {
        name: "Vercel",
        icon: Vercel,
      },
      {
        name: "GitHub",
        icon: GitHub,
      },
    ],
    links: [
      {
        url: "https://github.com/OrlandoDev17/gestor-ventas",
        icon: GitHub,
      },
      {
        url: "https://dulces-ideas.vercel.app",
        icon: Link,
      },
    ],
    order: "order-1",
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
    description: "Verifico calidad y corrigo errores.",
  },
  {
    step: 6,
    icon: Rocket,
    title: "Despliegue",
    description: "Lanzo el proyecto y preparo mantenimiento.",
  },
];
