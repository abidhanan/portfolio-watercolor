"use client";

import { useEffect } from "react";

// Animate at the container level so each box carries its own text + logo along
// (reliable). Deeply nesting a reveal on every inner element made child reveals
// fire unreliably on mobile — some never animated — so we avoid that here.
const revealSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section .tool-box",
  "main section .home-photo-card",
  "main section .rope-knot",
  "main section .rope-line-x",
  "main section .rope-line-vertical",
  "main section#about .rounded-full",
  // Standalone hero content (not inside a card)
  "main section#home .inline-flex",
  "main section#home h1",
  "main section#home p",
  // Footer (desktop only — the controller doesn't run on mobile). The footer is
  // clipped (overflow-hidden) so the reveal's translateY can't extend the page.
  "footer .grid > div",
  "footer > div > p",
].join(",");

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
}

export function ScrollRevealController() {
  useEffect(() => {
    // No scroll-reveal animations on mobile — content just shows normally.
    if (window.matchMedia("(max-width: 767px)").matches) {
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

      // Footer fades in (opacity only) — a translateY on the very last element
      // extends the page and its IO can't fire at the bottom edge.
      element.dataset.scrollReveal = element.closest("footer") ? "fade" : "";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 25, 100)}ms`);
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
        // No bottom exclusion, so the last elements (footer) can still reveal.
        rootMargin: "0px 0px 0px 0px",
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
