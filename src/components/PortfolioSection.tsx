import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Import all portfolio images ---
// Oro
import oro1 from "@/assets/portfolio/oro/1.jpg";
import oro2 from "@/assets/portfolio/oro/2.jpg";
import oro3 from "@/assets/portfolio/oro/3.jpg";
import oro4 from "@/assets/portfolio/oro/4.jpg";
import oro5 from "@/assets/portfolio/oro/5.jpg";
import oro6 from "@/assets/portfolio/oro/6.jpg";
import oro7 from "@/assets/portfolio/oro/7.jpg";
// Aliqua
import aliqua1 from "@/assets/portfolio/aliqua/1.jpg";
import aliqua2 from "@/assets/portfolio/aliqua/2.jpg";
import aliqua3 from "@/assets/portfolio/aliqua/3.jpg";
import aliqua4 from "@/assets/portfolio/aliqua/4.jpg";
import aliqua5 from "@/assets/portfolio/aliqua/5.jpg";
import aliqua6 from "@/assets/portfolio/aliqua/6.jpg";
// CozyCat
import cozycat1 from "@/assets/portfolio/cozycat/1.jpg";
import cozycat2 from "@/assets/portfolio/cozycat/2.jpg";
import cozycat3 from "@/assets/portfolio/cozycat/3.jpg";
import cozycat4 from "@/assets/portfolio/cozycat/4.jpg";
import cozycat5 from "@/assets/portfolio/cozycat/5.jpg";
import cozycat6 from "@/assets/portfolio/cozycat/6.jpg";
// Flooring Express
import floor1 from "@/assets/portfolio/flooring-express/1.jpg";
import floor2 from "@/assets/portfolio/flooring-express/2.jpg";
import floor3 from "@/assets/portfolio/flooring-express/3.jpg";
import floor4 from "@/assets/portfolio/flooring-express/4.jpg";
import floor5 from "@/assets/portfolio/flooring-express/5.jpg";
import floor6 from "@/assets/portfolio/flooring-express/6.jpg";
import floor7 from "@/assets/portfolio/flooring-express/7.jpg";
import floor8 from "@/assets/portfolio/flooring-express/8.jpg";
// Salvation Hill
import salv1 from "@/assets/portfolio/salvation-hill/1.png";
import salv2 from "@/assets/portfolio/salvation-hill/2.png";
import salv3 from "@/assets/portfolio/salvation-hill/3.png";
import salv4 from "@/assets/portfolio/salvation-hill/4.png";
// Xynex
import xynex1 from "@/assets/portfolio/xynex/1.png";
import xynex2 from "@/assets/portfolio/xynex/2.png";
import xynex3 from "@/assets/portfolio/xynex/3.png";
import xynex4 from "@/assets/portfolio/xynex/4.png";
import xynex5 from "@/assets/portfolio/xynex/5.png";
import xynex6 from "@/assets/portfolio/xynex/6.png";
import xynex7 from "@/assets/portfolio/xynex/7.png";
// Yesterday
import yest1 from "@/assets/portfolio/yesterday/1.png";
import yest2 from "@/assets/portfolio/yesterday/2.png";
import yest3 from "@/assets/portfolio/yesterday/3.png";
import yest4 from "@/assets/portfolio/yesterday/4.png";
import yest5 from "@/assets/portfolio/yesterday/5.png";
import yest6 from "@/assets/portfolio/yesterday/6.png";
import yest7 from "@/assets/portfolio/yesterday/7.png";

const projects = [
  { title: "Oro Cream", category: "Brand Identity", images: [oro1, oro2, oro3, oro4, oro5, oro6, oro7] },
  { title: "Aliqua", category: "Logo Design", images: [aliqua1, aliqua2, aliqua3, aliqua4, aliqua5, aliqua6] },
  { title: "CozyCat", category: "Brand Identity", images: [cozycat1, cozycat2, cozycat3, cozycat4, cozycat5, cozycat6] },
  { title: "Flooring Express", category: "Logo Design", images: [floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8] },
  { title: "Salvation Hill", category: "Brand Identity", images: [salv1, salv2, salv3, salv4] },
  { title: "Xynex", category: "Logo Design", images: [xynex1, xynex2, xynex3, xynex4, xynex5, xynex6, xynex7] },
  { title: "Yesterday", category: "Brand Identity", images: [yest1, yest2, yest3, yest4, yest5, yest6, yest7] },
];

const AUTO_CYCLE_MS = 4000;

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = project.images.length;

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + total) % total);
  }, [total]);

  // Auto-cycle
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => go(1), AUTO_CYCLE_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [go, isHovered]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
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

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Prev / Next buttons */}
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

        {/* Dot indicators */}
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

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category}
          </span>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">
            {project.title}
          </h3>
        </div>

        {/* Image counter */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="font-body text-[10px] tracking-wider text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">
            {current + 1} / {total}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Portfolio
            </h2>
            <p className="font-display text-lg md:text-2xl tracking-[0.15em] uppercase text-muted-foreground/60 mt-2 font-medium">
              Logo Design
            </p>
          </div>
          <p className="font-body text-muted-foreground max-w-sm mt-6 md:mt-0">
            Every project is a statement. Every pixel, intentional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
