import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PortfolioGrid from "./portfolio/PortfolioGrid";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Portfolio
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-sm mt-6 md:mt-0">
            Every project is a statement. Every pixel, intentional.
          </p>
        </motion.div>

        <PortfolioGrid />
      </div>
    </section>
  );
};

export default PortfolioSection;
