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
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const availableHeight = window.innerHeight - headerHeight;
    const centerOffset = Math.max(0, (availableHeight - sectionRect.height) / 2);

    const targetPosition = sectionTop - headerHeight - centerOffset;

    window.scrollTo({
      top: Math.max(0, Math.min(targetPosition, maxScroll)),
      behavior: "smooth",
    });
    window.history.pushState(null, "", href);
  }

  return (
    <header className="paper-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 xl:px-12">
        <Link
          href="/#home"
          onClick={(event) => handleSectionClick(event, "/#home")}
          className="section-readable w-fit text-xl font-extrabold tracking-tight text-[#0F172A]"
        >
          AHAWI <span className="text-[#0284C7]">Portofolio</span>
        </Link>
        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleSectionClick(event, item.href)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0284C7] text-white shadow-md"
                    : "text-[#475569] hover:bg-[#E0F2FE] hover:text-[#0369A1]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
