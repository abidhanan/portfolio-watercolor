"use client";

import { useEffect } from "react";

// Every box/container that should animate on scroll. A static selector list is
// used (rather than a getComputedStyle scan) so setup is cheap and does not
// force layout/reflow. Inner tiles inherit the animation from their card.
const revealSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section .tool-box",
  "main section .home-photo-card",
  "main section .rope-knot",
  "main section .rope-line-x",
  "main section .rope-line-vertical",
  "main section#about .rounded-full",
  "footer a[href]",
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
    ).filter((element) => !element.closest(".certificate-marquee-track, [role='dialog']"));

    // Read phase (all layout reads together) then write phase — avoids thrash.
    const inView = revealElements.map(isInViewport);
    const groupCounters = new Map<Element, number>();

    revealElements.forEach((element, i) => {
      const group = element.closest("section") ?? element.closest("footer") ?? element;
      const index = groupCounters.get(group) ?? 0;
      groupCounters.set(group, index + 1);

      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 320)}ms`);
      if (inView[i]) {
        element.classList.add("is-revealed");
      }
    });

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
        rootMargin: "0px 0px -10% 0px",
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
