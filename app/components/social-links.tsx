import { Briefcase, Camera, Code2, Phone } from "lucide-react";
import Link from "next/link";

const socialItems = [
  { label: "Instagram", icon: Camera, color: "bg-[#E9C46A]" },
  { label: "Phone", icon: Phone, color: "bg-[#7A9E7E]" },
  { label: "GitHub", icon: Code2, color: "bg-[#1D3557]" },
  { label: "LinkedIn", icon: Briefcase, color: "bg-[#457B9D]" },
];

type SocialLinksProps = {
  size?: "sm" | "md";
  className?: string;
};

export function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const boxSize = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href="/#contact"
            aria-label={item.label}
            className={`${boxSize} flex items-center justify-center rounded-full ${item.color} text-white opacity-90 shadow-sm transition-opacity hover:opacity-100`}
          >
            <Icon className={iconSize} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
