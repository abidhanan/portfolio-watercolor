import Link from "next/link";
import { SocialLinks } from "./components/social-links";
import {
  activityItems,
  educationItems,
  projectsData,
  statsData,
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
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-20 lg:px-32">
      <section
        id="home"
        className="mb-28 flex scroll-mt-28 flex-col-reverse items-center justify-between gap-12 md:flex-row"
      >
        <div className="w-full space-y-6 md:w-1/2">
          <div className="inline-block rounded-full bg-[#E1E8D5] px-3 py-1 text-sm font-medium text-[#386641] opacity-90">
            I&apos;m Ready For Job <span className="font-bold">Mobile Application</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#1D3557] md:text-6xl">
            I&apos;m M. Fadh Khulloh
            <br />
            <span className="text-[#457B9D]">Full Stack Developer</span>
          </h1>
          <p className="max-w-md text-lg text-[#4A6478]">
            Saya membantu bisnis dan individu membangun website serta solusi digital yang cepat,
            modern, dan mudah digunakan.
          </p>

          <SocialLinks className="pt-2" />

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#projects"
              className="rounded-full border-2 border-[#7A9E7E] px-6 py-2 font-semibold text-[#386641] shadow-sm transition-colors hover:bg-[#E1E8D5]"
            >
              Lihat Project
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-[#1D3557] px-6 py-2 font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative flex h-[400px] w-full justify-center md:w-1/2">
          <div className="shadow-watercolor absolute top-0 z-10 rotate-[-5deg] rounded-sm border border-[#EBE6DD] bg-white p-2">
            <div className="relative flex h-64 w-48 flex-col items-center justify-start overflow-hidden bg-[#EAF2F8] p-4 text-center">
              <p className="relative z-10 mb-2 font-semibold text-[#1D3557]">
                FullStack
                <br />
                Web Developer
              </p>
              <div className="absolute inset-0 top-16 flex items-center justify-center border-t border-[#EBE6DD] bg-[#F4F1EA] text-xs font-medium text-[#457B9D]">
                [Potret Cat Air]
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
          <div className="shadow-watercolor mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#EAF2F8] md:mx-0">
            <span className="text-sm font-medium text-[#457B9D]">[Potret Cat Air]</span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
                About Me
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
                Developer yang suka merapikan ide menjadi produk digital.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#4A6478]">
              Saya M. Fadh Khulloh, Full Stack Developer yang fokus membangun
              website, aplikasi, dan pengalaman digital yang terasa ringan,
              modern, serta mudah digunakan.
            </p>
            <p className="max-w-2xl leading-relaxed text-[#4A6478]">
              Bagian ini bisa kamu isi dengan cerita personal yang lebih lengkap:
              perjalanan belajar, cara bekerja, minat teknologi, dan hal-hal
              yang ingin kamu tonjolkan saat orang mengenal portofoliomu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-5"
            >
              <h3
                className={`mb-1 text-3xl font-bold ${
                  stat.tone === "green" ? "text-[#386641]" : "text-[#1D3557]"
                }`}
              >
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-[#4A6478]">{stat.label}</p>
            </div>
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

      <section id="education" className="mb-28 scroll-mt-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A9E7E]">
            Background Education
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1D3557] md:text-5xl">
            Fondasi belajar yang membentuk cara berpikir dan berkarya.
          </h2>
          <p className="text-lg leading-relaxed text-[#4A6478]">
            Gunakan bagian ini untuk pendidikan formal, bootcamp, kelas,
            sertifikasi, dan proses belajar yang relevan.
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
                {item.year.slice(-2)}
              </div>
              <div className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6">
                <p className="mb-2 text-sm font-semibold text-[#7A9E7E]">{item.year}</p>
                <h3 className="mb-2 text-2xl font-bold text-[#1D3557]">{item.title}</h3>
                <p className="mb-4 font-medium text-[#457B9D]">{item.place}</p>
                <p className="leading-relaxed text-[#4A6478]">{item.desc}</p>
              </div>
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
            Bagian ini disiapkan untuk project, komunitas, workshop, lomba,
            sampai eksplorasi personal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activityItems.map((activity, index) => (
            <article
              key={activity.title}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E1E8D5] bg-[#F6FAEF] text-lg font-bold text-[#386641]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#1D3557]">{activity.title}</h3>
              <p className="leading-relaxed text-[#4A6478]">{activity.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="my-28 scroll-mt-28">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1D3557]">My Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {projectsData.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="shadow-watercolor rounded-xl border border-[#F0EBE1] bg-white p-4 transition-transform hover:-translate-y-1"
            >
              <div className="relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border border-[#F0EBE1] bg-[#F9F7F2]">
                <span className="px-2 text-center text-xs text-[#A5B4C3]">
                  [Miniatur Cat Air
                  <br />
                  {project.title}]
                </span>
              </div>
              <h3 className="mb-1 font-bold text-[#1D3557]">{project.title}</h3>
              <p className="text-xs leading-relaxed text-[#457B9D]">{project.desc}</p>
            </div>
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
