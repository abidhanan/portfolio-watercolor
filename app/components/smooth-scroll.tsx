"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "../lib/smooth-scroll";

export function SmoothScroll() {
  useEffect(() => {
    // Respect users who ask for reduced motion — keep native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.09, // eased, slightly "held" feel
      smoothWheel: true,
      syncTouch: true, // apply the same eased feel to touch (mobile)
      syncTouchLerp: 0.08,
      anchors: true, // smooth in-page anchor navigation
    });
    setLenis(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
