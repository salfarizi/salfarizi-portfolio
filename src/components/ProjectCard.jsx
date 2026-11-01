import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index = 0, className = "" }) {
  return (
    <Reveal className={className} delay={(index % 2) * 0.08}>
      <Link
        to={`/work/${project.slug}`}
        className="project-card group block"
        aria-label={`View the ${project.title} case study`}
        data-testid="project-card"
      >
        <div className="relative overflow-hidden bg-[#ececec]">
          <div className="aspect-[4/3] w-full">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-image h-full w-full object-cover"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>

          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white">
            0{index + 1}
          </span>

          <span className="absolute bottom-3 right-3 hidden translate-y-1 items-center gap-2 bg-surface px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inline-flex">
            View project
            <ArrowUpRight size={12} strokeWidth={1.75} />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5 border-t border-line pt-4">
          <div>
            <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-medium leading-none tracking-[-0.035em]">
              {project.title}
            </h3>
            <p className="mt-2 text-xs text-secondary">{project.category}</p>
          </div>
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
            {project.year}
          </span>
        </div>

        <p className="mt-3 max-w-md text-[13px] leading-relaxed text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
          {project.tags.map((tag, tagIndex) => (
            <span key={tag} className="inline-flex items-center gap-3">
              {tagIndex > 0 ? (
                <span className="h-2.5 w-px bg-line" aria-hidden="true" />
              ) : null}
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
          View Project
          <ArrowUpRight
            size={13}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </Link>
    </Reveal>
  );
}
