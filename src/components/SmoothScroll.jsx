import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";

const OPTIONS = {
  lerp: 0.09,
  wheelMultiplier: 1,
  smoothWheel: true,
  syncTouch: false,
};

/**
 * Inertial scrolling for the whole page.
 * Disabled entirely when the user prefers reduced motion.
 */
export default function SmoothScroll({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <ReactLenis root options={OPTIONS}>
      {children}
    </ReactLenis>
  );
}
