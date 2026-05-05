import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#about" },
  { label: "Tools", href: "/#tools" },
  { label: "Education", href: "/#education" },
  { label: "Activity", href: "/#activity" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EBE6DD]/80 bg-[#F8F6F0]/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-20 lg:px-32">
        <Link href="/#home" className="w-fit text-lg font-bold tracking-normal text-[#1D3557]">
          MFK<span className="text-[#457B9D]"> Portfolio</span>
        </Link>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[#4A6478] transition-colors hover:border-[#E1E8D5] hover:bg-white/70 hover:text-[#1D3557]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
