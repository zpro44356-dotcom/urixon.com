import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Check, Zap, Crown, Star } from "lucide-react";

const categories = [
  {
    name: "Logo Design",
    plans: [
      {
        tier: "Basic",
        price: "$19",
        icon: Zap,
        features: [
          "1 Logo Concept",
          "1 Revision",
          "Basic Colors & Typography",
          "High-Resolution Files (PNG + JPG)",
          "Delivery: 24–48 Hours",
        ],
        bestFor: "Quick layouts, personal projects, student startups.",
      },
      {
        tier: "Standard",
        price: "$35",
        icon: Star,
        popular: true,
        features: [
          "2 Logo Concepts",
          "3 Revisions",
          "Color Variations (Full Color + B&W)",
          "Vector Files (AI + SVG + EPS)",
          "Social Media Ready Files",
          "Delivery: 2–3 Days",
        ],
        bestFor: "Small businesses, early brands, online sellers.",
      },
      {
        tier: "Premium",
        price: "$120",
        icon: Crown,
        features: [
          "3–4 Logo Concepts",
          "Unlimited Revisions",
          "Full Brand Guide",
          "All Master Files (AI, EPS, SVG, PDF)",
          "Social Media Kit + Mockups",
          "Priority Fast Delivery",
        ],
        bestFor: "Full brand identity with long-term vision.",
      },
    ],
  },
  {
    name: "Graphic Design",
    plans: [
      {
        tier: "Basic",
        price: "$25",
        icon: Zap,
        features: [
          "1 Simple Design",
          "Basic Layout",
          "Colors & Typography Included",
          "1 Revision",
          "Delivery: 24 Hours",
        ],
        bestFor: "Quick updates, social media posts, small tasks.",
      },
      {
        tier: "Standard",
        price: "$60",
        icon: Star,
        popular: true,
        features: [
          "Up to 3 Designs",
          "Clean, Modern Layouts",
          "Brand Colors + Typography",
          "3 Revisions",
          "Social Media Export Sizes",
          "Delivery: 2–3 Days",
        ],
        bestFor: "Small businesses, marketing campaigns.",
      },
      {
        tier: "Premium",
        price: "$150",
        icon: Crown,
        features: [
          "Up to 6 Designs",
          "Premium Layouts & Creative Direction",
          "Full Brand Consistency",
          "Unlimited Revisions",
          "Editable Source Files (AI / PSD)",
          "Priority Delivery",
        ],
        bestFor: "Brand launches, product promotions, big campaigns.",
      },
    ],
  },
  {
    name: "Web UI/UX Design",
    plans: [
      {
        tier: "Basic",
        price: "$49",
        icon: Zap,
        features: [
          "Up to 2 Screens",
          "Basic Wireframe",
          "Clean UI Layout",
          "Colors + Typography Included",
          "1 Revision",
          "Delivery: 2 Days",
        ],
        bestFor: "Quick layouts, personal projects, student startups.",
      },
      {
        tier: "Standard",
        price: "$120",
        icon: Star,
        popular: true,
        features: [
          "Up to 5 Screens",
          "UX Flow / Wireframes",
          "Modern, Professional UI Design",
          "3 Revisions",
          "Style Guide + Prototyping",
          "Delivery: 3–4 Days",
        ],
        bestFor: "MVPs, service websites, SaaS dashboards.",
      },
      {
        tier: "Premium",
        price: "$250",
        icon: Crown,
        features: [
          "10+ Screens",
          "Full UX Research Lite",
          "Complete Wireframe Set",
          "High-End UI + Design System",
          "Interactive Prototype",
          "Unlimited Revisions",
        ],
        bestFor: "Full digital product with long-term vision.",
      },
    ],
  },
  {
    name: "Mobile App Design",
    plans: [
      {
        tier: "Basic",
        price: "$60",
        icon: Zap,
        features: [
          "Up to 4 Mobile Screens",
          "Simple Wireframes",
          "Clean Modern UI",
          "Basic Color & Typography",
          "1 Revision",
          "Delivery: 2–3 Days",
        ],
        bestFor: "MVP demos, concept screens, startup prototypes.",
      },
      {
        tier: "Standard",
        price: "$150",
        icon: Star,
        popular: true,
        features: [
          "Up to 8 Screens",
          "UX Flow + Wireframes",
          "Professional UI Design",
          "3 Revisions",
          "Clickable Prototype",
          "Delivery: 4–5 Days",
        ],
        bestFor: "Early-stage apps, service-based apps.",
      },
      {
        tier: "Premium",
        price: "$300",
        icon: Crown,
        features: [
          "12–15+ Screens",
          "Full UX Strategy",
          "High-End UI Design",
          "Complete Design System",
          "Interactive Prototype",
          "Unlimited Revisions",
        ],
        bestFor: "Full mobile app with long-term growth.",
      },
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > activeCategory ? 1 : -1);
    setActiveCategory(index);
  };

  const goPrev = () => {
    const next = activeCategory === 0 ? categories.length - 1 : activeCategory - 1;
    setDirection(-1);
    setActiveCategory(next);
  };

  const goNext = () => {
    const next = activeCategory === categories.length - 1 ? 0 : activeCategory + 1;
    setDirection(1);
    setActiveCategory(next);
  };

  const currentCategory = categories[activeCategory];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 600 : -600,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -600 : 600,
      opacity: 0,
    }),
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-32 md:py-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--muted)/0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-display uppercase tracking-[0.35em] text-muted-foreground mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Transparent Plans
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm md:text-base">
            Premium design services at competitive rates. Choose a package that fits your ambition.
          </p>
        </motion.div>

        {/* Category Tabs + Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-14 flex-wrap"
        >
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="group w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Category Pills */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => goTo(i)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-400 ${
                  i === activeCategory
                    ? "bg-foreground text-background shadow-[0_0_30px_hsl(var(--foreground)/0.15)]"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {i === activeCategory && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="group w-10 h-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        {/* Pricing Cards Carousel */}
        <div className="relative min-h-[560px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCategory}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5"
            >
              {currentCategory.plans.map((plan, i) => {
                const Icon = plan.icon;
                const isPopular = plan.popular;

                return (
                  <motion.div
                    key={plan.tier}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group relative rounded-2xl p-[1px] transition-all duration-500 ${
                      isPopular
                        ? "bg-gradient-to-b from-foreground/40 via-foreground/10 to-transparent"
                        : "bg-gradient-to-b from-border/80 via-border/30 to-transparent"
                    }`}
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <span className="px-4 py-1 text-[10px] font-display uppercase tracking-widest bg-foreground text-background rounded-full shadow-[0_0_20px_hsl(var(--foreground)/0.2)]">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Card inner */}
                    <div
                      className={`relative rounded-2xl p-8 h-full flex flex-col overflow-hidden transition-all duration-500 ${
                        isPopular
                          ? "bg-card/90 backdrop-blur-xl"
                          : "bg-card/60 backdrop-blur-sm"
                      } group-hover:bg-card/95`}
                    >
                      {/* Glossy shine overlay */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(135deg,hsl(var(--foreground)/0.04)_0%,transparent_40%,transparent_60%,hsl(var(--foreground)/0.02)_100%)]" />

                      {/* Top glow on hover */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-[radial-gradient(ellipse,hsl(var(--foreground)/0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Tier + Icon */}
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isPopular
                                ? "bg-foreground/15 group-hover:bg-foreground/25"
                                : "bg-muted/60 group-hover:bg-muted"
                            }`}
                          >
                            <Icon className="w-4 h-4 text-foreground" />
                          </div>
                          <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                            {plan.tier}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6 relative z-10">
                        <span className="font-display text-5xl font-bold tracking-tight text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm ml-1">/project</span>
                      </div>

                      {/* Best for */}
                      <p className="text-xs text-muted-foreground mb-6 leading-relaxed relative z-10">
                        {plan.bestFor}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                      {/* Features */}
                      <ul className="space-y-3 flex-1 relative z-10">
                        {plan.features.map((f, fi) => (
                          <motion.li
                            key={fi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + fi * 0.05 }}
                            className="flex items-start gap-3 text-sm text-secondary-foreground"
                          >
                            <Check className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                            <span>{f}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-8 w-full py-3.5 rounded-xl font-display text-sm uppercase tracking-wider transition-all duration-400 relative z-10 ${
                          isPopular
                            ? "bg-foreground text-background hover:shadow-[0_0_30px_hsl(var(--foreground)/0.25)]"
                            : "border border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
                        }`}
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === activeCategory
                  ? "w-8 bg-foreground"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
