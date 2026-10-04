const columns = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Approach", href: "#services" },
      { label: "Insights", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Brand Identity", href: "#services" },
      { label: "SEO", href: "#services" },
      { label: "Meta Ads", href: "#services" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/urixonstudio?stkn=MTB5Y2VjZnhveW1tdg==" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/urixon" },
      { label: "Facebook", href: "https://www.instagram.com/urixonstudio?stkn=MTB5Y2VjZnhveW1tdg==" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          <div>
            <span className="font-display text-sm font-medium tracking-[0.35em]">
              URIXON
            </span>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A full-spectrum digital agency building brands, products and growth systems.
            </p>

            <a
              href="mailto:info@urixon.com"
              className="mt-5 inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              info@urixon.com
            </a>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                {c.title}
              </p>

              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        l.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Urixon. All rights reserved.</span>

          <span className="tracking-[0.18em] uppercase">
            Designed with purpose
          </span>
        </div>
      </div>
    </footer>
  );
}