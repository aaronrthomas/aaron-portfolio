import { useEffect, useRef, useState } from "react";

/**
 * Custom dot + ring cursor that follows the pointer with spring-lag.
 * Ring expands on hovering interactive elements (a, button, input, [role="button"]).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // hide on touch-only devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, input, textarea, select, [role='button'], label, .cursor-hover")
      ) {
        setHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, input, textarea, select, [role='button'], label, .cursor-hover")
      ) {
        setHovering(false);
      }
    };

    const handleLeave = () => {
      setVisible(false);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);

    // animation loop – dot is instant, ring lags behind
    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // dot follows cursor exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      // ring lerps behind
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "8px" : "6px",
          height: hovering ? "8px" : "6px",
          borderRadius: "50%",
          background: "var(--periwinkle)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.25s, height 0.25s, background 0.25s",
          mixBlendMode: "difference",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "52px" : "32px",
          height: hovering ? "52px" : "32px",
          borderRadius: "50%",
          border: `1.5px solid var(--periwinkle)`,
          background: hovering ? "rgba(120, 100, 255, 0.08)" : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
