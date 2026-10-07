"use client";

import { useEffect } from "react";

// Containers animate as a unit (box + its logo/rope carried along). Their
// content then animates a beat later (see innerSelectors), so every part of a
// section reveals on scroll — not just the boxes.
const containerSelectors = [
  "main section .shadow-watercolor",
  "main section article",
  "main section .tool-box",
  "main section .home-photo-card",
  "main section .hero-plaque",
  "main section .rope-knot",
  "main section .rope-line-x",
  "main section .rope-line-vertical",
  "main section .certificate-marquee-viewport",
  "main section#about .rounded-full",
  // Footer (desktop only — the controller doesn't run on mobile). The footer is
  // clipped (overflow-hidden) so the reveal's translateY can't extend the page.
  "footer .grid > div",
  "footer > div > p",
].join(",");

// Text, badges and logos inside a box. They get a smaller offset and a stagger
// so the box settles first and its content follows.
const innerSelectors = [
  "main section#home h1",
  "main section#home p",
  "main section :is(.shadow-watercolor, article) :is(h2, h3, p)",
  "main section :is(.shadow-watercolor, article) :is(span.rounded-full, [role='img'], .reveal-inner)",
].join(",");

const skipSelector =
  ".certificate-marquee-track, [role='dialog'], .tool-box *, .tool-box [role='img']";

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
}

export function ScrollRevealController() {
  useEffect(() => {
    // No scroll-reveal animations on mobile — content just shows normally.
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observed = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          // Toggle both ways so every element re-animates whenever it re-enters
          // the viewport — scrolling down or back up.
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

    // Idempotent: only picks up elements that aren't tracked yet. React remounts
    // keyed items when the language switches (and right after hydration, when the
    // stored language replaces the server's), so this runs again on DOM changes.
    const scan = () => {
      for (const element of observed) {
        if (!element.isConnected) {
          observer.unobserve(element);
          observed.delete(element);
        }
      }

      const pick = (selectors: string) =>
        Array.from(document.querySelectorAll<HTMLElement>(selectors)).filter(
          (element) =>
            element.dataset.scrollReveal === undefined && !element.closest(skipSelector),
        );
      const containers = pick(containerSelectors);
      const inners = pick(innerSelectors).filter((element) => !containers.includes(element));
      const fresh = [...containers, ...inners];
      if (fresh.length === 0) {
        return;
      }

      // Read phase (all layout reads together) then write phase — avoids thrash.
      const inView = fresh.map(isInViewport);
      const groupCounters = new Map<Element, number>();

      fresh.forEach((element, i) => {
        const isInner = inners.includes(element);
        const group = isInner
          ? (element.closest(".shadow-watercolor, article, section") ?? element)
          : (element.closest("section") ?? element.closest("footer") ?? element);
        const index = groupCounters.get(group) ?? 0;
        groupCounters.set(group, index + 1);

        // Footer fades in (opacity only) — a translateY on the very last element
        // extends the page and its IO can't fire at the bottom edge.
        element.dataset.scrollReveal = element.closest("footer") ? "fade" : isInner ? "inner" : "";
        element.style.setProperty(
          "--reveal-delay",
          isInner ? `${Math.min(120 + index * 60, 420)}ms` : `${Math.min(index * 25, 100)}ms`,
        );
        if (inView[i]) {
          element.classList.add("is-revealed");
        }
        observed.add(element);
        observer.observe(element);
      });
    };

    scan();
    document.documentElement.classList.add("reveal-ready");

    // Runs as a microtask, before the browser paints, so remounted items never
    // flash in un-animated.
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.querySelector("main") ?? document.body, {
      childList: true,
      subtree: true,
    });
    const footer = document.querySelector("footer");
    if (footer) {
      mutationObserver.observe(footer, { childList: true, subtree: true });
    }

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      for (const element of document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")) {
        element.classList.remove("is-revealed");
        delete element.dataset.scrollReveal;
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, []);

  return null;
}
