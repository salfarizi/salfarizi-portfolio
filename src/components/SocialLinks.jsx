import { profile } from "../data/profile";
import { cn } from "../lib/cn";
import SocialIcon from "./SocialIcon";

const layouts = {
  hero: "grid grid-cols-2 items-center gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 lg:flex-col lg:items-end lg:gap-3",
  inline: "flex flex-wrap items-center gap-x-6 gap-y-3",
  stack: "flex flex-col items-start gap-3",
};

export default function SocialLinks({
  variant = "inline",
  className = "",
  linkClassName = "",
}) {
  return (
    <ul className={cn(layouts[variant] ?? layouts.inline, className)}>
      {profile.socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-secondary transition-colors duration-300 hover:text-ink",
              linkClassName,
            )}
            aria-label={`${social.label} — opens in a new tab`}
          >
            <SocialIcon
              name={social.icon}
              className="h-3 w-3 text-muted transition-colors duration-300 group-hover:text-ink"
            />
            <span className="border-b border-transparent pb-px transition-colors duration-300 group-hover:border-ink/30">
              {social.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
