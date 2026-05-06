import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="paper-nav scroll-mt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 md:px-10 lg:grid-cols-[1.3fr_0.7fr] xl:px-12">
        <div className="text-center lg:text-left">
          <p className="section-readable max-w-2xl text-xl font-semibold leading-relaxed text-[#0F172A] lg:text-2xl">
            "Setelah kesulitan pasti ada kemudahan"
          </p>
          <p className="section-readable mt-6 text-sm font-medium text-[#64748B]">
            &copy; 2026 Abid Hanan Wicaksono - Built with Next.js & Tailwind
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 lg:items-end">
          <p className="section-readable text-sm font-bold uppercase tracking-[0.24em] text-[#0284C7]">
            Let&apos;s Connect
          </p>
          <SocialLinks size="md" className="justify-center lg:justify-end" />
        </div>
      </div>
    </footer>
  );
}
