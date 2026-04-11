import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Let's Collaborate
          </p>

          <h2 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tighter text-foreground leading-[0.9] mb-8">
            Have a project
            <br />
            in mind<span className="text-muted-foreground">?</span>
          </h2>

          <motion.a
            href="mailto:hello@urixon.com"
            className="inline-block font-display text-lg md:text-2xl tracking-wider text-foreground border-b-2 border-foreground pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            hello@urixon.com
          </motion.a>

          <div className="flex justify-center gap-12 mt-16">
            {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
