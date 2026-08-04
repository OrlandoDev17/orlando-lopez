export interface HeroTechIconConfig {
  label: string;
  icon: string;
  top: string;
  side: "left" | "right";
  outset?: boolean;
  className?: string;
}

export const HERO_DESCRIPTION = `Desarrollador de Software especializado en crear experiencias digitales modernas, rápidas y eficientes, tanto en web como en aplicaciones móviles.

Mi enfoque abarca desde la arquitectura frontend con React, Astro y Tailwind CSS, hasta el desarrollo backend con Node.js, TypeScript y microservicios, asegurando siempre la calidad del producto mediante buenas prácticas de QA. No solo construyo software funcional para resolver problemas reales, me aseguro de que sea escalable, elegante y con una interfaz impecable.`;

export const TECH_ICONS: readonly HeroTechIconConfig[] = [
  { label: "React", icon: "simple-icons:react", top: "18%", side: "left" },
  { label: "OpenCode", icon: "simple-icons:opencode", top: "44%", side: "left", outset: true },
  { label: "Tailwind CSS", icon: "simple-icons:tailwindcss", top: "70%", side: "left" },
  { label: "Astro", icon: "simple-icons:astro", top: "18%", side: "right" },
  { label: "TanStack", icon: "simple-icons:tanstack", top: "44%", side: "right", outset: true },
  { label: "TypeScript", icon: "simple-icons:typescript", top: "70%", side: "right" },
];

export const TECH_STACK = [
  { name: "React", icon: "simple-icons:react" },
  { name: "TanStack", icon: "simple-icons:tanstack" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "Astro", icon: "simple-icons:astro" },
  { name: "n8n", icon: "simple-icons:n8n" },
  { name: "Docker", icon: "simple-icons:docker" },
  { name: "Figma", icon: "simple-icons:figma" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
  { name: "GSAP", icon: "simple-icons:gsap" },
  { name: "OpenCode", icon: "simple-icons:opencode" },
] as const;
