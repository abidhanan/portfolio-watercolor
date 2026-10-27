"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languageOptions } from "../lib/i18n";
import { useLanguage } from "./language-provider";

// Flag images are tiny PNGs in /public/flags (named by country code).
function Flag({ code }: { code: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/flags/${code}.png`}
      alt=""
      width={20}
      height={15}
      loading="lazy"
      decoding="async"
      className="h-[15px] w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-black/20"
    />
  );
}

export function LanguageDropdown({ className = "" }: { className?: string }) {
  const { language, setLanguage, preloadLanguage, content } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = languageOptions.find((option) => option.code === language) ?? languageOptions[1];

  useEffect(() => {
    if (!open) {
      return;
    }
    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${content.languageToggle.label}: ${current.label}`}
        className="lang-toggle flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.08em] text-[#334155] sm:text-xs"
      >
        <Flag code={current.flag} />
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={content.languageToggle.label}
          className="lang-menu absolute rounded-xl border border-[#785224]/55 bg-[#fbf5e6] shadow-2xl right-0 top-full z-[60] mt-2 max-h-[min(24rem,70svh)] w-56 overflow-y-auto p-1.5"
        >
          {languageOptions.map((option) => {
            const isActive = option.code === language;
            return (
              <li key={option.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  lang={option.code}
                  onPointerEnter={() => preloadLanguage(option.code)}
                  onFocus={() => preloadLanguage(option.code)}
                  onClick={() => {
                    setLanguage(option.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                    isActive ? "lang-toggle-active text-white" : "lang-menu-item text-[#334155]"
                  }`}
                >
                  <Flag code={option.flag} />
                  <span className="flex-1">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
