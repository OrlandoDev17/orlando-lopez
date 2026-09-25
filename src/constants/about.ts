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
  "No uso IA para saltarme fundamentos — los tengo. La uso para ejecutar más rápido lo que ya sé hacer bien. TuPrestamo es el mejor ejemplo: pasé de primer commit a un cliente real usando la app en rutas de cobro en apenas 9 días, y desde entonces la sigo evolucionando en producción. Tengo 20 años y llevo más de 3 programando, pero mi verdadero salto ocurrió al llevar software al mundo real. No desarrollo proyectos de laboratorio: construyo productos que resuelven problemas reales de negocios y personas, como puntos de venta (POS) personalizados para comercios locales o sistemas ERP listos para escalar comercialmente.",
  "Viví la transición hacia la era de la IA y hoy incorporo Spec-Driven Development en mis proyectos para manejar cambios de alcance sin fricción ni retrabajo. Combino una sólida base teórica con un flujo de ejecución potenciado por IA para documentar, planificar y auditar cada módulo. El resultado: arquitecturas sólidas, código mantenible y cero improvisación.",
  "Soy un apasionado de las interfaces modernas, intuitivas y vivas, donde cada animación e interacción tiene un propósito visual. Además, domino el desarrollo backend para conectar estas experiencias con sistemas robustos, seguros y eficientes.",
];

export const ABOUT_CLOSING =
  "Estoy orgulloso del camino recorrido y enfocado en construir software que genere un impacto directo mientras sigo aprendiendo algo nuevo cada día.";

export const ABOUT_HIGHLIGHTED_WORDS: HighlightedWords = {
  primary: [
    "TuPrestamo",
    "cliente real",
    "producción",
    "Spec-Driven Development",
    "interfaces modernas",
    "impacto directo",
  ],
  secondary: [
    "IA",
    "mundo real",
    "POS",
    "ERP",
    "arquitecturas sólidas",
    "backend",
    "animación e interacción",
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
