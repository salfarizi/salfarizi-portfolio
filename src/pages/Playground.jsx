import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { gallery } from "../data/gallery";
import { usePageMeta } from "../hooks/usePageMeta";

function GalleryItem({ item, index }) {
  const isVideo = item.type === "video" && item.video;

  return (
    <Reveal className="mb-6 break-inside-avoid sm:mb-7" delay={(index % 3) * 0.06}>
      <figure className="group">
        <div
          className="relative overflow-hidden border border-line bg-[#ececec]"
          style={{ aspectRatio: item.ratio }}
        >
          {isVideo ? (
            <video
              src={item.video}
              poster={item.src}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          )}

          {item.type === "video" ? (
            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 bg-ink px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
              <Play size={10} strokeWidth={2} />
              Motion
            </span>
          ) : null}
        </div>

        <figcaption className="mt-4 flex items-start justify-between gap-5 border-t border-line pt-3">
          <div>
            <h2 className="text-[clamp(1.05rem,1.5vw,1.35rem)] font-medium leading-none tracking-[-0.03em]">
              {item.title}
            </h2>
            <p className="mt-2 text-[11px] text-secondary">{item.category}</p>
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-muted">
              0{index + 1}
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-muted">
              {item.year}
            </span>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Playground() {
  usePageMeta(
    "Playground — Salman Alfarizi",
    "Photography, motion, and visual experiments by Salman Alfarizi — studies in form, rhythm, and light outside client work.",
  );

  return (
    <div className="min-h-screen">
      <CaseStudyNav />

      <main className="section-shell pb-20 pt-10 lg:pb-28 lg:pt-16">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-secondary transition-colors duration-300 hover:text-ink"
        >
          <ArrowLeft
            size={13}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>

        <header className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow">Playground — Beyond interfaces</p>
            <h1 className="mt-4 text-[clamp(2.75rem,8.5vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Outside the frame.
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-secondary">
              Photography, motion, and visual studies made outside client work.
              Small exercises in form, rhythm, and light — kept here so the
              thinking stays visible.
            </p>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              {gallery.length} studies · Updated 2026
            </p>
          </div>
        </header>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:mt-16 lg:columns-3">
          {gallery.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-secondary">
            Have a story that needs shooting or editing?
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink"
          >
            Start a conversation
            <ArrowUpRight
              size={13}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
