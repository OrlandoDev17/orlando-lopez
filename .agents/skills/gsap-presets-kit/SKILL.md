---
name: gsap-presets-kit
description: Use when writing or debugging GSAP animations with the gsap-presets-kit package (animateFrom, animateTo, animateFromTo, splitTextReveal, typewriter, marquee). Covers targets, defaults, scroll/timeline options and Zod runtime validation. Trigger on gsap, green sock, SplitText, typewriter, marquee, ScrollTrigger or ScrollTrigger options.
license: MIT
compatibility: opencode
metadata:
  audience: developers
  package: gsap-presets-kit
---

# gsap-presets-kit

Small, typed, runtime-validated helpers for [GSAP 3.13+](https://gsap.com). Every
function wraps a GSAP tween with sensible, replaceable defaults and integrates
ScrollTrigger and timelines. Options are validated/normalized at runtime with
**Zod**; TS types are inferred from the same schemas.

Import from one place:

```ts
import {
  animateTo,
  animateFrom,
  animateFromTo,
  splitTextReveal,
  typewriter,
  marquee,
  scrollTimeline,
} from "gsap-presets-kit";
```

`gsap` and `zod` are **peer dependencies** — the app owns a single copy of each. SSR is
safe: helpers return `undefined` when there is no `document`.

## Core functions

Target can be a selector, an Element, an array of Elements or a NodeList
(`GSAPTarget`). Defaults are replaced by passing the same keys (or any tween var).

| function       | mode        | defaults                                                         |
| ------------- | ----------- | ---------------------------------------------------------------- |
| `animateTo`   | `gsap.to`   | `{ opacity: 0, duration: 0.8, ease: "power2.out" }`              |
| `animateFrom` | `gsap.from` | `{ opacity: 0, y: 40, duration: 0.8, ease: "power2.out" }`       |
| `animateFromTo` | `gsap.fromTo` | from `{ opacity: 0, y: 40 }` → to `{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }` |

```ts
animateFrom("#hero");                                 // fade + rise on scroll enter
animateFrom(".card", { y: 0, scale: 0.6, ease: "back.out(1.7)" });
animateFrom("#box", { opacity: 1, x: -120 });         // slide from left, no fade
animateTo("#btn", { x: 200 });                         // fade out (opacity default 0)
animateTo("#el", { opacity: 1, x: 200 });              // move, no fade
animateFromTo("#box", { scale: 0, rotation: -45 }, { scale: 1, rotation: 0 });
```

In `animateFromTo`, the `options`-level tween vars merge into the `to` state and
`toVars` always wins.

## Shared options (PresetOptions)

Any `gsap.TweenVars` plus:

| key        | type                          | default | notes                                                    |
| ---------- | ----------------------------- | ------- | -------------------------------------------------------- |
| `scroll`   | `boolean | ScrollTriggerOptions` | `true`  | `true` fires on entering viewport (`start: "top 85%", once: true`). `false` plays immediately. Object for full control. **Ignored when `timeline` is set.** |
| `timeline` | `gsap.core.Timeline`           | —       | if set, the tween is added to the timeline instead of playing free |
| `position` | `gsap.Position`               | —       | position within the timeline (e.g. `"<"`, `"-=0.2"`, `2`) |

```ts
animateFrom(".item", {
  stagger: 0.1,
  scroll: { start: "top 80%", once: false },   // repeats on enter/leave
});

const tl = gsap.timeline();
animateFrom(".a", { timeline: tl });
animateFrom(".b", { timeline: tl, position: "-=0.2" });
```

`scroll` supports `trigger, start, end, once, toggleActions, scrub, markers,
horizontal, pin` plus any other ScrollTrigger.Vars via passthrough.

## Scroll + timeline

When `timeline` is set, the individual `scroll` is **ignored** (consistent across all
helpers) — the timeline owns the timing. To fire a whole sequenced group on scroll, put
the ScrollTrigger on the timeline itself. Use `scrollTimeline(options?)` for that:

```ts
import { scrollTimeline, typewriter, splitTextReveal, animateFrom } from "gsap-presets-kit";

const tl = scrollTimeline({ trigger: "#hero", start: "top 75%", once: true });

typewriter("#hero-title", { timeline: tl });                    // types when #hero enters
splitTextReveal("#hero-subtitle", { timeline: tl, position: "-=0.2" });
animateFrom("#hero-description", { timeline: tl, position: "-=0.2" });
```

`scrollTimeline` accepts any `ScrollTriggerOptions` (`trigger` defaults to
`document.body`, `start` to `"top 85%"`, `once` to `true`) and returns
`gsap.core.Timeline | undefined` (undefined in SSR). Alternatively create the timeline
manually with `gsap.timeline({ scrollTrigger: {...} })`.

## Presets

### splitTextReveal(target, options?)

Splits text into chars/words/lines and animates them in (`gsap.from` on the parts).
Defaults: `{ type: "words", yPercent: 110, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.04 }`.
Own options: `type` (`"chars" | "words" | "lines"`), `highlight` (string/string[] —
matching pieces get `highlightClass`), `highlightClass` (default `"is-highlighted"`),
`revertOnComplete` (default `false`).

```ts
splitTextReveal("#title", { type: "chars", stagger: 0.02 });
splitTextReveal("#title", { type: "lines", highlight: ["GSAP"], highlightClass: "text-accent" });
splitTextReveal("#title", { revertOnComplete: true });
```

### `typewriter(target, options?)`
Types the target text char-by-char or word-by-word. Defaults: `speed: 80`, `mode: "chars"`,
`delay: 0`, `cursor: true`, `cursorChar: "|"`, `blinkSpeed: 500`, `loop: false`, `scroll: true`.
`duration` (seconds) overrides `speed`. Callbacks: `onStart`, `onUpdate(count, total)`, `onComplete`.

```ts
typewriter("#typed", {
  speed: 55,
  duration: 3,                 // overrides speed
  mode: "words",
  cursor: true,
  highlight: ["gsap"],         // gets highlightClass
  highlightClass: "is-highlighted",
  loop: true,
  onComplete: () => {},
});
```

### `marquee(target, options)`
Infinite seamless loop. Pass the **track** (a flex container; its parent must have
`overflow: hidden`) or an **array of items** plus a `container`. Defaults: `speed: 50`,
`direction: "left"`, `pauseOnHover: true`, `responsive: false`, `reducedMotion: true`.

```ts
marquee(".track");                                      // uses children of .track
marquee(".track", { speed: 90, direction: "right" });
marquee(items, { container: trackEl, speed: 70 });     // explicit items
```

`speed` is px/second. Marquee omits itself when `prefers-reduced-motion: reduce`
(unless `reducedMotion: false`). Via passthrough it accepts `scroll, timeline, position`.

## Plugin registration & validation

Plugins register themselves automatically (once) on first use — ScrollTrigger when you
use `scroll`, SplitText when you call `splitTextReveal`. No manual `gsap.registerPlugin`
is needed. Use `gsap.registerPlugin` only if you handcraft tweens with those plugins.

Invalid option input throws a readable `ZodError` instead of silent animation bugs.
Exported schemas: `presetOptionsSchema`, `scrollTriggerOptionsSchema`, `scrollModeSchema`,
`splitTextOptionsSchema`, `typewriterOptionsSchema`, `marqueeOptionsSchema`,
`targetSchema`, `easeSchema`, `timelineSchema`, `positionSchema`. Public TS types derive
from the schemas, so what you write is what gets validated.

```ts
import { presetOptionsSchema } from "gsap-presets-kit";
presetOptionsSchema.parse({ duration: -1 }); // throws: expected number to be >0
```

## Frameworks / SSR

Safe to import in SSR (Astro, Next): helpers return `undefined` without `document`.
For scroll animations in React, combine with `useGSAP()` from `@gsap/react` and call
`ScrollTrigger.refresh()` after async layout changes.