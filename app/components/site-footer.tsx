export function SiteFooter() {
  return (
    <footer className="border-t border-[#EBE6DD] bg-[#F4F1EA]/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-center md:px-10 xl:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
          Motivation Note
        </p>
        <p className="mx-auto max-w-2xl text-xl font-bold leading-relaxed text-[#1D3557]">
          Kata-kata motivasiku akan hadir di sini.
        </p>
        <p className="text-sm font-medium text-[#4A6478]">
          (c) 2026 Abid Hanan Wicaksono - Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
