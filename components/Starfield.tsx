// Starfield — a decorative layer of softly-pulsing stars that live
// BEHIND the page content and scroll WITH it (so you move past them
// like viewing a night sky, rather than having them pinned to the
// viewport).
//
// Rendered server-side with deterministic positions so SSR matches the
// client exactly (no hydration flicker). Pointer-events disabled,
// aria-hidden, won't interfere with clicks or screen readers.
//
// Three size classes (small/mid/big) give visual depth without
// animated parallax — the scroll motion itself is enough to sell it.
//
// Colors are pulled from the original 2006 Makerlab brand gradient so
// the sky reads as "makerlab confetti" rather than generic twinkles.

type Star = {
  top: number;      // %
  left: number;     // %
  size: number;     // px
  delay: number;    // s
  duration: number; // s
  opacity: number;
  color: string;
};

// mulberry32 — tiny seeded PRNG. Same seed = same sequence, so the
// star array is identical on every render (SSR and client agree).
function makeRand(seed: number): () => number {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Palette sampled from the 2006 rainbow gradient
const PALETTE = [
  "#ff6a1a", // orange
  "#ffa52b", // amber
  "#d4c32a", // olive
  "#8fc520", // chartreuse
  "#3cbf1a", // kelly
  "#14c9a0", // teal
  "#10b8c9", // cyan
  "#00a5e0", // sky blue
];

type SizeClass = {
  count: number;
  sizeMin: number;
  sizeMax: number;
  opacityMin: number;
  opacityMax: number;
};

// Three size classes. Total ≈ 280 stars — enough to stay populated
// when spread across a tall scrollable page. Small/dim/numerous in
// back; larger/brighter/fewer in front.
const SIZE_CLASSES: SizeClass[] = [
  { count: 140, sizeMin: 4,  sizeMax: 9,  opacityMin: 0.35, opacityMax: 0.7  }, // far
  { count: 100, sizeMin: 8,  sizeMax: 14, opacityMin: 0.5,  opacityMax: 0.85 }, // mid
  { count: 40,  sizeMin: 12, sizeMax: 20, opacityMin: 0.6,  opacityMax: 0.95 }, // near
];

function generateStars(): Star[] {
  const rand = makeRand(20260411);
  const stars: Star[] = [];
  for (const cls of SIZE_CLASSES) {
    for (let i = 0; i < cls.count; i++) {
      stars.push({
        top: rand() * 100,                                         // % of full page height
        left: rand() * 100,                                        // % of viewport width
        size: cls.sizeMin + rand() * (cls.sizeMax - cls.sizeMin),
        // Faster individual pulse — 1.2–3s — so each star visibly
        // twinkles rather than slowly breathing.
        delay: rand() * 3,
        duration: 1.2 + rand() * 1.8,
        opacity:
          cls.opacityMin + rand() * (cls.opacityMax - cls.opacityMin),
        color: PALETTE[Math.floor(rand() * PALETTE.length)],
      });
    }
  }
  return stars;
}

// Generated once at module load. Same array every render.
const STARS = generateStars();

export function Starfield() {
  return (
    <div
      aria-hidden
      className="starfield pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {STARS.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="starfield-star absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            color: s.color,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <path
            d="M12 2 C 12 8, 14 10, 22 12 C 14 14, 12 16, 12 22 C 12 16, 10 14, 2 12 C 10 10, 12 8, 12 2 Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
