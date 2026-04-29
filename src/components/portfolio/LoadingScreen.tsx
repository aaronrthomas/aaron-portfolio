import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 5000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setVisible(false), 800);
        }, 400);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (!visible) return null;

  const fillPercent = progress * 100;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 70%, #000 100%)",
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `oklch(0.58 0.22 280 / ${0.15 + Math.random() * 0.3})`,
              animation: `loader-float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glow behind the A */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "300px",
          height: "300px",
          background: `oklch(0.58 0.22 280 / ${0.08 + progress * 0.15})`,
          transition: "background 0.3s",
        }}
      />

      {/* A.svg with liquid fill using CSS mask */}
      <div className="relative w-40 h-36 sm:w-56 sm:h-48">
        {/* Ghost outline (dim version always visible) */}
        <img
          src="./A.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            opacity: 0.15,
            filter: "brightness(0) invert(1)",
          }}
        />

        {/* Liquid-filled version using the A.svg as a mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "url('./A.svg')",
            WebkitMaskImage: "url('./A.svg')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          {/* Liquid fill - rises from bottom */}
          <div
            className="absolute inset-x-0 bottom-0 transition-all duration-100"
            style={{
              height: `${fillPercent}%`,
              background: "linear-gradient(to top, oklch(0.45 0.2 280), oklch(0.58 0.22 280), oklch(0.7 0.2 290))",
            }}
          />

          {/* Animated wave SVG on top of liquid */}
          <div
            className="absolute inset-x-0"
            style={{
              bottom: `${fillPercent}%`,
              transform: "translateY(50%)",
              height: "20px",
              overflow: "visible",
            }}
          >
            <svg
              viewBox="0 0 400 20"
              preserveAspectRatio="none"
              className="w-[200%] h-full"
              style={{ animation: "loader-wave 2.5s linear infinite" }}
            >
              <path
                d="M0 10 Q25 2, 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 L400 20 L0 20 Z"
                fill="oklch(0.65 0.25 280 / 0.5)"
              />
            </svg>
          </div>

          {/* Second wave */}
          <div
            className="absolute inset-x-0"
            style={{
              bottom: `${fillPercent}%`,
              transform: "translateY(50%)",
              height: "16px",
              overflow: "visible",
            }}
          >
            <svg
              viewBox="0 0 400 16"
              preserveAspectRatio="none"
              className="w-[200%] h-full"
              style={{ animation: "loader-wave 3.2s linear infinite reverse" }}
            >
              <path
                d="M0 8 Q30 0, 60 8 T120 8 T180 8 T240 8 T300 8 T360 8 T400 8 L400 16 L0 16 Z"
                fill="oklch(0.55 0.25 280 / 0.3)"
              />
            </svg>
          </div>

          {/* Shimmer */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, transparent 30%, oklch(1 0 0 / 0.06) 50%, transparent 70%)",
              animation: "loader-shimmer 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative mt-10 flex flex-col items-center gap-4">
        {/* Brand name */}
        <span
          className="font-display uppercase tracking-[0.35em] font-bold"
          style={{
            fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
            color: "oklch(0.58 0.22 280 / 0.8)",
            opacity: progress > 0.15 ? 1 : 0,
            transition: "opacity 0.6s",
          }}
        >
          Aaron R Thomas
        </span>

        {/* Progress bar */}
        <div className="w-40 h-[2px] rounded-full overflow-hidden bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${fillPercent}%`,
              background: "linear-gradient(90deg, oklch(0.58 0.22 280), oklch(0.7 0.2 290))",
            }}
          />
        </div>

        {/* Percentage */}
        <span
          className="font-display text-xs uppercase tracking-[0.4em]"
          style={{ color: "oklch(0.58 0.22 280 / 0.5)" }}
        >
          {Math.round(fillPercent)}%
        </span>
      </div>

      <style>{`
        @keyframes loader-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.7; }
        }
        @keyframes loader-wave {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes loader-shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
