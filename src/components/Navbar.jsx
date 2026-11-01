import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { profile } from "../data/profile";
import Availability from "./Availability";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-40 flex items-center justify-between gap-4 px-4 py-4 sm:px-7 sm:py-5 lg:px-11 lg:py-7">
        <Availability />

        <NavLinks className="hidden lg:block" />

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="btn-dark hidden sm:inline-flex"
          >
            Let's Talk
            <ArrowUpRight size={13} strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-ink lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={16} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
