import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import ScrollManager from "./components/ScrollManager";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";

const Playground = lazy(() => import("./pages/Playground"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const EASE = [0.22, 1, 0.36, 1];

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span
        className="text-sm font-semibold tracking-[-0.03em]"
        aria-hidden="true"
      >
        SA<span className="text-muted">.</span>
      </span>
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={location.pathname}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <ScrollManager />
      <Suspense fallback={<PageFallback />}>
        <AnimatedRoutes />
      </Suspense>
    </SmoothScroll>
  );
}
