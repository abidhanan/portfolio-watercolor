import { getPortfolioContent, type PortfolioContent } from "./i18n";

// A translation file is a flat map of "path/to/string" -> translated text, using
// the same paths as the English content (see public/i18n/_source-en.json).
export type FlatTranslation = Record<string, string>;

const cache = new Map<string, Promise<FlatTranslation | null>>();

// Fetches (once) the translation file for a language. Resolves to null if it
// is unavailable, in which case the page simply keeps showing English.
export function loadTranslation(code: string): Promise<FlatTranslation | null> {
  let request = cache.get(code);
  if (!request) {
    request = fetch(`/i18n/${code}.json`)
      .then((response) => (response.ok ? (response.json() as Promise<FlatTranslation>) : null))
      .catch(() => null);
    cache.set(code, request);
  }
  return request;
}

function setAtPath(root: unknown, path: string[], value: string) {
  let node = root as Record<string, unknown>;
  for (let i = 0; i < path.length - 1; i += 1) {
    const next = node?.[path[i]];
    if (next === undefined || next === null || typeof next !== "object") {
      return;
    }
    node = next as Record<string, unknown>;
  }
  const last = path[path.length - 1];
  if (node && typeof node[last] === "string") {
    node[last] = value;
  }
}

// Returns English content with the translated strings applied on top.
export function buildTranslatedContent(translation: FlatTranslation): PortfolioContent {
  const content = structuredClone(getPortfolioContent("en")) as PortfolioContent;
  for (const [path, value] of Object.entries(translation)) {
    if (typeof value === "string" && value) {
      setAtPath(content, path.split("/"), value);
    }
  }
  // Nav labels are derived from `nav`, so refresh them after translating.
  content.navItems = content.navItems.map((item) => ({
    ...item,
    label: content.nav[item.key] ?? item.label,
  }));
  return content;
}
