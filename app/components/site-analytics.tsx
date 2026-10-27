"use client";

import { useEffect } from "react";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

const validGoogleAnalyticsId =
  googleAnalyticsId && /^G-[A-Z0-9]+$/i.test(googleAnalyticsId)
    ? googleAnalyticsId.toUpperCase()
    : null;
const validClarityProjectId =
  clarityProjectId && /^[A-Z0-9]+$/i.test(clarityProjectId)
    ? clarityProjectId.toLowerCase()
    : null;

export function SiteAnalytics() {
  useEffect(() => {
    if (!validGoogleAnalyticsId && !validClarityProjectId) {
      return;
    }

    let loaded = false;
    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "touchstart"];

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((event) => window.removeEventListener(event, loadAnalytics));

      if (validGoogleAnalyticsId) {
        const analyticsWindow = window as Window & {
          dataLayer?: unknown[];
          gtag?: (...args: unknown[]) => void;
        };
        analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
        analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
        analyticsWindow.gtag("js", new Date());
        analyticsWindow.gtag("config", validGoogleAnalyticsId);

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${validGoogleAnalyticsId}`;
        document.head.appendChild(script);
      }

      if (validClarityProjectId) {
        const clarityWindow = window as Window & {
          clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
        };
        clarityWindow.clarity = clarityWindow.clarity || ((...args: unknown[]) => {
          (clarityWindow.clarity!.q ||= []).push(args);
        });
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${validClarityProjectId}`;
        document.head.appendChild(script);
      }
    };

    events.forEach((event) => window.addEventListener(event, loadAnalytics, { once: true, passive: true }));
    const timer = window.setTimeout(loadAnalytics, 15000);

    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, loadAnalytics));
    };
  }, []);

  return null;
}
