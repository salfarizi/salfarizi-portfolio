import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          index="02"
          label="Expertise"
          title="What I Do"
          description="Five connected disciplines one approach grounded in clarity, craft, and practical execution."
        />

        <div className="mt-12 border-t border-line lg:mt-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="group grid gap-4 border-b border-line py-7 transition-colors duration-500 hover:bg-white/70 md:grid-cols-12 md:items-start md:gap-6 md:py-9">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted md:col-span-1 md:pt-1">
                  {service.number}
                </span>

                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-1 md:col-span-4 md:text-[clamp(1.5rem,2.2vw,2.1rem)]">
                  {service.title}
                </h3>

                <div className="md:col-span-4">
                  <p className="max-w-md text-[13px] leading-relaxed text-secondary">
                    {service.description}
                  </p>
                  <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
                    {service.deliverables.join(" · ")}
                  </p>
                </div>

                <div className="flex md:col-span-2 md:col-start-11 md:justify-end">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-white md:opacity-0 md:group-hover:opacity-100">
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
