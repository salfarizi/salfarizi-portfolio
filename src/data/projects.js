/**
 * Editable project data.
 *
 * The artwork files in /public/images/projects/ are project-specific SVG
 * concept mockups. Replace them with real project imagery (ideally WebP/AVIF,
 * around 1600×1200) when available. The narrative copy below is a documented
 * placeholder — refine it with the real process and outcomes.
 *
 * Fields:
 *   slug, title, category, year, description, tags, image, imageAlt,
 *   role, timeline, caseStudy
 *   kind            — optional, "logo" for identity projects
 *   explorationTitle / finalTitle — optional section labels
 *
 * `year` is optional: when omitted, the UI hides it everywhere.
 * Do not add metrics or testimonials unless they can be verified.
 */
export const projects = [
  {
    slug: "meatmap",
    title: "MeatMap",
    category: "UI/UX Design",
    year: "2025",
    description:
      "A mobile-first food discovery concept that helps people find local suppliers, butchers, and specialty cuts nearby.",
    tags: ["Mobile App", "Research", "UI Design", "Prototype"],
    image: "/images/projects/meatmap.webp",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "MeatMap concept artwork with a map-led supplier view beside a mobile list of nearby cuts",
    role: "Product Design, UI/UX",
    timeline: "Concept project",
    caseStudy: {
      overview:
        "MeatMap is a food discovery concept built around a simple question: where can I find the right cut, nearby? The work explores how location, product information, and trust signals can come together in one calm mobile experience.",
      background:
        "Buying specialty meat often means scattered recommendations, unclear availability, and phone calls to shops that may not have what you need. The concept was shaped around making local sourcing feel more transparent and less time-consuming.",
      problem:
        "People who care about quality and provenance have no reliable way to compare nearby suppliers, understand what is available, or plan a purchase without visiting in person.",
      goals: [
        "Make nearby suppliers easy to discover and compare.",
        "Present cuts and availability with clear, scannable detail.",
        "Create a browsing flow that works comfortably with one hand.",
        "Build trust through honest store information and imagery.",
      ],
      process: [
        {
          title: "Discovery",
          description:
            "Mapped the existing behaviors around buying specialty ingredients and identified the moments where uncertainty appears.",
        },
        {
          title: "Information architecture",
          description:
            "Organized suppliers, cut categories, and store details into a shallow structure that keeps the map at the center.",
        },
        {
          title: "Wireframes",
          description:
            "Sketched the core browse-to-detail flow, testing how much information each screen could carry without feeling dense.",
        },
        {
          title: "Visual system",
          description:
            "Built a restrained type and color system that lets product photography and location cues do most of the work.",
        },
        {
          title: "Prototype",
          description:
            "Connected the main flow into a clickable prototype to review pacing, tap targets, and the transition between map and detail views.",
        },
      ],
      wireframes: ["Map exploration", "Supplier detail", "Saved cuts"],
      finalUiCaption:
        "Map-led discovery paired with supplier profiles, cut categories, and a lightweight saved list.",
      outcome:
        "The final concept delivers a clear, map-led browsing experience with supplier profiles, cut categories, and a saved-list flow. It remains a design exploration rather than a shipped product.",
    },
  },
  {
    slug: "garkantra",
    title: "Garkantra",
    category: "Web Design & UI/UX",
    description:
      "A responsive web experience built around editorial hierarchy — clear navigation, calm pacing, and a layout that stays readable at every width.",
    tags: ["Web Design", "UI/UX", "Responsive", "Frontend"],
    image: "/images/projects/garkantra.webp",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "Garkantra web concept artwork showing an editorial landing page with a large serif headline and project cards",
    role: "UI/UX Design, Frontend Development",
    timeline: "Web design exploration",
    caseStudy: {
      overview:
        "Garkantra is a web design exploration about structure. The site pairs a strong editorial grid with a restrained interface, so hierarchy does the work instead of decoration. Every section is built to be scanned quickly and read comfortably.",
      background:
        "Content-led sites often become dense: navigation, calls to action, and long copy compete for the same attention. This exploration started from the opposite direction — decide what the page is for, then remove everything that does not support it.",
      problem:
        "Visitors need to understand the offering within seconds and move into detail without hunting. The layout has to carry a lot of information while staying fast, legible, and calm on screens from 320 px up.",
      goals: [
        "Establish a clear reading order from the first screen.",
        "Keep navigation visible without crowding the content.",
        "Build a responsive grid that adapts without breaking rhythm.",
        "Ship a lightweight frontend with accessible interactions.",
      ],
      process: [
        {
          title: "Discovery",
          description:
            "Defined the single job of each section before deciding what it should contain, so the page could stay short without losing information.",
        },
        {
          title: "Information architecture",
          description:
            "Grouped content into a flat structure with a persistent nav, keeping the path from landing page to detail to a single step.",
        },
        {
          title: "Wireframes",
          description:
            "Tested the grid at mobile, tablet, and wide desktop widths, focusing on where the reading order should change.",
        },
        {
          title: "Visual system",
          description:
            "Paired a serif display face with a quiet sans-serif, using one warm accent and generous space instead of borders and shadows.",
        },
        {
          title: "Frontend build",
          description:
            "Implemented the layout with React and Tailwind CSS, checking typography, focus states, and motion across breakpoints.",
        },
      ],
      wireframes: ["Landing structure", "Content detail", "Navigation states"],
      finalUiCaption:
        "An editorial landing page with a fixed reading rhythm, a compact nav, and reusable content cards.",
      outcome:
        "The result is a responsive site concept that keeps a clear reading order from the first screen to the last, and a structure that can absorb new content without a redesign.",
    },
  },
  {
    slug: "deskregist",
    title: "Desk Regist",
    category: "Mobile App",
    description:
      "A registration and front-desk app concept that keeps check-in, queues, and guest details in one short flow.",
    tags: ["Mobile App", "Product Design", "UI Design", "Prototype"],
    image: "/images/projects/deskregist.webp",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "Desk Regist concept artwork showing a check-in list and a guest detail form on two phone screens",
    role: "Product Design, UI/UX",
    timeline: "App concept",
    caseStudy: {
      overview:
        "Desk Regist is a mobile concept for front-desk teams handling event check-in. It turns registration into a short sequence of taps, while keeping the queue visible for whoever is standing at the desk.",
      background:
        "Paper lists and spreadsheets slow a busy desk down. Staff leave the line to find a laptop, search a name, and write a note. Moving the flow to a phone keeps the desk where the queue is.",
      problem:
        "Staff need to find a guest, confirm details, and move to the next person quickly. Every extra field or screen adds delay for everyone behind them.",
      goals: [
        "Make check-in possible in a few taps.",
        "Keep the live queue visible at all times.",
        "Handle walk-ins without leaving the flow.",
        "Stay legible under time pressure.",
      ],
      process: [
        {
          title: "Flow mapping",
          description:
            "Observed the sequence at a busy desk and listed every point where staff had to switch tools or ask the guest to repeat information.",
        },
        {
          title: "Structure",
          description:
            "Reduced registration to three states — search, confirm, done — and moved optional fields out of the critical path.",
        },
        {
          title: "Wireframes",
          description:
            "Sketched the list and detail views with one hand in mind, keeping primary actions within thumb reach.",
        },
        {
          title: "Visual system",
          description:
            "Used a quiet green accent for confirmed states, strong type for names, and a single dark button for the primary action.",
        },
        {
          title: "Prototype",
          description:
            "Connected the flow into a clickable prototype to check pacing, tap targets, and how much of the queue stays visible during a check-in.",
        },
      ],
      wireframes: ["Check-in list", "Guest detail", "Queue status"],
      finalUiCaption:
        "A focused check-in list, a compact guest form, and a live queue summary on one screen.",
      outcome:
        "The concept gives front-desk staff a single flow from search to confirmation, with the state of the queue always in view.",
    },
  },
  {
    slug: "miniseri",
    title: "Miniseri",
    category: "Mobile App",
    description:
      "A mobile app concept for short-form series — browsing episodes, saving favourites, and resuming playback without friction.",
    tags: ["Mobile App", "UI/UX", "Content", "Prototype"],
    image: "/images/projects/miniseri.webp",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "Miniseri concept artwork showing a series library and a video player on two phone screens",
    role: "UI/UX Design, Prototype",
    timeline: "App concept",
    caseStudy: {
      overview:
        "Miniseri is a mobile app concept for short-form series. It is built around one habit: opening the app, finding the next episode, and pressing play without deciding anything else.",
      background:
        "Short series live between platforms. Episodes are scattered across links and saved posts, and progress is rarely remembered. The concept collects a series into one quiet library.",
      problem:
        "Viewers need to find where they stopped and get back into an episode quickly. Browsing should not feel like managing a catalogue.",
      goals: [
        "Make resuming an episode a single tap.",
        "Keep series and episodes easy to scan.",
        "Show progress without cluttering the screen.",
        "Design a player that stays out of the way.",
      ],
      process: [
        {
          title: "Content model",
          description:
            "Defined the smallest useful set of objects — series, episode, and progress — so the interface would not need extra layers.",
        },
        {
          title: "Browse structure",
          description:
            "Put continue-watching first, then a compact series grid, and kept search out of the main screen.",
        },
        {
          title: "Wireframes",
          description:
            "Sketched the library, episode list, and player as one continuous path, checking how much context each screen needs.",
        },
        {
          title: "Visual language",
          description:
            "Used muted poster blocks, a single cool accent, and restrained type so the artwork carries the identity.",
        },
        {
          title: "Prototype",
          description:
            "Connected the browse-to-play flow to review transitions, progress states, and how the player behaves on a small screen.",
        },
      ],
      wireframes: ["Series browse", "Episode list", "Player"],
      finalUiCaption:
        "A browse view, an episode list, and a player that keeps progress visible.",
      outcome:
        "The result is a calm viewing flow: pick a series, see the next episode, and continue where you left off.",
    },
  },
  {
    slug: "garasiseken",
    title: "GarasiSeken",
    category: "Logo & Brand Identity",
    year: "2024",
    description:
      "A compact logo and identity system for an independent automotive workshop — built to read clearly on a sign, a sticker, and a phone screen.",
    tags: ["Logo Design", "Brand Identity", "Wordmark"],
    image: "/images/projects/garasiseken.svg",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt:
      "GarasiSeken logo artwork with a GS monogram, wordmark, amber sticker, and workshop card",
    role: "Logo Design, Art Direction",
    timeline: "Identity mark",
    kind: "logo",
    caseStudy: {
      explorationTitle: "Exploration",
      finalTitle: "Final Mark",
      overview:
        "GarasiSeken needed a mark that could work as a workshop sign, a sticker on a toolbox, and an avatar on a phone. The identity is built from a single monogram and a wide wordmark, with one warm accent.",
      background:
        "Small workshops often inherit a logo from a sign painter or a template. It works at one size and falls apart everywhere else. The brief was to build a mark that stays legible from a distance and on a screen.",
      problem:
        "The mark has to read at 16 px as an avatar and at two metres as a sign, while still feeling hands-on rather than corporate.",
      goals: [
        "Create a monogram that works at very small sizes.",
        "Pair it with a wordmark that can stand alone.",
        "Keep the system reproducible on simple materials.",
        "Avoid generic automotive clichés.",
      ],
      process: [
        {
          title: "Brief",
          description:
            "Listed the places the mark would actually appear — sign, sticker, invoice, and phone — and designed for the smallest first.",
        },
        {
          title: "Mark studies",
          description:
            "Explored monograms built from the workshop initials, testing stroke weight and counter shapes at icon size.",
        },
        {
          title: "Wordmark",
          description:
            "Set the name in a wide, confident sans-serif with generous tracking so it could hold a long sign on its own.",
        },
        {
          title: "Applications",
          description:
            "Applied the system to a sticker, a card, and a reversed version for dark surfaces.",
        },
        {
          title: "Refinement",
          description:
            "Tightened spacing between the monogram and wordmark, and fixed the accent to a single amber.",
        },
      ],
      wireframes: ["Monogram", "Wordmark", "Applications"],
      finalUiCaption:
        "A GS monogram, a wide wordmark, and a small set of applications built on one amber accent.",
      outcome:
        "The result is a compact identity that holds together across signage, stickers, and digital avatars without needing a separate version for each.",
    },
  },
  {
    slug: "genproject",
    title: "Genproject",
    category: "Logo & Brand Identity",
    description:
      "A geometric logo system for a project studio — one modular mark that scales from an app icon to large-format print.",
    tags: ["Logo Design", "Brand System", "Monogram"],
    image: "/images/projects/genproject.svg",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt:
      "Genproject logo artwork with a square G monogram, wordmark, palette chips, and a reversed panel",
    role: "Logo Design, Visual Identity",
    timeline: "Mark & system",
    kind: "logo",
    caseStudy: {
      explorationTitle: "Exploration",
      finalTitle: "Final Mark",
      overview:
        "Genproject is a mark built from a single square stroke. The opening in the form creates a G, and one filled block gives the identity its only point of colour.",
      background:
        "A project studio needs a mark that can sit next to many different project names without competing. The identity had to be structural rather than decorative, so it could extend into a simple system.",
      problem:
        "The logo has to survive being reduced to a favicon and enlarged to a wall graphic, while staying recognisable without the wordmark.",
      goals: [
        "Build a mark from one repeatable geometric rule.",
        "Keep the form legible as a 16 px icon.",
        "Give the system one strong accent colour.",
        "Allow the mark to work in a single colour.",
      ],
      process: [
        {
          title: "Brief",
          description:
            "Defined the mark as a container for projects rather than a picture of one, which pointed toward an abstract letterform.",
        },
        {
          title: "Form studies",
          description:
            "Sketched monograms on a square grid, testing where an opening could read as a G without extra detail.",
        },
        {
          title: "Grid and proportions",
          description:
            "Aligned the stroke, opening, and filled block to one module so the mark could be redrawn at any size.",
        },
        {
          title: "Colour",
          description:
            "Kept the mark in ink for most applications and reserved a warm signal colour for the filled block.",
        },
        {
          title: "Applications",
          description:
            "Built a reversed version, a wordmark lockup, and a palette sheet that shows how the system is applied.",
        },
      ],
      wireframes: ["Monogram", "Wordmark", "Applications"],
      finalUiCaption:
        "A square G monogram, a wide wordmark, and a four-colour palette that keeps the system consistent.",
      outcome:
        "The result is a modular identity that scales cleanly from an app icon to large-format print, with one rule and one accent doing the work.",
    },
  },
  {
    slug: "drplawfirm",
    title: "DRP Law Firm",
    category: "Logo & Brand Identity",
    description:
      "A restrained identity for a law firm — a serif wordmark and monogram that balance authority with approachability.",
    tags: ["Logo Design", "Brand Identity", "Typography"],
    image: "/images/projects/drplawfirm.svg",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt:
      "DRP Law Firm logo artwork with a serif DRP monogram, gold rules, and light and dark applications",
    role: "Logo Design, Typography",
    timeline: "Identity mark",
    kind: "logo",
    caseStudy: {
      explorationTitle: "Exploration",
      finalTitle: "Final Mark",
      overview:
        "DRP Law Firm needed an identity that feels established without feeling distant. The mark centres on a serif DRP monogram, framed by thin gold rules and a quiet wordmark.",
      background:
        "Legal branding tends to swing between old-fashioned crests and generic corporate blue. The brief asked for something calm and precise that would still look credible on a letterhead and a screen.",
      problem:
        "The identity has to communicate authority at a glance while remaining warm enough for a first consultation.",
      goals: [
        "Build credibility without looking severe.",
        "Keep the wordmark readable at small sizes.",
        "Use one accent colour with restraint.",
        "Design applications for both print and screen.",
      ],
      process: [
        {
          title: "Brief",
          description:
            "Identified the surfaces that matter most — letterhead, signage, and a mobile header — and treated the smallest as the constraint.",
        },
        {
          title: "Typographic direction",
          description:
            "Compared serif faces for the monogram, choosing a high-contrast form that stays clear when reduced.",
        },
        {
          title: "Monogram",
          description:
            "Set the three initials as one unit and framed them with two fine rules to give the mark a stable edge.",
        },
        {
          title: "Colour and rules",
          description:
            "Paired deep navy with a muted gold, keeping both to thin elements so the identity stays quiet.",
        },
        {
          title: "Applications",
          description:
            "Tested the lockup on a dark card, a light page, and a gold surface to confirm contrast in every version.",
        },
      ],
      wireframes: ["Monogram", "Wordmark", "Applications"],
      finalUiCaption:
        "A serif DRP lockup, a gold rule, and a small application set for print and screen.",
      outcome:
        "The result is a restrained identity that reads as established without feeling distant, and that stays consistent from letterhead to mobile header.",
    },
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};
