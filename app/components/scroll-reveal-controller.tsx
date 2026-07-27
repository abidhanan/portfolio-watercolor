"use client";

import { useEffect } from "react";

// Every box/container that should animate on scroll. Tailwind v4 keeps rotate /
// translate in their own CSS properties, so our transform-based reveal never
// clobbers positioned or rotated elements (hero photos, full-width breakouts).
const revealSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section .tool-box",
  "main section .home-photo-card",
  "main section#about .rounded-full",
  "footer .shadow-watercolor",
].join(",");

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
}

export function ScrollRevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    ).filter((element) => {
      // The marquee cards scroll horizontally and any open dialog is separate.
      return !element.closest(".certificate-marquee-track, [role='dialog']");
    });

    const groupCounters = new Map<Element, number>();

    for (const element of revealElements) {
      const group = element.closest("section") ?? element.closest("footer") ?? element;
      const index = groupCounters.get(group) ?? 0;
      groupCounters.set(group, index + 1);

      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 300)}ms`);

      // Pre-reveal what's already on screen so there's no fade-out flicker on load.
      if (isInViewport(element)) {
        element.classList.add("is-revealed");
      }
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          // Toggle both ways so every box re-animates whenever it re-enters the
          // viewport — scrolling down or back up.
          if (entry.isIntersecting) {
            element.classList.add("is-revealed");
          } else {
            element.classList.remove("is-revealed");
          }
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0,
      },
    );

    for (const element of revealElements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      for (const element of revealElements) {
        element.classList.remove("is-revealed");
        delete element.dataset.scrollReveal;
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, []);

  return null;
}
