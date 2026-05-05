import Image from "next/image";
import { SocialLinks } from "./components/social-links";
import {
  activityItems,
  careerItems,
  certificateItems,
  educationItems,
  techGroups,
} from "./lib/portfolio-data";

const toolTone = [
  "border-[#E1E8D5] bg-[#F6FAEF] text-[#386641]",
  "border-[#D9E9F2] bg-[#F3FAFD] text-[#457B9D]",
  "border-[#F3DE9E] bg-[#FFF8DF] text-[#946C12]",
  "border-[#EBE6DD] bg-[#F9F7F2] text-[#4A6478]",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[92rem] px-6 py-12 md:px-12 xl:px-16">
      <section
        id="home"
        className="mb-28 flex scroll-mt-28 flex-col-reverse items-center justify-between gap-12 md:flex-row"
      >
        <div className="w-full space-y-6 md:w-1/2">
          <div className="inline-block rounded-full bg-[#E1E8D5] px-3 py-1 text-sm font-medium text-[#386641] opacity-90">
            I&apos;m Ready For Job <span className="font-bold">Mobile Application</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#1D3557] md:text-6xl">
            I&apos;m Abid Hanan Wicaksono
            <br />
            <span className="text-[#457B9D]">Developer Relations</span>
          </h1>
          <p className="max-w-md text-lg text-[#4A6478]">
            I connect technology, communities, and business goals through clear communication,
            developer education, and meaningful collaboration.
          </p>

          <SocialLinks className="pt-2" />
        </div>

        <div className="relative flex h-[400px] w-full justify-center md:w-1/2">
          <div className="shadow-watercolor absolute top-0 z-10 rotate-[-5deg] rounded-sm border border-[#EBE6DD] bg-white p-2">
            <div className="relative flex h-64 w-48 flex-col items-center justify-start overflow-hidden bg-[#EAF2F8] p-4 text-center">
              <p className="relative z-10 mb-2 font-semibold text-[#1D3557]">
                Developer
                <br />
                Relations
              </p>
              <div className="absolute inset-0 top-16 border-t border-[#EBE6DD] bg-[#F4F1EA]">
                <Image
                  src="/abid-profile.jpeg"
                  alt="Abid Hanan Wicaksono"
                  fill
                  priority
                  sizes="384px"
                  className="scale-125 object-cover object-[50%_58%]"
                />
              </div>
            </div>
          </div>
          <div className="shadow-watercolor absolute left-1/2 top-10 z-0 rotate-[5deg] rounded-sm border border-[#EBE6DD] bg-white p-2">
            <div className="relative h-64 w-48 overflow-hidden bg-[#F8F3E9]">
              <div className="absolute inset-0 flex items-center justify-center bg-[#F8F3E9] p-4 text-center text-xs font-medium text-[#4A6478]">
                [Pemandangan Teluk Cat Air]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mb-28 scroll-mt-28">
        <div className="mb-12 grid grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="shadow-watercolor relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-[#EAF2F8] md:mx-0">
            <Image
              src="/abid-profile.jpeg"
              alt="Abid Hanan Wicaksono"
              fill
              sizes="512px"
              className="scale-150 object-cover object-[50%_54%]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
                About Me
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
                Developer Relations yang suka merapikan ide teknis menjadi cerita yang mudah dipahami.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#4A6478]">
              I&apos;m Abid Hanan Wicaksono, a Developer Relations professional
              with a diverse background in technology, business, Web3,
              blockchain, and digital marketing. I enjoy turning complex
              technical ideas into clear stories, useful resources, and
              collaborative opportunities for developers and communities.
            </p>
            <p className="max-w-2xl leading-relaxed text-[#4A6478]">
              I believe strong relationships, open communication, and a
              positive working culture help people reach their best potential.
              Beyond professional work, I also value humanitarian and volunteer
              activities, and I&apos;m always open to connecting, exchanging ideas,
              and creating something impactful together.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Background Education
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Fondasi belajar yang membentuk cara berpikir dan berkarya.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Saat ini saya menempuh studi S1 Ilmu Komputer di Universitas
            Sugeng Hartono sambil mengembangkan minat pada teknologi,
            komunitas, dan komunikasi teknis.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-[#D8E4CC] md:block" />
          {educationItems.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="relative grid grid-cols-1 gap-5 md:grid-cols-[4rem_1fr]"
            >
              <div className="shadow-watercolor z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E8D5] bg-white text-sm font-bold text-[#386641]">
                USH
              </div>
              <div className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-[#E1E8D5] bg-[#F9F7F2] p-3">
                    <Image
                      src={item.logo}
                      alt="Logo Universitas Sugeng Hartono"
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#7A9E7E]">{item.year}</p>
                    <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">{item.title}</h3>
                    <p className="mb-3 font-medium text-[#457B9D]">{item.place}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#D9E9F2] bg-[#F3FAFD] px-3 py-1 text-xs font-bold text-[#457B9D]">
                        Semester 4
                      </span>
                      <span className="rounded-full border border-[#E1E8D5] bg-[#F6FAEF] px-3 py-1 text-xs font-bold text-[#386641]">
                        GPA 3,97
                      </span>
                    </div>
                    <p className="leading-relaxed text-[#4A6478]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Tools & Tech Stack
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Teknologi yang membantu ide bergerak dari sketsa ke aplikasi.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Daftar ini bisa kamu update ketika skill, framework, atau workflow
            baru masuk ke portofolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6"
            >
              <h3 className="mb-5 text-2xl font-bold text-[#1D3557]">{group.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.tools.map((tool, toolIndex) => (
                  <div
                    key={tool}
                    className={`flex h-20 items-center justify-center rounded-xl border px-3 text-center text-sm font-bold ${
                      toolTone[(groupIndex + toolIndex) % toolTone.length]
                    }`}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            License & Certificate
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Bukti belajar dan validasi skill yang mendukung perjalanan Developer Relations.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Tambahkan lisensi, sertifikat kursus, bootcamp, kompetisi, atau
            credential lain yang ingin kamu tampilkan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {certificateItems.map((certificate, index) => (
            <article
              key={`${certificate.title}-${certificate.year}`}
              className="shadow-watercolor grid grid-cols-1 gap-6 rounded-xl border border-[#F0EBE1] bg-white p-5 md:grid-cols-[0.85fr_1.15fr] md:p-6"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[#EBE6DD] bg-[#F9F7F2]">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`Sertifikat ${certificate.title}`}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-cover object-[50%_46%]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[#FFF8DF] p-6 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#946C12]">
                      Certificate
                    </p>
                    <p className="text-2xl font-bold leading-tight text-[#1D3557]">
                      {certificate.title}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#457B9D]">
                      Image pending
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F3DE9E] bg-[#FFF8DF] text-lg font-bold text-[#946C12]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="rounded-full border border-[#E1E8D5] bg-[#F6FAEF] px-3 py-1 text-sm font-bold text-[#386641]">
                    {certificate.year}
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">
                  {certificate.title}
                </h3>
                <p className="mb-4 font-semibold text-[#457B9D]">{certificate.issuer}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#D9E9F2] bg-[#F3FAFD] px-3 py-1 text-xs font-bold text-[#457B9D]">
                    {certificate.issued}
                  </span>
                  <span className="rounded-full border border-[#E1E8D5] bg-[#F6FAEF] px-3 py-1 text-xs font-bold text-[#386641]">
                    ID Kredensial {certificate.credentialId}
                  </span>
                </div>
                <p className="leading-relaxed text-[#4A6478]">{certificate.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="career" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Career
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Pengalaman membangun audiens, brand, dan produk digital.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Perjalanan karier saya menggabungkan content creation, social media
            marketing, dan entrepreneurship untuk mendorong pertumbuhan digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {careerItems.map((item) => (
            <article
              key={`${item.period}-${item.role}-${item.company}`}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <p className="mb-4 w-fit rounded-full bg-[#E1E8D5] px-3 py-1 text-sm font-bold text-[#386641]">
                {item.period}
              </p>
              <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">{item.role}</h3>
              <p className="mb-4 font-semibold text-[#457B9D]">{item.company}</p>
              <p className="mb-5 leading-relaxed text-[#4A6478]">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#D9E9F2] bg-[#F3FAFD] px-3 py-1 text-xs font-bold text-[#457B9D]"
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
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Start Up
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Exploring digital products, creative business, and community-led growth.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            A space for startup ideas, digital product experiments, and business
            initiatives that combine technology, marketing, and community insight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Digital Products",
              desc: "Building scalable online products with clear value, practical use cases, and growth potential.",
            },
            {
              title: "Growth Strategy",
              desc: "Combining content, social media analytics, and campaign strategy to reach the right audience.",
            },
            {
              title: "Web3 & AI Exploration",
              desc: "Exploring emerging technology as a foundation for future-facing products and communities.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F3DE9E] bg-[#FFF8DF] text-lg font-bold text-[#946C12]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#1D3557]">{item.title}</h3>
              <p className="leading-relaxed text-[#4A6478]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="activity" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Activity
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Aktivitas yang menunjukkan proses tumbuh, mencoba, dan berkolaborasi.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Kegiatan sosial, komunitas, workshop, dan eksplorasi personal yang
            membentuk cara saya berkontribusi di dalam maupun luar dunia digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activityItems.map((activity, index) => (
            <article
              key={activity.title}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              {activity.image ? (
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-[#EBE6DD] bg-[#F9F7F2]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
              ) : null}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E1E8D5] bg-[#F6FAEF] text-lg font-bold text-[#386641]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#1D3557]">{activity.title}</h3>
              {activity.organization ? (
                <p className="mb-2 font-semibold text-[#457B9D]">{activity.organization}</p>
              ) : null}
              {activity.category ? (
                <p className="mb-4 w-fit rounded-full border border-[#E1E8D5] bg-[#F6FAEF] px-3 py-1 text-xs font-bold text-[#386641]">
                  {activity.category}
                </p>
              ) : null}
              <p className="leading-relaxed text-[#4A6478]">{activity.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mb-20 max-w-2xl scroll-mt-28 text-center">
        <h2 className="mb-8 text-3xl font-bold text-[#1D3557]">Let&apos;s Connect</h2>
        <form className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border-2 border-[#E1E8D5] bg-white p-3 text-[#1D3557] shadow-sm transition-colors placeholder:text-[#A5B4C3] focus:border-[#7A9E7E] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-2 border-[#E1E8D5] bg-white p-3 text-[#1D3557] shadow-sm transition-colors placeholder:text-[#A5B4C3] focus:border-[#7A9E7E] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg border-2 border-[#E1E8D5] bg-white p-3 text-[#1D3557] shadow-sm transition-colors placeholder:text-[#A5B4C3] focus:border-[#7A9E7E] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7A9E7E] to-[#457B9D] py-3 font-bold text-white opacity-90 shadow-md transition-opacity hover:opacity-100"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Send Message
          </button>
        </form>

        <SocialLinks size="sm" className="mb-6 mt-12 justify-center" />
      </section>
    </main>
  );
}
