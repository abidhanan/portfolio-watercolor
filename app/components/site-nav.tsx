"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Tools", href: "/#tools" },
  { label: "Certificate", href: "/#certificates" },
  { label: "Career", href: "/#career" },
  { label: "Start Up", href: "/#startup" },
  { label: "Activity", href: "/#activity" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const [activeHref, setActiveHref] = useState("/#home");

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      if (window.scrollY < 24) {
        setActiveHref("/#home");
        return;
      }

      const probeLine = window.scrollY + window.innerHeight * 0.42;
      let currentHref = "/#home";

      for (const item of navItems) {
        const section = document.getElementById(item.href.slice(2));
        if (!section) {
          continue;
        }
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= probeLine) {
          currentHref = item.href;
        }
      }
      setActiveHref(currentHref);
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#")) {
      return;
    }
    const section = document.getElementById(href.slice(2));
    if (!section) {
      return;
    }
    event.preventDefault();
    setActiveHref(href);

    if (href === "/#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", href);
      return;
    }

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const targetPosition = sectionTop - headerHeight - 16;

    window.scrollTo({
      top: Math.max(0, Math.min(targetPosition, maxScroll)),
      behavior: "smooth",
    });
    window.history.pushState(null, "", href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCEBF7]/80 bg-[#EAF4FC]/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 xl:px-12">
        <Link
          href="/#home"
          onClick={(event) => handleSectionClick(event, "/#home")}
          className="w-fit text-lg font-bold tracking-normal text-[#102A43]"
        >
          AHAWI<span className="text-[#2B6CB0]"> Portfolio</span>
        </Link>
        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleSectionClick(event, item.href)}
                className={`relative whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[#4299E1] bg-white text-[#102A43] shadow-sm"
                    : "border-transparent text-[#334E68] hover:border-[#BEE3F8] hover:bg-white/70 hover:text-[#102A43]"
                }`}
              >
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full align-middle transition-colors ${
                    isActive ? "bg-[#4299E1]" : "bg-transparent"
                  }`}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
