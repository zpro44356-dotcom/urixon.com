import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LogoProject } from "./portfolioData";

const AUTO_CYCLE_MS = 3600000;

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
};

const LogoCard = ({ project, index }: { project: LogoProject; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const total = project.images.length;

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(() => go(1), AUTO_CYCLE_MS);
    return () => clearInterval(t);
  }, [go, isHovered]);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[1080/1350] overflow-hidden bg-secondary rounded-sm">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={`${project.title} mockup ${current + 1}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
            aria-label="Previous mockup"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
            aria-label="Next mockup"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-foreground w-4" : "bg-foreground/40 hover:bg-foreground/70"
              }`}
              aria-label={`View mockup ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category}
          </span>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">
            {project.title}
          </h3>
        </div>

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="font-body text-[10px] tracking-wider text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">
            {current + 1} / {total}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoCard;
