/**
 * Post-build SEO step.
 *
 * Vite produces a single-page app shell. This script turns it into a set of
 * static, crawlable pages:
 *
 *   dist/index.html                  home (already written by Vite)
 *   dist/work/<slug>/index.html      one file per case study
 *   dist/playground/index.html       playground
 *   dist/404.html                    custom 404 (served with a 404 status)
 *   dist/sitemap.xml                 generated from src/data/projects.js
 *   dist/images/og/<slug>.jpg        per-project Open Graph images
 *
 * The React app still hydrates and takes over routing; these files only make
 * sure crawlers and social previews see the right metadata on first request.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { projects } from "../src/data/projects.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

/** Change this (and index.html / robots.txt) if the production domain changes. */
const SITE_URL = "https://salfarizi-portfolio.vercel.app";
const SITE_NAME = "Salman Alfarizi";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png`;
const LASTMOD = new Date().toISOString().slice(0, 10);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function setMeta(html, attribute, key, content) {
  if (!content) return html;

  const pattern = new RegExp(`<meta ${attribute}="${key}"[^>]*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n</head>`);
}

function setTitle(html, title) {
  return html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`,
  );
}

function setCanonical(html, url) {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  );
}

function setJsonLd(html, data) {
  const pattern = /<script type="application\/ld\+json">[\s\S]*?<\/script>/i;

  if (!data) return html.replace(pattern, "");

  const json = JSON.stringify(data, null, 2).replaceAll("<", "\\u003c");
  return html.replace(
    pattern,
    `<script type="application/ld+json">\n${json}\n    </script>`,
  );
}

function renderMeta(
  html,
  { title, description, url, image = DEFAULT_OG_IMAGE, imageAlt, type = "website", robots, jsonLd },
) {
  let out = setTitle(html, title);

  out = setMeta(out, "name", "description", description);
  out = setMeta(out, "property", "og:type", type);
  out = setMeta(out, "property", "og:title", title);
  out = setMeta(out, "property", "og:description", description);
  out = setMeta(out, "property", "og:url", url);
  out = setMeta(out, "property", "og:image", image);
  out = setMeta(out, "property", "og:image:alt", imageAlt ?? title);
  out = setMeta(out, "name", "twitter:title", title);
  out = setMeta(out, "name", "twitter:description", description);
  out = setMeta(out, "name", "twitter:image", image);
  out = setMeta(out, "name", "robots", robots);
  out = setCanonical(out, url);
  out = setJsonLd(out, jsonLd);

  return out;
}

async function writeRoute(route, html) {
  const file = path.join(dist, route, "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}

async function createOgImage(project) {
  const source = path.join(root, "public", project.image.replace(/^\//, ""));
  const dir = path.join(dist, "images", "og");
  const file = path.join(dir, `${project.slug}.jpg`);

  await mkdir(dir, { recursive: true });
  await sharp(source)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .flatten({ background: "#f3f3f3" })
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(file);

  return `${SITE_URL}/images/og/${project.slug}.jpg`;
}

function createSitemap() {
  const urls = [
    { loc: `${SITE_URL}/`, priority: "1.0" },
    ...projects.map((project) => ({
      loc: `${SITE_URL}/work/${project.slug}`,
      priority: "0.8",
    })),
  ];

  const entries = urls
    .map(
      ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

const base = await readFile(path.join(dist, "index.html"), "utf8");

for (const project of projects) {
  const url = `${SITE_URL}/work/${project.slug}`;
  const image = await createOgImage(project);

  const html = renderMeta(base, {
    title: `${project.title} — ${SITE_NAME}`,
    description: `${project.title}: ${project.description}`,
    url,
    image,
    imageAlt: `${project.title} case study artwork`,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.title,
      description: project.description,
      url,
      image,
      genre: project.category,
      keywords: project.tags.join(", "),
      datePublished: project.year,
      creator: {
        "@type": "Person",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      isPartOf: {
        "@type": "WebSite",
        name: `${SITE_NAME} — Portfolio`,
        url: `${SITE_URL}/`,
      },
    },
  });

  await writeRoute(`work/${project.slug}`, html);
  console.log(`prerendered /work/${project.slug}`);
}

const playgroundUrl = `${SITE_URL}/playground`;
const playgroundHtml = renderMeta(base, {
  title: `Playground — ${SITE_NAME}`,
  description:
    "Photography, motion, and visual experiments by Salman Alfarizi — studies in form, rhythm, and light outside client work.",
  url: playgroundUrl,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Playground — ${SITE_NAME}`,
    description:
      "Photography, motion, and visual experiments by Salman Alfarizi.",
    url: playgroundUrl,
    isPartOf: {
      "@type": "WebSite",
      name: `${SITE_NAME} — Portfolio`,
      url: `${SITE_URL}/`,
    },
  },
});
await writeRoute("playground", playgroundHtml);
console.log("prerendered /playground");

/**
 * The 404 page is never linked or indexed, so it gets no canonical URL and no
 * hero portrait preload. Strip the home-page leftovers rather than shipping a
 * preload that would compete with the real page's LCP image.
 */
const notFoundHtml = renderMeta(base, {
  title: `Page not found — ${SITE_NAME}`,
  description:
    "The page you are looking for could not be found. Return to Salman Alfarizi's portfolio.",
  url: `${SITE_URL}/`,
  robots: "noindex, follow",
  jsonLd: null,
})
  .replace(/\n\s*<!-- Production URL[\s\S]*?-->/, "")
  .replace(/\n\s*<link rel="canonical"[^>]*>/, "")
  .replace(/\n\s*<!-- Hero portrait[\s\S]*?-->/, "")
  .replace(/\n\s*<link rel="preload" as="image"[^>]*>/, "");


await writeFile(path.join(dist, "404.html"), notFoundHtml, "utf8");
console.log("prerendered /404.html");

await writeFile(path.join(dist, "sitemap.xml"), createSitemap(), "utf8");
console.log("generated sitemap.xml");
