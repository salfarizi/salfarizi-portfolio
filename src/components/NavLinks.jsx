import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

export const navLinks = [
  { label: "Work", href: "#work", count: "04", id: "work" },
  { label: "Services", href: "#services", count: "05", id: "services" },
  { label: "Experience", href: "#experience", count: "06", id: "experience" },
  { label: "Contact", href: "#contact", count: null, id: "contact" },
];

export default function NavLinks({
  className = "",
  activeId = "",
  onNavigate,
}) {
  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex items-center gap-6 xl:gap-8">
        {navLinks.map((link) => {
          const isRoute = Boolean(link.route);
          const Tag = isRoute ? Link : "a";

          const content = (
            <>
              {link.label}
              {link.count ? (
                <sup className="text-[8px] font-normal tracking-normal text-muted">
                  [{link.count}]
                </sup>
              ) : null}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100",
                  activeId === link.id && "scale-x-100",
                )}
                aria-hidden="true"
              />
            </>
          );

          const linkClassName = cn(
            "group relative inline-flex items-baseline gap-1 py-1 text-[11px] font-medium tracking-[0.01em] text-ink/65 transition-colors duration-300 hover:text-ink",
            activeId === link.id && "text-ink",
          );

          return (
            <li key={link.label}>
              {isRoute ? (
                <Link
                  to={link.href}
                  onClick={onNavigate}
                  aria-current={activeId === link.id ? "true" : undefined}
                  className={linkClassName}
                >
                  {content}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={onNavigate}
                  aria-current={activeId === link.id ? "true" : undefined}
                  className={linkClassName}
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
