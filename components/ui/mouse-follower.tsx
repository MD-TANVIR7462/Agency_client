"use client";

import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-50 transition-opacity duration-300"
      aria-hidden="true"
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        style={{
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />
    </div>
  );
};