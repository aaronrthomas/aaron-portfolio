## Aaron R Thomas — Portfolio Website

A single-page, fully responsive portfolio site that recreates the look and structure of the uploaded PDF: bold periwinkle-blue hero blocks, condensed serif/slab display type, cream backgrounds, sparkle motifs, and a marquee footer strip.

### Sections (top to bottom)

1. **Hero / Cover** — "PORT 2026 / FORT" oversized type, "GRAPHIC DESIGN by AARON R THOMAS", sparkle accents, blue chevron shapes, scroll cue.
2. **About Me** — Portrait placeholder + intro paragraph from the resume page.
3. **Work overview strip** — Sticky in-page nav: Brochure · Logos · Social Media · Style Guide.
4. **Brochure (Vijnana Keralam)** — Big blue header block with title, then description left + styled placeholder card right.
5. **Logo Design** — Header block + 3×3 grid of stylized logo placeholders (mono SVG marks, no real client logos).
6. **Social Media** — Header block + three sub-rows (Grid Design, Posters, Reel Covers) each with description + placeholder thumbnails.
7. **Style Guide** — Header block + mock brand sheet (color palette swatches, type sample, logo mark).
8. **Resume snapshot** — Education, Experience (Yukthi 24, Permute 24, μLearn), Technical Skills, Languages, Interests as tag chips.
9. **Contact** — Email, phone, Instagram as large clickable items (no form).
10. **Thank You footer** — "THANK YOU ! / See you soon / by AARON R THOMAS" with sparkles, then animated marquee strip "PORTFOLIO ✦ AARON R THOMAS ✦ …".

### Design system

- **Palette**: periwinkle blue `#5B5BF5`-ish, cream `#F2EEE5`, near-black ink, white. All defined as semantic tokens in `src/styles.css` (no hardcoded colors in components).
- **Typography**: Google Fonts — **Oswald / Anton** (condensed display) for huge headers, **Inter** for body. Loaded in `__root.tsx` head.
- **Motifs**: Reusable inline SVG `<Sparkle />` and `<Chevron />` components matching the four-point star and arrow shapes in the PDF.
- **Marquee**: CSS keyframe scroll for the bottom strip, repeated on every major section divider like the PDF.
- **Texture**: subtle noise/grain background on cream sections via CSS to match the printed feel.

### Responsiveness

- Mobile-first. Hero type uses `clamp()` so "PORT FORT" scales from ~64px → ~200px.
- Grids collapse: logo 3×3 → 2×2 → 1 col; social thumbnails stack; about portrait stacks above text.
- Sticky section nav becomes a horizontal scrollable pill bar on mobile.

### Technical notes

- TanStack Start, single route `src/routes/index.tsx` (long-scroll page) with hash anchors `#about`, `#work`, `#contact` for smooth in-page scroll only.
- Per spec: index page route with proper `head()` meta (title, description, og tags).
- Components split into `src/components/portfolio/`: `Hero`, `About`, `SectionHeader` (the blue title block, reused), `Brochure`, `Logos`, `Social`, `StyleGuide`, `Resume`, `Contact`, `ThankYou`, `Marquee`, `Sparkle`.
- Tailwind v4 tokens added to `styles.css` for `--color-ink`, `--color-cream`, `--color-periwinkle`.
- No backend, no images uploaded — all visuals built with CSS/SVG placeholders that can be swapped later.
