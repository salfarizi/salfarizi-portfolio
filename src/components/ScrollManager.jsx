import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

/**
 * Scrolls to the hash target after navigation, or to the top on a new page.
 * Uses the Lenis instance when smooth scrolling is active, and honors
 * prefers-reduced-motion.
 *
 * Lenis already subtracts the CSS `scroll-padding-top`, so no extra offset
 * is needed here — adding one would double the sticky-nav clearance.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        requestAnimationFrame(() => {
          if (lenis) {
            lenis.scrollTo(target, {
              duration: reduceMotion ? 0 : 1.1,
              immediate: reduceMotion,
            });
          } else {
            target.scrollIntoView({
              behavior: reduceMotion ? "auto" : "smooth",
              block: "start",
            });
          }
        });
        return;
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash, lenis]);

  return null;
}
