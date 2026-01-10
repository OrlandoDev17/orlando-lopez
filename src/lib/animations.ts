import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animaciones

export const fadeRight = (target: string, delay: number = 0) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: delay,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    }
  );
};

export const fadeLeft = (target: string, delay: number = 0) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: delay,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    }
  );
};

export const fadeTop = (target: string, delay: number = 0) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: delay,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    }
  );
};

export const fadeBottom = (target: string, delay: number = 0) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: delay,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    }
  );
};

export const fadeTopStagger = (
  target: string,
  trigger: string,
  delay: number = 0
) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: delay,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    }
  );
};

export const fadeRightStagger = (
  target: string,
  trigger: string,
  delay: number = 0
) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: delay,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    }
  );
};

export const fadeBottomStagger = (
  target: string,
  trigger: string,
  delay: number = 0
) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: delay,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    }
  );
};

export const animateModalIn = (
  container: HTMLElement | null,
  modal: HTMLDialogElement | null
) => {
  if (container) {
    gsap.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }

  if (modal) {
    gsap.fromTo(
      modal,
      { scale: 0.9, opacity: 0, y: 20 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
        delay: 0.1,
      }
    );
  }
};
