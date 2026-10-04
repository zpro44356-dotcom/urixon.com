# Correct About and Founder, Add Pricing and Contact

## What will change

- Fix the About text reveal so every character settles to the same final dark color, with no pale trailing words.
- Keep the decorative About cards on wide desktop, but hide them below the large-desktop breakpoint so they cannot cover tablet text.
- Reframe the founder portrait to show the full head naturally while retaining the existing portrait card proportions and monochrome treatment.
- Replace the current “Notes from the studio” content with a pricing section using the supplied four categories: Logo Design, Graphic Design, Web UI/UX Design, and Mobile App Design.
- Present category tabs and three consistent plan cards per category, preserving every supplied price, feature, and “best for” note. Standard plans receive the emphasized treatment.
- Replace the simple call-to-action before the footer with a complete contact section based on the live Urixon form, retaining Netlify-compatible form attributes and field names.
- Update navigation and section order so Pricing and Contact are directly reachable.

## Interaction and visual direction

- Maintain Urixon’s near-black monochrome system, restrained borders, editorial spacing, and existing reveal motion.
- Pricing category changes will be immediate and keyboard accessible; cards will preserve a stable three-column desktop layout and stack cleanly on smaller screens.
- Contact fields will use visible labels, clear validation messages, a honeypot field, and a polished submitted state without introducing a separate backend.
- Motion will continue respecting reduced-motion preferences.

## Technical details

- Add focused `Pricing` and `Contact` components and compose them in the home route.
- Validate contact inputs in the browser before submission, while retaining Netlify’s static form detection contract (`data-netlify`, hidden `form-name`, and bot field).
- Use semantic design tokens and existing motion primitives; no new service, database, or external dependency is required.
- Verify desktop, tablet, and mobile layouts, text reveal completion, portrait framing, pricing tabs, form validation, and error-free rendering.
