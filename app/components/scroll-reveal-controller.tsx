"use client";

import { useEffect } from "react";

const revealSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section .tool-box",
].join(",");

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
}

export function ScrollRevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    ).filter((element) => {
      return !element.closest(".certificate-marquee-track, [role='dialog'], .home-photo-stack");
    });

    const sectionCounters = new Map<Element, number>();

    for (const element of revealElements) {
      const section = element.closest("section");
      const sectionIndex = sectionCounters.get(section ?? element) ?? 0;
      sectionCounters.set(section ?? element, sectionIndex + 1);

      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(sectionIndex * 35, 140)}ms`);

      if (isInViewport(element)) {
        element.classList.add("is-revealed");
      }
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add("is-revealed");
            observer.unobserve(element);
          }
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    for (const element of revealElements) {
      if (!element.classList.contains("is-revealed")) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      for (const element of revealElements) {
        element.classList.remove("is-revealed");
        delete element.dataset.scrollReveal;
        delete element.dataset.revealDirection;
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, []);

  return null;
}
