import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Works() {
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
    </section>
  );
}
