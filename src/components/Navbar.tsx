import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import logo from "@/assets/urixon-logo.png";

const navItems = ["Work", "Services", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (latest > 100 && diff > 5) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
        animate={{ y: hidden && !isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <motion.a
            href="#"
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="URIXON" className="h-4 md:h-5 w-auto" />
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="font-body text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-foreground z-50 relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-px" : "-translate-y-1"}`} />
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0" : "translate-y-1"}`} />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="font-display text-5xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
