import { gsap } from "./gsap";

export interface CounterOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  timeline?: gsap.core.Timeline;
  position?: string | number;
}

export function animateCounter(
  element: HTMLElement,
  options: CounterOptions = {},
) {
  const raw = (element.dataset.counter ?? element.textContent ?? "").trim();
  const match = raw.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(",", "."));
  const state = { value: 0 };

  const render = () => {
    element.textContent = `${prefix}${state.value}${suffix}`;
  };

  const vars: gsap.TweenVars = {
    value: target,
    duration: options.duration ?? 1.2,
    ease: options.ease ?? "power2.out",
    delay: options.delay ?? 0,
    snap: { value: digits.includes(".") || digits.includes(",") ? 0.1 : 1 },
    // No se renderiza "0" hasta que la animación arranca: si el trigger nunca
    // se dispara, el valor final del HTML se mantiene visible.
    onStart: render,
    onUpdate: render,
  };

  return options.timeline
    ? options.timeline.to(state, vars, options.position)
    : gsap.to(state, vars);
}
