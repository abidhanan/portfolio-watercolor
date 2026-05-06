"use client";

import { useEffect, useState } from "react";

const roles = ["Developer Relations", "Full Stack Developer", "Blockchain Developer"];

export function RotatingRoleBadge() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span
      key={roles[activeIndex]}
      className="inline-block font-bold text-[#102A43] transition-opacity"
      aria-live="polite"
    >
      {roles[activeIndex]}
    </span>
  );
}