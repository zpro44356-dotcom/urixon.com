import { CountUp, Reveal } from "./motion-primitives";

const words = [
  "BRANDING",
  "IDENTITY",
  "TYPOGRAPHY",
  "ILLUSTRATION",
  "MOTION",
  "DIGITAL",
  "PRINT",
  "PACKAGING",
  "EDITORIAL",
  "ART DIRECTION",
];

const stats = [
  { value: 6, suffix: "+", label: "Years of practice" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "+", label: "Industries served" },
];

export function Clients() {
  return (
    <section className="relative border-y border-border py-14">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-center">Our esteemed clients and partners</p>
      </Reveal>

      <div className="relative mt-8 overflow-hidden">
        <div className="marquee-track flex w-max gap-10">
          {[...words, ...words].map((w, i) => (
            <span
              key={i}
              className="font-display text-lg font-light tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <CountUp
              to={s.value}
              suffix={s.suffix}
              className="font-display block text-4xl font-light sm:text-5xl"
            />
            <span className="mt-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
