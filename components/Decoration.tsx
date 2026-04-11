import type { CSSProperties } from "react";

type CrystalVariant = "point" | "kite" | "cluster";

export function Crystal({
  variant = "point",
  className = "",
  style,
}: {
  variant?: CrystalVariant;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={style}
    >
      {variant === "point" && (
        <g>
          {/* tall single quartz point */}
          <path d="M50 6 L86 34 L76 128 L24 128 L14 34 Z" />
          <path d="M50 6 L50 128" opacity="0.5" />
          <path d="M14 34 L50 46 L86 34" opacity="0.5" />
          <path d="M24 128 L50 46" opacity="0.4" />
          <path d="M76 128 L50 46" opacity="0.4" />
          {/* inner glint */}
          <path d="M42 24 L46 36" strokeWidth={1.5} opacity="0.8" />
        </g>
      )}
      {variant === "kite" && (
        <g>
          {/* kite / diamond */}
          <path d="M50 8 L90 60 L50 132 L10 60 Z" />
          <path d="M50 8 L50 132" opacity="0.5" />
          <path d="M10 60 L90 60" opacity="0.5" />
          <path d="M50 8 L10 60 L50 132" opacity="0.35" />
          <path d="M34 20 L40 32" strokeWidth={1.5} opacity="0.8" />
        </g>
      )}
      {variant === "cluster" && (
        <g>
          {/* three-point cluster rising from a base */}
          <path d="M8 110 L92 110 L78 132 L22 132 Z" />
          <path d="M22 110 L32 44 L42 110" />
          <path d="M42 110 L55 20 L68 110" />
          <path d="M58 110 L74 56 L88 110" />
          <path d="M32 44 L36 60 L40 44" opacity="0.5" strokeWidth={1.5} />
          <path d="M55 20 L60 40 L66 20" opacity="0.5" strokeWidth={1.5} />
        </g>
      )}
    </svg>
  );
}

export function Sparkle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={style}
    >
      <path
        d="M12 2 C 12 8, 14 10, 22 12 C 14 14, 12 16, 12 22 C 12 16, 10 14, 2 12 C 10 10, 12 8, 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * FooterWordmark — oversized full "makerlab" wordmark, a brand-heritage
 * callback to the original 2006 Makerlab logo. Italic Fraunces display
 * with the original horizontal orange→green→blue gradient. Decorative;
 * aria-hidden.
 */
export function FooterWordmark() {
  return (
    <div className="relative mt-20 select-none">
      {/* Year range marginalia, magazine-colophon style */}
      <div
        aria-hidden
        className="mx-auto max-w-[1400px] px-6 sm:px-10 flex items-end justify-between gap-6 mb-5 text-[10px] uppercase tracking-[0.22em] text-[var(--ink)]/55"
      >
        <span>mmvi — mmxxvi</span>
        <span>2006 — 2026</span>
      </div>

      {/* Two-line lockup: giant "maker" on top (cropping past the viewport)
          with "lab" folded underneath. Both rendered as italic Fraunces
          wonk with the same horizontal gradient so they read as one word
          split across two lines. */}
      <div className="relative overflow-hidden w-full" aria-hidden>
        <div
          className="block font-display font-normal text-center whitespace-nowrap"
          style={{
            fontStyle: "italic",
            letterSpacing: "-0.05em",
            fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
          }}
        >
          {/* Line 1 — "maker" bleeds off the viewport edges */}
          <div
            style={{
              fontSize: "clamp(10rem, 48vw, 72rem)",
              lineHeight: 0.78,
              background:
                "linear-gradient(90deg, #ff6a1a 0%, #ffa52b 14%, #d4c32a 28%, #8fc520 44%, #3cbf1a 62%, #14c9a0 82%, #10b8c9 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "-0.16em",
            }}
          >
            maker
          </div>
          {/* Line 2 — "lab" folds under, slightly offset right */}
          <div
            style={{
              fontSize: "clamp(6rem, 30vw, 44rem)",
              lineHeight: 0.78,
              marginTop: "-0.05em",
              marginLeft: "18%",
              background:
                "linear-gradient(90deg, #3cbf1a 0%, #14c9a0 34%, #10b8c9 66%, #00a5e0 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              paddingBottom: "0.08em",
            }}
          >
            lab
          </div>
        </div>
      </div>

      {/* Cute lil tagline */}
      <p className="relative mx-auto max-w-[1400px] px-6 sm:px-10 mt-7 pb-10 text-center">
        <span className="font-display italic text-lg sm:text-xl text-[var(--ink)]/75">
          20 years going strong
        </span>
        <span aria-hidden className="text-[var(--accent)] ml-2">
          ✦
        </span>
      </p>
    </div>
  );
}
