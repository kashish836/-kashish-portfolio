"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<Array<{ x: number; y: number; life: number; vx: number; vy: number }>>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const dx = e.movementX || 0;
      const dy = e.movementY || 0;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const count = Math.min(Math.floor(speed / 3), 4);

      for (let i = 0; i < count; i++) {
        trailRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          life: 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      if (trailRef.current.length > 40) trailRef.current.splice(0, trailRef.current.length - 40);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, [role='button']")) setHovering(true);
    };
    const out = () => setHovering(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  // Canvas trail
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const trail = trailRef.current;
      for (let i = 0; i < trail.length; i++) {
        trail[i].life -= 0.025;
        trail[i].x += trail[i].vx;
        trail[i].y += trail[i].vy;
        if (trail[i].life <= 0) {
          trail.splice(i, 1);
          i--;
          continue;
        }
        const a = trail[i].life * 0.5;
        const s = trail[i].life * 2;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  if (!visible) return null;

  const ringR = hovering ? 22 : 16;
  const dotR = hovering ? 4 : 3;
  const scale = clicking ? 0.8 : 1;

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-[9997] pointer-events-none" />

      {/* Scanning line (vertical) */}
      <div
        className="fixed z-[9998] pointer-events-none bg-[#C084FC]/20"
        style={{
          left: pos.x,
          top: pos.y - ringR - 30,
          width: 1,
          height: 30,
          opacity: hovering ? 0.6 : 0.2,
          transition: "opacity 0.2s",
        }}
      />

      {/* Scanning line (horizontal) */}
      <div
        className="fixed z-[9998] pointer-events-none bg-[#C084FC]/20"
        style={{
          left: pos.x - ringR - 30,
          top: pos.y,
          width: 30,
          height: 1,
          opacity: hovering ? 0.6 : 0.2,
          transition: "opacity 0.2s",
        }}
      />

      {/* Corner brackets */}
      {[0, 1, 2, 3].map((i) => {
        const corners = [
          { top: pos.y - ringR, left: pos.x - ringR, borderTop: true, borderLeft: true },
          { top: pos.y - ringR, left: pos.x + ringR - 8, borderTop: true, borderRight: true },
          { top: pos.y + ringR - 8, left: pos.x - ringR, borderBottom: true, borderLeft: true },
          { top: pos.y + ringR - 8, left: pos.x + ringR - 8, borderBottom: true, borderRight: true },
        ];
        const c = corners[i];
        return (
          <div
            key={i}
            className="fixed z-[9998] pointer-events-none"
            style={{
              top: c.top,
              left: c.left,
              width: 8,
              height: 8,
              borderTop: c.borderTop ? "1px solid rgba(192, 132, 252, 0.6)" : "none",
              borderBottom: c.borderBottom ? "1px solid rgba(192, 132, 252, 0.6)" : "none",
              borderLeft: c.borderLeft ? "1px solid rgba(192, 132, 252, 0.6)" : "none",
              borderRight: c.borderRight ? "1px solid rgba(192, 132, 252, 0.6)" : "none",
              transform: `scale(${scale})`,
              transition: "transform 0.15s ease-out",
            }}
          />
        );
      })}

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          width: ringR * 2,
          height: ringR * 2,
          border: "1px solid rgba(192, 132, 252, 0.15)",
          transform: `translate(${pos.x - ringR}px, ${pos.y - ringR}px) scale(${scale})`,
          transition: "width 0.2s, height 0.2s, transform 0.15s ease-out, border-color 0.2s",
          boxShadow: hovering ? "0 0 20px rgba(192, 132, 252, 0.1)" : "none",
        }}
      />

      {/* Center dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-[#C084FC]"
        style={{
          width: dotR * 2,
          height: dotR * 2,
          transform: `translate(${pos.x - dotR}px, ${pos.y - dotR}px) scale(${scale})`,
          boxShadow: "0 0 10px rgba(192, 132, 252, 0.8)",
          transition: "width 0.15s, height 0.15s, transform 0.1s",
        }}
      />
    </>
  );
}
