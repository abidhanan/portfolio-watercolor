"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getPortfolioContent,
  type Language,
  type PortfolioContent,
} from "../lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: PortfolioContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "portfolio-language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return storedLanguage === "id" || storedLanguage === "en" ? storedLanguage : "en";
}

function subscribeToLanguageChange(callback: () => void) {
  window.addEventListener("portfolio-language-change", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("portfolio-language-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => "en",
  );
  const content = useMemo(() => getPortfolioContent(language), [language]);

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    window.dispatchEvent(new Event("portfolio-language-change"));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content,
    }),
    [content, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
