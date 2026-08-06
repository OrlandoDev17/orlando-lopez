import { Rocket } from "@lucide/astro";

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  thumbnail: string;
  title: string;
  role: string;
  description: string;
  period: string;
  links: {
    icon: string;
    url: string;
  }[];
  techs: ProjectTech[];
}

export const PROJECTS: Project[] = [
  {
    slug: "dulces-ideas",
    thumbnail: "/projects/placeholder.png",
    title: "Dulces Ideas - Sistema POS",
    role: "Desarrollador de Software",
    description: "Sistema de punto de venta (POS) diseñado para gestión de inventario, ventas y reportes en tiempo real. Incluye módulos para administración de clientes, catálogo de productos con variantes, facturación y control de caja. Desarrollado con foco en rendimiento, interfaces intuitivas y código escalable, desde la arquitectura de datos hasta la implementación de la interfaz de usuario.",
    period: "Ene 2026 - Actualidad",
    links: [
      {
        icon: "lucide:rocket",
        url: "https://dulces-ideas.example.com",
      },
      {
        icon: "simple-icons:github",
        url: "https://dulces-ideas.example.com"
      }
    ],
    techs: [
      { name: "Astro", icon: "simple-icons:astro" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    ],
  },
]