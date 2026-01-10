import type { ComponentType } from "react";

export interface icon {
  className?: string;
}

export interface navItem {
  label: string;
  href: string;
}

export interface brandItem {
  name: string;
  icon: ComponentType<icon>;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techs: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  links: {
    icon: React.ComponentType<{ className?: string }>;
    url: string;
  }[];
  order: string;
}

export interface Workflow {
  step: number;
  icon: ComponentType<icon>;
  title: string;
  description: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  techs: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  bgColor: string;
  textColor: string;
  hoverShadow: string;
  animation?: string;
}

export interface Principle {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<icon>;
}

export interface Stat {
  value: number; // Changed to number for animation
  suffix?: string; // e.g. "+" or "%"
  label: string;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
