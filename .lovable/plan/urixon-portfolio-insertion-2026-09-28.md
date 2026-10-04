# Urixon portfolio insertion

## Goal
Remove the floating hero cards and replace the current sample work with Urixon’s real branding studies and logo collection, while preserving the established monochrome visual language and staggered portfolio rhythm.

## What will change

### 1. Simplify the hero
- Remove the entire four-card presentation cluster shown in the screenshot, including the illuminated floor beneath it.
- Keep the existing headline, copy, actions, orbital details, and opening animation sequence.
- Rebalance the lower spacing so the next section enters naturally on desktop and mobile.

### 2. Import the supplied portfolio
- Include all four uploaded studies: MEWCAFE, Ocula, Salvation Hill, and Yesterday.
- Preserve each study’s natural slide order and each image’s original aspect ratio; no image cropping.
- Include all 27 supplied logo images.
- Store these large images as CDN-backed project assets rather than adding the binaries to the source repository.

### 3. Add portfolio category tabs
- Add a clear two-option control before the portfolio display: **Branding Case Studies** and **Logo Collection**.
- Switch the portfolio content in place with a restrained animated transition.
- Keep Branding Case Studies selected initially.

### 4. Build branding study cards
- Preserve the current alternating up/down two-column arrangement and editorial spacing.
- Each card will use its study’s cover image at its natural ratio and include previous/next controls for browsing that study without leaving the grid.
- Show all four currently uploaded studies. The grid will be structured in chunks matching the current six-item capacity, so a **View More** control appears automatically when future studies exceed the first chunk.
- Image changes will not resize or crop the card incorrectly; portrait studies remain portrait and landscape studies remain landscape.

### 5. Build the detailed study viewer
- Clicking a study card opens a large, focused viewer above the page.
- The viewer will show the complete image at its natural ratio, with previous/next controls, slide count, keyboard navigation, swipe-friendly behavior, and a clear close control.
- The viewer will keep the user inside the same study and allow all supplied images to be inspected clearly.

### 6. Build the logo marquee
- Create a professional multi-row horizontal logo presentation using the supplied logo artwork.
- Logos move continuously from right to left and repeat seamlessly.
- Hover pauses movement for inspection; left/right controls temporarily steer the collection.
- Each logo retains its source aspect ratio and fits fully inside a stable holder without cropping or distortion.
- Motion is disabled or simplified for visitors who request reduced movement.

## Technical details
- Use the project’s existing button, dialog, motion, and image-reveal patterns.
- Keep all colors, borders, shadows, and surfaces tied to the existing monochrome design tokens.
- Load non-visible study images lazily and keep slide state local to each study card.
- Add accessible labels, keyboard controls, focus handling, and non-overlapping mobile controls.
- Verify the final page at desktop and mobile sizes, including tab switching, every carousel, the full viewer, View More behavior, marquee pause/direction controls, and original-ratio image display.
