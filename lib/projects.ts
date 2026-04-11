export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  image: string;
  href: string;
  sponsor?: string;
  sponsorUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "orbital",
    name: "Orbital",
    tagline: "Agent-based cloud computation engine.",
    tags: ["tool", "sim"],
    image: "/assets/orbital.jpg",
    href: "https://orbital.foundation",
    sponsor: "@anselm",
    sponsorUrl: "https://twitter.com/anselm",
  },
  {
    slug: "simulate-world",
    name: "Simulate World",
    tagline: "Simulating the world.",
    tags: ["philosophy"],
    image: "/assets/simulate_world.jpg",
    href: "https://simulate.world",
  },
  {
    slug: "futureof",
    name: "FutureOf",
    tagline: "A fun pandemic conference series.",
    tags: ["social"],
    image: "/assets/futureof.jpg",
    href: "https://future-of.web.app",
  },
  {
    slug: "humanscale",
    name: "HumanScale",
    tagline: "Design thinking for human-scale architecture.",
    tags: ["design", "philosophy"],
    image: "/assets/humanscale.jpg",
    href: "https://human.scale",
  },
  {
    slug: "lifecards",
    name: "Lifecards",
    tagline: "Data-driven layout engine.",
    tags: ["design", "data"],
    image: "/assets/lifecards.jpg",
    href: "https://github.com/makerlab/lifecards",
  },
  {
    slug: "sugar",
    name: "Sugar",
    tagline: "Real-time, place-based game.",
    tags: ["game", "place"],
    image: "/assets/sugar.jpg",
    href: "https://sugarhero.world",
  },
  {
    slug: "starrybot",
    name: "StarryBot",
    tagline: "Token-gated Discord bot.",
    tags: ["crypto"],
    image: "/assets/starrybot.png",
    href: "https://starrybot.xyz",
  },
  {
    slug: "lemonopoly",
    name: "Lemonopoly",
    tagline: "Place-based game and winner of the Zero1 Arts Grant.",
    tags: ["game", "place"],
    image: "/assets/lemonopoly.jpg",
    href: "https://lemonopoly.org",
  },
  {
    slug: "insidemaps",
    name: "InsideMaps",
    tagline: "3D reconstruction of modern interiors.",
    tags: ["tool", "3d"],
    image: "/assets/insidemaps.jpg",
    href: "https://insidemaps.com",
  },
  {
    slug: "zero-theorem",
    name: "Zero Theorem",
    tagline: "The Zero Theorem movie.",
    tags: ["movie", "tools"],
    image: "/assets/zerotheorem.jpg",
    href: "https://www.imdb.com/title/tt2333804/",
  },
  {
    slug: "luminate",
    name: "Luminate",
    tagline: "Interactive augmented-reality drawing program.",
    tags: ["drawing", "ar"],
    image: "/assets/luminate.jpg",
    href: "https://github.com/makerlab/luminate",
  },
  {
    slug: "lightsuit",
    name: "LightSuit",
    tagline: "Burning Man wearable art.",
    tags: ["play", "hardware"],
    image: "/assets/lightsuit.jpg",
    href: "https://github.com/makerlab/lightsuit",
  },
  {
    slug: "wherecamp",
    name: "WhereCamp",
    tagline: "Know your place.",
    tags: ["place", "social"],
    image: "/assets/wherecamp.jpg",
    href: "https://wherecamp.org",
  },
  {
    slug: "imagewiki",
    name: "ImageWiki",
    tagline: "Visual search tool.",
    tags: ["image", "pechakucha"],
    image: "/assets/imagewiki.jpg",
    href: "https://vimeo.com/2818525",
  },
  {
    slug: "whereis",
    name: "WhereIs",
    tagline: "Disjecta social lifelines.",
    tags: ["place", "social"],
    image: "/assets/whereis.jpg",
    href: "https://www.oregoncontemporary.org/immaterialized",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
