# Salman Alfarizi — Portfolio

A premium, single-page portfolio for a UI/UX and creative designer, with a
focused case-study system for seven selected projects. The design is monochrome
and editorial: oversized type, a centered portrait, generous whitespace, and a
restrained green availability accent.

## Features

- **Editorial hero** — oversized outlined + solid name, centered portrait with
  grayscale-to-color hover (tap to toggle on touch), availability status, social
  links, downloadable CV, and a direct contact call to action.
- **Selected works** — asymmetric desktop grid, grayscale project artwork that
  reveals color on hover, a cursor-following preview on desktop, and seven full
  case-study routes (four digital products and three identity projects).
- **Case studies** — Overview, Background, Problem, Goals, Process, Wireframes,
  Final UI, and Outcome, plus next-project navigation.
- **Playground** — a masonry gallery for photography, motion, and visual studies,
  with support for native video players. Currently **unlisted** (reachable at
  `/playground` but not linked in the navigation or sitemap).
- **Supporting sections** — Services, Experience, About, Contact, and Footer.
- **Navigation** — Lenis inertial scrolling, scroll-linked parallax, a scroll
  progress line, smooth anchor scrolling with a compact sticky nav, active
  section highlighting, and a full-screen mobile menu with scroll lock.
- **Accessible & responsive** — semantic landmarks, visible focus styles,
  keyboard-operable portrait toggle, descriptive alt text, reduced-motion
  support, and layouts tested from 320 px to 1440 px.
- **SEO ready** — every public route is prerendered to static HTML with its own
  title, description, canonical URL, Open Graph/Twitter tags, and JSON-LD.
  Project Open Graph images are generated at build time, the sitemap is derived
  from `src/data/projects.js`, and there is a custom `404.html`.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Motion | Framer Motion + Lenis |
| Icons | Lucide React + custom social SVGs |
| Routing | React Router DOM 7 |
| Prerender | Node script + `sharp` (build-time) |
| Font | Inter (Google Fonts) |

JavaScript only — all source files are `.jsx` / `.js`; there is no TypeScript.

## Getting started

Requires Node.js **20.19+** or **22.12+** (Vite 8).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # optimize images + vite build + prerender → dist/
npm run prerender # regenerate static routes from an existing dist/
npm run preview   # preview dist/ locally
```

`npm run dev` and `npm run build` automatically run
`scripts/optimize-images.mjs` first, which converts project PNG/JPEG sources to
WebP. `npm run build` then runs `vite build` and `node scripts/prerender.mjs`,
which turns the single-page bundle into static pages. `sharp` is a devDependency
because it powers both build steps.

> `vite preview` does not mimic a static host: it falls back to the SPA shell for
> every unknown path, so `/work/meatmap` shows the home page. To preview
> prerendered routes the way a host serves them, run `npx serve dist` instead.

## Project structure

```text
public/
  favicon.svg
  robots.txt
  cv/Salman-Alfarizi-CV.pdf    # downloadable CV
  images/
    og-image.png, og-image.svg
    profile-placeholder.svg
    portrait.webp             # optimized hero portrait (~100 KB)
    projects/                 # project artwork (PNG screenshots + 3 SVG logos)
    gallery/                  # six playground visuals (placeholders)
scripts/
  prerender.mjs               # static routes, per-project OG images, sitemap, 404
src/
  components/                 # Navbar, Hero, Portrait, Works, Services,
                              # Experience, About, Contact, Footer, SmoothScroll,
                              # Parallax, etc.
  data/
    siteMeta.js               # default (home) title + description
    profile.js                # name, email, CV path, socials, skills, tools
    projects.js               # project cards + full case-study content
    gallery.js                # playground entries
    experience.js             # experience entries
    services.js               # service entries
  hooks/
    usePageMeta.js            # per-route title + description
  pages/
    Home.jsx
    Playground.jsx
    ProjectDetail.jsx
    NotFound.jsx
  styles/index.css            # Tailwind theme tokens + component styles
  App.jsx / main.jsx
index.html                    # home meta, Open Graph, fonts, JSON-LD
vercel.json                   # trailing-slash policy (no SPA rewrites)
```

Build output:

```text
dist/
  index.html                  # home
  work/<slug>/index.html      # one prerendered page per case study
  playground/index.html       # playground
  404.html                    # noindex fallback page
  sitemap.xml                 # generated from projects.js
  images/og/<slug>.jpg        # 1200×630 Open Graph images
  assets/
```

## Customization

### Profile, email, socials, CV

Edit `src/data/profile.js`. Replace the placeholder email and the four social
URLs with real profiles. The availability text, location, description, skills,
and tools also live there.

The downloadable CV is served from `public/cv/Salman-Alfarizi-CV.pdf` and
referenced through `profile.cv`. To update it, overwrite that file (keep the same
name) or change the path in `profile.js`.

### Portrait

The hero uses an optimized WebP export at `public/images/portrait.webp`
(1254×1254, ~100 KB). To update it:

1. Export a transparent 1:1 WebP and replace `public/images/portrait.webp`.
2. Keep `portrait: "/images/portrait.webp"` in `src/data/profile.js`, or point
   it to a different file if you rename it.
3. Update `portraitAlt` with an accurate description.

If the configured image fails to load, `Portrait.jsx` automatically falls back
to `public/images/profile-placeholder.svg`. The image is displayed with
`object-contain object-bottom`, so a square or 3:4 portrait both fit.

### Projects and case studies

Edit `src/data/projects.js`. Each entry supports:

```js
{
  slug, title, category, description, tags, image, imageAlt,
  role, timeline,
  imageWidth, imageHeight,   // optional — intrinsic size, defaults to 1200×900
  year,                     // optional — hidden in the UI when omitted
  kind: "logo",             // optional — switches to logo exploration tiles
  caseStudy: {
    overview, background, problem, goals: [],
    process: [{ title, description }],
    wireframes: [],
    explorationTitle,       // optional, defaults to "Wireframes"
    finalTitle,             // optional, defaults to "Final UI"
    finalUiCaption, outcome,
  },
}
```

The four digital-product entries use real 1920×1080 screenshots. Keep the PNG
source in `public/images/projects/` and reference the generated `.webp` in
`projects.js`:

```js
image: "/images/projects/meatmap.webp",
imageWidth: 1920,
imageHeight: 1080,
```

`scripts/optimize-images.mjs` regenerates the WebP whenever the PNG is newer, so
replacing `meatmap.png` and restarting dev (or rebuilding) is enough. Generated
`.webp` files are gitignored. The three identity projects still use SVG concept
artwork (1200×675).

Cards render artwork in a 16:9 frame. Screenshots use `object-cover`; logo
projects use `object-contain`, so a logo board is never cropped. The project
detail hero always shows the full image.

The current narrative copy is **placeholder content** written to demonstrate the
template. Replace it with the real process and outcomes. Do not add metrics,
client names, or testimonials unless they are verifiable.

### Playground

Edit `src/data/gallery.js`. Each entry supports `id`, `title`, `category`,
`year`, `src`, `alt`, `ratio`, and an optional `type: "video"` plus `video`
(MP4/WebM path) to render a native player using `src` as the poster.

Replace the six placeholder studies in `public/images/gallery/` with real
photography or motion stills (WebP/AVIF recommended).

### Services and experience

- `src/data/services.js` — five services with deliverables.
- `src/data/experience.js` — six roles with periods and descriptions.

The nav counts (`Work [07]`, `Services [05]`, `Experience [06]`) are defined in
`src/components/NavLinks.jsx`. Update them if you add or remove entries.

### Colors and type

Design tokens live in the `@theme` block at the top of `src/styles/index.css`:

```css
--color-canvas: #f3f3f3;   /* page background */
--color-surface: #ffffff;  /* cards and surfaces */
--color-ink: #171717;      /* primary text / dark buttons */
--color-secondary: #5f5f5f;
--color-muted: #6f6f6f;
--color-line: #e5e5e5;
--color-status: #21b66f;   /* availability dot */
```

Typography uses `clamp()` throughout, so text scales fluidly rather than
switching abruptly at breakpoints.

### SEO and metadata

All absolute URLs derive from one constant in `scripts/prerender.mjs`:

```js
const SITE_URL = "https://salfarizi-portfolio.vercel.app";
```

If the production domain changes, update `SITE_URL` and the same host in:

- `index.html` — canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD.
- `public/robots.txt` — the `Sitemap:` line.
- `src/data/siteMeta.js` — defaults used when navigating back to home.

At build time `scripts/prerender.mjs`:

1. Reads the built `dist/index.html` as the shared shell.
2. Rewrites the title, description, canonical, OG/Twitter tags, and JSON-LD for
   `/work/<slug>` and `/playground`.
3. Generates `dist/images/og/<slug>.jpg` (1200×630, JPEG) from each project's
   `image` with `sharp`, so replacing a project artwork also refreshes its
   social preview.
4. Writes `dist/sitemap.xml` from `src/data/projects.js` and a `noindex`
   `404.html`.

Because routes are real files, link previews for case studies now show the
project title, description, and artwork instead of the home page.

The default home OG image is a static export: edit
`public/images/og-image.svg` and export it to `public/images/og-image.png` at
1200×630.

### Page titles

`src/hooks/usePageMeta` keeps `document.title` and the meta description in sync
on client-side navigation. Home uses the defaults in `src/data/siteMeta.js`
(kept in sync with `index.html`); case studies, the playground, and the 404 page
declare their own strings in their page components.

## Deployment

`npm run build` emits a fully static site, so no SPA catch-all rewrite is needed:
every public route exists as `<route>/index.html` and the React app hydrates over
it. Unknown paths get `dist/404.html`.

**Vercel** — `vercel.json` only sets `trailingSlash: false`, so `/work/meatmap/`
redirects to `/work/meatmap`, which Vercel serves from
`work/meatmap/index.html`. Keep the build command as `npm run build` and the
output directory as `dist`.

**Netlify** — build command `npm run build`, publish directory `dist`. Netlify
serves directory indexes and `404.html` automatically, so no `_redirects` file is
required.

**GitHub Pages / subdirectory hosting** — set `base` in `vite.config.js` and a
matching `basename` on `<BrowserRouter>` in `src/main.jsx`, and update `SITE_URL`
in the prerender script. GitHub Pages does serve `folder/index.html` at
`/folder`.

Build output is in `dist/` and can be hosted on any static host that serves
directory indexes and a `404.html` fallback.

## Accessibility and performance notes

- Portrait control is a real `<button>` with `aria-pressed` and a descriptive
  label; it supports Enter/Space and only toggles on non-hover devices.
- All images have alt text; below-the-fold imagery uses `loading="lazy"` and
  `decoding="async"`. The hero portrait is eager with high fetch priority.
- `prefers-reduced-motion` disables transitions, scroll smoothing, and the
  availability pulse.
- Focus styles use a 2 px ink outline with offset. The mobile menu traps
  Tab/Shift+Tab inside the dialog, closes on Escape, locks body scroll, and
  returns focus to the trigger.
- In-page hash links are animated with Lenis while keeping the URL hash and
  native skip-link focus behavior intact.
- Text tokens meet WCAG AA on the `#f3f3f3` canvas: `secondary` 5.75:1 and
  `muted` 4.53:1.
- The Inter font is loaded with `display=swap`. For a fully self-hosted setup,
  download the font files and replace the Google Fonts link in `index.html`.

## Placeholder disclosure

The following are intentionally replaceable and should be reviewed before the
site goes live:

- Three logo concept artworks in `public/images/projects/` (GarasiSeken,
  Genproject, DRP Law Firm) — replace with the real marks when available.
- `imageAlt` copy for the four project screenshots — describe what each shot
  actually shows.
- Six playground visuals in `public/images/gallery/`.
- The CV at `public/cv/Salman-Alfarizi-CV.pdf`.
- Case-study narrative copy and experience periods/descriptions.
- Email address and social profile URLs.
- Canonical, Open Graph, and JSON-LD URLs (update `SITE_URL` before deploying to
  a different domain).
