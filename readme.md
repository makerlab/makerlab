# makerlab.com

The website for [makerlab.com](https://makerlab.com) — a design/build collective portfolio site.

Built April 2023 and still live as of 2026.

## Design thesis

The entire site is a demonstration of the lifecards approach:

- **No SSR.** The client renders everything. There is no server-side templating, no build step, no static site generator. The page arrives as a near-empty shell and the engine assembles it at runtime.
- **No raw HTML authoring.** The site content is never written as markup. Instead, the layout is treated as a **scenegraph** — a tree of typed objects (logo, nav, routable, area, card, footer) that the engine traverses and renders, closer to how a video game composes a scene than how a web page is traditionally authored.
- **Declarative data grammar.** `.lifecards.js` is a pure data description — kinds, children, content, links, tags — fully separated from layout and presentation. It resembles HTML in spirit (a tree of nodes with attributes) but strips away the coupling to visual concerns. The engine decides how to paint it.

## Architecture

- **Static site** powered by [lifecards](https://github.com/makerlab/lifecards), a data-driven layout engine pulled in as a git submodule at `lifecards.org/`
- **Site data** lives in `.lifecards.js` — a JS module exporting an array of card objects (logo, nav, projects, about, contact, footer)
- **Project images** are local in `assets/` (earlier versions used the Unsplash API but hit rate limits)
- `index.html` is minimal — it loads the lifecards CSS/JS, instantiates a DB (reads `.lifecards.js`), and a DOM renderer

## Hosting

- **Hosted on Cloudflare Pages**, connected to the GitHub repo `makerlab/makerlab` on the `main` branch
- Cloudflare Pages serves the repo as a static site directly — no build step, no `wrangler.toml`, no config files in the repo
- The domain `makerlab.com` DNS is managed through Cloudflare and pointed at the Pages deployment

## Local development

```sh
git submodule update --remote
./run.sh
```

`run.sh` starts a local Deno server (`deno run --allow-env --allow-net --allow-read ./lifecards.org/utils/server.ts`).

## Repo structure

```
index.html              # entry point
.lifecards.js           # site content/data (projects, about, contact, etc.)
run.sh                  # local dev server (Deno)
.gitmodules             # lifecards submodule reference
assets/                 # project images
lifecards.org/          # git submodule — the lifecards engine
projects/               # (unused placeholder)
```

