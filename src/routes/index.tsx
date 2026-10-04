import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { About } from "@/components/site/About";
import { Approach } from "@/components/site/Approach";
import { Work } from "@/components/site/Work";
import { Services } from "@/components/site/Services";
import { Founder } from "@/components/site/Founder";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "URIXON — Brand, Product & Growth Studio";
const description =
  "URIXON is a full-spectrum digital agency building powerful brands, engineering cutting-edge software, and driving measurable growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Clients />
        <About />
        <Approach />
        <Work />
        <Services />
        <Founder />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
