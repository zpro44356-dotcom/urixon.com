import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { UiUxProject } from "./portfolioData";

const UiUxCard = ({ project, index }: { project: UiUxProject; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1920x1080 = 16:9 */}
      <div className="relative aspect-[1920/1080] overflow-hidden bg-secondary rounded-sm">
        <motion.img
          src={project.image}
          alt={`${project.title} UI/UX preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Glossy sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-foreground/5 opacity-60 mix-blend-overlay" />

        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {project.category}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default UiUxCard;
