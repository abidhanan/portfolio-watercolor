import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M. Fadh Khulloh - Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen bg-[#F8F6F0] text-[#1D3557] font-sans`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
