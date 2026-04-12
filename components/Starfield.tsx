// Starfield — a fixed, decorative layer of softly-pulsing stars behind
// all content. Rendered server-side with deterministic positions so
// SSR matches the client exactly (no hydration flicker). Pointer-events
// disabled, aria-hidden, won't interfere with clicks or screen readers.
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

function generateStars(count: number, seed: number): Star[] {
  const rand = makeRand(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: rand() * 100,
      left: rand() * 100,
      size: 3 + rand() * 9,            // 3–12px
      delay: rand() * 6,               // 0–6s
      duration: 2.6 + rand() * 3.8,    // 2.6–6.4s
      opacity: 0.3 + rand() * 0.55,    // 0.30–0.85
      color: PALETTE[Math.floor(rand() * PALETTE.length)],
    });
  }
  return stars;
}

// Generated once at module load. Same array every render.
const STARS = generateStars(90, 20260411);

export function Starfield() {
  return (
    <div
      aria-hidden
      className="starfield pointer-events-none fixed inset-0 z-[1] overflow-hidden"
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
