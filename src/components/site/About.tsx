import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { CharReveal, Reveal } from "./motion-primitives";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-surface-light py-28 text-surface-light-foreground sm:py-40">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-surface-light-foreground/55"></p>
      </Reveal>

      <div className="relative mx-auto mt-10 max-w-7xl px-6">
        {/* <motion.img
          style={{ y: yLeft }}
          src={about1}
          alt="Monochrome brand identity stationery mockups"
          width={800}
          height={1000}
          loading="lazy"
          className="pointer-events-none absolute -top-8 left-5 hidden w-44 rotate-[-5deg] rounded-lg border border-background/10 object-cover grayscale shadow-xl xl:block"
        />
        <motion.img
          style={{ y: yRight }}
          src={about2}
          alt="Abstract wireframe grid on a dark screen"
          width={800}
          height={1000}
          loading="lazy"
          className="pointer-events-none absolute right-5 -bottom-10 hidden w-44 rotate-[5deg] rounded-lg border border-background/10 object-cover grayscale shadow-xl xl:block"
        /> */}

        <h2 className="mx-auto max-w-4xl text-center text-2xl leading-[1.42] font-medium sm:text-[27px] sm:leading-[1.4]">
          <CharReveal text="At URIXON we build integrated digital systems that connect brand, product and marketing — capturing attention, shaping trust, and converting interest into consistent growth that keeps working long after launch." />
        </h2>
      </div>
    </section>
  );
}
