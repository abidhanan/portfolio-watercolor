"use client";

import Link from "next/link";
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
  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#")) {
      return;
    }

    const section = document.getElementById(href.slice(2));

    if (!section) {
      return;
    }

    event.preventDefault();

    if (href === "/#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", href);
      return;
    }

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const footerTop =
      (document.querySelector("footer")?.getBoundingClientRect().top ?? 0) +
      window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const noFooterMaxScroll = Math.max(0, footerTop - window.innerHeight);
    const targetPosition =
      href === "/#contact"
        ? sectionTop + section.offsetHeight / 2 - window.innerHeight / 2
        : sectionTop - headerHeight - 16;

    window.scrollTo({
      top: Math.max(
        0,
        Math.min(
          targetPosition,
          href === "/#contact" ? noFooterMaxScroll : maxScroll,
        ),
      ),
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#EBE6DD]/80 bg-[#F8F6F0]/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[92rem] flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-12 xl:px-16">
        <Link
          href="/#home"
          onClick={(event) => handleSectionClick(event, "/#home")}
          className="w-fit text-lg font-bold tracking-normal text-[#1D3557]"
        >
          AHAWI<span className="text-[#457B9D]"> Portfolio</span>
        </Link>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[#4A6478] transition-colors hover:border-[#E1E8D5] hover:bg-white/70 hover:text-[#1D3557]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
