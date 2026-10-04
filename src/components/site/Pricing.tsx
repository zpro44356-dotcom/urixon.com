import { Check, Crown, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";

const categories = [
  {
    name: "Logo Design",
    plans: [
      { tier: "Basic", price: "$19", icon: Zap, features: ["1 Logo Concept", "1 Revision", "Basic Colors & Typography", "High-Resolution Files (PNG + JPG)", "Delivery: 24–48 Hours"], bestFor: "Quick layouts, personal projects, student startups." },
      { tier: "Standard", price: "$35", icon: Star, popular: true, features: ["2 Logo Concepts", "3 Revisions", "Color Variations (Full Color + B&W)", "Vector Files (AI + SVG + EPS)", "Social Media Ready Files", "Delivery: 2–3 Days"], bestFor: "Small businesses, early brands, online sellers." },
      { tier: "Premium", price: "$120", icon: Crown, features: ["3–4 Logo Concepts", "Unlimited Revisions", "Full Brand Guide", "All Master Files (AI, EPS, SVG, PDF)", "Social Media Kit + Mockups", "Priority Fast Delivery"], bestFor: "Full brand identity with long-term vision." },
    ],
  },
  {
    name: "Graphic Design",
    plans: [
      { tier: "Basic", price: "$25", icon: Zap, features: ["1 Simple Design", "Basic Layout", "Colors & Typography Included", "1 Revision", "Delivery: 24 Hours"], bestFor: "Quick updates, social media posts, small tasks." },
      { tier: "Standard", price: "$60", icon: Star, popular: true, features: ["Up to 3 Designs", "Clean, Modern Layouts", "Brand Colors + Typography", "3 Revisions", "Social Media Export Sizes", "Delivery: 2–3 Days"], bestFor: "Small businesses, marketing campaigns." },
      { tier: "Premium", price: "$150", icon: Crown, features: ["Up to 6 Designs", "Premium Layouts & Creative Direction", "Full Brand Consistency", "Unlimited Revisions", "Editable Source Files (AI / PSD)", "Priority Delivery"], bestFor: "Brand launches, product promotions, big campaigns." },
    ],
  },
  {
    name: "Web UI/UX Design",
    plans: [
      { tier: "Basic", price: "$49", icon: Zap, features: ["Up to 2 Screens", "Basic Wireframe", "Clean UI Layout", "Colors + Typography Included", "1 Revision", "Delivery: 2 Days"], bestFor: "Quick layouts, personal projects, student startups." },
      { tier: "Standard", price: "$120", icon: Star, popular: true, features: ["Up to 5 Screens", "UX Flow / Wireframes", "Modern, Professional UI Design", "3 Revisions", "Style Guide + Prototyping", "Delivery: 3–4 Days"], bestFor: "MVPs, service websites, SaaS dashboards." },
      { tier: "Premium", price: "$250", icon: Crown, features: ["10+ Screens", "Full UX Research Lite", "Complete Wireframe Set", "High-End UI + Design System", "Interactive Prototype", "Unlimited Revisions"], bestFor: "Full digital product with long-term vision." },
    ],
  },
  {
    name: "Mobile App Design",
    plans: [
      { tier: "Basic", price: "$60", icon: Zap, features: ["Up to 4 Mobile Screens", "Simple Wireframes", "Clean Modern UI", "Basic Color & Typography", "1 Revision", "Delivery: 2–3 Days"], bestFor: "MVP demos, concept screens, startup prototypes." },
      { tier: "Standard", price: "$150", icon: Star, popular: true, features: ["Up to 8 Screens", "UX Flow + Wireframes", "Professional UI Design", "3 Revisions", "Clickable Prototype", "Delivery: 4–5 Days"], bestFor: "Early-stage apps, service-based apps." },
      { tier: "Premium", price: "$300", icon: Crown, features: ["12–15+ Screens", "Full UX Strategy", "High-End UI Design", "Complete Design System", "Interactive Prototype", "Unlimited Revisions"], bestFor: "Full mobile app with long-term growth." },
    ],
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">Pricing</p>
          <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] md:items-end">
            <h2 className="text-3xl leading-[1.15] font-light sm:text-4xl lg:text-5xl">Transparent <span className="text-fade">plans.</span></h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-right">Premium design services at competitive rates. Choose a package that fits your ambition.</p>
          </div>
        </Reveal>

        <Tabs defaultValue={categories[0].name} className="mt-12">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-auto min-w-max gap-1 rounded-full border border-border bg-surface p-1">
              {categories.map((category) => <TabsTrigger key={category.name} value={category.name} className="rounded-full px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{category.name}</TabsTrigger>)}
            </TabsList>
          </div>
          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-10">
              <div className="grid items-stretch gap-5 lg:grid-cols-3">
                {category.plans.map((plan, index) => {
                  const Icon = plan.icon;
                  const isPopular = "popular" in plan && plan.popular;
                  return (
                    <Reveal key={plan.tier} delay={index * 0.06}>
                      <article className={cn("relative flex h-full flex-col rounded-lg border bg-surface p-7", isPopular ? "border-border-strong shadow-[var(--shadow-glow)]" : "border-border")}>
                        {isPopular && <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase text-primary-foreground">Most popular</span>}
                        <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                        <p className="mt-5 text-xs font-medium uppercase text-muted-foreground">{plan.tier}</p>
                        <div className="mt-2 flex items-end gap-2"><span className="font-display text-5xl font-light">{plan.price}</span><span className="pb-1 text-xs text-muted-foreground">/ project</span></div>
                        <p className="mt-5 min-h-12 text-sm leading-relaxed text-muted-foreground">{plan.bestFor}</p>
                        <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-6">
                          {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden="true" /><span>{feature}</span></li>)}
                        </ul>
                        <Button asChild variant={isPopular ? "default" : "outline"} className="mt-8 h-11 rounded-full">
                          <a href="#contact">Get started</a>
                        </Button>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}