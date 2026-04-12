export const site = {
  name: "Makerlab",
  title: "Makerlab — a twenty-year collaboration in speculative, experimental, and agentic systems",
  description:
    "Makerlab is the long collaboration of Paige Saez and Anselm Hook — two decades of speculative, experimental work threaded with AI and agentic systems. Civic simulations, conversational agents, place-based games, art installations, strange hardware, and the quiet infrastructure underneath other people's tools.",
  url: "https://makerlab.com",
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
    { label: "Slowcode", href: "https://slowcode.makerlab.com" },
    { label: "GitHub", href: "https://github.com/makerlab" },
  ],
} as const;
