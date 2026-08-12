export interface Tech {
  name: string;
  icon: string;
}

export interface Challenge {
  problem: string;
  solution: string;
  result: string;
}

export interface Links {
  icon: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  images: string[];
  tagline: string;
  role: string;
  duracion: string;
  client: string;
  summary: string;
  techs: Tech[];
  metrics: string[];
  before: string;
  after: string;
  features: string[];
  challenges: Challenge[];
  insights: string[];
  links: Links[];
}

export const DulcesIdeasData: Project = {
  slug: "dulces-ideas",
  title: "Dulces Ideas - Sistema POS & Gestión Administrativa",
  thumbnail: "/projects/dulces-ideas.webp",
  images: [
    "/projects/dulces-ideas.webp",
    "/projects/dulces-ideas.webp",
    "/projects/dulces-ideas.webp",
  ],
  tagline:
    "Sistema POS offline-first con conversión de divisa en tiempo real, gestión de encargos y reportes financieros.",
  role: "Desarrollador de Software",
  duracion: "3 Meses",
  client: "Dulces Ideas",
  summary:
    "Plataforma administrativa Fullstack desarrollada para digitalizar las operaciones comerciales de una dulcería en un entorno real. Integra una arquitectura offline-first con sincronización en segundo plano y automatización de tasa cambiaria oficial (USD/Bs) en tiempo real. Redujo el tiempo de atención al cliente de 3 minutos a 20 segundos, eliminando pérdidas de registro y garantizando un 100% de precisión en los cierres de caja. Incluye gestión de encargos personalizados, reportes financieros en PDF y un catálogo dinámico optimizado.",
  techs: [
    { name: "Next.js", icon: "simple-icons:nextdotjs" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "TailwindCSS", icon: "simple-icons:tailwindcss" },
    { name: "Supabase", icon: "simple-icons:supabase" },
    { name: "Framer Motion", icon: "simple-icons:framer" },
    { name: "TanStack Query", icon: "simple-icons:tanstack" },
    { name: "Bun", icon: "simple-icons:bun" },
    { name: "Vercel", icon: "simple-icons:vercel" },
  ],
  metrics: [
    "Atención 88% más rápida: De hasta 3 minutos por cliente a solo 20 segundos mediante la consulta automatizada de precios y registro directo.",
    "0% pérdidas de registro: Eliminación total del extravío de ventas en momentos de alto flujo comercial.",
    "Cierres de caja al 100%: Coincidencia exacta de ingresos en efectivo, Pago Móvil y punto de venta sin errores manuales.",
    "Alta disponibilidad: Operatividad ininterrumpida frente a cortes de energía o pérdidas de conexión a internet.",
  ],
  before:
    "Las ventas y la contabilidad se registraban a mano en un cuaderno. Calcular el precio final en Bolívares requería consultar manualmente la tasa oficial del día y realizar operaciones en calculadora ítem por ítem, lo que ralentizaba la atención e introducía errores de suma.",
  after:
    "Desarrollé una aplicación web progresiva que calcula equivalencias de divisa al instante, permite seleccionar productos en un clic y registra la venta especificando el método de pago. La arquitectura guarda los datos localmente y los sincroniza automáticamente al detectar red.",
  features: [
    "Catálogo dinámico: Cálculo instantáneo de precios en Bolívares sincronizado con la tasa BCV.",
    "Registro multimoneda: Desglose por métodos de pago (Pago Móvil, Efectivo, Divisas y Punto de Venta).",
    "Persistencia Offline: Cola de sincronización local con IndexedDB y TanStack Query ante caídas de red.",
    "Módulo de Encargos: Control de pedidos personalizados, abonos y entregas vinculado al historial general.",
    "Reportes Financieros: Balances automáticos de ingresos semanales y mensuales exportables a PDF.",
  ],
  challenges: [
    {
      problem:
        "La inestabilidad de la red local impedía enviar peticiones directas a Supabase sin detener las transacciones en caja.",
      solution:
        "Implementé un esquema de persistencia local con IndexedDB coordinado por TanStack Query, creando una cola de reintentos en segundo plano.",
      result:
        "Cobro y registro continuo en el establecimiento sin depender de la conectividad.",
    },
    {
      problem:
        "Los encargos con abonos progresivos debían integrarse a la contabilidad global sin duplicar ingresos.",
      solution:
        "Diseñé una estructura relacional en Supabase con transacciones enlazadas para unificar los abonos con el flujo general.",
      result:
        "Trazabilidad individual de cada pedido y balances financieros precisos en tiempo real.",
    },
  ],
  insights: [
    "Validación en entorno real: La prueba continua en punto de venta permitió corregir fallas operativas inmediatas y pulir la interfaz según el uso diario.",
    "Arquitectura Offline-First: Dominio en estrategias de caché local, mutaciones optimistas y sincronización diferida.",
    "Diseño enfocado en la velocidad: Minimizar la cantidad de clics por acción es crítico para acelerar la atención en momentos pico.",
  ],
  links: [
    {
      icon: "simple-icons:github",
      url: "https://github.com/OrlandoDev17/dulces-ideas-app",
    },
    {
      icon: "lucide:rocket",
      url: "https://dulces-ideas-app-web.vercel.app/",
    },
  ],
};

export const ProjectsData: Project[] = [DulcesIdeasData];
