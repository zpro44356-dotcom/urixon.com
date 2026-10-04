import { ArrowRight } from "lucide-react";

import { Reveal } from "./motion-primitives";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We map your market, audience and funnel before touching a pixel. Every engagement starts with a clear picture of where growth is leaking.",
  },
  {
    n: "02",
    title: "Design",
    body: "Identity, interface and messaging get built as one system — a design language your team can extend without losing the thread.",
  },
  {
    n: "03",
    title: "Engineer",
    body: "High-performance builds on modern frameworks. Fast, accessible, measurable, and ready for scale from the first deploy.",
  },
  {
    n: "04",
    title: "Amplify",
    body: "Paid, organic and lifecycle channels working together, with dashboards that tell you exactly what each pound returns.",
  },
];

export function Approach() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow">Our approach</p>
              <h2 className="mt-5 text-3xl leading-[1.15] font-light sm:text-4xl lg:text-5xl">
                Our approach
                <br />
                <span className="text-fade">and how we work</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Four phases, one continuous system. Nothing is handed over half-built — each stage
                feeds the next.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm transition-colors hover:bg-surface-2"
              >
                Explore our approach
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group border-t border-border py-9 transition-colors duration-500 hover:border-border-strong sm:px-2">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-sm text-muted-foreground">({s.n})</span>
                    <h3 className="text-3xl font-light sm:text-4xl">{s.title}</h3>
                  </div>
                  <p className="mt-5 max-w-lg pl-12 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
