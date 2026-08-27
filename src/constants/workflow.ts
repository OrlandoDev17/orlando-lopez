export interface WorkflowStep {
  number: string;
  title: string;
  category: string;
  description: string;
  deliverable: string;
  techs: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Descubrimiento & Investigación",
    category: "Estrategia & Ideación",
    description:
      "Analizo las necesidades del cliente o negocio para definir alcances, metas y requerimientos funcionales. Utilizo IA como Gemini y Claude como copilotos de pensamiento para iterar la idea, descubrir ángulos no contemplados y estructurar el alcance inicial.",
    deliverable: "Documento de Alcance & User Stories",
    techs: [
      "Gemini AI",
      "Claude AI",
      "Reuniones de Alineación",
      "Prompt Engineering",
    ],
  },
  {
    number: "02",
    title: "Arquitectura & UX",
    category: "Diseño & Stack",
    description:
      "Evalúo el mercado y patrones probados para seleccionar la arquitectura técnica ideal (Web/Móvil) según el proyecto. Genero un prototipo preliminar con Stitch, lo refino en Figma aplicando el sistema de diseño y redacto el archivo DESIGN.md.",
    deliverable: "Design System & DESIGN.md",
    techs: ["Figma", "Stitch", "Canva", "Design Tokens", "Architecture Specs"],
  },
  {
    number: "03",
    title: "Desarrollo",
    category: "Frontend / Backend",
    description:
      "Configuro el entorno e instalo el stack seleccionado. Escribo código modular, escalable y con tipado estricto bajo el principio DRY. Desarrollo componente a componente apoyándome en entornos de desarrollo asistidos por IA.",
    deliverable: "Código Fuente & Módulos Core",
    techs: [
      "TypeScript",
      "Antigravity",
      "Opencode",
      "React / Next.js / Flutter",
      "Tailwind CSS",
    ],
  },
  {
    number: "04",
    title: "Calidad & Testing",
    category: "QA & Rendimiento",
    description:
      "Pongo a prueba la aplicación con usuarios reales en escenarios de uso cotidiano para detectar fricciones. Ejecuto pruebas automatizadas e inspecciones de rendimiento, accesibilidad y Core Web Vitals.",
    deliverable: "Reporte QA & +90 Lighthouse",
    techs: [
      "Opencode",
      "Playwright (MCP)",
      "Lighthouse",
      "Testing con Usuarios",
    ],
  },
  {
    number: "05",
    title: "Documentación",
    category: "Mantenibilidad & Entrega",
    description:
      "Redacto la documentación técnica y los manuales de usuario para garantizar el traspaso del proyecto. Detallo esquemas de base de datos, flujos del frontend y endpoints del backend para facilitar su mantenimiento futuro.",
    deliverable: "Manuales PDF & Documentación Markdown",
    techs: ["Opencode", "Antigravity", "Markdown", "PDF Manuals", "JSDoc"],
  },
  {
    number: "06",
    title: "Despliegue & DevOps",
    category: "Infraestructura & Producción",
    description:
      "Configuro el entorno de producción según la naturaleza del proyecto: despliegue de web en Vercel, backend en Railway/Render, o aprovisionamiento completo en un servidor VPS usando contenedores.",
    deliverable: "Aplicación en Producción & Pipeline",
    techs: ["Vercel", "Railway", "Render", "VPS Linux", "Docker"],
  },
];
