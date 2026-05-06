import type { SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";

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

function TikTokIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <path
        fill="#000"
        d="M16.6 2.2c.4 2.7 1.9 4.4 4.5 4.6v4.1a8.2 8.2 0 0 1-4.4-1.3v6.4c0 4.1-2.6 6.4-6.2 6.4-3.3 0-6-2.4-6-5.8 0-3.8 3-6 6.8-5.7v4.2c-1.6-.2-2.6.4-2.6 1.6 0 1 .8 1.7 1.8 1.7 1.2 0 2-.7 2-2.2V2.2h4.1Z"
      />
      <path
        fill="#25F4EE"
        d="M14.8 2.2h1.8c.1.8.3 1.6.6 2.2a5.8 5.8 0 0 1-2.4-2.2ZM10.5 11c.3 0 .6 0 .9.1v4.1c-.3-.1-.6-.1-.9-.1-1 0-1.8.6-1.8 1.6 0 .3.1.6.2.8a2 2 0 0 1-1.5-1.9c0-1.2 1.1-2 3.1-1.8V11Z"
      />
      <path
        fill="#FE2C55"
        d="M17.2 4.4c.7 1.4 1.9 2.2 3.9 2.4v1.8a7.6 7.6 0 0 1-4.4-1.4v6.5c0 4.1-2.6 6.4-6.2 6.4a6.1 6.1 0 0 1-4.5-1.8 6.1 6.1 0 0 0 5.2 3c3.6 0 6.2-2.3 6.2-6.4V8.5a8.2 8.2 0 0 0 4.4 1.3V8.1c-2.1-.3-3.7-1.6-4.6-3.7Z"
      />
    </svg>
  );
}

function YouTubeIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8Z"
      />
      <path fill="#fff" d="M9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function XIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <path
        fill="#000"
        d="M18.9 2h3.7l-8.1 9.3L24 22h-7.4l-5.8-6.8L4.2 22H.5l8.7-9.9L0 2h7.6l5.2 6.1L18.9 2Zm-1.3 18.1h2L6.5 3.8H4.3l13.3 16.3Z"
      />
    </svg>
  );
}

function TelegramIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" role="img" {...props}>
      <circle cx="12" cy="12" r="12" fill="#26A5E4" />
      <path
        fill="#fff"
        d="M17.8 6.9 15.9 18c-.1.8-.6 1-1.2.6l-3.3-2.4-1.6 1.6c-.2.2-.3.3-.7.3l.2-3.4 6.2-5.6c.3-.2-.1-.4-.4-.2l-7.7 4.8-3.3-1c-.7-.2-.7-.7.2-1l12.8-4.9c.6-.2 1.1.1.7 1.1Z"
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/ahawi_channel?igsh=MWI3ZmlxaWFycm5z",
    icon: InstagramIcon,
    imageSrc: "/logo-instagram.jpg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ahawi_channel?_r=1&_t=ZS-968BH4ElC4u",
    icon: TikTokIcon,
    imageSrc: "/logo-tiktok.jpg",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ahawichannel?si=D4LWNRdvUH4J3FQg",
    icon: YouTubeIcon,
  },
  {
    label: "X",
    href: "https://x.com/ahawi_channel",
    icon: XIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/ahawi_channel",
    icon: TelegramIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/abidhanan",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abid-hanan-wicaksono-6a9326326/",
    icon: LinkedInIcon,
  },
];

type SocialLinksProps = {
  size?: "xs" | "sm" | "md";
  className?: string;
  wrap?: boolean;
};

export function SocialLinks({ size = "md", className = "", wrap = true }: SocialLinksProps) {
  const boxSize = size === "xs" ? "h-9 w-9" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const iconSize = size === "xs" ? "h-5 w-5" : size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const imageSize = size === "xs" ? 20 : size === "sm" ? 24 : 28;
  const gapSize = size === "xs" ? "gap-2" : "gap-3";
  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";

  return (
    <div className={`flex ${wrapClass} items-center ${gapSize} ${className}`}>
      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={`${boxSize} flex shrink-0 items-center justify-center rounded-2xl border border-[#DCEBF7] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt=""
                width={imageSize}
                height={imageSize}
                className={`${iconSize} rounded-md object-cover`}
                aria-hidden="true"
              />
            ) : (
              <Icon className={iconSize} aria-hidden="true" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
