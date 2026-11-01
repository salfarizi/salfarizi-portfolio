import { cn } from "../lib/cn";
import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
  description,
  className = "",
}) {
  return (
    <Reveal className={cn("border-t border-line pt-6 lg:pt-8", className)}>
      <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <p className="eyebrow">
            <span className="text-ink">{index}</span>
            <span className="mx-2 text-line">/</span>
            {label}
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,6.2vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-balance">
            {title}
          </h2>
        </div>
        {description ? (
          <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-4 lg:col-start-9 lg:justify-self-end lg:text-right">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
