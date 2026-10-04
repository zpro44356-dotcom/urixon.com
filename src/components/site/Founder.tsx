import founder from "@/assets/founder.jpg";
import { CountUp, Reveal } from "./motion-primitives";


const stats = [
  { value: 6, suffix: "+", label: "Years" },
  { value: 120, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Industries" },
];

export function Founder() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden rounded-lg border border-border bg-surface">
            <img
              src={founder}
              alt="Founder and Creative Director of Urixon"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-contain object-top grayscale"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">— The mind behind Urixon</p>
          <h2 className="mt-5 text-3xl leading-[1.15] font-light sm:text-4xl lg:text-5xl">
            Designing with <span className="text-fade">purpose.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            As the founder of Urixon, I bring over six years of experience in design, branding and
            creative thinking — helping businesses transform ideas into powerful visual identities.
            My passion lies in creating meaningful work that not only looks modern and professional
            but also communicates purpose, emotion and strategy.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From brand identity and UI/UX to creative direction, I focus on solutions that help
            brands stand out, build trust, and connect with their audience in a competitive digital
            world.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="panel p-5">
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display block text-2xl font-light sm:text-3xl"
                />
                <span className="mt-1 block text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
