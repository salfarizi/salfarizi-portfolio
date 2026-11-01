import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { getNextProject, getProjectBySlug } from "../data/projects";
import { profile } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";

function CaseBlock({ index, title, children }) {
  return (
    <Reveal>
      <section className="border-t border-line pt-6">
        <div className="grid gap-5 sm:grid-cols-12 sm:gap-6">
          <div className="sm:col-span-4">
            <h2 className="eyebrow">
              <span className="text-ink">{index}</span>
              <span className="mx-2 text-line">/</span>
              {title}
            </h2>
          </div>
          <div className="text-[15px] leading-[1.75] text-secondary sm:col-span-8">
            {children}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function WireframeFrame({ label, variant }) {
  return (
    <figure className="border border-line bg-surface p-2">
      <div className="aspect-[3/4] overflow-hidden bg-[#f6f6f6] p-3">
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-7 bg-[#d9d9d9]" />
          <div className="h-1.5 w-3 bg-[#e6e6e6]" />
        </div>

        {variant === 0 ? (
          <>
            <div className="mt-4 h-32 bg-[#e9e9e9]" />
            <div className="mt-3 space-y-2">
              <div className="h-1.5 w-4/5 bg-[#dedede]" />
              <div className="h-1.5 w-3/5 bg-[#e8e8e8]" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="h-14 bg-[#ededed]" />
              <div className="h-14 bg-[#ededed]" />
            </div>
            <div className="mt-5 flex justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#cfcfcf]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#e0e0e0]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#e0e0e0]" />
            </div>
          </>
        ) : null}

        {variant === 1 ? (
          <>
            <div className="mt-4 aspect-[4/3] bg-[#e4e4e4]" />
            <div className="mt-3 h-2 w-2/3 bg-[#d6d6d6]" />
            <div className="mt-2 h-1.5 w-1/2 bg-[#e7e7e7]" />
            <div className="mt-4 space-y-2 border-t border-[#e3e3e3] pt-3">
              <div className="h-1.5 w-full bg-[#e2e2e2]" />
              <div className="h-1.5 w-5/6 bg-[#e8e8e8]" />
              <div className="h-1.5 w-2/3 bg-[#e8e8e8]" />
            </div>
            <div className="mt-4 h-7 w-24 bg-[#d6d6d6]" />
          </>
        ) : null}

        {variant === 2 ? (
          <>
            <div className="mt-4 h-2 w-1/2 bg-[#d6d6d6]" />
            <div className="mt-4 space-y-2">
              {[0, 1, 2, 3].map((row) => (
                <div
                  key={row}
                  className="flex items-center gap-2 border-b border-[#e7e7e7] pb-2"
                >
                  <div className="h-8 w-8 shrink-0 bg-[#e4e4e4]" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1.5 w-3/4 bg-[#dcdcdc]" />
                    <div className="h-1 w-1/2 bg-[#ebebeb]" />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <figcaption className="mt-2 px-1 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  usePageMeta(
    project
      ? `${project.title} — Salman Alfarizi`
      : "Project not found — Salman Alfarizi",
    project
      ? `${project.title}: ${project.description}`
      : "The requested project could not be found.",
  );

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <CaseStudyNav />
        <main className="section-shell flex flex-1 flex-col items-start justify-center py-20">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
            Project not found.
          </h1>
          <Link to="/" className="btn-dark mt-8">
            Back home
            <ArrowUpRight size={13} strokeWidth={1.75} />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const nextProject = getNextProject(project.slug);
  const { caseStudy } = project;

  return (
    <div className="min-h-screen">
      <CaseStudyNav />

      <main>
        <div className="section-shell pb-20 pt-10 lg:pb-28 lg:pt-16">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-secondary transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>

          <header className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                {project.category} — {project.year}
              </p>
              <h1 className="mt-4 text-[clamp(2.75rem,8.5vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                {project.title}
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-secondary">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
                {project.tags.map((tag, index) => (
                  <span key={tag} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span
                        className="h-2.5 w-px bg-line"
                        aria-hidden="true"
                      />
                    ) : null}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="mt-10 border border-line bg-surface p-2 sm:p-3">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-auto w-full"
              width={1200}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="mt-14 grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
            <aside className="self-start lg:sticky lg:top-24 lg:col-span-3">
              <dl className="space-y-7">
                <div>
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-2 text-sm text-ink">{project.role}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Timeline</dt>
                  <dd className="mt-2 text-sm text-ink">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Scope</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-secondary">
                    {project.tags.join(", ")}
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="space-y-14 lg:col-span-8 lg:col-start-5 lg:space-y-20">
              <CaseBlock index="01" title="Overview">
                <p className="text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.65] text-ink">
                  {caseStudy.overview}
                </p>
              </CaseBlock>

              <CaseBlock index="02" title="Background">
                <p>{caseStudy.background}</p>
              </CaseBlock>

              <CaseBlock index="03" title="Problem Statement">
                <p>{caseStudy.problem}</p>
              </CaseBlock>

              <CaseBlock index="04" title="Goals">
                <ul className="space-y-3">
                  {caseStudy.goals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink"
                        aria-hidden="true"
                      />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock index="05" title="Design Process">
                <ol className="space-y-6">
                  {caseStudy.process.map((step, index) => (
                    <li
                      key={step.title}
                      className="grid gap-2 sm:grid-cols-[2rem_1fr] sm:gap-4"
                    >
                      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted sm:pt-1">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CaseBlock>

              <CaseBlock index="06" title="Wireframes">
                <div className="grid gap-3 sm:grid-cols-3">
                  {caseStudy.wireframes.map((label, index) => (
                    <WireframeFrame
                      key={label}
                      label={label}
                      variant={index}
                    />
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock index="07" title="Final UI">
                <figure>
                  <div className="border border-line bg-surface p-2">
                    <img
                      src={project.image}
                      alt={`${project.title} final interface artwork`}
                      className="h-auto w-full"
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-muted">
                    {caseStudy.finalUiCaption}
                  </figcaption>
                </figure>
              </CaseBlock>

              <CaseBlock index="08" title="Outcome">
                <p>{caseStudy.outcome}</p>
              </CaseBlock>
            </div>
          </div>

          <section className="mt-20 border-t border-line pt-8">
            <p className="eyebrow">Next project</p>
            <Link
              to={`/work/${nextProject.slug}`}
              className="group mt-4 flex items-end justify-between gap-6"
            >
              <div>
                <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-none tracking-[-0.05em]">
                  {nextProject.title}
                </h2>
                <p className="mt-3 text-sm text-secondary">
                  {nextProject.category} — {nextProject.year}
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
          </section>

          <p className="mt-16 text-[10px] uppercase tracking-[0.16em] text-muted">
            {profile.name} — {profile.location}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
