import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { cn } from "../lib/cn";

/**
 * Signature hero portrait.
 * - Grayscale by default, full color on hover (CSS)
 * - Tap to toggle on touch devices (state)
 * - Keyboard accessible (Enter / Space)
 * - Falls back to the placeholder if the configured image fails to load
 */
export default function Portrait({ className = "" }) {
  const [active, setActive] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [src, setSrc] = useState(profile.portrait);

  useEffect(() => {
    if (!window.matchMedia) return undefined;

    const query = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(query.matches);
    update();

    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  const toggle = () => setActive((value) => !value);

  return (
    <button
      type="button"
      className={cn(
        "portrait-frame relative flex items-end justify-center outline-offset-4",
        active && "is-color",
        className,
      )}
      aria-pressed={active}
      aria-label={
        active ? "Show portrait in grayscale" : "Show portrait in color"
      }
      onClick={() => {
        if (!canHover) toggle();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      }}
    >
      <img
        src={src}
        alt={profile.portraitAlt}
        className="portrait-image h-full w-full object-contain object-bottom"
        width={1254}
        height={1254}
        loading="eager"
        draggable="false"
        decoding="async"
        fetchPriority="high"
        onError={() => setSrc("/images/profile-placeholder.svg")}
      />

      <span
        className="portrait-hint pointer-events-none absolute -right-7 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-3 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.28em] text-muted lg:flex"
        aria-hidden="true"
      >
        <span className="h-px w-7 bg-line" />
        <span className="portrait-hint__hover">Hover to reveal</span>
        <span className="portrait-hint__touch">Tap to reveal</span>
      </span>
    </button>
  );
}
