import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoCard from "./LogoCard";
import UiUxCard from "./UiUxCard";
import { logoProjects, uiuxProjects } from "./portfolioData";

type Tab = "logo" | "uiux";
const TABS: Tab[] = ["logo", "uiux"];

const PortfolioGrid = () => {
  const [tab, setTab] = useState<Tab>("logo");
  const [edgeHover, setEdgeHover] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const switchTo = (next: Tab) => {
    if (next !== tab) setTab(next);
  };

  const slideTo = (dir: 1 | -1) => {
    const idx = TABS.indexOf(tab);
    const nextIdx = (idx + dir + TABS.length) % TABS.length;
    switchTo(TABS[nextIdx]);
  };

  // Track mouse proximity to edges of the grid container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inY) { setEdgeHover(null); return; }
      const threshold = 80;
      if (x >= 0 && x < threshold) setEdgeHover("left");
      else if (x > rect.width - threshold && x <= rect.width) setEdgeHover("right");
      else setEdgeHover(null);
    };
    const onLeave = () => setEdgeHover(null);
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const direction = TABS.indexOf(tab) === 0 ? -1 : 1;

  return (
    <div>
      {/* Tabs */}
      <div className="mt-6 mb-12 flex items-center gap-8 md:gap-12 border-b border-border/30">
        {TABS.map((t) => {
          const label = t === "logo" ? "Logo Design" : "UI / UX";
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => switchTo(t)}
              className={`relative pb-4 font-display text-sm md:text-base tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
                active ? "text-foreground" : "text-muted-foreground/50 hover:text-foreground/80"
              }`}
            >
              {label}
              {active && (
                <motion.span
                  layoutId="portfolio-tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-px bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid container with edge controllers */}
      <div ref={containerRef} className="relative">
        {/* Edge arrows */}
        <button
          onClick={() => slideTo(-1)}
          aria-label="Previous category"
          className={`hidden md:flex fixed md:absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/70 backdrop-blur-md border border-border/40 items-center justify-center text-foreground transition-all duration-300 hover:bg-background/90 ${
            edgeHover === "left" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => slideTo(1)}
          aria-label="Next category"
          className={`hidden md:flex fixed md:absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/70 backdrop-blur-md border border-border/40 items-center justify-center text-foreground transition-all duration-300 hover:bg-background/90 ${
            edgeHover === "right" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {tab === "logo" && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {logoProjects.map((p, i) => (
                  <LogoCard key={p.title} project={p} index={i} />
                ))}
              </motion.div>
            )}

            {tab === "uiux" && (
              <motion.div
                key="uiux"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              >
                {uiuxProjects.map((p, i) => (
                  <UiUxCard key={p.title} project={p} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
