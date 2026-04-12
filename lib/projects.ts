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
    tagline:
      "A working group and reference collection for people using computational simulation to think about the future of the planet.",
    tags: ["sim", "community", "civic"],
    image: "/assets/simulate_world.jpg",
    href: "https://simulate.world",
    year: "2022–present",
    leadIn:
      "Part meetup, part open reference — a convening for environmentalists, humanists, hackers, and artists who want to build ecosystem models together.",
    description: [
      "Simulate World started from an observation: if we want to take care of the world, we have to be able to model it — and most of the modeling tools live behind university walls. So we made a place for the people doing it outside those walls to find each other.",
      "It's part meetup series, part ongoing reference collection — examples of simulations, tools, writing, and working notes about using computational models to think through environmental questions. “Adventurers, environmentalists, humanists, hackers, and artists” is the rough audience in the site's own words.",
      "Less a tool, more a convening. The simulations themselves — the code underneath — tend to end up in sibling makerlab projects like Orbital, Terratwin, and the bamboo-sim line.",
    ],
  },
  {
    slug: "futureof",
    name: "FutureOf",
    tagline:
      "A small-format conference series about things worth paying attention to before the news cycle catches up.",
    tags: ["social", "community"],
    image: "/assets/futureof.jpg",
    href: "https://future-of.web.app",
    year: "2020–2022",
    leadIn:
      "A DAO-managed conference series. Three editions so far — Micropayments, The Browser, Water — each a single day at human scale.",
    description: [
      "The Future Of is a small-format conference series with a rotating topic. Three editions have run so far: Future of Micropayments (Nov 2020), Future of The Browser (May 2021), and Future of Water (April 2022). Each one a single day, a dozen speakers, and a subject we thought deserved more sustained attention than the news cycle gives it.",
      "We launched it during the pandemic — partly as an excuse to get good people in the same room (often Zoom) for a day, partly to see if a lightweight, topic-rotating conference format could do something the usual one-big-annual-event format couldn't. The tagline on the site says it better than we can: “Exploring the future @ human scale.”",
      "The series is coordinated by a DAO. That started as a pragmatic way to share ownership across the people running it, and we still run it that way because it turned out to work.",
    ],
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
    tagline:
      "An experimental place-based game. A “social area network” for local, ephemeral, transient moments.",
    tags: ["game", "place", "social"],
    image: "/assets/sugar.jpg",
    href: "https://sugarhero.world",
    year: "2020–2023",
    leadIn:
      "A small bet on what social software looks like if it's oriented toward actually being somewhere — together, briefly, in a shared place.",
    description: [
      "Sugar (originally “sugarhero”) is a place-based game and a small bet on what social software might look like if it stopped optimizing for permanent profiles and started caring about temporary ones — about being somewhere, for a while, with people who happen to be there too.",
      "You check in at a place. Other people check in. Something happens in the space between you. The underlying idea we kept calling a “social area network” — local, ephemeral, and built around the things that only make sense in person and only for a little while.",
      "One of the more experimental projects in the archive. It's the kind of thing that would probably work better now than when we built it; the culture has caught up a bit.",
    ],
  },
  {
    slug: "starrybot",
    name: "StarryBot",
    tagline:
      "A Discord bot for token-gated channels in the Cosmos blockchain ecosystem.",
    tags: ["agents", "crypto", "tool"],
    image: "/assets/starrybot.png",
    // Original site (starrybot.xyz) is gone — linking to Wayback snapshot.
    href: "https://web.archive.org/web/2025/https://www.starrybot.xyz/",
    year: "2022",
    leadIn:
      "Hold the right token in the right Cosmos wallet; the bot lets you into the right Discord rooms. A small experiment in using on-chain identity to shape social space.",
    description: [
      "StarryBot was a Discord bot that let communities in the Cosmos blockchain ecosystem gate their channels by token ownership — hold the right NFT or token in your wallet, and the bot granted you access to the right rooms.",
      "It came out of the 2022 NFT-tooling moment as an experiment in using on-chain identity to shape social space. Not the whole “communities as coins” pitch — just the small, specific question: if you already have a verifiable on-chain asset, can it stand in for Discord-role assignment?",
      "The original starrybot.xyz is gone; the link on this page points to a Wayback snapshot that preserves what it looked like at its peak.",
    ],
  },
  {
    slug: "lemonopoly",
    name: "Lemonopoly",
    tagline:
      "A real-world Bay Area game about lemons, neighborhoods, and local food systems. Winner of the Zero1 Arts Grant.",
    tags: ["game", "place", "civic"],
    image: "/assets/lemonopoly.jpg",
    // Original lemonopoly.org is gone (squatted) — link points to the 2013 Wayback snapshot.
    href: "https://web.archive.org/web/20130605015747/http://lemonopoly.org/",
    year: "2012–2013",
    leadIn:
      "Bay Area cities competed for “The Big Lemon” by doing Lemon Challenges — go find a tree, do something lemony, log a Claim. Half game, half community-food-systems intervention.",
    description: [
      "Lemonopoly was a real-world, place-based game about lemons. Players joined a city team, went out into the Bay Area to find a lemon tree or a “Lemon Challenge,” did the challenge (picked some, made something, shared some), photographed it, and logged it back on the site as a Claim. Points rolled up per city. Whichever city had the most Claims by the end of the season became “The Big Lemon.”",
      "Half competitive game, half public-food-systems intervention — a lightweight way to get people out to their neighborhood lemon trees and talking about what a resilient local food economy might actually look like when it starts with something as small as a shared backyard tree.",
      "Winner of the Zero1 Arts Grant. The original lemonopoly.org domain has since been squatted; the link on this page points to a 2013 Wayback snapshot of the real thing.",
    ],
  },
  {
    slug: "weathercards",
    name: "Weather Cards",
    tagline:
      "A study in rich-visual infographics — cities rendered as single dense weather scenes instead of minimalist dashboards.",
    tags: ["design", "data", "infographic"],
    image: "/assets/weathercards.jpg",
    href: "https://makerlab.github.io/weathercards/",
    year: "2022",
    leadIn:
      "Each card is a city's current weather rendered as a whole scene: sky gradient, drifting clouds, sun and moon positions, regional landmarks, seasonal flourishes. A quiet push in the opposite direction from minimalist dashboards.",
    description: [
      "Weather Cards is a small study in the opposite direction from the minimalist-dashboard default. What if a weather display tried to be legible and dense and emotionally specific, all at once? Each card is a city, and each card is a whole visual scene — sky gradient driven by time of day and sun elevation, drifting clouds that scale with wind and coverage, sun and moon positions, starfields on night cards, biome-aware ground, iconic landmark silhouettes, and seasonal flourishes like cherry blossoms in Tokyo or northern lights in Reykjavik.",
      "The underlying bet is one Anselm keeps coming back to: modern interfaces have over-corrected toward minimalism, and the visual cortex is capable of parsing much richer compositions than current design culture gives it credit for. Dense infographics as a medium, not a problem to be cleaned up.",
      "Real-time weather from Open-Meteo, hand-tuned SVG layers, React + Vite under the hood. One of the more modest projects in the archive — more a study than a full tool — but the kind of study that keeps informing later work.",
    ],
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
    tagline:
      "Production tooling for Terry Gilliam's 2013 film — a libcinder video sequencer and a custom iOS player.",
    tags: ["tool", "film"],
    image: "/assets/zerotheorem.jpg",
    href: "https://www.imdb.com/title/tt2333804/",
    year: "2013",
    leadIn:
      "Two small tools for the production of Terry Gilliam's 2013 film: a libcinder-based video sequencer and a custom iOS player that could loop and cross-cut without the black frames normal players insert.",
    description: [
      "Zero Theorem is tooling we built for Terry Gilliam's 2013 film of the same name. It lives on the production side — things the director and editors used, not anything a viewer ever saw.",
      "There were two pieces. A libcinder-based video sequencer (our kind of C++ problem — real-time playback, programmatic cuts, a UI nobody was ever going to ship). And a custom iOS player that could loop and cross-cut between clips without the black frames normal players insert — built specifically for on-set playback on an iPad.",
      "Exactly the kind of work we most enjoy: quiet infrastructure underneath something public, with a real deadline attached.",
    ],
  },
  {
    slug: "luminate",
    name: "Luminate",
    tagline:
      "A 2016 augmented-reality drawing program for iOS — early, spatial, and tube-shaped.",
    tags: ["ar", "drawing", "tool"],
    image: "/assets/luminate.jpg",
    href: "https://github.com/makerlab/luminate",
    year: "2016",
    leadIn:
      "Point your phone at a surface and draw glowing 3D tubes in space. A small early bet on AR as a spatial-sketchbook medium.",
    description: [
      "Luminate was an augmented-reality drawing program for iOS, built in 2016 — early enough that mobile AR was still mostly a research problem. You pointed your phone at a surface, and the app anchored a 3D canvas to that surface so you could walk around it while drawing.",
      "The drawing primitive was a glowing 3D tube — a stroke in space that caught light. It was the most fun thing to draw with and the most fun thing to look at.",
      "A second pass (Luminate 2) moved off our own tracking onto Kudan, and then onto Vuforia as those SDKs matured. A small early bet on AR as a spatial-sketchbook medium.",
    ],
  },
  {
    slug: "lightsuit",
    name: "LightSuit",
    tagline:
      "An LED wearable for Burning Man 2011 — custom hardware, custom firmware, harsh desert.",
    tags: ["hardware", "play", "wearable"],
    image: "/assets/lightsuit.jpg",
    href: "https://github.com/makerlab/lightsuit",
    year: "2011",
    leadIn:
      "A full-body LED suit built for Burning Man 2011. An Arduino-driven controller, addressable LEDs sewn through the fabric, patterns that responded to motion and sound.",
    description: [
      "LightSuit was a full-body LED wearable built for Burning Man 2011. An Arduino-driven controller, a mesh of individually addressable LEDs sewn through the fabric, and patterns that responded to motion and sound.",
      "Mostly an excuse to get back to soldering, partly a study in what it feels like to be a source of light in a very dark desert. The controller firmware and hand-schematics are still in the makerlab GitHub as a reference for anyone else wanting to try it.",
      "Not one of our most durable projects — it's since been surpassed by much better off-the-shelf LED kits — but still our favorite kind of project: hardware, short deadline, harsh operating environment, joy.",
    ],
  },
  {
    slug: "wherecamp",
    name: "WhereCamp",
    tagline:
      "An unconference series at the intersection of geography, technology, design, and culture.",
    tags: ["place", "social", "community"],
    image: "/assets/wherecamp.jpg",
    // Original wherecamp.org has gone dark — link points to a 2014 Wayback snapshot of the active site.
    href: "https://web.archive.org/web/20140106104133/http://wherecamp.org/",
    year: "2008–2014",
    leadIn:
      "An unconference series for geo-enthusiasts, “social place hackers,” artists, activists, and earth scientists — anybody who wanted to know their place.",
    description: [
      "WhereCamp was an unconference series at the intersection of geography, technology, design, and culture. It ran for several years across multiple cities. We helped run it — not as sole organizers, but as part of a rolling set of people who kept showing up to keep it going.",
      "The audience, in the series' own words, was “geo-enthusiasts, developers, social place hackers, artists, activists, grad students, geographers, earth scientists, and anybody else who wants to know their place.” Topics ranged from social cartography and context awareness to humanitarian mapping, food-web transparency, transit, psychogeography, paper maps, and place hacking.",
      "The domain has since gone dark; the link on this page points to a 2014 Wayback snapshot from back when it was active.",
    ],
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
      "A 2008 Ruby/Merb experiment in visual matching and image-as-interface. Shipped as Imawik. Receipts on doing visual search before ML-based image understanding was the default.",
    description: [
      "ImageWiki (shipped as **Imawik**) was a 2008 open-source experiment in visual information sharing. The idea: real images as the primary unit of communication for a wiki — visual matching standing in for hyperlinks and text. Ruby/Merb, BSD-licensed, a small team collaboration, hosted originally at imagewiki.org.",
      "Two decades old now, and mentioned here mostly for the receipts: makerlab has been working on visual search and image-as-interface since well before ML-based image understanding was the default assumption. The linked Vimeo is the original Imawik commercial.",
    ],
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
