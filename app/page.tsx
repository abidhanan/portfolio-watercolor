import Image from "next/image";
import { CertificateMarquee } from "./components/certificate-marquee";
import { RotatingRoleBadge } from "./components/rotating-role-badge";
import {
  activityItems,
  careerItems,
  certificateItems,
  educationItems,
  techGroups,
} from "./lib/portfolio-data";

const toolTone = [
  "border-[#E0F2FE] bg-[#F0F9FF] text-[#0369A1]",
  "border-[#BAE6FD] bg-[#E0F2FE] text-[#0284C7]",
  "border-[#FEF08A] bg-[#FEF9C3] text-[#A16207]",
  "border-[#E2E8F0] bg-[#F8FAFC] text-[#334155]",
];

const startupServices = [
  "Social media boosting services",
  "Game top-ups",
  "Data packages",
  "Premium apps",
];

const sectionFrameClass = "mb-28 min-h-[calc(100svh-5.5rem)] scroll-mt-28 py-10";
const homeSectionClass = "-mt-6 mb-28 min-h-[calc(100svh-5.5rem)] scroll-mt-28 pb-10 pt-0";
const centeredSectionClass = `${sectionFrameClass} flex flex-col justify-center`;

type LogoBadgeProps = {
  name: string;
  logo?: string;
  mark?: string;
  size?: "sm" | "md";
};

function LogoBadge({ name, logo, mark, size = "md" }: LogoBadgeProps) {
  const badgeSize = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  const logoSize = size === "sm" ? "h-7 w-7" : "h-8 w-8";

  return (
    <span
      className={`${badgeSize} flex shrink-0 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white shadow-sm`}
      title={name}
      aria-label={`${name} logo`}
    >
      {logo ? (
        <span
          aria-hidden="true"
          className={`${logoSize} block bg-contain bg-center bg-no-repeat`}
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
    <div className="relative mb-12 max-w-5xl">
      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        <div className="section-readable shadow-watercolor relative z-20 flex w-fit max-w-full items-center gap-3 rounded-full border border-[#BAE6FD] bg-[#F0F9FF]/95 px-5 py-2.5">
          <span className="rope-knot h-3.5 w-3.5 shrink-0 rounded-full" aria-hidden="true" />
          <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.14em] text-[#0369A1] sm:text-sm">
            {title}
          </p>
          <span className="rope-knot absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
        </div>
        <div className="rope-line-x hidden w-12 shrink-0 md:block" aria-hidden="true" />
        <div className="section-readable shadow-watercolor relative z-20 rounded-full border border-[#E2E8F0] bg-white/95 px-6 py-3.5">
          <span className="rope-knot absolute -left-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full md:block" />
          <p className="text-sm leading-relaxed text-[#334155] md:text-base">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 xl:px-12">
      <section
        id="home"
        className={`${homeSectionClass} flex flex-col-reverse items-center justify-between gap-12 md:flex-row`}
      >
        <div className="w-full space-y-6 md:w-1/2">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#BAE6FD] bg-[#F0F9FF]/90 px-4 py-1.5 text-sm font-bold text-[#0284C7] backdrop-blur-sm shadow-sm">
            <span>Open to Work</span>
            <RotatingRoleBadge />
          </div>
          <h1 className="home-title-outline section-readable text-5xl font-extrabold leading-tight text-[#0F172A] md:text-6xl lg:text-7xl">
            I&apos;m Abid Hanan
            <br />
            <span className="home-role-outline text-[#0284C7]">Developer Relations</span>
          </h1>
          <p className="home-copy-outline section-readable max-w-lg text-lg font-bold leading-relaxed text-[#334155]">
            I connect technology, communities, and business goals through clear communication,
            developer education, and meaningful collaboration.
          </p>
        </div>
        <div className="relative isolate flex h-[450px] w-full justify-center overflow-visible md:w-1/2">
          <div className="absolute -left-4 top-24 z-0 rotate-[-12deg] rounded-lg bg-white p-3 pb-8 shadow-xl border border-gray-100 sm:left-[2%] lg:-left-2">
            <div className="relative h-56 w-44 overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src="/home-gemini-seminar.jpg"
                alt="Abid Hanan Wicaksono at a Gemini AI seminar"
                fill
                sizes="384px"
                className="object-cover object-[52%_42%]"
              />
            </div>
          </div>
          <div className="absolute left-[50%] top-4 z-30 -translate-x-1/2 rotate-[2deg] rounded-lg bg-white p-3 pb-8 shadow-2xl border border-gray-100">
            <div className="relative h-64 w-52 overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src="/home-google-office.jpeg"
                alt="Abid Hanan Wicaksono during a Google Office visit"
                fill
                priority
                sizes="384px"
                className="scale-110 object-cover object-[32%_58%]"
              />
            </div>
          </div>
          <div className="absolute left-[64%] top-16 z-10 rotate-[12deg] rounded-lg bg-white p-3 pb-8 shadow-xl border border-gray-100">
            <div className="relative h-56 w-44 overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src="/home-ngabuburit-speaker.jpeg"
                alt="Abid Hanan Wicaksono as a speaker"
                fill
                sizes="384px"
                className="scale-110 object-cover object-[52%_66%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={centeredSectionClass}>
        <div className="relative w-full max-w-5xl mx-auto pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative">
            
            {/* Left Side: Profile Circle */}
            <div className="relative shrink-0 flex flex-col items-center md:pt-16 z-20">
              <div className="relative h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-full border-[6px] border-white shadow-2xl bg-[#E0F2FE]">
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
            <div className="relative flex-1 flex flex-col items-center md:items-start w-full z-10 md:pt-4">
              
              <div className="relative w-full flex flex-col items-center md:items-start">
                
                {/* Pills Row */}
                <div className="flex items-center justify-center md:justify-start whitespace-nowrap z-20 relative md:ml-6">
                  
                  <div className="relative z-20 flex items-center gap-3 rounded-full border border-[#BAE6FD] bg-[#F0F9FF] px-6 py-2.5 shadow-md">
                    <span className="rope-knot h-3.5 w-3.5 shrink-0 rounded-full" aria-hidden="true" />
                    <span className="text-sm md:text-base font-black uppercase tracking-[0.14em] text-[#0369A1]">About Me</span>
                    <div className="rope-knot absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full" />
                  </div>
                  
                  <div className="rope-line-x z-10 w-8 sm:w-16 md:w-20" />

                  <div className="relative flex flex-col items-center z-20">
                    <div className="relative px-6 py-2.5 rounded-full border border-[#E2E8F0] bg-white/95 shadow-md z-20">
                      <div className="rope-knot absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full" />
                      <span className="text-sm md:text-base font-bold text-[#334155]">Identity & DevRel Values</span>
                    </div>
                  </div>

                </div>

                {/* Canvas Box */}
                <div className="shadow-watercolor relative z-20 mt-8 w-full rounded-2xl bg-white p-8 md:p-10">
                  <p className="relative z-10 text-base leading-relaxed text-[#334155] md:text-lg text-justify font-medium">
                    I am Abid Hanan Wicaksono, a Developer Relations professional with a diverse background in technology, business, Web3, blockchain, and digital marketing. I turn complex technical ideas into clear stories, useful resources, and mutually valuable collaboration opportunities while staying grounded in communication, community, and meaningful social impact.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className={centeredSectionClass}>
        <SectionHeader
          title="Background Education"
          summary="The academic background that shapes my foundation, way of thinking, and professional growth direction."
        />
        <div className="relative space-y-6">
          <div className="rope-line-vertical absolute left-[1.35rem] top-3 hidden h-[calc(100%-1.5rem)] md:block" />
          {educationItems.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="relative grid grid-cols-1 gap-5 md:grid-cols-[4rem_1fr]"
            >
              <div className="rope-knot z-10 ml-3 mt-2 h-7 w-7 rounded-full" />
              <div className="shadow-watercolor p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-sm">
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
                        4th Semester
                      </span>
                      <span className="rounded-full border border-[#FEF08A] bg-[#FEF9C3] px-4 py-1.5 text-xs font-bold text-[#A16207]">
                        GPA 3.97
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
          title="Tools & Tech Stack"
          summary="The technologies, frameworks, and platforms that support my workflow across frontend, backend, Web3, and product development."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="shadow-watercolor p-8"
            >
              <h3 className="mb-6 text-2xl font-bold text-[#0F172A]">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.tools.map((tool, toolIndex) => (
                  <div
                    key={tool.name}
                    className={`flex min-h-[7rem] flex-col items-center justify-center gap-3 rounded-xl border px-3 py-4 text-center text-sm font-bold shadow-sm transition-transform hover:-translate-y-1 ${
                      toolTone[(groupIndex + toolIndex) % toolTone.length]
                    }`}
                  >
                    <LogoBadge name={tool.name} logo={tool.logo} mark={tool.mark} size="sm" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className={centeredSectionClass}>
        <SectionHeader
          title="Licenses & Certificates"
          summary="A record of credentials, awards, and learning milestones that validate my skills and professional growth."
        />
        <CertificateMarquee certificates={certificateItems} />
      </section>

      <section id="career" className={centeredSectionClass}>
        <SectionHeader
          title="Career"
          summary="A summary of work experience, creative roles, and professional contributions that shaped my communication, business, and technology skills."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {careerItems.map((item) => (
            <article
              key={`${item.period}-${item.role}-${item.company}`}
              className="shadow-watercolor p-6 transition-transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <LogoBadge
                  name={item.company}
                  logo={item.companyLogo}
                  mark={item.companyMark}
                  size="sm"
                />
                <p className="w-fit rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1 text-right text-xs font-bold text-[#475569]">
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
          ))}
        </div>
      </section>

      <section id="startup" className={centeredSectionClass}>
        <SectionHeader
          title="Startup"
          summary="This section highlights the digital business initiative I am building, from brand identity to product direction."
        />
        <article className="shadow-watercolor relative overflow-hidden p-8 md:p-10">
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto flex w-full max-w-sm items-center justify-center h-full">
              <div className="shadow-watercolor relative z-10 h-64 w-64 rotate-[-3deg] overflow-hidden rounded-2xl bg-white p-6 transition-transform hover:rotate-0 duration-300">
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src="/wiboostore-logo.jpeg"
                    alt="Wiboost Store logo"
                    fill
                    sizes="320px"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="section-readable flex w-fit items-center gap-2 rounded-full border border-[#BAE6FD] bg-[#F0F9FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0369A1] shadow-sm">
                  <span className="rope-knot h-3.5 w-3.5 rounded-full" />
                  Digital Service Map
                </span>
                <div className="rope-line-x h-2 flex-1" aria-hidden="true" />
              </div>
              <h3 className="section-readable mb-4 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
                Wiboost Store
              </h3>
              <p className="section-readable mb-8 max-w-2xl text-lg leading-relaxed text-[#475569]">
                A comprehensive digital service hub in Indonesia for social media growth,
                game top-ups, data packages, and premium apps in one practical place.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {startupServices.map((service) => (
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
                href="https://wiboostore.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#0F172A] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#0284C7] hover:shadow-lg hover:-translate-y-1"
              >
                Visit Wiboost Store
              </a>
            </div>
          </div>
        </article>
      </section>

      <section id="activity" className={centeredSectionClass}>
        <SectionHeader
          title="Activity"
          summary="A collection of community, social, educational, and personal development activities that reflect how I learn and contribute."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activityItems.map((activity) => (
            <article
              key={activity.title}
              className="shadow-watercolor p-5 transition-transform hover:-translate-y-2 flex flex-col h-full"
            >
              <h3 className="mb-3 text-xl font-bold text-[#0F172A]">{activity.title}</h3>
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
          ))}
        </div>
      </section>
    </main>
  );
}
