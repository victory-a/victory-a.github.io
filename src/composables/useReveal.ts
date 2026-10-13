import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from '../motion/tokens'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  /** Selector within the section for staggered children. Defaults to `[data-reveal]`. */
  targets?: string
  /** Extra y distance override. */
  y?: number
  /** Stagger between children. */
  stagger?: number
  duration?: number
}

/**
 * Scroll-triggered fade/rise — Zap-style section storytelling,
 * with TSG easings (power2.out, short confident staggers).
 */
export function revealSection(
  section: HTMLElement,
  options: RevealOptions = {},
) {
  const {
    targets = '[data-reveal]',
    y = motion.distance.rise,
    stagger = motion.stagger.base,
    duration = motion.duration.base,
  } = options

  const items = section.querySelectorAll(targets)
  if (!items.length) return

  gsap.set(items, { opacity: 0, y })

  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration,
    ease: motion.ease.enter,
    stagger,
    scrollTrigger: {
      trigger: section,
      start: motion.scroll.start,
      once: motion.scroll.once,
      toggleActions: 'play none none none',
    },
  })
}
