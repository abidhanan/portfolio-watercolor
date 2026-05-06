"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);

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
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 md:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            onClick={(event) => handleSectionClick(event, "/#home")}
            className="section-readable w-fit text-lg font-extrabold tracking-tight text-[#0F172A] sm:text-xl"
          >
            AHAWI <span className="text-[#0284C7]">Portofolio</span>
          </Link>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            className="flex items-center justify-center rounded-lg p-2 text-[#0F172A] transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-2">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav-target={item.href.slice(2)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => handleSectionClick(event, item.href)}
                  className={`site-nav-link relative whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
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
        </div>

        {/* Navigasi Mobile (Tampil saat Hamburger di-klik) */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 border-t border-[#DCEBF7] pt-4 md:hidden">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav-target={item.href.slice(2)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => handleSectionClick(event, item.href)}
                  className={`site-nav-link relative block w-full rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
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
        )}
      </nav>
    </header>
  );
}