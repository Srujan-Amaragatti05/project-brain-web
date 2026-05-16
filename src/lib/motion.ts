export const fadeUp = {
  initial: {
    opacity: 0,
    y: 8,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.22,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};