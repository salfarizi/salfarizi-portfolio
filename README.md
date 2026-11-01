# Salman Alfarizi — Portfolio

A premium, single-page portfolio for a UI/UX and creative designer, with a
focused case-study system for four selected projects. The design is monochrome
and editorial: oversized type, a centered portrait, generous whitespace, and a
restrained green availability accent.

## Features

- **Editorial hero** — oversized outlined + solid name, centered portrait with
  grayscale-to-color hover (tap to toggle on touch), availability status, social
  links, and a direct contact call to action.
- **Selected works** — asymmetric desktop grid, grayscale project artwork that
  reveals color on hover, and four full case-study routes.
- **Case studies** — Overview, Background, Problem, Goals, Process, Wireframes,
  Final UI, and Outcome, plus next-project navigation.
- **Supporting sections** — Services, Experience, About, Contact, and Footer.
- **Navigation** — smooth anchor scrolling with a compact sticky nav, active
  section highlighting, and a full-screen mobile menu with scroll lock.
- **Accessible & responsive** — semantic landmarks, visible focus styles,
  keyboard-operable portrait toggle, descriptive alt text, reduced-motion
  support, and layouts tested from 320 px to 1440 px.
- **SEO ready** — title/description, canonical, Open Graph, Twitter card,
  JSON-LD Person schema, and a custom favicon.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Motion | Framer Motion |
| Icons | Lucide React + custom social SVGs |
| Routing | React Router DOM 7 |
| Font | Inter (Google Fonts) |

JavaScript only — all source files are `.jsx` / `.js`; there is no TypeScript.

## Getting started

Requires Node.js **20.19+** or **22.12+** (Vite 8).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```text
public/
  favicon.svg
  images/
    og-image.png, og-image.svg
    profile-placeholder.svg
    projects/                 # four SVG artworks (placeholders)
src/
  components/                 # Navbar, Hero, Portrait, Works, Services,
                              # Experience, About, Contact, Footer, etc.
  data/
    profile.js                # name, email, socials, skills, tools, portrait
    projects.js               # project cards + full case-study content
    experience.js             # experience entries
    services.js               # service entries
  hooks/
    usePageMeta.js            # per-route title + description
  pages/
    Home.jsx
    ProjectDetail.jsx
    NotFound.jsx
  styles/index.css            # Tailwind theme tokens + component styles
  App.jsx / main.jsx
index.html                    # SEO, Open Graph, fonts, JSON-LD
```

## Customization

### Profile, email, socials

Edit `src/data/profile.js`. Replace the placeholder email and the four social
URLs (`https://dribbble.com/`, `https://instagram.com/`, etc.) with real
profiles. The availability text, location, description, skills, and tools also
live there.

### Portrait

The hero ships with a designed placeholder so the site never renders a broken
image. To use a real portrait:

1. Add a transparent PNG/WebP at `public/images/profile.png`.
2. In `src/data/profile.js`, set `portrait: "/images/profile.png"`.
3. Update `portraitAlt` with an accurate description.

If the configured image fails to load, `Portrait.jsx` automatically falls back
to the placeholder. The image is displayed with `object-contain object-bottom`;
a portrait with a similar 3:4 ratio fits best.

### Projects and case studies

Edit `src/data/projects.js`. Each entry supports:

```js
{
  slug, title, category, year, description, tags, image, imageAlt,
  role, timeline,
  caseStudy: {
    overview, background, problem, goals: [],
    process: [{ title, description }],
    wireframes: [],
    finalUiCaption, outcome,
  },
}
```

Replace the SVG artwork in `public/images/projects/` with real project imagery
(WebP/AVIF recommended, around 1600×1200). Keep `imageAlt` descriptive.

The current narrative copy is **placeholder content** written to demonstrate the
template. Replace it with the real process and outcomes. Do not add metrics,
client names, or testimonials unless they are verifiable.

### Services and experience

- `src/data/services.js` — four services with deliverables.
- `src/data/experience.js` — three roles with periods and descriptions.

The nav counts (`Work [04]`, `Services [04]`, `Experience [03]`) are defined in
`src/components/NavLinks.jsx`. Update them if you add or remove entries.

### Colors and type

Design tokens live in the `@theme` block at the top of `src/styles/index.css`:

```css
--color-canvas: #f3f3f3;   /* page background */
--color-surface: #ffffff;  /* cards and surfaces */
--color-ink: #171717;      /* primary text / dark buttons */
--color-secondary: #777777;
--color-muted: #a0a0a0;
--color-line: #e5e5e5;
--color-status: #21b66f;   /* availability dot */
```

Typography uses `clamp()` throughout, so text scales fluidly rather than
switching abruptly at breakpoints.

### SEO, OG image, canonical URL

Update `index.html` before deploying:

- `<link rel="canonical">` and `og:url` → production URL.
- `og:image` / `twitter:image` → absolute URL to `images/og-image.png`.
- Title, description, and JSON-LD details as needed.
- `public/favicon.svg` — replace with your own mark if desired.

To regenerate the OG image, edit `public/images/og-image.svg` and export it to
`public/images/og-image.png` at 1200×630.

### Page titles

The home page uses the title in `index.html`. Case studies and the 404 page set
their own titles/descriptions through `src/hooks/usePageMeta.js`.

## Deployment

The site is a static SPA using `BrowserRouter`, so the host must rewrite unknown
paths to `index.html` (otherwise a direct visit to `/work/meatmap` returns 404).

**Netlify** — a `public/_redirects` file is already included:

```text
/*  /index.html  200
```

**Vercel** — add `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**GitHub Pages / subdirectory hosting** — set `base` in `vite.config.js` and a
matching `basename` on `<BrowserRouter>` in `src/main.jsx`, then use a 404
fallback that serves `index.html`.

Build output is in `dist/` and can be hosted on any static host with SPA
fallback support.

## Accessibility and performance notes

- Portrait control is a real `<button>` with `aria-pressed` and a descriptive
  label; it supports Enter/Space and only toggles on non-hover devices.
- All images have alt text; below-the-fold imagery uses `loading="lazy"` and
  `decoding="async"`. The hero portrait is eager with high fetch priority.
- `prefers-reduced-motion` disables transitions, scroll smoothing, and the
  availability pulse.
- Focus styles use a 2 px ink outline with offset; the mobile menu locks body
  scroll and restores it on close.
- The Inter font is loaded with `display=swap`. For a fully self-hosted setup,
  download the font files and replace the Google Fonts link in `index.html`.

## Placeholder disclosure

The following are intentionally replaceable and should be reviewed before the
site goes live:

- Portrait artwork (`profile-placeholder.svg`).
- Four project artworks in `public/images/projects/`.
- Case-study narrative copy and experience periods/descriptions.
- Email address and social profile URLs.
- Canonical, Open Graph, and JSON-LD URLs.
