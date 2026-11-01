import { profile } from "../data/profile";
import { cn } from "../lib/cn";

export default function Availability({ className = "" }) {
  return (
    <a
      href="#contact"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Available for new projects — get in touch"
    >
      <span className="status-dot" aria-hidden="true" />
      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-ink/75 transition-colors duration-300 group-hover:text-ink sm:text-[10px]">
        <span className="hidden sm:inline">{profile.availability}</span>
        <span className="sm:hidden">{profile.availabilityShort}</span>
      </span>
    </a>
  );
}
