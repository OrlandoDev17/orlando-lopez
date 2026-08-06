import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function createSectionTimeline(
  trigger: string | Element,
  overrides: ScrollTrigger.Vars = {},
) {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 85%",
      once: true,
      toggleActions: "play none none none",
      ...overrides,
    },
  })
}