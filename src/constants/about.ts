import type { HighlightedWords } from "@/utils/highlighted-words";

export interface AboutAchievement {
  value: string;
  label: string;
  description: string;
  icon: string;
  tone: "primary" | "secondary";
}

export const ABOUT_INTRO = "Cultura de producto & Código real";

export const ABOUT_PARAGRAPHS: string[] = [
  "Tengo 20 años y llevo más de 3 programando, pero mi verdadero salto ocurrió al llevar software al mundo real. No desarrollo proyectos de laboratorio: construyo productos que resuelven problemas reales de negocios y personas, como TuPrestamo (un sistema activo para la gestión de cobros y rutas de prestamistas) o puntos de venta (POS) personalizados para comercios locales.",
  "Viví la transición hacia la era de la IA y adopté el desarrollo guiado por especificaciones (Spec-Driven Development). Combino una sólida base teórica con herramientas avanzadas para documentar, planificar y auditar cada módulo antes de ejecutarlo. El resultado: arquitecturas sólidas, código mantenible y cero improvisación.",
  "Soy un apasionado de las interfaces modernas, intuitivas y vivas, donde cada animación e interacción tiene un propósito visual. Además, domino el desarrollo backend para conectar estas experiencias con sistemas robustos, seguros y eficientes.",
];

export const ABOUT_CLOSING =
  "Estoy orgulloso del camino recorrido y enfocado en construir software que genere un impacto directo mientras sigo aprendiendo algo nuevo cada día.";

export const ABOUT_HIGHLIGHTED_WORDS: HighlightedWords = {
  primary: [
    "problemas reales",
    "TuPrestamo",
    "Spec-Driven Development",
    "interfaces modernas",
  ],
  secondary: [
    "mundo real",
    "puntos de venta",
    "POS",
    "arquitecturas sólidas",
    "backend",
  ],
};

export const ABOUT_ACHIEVEMENTS: AboutAchievement[] = [
  {
    value: "2+",
    label: "Clientes en Producción",
    description: "Software real gestionando cobros y rutas",
    icon: "lucide:route",
    tone: "primary",
  },
  {
    value: "Full",
    label: "Ecosistema SDD",
    description: "IA, especificación técnica y auditoría",
    icon: "lucide:brain-circuit",
    tone: "secondary",
  },
  {
    value: "100%",
    label: "Enfoque UX/UI",
    description: "Interacciones, fluidez y animaciones",
    icon: "lucide:mouse-pointer-click",
    tone: "primary",
  },
  {
    value: "Fullstack",
    label: "Web & Mobile",
    description: "Frontend moderno + integraciones backend",
    icon: "lucide:monitor-smartphone",
    tone: "secondary",
  },
];
