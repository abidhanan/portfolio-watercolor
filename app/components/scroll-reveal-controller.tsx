"use client";

import { useEffect } from "react";

const revealSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section [class*='rounded-lg'][class*='border']",
  "main section [class*='rounded-xl'][class*='border']",
  "main section [class*='rounded-2xl'][class*='border']",
  "main section [class*='rounded-full'][class*='border']",
].join(",");

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
}

export function ScrollRevealController() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    ).filter((element) => {
      return !element.closest(".certificate-marquee-track, [role='dialog'], .home-photo-stack");
    });

    const sectionCounters = new Map<Element, number>();
    let scrollDirection: "down" | "up" = "down";
    let previousScrollY = window.scrollY;

    for (const element of revealElements) {
      const section = element.closest("section");
      const sectionIndex = sectionCounters.get(section ?? element) ?? 0;
      sectionCounters.set(section ?? element, sectionIndex + 1);

      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(sectionIndex * 45, 220)}ms`);

      if (isInViewport(element)) {
        element.classList.add("is-revealed");
      }
    }

    document.documentElement.classList.add("reveal-ready");

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY >= previousScrollY ? "down" : "up";
      previousScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.dataset.revealDirection = scrollDirection;
            element.classList.add("is-revealed");
          } else {
            element.classList.remove("is-revealed");
          }
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    for (const element of revealElements) {
      observer.observe(element);
    }

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollDirection);
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
