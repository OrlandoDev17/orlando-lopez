export interface ContactChannel {
  id: string;
  label: string;
  tooltip: string;
  href: string;
  icon: string;
  bg: string;
  copy?: boolean;
}

export const CONTACT_EMAIL = "orlandodev1707@gmail.com";
export const CONTACT_WHATSAPP = "https://wa.me/58424286846";
export const CONTACT_LINKEDIN = "https://www.linkedin.com/in/orlando-lópez1707";
export const CONTACT_GITHUB = "https://github.com/OrlandoDev17";

export const CONTACT_BADGE = "Hablemos de tu próximo proyecto";

export const CONTACT_PARAGRAPH =
  "Si tienes una idea en mente, un problema real que quieras resolver o simplemente quieres conectar, envíame un mensaje. Estoy disponible para proyectos freelance, colaboraciones y oportunidades.";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    tooltip: "Escríbeme por WhatsApp",
    href: CONTACT_WHATSAPP,
    icon: "simple-icons:whatsapp",
    bg: "bg-[#25D366]",
  },
  {
    id: "email",
    label: "Email",
    tooltip: "Copiar correo",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: "simple-icons:gmail",
    bg: "bg-[#EA4335]",
    copy: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    tooltip: "Ver perfil de LinkedIn",
    href: CONTACT_LINKEDIN,
    icon: "simple-icons:linkedin",
    bg: "bg-[#0A66C2]",
  },
  {
    id: "github",
    label: "GitHub",
    tooltip: "Ver repositorios de GitHub",
    href: CONTACT_GITHUB,
    icon: "simple-icons:github",
    bg: "bg-[#181717]",
  },
];
