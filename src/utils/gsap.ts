import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

/** ¿El usuario pidió reducir el movimiento a nivel de sistema operativo? */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

// Registro de timelines de sección para limpiarlas en cada navegación
// (Astro ClientRouter) y evitar ScrollTriggers huérfanos acumulados.
const sectionTimelines = new Set<gsap.core.Timeline>()

export function revertSectionTimelines() {
  sectionTimelines.forEach((timeline) => {
    timeline.scrollTrigger?.kill()
    timeline.kill()
  })
  sectionTimelines.clear()
}

export function createSectionTimeline(
  trigger: string | Element,
  overrides: ScrollTrigger.Vars = {},
) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 85%",
      once: true,
      toggleActions: "play none none none",
      ...overrides,
    },
  })

  sectionTimelines.add(timeline)
  return timeline
}