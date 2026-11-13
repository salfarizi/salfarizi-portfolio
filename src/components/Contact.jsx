import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Project inquiry — Salman Alfarizi",
  )}`;

  return (
    <section id="contact" className="pb-20 pt-8 lg:pb-32 lg:pt-12">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden border border-line bg-surface px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <div
              className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-line"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-line"
              aria-hidden="true"
            />

            <p className="eyebrow">05 / Contact</p>

            <h2 className="mt-6 max-w-5xl text-[clamp(2.7rem,7.5vw,7rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              Have a project <span className="text-outline">in mind?</span>
            </h2>

            <div className="mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:items-start lg:gap-8">
              <div className="lg:col-span-6">
                <p className="max-w-md text-base leading-relaxed text-secondary">
                  Let's create something meaningful together.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={mailto} className="btn-dark">
                    Let's Talk
                    <ArrowUpRight size={13} strokeWidth={1.75} />
                  </a>
                  <a href={profile.cv} download className="btn-outline">
                    Download CV
                    <Download size={13} strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center justify-between gap-4 border-b border-line pb-4"
                >
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    <Mail size={13} strokeWidth={1.75} />
                    Email
                  </span>
                  <span className="text-right text-sm text-ink transition-colors duration-300 group-hover:text-secondary">
                    {profile.email}
                  </span>
                </a>

                <div className="mt-6">
                  <p className="eyebrow">Elsewhere</p>
                  <SocialLinks variant="inline" className="mt-3" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
