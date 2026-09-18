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
  device: "mobile" | "web";
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
  thumbnail: "/projects/dulces-ideas-thumbnail.webp",
  images: [
    "/projects/dulces-ideas-thumbnail.webp",
    "/projects/dulces-ideas-thumbnail.webp",
    "/projects/dulces-ideas-thumbnail.webp",
  ],
  device: "web",
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

export const TuPrestamoData: Project = {
  slug: "tuprestamo",
  title: "TuPrestamo - Sistema de Gestión Financiera & Cobros",
  thumbnail: "/projects/tu-prestamo-thumbnail.webp",
  images: [
    "/projects/tu-prestamo/dashboard.webp",
    "/projects/tu-prestamo/clientes.webp",
    "/projects/tu-prestamo/crear-cliente.webp",
    "/projects/tu-prestamo/prestamos.webp",
    "/projects/tu-prestamo/crear-prestamo-cliente.webp",
    "/projects/tu-prestamo/crear-prestamo-monto.webp",
    "/projects/tu-prestamo/crear-prestamo-cuotas.webp",
    "/projects/tu-prestamo/crear-prestamo-frecuencia.webp",
    "/projects/tu-prestamo/crear-prestamo-resumen.webp",
    "/projects/tu-prestamo/prestamo-detalle.webp",
    "/projects/tu-prestamo/registrar-pago.webp",
    "/projects/tu-prestamo/reportes.webp",
  ],
  device: "mobile",
  tagline:
    "Sistema web y móvil para automatización de rutas de cobro, gestión de préstamos y cálculo de intereses.",
  role: "Desarrollador de Software",
  duracion: "2 Semanas",
  client: "Prestamista Privado",
  summary:
    "Plataforma financiera Fullstack desarrollada para sustituir el control contable en hojas de cálculo por una aplicación web y móvil centralizada. Automatiza la asignación de créditos, amortizaciones, cálculo de intereses y gestión de cobros en rutas diarias. Empaquetada para dispositivos móviles con Capacitor, incluye políticas de seguridad RLS en Supabase y soporte para roles múltiples.",
  techs: [
    { name: "TanStack Start", icon: "simple-icons:tanstack" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "TailwindCSS", icon: "simple-icons:tailwindcss" },
    { name: "Supabase", icon: "simple-icons:supabase" },
    { name: "Capacitor", icon: "simple-icons:capacitor" },
    { name: "TanStack Query", icon: "simple-icons:tanstack" },
  ],
  metrics: [
    "Digitalización del 100%: Eliminación total del uso de plantillas en Excel y registros manuales propensos a error[cite: 3, 4].",
    "Optimización de registros: Carga y actualización de abonos en segundos directamente desde dispositivos móviles.",
    "0% pérdidas contables: Consolidación exacta de saldos pendientes, amortizaciones y cobros ejecutados en ruta.",
    "Disponibilidad móvil: Acceso continuo para cobradores mediante empaquetado nativo móvil.",
  ],
  before:
    "La contabilidad de préstamos y las rutas de cobro se llevaban de forma manual en hojas de cálculo. Calcular intereses acumulados, amortizaciones parciales y saldos pendientes requería procesos mecánicos propensos a inconsistencias de saldo.",
  after:
    "Desarrollé una solución centralizada y móvil que automatiza los cálculos de cuotas y saldos. Los cobradores registran transacciones al instante desde el teléfono, permitiendo consultar la morosidad e ingresos diarios en tiempo real.",
  features: [
    "Gestión de Créditos: Creación de préstamos, esquemas de amortización y plazos de pago.",
    "Rutas de Cobro Móviles: Interfaz táctil optimizada con Capacitor para seguimiento de cartera en campo.",
    "Seguridad por Roles: Control de acceso con políticas RLS en Supabase para proteger transacciones sensibles.",
    "Métricas Financieras: Tablero con saldos de capital prestado, intereses recuperados y morosidad.",
  ],
  challenges: [
    {
      problem:
        "La necesidad de adaptar el software a cambios constantes en las reglas operativas requeridas por el cliente.",
      solution:
        "Aplicación de principios de Spec-Driven Development (SDD) y una arquitectura modular que permitió integrar modificaciones sin afectar el flujo en producción.",
      result:
        "Iteraciones de código rápidas y despliegues sin interrupción del servicio.",
    },
  ],
  insights: [
    "Digitalización a medida: Reemplazar herramientas genéricas como Excel por software especializado elimina la fricción operativa y previene fallas de cálculo.",
    "Arquitectura desacoplada: Mantener una clara separación entre la capa de presentación y la base de datos acelera la adopción de feedback en tiempo récord.",
  ],
  links: [
    {
      icon: "simple-icons:github",
      url: "https://github.com/OrlandoDev17/prestamos-app",
    },
  ],
};

export const ProjectsData: Project[] = [TuPrestamoData, DulcesIdeasData];
