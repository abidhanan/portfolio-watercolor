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
  { label: "Startup", href: "/#startup" },
  { label: "Activity", href: "/#activity" },
  { label: "Contact", href: "/#contact" },
];

function getHrefFromHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return null;
  }

  return navItems.find((item) => item.href === `/${window.location.hash}`)?.href ?? null;
}

export function SiteNav() {
  const [activeHref, setActiveHref] = useState("/#home");

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const hashHref = getHrefFromHash();

      if (hashHref === "/#contact") {
        setActiveHref("/#contact");
        return;
      }

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const isAtPageEnd = maxScroll > 0 && window.scrollY >= maxScroll - 8;
      const contactSection = document.getElementById("contact");
      const contactRect = contactSection?.getBoundingClientRect();
      const contactIsVisible =
        Boolean(contactRect) &&
        contactRect!.top <= window.innerHeight - 12 &&
        contactRect!.bottom >= 12;

      if (isAtPageEnd || (window.location.hash === "#contact" && contactIsVisible)) {
        setActiveHref("/#contact");
        return;
      }

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

    const syncHashActive = () => {
      const hashHref = getHrefFromHash();
      if (hashHref) {
        setActiveHref(hashHref);
      }
      requestUpdate();
    };

    syncHashActive();
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", syncHashActive);
    window.addEventListener("popstate", syncHashActive);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", syncHashActive);
      window.removeEventListener("popstate", syncHashActive);
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

    if (href === "/#contact") {
      window.history.pushState(null, "", href);
      window.scrollTo({ top: maxScroll, behavior: "smooth" });
      return;
    }

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
                data-nav-target={item.href.slice(2)}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => handleSectionClick(event, item.href)}
                className={`site-nav-link relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "site-nav-link-active bg-[#0284C7] text-white shadow-md"
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
