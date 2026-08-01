// src/utils/animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { $, $$ } from "./dom";

// Registrar plugins globalmente
gsap.registerPlugin(ScrollTrigger, SplitText);

// Configuración genérica para ScrollTrigger
export interface ScrollAnimationOptions extends gsap.TweenVars {
  trigger?: string | Element | Element[];
  start?: string;
  once?: boolean;
}

/**
 * Helper base para animar al hacer scroll con valores por defecto.
 * Si se pasa una `tl` (timeline), agrega la animación a esa timeline
 * en la `position` indicada en lugar de crearla suelta.
 */
export const animate = (
  target: string | Element | Element[],
  vars: gsap.TweenVars = {},
  triggerOptions: ScrollAnimationOptions = {},
  tl?: gsap.core.Timeline,
  position?: gsap.Position,
) => {
  const elements = typeof target === "string" ? $$(target) : target;
  if (!elements || (Array.isArray(elements) && elements.length === 0)) return;

  if (tl) {
    return tl.from(elements, { duration: 0.8, ease: "power2.out", ...vars }, position);
  }

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

/**
 * Variante de `animate` con `fromTo`: recibe `fromVars` y `toVars`.
 * Soporta timeline igual que `animate` (parámetros `tl` y `position`).
 */
export const animateFromTo = (
  target: string | Element | Element[],
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  triggerOptions: ScrollAnimationOptions = {},
  tl?: gsap.core.Timeline,
  position?: gsap.Position,
) => {
  const elements = typeof target === "string" ? $$(target) : target;
  if (!elements || (Array.isArray(elements) && elements.length === 0)) return;

  if (tl) {
    return tl.fromTo(
      elements,
      fromVars,
      { duration: 0.8, ease: "power2.out", ...toVars },
      position,
    );
  }

  const { start = "top 85%", once = true, trigger = elements } = triggerOptions;

  return gsap.fromTo(elements, fromVars, {
    duration: 0.8,
    ease: "power2.out",
    ...toVars,
    scrollTrigger: {
      trigger: typeof trigger === "string" ? $(trigger) : trigger,
      start,
      toggleActions: once ? "play none none none" : "play reset play reset",
    },
  });
};

/**
 * Preset SplitText: localiza el texto con $, lo separa en letras o palabras
 * y le aplica cualquier animación igual que `animate`.
 * `highlight` recibe una palabra o letra (o array de ellas) que se marcará
 * con la clase `highlightClass`.
 */
export interface SplitTextPresetOptions extends gsap.TweenVars {
  type?: "chars" | "words";
  highlight?: string | string[];
  highlightClass?: string;
}

export const splitTextAnimation = (
  target: string | Element,
  vars: SplitTextPresetOptions = {},
  triggerOptions: ScrollAnimationOptions = {},
  tl?: gsap.core.Timeline,
  position?: gsap.Position,
) => {
  const element = typeof target === "string" ? $(target) : target;
  if (!element) return;

  const {
    type = "words",
    highlight,
    highlightClass = "text-primary-600",
    ...tweenVars
  } = vars;

  const split = new SplitText(element, { type });
  const parts = type === "chars" ? split.chars : split.words;

  if (highlight) {
    const matches = (Array.isArray(highlight) ? highlight : [highlight]).map((h) =>
      h.toLowerCase(),
    );
    parts.forEach((part) => {
      const partText = (part.textContent ?? "").trim().toLowerCase();
      if (matches.includes(partText)) part.classList.add(highlightClass);
    });
  }

  return animate(parts, tweenVars, triggerOptions, tl, position);
};

/**
 * Preset Typewriter: recibe el elemento con el texto y revela su contenido
 * carácter a carácter con opciones de delay, velocidad, cursor y callbacks.
 * `highlight` recibe una palabra o letra que se marcará con `highlightClass`
 * mientras se escribe.
 */
export interface TypewriterOptions {
  delay?: number;
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
  highlight?: string | string[];
  highlightClass?: string;
  onStart?: () => void;
  onComplete?: () => void;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const typewriter = (
  target: string | Element,
  options: TypewriterOptions = {},
  tl?: gsap.core.Timeline,
  position?: gsap.Position,
) => {
  const element = typeof target === "string" ? $(target) : target;
  if (!element) return;

  const {
    delay = 0,
    speed = 80,
    cursor = true,
    cursorChar = "|",
    highlight,
    highlightClass = "text-primary-600",
    onStart,
    onComplete,
  } = options;

  const text = element.textContent ?? "";
  const highlightIndexes = new Set<number>();

  if (highlight) {
    const lower = text.toLowerCase();
    const targets = Array.isArray(highlight) ? highlight : [highlight];
    for (const rawTarget of targets) {
      const target = rawTarget.toLowerCase();
      let from = 0;
      let index = lower.indexOf(target, from);
      while (index !== -1) {
        for (let i = index; i < index + target.length; i++) highlightIndexes.add(i);
        from = index + target.length;
        index = lower.indexOf(target, from);
      }
    }
  }

  const proxy = { count: 0 };

  const textEl = document.createElement("span");
  textEl.setAttribute("aria-label", text);

  const cursorEl = document.createElement("span");
  cursorEl.setAttribute("aria-hidden", "true");
  cursorEl.textContent = cursorChar;

  element.textContent = "";
  element.appendChild(textEl);
  if (cursor) element.appendChild(cursorEl);

  const render = () => {
    const count = Math.round(proxy.count);
    let html = "";
    for (let i = 0; i < count; i++) {
      const char = escapeHtml(text[i]);
      html += highlightIndexes.has(i)
        ? `<span class="${highlightClass}">${char}</span>`
        : char;
    }
    textEl.innerHTML = html;
  };

  const tweenVars: gsap.TweenVars = {
    count: text.length,
    duration: (text.length * speed) / 1000,
    ease: "none",
    delay,
    onStart() {
      onStart?.();
      if (cursor) {
        gsap.to(cursorEl, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }
    },
    onUpdate: render,
    onComplete() {
      render();
      onComplete?.();
    },
  };

  const tween = tl
    ? tl.to(proxy, tweenVars, position)
    : gsap.to(proxy, tweenVars);

  return tween;
};
