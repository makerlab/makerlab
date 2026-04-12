export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  image: string;
  /** External link to the project. Optional — some projects have no live home. */
  href?: string;
  sponsor?: string;
  sponsorUrl?: string;
  /** Year or year range, e.g. "2008" or "2024–present". */
  year?: string;
  /**
   * Longer lead-in shown on the /projects index — 1–2 sentences of real
   * substance, more editorial than the tagline. Falls back to tagline when
   * absent. Think "first sentence of the museum-placard copy."
   */
  leadIn?: string;
  /** Body paragraphs shown on the project page. Editorial voice — keep it real. */
  description?: string[];
  /** Short credits line, e.g. "With Ben Foote and John Wiseman". */
  credits?: string;
};

export const projects: Project[] = [
  {
    slug: "orbital",
    name: "Orbital",
    tagline:
      "A small, declarative simulation core for agent-based models — written fresh for the web.",
    tags: ["tool", "sim", "agents"],
    image: "/assets/orbital.jpg",
    href: "https://orbital.foundation",
    sponsor: "@anselm",
    sponsorUrl: "https://twitter.com/anselm",
    year: "2024–present",
    leadIn:
      "A TypeScript simulation core for agent-based models — in the older NetLogo/MASON sense, not the LLM one. Several of our recent civic tools run on top of it.",
    description: [
      "Orbital is a small simulation core for the web — a declarative runtime for agent-based models, rewritten fresh in TypeScript. “Agent-based” here means the older scientific-computing sense: entities in a model, each with their own state, updating themselves over time. NetLogo and MASON as ancestors, not LangChain.",
      "We built it because we kept wanting the same thing and not finding it: a lightweight simulation framework that runs in a browser, handles thousands of agents without swallowing a server, and stays small enough to include as a dependency. The academic options were desktop-bound and Java-heavy. The enterprise ones were neither.",
      "`orbital-sys` manages agents and scheduling. `orbital-volume` handles rendering. Two small composable modules, no magic. Several projects sit on top of it — terratwin (bamboo agroforestry for farmers in Asia), bamboo-sim (in-browser growth visualization), and more in flight.",
      "This is the part of makerlab that's been getting most of our attention lately — building the tools underneath the tools.",
    ],
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
    // Original site (human.scale) is gone with no Wayback snapshot.
  },
  {
    slug: "lifecards",
    name: "Lifecards",
    tagline:
      "A declarative web layout engine that treats pages as scenegraphs, not documents.",
    tags: ["tool", "design", "systems"],
    image: "/assets/lifecards.jpg",
    href: "https://github.com/makerlab/lifecards",
    year: "2023",
    leadIn:
      "Our own web layout engine. You write a tree of typed card objects in a JavaScript module; the runtime assembles the page at load time. No build step, no HTML authoring, no framework lock-in.",
    description: [
      "Lifecards is the engine underneath the old makerlab.com, and underneath a handful of other sites we've shipped over the years. It takes a different approach to web layout than most things: you write a tree of typed card objects as a plain JavaScript module, and the runtime assembles the page at load time. No build step, no templating language, no framework lock-in.",
      "The idea was that a page should be a scenegraph — the way a video game composes a scene — not a document. You describe the tree, the engine decides how to paint it. Content and presentation stay cleanly separated.",
      "It's small, opinionated, and a little weird. We kept it going because it works for us. The 2026 overhaul of makerlab.com moved to Next.js for SEO reasons, but Lifecards is still great for sites where SEO isn't the priority.",
    ],
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
    // Original site (starrybot.xyz) is gone — linking to Wayback snapshot.
    href: "https://web.archive.org/web/2025/https://www.starrybot.xyz/",
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
    tagline:
      "Open-source visual search and image-as-interface, from 2008 — years before it was default.",
    tags: ["tool", "vision", "systems"],
    image: "/assets/imagewiki.jpg",
    href: "https://vimeo.com/2818525",
    year: "2008",
    leadIn:
      "A 2008 open-source experiment in visual search and image-as-interface — Ruby/Merb, six authors, BSD-licensed. Makerlab receipts on doing visual search before ML-based image understanding was the default.",
    description: [
      "ImageWiki was a 2008 experiment in visual information sharing — an open-source image-comparison and tagging tool, written in Ruby (Merb, if you remember Merb). The idea was that you could use real images as the primary unit of communication for a wiki: visual matching to find related material, rather than hyperlinks and text.",
      "Six of us built it: Paige Saez, Anselm Hook, Ben Foote, John Wiseman, Marlin Pohlman, Nick Brenner. BSD-licensed, hosted originally at imagewiki.org, and mentioned here mostly for the receipts — makerlab has been working on visual search and image-as-interface since well before ML-based image understanding was the default assumption.",
      "Eventually migrated off SVN into GitHub (our first real Git migration, if anyone's counting). The 2008 code is still in the repo.",
    ],
    credits: "With Ben Foote, John Wiseman, Marlin Pohlman, Nick Brenner",
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
