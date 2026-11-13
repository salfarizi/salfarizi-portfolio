import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { profile } from "../data/profile";

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: reduceMotion ? 0 : 1.1,
        immediate: reduceMotion,
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-line">
      <div className="section-shell relative flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] uppercase tracking-[0.12em] text-secondary">
          © 2026 Salman Alfarizi. All rights reserved.
        </p>

        <p className="text-[10px] uppercase tracking-[0.12em] text-muted sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:whitespace-nowrap">
          {profile.location}
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 self-start text-[10px] font-medium uppercase tracking-[0.14em] text-ink sm:self-auto"
        >
          Back to Top
          <ArrowUp
            size={12}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </footer>
  );
}
