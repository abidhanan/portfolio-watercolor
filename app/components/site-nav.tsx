"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./language-provider";
import { languageOptions, navSections, type Language } from "../lib/i18n";

function getHrefFromHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return null;
  }
  return navSections.find((item) => item.href === `/${window.location.hash}`)?.href ?? null;
}

function getActiveHrefFromPage() {
  if (typeof window === "undefined") {
    return "/#home";
  }

  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const isAtPageEnd = maxScroll > 0 && window.scrollY >= maxScroll - 8;

  const contactSection = document.getElementById("contact");
  const contactRect = contactSection?.getBoundingClientRect();
  const contactIsVisible =
    Boolean(contactRect) &&
    contactRect!.top <= window.innerHeight - 12 &&
    contactRect!.bottom >= 12;

  if (isAtPageEnd || contactIsVisible) {
    return "/#contact";
  }

  if (window.scrollY < 24) {
    return "/#home";
  }

  const probeLine = window.scrollY + window.innerHeight * 0.42;
  let currentHref = "/#home";

  for (const item of navSections) {
    const section = document.getElementById(item.href.slice(2));
    if (!section) {
      continue;
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    if (sectionTop <= probeLine) {
      currentHref = item.href;
    }
  }

  return currentHref;
}

function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-[#DCEBF7] bg-white/90 p-1 shadow-sm ${className}`}
      role="group"
      aria-label={content.languageToggle.label}
    >
      {languageOptions.map((option) => {
        const isActive = language === option.code;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code as Language)}
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] transition-all sm:px-3 sm:text-xs ${
              isActive
                ? "bg-[#0284C7] text-white shadow-sm"
                : "text-[#475569] hover:bg-[#E0F2FE] hover:text-[#0369A1]"
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function SiteNav() {
  const { content } = useLanguage();
  const [activeHref, setActiveHref] = useState("/#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickedHrefRef = useRef<string | null>(null);
  const navItems = content.navItems;

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const clickedHref = clickedHrefRef.current;

      if (clickedHref) {
        setActiveHref(clickedHref);
        return;
      }

      setActiveHref(getActiveHrefFromPage());
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
    clickedHrefRef.current = href;
    setActiveHref(href);
    setIsMenuOpen(false);

    window.setTimeout(() => {
      if (clickedHrefRef.current === href) {
        clickedHrefRef.current = null;
      }
      const hashHref = getHrefFromHash();
      if (hashHref) {
        setActiveHref(hashHref);
      }
    }, 1200);

    if (href === "/#home") {
      window.history.pushState(null, "", href);
      window.scrollTo({ top: 0, behavior: "smooth" });
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

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, Math.min(targetPosition, maxScroll)),
      behavior: "smooth",
    });
  }

  return (
    <header className="paper-nav sticky top-0 z-50">
      <nav className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 md:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            onClick={(event) => handleSectionClick(event, "/#home")}
            className="section-readable w-fit text-lg font-extrabold tracking-tight text-[#0F172A] sm:text-xl"
          >
            {content.brand.prefix} <span className="text-[#0284C7]">{content.brand.accent}</span>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="flex items-center justify-center rounded-lg p-2 text-[#0F172A] transition-colors hover:bg-gray-100"
              onClick={() => {
                const willOpen = !isMenuOpen;
                if (willOpen) {
                  setActiveHref(getActiveHrefFromPage());
                }
                setIsMenuOpen(willOpen);
              }}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

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
            <LanguageToggle className="ml-1" />
          </div>
        </div>

        {/* Navigasi Mobile (Tampil saat Hamburger di-klik) */}
        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-full z-50 mt-2 flex max-h-[calc(100svh-5rem)] flex-col gap-2 overflow-y-auto rounded-2xl border border-[#DCEBF7] bg-white/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav-target={item.href.slice(2)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => handleSectionClick(event, item.href)}
                  className={`site-nav-link relative flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "site-nav-link-active bg-[#0284C7] text-white shadow-md"
                      : "text-[#475569] hover:bg-[#E0F2FE] hover:text-[#0369A1]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full border transition-all ${
                        isActive ? "border-white bg-white" : "border-[#CBD5E1] bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
