export interface SkillItem {
  icon?: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  badge: { icon: string; label: string };
  title: string;
  description: string;
  image: string;
  techs: SkillItem[];
  rotation: string;
  borderRadius: string;
  gradientColor?: "green" | "purple";
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    badge: { icon: "lucide:layout", label: "Frontend" },
    title: "React & Ecosistema",
    description:
      "Construyo interfaces modernas, dinámicas y accesibles con las mejores herramientas del ecosistema de React.",
    image: "/assets/frontend.webp",
    rotation: "-2deg",
    borderRadius: "24px 32px 28px 20px",
    gradientColor: "purple",
    techs: [
      { icon: "tanstack", label: "TanStack" },
      { icon: "react", label: "React" },
      { icon: "tailwindcss", label: "Tailwind CSS" },
      { icon: "astro", label: "Astro" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "gsap", label: "GSAP" },
      { icon: "framer", label: "Motion" },
      { icon: "nextdotjs", label: "Next.js" },
    ],
  },
  {
    id: "backend",
    badge: { icon: "lucide:server", label: "Backend" },
    title: "Node.js & APIs",
    description:
      "Desarrollo APIs robustas y escalables con Node.js, gestionando datos y servicios de forma eficiente.",
    image: "/assets/backend.webp",
    rotation: "1.5deg",
    borderRadius: "20px 28px 32px 24px",
    gradientColor: "green",
    techs: [
      { icon: "nodedotjs", label: "Node.js" },
      { icon: "express", label: "Express" },
      { icon: "prisma", label: "Prisma ORM" },
      { icon: "postgresql", label: "PostgreSQL" },
      { icon: "supabase", label: "Supabase" },
    ],
  },
  {
    id: "devtools",
    badge: { icon: "lucide:wrench", label: "Herramientas & DevOps" },
    title: "Productividad y Despliegue",
    description:
      "Utilizo herramientas que optimizan mi flujo de trabajo, facilitan la colaboración y me permiten desplegar aplicaciones de forma rápida y segura.",
    image: "/assets/devtool.webp",
    rotation: "1.5deg",
    borderRadius: "28px 20px 24px 32px",
    gradientColor: "purple",
    techs: [
      { icon: "antigravity", label: "Antigravity" },
      { icon: "opencode", label: "Opencode" },
      { icon: "figma", label: "Figma" },
      { icon: "docker", label: "Docker" },
      { icon: "git", label: "Git" },
      { icon: "googlegemini", label: "Gemini" },
      { icon: "pnpm", label: "PNPM" },
      { icon: "bun", label: "Bun" },
      { icon: "n8n", label: "n8n" },
    ],
  },
  {
    id: "extras",
    badge: { icon: "lucide:lightbulb", label: "Otros" },
    title: "Extras que suman",
    description:
      "También cuento con conocimientos en otras áreas que complementan mi desarrollo como dev y me ayudan a resolver problemas desde diferentes perspectivas.",
    image: "/assets/extras.webp",
    rotation: "-2deg",
    borderRadius: "32px 24px 20px 28px",
    gradientColor: "green",
    techs: [
      { icon: "lucide:globe", label: "API REST" },
      { icon: "lucide:file-code", label: "Spec Driven Dev" },
      { icon: "lucide:check-circle", label: "QA" },
      { icon: "lucide:flask-conical", label: "Testing" },
      { icon: "lucide:book-open", label: "Documentación" },
      { icon: "lucide:database", label: "Manejo de estado" },
      { icon: "lucide:kanban", label: "Metodologías ágiles" },
    ],
  },
];
