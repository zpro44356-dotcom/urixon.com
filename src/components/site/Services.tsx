import { ArrowUpRight, BarChart3, Braces, Crosshair, Layers3, Search, Sparkles } from "lucide-react";

import { Reveal } from "./motion-primitives";

const services = [
  {
    n: "01",
    title: "Web Development",
    body: "High-performance websites and web applications built with modern frameworks. From landing pages to complex platforms — engineered for speed, scale, and conversion.",
  },
  {
    n: "02",
    title: "Digital Marketing",
    body: "Data-driven campaigns that put your brand in front of the right audience. Content strategy, funnel optimization, and analytics that turn traffic into revenue.",
  },
  {
    n: "03",
    title: "SEO Optimization",
    body: "Technical SEO, keyword strategy, and content architecture — so your audience finds you before your competitors.",
  },
  {
    n: "04",
    title: "Meta Ads",
    body: "Precision-targeted Facebook and Instagram advertising. From creative production to audience segmentation, every pound optimized for return.",
  },
  {
    n: "05",
    title: "UI/UX Design",
    body: "Human-centered interfaces that feel intuitive and look stunning. Research-backed design systems, prototyping, and handoff.",
  },
  {
    n: "06",
    title: "Brand Identity",
    body: "Logos, typography, motion and packaging built into one coherent identity that scales across every touchpoint.",
  },
];

const icons = [Braces, BarChart3, Search, Crosshair, Layers3, Sparkles] as const;

export function Services() {
  return (
    <section id="services" className="relative bg-surface-light py-28 text-surface-light-foreground sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-surface-light-foreground/55">Our core business systems</p>
          <div className="mt-5 grid gap-6 border-b border-background/10 pb-10 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-end">
            <h2 className="max-w-4xl text-3xl leading-[1.15] font-light sm:text-4xl lg:text-5xl">
              From code to campaigns —
              <span className="block text-surface-light-foreground/55">
                everything your digital presence demands.
              </span>
            </h2>
            <p className="max-w-xs text-xs leading-relaxed text-surface-light-foreground/60 lg:pb-1">
              One connected system for how your business looks, works, and grows.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={s.n} delay={(i % 2) * 0.08}>
                <article className="group flex min-h-[340px] flex-col rounded-xl border border-background/10 bg-background p-7 text-foreground shadow-lg transition-transform duration-500 hover:-translate-y-2">
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-lg border border-border bg-surface"><Icon className="size-5" /></span>
                    <span className="text-xs text-muted-foreground">{s.n}</span>
                  </div>
                  <div className="mt-auto pt-16">
                    <h3 className="text-2xl font-light">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <ArrowUpRight className="mt-6 size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
