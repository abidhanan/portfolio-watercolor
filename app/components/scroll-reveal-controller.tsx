"use client";

import { useEffect } from "react";

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
}

// Collect every card-like box/container across all sections + footer.
function collectRevealElements(): HTMLElement[] {
  const set = new Set<HTMLElement>();

  // Always include these structural containers (they have no border/shadow of
  // their own but should animate as a unit).
  document
    .querySelectorAll<HTMLElement>("main section article, .home-photo-stack")
    .forEach((el) => set.add(el));

  // Anything that looks like a box: has a shadow, or is rounded with a border/fill.
  document.querySelectorAll<HTMLElement>("main section *, footer *").forEach((el) => {
    const cs = getComputedStyle(el);
    const hasShadow = cs.boxShadow !== "none";
    const rounded = parseFloat(cs.borderTopLeftRadius) > 0;
    const bordered = parseFloat(cs.borderTopWidth) > 0;
    const hasFill =
      cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
    if (hasShadow || (rounded && (bordered || hasFill))) {
      set.add(el);
    }
  });

  return [...set].filter((el) => {
    // Skip the horizontally-scrolling marquee cards and any open dialog.
    if (el.closest(".certificate-marquee-track, [role='dialog']")) return false;
    // Never touch elements that already carry a transform (rotated hero photos,
    // full-width breakouts) — the reveal would clobber it and break the layout.
    if (getComputedStyle(el).transform !== "none") return false;
    const rect = el.getBoundingClientRect();
    return rect.width >= 48 && rect.height >= 28;
  });
}

export function ScrollRevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const revealElements = collectRevealElements();
    const groupCounters = new Map<Element, number>();

    for (const element of revealElements) {
      const group = element.closest("section") ?? element.closest("footer") ?? element;
      const index = groupCounters.get(group) ?? 0;
      groupCounters.set(group, index + 1);

      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 300)}ms`);

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
