import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked vertical drift. The content moves against the scroll direction
 * as it passes through the viewport, which keeps the page feeling continuous.
 *
 * `distance` is the travel in px from entering to leaving the viewport.
 * `scale` should be > 1 when the content is clipped, so the edges never show.
 *
 * The measured wrapper stays untransformed on purpose — measuring the moving
 * element itself would feed its own transform back into the scroll progress.
 */
export default function Parallax({
  children,
  className = "",
  innerClassName = "h-full w-full",
  distance = 24,
  scale = 1,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div className={innerClassName} style={{ y, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
