# Urixon rebuilt on the 10X Digital Ventures structure

Goal: same page architecture, component set and motion feel as 10xdigitalventures.com, but wearing Urixon's monochrome black identity. Urixon's own content (agency copy, portfolio, services, founder) stays — only the structure and animation language change.

## Look and feel

Colors — taken from urixon.com, not from 10X:
- Background near-black `#0A0A0A`, raised surfaces `#141414`, hairline borders `rgba(255,255,255,0.08)`
- Text: off-white `#F5F5F5` headings, muted grey `#A1A1A1` body
- Accent: white / light-grey (the Urixon filled-white button treatment). No blue anywhere — 10X's electric blue and blue floor-glow become white/grey glow instead.
- Typography: Urixon's geometric sans (Poppins/Manrope-style), wide letterspacing on small caps labels

Motion — copied from 10X:
- Pill badge + big two-line hero headline with staggered word reveal
- Per-character stagger reveal on the big about paragraph (10X's signature effect)
- Scroll-triggered fade+rise on every section
- Floating card cluster under the hero, cards drifting on scroll
- Marquee logo strip, count-up stat numbers
- Sticky/parallax "Our Approach" steps
- Hover: card lift, image scale, arrow-slide on buttons, magnetic-ish nav underline

## Page structure (mirrors 10X)

1. Floating centered pill navbar + "Book A Call" button
2. Hero: badge → headline → subline → two CTAs → floating card cluster
3. Client/partner marquee with animated `120+` style counters
4. "About Urixon" — character-stagger paragraph with two floating images
5. "Our Approach and How We Work" — sticky numbered steps
6. "Our Best Work" — portfolio grid using Urixon's 7 projects
7. Services — the 10X solution-card grid, using Urixon's 6 services
8. Founder / creative director section with stats
9. Testimonials slider
10. Blog/insights teaser row
11. Final CTA band + multi-column footer

## Technical notes

- Single-page build at `/` in the existing TanStack Start app; anchor-scrolled sections, plus `/book-a-call` style CTA routing to the contact section
- All colors, gradients, shadows and easing curves as semantic tokens in `src/styles.css` (oklch); no hardcoded color classes in components
- Motion via `motion/react` (scroll-triggered `whileInView`, staggered children, sticky-scroll progress)
- Hero card-cluster images and the two about-section visuals get generated in the Urixon monochrome style; portfolio thumbs use Urixon's existing project imagery
- Route `head()` with Urixon-specific title/description/OG tags

## Not included unless you ask

Live chat widget, booking-calendar embed, and a CMS-backed blog — the blog row will be static cards for now.
