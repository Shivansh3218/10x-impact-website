import { useEffect, useRef } from "react";

// A soft sky-blue glow that smoothly trails the cursor across the whole page.
// Pure rAF lerp (no deps). Disabled on touch devices and for reduced-motion.
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const glow = glowRef.current;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;   // target
    let gx = tx, gy = ty;                                          // glow (slow)
    let raf = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      glow.style.opacity = "1";
    };
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      show();
    };
    const onLeave = () => {
      visible = false;
      glow.style.opacity = "0";
    };
    const onDown = () => { glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%) scale(0.82)`; };
    const onUp = () => { glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%) scale(1)`; };

    // Enlarge the glow over interactive elements
    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [role='button'], input, textarea, select, label");
      glow.dataset.hot = interactive ? "1" : "0";
    };

    const tick = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      const hot = glow.dataset.hot === "1";
      const s = hot ? 1.5 : 1;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%) scale(${s})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 340,
          height: 340,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(23,159,212,0.20), rgba(23,159,212,0.07) 42%, transparent 68%)",
          filter: "blur(12px)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          transition: "opacity 0.35s ease",
          willChange: "transform, opacity",
        }}
      />
    </>
  );
}
