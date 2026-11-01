import { experience } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          index="03"
          label="Journey"
          title="Experience & Journey"
          description="A path shaped by product thinking, visual craft, and a hands-on approach to building interfaces."
        />

        <div className="mt-12 border-t border-line lg:mt-16">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
              <article className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-6 lg:py-10">
                <div className="md:col-span-3">
                  <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    {item.current ? (
                      <span className="status-dot" aria-hidden="true" />
                    ) : null}
                    {item.period}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium tracking-[-0.025em]">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{item.company}</p>
                </div>

                <p className="max-w-lg text-[13px] leading-relaxed text-secondary md:col-span-5">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
