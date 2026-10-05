import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, LoaderCircle, Mail, Phone } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Reveal } from "./motion-primitives";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255),
  phone: z
    .string()
    .trim()
    .min(5, "Please enter a valid phone number.")
    .max(30),
  service: z
    .string()
    .trim()
    .min(1, "Please tell us which service you need.")
    .max(150),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us about your project.")
    .max(2000),
});

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key] ?? ""),
    )
    .join("&");

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      setError(
        parsed.error.issues[0]?.message ?? "Please check your details.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/contact.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          "bot-field": "",
          ...parsed.data,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setStatus("sent");
    } catch {
      setError(
        "Something went wrong. Please try again or email us directly.",
      );
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full border-b border-border bg-transparent py-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground sm:text-base";

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">Let&apos;s collaborate</p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-end">
            <h2 className="max-w-5xl text-5xl leading-[0.96] font-light sm:text-7xl lg:text-8xl">
              Have a project
              <span className="block text-muted-foreground">
                in mind?
              </span>
            </h2>

            <div className="hidden items-center gap-3 pb-2 text-xs text-muted-foreground lg:flex">
              <span className="h-px flex-1 bg-border-strong" />
              Start a conversation
              <ArrowRight className="size-4" />
            </div>
          </div>

          <div className="mt-12 grid border-y border-border sm:grid-cols-2">
            <a
              href="mailto:info@urixon.com"
              className="group flex min-w-0 items-center gap-4 py-5 transition-colors hover:text-muted-foreground sm:border-r sm:border-border sm:pr-8"
            >
              <Mail className="size-4 shrink-0" />

              <span className="min-w-0">
                <span className="block text-[10px] uppercase text-muted-foreground">
                  Email us
                </span>

                <span className="mt-1 block truncate text-sm sm:text-base">
                  info@urixon.com
                </span>
              </span>

              <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="tel:+923708508909"
              className="group flex items-center gap-4 border-t border-border py-5 transition-colors hover:text-muted-foreground sm:border-t-0 sm:pl-8"
            >
              <Phone className="size-4 shrink-0" />

              <span>
                <span className="block text-[10px] uppercase text-muted-foreground">
                  Call us
                </span>

                <span className="mt-1 block text-sm sm:text-base">
                  +92 3708508909
                </span>
              </span>

              <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>

        <div className="my-14 flex items-center gap-5 text-[10px] uppercase text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          <span>Or send us the details</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Reveal>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />

            <p className="hidden">
              <label>
                Don&apos;t fill this out:
                <input
                  name="bot-field"
                  onChange={() => {}}
                />
              </label>
            </p>

            <div className="grid gap-x-10 md:grid-cols-2">
              <label>
                <span className="sr-only">Your name</span>
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
              </label>

              <label>
                <span className="sr-only">Email address</span>
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
              </label>

              <label>
                <span className="sr-only">Phone number</span>
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
              </label>

              <label>
                <span className="sr-only">Service or project</span>
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
              </label>
            </div>

            <label className="block">
              <span className="sr-only">Project details</span>

              <textarea
                className={`${fieldClass} resize-y`}
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
            </label>

            <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5">
              <p
                role="status"
                aria-live="polite"
                className={
                  status === "sent"
                    ? "text-sm text-foreground"
                    : "text-sm text-muted-foreground"
                }
              >
                {status === "sent"
                  ? "Message sent. We’ll be in touch shortly."
                  : error}
              </p>

              <Button
                type="submit"
                variant="outline"
                size="lg"
                disabled={status === "sending"}
                className="rounded-full uppercase"
              >
                {status === "sending" && (
                  <LoaderCircle className="animate-spin" />
                )}

                {status === "sending"
                  ? "Sending…"
                  : "Send message"}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}