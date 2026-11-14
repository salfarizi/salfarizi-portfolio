import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";

const OPTIONS = {
  lerp: 0.09,
  wheelMultiplier: 1,
  smoothWheel: true,
  syncTouch: false,
};

/**
 * Intercepts in-page hash links so Lenis animates to the target instead of
 * letting the browser jump. Lenis already applies the CSS `scroll-padding-top`
 * to element targets, so the sticky-nav clearance stays correct.
 *
 * The skip link (#main) is left alone so its native focus behavior keeps working.
 */
function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return undefined;

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || hash === "#main") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { duration: 1.1 });

      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

/**
 * Inertial scrolling for the whole page.
 * Disabled entirely when the user prefers reduced motion.
 */
export default function SmoothScroll({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <ReactLenis root options={OPTIONS}>
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
