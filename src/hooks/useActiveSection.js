import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for navigation highlighting.
 * Pass a stable array of section ids.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;
        visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        );
        setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}
