/**
 * Editable playground data.
 *
 * Every entry is a documented placeholder visual. Replace `src` with your own
 * work in /public/images/gallery/ (WebP/AVIF recommended).
 *
 * Supported fields:
 *   id, title, category, year
 *   src     — cover image (also used as the video poster)
 *   alt     — descriptive alt text
 *   ratio   — CSS aspect-ratio, e.g. "4 / 5", "4 / 3", "1 / 1"
 *   type    — "image" (default) or "video"
 *   video   — optional MP4/WebM path; when present a native player is rendered
 */
export const gallery = [
  {
    id: "form",
    title: "Form Study",
    category: "Visual Experiment",
    year: "2026",
    src: "/images/gallery/study-01.svg",
    alt: "Monochrome composition of a large outlined circle crossed by a diagonal line",
    ratio: "4 / 5",
    type: "image",
  },
  {
    id: "rhythm",
    title: "Rhythm Grid",
    category: "Graphic Study",
    year: "2026",
    src: "/images/gallery/study-02.svg",
    alt: "Grid of dots in varying sizes forming a rhythmic pattern",
    ratio: "4 / 3",
    type: "image",
  },
  {
    id: "orbit",
    title: "Orbit",
    category: "Motion Study",
    year: "2025",
    src: "/images/gallery/study-03.svg",
    alt: "Concentric circles radiating from a central point",
    ratio: "1 / 1",
    type: "image",
  },
  {
    id: "sequence",
    title: "Sequence",
    category: "Editorial",
    year: "2025",
    src: "/images/gallery/study-04.svg",
    alt: "Stack of horizontal bars of alternating tones and widths",
    ratio: "3 / 4",
    type: "image",
  },
  {
    id: "texture",
    title: "Texture",
    category: "Art Direction",
    year: "2025",
    src: "/images/gallery/study-05.svg",
    alt: "Diagonal hatch pattern fading into a plain background",
    ratio: "4 / 3",
    type: "image",
  },
  {
    id: "light",
    title: "Light",
    category: "Photography Study",
    year: "2024",
    src: "/images/gallery/study-06.svg",
    alt: "Shaded sphere fading from white to dark grey",
    ratio: "4 / 5",
    type: "image",
  },
];
