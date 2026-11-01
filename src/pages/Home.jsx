import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import StickyNav from "../components/StickyNav";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-[11px] focus:font-medium focus:uppercase focus:tracking-[0.14em] focus:text-white"
      >
        Skip to content
      </a>

      <StickyNav />

      <main id="main">
        <Hero />
        <Works />
        <Services />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
