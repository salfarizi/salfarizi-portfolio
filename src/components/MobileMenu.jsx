import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { profile } from "../data/profile";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { navLinks } from "./NavLinks";
import SocialLinks from "./SocialLinks";

const EASE = [0.22, 1, 0.36, 1];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function MobileMenu({ open, onClose }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleNavigate = (event, href) => {
    event.preventDefault();
    onClose();
    const target = document.querySelector(href);

    window.setTimeout(() => {
      target?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 40);
  };

  const ListTag = reduceMotion ? "ul" : motion.ul;
  const ItemTag = reduceMotion ? "li" : motion.li;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[80] flex h-[100dvh] flex-col bg-canvas"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: EASE }}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8">
            <span className="text-sm font-semibold tracking-[-0.03em]">
              SA<span className="text-muted">.</span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-ink"
              aria-label="Close navigation menu"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-10 sm:px-8">
            <ListTag
              className="border-t border-line"
              {...(reduceMotion
                ? {}
                : {
                    initial: "hidden",
                    animate: "show",
                    variants: listVariants,
                  })}
            >
              {navLinks.map((link, index) => (
                <ItemTag
                  key={link.label}
                  className="border-b border-line"
                  {...(reduceMotion ? {} : { variants: itemVariants })}
                >
                  <a
                    href={link.href}
                    onClick={(event) => handleNavigate(event, link.href)}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
                        0{index + 1}
                      </span>
                      <span className="text-[clamp(2.1rem,9vw,3.4rem)] font-semibold leading-none tracking-[-0.045em]">
                        {link.label}
                      </span>
                    </span>
                    {link.count ? (
                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted">
                        [{link.count}]
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </a>
                </ItemTag>
              ))}
            </ListTag>

            <div className="mt-auto pt-12">
              <p className="eyebrow">Available for new projects</p>
              <a
                href={`mailto:${profile.email}`}
                onClick={onClose}
                className="mt-2 inline-block text-base tracking-[-0.01em] text-ink"
              >
                {profile.email}
              </a>
              <SocialLinks variant="inline" className="mt-6" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
