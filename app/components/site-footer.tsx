import { Mail } from "lucide-react";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="paper-nav scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-7 md:px-10 xl:px-12">
        <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col items-center justify-start gap-2 text-center lg:items-start lg:text-left">
            <p className="section-readable text-lg font-black tracking-tight text-[#0F172A]">
              AHAWI <span className="text-[#0284C7]">Portfolio</span>
            </p>
            <p className="section-readable flex min-h-8 items-center text-center text-sm font-medium leading-relaxed text-[#334155] sm:h-10 sm:text-base lg:text-left">
              Every difficulty is followed by ease.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 text-center">
            <p className="section-readable text-sm font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Contact
            </p>
            <a
              href="mailto:abidhanan0904@gmail.com"
              className="inline-flex min-h-8 max-w-full items-center gap-2 text-xs font-semibold text-[#0F172A] sm:h-10 sm:text-sm"
              aria-label="Email Abid Hanan Wicaksono"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#0284C7]" aria-hidden="true" />
              <span className="break-all">abidhanan0904@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 lg:items-end">
            <p className="section-readable text-sm font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Let&apos;s Connect
            </p>
            <SocialLinks size="sm" wrap={false} className="justify-center lg:justify-end" />
          </div>
        </div>

        <p className="section-readable mt-5 border-t border-[#DCEBF7] pt-4 text-center text-xs font-medium text-[#64748B] sm:text-sm">
          &copy; 2026 Abid Hanan Wicaksono - Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
