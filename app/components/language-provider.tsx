"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getPortfolioContent,
  languageOptions,
  type PortfolioContent,
} from "../lib/i18n";
import { buildTranslatedContent, loadTranslation, type FlatTranslation } from "../lib/translate";

type LanguageContextValue = {
  language: string;
  setLanguage: (language: string) => void;
  // Starts downloading a language ahead of time (for example on hover).
  preloadLanguage: (language: string) => void;
  content: PortfolioContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "portfolio-language";
const knownCodes = new Set(languageOptions.map((option) => option.code));
const canonicalLanguageCodes = new Map(
  languageOptions.map((option) => [option.code.toLowerCase(), option.code]),
);

function matchSupportedLanguage(language: string): string | null {
  const normalizedLanguage = language.trim().replaceAll("_", "-").toLowerCase();
  const exactMatch = canonicalLanguageCodes.get(normalizedLanguage);
  if (exactMatch) {
    return exactMatch;
  }

  const [baseLanguage, ...subtags] = normalizedLanguage.split("-");
  if (baseLanguage === "zh") {
    const usesTraditionalChinese = subtags.some((subtag) =>
      ["hant", "tw", "hk", "mo"].includes(subtag),
    );
    return usesTraditionalChinese ? "zh-TW" : "zh-CN";
  }

  return canonicalLanguageCodes.get(baseLanguage) ?? null;
}

function getDeviceLanguage(): string {
  const deviceLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const deviceLanguage of deviceLanguages) {
    const supportedLanguage = matchSupportedLanguage(deviceLanguage);
    if (supportedLanguage) {
      return supportedLanguage;
    }
  }

  return "en";
}

function getStoredLanguage(): string {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    if (storedLanguage && knownCodes.has(storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    // Some privacy modes block localStorage; device language still works.
  }

  return getDeviceLanguage();
}

function subscribeToLanguageChange(callback: () => void) {
  window.addEventListener("portfolio-language-change", callback);
  window.addEventListener("storage", callback);
  window.addEventListener("languagechange", callback);

  return () => {
    window.removeEventListener("portfolio-language-change", callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("languagechange", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<string>(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => "en",
  );
  const [translations, setTranslations] = useState<Record<string, FlatTranslation>>({});

  const content = useMemo(() => {
    if (language === "en" || language === "id") {
      return getPortfolioContent(language);
    }
    const translation = translations[language];
    return translation ? buildTranslatedContent(translation) : getPortfolioContent("en");
  }, [language, translations]);

  const preloadLanguage = (code: string) => {
    if (code !== "en" && code !== "id") {
      void loadTranslation(code);
    }
  };

  const setLanguage = (nextLanguage: string) => {
    const commit = () => {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
      window.dispatchEvent(new Event("portfolio-language-change"));
    };

    if (nextLanguage === "en" || nextLanguage === "id") {
      commit();
      return;
    }

    // Switch only once the translation is in memory, so the page never flashes
    // back to English while the (small) file downloads.
    void loadTranslation(nextLanguage).then((translation) => {
      if (translation) {
        setTranslations((current) => ({ ...current, [nextLanguage]: translation }));
      }
      commit();
    });
  };

  // A stored language is restored on load, so fetch its translation here too.
  useEffect(() => {
    document.documentElement.lang = language;
    if (language === "en" || language === "id" || translations[language]) {
      return;
    }
    let cancelled = false;
    void loadTranslation(language).then((translation) => {
      if (!cancelled && translation) {
        setTranslations((current) => ({ ...current, [language]: translation }));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [language, translations]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      preloadLanguage,
      content,
    }),
    // setLanguage and preloadLanguage only use module-level state and the setter.
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
