import { useEffect, useRef, useCallback } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  /** Maximum pixel offset at the start of the animation (default 120) */
  offset?: number;
  /** Lerp factor — lower = more lag behind scroll (0.04–0.2, default 0.06) */
  lag?: number;
}

/**
 * Lazy-scroll reveal with scroll delay: the animated progress lerps toward
 * the true scroll-derived value each frame, so elements feel like they're
 * lagging behind the user's scroll — the classic "scroll delay" effect.
 */
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  offset = 120,
  lag = 0.06,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const displayProgress = useRef(0); // what we're currently showing (lerped)
  const rafId = useRef<number>(0);
  const active = useRef(false);

  const applyStyle = useCallback(
    (eased: number, done: boolean) => {
      const el = ref.current;
      if (!el) return;

      const remaining = (1 - eased) * offset;

      let transform: string;
      switch (animation) {
        case "fade-up":
          transform = `translate3d(0, ${remaining}px, 0)`;
          break;
        case "fade-left":
          transform = `translate3d(${-remaining}px, 0, 0)`;
          break;
        case "fade-right":
          transform = `translate3d(${remaining}px, 0, 0)`;
          break;
        case "scale-up":
          transform = `scale(${0.88 + 0.12 * eased})`;
          break;
        case "fade-in":
        default:
          transform = "none";
          break;
      }

      el.style.opacity = String(eased);
      el.style.transform = transform;
      el.style.willChange = done ? "auto" : "transform, opacity";
    },
    [animation, offset],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.opacity = "0";

    const tick = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;

      // Target progress: 0 at bottom edge → 1 when element is 30% from top
      const target = Math.min(1, Math.max(0, (winH - rect.top) / (winH * 0.7)));

      // Lerp toward target — this creates the scroll delay
      const prev = displayProgress.current;
      const next = prev + (target - prev) * lag;

      // Snap when close enough to avoid infinite loop
      const snapped = Math.abs(target - next) < 0.001 ? target : next;
      displayProgress.current = snapped;

      // easeOutCubic
      const eased = 1 - Math.pow(1 - snapped, 3);
      const done = snapped >= 1;

      applyStyle(eased, done);

      // Keep ticking while there's still movement
      if (!done || Math.abs(target - snapped) > 0.001) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        active.current = false;
      }
    };

    const kickTick = () => {
      if (!active.current) {
        active.current = true;
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => kickTick();

    const timer = setTimeout(() => {
      kickTick();
      window.addEventListener("scroll", onScroll, { passive: true });
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay, lag, applyStyle]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
