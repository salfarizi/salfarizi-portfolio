import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          index="04"
          label="Profile"
          title="A Little About Me"
          description="Designing with equal attention to the system and the details."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="max-w-xl text-[clamp(1.25rem,2.1vw,1.75rem)] leading-[1.45] tracking-[-0.025em] text-ink">
              {profile.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-dark">
                Let's Collaborate
                <ArrowUpRight size={13} strokeWidth={1.75} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-outline">
                Email Me
                <Mail size={13} strokeWidth={1.75} />
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              <MapPin size={12} strokeWidth={1.75} />
              {profile.location}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow">Skills</h3>
                <ul className="mt-4 border-t border-line">
                  {profile.skills.map((skill, index) => (
                    <li
                      key={skill}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 text-[13px] text-ink/80"
                    >
                      <span>{skill}</span>
                      <span className="text-[10px] tracking-[0.14em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow">Tools</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {profile.tools.map((tool) => (
                    <li
                      key={tool}
                      className="border border-line px-2.5 py-1.5 text-[11px] text-secondary"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-line pt-5">
                  <p className="eyebrow">Approach</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                    Start with the problem, build the structure, then refine the
                    details until the experience feels effortless.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
