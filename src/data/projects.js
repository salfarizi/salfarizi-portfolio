/**
 * Editable project data.
 *
 * Replace the artwork in /public/images/projects/ with real project imagery
 * (ideally WebP/AVIF, 1600×1200 or similar). The narrative copy below is a
 * documented placeholder — refine it with the real process and outcomes.
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
    // Placeholder artwork — swap back to "/images/projects/meatmap.svg" anytime.
    image: "/images/projects/placeholder-01.svg",
    imageAlt:
      "Neutral placeholder artwork labelled 01 for the MeatMap project, pending final imagery",
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
    slug: "elara",
    title: "Elara",
    category: "Digital Product",
    year: "2025",
    description:
      "A quiet, editorial digital product concept for a modern wellness studio — booking, membership, and daily rituals in one place.",
    tags: ["Product Design", "Design System", "Web App"],
    // Placeholder artwork — swap back to "/images/projects/elara.svg" anytime.
    image: "/images/projects/placeholder-02.svg",
    imageAlt:
      "Neutral placeholder artwork labelled 02 for the Elara project, pending final imagery",
    role: "Product Design, Design System",
    timeline: "Concept project",
    caseStudy: {
      overview:
        "Elara is a digital product concept for a contemporary wellness studio. The experience brings class booking, membership management, and daily rituals into a single, unhurried interface.",
      background:
        "Wellness brands often communicate calm in their physical spaces but lose that quality online. The concept set out to translate the atmosphere of a quiet studio into a digital product that still feels practical to use.",
      problem:
        "Members need to book quickly, understand what a class involves, and manage their membership without navigating a busy marketing site. The product had to be efficient without feeling clinical.",
      goals: [
        "Create a booking flow that takes only a few decisions.",
        "Establish an editorial visual language that feels human.",
        "Keep membership information easy to find and understand.",
        "Design a system that can extend across web and mobile.",
      ],
      process: [
        {
          title: "Experience principles",
          description:
            "Defined a small set of principles around calm pacing, clear language, and visible next steps.",
        },
        {
          title: "Flow mapping",
          description:
            "Mapped booking, rescheduling, and membership journeys, removing steps that did not add value for the member.",
        },
        {
          title: "Interface studies",
          description:
            "Explored editorial layouts and typographic scales that could hold photography without competing with it.",
        },
        {
          title: "Design system",
          description:
            "Consolidated type styles, spacing, surfaces, and components into a reusable set of tokens and patterns.",
        },
        {
          title: "Prototype review",
          description:
            "Tested the booking path in a clickable prototype, refining hierarchy and the amount of information shown at each step.",
        },
      ],
      wireframes: ["Schedule overview", "Class detail", "Membership"],
      finalUiCaption:
        "An editorial schedule, class detail view, and membership area built on a shared design system.",
      outcome:
        "The concept pairs a clear booking flow with an editorial interface that carries the studio's tone. It is presented as a design exploration rather than a live product.",
    },
  },
  {
    slug: "novelya",
    title: "Novelya",
    category: "Graphic Design",
    year: "2024",
    description:
      "A visual identity and editorial poster series for an independent publishing house focused on new voices in fiction.",
    tags: ["Brand Identity", "Editorial", "Typography"],
    // Placeholder artwork — swap back to "/images/projects/novelya.svg" anytime.
    image: "/images/projects/placeholder-03.svg",
    imageAlt:
      "Neutral placeholder artwork labelled 03 for the Novelya project, pending final imagery",
    role: "Art Direction, Graphic Design",
    timeline: "Identity & poster series",
    caseStudy: {
      overview:
        "Novelya is a visual identity concept for an independent publisher of contemporary fiction. The system centers on strong typography, generous space, and a single recurring geometric form.",
      background:
        "Independent publishers need an identity that can move between book covers, posters, and social formats without losing character. The brief called for something literary but not nostalgic.",
      problem:
        "The identity had to feel distinctive on a crowded shelf while remaining flexible enough for a small team to apply consistently across many formats.",
      goals: [
        "Build a recognizable typographic voice.",
        "Create a flexible system for covers, posters, and digital use.",
        "Keep production simple and inexpensive to reproduce.",
        "Balance literary seriousness with contemporary energy.",
      ],
      process: [
        {
          title: "Reference study",
          description:
            "Reviewed independent publishing, editorial design, and poster traditions to locate a visual territory that felt current.",
        },
        {
          title: "Typographic direction",
          description:
            "Tested scale, orientation, and contrast to find a headline treatment that could carry the identity on its own.",
        },
        {
          title: "Form and color",
          description:
            "Introduced a single circular form and a restrained palette to create recognition without extra ornament.",
        },
        {
          title: "Application",
          description:
            "Applied the system to a poster series, cover studies, and small-format digital layouts.",
        },
        {
          title: "Refinement",
          description:
            "Tightened spacing, alignment, and print considerations so the system could be reproduced consistently.",
        },
      ],
      wireframes: ["Poster grid", "Cover study", "Digital crop"],
      finalUiCaption:
        "A poster-led identity system built from one circular form, a tight palette, and expressive typography.",
      outcome:
        "The final system gives Novelya a distinct editorial voice with a small set of rules that are easy to extend across future titles.",
    },
  },
  {
    slug: "garasiseken",
    title: "GarasiSeken",
    category: "Web Design & Development",
    year: "2024",
    description:
      "A bold, high-contrast website for an independent automotive workshop, designed and built around clarity and craft.",
    tags: ["Web Design", "React", "Tailwind CSS"],
    // Placeholder artwork — swap back to "/images/projects/garasiseken.svg" anytime.
    image: "/images/projects/placeholder-04.svg",
    imageAlt:
      "Neutral placeholder artwork labelled 04 for the GarasiSeken project, pending final imagery",
    role: "Design & Frontend Development",
    timeline: "Website concept",
    caseStudy: {
      overview:
        "GarasiSeken is a website concept for an independent automotive workshop. The design pairs a confident, high-contrast visual language with a straightforward path to services and contact.",
      background:
        "Small workshops often rely on social media alone, where services, opening hours, and contact details are scattered. The site was conceived as a focused home for that information.",
      problem:
        "The workshop needed to communicate technical credibility without feeling corporate, and make it obvious how to get in touch or visit.",
      goals: [
        "Present services in a clear, scannable structure.",
        "Translate the workshop's hands-on character into the interface.",
        "Make contact and location details immediate.",
        "Build a responsive frontend with restrained motion.",
      ],
      process: [
        {
          title: "Content structure",
          description:
            "Grouped services, workshop details, and contact information into a short, direct page structure.",
        },
        {
          title: "Art direction",
          description:
            "Developed a dark, high-contrast direction with warm accents and a utilitarian type palette.",
        },
        {
          title: "Layout studies",
          description:
            "Explored editorial hero compositions that could hold workshop photography without relying on stock imagery.",
        },
        {
          title: "Frontend build",
          description:
            "Implemented the responsive layout with React and Tailwind CSS, focusing on typography, spacing, and accessible interactions.",
        },
        {
          title: "Review",
          description:
            "Checked breakpoints, keyboard navigation, image loading, and motion behavior across devices.",
        },
      ],
      wireframes: ["Landing structure", "Service detail", "Contact block"],
      finalUiCaption:
        "A high-contrast landing page with a compact service index and a direct contact path.",
      outcome:
        "The result is a fast, responsive concept site that gives the workshop a clear digital presence and a flexible base for future content.",
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
