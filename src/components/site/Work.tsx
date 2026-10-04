import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Expand, Pause, Play } from "lucide-react";

import portfolio from "@/assets/portfolio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageReveal, Reveal } from "./motion-primitives";

const studies = [
  {
    name: "FLOORING EXPRESS",
    number: "01",
    images: portfolio.flooringExpress,
    width: 4000,
    height: 3000,
  }, { name: "Ocula", number: "02", images: portfolio.ocula, width: 1200, height: 900 },
  { name: "Salvation Hill", number: "03", images: portfolio.salvationHill, width: 1200, height: 900 },
  { name: "Yesterday", number: "04", images: portfolio.yesterday, width: 1200, height: 900 },
];

const CHUNK_SIZE = 6;

type Study = (typeof studies)[number];

function StudyCard({ study }: { study: Study }) {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const touchStart = useRef<number | null>(null);
  const image = study.images[slide];
  const previous = () => setSlide((value) => (value - 1 + study.images.length) % study.images.length);
  const next = () => setSlide((value) => (value + 1) % study.images.length);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, study.images.length]);

  const finishSwipe = (clientX: number) => {
    if (touchStart.current === null) return;
    const distance = clientX - touchStart.current;
    if (Math.abs(distance) > 45) distance > 0 ? previous() : next();
    touchStart.current = null;
  };

  return (
    <Reveal>
      <article className="group relative">
        <ImageReveal className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">          <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={image}
            src={image}
            alt={`${study.name} brand study, slide ${slide + 1}`}
            width={study.width}
            height={study.height}
            loading="lazy"
            initial={{ opacity: 0.2, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="block h-full w-full object-contain" />
        </AnimatePresence>
          <Button
            type="button"
            variant="ghost"
            aria-label={`Open ${study.name} case study`}
            onClick={() => setOpen(true)}
            className="absolute inset-0 z-10 h-full w-full rounded-none bg-transparent hover:bg-transparent"
          >
            <span className="sr-only">Open {study.name} case study</span>
          </Button>
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between bg-gradient-to-t from-background/85 to-transparent p-4 pt-12">
            <span className="text-xs text-foreground">{String(slide + 1).padStart(2, "0")} / {String(study.images.length).padStart(2, "0")}</span>
            <div className="flex gap-2">
              <Button type="button" size="icon" variant="secondary" aria-label={`Previous ${study.name} image`} onClick={previous}>
                <ArrowLeft />
              </Button>
              <Button type="button" size="icon" variant="secondary" aria-label={`Next ${study.name} image`} onClick={next}>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </ImageReveal>
        <div className="flex items-end justify-between gap-4 pt-5">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">Branding Case Study · {study.number}</p>
            <h3 className="mt-2 text-lg font-light">{study.name}</h3>
          </div>
          <Button type="button" size="icon" variant="outline" aria-label={`View ${study.name} in detail`} onClick={() => setOpen(true)}>
            <Expand />
          </Button>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex h-[94vh] w-[calc(100%-1rem)] max-w-7xl grid-cols-none flex-col gap-0 overflow-hidden rounded-xl border-border bg-background p-0 sm:w-[96vw]">
          <div className="border-b border-border px-5 py-4 pr-14 sm:px-7">
            <DialogTitle className="font-display text-xl font-light sm:text-2xl">{study.name}</DialogTitle>
            <DialogDescription className="mt-1">Branding case study · {slide + 1} of {study.images.length}</DialogDescription>
          </div>
          <div
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center overflow-auto bg-surface p-3 sm:p-6"
            onPointerDown={(event) => { touchStart.current = event.clientX; }}
            onPointerUp={(event) => finishSwipe(event.clientX)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={image}
                src={image}
                alt={`${study.name} brand study, slide ${slide + 1}`}
                width={study.width}
                height={study.height}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="block h-auto max-h-full w-auto max-w-full object-contain"
              />
            </AnimatePresence>
            <Button type="button" size="icon" variant="secondary" aria-label="Previous slide" onClick={previous} className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-6">
              <ArrowLeft />
            </Button>
            <Button type="button" size="icon" variant="secondary" aria-label="Next slide" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 sm:right-6">
              <ArrowRight />
            </Button>
          </div>
          <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground sm:px-7">
            <span>Use arrow keys or swipe</span>
            <span>{String(slide + 1).padStart(2, "0")} / {String(study.images.length).padStart(2, "0")}</span>
          </div>
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

function LogoMarquee() {
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");
  const midpoint = Math.ceil(portfolio.logos.length / 2);
  const rows = [portfolio.logos.slice(0, midpoint), portfolio.logos.slice(midpoint)];

  return (
    <div className="mt-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">A continuously moving archive of identity marks created across industries.</p>
        <div className="flex shrink-0 gap-2">
          <Button type="button" size="icon" variant="outline" aria-label="Move logos left" onPointerDown={() => setDirection("forward")}>
            <ArrowLeft />
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label={paused ? "Play logo marquee" : "Pause logo marquee"} onClick={() => setPaused((value) => !value)}>
            {paused ? <Play /> : <Pause />}
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label="Move logos right" onPointerDown={() => setDirection("reverse")}>
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="logo-marquee edge-mask space-y-4 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`logo-marquee-track flex w-max gap-4 ${paused ? "marquee-paused" : ""} ${(direction === "reverse") !== (rowIndex === 1) ? "marquee-reverse" : ""}`}
          >
            {[...row, ...row].map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex h-40 w-52 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface p-3 sm:h-52 sm:w-72">
                <img src={logo} alt={`Urixon logo collection item ${(index % row.length) + 1}`} loading="lazy" className="block max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  const [visible, setVisible] = useState(CHUNK_SIZE);

  // Two independently packed columns keep the staggered grid pattern while
  // removing the empty band the landscape Ocula card left under it.
  const visibleStudies = studies.slice(0, visible);
  const columns = [
    visibleStudies.filter((_, index) => index % 2 === 0),
    visibleStudies.filter((_, index) => index % 2 === 1),
  ];
  const orderClasses = ["max-sm:order-1", "max-sm:order-2", "max-sm:order-3", "max-sm:order-4", "max-sm:order-5", "max-sm:order-6"];

  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">Selected portfolio</p>
          <h2 className="mt-5 max-w-xl text-3xl leading-[1.15] font-light sm:text-4xl lg:text-5xl">
            Identity systems made to be seen.
            <br />
            <span className="text-fade">Explore the complete thinking.</span>
          </h2>
        </Reveal>

        <Tabs defaultValue="branding" className="mt-14">
          <TabsList className="h-auto w-full justify-start gap-1 rounded-none border-b border-border bg-transparent p-0">
            <TabsTrigger value="branding" className="rounded-none border-b border-transparent px-0 py-4 text-xs uppercase data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none sm:px-6">Branding Case Studies</TabsTrigger>
            <TabsTrigger value="logos" className="rounded-none border-b border-transparent px-4 py-4 text-xs uppercase data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none sm:px-6">Logo Collection</TabsTrigger>
          </TabsList>
          <TabsContent value="branding" className="mt-14">
            <div className="grid items-start gap-x-6 gap-y-14 sm:grid-cols-2">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className={`contents sm:block sm:space-y-14 ${colIndex === 1 ? "sm:mt-24" : ""}`}>
                  {column.map((study, j) => (
                    <div key={study.name} className={orderClasses[colIndex + j * 2]}>
                      <StudyCard study={study} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {visible < studies.length && (
              <div className="mt-16 flex justify-center">
                <Button type="button" variant="outline" onClick={() => setVisible((value) => value + CHUNK_SIZE)}>View more studies</Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="logos" className="mt-0">
            <LogoMarquee />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
