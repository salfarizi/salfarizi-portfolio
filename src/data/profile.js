/**
 * Central profile configuration.
 * Every value here is editable. Replace placeholder URLs, email, and portrait.
 */
export const profile = {
  name: "Salman Alfarizi",
  displayName: ["SALMAN", "ALFARIZI"],
  title: "UI/UX Designer & Creative Designer",
  availability: "Available for New Projects",
  availabilityShort: "Available",
  location: "Based in Indonesia",
  description:
    "Designing thoughtful digital experiences and visual identities that balance aesthetics, usability, and purpose.",
  about:
    "I'm Salman Alfarizi, a multidisciplinary designer with an interest in creating meaningful digital experiences. My work combines user-centered thinking, visual storytelling, and a practical understanding of frontend development.",

  // Placeholder email — replace with the real address.
  email: "lssalman32@gmail.com",

  // Downloadable CV. Replace the file at /public/cv/Salman-Alfarizi-CV.pdf
  // whenever the CV is updated.
  cv: "/cv/Salman-Alfarizi-CV.pdf",

  // Optimized WebP export of the hero portrait (1254×1254, ~100 KB).
  // To update it, export a transparent 1:1 WebP to /public/images/portrait.webp
  // and keep the path below. If the image fails to load, Portrait.jsx falls
  // back to /images/profile-placeholder.svg.
  portrait: "/images/portrait.webp",
  portraitAlt: "Portrait of Salman Alfarizi",

  // Placeholder social URLs — replace with real profile links.
  socials: [
    { label: "Dribbble", icon: "dribbble", href: "https://dribbble.com/Salfarizi" },
    {
      label: "Instagram",
      icon: "instagram",
      href: "https://www.instagram.com/salfarizii",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/salfarizi/",
    },
    {
      label: "Behance",
      icon: "behance",
      href: "https://www.behance.net/salmanalfarizi1",
    },
  ],

  skills: [
    "UI/UX Design",
    "Interaction Design",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Graphic Design",
    "Video Editing",
    "Frontend Development",
  ],

  tools: [
    "Figma",
    "Affinity Designer",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
    "React",
    "Tailwind CSS",
    "AI-assisted design tools",
  ],
};
