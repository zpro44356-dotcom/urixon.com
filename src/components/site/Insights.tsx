import { ArrowUpRight } from "lucide-react";

import { Reveal } from "./motion-primitives";

const posts = [
  {
    date: "Aug 2026",
    title: "Why your brand system is a growth channel",
    body: "Identity work is usually filed under aesthetics. Treated properly it is the cheapest conversion lever you own.",
  },
  {
    date: "Jul 2026",
    title: "The anatomy of a landing page that converts",
    body: "Six structural decisions that move more revenue than any headline rewrite ever will.",
  },
  {
    date: "Jun 2026",
    title: "Meta ads after creative saturation",
    body: "What we changed in our production pipeline when volume stopped beating craft.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">Insights</p>
          <h2 className="mt-5 max-w-lg text-3xl leading-[1.15] font-light sm:text-4xl">
            Notes from the <span className="text-fade">studio</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="panel group flex h-full flex-col p-7 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                  {p.date}
                </span>
                <h3 className="mt-4 text-lg leading-snug font-light">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs text-foreground">
                  Read more
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
