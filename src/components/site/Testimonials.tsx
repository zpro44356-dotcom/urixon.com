import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "./motion-primitives";

const quotes = [
  {
    quote:
      "Urixon rebuilt our identity and our funnel in the same breath. Enquiries tripled within a quarter and the brand finally looks like the company we are.",
    name: "Hannah Reid",
    role: "Founder, Oro Cream",
  },
  {
    quote:
      "The clearest process we've worked with. Strategy, design and build handled as one system — no handover gaps, no guesswork.",
    name: "Marcus Vale",
    role: "CEO, Xynex",
  },
  {
    quote:
      "They treated our ad spend like their own. Creative, targeting and reporting all sharpened until the numbers made sense.",
    name: "Priya Anand",
    role: "Marketing Lead, Flooring Express",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const active = quotes[i]!;

  useEffect(() => {
    const timer = window.setInterval(() => setI((value) => (value + 1) % quotes.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const go = (dir: number) => setI((v) => (v + dir + quotes.length) % quotes.length);

  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Client words</p>
        </Reveal>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl leading-[1.4] font-light sm:text-3xl lg:text-4xl">
                “{active.quote}”
              </p>
              <footer className="mt-8">
                <span className="block text-sm">{active.name}</span>
                <span className="mt-1 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {active.role}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="rounded-full border border-border p-2.5 transition-colors hover:bg-surface-2"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="rounded-full border border-border p-2.5 transition-colors hover:bg-surface-2"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
