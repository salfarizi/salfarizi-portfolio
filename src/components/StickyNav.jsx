import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const EASE = [0.22, 1, 0.36, 1];
const SECTION_IDS = ["work", "services", "experience", "contact"];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible ? (
          <motion.header
            className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas"
            initial={reduceMotion ? false : { y: -72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: -72, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
          >
            <div className="mx-auto flex h-14 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-16 lg:px-12">
              <a
                href="#home"
                className="text-sm font-semibold tracking-[-0.03em]"
                aria-label="Salman Alfarizi — back to top"
              >
                SA<span className="text-muted">.</span>
              </a>

              <NavLinks className="hidden md:block" activeId={activeId} />

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.email}?subject=Project%20inquiry`}
                  className="btn-dark hidden px-4 py-2 sm:inline-flex"
                >
                  Let's Talk
                  <ArrowUpRight size={12} strokeWidth={1.75} />
                </a>
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-ink md:hidden"
                  aria-label="Open navigation menu"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu size={16} strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {reduceMotion ? null : (
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink/50"
                style={{ scaleX: progress }}
              />
            )}
          </motion.header>
        ) : null}
      </AnimatePresence>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
