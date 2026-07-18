"use client";

import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let id = 0;
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: id++, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Expanding ring */}
          <div
            className="absolute rounded-full border border-[#C084FC]/40"
            style={{
              width: 0,
              height: 0,
              left: 0,
              top: 0,
              animation: "ripple-expand 0.8s ease-out forwards",
            }}
          />
          {/* Inner glow */}
          <div
            className="absolute rounded-full bg-[#C084FC]/20"
            style={{
              width: 0,
              height: 0,
              left: 0,
              top: 0,
              animation: "ripple-glow 0.6s ease-out forwards",
            }}
          />
          {/* Center dot */}
          <div
            className="absolute w-1 h-1 rounded-full bg-[#C084FC]"
            style={{
              left: -2,
              top: -2,
              animation: "ripple-dot 0.8s ease-out forwards",
            }}
          />
        </div>
      ))}
    </div>
  );
}
