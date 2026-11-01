import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the hash target after navigation, or to the top on a new page.
 * Honors prefers-reduced-motion.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
