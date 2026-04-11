import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance websites and web applications built with modern frameworks. From landing pages to complex platforms — engineered for speed, scale, and conversion.",
  },
  {
    num: "02",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that put your brand in front of the right audience. Content strategy, funnel optimization, and analytics that turn traffic into revenue.",
  },
  {
    num: "03",
    title: "SEO Optimization",
    desc: "Dominate search rankings with technical SEO, keyword strategy, and content architecture. We make sure your audience finds you before your competitors.",
  },
  {
    num: "04",
    title: "Meta Ads",
    desc: "Precision-targeted Facebook & Instagram advertising. From creative production to audience segmentation — every dollar optimized for maximum ROI.",
  },
  {
    num: "05",
    title: "UI/UX Design",
    desc: "Human-centered interfaces that feel intuitive and look stunning. Research-backed design systems, prototyping, and user testing for products people love to use.",
  },
  {
    num: "06",
    title: "Game Development",
    desc: "Immersive gaming experiences from concept art to deployment. 2D/3D game design, mechanics engineering, and visual storytelling that captivates players.",
  },
  {
    num: "07",
    title: "Software & ERP",
    desc: "Enterprise-grade software solutions and ERP systems tailored to your operations. Streamline workflows, automate processes, and scale without limits.",
  },
  {
    num: "08",
    title: "Brand Identity",
    desc: "Comprehensive visual identity systems — logo, typography, color, guidelines. We build brands that resonate globally and stand the test of time.",
  },
  {
    num: "09",
    title: "Motion & Animation",
    desc: "Cinematic motion graphics, product animations, and dynamic visual content that brings your brand to life across every digital touchpoint.",
  },
  {
    num: "10",
    title: "Graphic Designing",
    desc: "Eye-catching visual assets — social media creatives, print collateral, packaging, and marketing materials crafted to elevate your brand presence everywhere.",
  },
  {
    num: "11",
    title: "Video Editing",
    desc: "Professional post-production for commercials, social content, and brand storytelling. Color grading, sound design, and seamless cuts that keep audiences watching.",
  },
];

const ServiceRow = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group border-b border-border py-8 md:py-10 cursor-pointer"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start md:items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1">
          <span className="font-display text-sm text-muted-foreground tracking-wider mt-1 md:mt-0">
            {service.num}
          </span>
          <div className="flex-1">
            <motion.h3
              className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              animate={{ x: isHovered ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="font-body text-muted-foreground mt-3 max-w-xl text-sm md:text-base leading-relaxed overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.desc}
            </motion.p>
          </div>
        </div>
        <motion.div
          className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0"
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-foreground text-lg">+</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="px-6 md:px-12 py-24 md:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Marketing & Growth</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Services
          </h2>
          <p className="font-body text-muted-foreground mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
            Data-driven strategies and world-class execution to grow your business online. 
            From code to campaigns — everything your digital presence demands.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
