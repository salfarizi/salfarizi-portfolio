import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export default function CaseStudyNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[-0.03em]"
          aria-label="Salman Alfarizi — home"
        >
          SA<span className="text-muted">.</span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/#work"
            className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-secondary transition-colors duration-300 hover:text-ink sm:inline"
          >
            All Work
          </Link>
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="btn-dark px-4 py-2"
          >
            Let's Talk
            <ArrowUpRight size={12} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  );
}
