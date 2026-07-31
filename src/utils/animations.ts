// src/utils/animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { $, $$ } from "./dom";

// Registrar plugins globalmente
gsap.registerPlugin(ScrollTrigger, SplitText);

// Configuración genérica para ScrollTrigger
export interface ScrollAnimationOptions extends gsap.TweenVars {
  trigger?: string | HTMLElement;
  start?: string;
  once?: boolean;
}

/**
 * Helper base para animar al hacer scroll con valores por defecto
 */
export const animate = (
  target: string | HTMLElement | HTMLElement[],
  vars: gsap.TweenVars = {},
  triggerOptions: ScrollAnimationOptions = {},
) => {
  const elements = typeof target === "string" ? $$(target) : target;
  if (!elements || (Array.isArray(elements) && elements.length === 0)) return;

  const { start = "top 85%", once = true, trigger = elements } = triggerOptions;

  return gsap.from(elements, {
    duration: 0.8,
    ease: "power2.out",
    ...vars, // Tus opciones personalizadas sobrescriben las por defecto
    scrollTrigger: {
      trigger: typeof trigger === "string" ? $(trigger) : trigger,
      start,
      toggleActions: once ? "play none none none" : "play reset play reset",
    },
  });
};
