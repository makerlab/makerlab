export const site = {
  name: "Makerlab",
  title: "Makerlab — since 2006. A twenty-year collaboration of Paige Saez and Anselm Hook in speculative, experimental, and agentic systems.",
  description:
    "Since 2006, Makerlab is the long collaboration of Paige Saez and Anselm Hook — two decades of speculative, experimental work threaded with AI and agentic systems. Civic simulations, conversational agents, place-based games, art installations, strange hardware, and the quiet infrastructure underneath other people's tools.",
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
