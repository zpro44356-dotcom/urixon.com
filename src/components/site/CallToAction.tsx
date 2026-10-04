import { ArrowRight } from "lucide-react";

import { Reveal } from "./motion-primitives";

export function CallToAction() {
  return (
    <section id="contact" className="halo grain relative overflow-hidden border-t border-border">
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <p className="eyebrow">Start a project</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl leading-[1.12] font-light sm:text-5xl">
            Ready to build something <span className="text-fade">worth talking about?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Tell us where you want to be in twelve months. We'll show you the system that gets you
            there.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:info@urixon.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a strategy call
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm transition-colors duration-300 hover:bg-surface-2"
            >
              See the work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
