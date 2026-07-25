import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "300+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "12", label: "Design Awards" },
  { value: "2023", label: "Founded" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">About Us</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.9]">
              Design is
              <br />
              <span className="text-gradient">rebellion.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              URIXON is a collective of designers, artists, and thinkers who refuse to settle 
              for ordinary. We believe design should provoke, inspire, and transform. Based nowhere 
              and everywhere — we serve clients across continents with a singular vision: make it unforgettable.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              From Fortune 500 rebrandings to underground art exhibitions, our work spans the 
              spectrum of visual culture. We don't follow trends — we set them.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 border border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-secondary/30 p-8 md:p-12 text-center group hover:bg-secondary/60 transition-colors duration-500"
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-foreground block mb-2">
                {stat.value}
              </span>
              <span className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
