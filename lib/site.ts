export const site = {
  name: "Makerlab",
  title: "Makerlab — a full stack interactive design collective",
  description:
    "Makerlab is a full stack interactive design and build collective. We do product design, prototyping, mobile and web development, and rapid hardware prototyping.",
  url: "https://makerlab.com",
  ogImage: "/og.png",
  twitter: "@makerlab",
  contact: {
    primary: "us@makerlab.com",
    alias: "info@makerlab.com",
    people: [
      { name: "Paige", email: "paige@makerlab.com" },
      { name: "Anselm", email: "anselm@makerlab.com" },
    ],
  },
  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/makerlab" },
    { label: "Blog", href: "https://blog.makerlab.com" },
    { label: "GitHub", href: "https://github.com/makerlab" },
  ],
} as const;
