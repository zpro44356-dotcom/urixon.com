import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { WordReveal } from "./motion-primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-screen items-center overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[88%] max-w-[980px] orbit-line opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-[20%] mx-auto h-[74%] max-w-[780px] orbit-line opacity-50" />
      <span className="absolute top-24 left-[8%] hidden h-10 w-px bg-border-strong before:absolute before:top-1/2 before:-left-5 before:h-px before:w-10 before:bg-border-strong md:block" />
      <span className="absolute right-[8%] bottom-64 hidden h-10 w-px bg-border-strong before:absolute before:top-1/2 before:-left-5 before:h-px before:w-10 before:bg-border-strong md:block" />

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 py-1.5 pr-4 pl-1.5 backdrop-blur"
        >
          <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground">
            Creative
          </span>
          <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Digital Studio
          </span>
          <ArrowRight className="size-3.5 text-muted-foreground" />
        </motion.div>

        <h1 className="mx-auto mt-7 max-w-[900px] text-[2.55rem] leading-[1.04] font-medium sm:text-6xl lg:text-[4.5rem]">
          <WordReveal text="We Turn Ideas" delay={0.15} />
          <br />
          <WordReveal text="Into Measurable Growth" delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          URIXON is a full-spectrum digital agency — we build powerful brands, engineer
          cutting-edge software, and drive measurable growth for businesses ready to dominate
          their market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start A Project
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-6 py-3 text-sm text-foreground backdrop-blur transition-colors duration-300 hover:bg-surface-2"
          >
            <CalendarDays className="size-4" />
            Explore Work
          </a>
        </motion.div>
      </div>

    </section>
  );
}
