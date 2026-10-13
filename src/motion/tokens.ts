/**
 * Motion language inspired by tsg.xyz + joinzap.com:
 * confident staggered rises (power2.out), occasional expo.out emphasis,
 * short delays, and once-per-view scroll reveals — never bouncy.
 */
export const motion = {
  ease: {
    enter: 'power2.out',
    emphasis: 'expo.out',
    soft: 'power1.inOut',
  },
  duration: {
    fast: 0.4,
    base: 0.55,
    slow: 0.8,
    ambient: 4.5,
  },
  stagger: {
    tight: 0.08,
    base: 0.12,
    loose: 0.18,
  },
  distance: {
    rise: 64,
    riseSm: 36,
    slide: 40,
  },
  scroll: {
    start: 'top 82%',
    once: true,
  },
} as const
