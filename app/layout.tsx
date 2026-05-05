import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

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
    <html lang="id">
      <body className="min-h-screen bg-[#EAF4FC] font-sans text-[#102A43]">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
