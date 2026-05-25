import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  service: z.string().trim().min(1, "Please specify a service").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...parsed.data }),
      });
      if (!res.ok) throw new Error("Network error");
      toast.success("Message sent. We'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-4 font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground transition-colors duration-300";

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
            href="mailto:info@urixon.com"
            className="inline-block font-display text-lg md:text-2xl tracking-wider text-foreground border-b-2 border-foreground pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p><b>Contact Us</b> </p> 
            info@urixon.com | &nbsp;&nbsp;&nbsp;+1 (917) 735-4682
          </motion.a>

          {/* Contact form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-20 md:mt-28 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" onChange={() => {}} />
              </label>
            </p>

            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 text-center">
              — Or send us the details —
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <input
                className={fieldClass}
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                required
              />
              <input
                className={fieldClass}
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                maxLength={255}
                required
              />
              <input
                className={fieldClass}
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                maxLength={30}
                required
              />
              <input
                className={fieldClass}
                type="text"
                name="service"
                placeholder="Service / About project"
                value={form.service}
                onChange={handleChange}
                maxLength={150}
                required
              />
            </div>

            <textarea
              className={`${fieldClass} resize-none mt-2`}
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              value={form.message}
              onChange={handleChange}
              maxLength={2000}
              required
            />

            <div className="text-center mt-12">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-foreground border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-colors duration-300 disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          <div className="flex flex-wrap justify-center gap-12 mt-20 md:mt-28">
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
