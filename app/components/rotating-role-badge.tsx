"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export function RotatingRoleBadge() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const roles = content.home.roles;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [roles.length]);

  const activeRole = roles[activeIndex % roles.length];

  return (
    <span
      key={activeRole}
      className="inline-block font-bold text-[#102A43] transition-opacity"
      aria-live="polite"
    >
      {activeRole}
    </span>
  );
}
