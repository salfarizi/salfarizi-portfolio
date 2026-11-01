import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import Navbar from "./Navbar";
import Portrait from "./Portrait";
import SocialLinks from "./SocialLinks";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0, distance = 18) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  const revealLine = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            y: "0.55em",
            clipPath: "inset(0% 0% 100% 0%)",
          },
          animate: {
            opacity: 1,
            y: "0em",
            clipPath: "inset(0% 0% 0% 0%)",
          },
          transition: { duration: 1.1, delay, ease: EASE },
        };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative px-2.5 pt-2.5 sm:px-4 sm:pt-4 lg:px-7 lg:pt-7"
    >
      <div
        data-testid="hero-canvas"
        className="relative mx-auto flex min-h-[calc(100svh-1.25rem)] w-full max-w-[1800px] flex-col overflow-hidden rounded-[22px] border border-line bg-surface shadow-canvas sm:min-h-[calc(100svh-2rem)] sm:rounded-[26px] lg:min-h-[calc(100svh-3.5rem)] lg:rounded-canvas"
      >
        <Navbar />

        <div className="relative flex flex-1 flex-col lg:block">
          {/* Oversized name */}
          <div className="relative z-10 px-4 pt-9 sm:px-8 sm:pt-12 lg:absolute lg:inset-x-0 lg:top-[7vh] lg:px-12 lg:pt-0">
            <h1
              className="hero-name text-center"
              aria-label={profile.name}
              data-testid="hero-name"
            >
              <span className="block" aria-hidden="true">
                <motion.span
                  className="hero-name__line hero-name__outline"
                  {...revealLine(0.12)}
                >
                  {profile.displayName[0]}
                </motion.span>
              </span>
              <span className="block" aria-hidden="true">
                <motion.span
                  className="hero-name__line hero-name__solid"
                  {...revealLine(0.24)}
                >
                  {profile.displayName[1]}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Portrait */}
          <motion.div
            data-testid="hero-portrait"
            className="relative z-20 -mt-[6.5vw] flex justify-center sm:-mt-[4vw] lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.52, ease: EASE }}
          >
            <Portrait className="h-[clamp(360px,56vh,600px)] w-[clamp(300px,94vw,520px)] lg:h-[clamp(480px,72vh,780px)] lg:w-[clamp(380px,44vw,640px)]" />
          </motion.div>

          <p className="relative z-20 mt-2 text-center text-[9px] font-medium uppercase tracking-[0.24em] text-muted lg:hidden">
            Tap portrait to reveal color
          </p>

          {/* Hero information */}
          <motion.div
            data-testid="hero-info"
            className="relative z-30 px-5 pb-8 pt-7 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-12 lg:items-end lg:px-12 lg:pb-10 lg:pt-0"
            {...fadeUp(0.78)}
          >
            <div className="lg:col-span-4 lg:max-w-[260px] xl:max-w-[300px]">
              <p className="eyebrow">01 — Introduction</p>
              <h2 className="mt-3 text-[clamp(1.35rem,2vw,1.7rem)] font-medium leading-[1.2] tracking-[-0.025em]">
                UI/UX Designer &amp; Creative Designer
              </h2>
              <p className="mt-3 max-w-[310px] text-[13px] leading-relaxed text-secondary">
                {profile.description}
              </p>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ink"
              >
                Let's Collaborate
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div
              data-testid="hero-socials"
              className="mt-9 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:justify-self-end lg:text-right"
            >
              <p className="eyebrow lg:mb-3">Socials</p>
              <SocialLinks variant="hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
