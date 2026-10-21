import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundMusic } from "./components/background-music";
import { LanguageProvider } from "./components/language-provider";
import { ScrollRevealController } from "./components/scroll-reveal-controller";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { assetBaseUrl, assetUrl } from "./lib/assets";
import { contactEmail, faq, sections, siteUrl, socialProfiles, summary, ventures } from "./lib/site";

// Self-hosted, Latin-subset variable fonts (no render-blocking third-party request, ~13 KB lighter).
const lora = localFont({
  src: "./fonts/lora-latin.woff2",
  weight: "400 700",
  display: "optional",
  variable: "--font-body",
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "serif"],
});
const playfair = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  weight: "400 900",
  display: "optional",
  variable: "--font-display",
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "serif"],
});

// Fully static so Vercel serves a cached, compressed document (fast TTFB).
export const dynamic = "force-static";

const title = "Abid Hanan Wicaksono - Developer Relations";
const description =
  "Abid Hanan Wicaksono, Developer Relations asal Surakarta, Indonesia. Menghubungkan teknologi dengan komunitas lewat komunikasi yang jelas dan edukasi developer.";
const socialImageUrl = `${siteUrl}/abid-hanan-social-preview-id.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s - Abid Hanan Wicaksono",
  },
  description,
  applicationName: "Abid Hanan Wicaksono",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false, address: false, email: false },
  authors: [{ name: "Abid Hanan Wicaksono", url: siteUrl }],
  creator: "Abid Hanan Wicaksono",
  publisher: "Abid Hanan Wicaksono",
  keywords: [
    "Abid Hanan Wicaksono",
    "Abid Hanan",
    "AHAWI",
    "ahawi_channel",
    "Developer Relations",
    "DevRel",
    "Web3 Developer",
    "Solidity",
    "React",
    "Next.js",
    "Laravel",
    "Indonesia developer",
    "Developer Relations Indonesia",
    "Surakarta",
    "Wiboost Store",
    "Nocoding",
    "I Need Save",
    "I Need Barcode",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Abid Hanan",
    lastName: "Wicaksono",
    username: "ahawi_channel",
    title,
    description,
    url: siteUrl,
    siteName: "Abid Hanan Wicaksono",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: socialImageUrl,
        secureUrl: socialImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abid Hanan, Developer Relations. Portofolio cat air dengan foto acara pembicara dan kunjungan ke Google Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: socialImageUrl,
        alt: "Abid Hanan, Developer Relations. Portofolio cat air dengan foto acara pembicara dan kunjungan ke Google Office",
      },
    ],
    creator: "@ahawi_channel",
  },
  icons: {
    icon: [
      { url: `${siteUrl}/favicon-64x64.png`, sizes: "64x64", type: "image/png" },
      { url: `${siteUrl}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    shortcut: `${siteUrl}/favicon.ico`,
    apple: [{ url: `${siteUrl}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F0F7FA",
  colorScheme: "light",
};

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const pageId = `${siteUrl}/#webpage`;

// Structured data for search engines and AI answer engines. Answers in `faq`
// mirror what the page says, and every entity links back to the Person node.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Abid Hanan Wicaksono",
      givenName: "Abid Hanan",
      familyName: "Wicaksono",
      alternateName: ["Abid Hanan", "AHAWI", "ahawi_channel"],
      url: siteUrl,
      mainEntityOfPage: { "@id": pageId },
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/abid-profile.webp`,
        width: 563,
        height: 1000,
      },
      jobTitle: "Developer Relations",
      hasOccupation: {
        "@type": "Occupation",
        name: "Developer Relations",
        occupationLocation: { "@type": "Country", name: "Indonesia" },
        skills: "Developer education, community building, technical communication, Web3, full stack development",
      },
      description: [
        { "@language": "en", "@value": summary.en },
        { "@language": "id", "@value": summary.id },
      ],
      email: contactEmail,
      knowsLanguage: ["id", "en"],
      knowsAbout: [
        "Developer Relations",
        "Developer Education",
        "Community Building",
        "Technical Communication",
        "Full Stack Development",
        "Blockchain",
        "Web3",
        "Solidity",
        "Smart Contracts",
        "React",
        "Next.js",
        "Laravel",
        "Rust",
        "Content Creation",
        "Social Media Marketing",
      ],
      homeLocation: {
        "@type": "Place",
        name: "Surakarta, Indonesia",
        address: { "@type": "PostalAddress", addressLocality: "Surakarta", addressCountry: "ID" },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sugeng Hartono University",
      },
      worksFor: { "@type": "Organization", name: "Maua AI" },
      nationality: { "@type": "Country", name: "Indonesia" },
      sameAs: socialProfiles.map((profile) => profile.url),
    },
    ...ventures.map((venture) => ({
      "@type": venture.type,
      "@id": `${venture.url}/#${venture.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name: venture.name,
      url: venture.url,
      description: venture.description,
      founder: { "@id": personId },
      ...(venture.type === "WebApplication"
        ? {
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any (web browser)",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }
        : {}),
    })),
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Abid Hanan Wicaksono - Portfolio",
      inLanguage: ["id", "en"],
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": pageId,
      url: siteUrl,
      name: "Abid Hanan Wicaksono - Developer Relations",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: ["id", "en"],
      dateModified: new Date().toISOString(),
      primaryImageOfPage: { "@type": "ImageObject", url: socialImageUrl, width: 1200, height: 630 },
      hasPart: sections.map((section) => ({
        "@type": "WebPageElement",
        "@id": `${siteUrl}/#${section.id}`,
        name: section.name,
        url: `${siteUrl}/#${section.id}`,
        description: section.description,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {assetBaseUrl ? <link rel="preconnect" href={assetBaseUrl} crossOrigin="anonymous" /> : null}
      </head>
      <body
        className={`${lora.variable} ${playfair.variable} min-h-screen bg-[#F0F7FA] text-[#3a2616]`}
        style={{
          "--paper-texture": `url("${assetUrl("/crumpled-paper-lite.webp")}")`,
          "--beach-background": `url("${assetUrl("/watercolor-beach-lite.webp")}")`,
        } as CSSProperties}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <SiteNav />
          {children}
          <SiteFooter />
          <BackgroundMusic />
          <ScrollRevealController />
        </LanguageProvider>
      </body>
    </html>
  );
}
