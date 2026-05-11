import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundMusic } from "./components/background-music";
import { LanguageProvider } from "./components/language-provider";
import { ScrollRevealController } from "./components/scroll-reveal-controller";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

// Memuat Google Font agar konsisten di Desktop dan Mobile
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abid Hanan Wicaksono - Portfolio",
  description: "Developer Relations Portfolio",
  icons: {
    icon: "/ahawi-icon.svg",
    shortcut: "/ahawi-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} min-h-screen bg-[#F0F7FA] text-[#1E293B]`}>
        <LanguageProvider>
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
