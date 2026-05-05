import type { SVGProps } from "react";
import Link from "next/link";

type BrandIconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <defs>
        <radialGradient id="instagram-mark" cx="30%" cy="110%" r="120%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="32%" stopColor="#FA7E1E" />
          <stop offset="58%" stopColor="#D62976" />
          <stop offset="82%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-mark)" />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.7" r="1.1" fill="#fff" />
    </svg>
  );
}

function WhatsAppIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M7.4 18.2l.7-2.6A7.1 7.1 0 1 1 10.8 18l-3.4.2Z"
        fill="none"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.8 8.4c.2-.5.4-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.1.2-.1.4 0 .6.5.9 1.3 1.7 2.3 2.2.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.6 0 .8-.6 1.5-1.3 1.6-1.1.1-2.7-.3-4.5-1.6-1.7-1.3-2.9-3.1-3.2-4.4-.2-.8.2-1.5.7-1.9Z"
        fill="#fff"
      />
    </svg>
  );
}

function GitHubIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <path
        fill="#181717"
        d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3Z"
      />
    </svg>
  );
}

function LinkedInIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <path
        fill="#0A66C2"
        d="M22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0ZM7.1 20.5H3.6V9h3.5v11.5ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm15.2 13.1H17v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3Z"
      />
    </svg>
  );
}

const socialItems = [
  { label: "Instagram", icon: InstagramIcon },
  { label: "WhatsApp", icon: WhatsAppIcon },
  { label: "GitHub", icon: GitHubIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
];

type SocialLinksProps = {
  size?: "sm" | "md";
  className?: string;
};

export function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const boxSize = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const iconSize = size === "sm" ? "h-6 w-6" : "h-7 w-7";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href="/#contact"
            aria-label={item.label}
            className={`${boxSize} flex shrink-0 items-center justify-center rounded-2xl border border-[#DCEBF7] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            <Icon className={iconSize} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
