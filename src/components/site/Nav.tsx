import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      // Always show navbar near the top
      if (currentScrollY <= 24) {
        setHidden(false);
      }
      // Scrolling down → hide after 8px movement
      else if (currentScrollY > lastScrollY.current + 8) {
        setHidden(true);
        setOpen(false);
      }
      // Scrolling up → show after 8px movement
      else if (currentScrollY < lastScrollY.current - 8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header

      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={`flex w-full max-w-[660px] items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-500 ${scrolled
          ? "border-border-strong bg-surface/85 backdrop-blur-xl"
          : "border-border bg-surface/50 backdrop-blur-md"
          }`}
      >
        <a href="#top" className="mr-auto flex items-center gap-2 px-2">
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
            URI<span className="text-muted-foreground">XON</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-1 hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
        >
          Book A Call
          <ArrowUpRight className="size-3.5" />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-full border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-surface/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book A Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
