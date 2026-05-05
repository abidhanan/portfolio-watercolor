import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-[#DCEBF7] bg-[#EAF4FC]/86 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.3fr_0.7fr] xl:px-12">
        <div className="text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5D91]">
            Motivation Note
          </p>
          <p className="max-w-2xl text-xl font-bold leading-relaxed text-[#102A43] lg:text-2xl">
            Kata-kata motivasiku akan hadir di sini.
          </p>
          <p className="mt-5 text-sm font-medium text-[#334E68]">
            (c) 2026 Abid Hanan Wicaksono - Built with Next.js & Tailwind
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:items-end">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5D91]">
            Contact
          </p>
          <SocialLinks size="md" className="justify-center lg:justify-end" />
        </div>
      </div>
    </footer>
  );
}
