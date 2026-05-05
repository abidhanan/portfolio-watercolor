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

// Palet warna pesisir dan laut
const toolTone = [
  "border-[#BEE3F8] bg-[#EBF8FF] text-[#2C5282]", // Biru buih laut
  "border-[#90CDF4] bg-[#E2F1F8] text-[#2B6CB0]", // Biru ombak
  "border-[#F6E09E] bg-[#FEF8E7] text-[#977418]", // Pasir pantai
  "border-[#DCEBF7] bg-[#F0F7FA] text-[#334E68]", // Awan putih
];

const startupServices = [
  "Layanan suntik sosmed",
  "Top up game",
  "Paket data",
  "Aplikasi premium",
];

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
      className={`${badgeSize} flex shrink-0 items-center justify-center rounded-2xl border border-[#DCEBF7] bg-white shadow-sm`}
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
        <span className="text-sm font-black text-[#2B6CB0]">{mark ?? name.slice(0, 2)}</span>
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
    <div className="relative mb-8 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-[max-content_1fr] md:items-center">
      <div className="section-readable shadow-watercolor flex w-fit max-w-full items-center gap-3 rounded-full border border-[#90CDF4] bg-[#EBF8FF]/95 px-4 py-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4299E1]" aria-hidden="true" />
        <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.14em] text-[#0F5D91] sm:text-sm">
          {title}
        </p>
      </div>
      <div className="section-readable shadow-watercolor relative rounded-xl border border-[#DCEBF7] bg-white/90 px-4 py-3">
        <span className="absolute -left-3 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-[#90CDF4] md:block" />
        <p className="text-sm leading-relaxed text-[#102A43] md:text-base">{summary}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 xl:px-12">
      <section
        id="home"
        className="mb-28 flex scroll-mt-28 flex-col-reverse items-center justify-between gap-12 md:flex-row"
      >
        <div className="w-full space-y-6 md:w-1/2">
          <div className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full bg-[#BEE3F8] px-3 py-1 text-sm font-medium text-[#2C5282] opacity-90">
            <span>I&apos;m Ready For Job</span>
            <RotatingRoleBadge />
          </div>
          <h1 className="section-readable text-4xl font-bold leading-tight text-[#102A43] md:text-6xl">
            I&apos;m Abid Hanan Wicaksono
            <br />
            <span className="text-[#2B6CB0]">Developer Relations</span>
          </h1>
          <p className="section-readable max-w-md text-lg text-[#102A43]">
            I connect technology, communities, and business goals through clear communication,
            developer education, and meaningful collaboration.
          </p>
        </div>
        <div className="relative isolate flex h-[450px] w-full justify-center overflow-visible md:w-1/2">
          <div className="shadow-watercolor absolute -left-4 top-24 z-0 rotate-[-15deg] rounded-sm border border-[#DCEBF7] bg-white p-2 opacity-95 sm:left-[2%] lg:-left-2">
            <div className="relative h-64 w-48 overflow-hidden bg-[#D3EBF9]">
              <Image
                src="/home-gemini-seminar.jpg"
                alt="Abid Hanan Wicaksono saat seminar Gemini AI"
                fill
                sizes="384px"
                className="object-cover object-[52%_42%]"
              />
            </div>
          </div>
          <div className="shadow-watercolor absolute left-[50%] top-4 z-30 -translate-x-1/2 rotate-[-5deg] rounded-sm border border-[#DCEBF7] bg-white p-2">
            <div className="relative h-64 w-48 overflow-hidden bg-[#D3EBF9]">
              <Image
                src="/home-google-office.jpeg"
                alt="Abid Hanan Wicaksono saat Google Office Visit"
                fill
                priority
                sizes="384px"
                className="scale-110 object-cover object-[32%_58%]"
              />
            </div>
          </div>
          <div className="shadow-watercolor absolute left-[64%] top-16 z-10 rotate-[7deg] rounded-sm border border-[#DCEBF7] bg-white p-2">
            <div className="relative h-64 w-48 overflow-hidden bg-[#FEF8E7]">
              <Image
                src="/home-ngabuburit-speaker.jpeg"
                alt="Abid Hanan Wicaksono saat menjadi pembicara"
                fill
                sizes="384px"
                className="scale-110 object-cover object-[52%_66%]"
              />
            </div>
          </div>
          <p className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/80 bg-white/88 px-5 py-2 text-center text-sm font-bold text-[#102A43] shadow-sm backdrop-blur">
            Developer Relations
          </p>
        </div>
      </section>

      <section id="about" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="About Me"
          summary="I'm Abid Hanan Wicaksono, a Developer Relations professional with a diverse background in technology, business, Web3, blockchain, and digital marketing who turns complex technical ideas into clear stories, useful resources, and collaborative opportunities while staying grounded in communication, community, and meaningful social impact."
        />
        <div className="mb-12 flex justify-center md:justify-start">
          <div className="shadow-watercolor relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-[#D3EBF9] md:mx-0">
            <Image
              src="/abid-profile.jpeg"
              alt="Abid Hanan Wicaksono"
              fill
              sizes="512px"
              className="scale-150 object-cover object-[50%_54%]"
            />
          </div>
        </div>
      </section>

      <section id="education" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="Background Education"
          summary="Riwayat pendidikan yang menjadi fondasi akademik, cara berpikir, dan arah pengembangan profesional saya."
        />
        <div className="relative space-y-6">
          <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-[#BEE3F8] md:block" />
          {educationItems.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="relative grid grid-cols-1 gap-5 md:grid-cols-[4rem_1fr]"
            >
              <div className="shadow-watercolor z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#BEE3F8] bg-white">
                <span className="h-3 w-3 rounded-full bg-[#4299E1]" />
              </div>
              <div className="shadow-watercolor rounded-xl border border-[#CFE2F3] bg-white p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-[#BEE3F8] bg-[#F0F7FA] p-3">
                    <Image
                      src={item.logo}
                      alt="Logo Universitas Sugeng Hartono"
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#4299E1]">{item.year}</p>
                    <h3 className="mb-2 text-2xl font-bold text-[#102A43]">{item.title}</h3>
                    <p className="mb-3 font-medium text-[#2B6CB0]">{item.place}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#90CDF4] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2B6CB0]">
                        Semester 4
                      </span>
                      <span className="rounded-full border border-[#BEE3F8] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2C5282]">
                        GPA 3,97
                      </span>
                    </div>
                    <p className="leading-relaxed text-[#334E68]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="Tools & Tech Stack"
          summary="Kumpulan teknologi, framework, dan platform yang mendukung proses membangun produk digital dari sisi frontend, backend, Web3, dan workflow."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="shadow-watercolor rounded-xl border border-[#CFE2F3] bg-white p-6"
            >
              <h3 className="mb-5 text-2xl font-bold text-[#102A43]">{group.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.tools.map((tool, toolIndex) => (
                  <div
                    key={tool.name}
                    className={`flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border px-3 text-center text-sm font-bold ${
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

      <section id="certificates" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="License & Certificate"
          summary="Arsip credential dan penghargaan yang merekam proses belajar, validasi kemampuan, serta pencapaian profesional."
        />
        <CertificateMarquee certificates={certificateItems} />
      </section>

      <section id="career" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="Career"
          summary="Rangkuman pengalaman kerja, peran kreatif, dan kontribusi profesional yang membentuk kemampuan komunikasi, bisnis, dan teknologi saya."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {careerItems.map((item) => (
            <article
              key={`${item.period}-${item.role}-${item.company}`}
              className="shadow-watercolor rounded-xl border border-[#CFE2F3] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <LogoBadge
                  name={item.company}
                  logo={item.companyLogo}
                  mark={item.companyMark}
                  size="sm"
                />
                <p className="w-fit rounded-full bg-[#BEE3F8] px-3 py-1 text-right text-xs font-bold text-[#2C5282]">
                  {item.period}
                </p>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#102A43]">{item.role}</h3>
              <p className="mb-4 font-semibold text-[#2B6CB0]">{item.company}</p>
              <p className="mb-5 leading-relaxed text-[#334E68]">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#90CDF4] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2B6CB0]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="startup" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="Start Up"
          summary="Bagian Start Up menampilkan inisiatif bisnis digital yang sedang dibangun, mulai dari identitas brand sampai arah pengembangannya."
        />
        <article className="shadow-watercolor grid grid-cols-1 overflow-hidden rounded-xl border border-[#CFE2F3] bg-white/95 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex min-h-[300px] items-center justify-center border-b border-[#CFE2F3] bg-[#EBF8FF] p-8 lg:border-b-0 lg:border-r">
            <div className="shadow-watercolor relative h-56 w-56 overflow-hidden rounded-3xl border border-white bg-white p-4">
              <Image
                src="/wiboostore-logo.jpeg"
                alt="Logo Wiboost Store"
                fill
                sizes="320px"
                className="object-contain p-4"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <p className="mb-3 w-fit rounded-full border border-[#90CDF4] bg-[#EBF8FF] px-3 py-1 text-sm font-bold text-[#2B6CB0]">
              Digital Service Platform
            </p>
            <h3 className="mb-3 text-3xl font-bold leading-tight text-[#102A43] md:text-4xl">
              Wiboost Store
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-[#334E68]">
              Pusat layanan digital terlengkap di Indonesia yang membantu
              pengguna memenuhi kebutuhan digital harian secara praktis, mulai
              dari pertumbuhan sosial media hingga produk digital premium.
            </p>
            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {startupServices.map((service, index) => (
                <div
                  key={service}
                  className={`rounded-xl border px-4 py-3 text-sm font-bold ${
                    toolTone[index % toolTone.length]
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
            <a
              href="https://wiboostore.com"
              target="_blank"
              rel="noreferrer"
              className="w-fit bg-gradient-to-r from-[#63B3ED] to-[#2B6CB0] px-6 py-3 font-bold text-white opacity-90 shadow-md transition-opacity hover:opacity-100"
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              Visit Wiboost Store
            </a>
          </div>
        </article>
      </section>

      <section id="activity" className="mb-28 scroll-mt-28">
        <SectionHeader
          title="Activity"
          summary="Catatan aktivitas komunitas, sosial, edukasi, dan pengembangan diri yang memperlihatkan cara saya belajar serta berkontribusi."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activityItems.map((activity) => (
            <article
              key={activity.title}
              className="shadow-watercolor rounded-xl border border-[#CFE2F3] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              {activity.image ? (
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#DCEBF7] bg-[#F0F7FA]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
              ) : null}
              <h3 className="mb-3 text-2xl font-bold text-[#102A43]">{activity.title}</h3>
              {activity.organization ? (
                <p className="mb-2 font-semibold text-[#2B6CB0]">{activity.organization}</p>
              ) : null}
              {activity.category ? (
                <p className="mb-4 w-fit rounded-full border border-[#BEE3F8] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2C5282]">
                  {activity.category}
                </p>
              ) : null}
              <p className="leading-relaxed text-[#334E68]">{activity.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
