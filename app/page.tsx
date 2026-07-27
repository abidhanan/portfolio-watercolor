"use client";

import Image from "next/image";
import { CertificateMarquee } from "./components/certificate-marquee";
import { useLanguage } from "./components/language-provider";
import { RotatingRoleBadge } from "./components/rotating-role-badge";

const toolTone = [
  "border-[#E0F2FE] bg-[#F0F9FF] text-[#0369A1]",
  "border-[#BAE6FD] bg-[#E0F2FE] text-[#0284C7]",
  "border-[#FEF08A] bg-[#FEF9C3] text-[#A16207]",
  "border-[#E2E8F0] bg-[#F8FAFC] text-[#334155]",
];

const sectionFrameClass =
  "mb-28 scroll-mt-36 py-10 md:mb-28 md:min-h-[calc(100svh-5.5rem)] md:scroll-mt-28 md:py-10";
const homeSectionClass =
  "mb-28 scroll-mt-36 pb-10 pt-2 md:-mt-6 md:mb-28 md:min-h-[calc(100svh-5.5rem)] md:scroll-mt-28 md:pb-10 md:pt-0";
const centeredSectionClass = `${sectionFrameClass} flex flex-col justify-center`;

type LogoBadgeProps = {
  name: string;
  logo?: string;
  mark?: string;
  size?: "sm" | "md";
  fill?: boolean;
  padded?: boolean;
};

function LogoBadge({ name, logo, mark, size = "md", fill = false, padded = false }: LogoBadgeProps) {
  const badgeSize = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  const logoSize = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const logoClass = fill
    ? padded
      ? "h-[85%] w-[85%] bg-contain"
      : "h-full w-full bg-cover"
    : `${logoSize} bg-contain`;

  return (
    <span
      className={`${badgeSize} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm`}
      title={name}
      aria-label={`${name} logo`}
    >
      {logo ? (
        <span
          aria-hidden="true"
          className={`block bg-center bg-no-repeat ${logoClass}`}
          style={{ backgroundImage: `url(${logo})` }}
        />
      ) : (
        <span className="text-sm font-black text-[#0284C7]">{mark ?? name.slice(0, 2)}</span>
      )}
    </span>
  );
}

type SectionHeaderProps = {
  title: string;
  summary: string;
};

function SectionHeader({ title, summary }: SectionHeaderProps) {
  return (
    <div className="relative mb-8 max-w-5xl md:mb-12">
      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        <div className="section-readable shadow-watercolor relative z-20 flex w-full max-w-full items-center justify-center gap-3 rounded-full border border-[#BAE6FD] bg-[#F0F9FF]/95 px-4 py-2.5 sm:w-fit sm:px-5">
          <span className="rope-knot h-3.5 w-3.5 shrink-0 rounded-full" aria-hidden="true" />
          <p className="text-center text-xs font-black uppercase tracking-[0.1em] text-[#0369A1] sm:whitespace-nowrap sm:text-sm sm:tracking-[0.14em]">
            {title}
          </p>
          <span className="rope-knot absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
        </div>
        <div className="rope-line-x hidden w-12 shrink-0 md:block" aria-hidden="true" />
        <div className="section-readable shadow-watercolor relative z-20 rounded-2xl border border-[#E2E8F0] bg-white/95 px-4 py-3 md:rounded-full md:px-6 md:py-3.5">
          <span className="rope-knot absolute -left-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
          <p className="text-sm leading-relaxed text-[#334155] md:text-base">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { content } = useLanguage();
  const {
    activityItems,
    careerItems,
    certificateItems,
    educationItems,
    techGroups,
  } = content.portfolio;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-10 md:py-12 xl:px-12">
      <section
        id="home"
        className={`${homeSectionClass} flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12`}
      >
        <div className="w-full space-y-4 text-center md:w-1/2 md:space-y-6 md:text-left">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#BAE6FD] bg-[#F0F9FF]/90 px-3 py-1.5 text-xs font-bold text-[#0284C7] shadow-sm backdrop-blur-sm sm:text-sm md:justify-start md:px-4">
            <span>{content.home.badge}</span>
            <RotatingRoleBadge />
          </div>
          <h1 className="home-title-outline section-readable text-[2.75rem] font-extrabold leading-[1.05] text-[#0F172A] sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl">
            {content.home.intro}
            <br />
            <span className="home-role-outline text-[#0284C7]">{content.home.role}</span>
          </h1>
          <p className="home-copy-outline section-readable mx-auto max-w-lg text-base font-bold leading-relaxed text-[#334155] sm:text-lg md:mx-0">
            {content.home.description}
          </p>
        </div>
        <div className="home-photo-stack relative isolate mt-2 h-[360px] w-full max-w-[25rem] overflow-visible sm:h-[430px] sm:max-w-[35rem] md:mt-0 md:h-[500px] md:w-1/2 md:max-w-[39rem] lg:h-[520px] lg:max-w-[42rem]">
          <div className="home-photo-card absolute left-3 top-24 z-10 -rotate-[10deg] rounded-xl border border-white/90 bg-white p-2 pb-5 shadow-[0_18px_36px_-18px_rgba(15,23,42,0.5)] sm:left-10 sm:top-28 sm:p-3 sm:pb-7 md:left-5 md:top-44 lg:left-10 lg:top-44">
            <div className="relative h-[12.25rem] w-[9.2rem] overflow-hidden rounded-md bg-gray-100 sm:h-[15rem] sm:w-[11rem] md:h-[16rem] md:w-[11.5rem] lg:h-[17rem] lg:w-[12rem]">
              <Image
                src="/home-gemini-seminar.jpg"
                alt="Abid Hanan Wicaksono at a Gemini AI seminar"
                fill
                sizes="(min-width: 1024px) 208px, (min-width: 768px) 192px, 176px"
                className="scale-[1.03] object-cover object-[52%_42%]"
              />
            </div>
          </div>
          <div className="home-photo-card absolute left-1/2 top-5 z-30 -translate-x-1/2 rotate-[2deg] rounded-xl border border-white/90 bg-white p-2 pb-5 shadow-[0_26px_54px_-22px_rgba(15,23,42,0.6)] sm:top-6 sm:p-3 sm:pb-7 md:top-16 lg:top-16">
            <div className="relative h-[12.25rem] w-[9.2rem] overflow-hidden rounded-md bg-gray-100 sm:h-[15rem] sm:w-[11rem] md:h-[16rem] md:w-[11.5rem] lg:h-[17rem] lg:w-[12rem]">
              <Image
                src="/home-google-office.jpeg"
                alt="Abid Hanan Wicaksono during a Google Office visit"
                fill
                priority
                sizes="(min-width: 1024px) 208px, (min-width: 768px) 192px, 176px"
                className="scale-[1.08] object-cover object-[32%_58%]"
              />
            </div>
          </div>
          <div className="home-photo-card absolute right-3 top-24 z-20 rotate-[10deg] rounded-xl border border-white/90 bg-white p-2 pb-5 shadow-[0_18px_36px_-18px_rgba(15,23,42,0.5)] sm:right-10 sm:top-28 sm:p-3 sm:pb-7 md:right-5 md:top-44 lg:right-10 lg:top-44">
            <div className="relative h-[12.25rem] w-[9.2rem] overflow-hidden rounded-md bg-gray-100 sm:h-[15rem] sm:w-[11rem] md:h-[16rem] md:w-[11.5rem] lg:h-[17rem] lg:w-[12rem]">
              <Image
                src="/home-ngabuburit-speaker.jpeg"
                alt="Abid Hanan Wicaksono as a speaker"
                fill
                sizes="(min-width: 1024px) 208px, (min-width: 768px) 192px, 176px"
                className="scale-[1.08] object-cover object-[52%_66%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={centeredSectionClass}>
        <div className="relative mx-auto w-full max-w-5xl pt-4 md:pt-8">
          <div className="relative flex flex-col items-center gap-7 md:flex-row md:items-start md:gap-12">
            
            {/* Left Side: Profile Circle */}
            <div className="relative z-20 flex shrink-0 flex-col items-center md:pt-16">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-[6px] border-white bg-[#E0F2FE] shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64">
                <Image 
                  src="/abid-profile.jpeg" 
                  alt="Abid Hanan Wicaksono" 
                  fill 
                  sizes="512px" 
                  className="scale-150 object-cover object-[50%_54%]" 
                />
              </div>
            </div>

            {/* Right Side: Hanging Canvas Layout */}
            <div className="relative z-10 flex w-full flex-1 flex-col items-center md:items-start md:pt-4">
              
              <div className="relative flex w-full flex-col items-center md:items-start">
                
                {/* Pills Row */}
                <div className="relative z-20 flex w-full flex-col items-center justify-center gap-3 md:ml-6 md:w-auto md:flex-row md:gap-0 md:whitespace-nowrap">
                  
                  <div className="relative z-20 flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[#F0F9FF] px-4 py-2.5 shadow-md sm:gap-3 sm:px-6">
                    <span className="rope-knot h-3.5 w-3.5 shrink-0 rounded-full" aria-hidden="true" />
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-[#0369A1] sm:text-sm md:text-base md:tracking-[0.14em]">{content.about.eyebrow}</span>
                    <div className="rope-knot absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
                  </div>
                  
                  <div className="rope-line-x z-10 hidden w-5 sm:w-16 md:block md:w-20" />

                  <div className="relative flex flex-col items-center z-20">
                    <div className="relative z-20 rounded-full border border-[#E2E8F0] bg-white/95 px-4 py-2.5 shadow-md sm:px-6">
                      <div className="rope-knot absolute -left-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
                      <span className="text-xs font-bold text-[#334155] sm:text-sm md:text-base">{content.about.summaryLabel}</span>
                    </div>
                  </div>

                </div>

                {/* Canvas Box */}
                <div className="shadow-watercolor relative z-20 mt-6 w-full rounded-2xl bg-white p-5 sm:p-8 md:mt-8 md:p-10">
                  <p className="relative z-10 text-left text-base font-medium leading-relaxed text-[#334155] md:text-justify md:text-lg">
                    {content.about.body}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.education.title}
          summary={content.sections.education.summary}
        />
        <div className="relative space-y-6">
          <div className="rope-line-vertical absolute left-[1.35rem] top-3 hidden h-[calc(100%-1.5rem)] md:block" />
          {educationItems.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="relative grid grid-cols-1 gap-5 md:grid-cols-[4rem_1fr]"
            >
              <div className="rope-knot z-10 hidden rounded-full md:ml-3 md:mt-2 md:block md:h-7 md:w-7" />
              <div className="shadow-watercolor p-5 transition-all hover:shadow-lg sm:p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-sm md:mx-0 md:h-28 md:w-28">
                    <Image
                      src={item.logo}
                      alt="Sugeng Hartono University logo"
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#0ea5e9] tracking-wider uppercase">{item.year}</p>
                    <h3 className="mb-2 text-2xl font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="mb-3 font-semibold text-[#0369A1]">{item.place}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#BAE6FD] bg-[#F0F9FF] px-4 py-1.5 text-xs font-bold text-[#0284C7]">
                        {content.education.semester}
                      </span>
                      <span className="rounded-full border border-[#FEF08A] bg-[#FEF9C3] px-4 py-1.5 text-xs font-bold text-[#A16207]">
                        {content.education.gpa}
                      </span>
                    </div>
                    <p className="leading-relaxed text-[#475569]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.tools.title}
          summary={content.sections.tools.summary}
        />
        <div className="mobile-rope-stack relative grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch md:gap-6">
          <div className="mobile-rope-line rope-line-vertical absolute md:hidden" />
          {techGroups.map((group, groupIndex) => (
            <div key={group.title} className="mobile-rope-item relative grid grid-cols-[2.5rem_1fr] gap-0 md:block md:h-full">
              <div className="mobile-rope-knot rope-knot z-10 mt-5 h-5 w-5 rounded-full md:hidden" />
              <div
                className="shadow-watercolor h-full p-5 sm:p-8"
              >
                <h3 className="mb-5 text-xl font-bold leading-tight text-[#0F172A] sm:mb-6 sm:text-2xl md:min-h-[3.75rem]">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:auto-rows-fr">
                  {group.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className={`flex min-h-[7.5rem] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-bold shadow-sm transition-transform hover:-translate-y-1 sm:min-h-[8rem] sm:gap-3 sm:px-3 sm:py-4 sm:text-sm md:h-full md:min-h-[9rem] ${
                        toolTone[(groupIndex + toolIndex) % toolTone.length]
                      }`}
                    >
                      <LogoBadge name={tool.name} logo={tool.logo} mark={tool.mark} size="sm" fill={tool.square} padded={tool.padded} />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.certificates.title}
          summary={content.sections.certificates.summary}
        />
        <CertificateMarquee certificates={certificateItems} />
      </section>

      <section id="career" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.career.title}
          summary={content.sections.career.summary}
        />
        <div className="mobile-rope-stack relative grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3">
          <div className="mobile-rope-line rope-line-vertical absolute md:hidden" />
          {careerItems.map((item) => (
            <div
              key={`${item.period}-${item.role}-${item.company}`}
              className="mobile-rope-item relative grid grid-cols-[2.5rem_1fr] gap-0 md:block"
            >
              <div className="mobile-rope-knot rope-knot z-10 mt-5 h-5 w-5 rounded-full md:hidden" />
              <article
                className="shadow-watercolor flex h-full flex-col p-5 transition-transform hover:-translate-y-2 sm:p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-3 sm:mb-6 sm:gap-4">
                  <LogoBadge
                    name={item.company}
                    logo={item.companyLogo}
                    mark={item.companyMark}
                    size="sm"
                    fill={!item.logoContain}
                  />
                  <p className="w-fit rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3 py-1 text-right text-[0.68rem] font-bold text-[#475569] sm:text-xs">
                    {item.period}
                  </p>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#0F172A]">{item.role}</h3>
                <p className="mb-4 font-bold text-[#0284C7]">{item.company}</p>
                <p className="mb-6 leading-relaxed text-[#475569] flex-grow">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-bold text-[#334155] shadow-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="startup" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.startup.title}
          summary={content.sections.startup.summary}
        />
        <div className="startup-rope-stack mobile-rope-stack relative space-y-5 md:space-y-7">
          <div className="startup-rope-line rope-line-vertical absolute" />
          {content.startup.items.map((startup) => (
            <div
              key={startup.title}
              className="mobile-rope-item relative grid grid-cols-[2.5rem_1fr] gap-0 md:grid-cols-[4rem_1fr]"
            >
              <div className="startup-rope-knot rope-knot z-10 mt-8 h-5 w-5 rounded-full md:mt-10 md:h-7 md:w-7" />
              <article className="shadow-watercolor relative overflow-hidden p-5 sm:p-8 md:p-10">
                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12">
                  <div className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center">
                    <div className="shadow-watercolor relative z-10 h-52 w-52 overflow-hidden rounded-2xl bg-white p-5 sm:h-64 sm:w-64 sm:p-6">
                      <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                        <Image
                          src={startup.logo}
                          alt={startup.logoAlt}
                          fill
                          sizes="320px"
                          className={
                            startup.logo === "/wiboostore-logo.jpeg"
                              ? "object-cover"
                              : "object-contain p-4"
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="section-readable mb-4 text-center text-3xl font-black leading-tight text-[#0F172A] md:text-5xl lg:text-left">
                      {startup.title}
                    </h3>
                    <p className="section-readable mb-6 max-w-2xl text-base leading-relaxed text-[#475569] sm:mb-8 sm:text-lg">
                      {startup.description}
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {startup.services.map((service) => (
                        <div
                          key={service}
                          className="shadow-watercolor relative rounded-xl bg-white/90 px-6 py-4 transition-transform hover:-translate-y-1"
                        >
                          <span className="rope-knot absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full" />
                          <p className="pl-3 text-sm font-bold text-[#1E293B]">{service}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={startup.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-auto flex w-fit items-center justify-center rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-[#0284C7] hover:shadow-lg sm:px-8 sm:py-4 lg:mx-0"
                    >
                      {startup.visit}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="activity" className={centeredSectionClass}>
        <SectionHeader
          title={content.sections.activity.title}
          summary={content.sections.activity.summary}
        />
        <div className="mobile-rope-stack relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <div className="mobile-rope-line rope-line-vertical absolute md:hidden" />
          {activityItems.map((activity) => (
            <div key={activity.title} className="mobile-rope-item relative grid grid-cols-[2.5rem_1fr] gap-0 md:block">
              <div className="mobile-rope-knot rope-knot z-10 mt-5 h-5 w-5 rounded-full md:hidden" />
              <article
                className="shadow-watercolor flex h-full flex-col p-4 transition-transform hover:-translate-y-2 sm:p-5"
              >
                <h3 className="mb-3 text-lg font-bold text-[#0F172A] sm:text-xl">{activity.title}</h3>
                {activity.organization ? (
                  <p className="mb-2 text-sm font-bold text-[#0284C7]">{activity.organization}</p>
                ) : null}
                {activity.category ? (
                  <p className="mb-4 w-fit rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-bold text-[#475569]">
                    {activity.category}
                  </p>
                ) : null}
                <p className="text-sm leading-relaxed text-[#475569]">{activity.desc}</p>
                {activity.image ? (
                  <div className="mt-auto pt-5">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#E2E8F0] bg-gray-100 shadow-sm">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
