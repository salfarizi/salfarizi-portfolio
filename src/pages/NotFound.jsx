import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page not found — Salman Alfarizi",
    "The page you are looking for could not be found. Return to Salman Alfarizi's portfolio."
  );

  return (
    <div className="flex min-h-screen flex-col">
      <CaseStudyNav />

      <main className="section-shell flex flex-1 flex-col items-start justify-center py-20">
        <p className="eyebrow">404 — Page not found</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          This page doesn't exist.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary">
          The page you're looking for may have moved. Head back to the portfolio
          to continue exploring.
        </p>
        <Link to="/" className="btn-dark mt-8">
          Back to home
          <ArrowUpRight size={13} strokeWidth={1.75} />
        </Link>
      </main>

      <Footer />
    </div>
  );
}
