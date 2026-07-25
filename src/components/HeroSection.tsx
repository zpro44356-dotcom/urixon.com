import { motion } from "framer-motion";
import heroArt from "@/assets/hero-art.jpg";

const SHOW_HERO_ART = false; // <-- Set to `false` for plain black

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      <div className="absolute inset-0">
        {SHOW_HERO_ART && (
          <img
            src={heroArt}
            alt="Abstract geometric art"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.p
            className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(2rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              We Turn Ideas{" "}
              <span className="font-light text-gradient">into Growth</span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-8 text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            URIXON is a full-spectrum digital agency — we build powerful brands, engineer cutting-edge software,
            and drive measurable growth for businesses ready to dominate their market.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group/blade relative isolate overflow-hidden text-xs tracking-[0.25em] uppercase bg-foreground text-background px-8 py-4 transition-transform duration-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-[-35%] left-[-30%] w-[28%] translate-x-[-220%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,hsl(var(--muted-foreground)/0.18),hsl(var(--background)/0.3),hsl(var(--muted-foreground)/0.18),transparent)] opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover/blade:translate-x-[520%] group-hover/blade:opacity-100"
              />
              <span className="relative z-10">Start a Project</span>
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="group text-xs tracking-[0.25em] uppercase border border-border text-foreground px-8 py-4 hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Work
              <span className="inline-block w-8 h-px bg-foreground transition-all duration-300 group-hover:w-14" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
