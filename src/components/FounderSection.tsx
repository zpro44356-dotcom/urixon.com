import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="founder"
      className="px-6 md:px-12 py-24 md:py-40 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.p
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          — The Mind Behind Urixon
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <motion.img
                src={founderImg}
                alt="Founder & Creative Director of Urixon"
                className="w-full h-full object-cover object-top grayscale"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border pointer-events-none" />
            </div>
            {/* Decorative frame offset */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Founder & Creative Director
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-foreground leading-[0.95] mb-10">
              Designing with
              <br />
              <span className="italic font-light text-muted-foreground">
                purpose.
              </span>
            </h2>

            <div className="w-16 h-px bg-foreground mb-8" />

            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-10">
              As the founder of Urixon, I bring over{" "}
              <span className="text-foreground">6 years of experience</span> in
              design, branding, and creative thinking — helping businesses
              transform ideas into powerful visual identities. My passion lies
              in creating meaningful designs that not only look modern and
              professional but also communicate purpose, emotion, and strategy.
              From brand identity and UI/UX design to creative direction, I
              focus on delivering innovative solutions that help brands stand
              out, build trust, and connect with their audience in a
              competitive digital world.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  6+
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  Years
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  120+
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  15+
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  Industries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
