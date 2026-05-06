import { Mail } from "lucide-react";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="paper-nav scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-7 md:px-10 xl:px-12">
        <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col items-center justify-start gap-2 text-center lg:items-start lg:text-left">
            <p className="section-readable text-lg font-black tracking-tight text-[#0F172A]">
              AHAWI <span className="text-[#0284C7]">Portfolio</span>
            </p>
            <p className="section-readable flex h-10 items-center text-base font-medium leading-relaxed text-[#334155]">
              Every difficulty is followed by ease.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 text-center">
            <p className="section-readable text-sm font-bold uppercase tracking-[0.2em] text-[#0284C7]">
              Contact
            </p>
            <a
              href="mailto:abidhanan0904@gmail.com"
              className="inline-flex h-10 max-w-full items-center gap-2 text-sm font-semibold text-[#0F172A]"
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

        <p className="section-readable mt-5 border-t border-[#DCEBF7] pt-4 text-center text-sm font-medium text-[#64748B]">
          &copy; 2026 Abid Hanan Wicaksono - Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
