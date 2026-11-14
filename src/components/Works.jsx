import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];
const PREVIEW_WIDTH = 264;
const PREVIEW_HEIGHT = 240;

export default function Works() {
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  const [active, setActive] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia) return;

    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);
    update();

    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!active) return undefined;

    const clamp = (event) => {
      const nextX = Math.min(
        event.clientX + 26,
        window.innerWidth - PREVIEW_WIDTH - 16,
      );
      const nextY = Math.min(
        event.clientY - 100,
        window.innerHeight - PREVIEW_HEIGHT,
      );

      x.set(Math.max(16, nextX));
      y.set(Math.max(16, nextY));
    };

    const hide = () => setActive(null);

    window.addEventListener("pointermove", clamp, { passive: true });
    window.addEventListener("scroll", hide, { passive: true });

    return () => {
      window.removeEventListener("pointermove", clamp);
      window.removeEventListener("scroll", hide);
    };
  }, [active, x, y]);

  const handlePreviewStart = (project, event) => {
    if (!finePointer || reduceMotion) return;
    x.set(event.clientX + 26);
    y.set(event.clientY - 100);
    setActive(project);
  };

  const preview =
    finePointer && !reduceMotion
      ? createPortal(
          <AnimatePresence>
            {active ? (
              <motion.div
                key="project-preview"
                aria-hidden="true"
                data-testid="project-preview"
                className="pointer-events-none fixed left-0 top-0 z-[70] w-[264px]"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.22, ease: EASE }}
              >
                <div className="border border-line bg-surface p-2 shadow-canvas">
                  <div className="aspect-[16/9] overflow-hidden bg-[#ececec]">
                    <img
                      src={active.image}
                      alt=""
                      className={`h-full w-full ${
                        active.kind === "logo"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </div>
                  <p className="mt-2 px-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    {active.title}
                    {active.year ? ` — ${active.year}` : ""}
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          index="01"
          label="Portfolio"
          title="Selected Works"
          description="A collection of digital experiences, interfaces, and visual explorations."
        />

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-16 lg:gap-x-12 lg:gap-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              className={index % 2 === 1 ? "lg:mt-24" : ""}
              onPreviewStart={handlePreviewStart}
              onPreviewEnd={() => setActive(null)}
            />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-secondary">
            Have a project that needs shape?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink"
          >
            Start a conversation
            <ArrowUpRight
              size={13}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>

      {preview}
    </section>
  );
}
