import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundMusic } from "./components/background-music";
import { LanguageProvider } from "./components/language-provider";
import { ScrollRevealController } from "./components/scroll-reveal-controller";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { assetBaseUrl, assetUrl } from "./lib/assets";

// Memuat Google Font agar konsisten di Desktop dan Mobile
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "optional" });

// Fully static so Vercel serves a cached, compressed document (fast TTFB).
export const dynamic = "force-static";

const siteUrl = "https://www.abidhanan.my.id";
const title = "Abid Hanan - DevRel";
const description =
  "Abid Hanan Wicaksono (AHAWI) is a Developer Relations professional and content creator from Indonesia. Explore his portfolio: experience, certifications, skills, and projects.";

const socialProfiles = [
  "https://www.instagram.com/ahawi_channel",
  "https://www.tiktok.com/@ahawi_channel",
  "https://youtube.com/@ahawichannel",
  "https://x.com/ahawi_channel",
  "https://t.me/ahawi_channel",
  "https://github.com/abidhanan",
  "https://www.linkedin.com/in/abid-hanan-wicaksono-6a9326326/",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Abid Hanan - DevRel",
  },
  description,
  applicationName: title,
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
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abid Hanan Wicaksono — Developer Relations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@ahawi_channel",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F0F7FA",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abid Hanan Wicaksono",
      alternateName: ["Abid Hanan", "AHAWI"],
      url: siteUrl,
      image: `${siteUrl}/abid-profile.webp`,
      jobTitle: "Developer Relations",
      description:
        "Abid Hanan Wicaksono is a Developer Relations professional and content creator from Indonesia who connects technology, communities, and business goals through developer education and content creation.",
      email: "abidhanan0904@gmail.com",
      knowsAbout: [
        "Developer Relations",
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
        "Developer Education",
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Sugeng Hartono University" },
      worksFor: { "@type": "Organization", name: "Maua AI" },
      nationality: "Indonesian",
      address: { "@type": "PostalAddress", addressCountry: "ID" },
      sameAs: socialProfiles,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abid Hanan Wicaksono — Portfolio",
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Abid Hanan Wicaksono — Developer Relations",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
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
        className={`${plusJakarta.className} min-h-screen bg-[#d2a96d] text-[#1E293B]`}
        style={{
          "--paper-texture": `url("${assetUrl("/crumpled-paper.webp")}")`,
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
