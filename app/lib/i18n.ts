import {
  activityItems,
  careerItems,
  certificateItems,
  educationItems,
  techGroups,
} from "./portfolio-data";

export type Language = "en" | "id";

export const languageOptions: { code: Language; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

export const navSections = [
  { key: "home", href: "/#home" },
  { key: "about", href: "/#about" },
  { key: "education", href: "/#education" },
  { key: "tools", href: "/#tools" },
  { key: "certificates", href: "/#certificates" },
  { key: "career", href: "/#career" },
  { key: "startup", href: "/#startup" },
  { key: "activity", href: "/#activity" },
  { key: "contact", href: "/#contact" },
] as const;

type NavKey = (typeof navSections)[number]["key"];

const uiText = {
  en: {
    languageToggle: {
      label: "Language",
    },
    brand: {
      prefix: "AHAWI",
      accent: "Portfolio",
    },
    nav: {
      home: "Home",
      about: "About Me",
      education: "Education",
      tools: "Tools",
      certificates: "Certificate",
      career: "Career",
      startup: "Startup",
      activity: "Activity",
      contact: "Contact",
    } satisfies Record<NavKey, string>,
    home: {
      badge: "Open to Work",
      intro: "I'm Abid Hanan",
      role: "Developer Relations",
      description:
        "I connect technology, communities, and business goals through clear communication, developer education, and meaningful collaboration.",
      roles: ["Developer Relations", "Full Stack Developer", "Blockchain Developer"],
    },
    about: {
      eyebrow: "About Me",
      summaryLabel: "Identity & DevRel Values",
      body: "I am Abid Hanan Wicaksono, a Developer Relations professional with a diverse background in technology, business, Web3, blockchain, and digital marketing. I turn complex technical ideas into clear stories, useful resources, and mutually valuable collaboration opportunities while staying grounded in communication, community, and meaningful social impact.",
    },
    sections: {
      education: {
        title: "Background Education",
        summary:
          "The academic background that shapes my foundation, way of thinking, and professional growth direction.",
      },
      tools: {
        title: "Tools & Tech Stack",
        summary:
          "The technologies, frameworks, and platforms that support my workflow across frontend, backend, Web3, and product development.",
      },
      certificates: {
        title: "Licenses & Certificates",
        summary:
          "A record of credentials, awards, and learning milestones that validate my skills and professional growth.",
      },
      career: {
        title: "Career",
        summary:
          "A summary of work experience, creative roles, and professional contributions that shaped my communication, business, and technology skills.",
      },
      startup: {
        title: "Startup",
        summary:
          "This section highlights the digital business initiatives I am building, from brand identity to product direction.",
      },
      activity: {
        title: "Activity",
        summary:
          "A collection of community, social, educational, and personal development activities that reflect how I learn and contribute.",
      },
    },
    education: {
      semester: "4th Semester",
      gpa: "GPA 3.97",
    },
    certificates: {
      openLabel: "Open certificate",
      imageAlt: "Certificate",
      fallbackTitle: "Certificate",
      imagePending: "Image pending",
      closeLabel: "Close certificate",
    },
    startup: {
      items: [
        {
          title: "Wiboost Store",
          description:
            "A comprehensive digital service hub in Indonesia for social media growth, game top-ups, data packages, and premium apps in one practical place.",
          services: [
            "Social media boosting services",
            "Game top-ups",
            "Data packages",
            "Premium apps",
          ],
          visit: "Visit Wiboost Store",
          href: "https://wiboostore.com",
          logo: "/wiboostore-logo.jpeg",
          logoAlt: "Wiboost Store logo",
        },
        {
          title: "Nocoding",
          description:
            "A website development service for different website needs, helping people and brands build clean, practical, and ready-to-use websites.",
          services: [
            "Company profile websites",
            "Portfolio websites",
            "Online store websites",
            "Landing pages",
          ],
          visit: "Visit Nocoding",
          href: "https://nocoding.web.id",
          logo: "/nocoding-logo.jpeg",
          logoAlt: "Nocoding logo",
        },
      ],
    },
    footer: {
      motivation: "\"Every difficulty is followed by ease.\"",
      contact: "Contact",
      connect: "Let's Connect",
      copyright: "© 2026 Abid Hanan Wicaksono - Made with love.",
    },
  },
  id: {
    languageToggle: {
      label: "Bahasa",
    },
    brand: {
      prefix: "AHAWI",
      accent: "Portofolio",
    },
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      education: "Pendidikan",
      tools: "Tools",
      certificates: "Sertifikat",
      career: "Karier",
      startup: "Startup",
      activity: "Aktivitas",
      contact: "Kontak",
    } satisfies Record<NavKey, string>,
    home: {
      badge: "Terbuka untuk Kerja",
      intro: "Saya Abid Hanan",
      role: "Developer Relations",
      description:
        "Saya menghubungkan teknologi, komunitas, dan tujuan bisnis melalui komunikasi yang jelas, edukasi developer, dan kolaborasi yang bermakna.",
      roles: ["Developer Relations", "Full Stack Developer", "Blockchain Developer"],
    },
    about: {
      eyebrow: "Tentang Saya",
      summaryLabel: "Identitas & Nilai DevRel",
      body: "Saya Abid Hanan Wicaksono, seorang profesional Developer Relations dengan latar belakang beragam di bidang teknologi, bisnis, Web3, blockchain, dan digital marketing. Saya mengubah ide teknis yang kompleks menjadi cerita yang jelas, sumber daya yang berguna, dan peluang kolaborasi yang saling bernilai, dengan tetap berpijak pada komunikasi, komunitas, dan dampak sosial yang bermakna.",
    },
    sections: {
      education: {
        title: "Latar Pendidikan",
        summary:
          "Latar akademik yang membentuk fondasi, cara berpikir, dan arah pertumbuhan profesional saya.",
      },
      tools: {
        title: "Tools & Tech Stack",
        summary:
          "Teknologi, framework, dan platform yang mendukung workflow saya di frontend, backend, Web3, dan pengembangan produk.",
      },
      certificates: {
        title: "Lisensi & Sertifikat",
        summary:
          "Catatan kredensial, penghargaan, dan capaian belajar yang memvalidasi skill serta pertumbuhan profesional saya.",
      },
      career: {
        title: "Karier",
        summary:
          "Ringkasan pengalaman kerja, peran kreatif, dan kontribusi profesional yang membentuk skill komunikasi, bisnis, dan teknologi saya.",
      },
      startup: {
        title: "Startup",
        summary:
          "Bagian ini menampilkan inisiatif bisnis digital yang sedang saya bangun, dari identitas brand sampai arah produk.",
      },
      activity: {
        title: "Aktivitas",
        summary:
          "Kumpulan aktivitas komunitas, sosial, edukasi, dan pengembangan diri yang mencerminkan cara saya belajar dan berkontribusi.",
      },
    },
    education: {
      semester: "Semester 4",
      gpa: "IPK 3,97",
    },
    certificates: {
      openLabel: "Buka sertifikat",
      imageAlt: "Sertifikat",
      fallbackTitle: "Sertifikat",
      imagePending: "Gambar belum tersedia",
      closeLabel: "Tutup sertifikat",
    },
    startup: {
      items: [
        {
          title: "Wiboost Store",
          description:
            "Pusat layanan digital lengkap di Indonesia untuk pertumbuhan media sosial, top up game, paket data, dan aplikasi premium dalam satu tempat praktis.",
          services: [
            "Layanan suntik sosmed",
            "Top up game",
            "Paket data",
            "Aplikasi premium",
          ],
          visit: "Kunjungi Wiboost Store",
          href: "https://wiboostore.com",
          logo: "/wiboostore-logo.jpeg",
          logoAlt: "Logo Wiboost Store",
        },
        {
          title: "Nocoding",
          description:
            "Jasa pembuatan segala jenis website untuk membantu personal, bisnis, dan brand membangun website yang rapi, praktis, dan siap digunakan.",
          services: [
            "Website company profile",
            "Website portofolio",
            "Website toko online",
            "Landing page",
          ],
          visit: "Kunjungi Nocoding",
          href: "https://nocoding.web.id",
          logo: "/nocoding-logo.jpeg",
          logoAlt: "Logo Nocoding",
        },
      ],
    },
    footer: {
      motivation: "\"Setiap kesulitan pasti ada kemudahan.\"",
      contact: "Kontak",
      connect: "Mari Terhubung",
      copyright: "© 2026 Abid Hanan Wicaksono - Dibuat dengan cinta.",
    },
  },
} as const;

const techGroupTitlesId: Record<string, string> = {
  "Web Fundamentals": "Dasar Web",
  "Programming Languages": "Bahasa Pemrograman",
  "Frontend Frameworks & UI": "Framework Frontend & UI",
  "Backend, API & Database": "Backend, API & Database",
  "Smart Contract Tooling": "Tools Smart Contract",
  "Blockchain Ecosystems & SDK": "Ekosistem Blockchain & SDK",
  "Design & Collaboration": "Desain & Kolaborasi",
  "Deployment & Developer Workflow": "Deployment & Workflow Developer",
  "Business & Service Integrations": "Integrasi Bisnis & Layanan",
};

const educationId: Partial<(typeof educationItems)[number]>[] = [
  {
    year: "2024 - Sekarang",
    title: "S1 Ilmu Komputer",
    place: "Universitas Sugeng Hartono",
    desc: "Mahasiswa semester 4 Ilmu Komputer dengan IPK 3,97, berfokus pada fondasi ilmu komputer, teknologi digital, komunikasi teknis, dan pertumbuhan profesional yang mendukung jalur Developer Relations.",
  },
];

const careerId: Partial<(typeof careerItems)[number]>[] = [
  {
    period: "Apr 2026 - Sekarang",
    company: "ARMchain - Paruh Waktu",
    desc: "Memperkenalkan solusi teknologi ARMchain kepada audiens global, mengedukasi komunitas tentang inovasi blockchain, dan mendukung pertumbuhan ekosistem melalui inisiatif strategis serta networking.",
    highlights: ["ARMchain", "Edukasi blockchain", "Pertumbuhan ekosistem"],
  },
  {
    period: "Jun 2023 - Sekarang",
    company: "TikTok - Paruh Waktu",
    desc: "Content creator di TikTok dengan fokus pada analitik media sosial untuk meningkatkan engagement dan visibilitas. Terampil memantau performa dan mengoptimalkan strategi konten untuk memperluas jangkauan serta interaksi brand.",
    highlights: ["TikTok", "Optimasi konten", "Pertumbuhan audiens"],
  },
  {
    period: "Jun 2023 - Sekarang",
    company: "TikTok - Paruh Waktu",
    desc: "Berpengalaman dalam digital marketing sebagai affiliator, memanfaatkan TikTok untuk mendorong promosi produk dan penjualan melalui kampanye yang relevan dengan audiens serta berfokus pada konversi.",
    highlights: ["Affiliate marketing", "Promosi produk", "Konversi"],
  },
  {
    period: "Jun 2023 - Sekarang",
    company: "YouTube - Paruh Waktu",
    desc: "Content creator di YouTube yang memanfaatkan analitik media sosial untuk mengembangkan channel dan meningkatkan engagement penonton. Berfokus pada strategi konten berbasis performa dan insight audiens.",
    highlights: ["YouTube", "Insight audiens", "Pertumbuhan channel"],
  },
  {
    period: "Apr 2022 - Sekarang",
    role: "Entrepreneur",
    company: "Instagram - Paruh Waktu",
    desc: "Founder dan entrepreneur yang berfokus pada creative entrepreneurship serta digital marketing untuk produk digital. Mengembangkan dan memasarkan solusi digital yang mendorong engagement pelanggan dan pertumbuhan penjualan.",
    highlights: ["Entrepreneurship", "Produk digital", "Pertumbuhan penjualan"],
  },
  {
    period: "Mei 2020 - Sekarang",
    company: "Instagram - Paruh Waktu",
    desc: "Berpengalaman dalam digital marketing, khususnya strategi media sosial dan manajemen kampanye. Berfokus menghadirkan solusi pemasaran yang efektif untuk brand seperti Scarlett Whitening dan meningkatkan brand awareness.",
    highlights: ["Digital marketing", "Manajemen kampanye", "Brand awareness"],
  },
  {
    period: "Mei 2019 - Sekarang",
    company: "Instagram - Paruh Waktu",
    desc: "Content creator dengan keahlian pada analitik media sosial, peningkatan engagement, dan pembangunan audiens yang loyal. Terampil membuat konten berbasis data untuk meningkatkan visibilitas dan interaksi.",
    highlights: ["Instagram", "Strategi konten", "Analitik sosial"],
  },
  {
    period: "Des 2025 - Feb 2026",
    company: "FLOQ - Kontrak",
    desc: "Berkolaborasi dengan FLOQ untuk menyederhanakan pemahaman trading bagi pemula melalui konten media sosial yang menarik, sekaligus mendorong brand awareness dan pertumbuhan pengguna organik.",
    highlights: ["Ambassador", "Edukasi trading", "Brand awareness"],
  },
  {
    period: "Okt 2025 - Feb 2026",
    company: "Coinversity - Paruh Waktu",
    desc: "Menjembatani pemahaman menuju masa depan internet melalui edukasi Web3 yang sederhana, akurat, dan inspiratif untuk semua orang.",
    highlights: ["Coinversity", "Edukasi Web3", "Marketing"],
  },
  {
    period: "Sep 2025 - Feb 2026",
    company: "Google - Kontrak",
    desc: "Memimpin adopsi Google AI di kampus selama satu semester dengan menciptakan dampak positif melalui leadership, networking, kreativitas, dan komunikasi digital.",
    highlights: ["Google AI", "Leadership kampus", "Komunikasi digital"],
  },
  {
    period: "Jun 2022 - Jun 2024",
    company: "Shopee - Paruh Waktu",
    desc: "Affiliator di Shopee yang mempromosikan produk melalui kampanye digital marketing strategis. Berpengalaman mengkurasi koleksi produk dan mendorong penjualan melalui affiliate marketing.",
    highlights: ["Shopee", "Kampanye afiliasi", "Kurasi produk"],
  },
];

const certificateId: Partial<(typeof certificateItems)[number]>[] = [
  {
    title: "Certificate of Web3 University Tour",
    issuer: "Coinversity",
    issued: "Diterbitkan Mei 2026",
    credentialId: "Associate",
    desc: "Sebagai pengakuan atas peran sebagai Associate dalam Web3 University Tour, berkontribusi pada keberhasilan pelaksanaan kegiatan program dan mendukung koordinasi inisiatif acara.",
  },
  {
    title: "Indeks Prestasi Terbaik 3,97/4,00",
    issuer: "Universitas Sugeng Hartono",
    issued: "Diterbitkan Feb 2026",
    desc: "Sertifikat Indeks Prestasi Terbaik untuk Program Studi Ilmu Komputer, Fakultas Teknologi, Hukum, dan Bisnis, Universitas Sugeng Hartono, Semester Ganjil 2025/2026.",
  },
  {
    issued: "Sertifikat Penyelesaian Workshop",
    desc: "Berhasil menyelesaikan Sui Developer Workshop modul 1-5, termasuk konsep dasar, pengembangan langsung, dan implementasi praktis dalam ekosistem Sui.",
  },
  {
    issuer: "BISA AI Academy (PT BISA Artifisial Indonesia)",
    issued: "Diterbitkan Jan 2026",
    desc: "Sertifikat Data Science dari BISA AI Academy karena telah menyelesaikan kelas gratis dengan materi Data Science.",
  },
  {
    issuer: "Universitas Mercu Buana",
    issued: "Diterbitkan Jan 2026",
    desc: "Sertifikat partisipasi IDEONIC 2026 International Competition \"Inspiring Ideas, Shaping the Future\" yang diselenggarakan Universitas Mercu Buana (UMB), Jakarta, Indonesia.",
  },
  {
    title: "Certificate of Graduation",
    issued: "Google Student Ambassador",
    desc: "Sertifikat penyelesaian atas partisipasi sebagai Google Student Ambassador, terpilih dari 12.000 mahasiswa nasional, serta kepemimpinan dalam mendorong adopsi Google AI di komunitas kampus.",
  },
  {
    issued: "Diterbitkan Okt 2025",
    credentialId: "Kedaluwarsa Okt 2028",
    desc: "Sertifikat Gemini Student karena telah menunjukkan pengetahuan, keterampilan, dan kompetensi dasar untuk menggunakan Google AI.",
  },
  {
    issued: "Diterbitkan Agu 2025",
    desc: "Sertifikat Konco Konco Ngonten dalam acara Projek-D VOL.4 2025.",
  },
  {
    issued: "Diterbitkan Agu 2025",
    desc: "Sertifikat 0G Builder sebagai Certified 0G Builder.",
  },
  {
    issued: "Diterbitkan Agu 2025",
    desc: "Sertifikat 0G Learner sebagai Certified 0G Learner.",
  },
  {
    issued: "Diterbitkan Agu 2025",
    desc: "Sertifikat Ethereum Builder sebagai Certified Ethereum Builder.",
  },
  {
    issued: "Diterbitkan Jun 2025",
    desc: "Sertifikat Ethereum Learner sebagai Certified Ethereum Learner.",
  },
  {
    issued: "Diterbitkan Mei 2025",
    desc: "Sertifikat International Youthpreuner Competition atas pencapaian Bronze Medal.",
  },
  {
    issued: "Diterbitkan Apr 2025",
    desc: "Sertifikat peserta Web3 University Tour Yogyakarta, seminar edukatif yang diselenggarakan oleh Binance Academy, Tokocrypto, dan Coinvestasi.",
  },
  {
    issued: "Diterbitkan Des 2024",
    desc: "Sertifikat kehadiran untuk acara Empowering Industries with AI: Strategies for the New Era of Cyber Security.",
  },
];

const activityId: Partial<(typeof activityItems)[number]>[] = [
  {
    title: "Together for Humanity: Membagikan 10.000 Paket Makanan di Solo",
    organization: "Palang Merah Indonesia (PMI)",
    category: "Benteng Vastenburg",
    desc: "Berkontribusi sebagai perwakilan KSR Unit Markas PMI Surakarta dalam distribusi 10.000 paket makanan untuk masyarakat yang membutuhkan, diselenggarakan oleh komunitas Solo Bersama Selamanya di Benteng Vastenburg. Inisiatif ini memperkuat komitmen saya terhadap aksi kemanusiaan, solidaritas, dan kepedulian sosial.",
  },
  {
    title: "Program Pelatihan Kewirausahaan Pemuda 2025",
    organization: "Dispora & Pemerintah Kota Surakarta",
    desc: "Mengikuti Program Pelatihan Kewirausahaan Pemuda pada 14-16 April 2025 yang dirancang untuk membangun karakter dan keterampilan dasar kewirausahaan bagi anak muda. Program ini menghadirkan inspirasi dari pemimpin kota dan entrepreneur muda, lalu ditutup dengan kunjungan ke Griya Dhahar RB pada 17 April 2025 sebagai contoh pengelolaan bisnis kuliner yang inovatif dan berkelanjutan.",
  },
  {
    title: "WEB3 University Tour 2025",
    organization: "Coinvestasi, Binance Academy, dan Tokocrypto",
    category: "Universitas Gadjah Mada",
    desc: "Mengikuti WEB3 University Tour pada Selasa, 29 April 2025 di Universitas Gadjah Mada, mendapatkan insight tentang teknologi blockchain, perkembangan ekosistem Web3, dan peluang karier di industri crypto serta ekonomi digital. Acara ini juga menjadi kesempatan untuk terhubung dengan para pakar industri dan komunitas Web3 dari berbagai latar belakang.",
  },
  {
    title: "Inauguration Day Google Student Ambassador",
    organization: "Google Indonesia",
    category: "MGP Space, SCBD Park, Jakarta Selatan",
    desc: "Mengikuti inaugurasi 800 Google Student Ambassador dari seluruh Indonesia pada Senin, 29 September 2025. Acara ini memperluas networking saya dan memperdalam pemahaman tentang fitur Gemini AI yang nantinya dibagikan kepada teman-teman di kampus.",
  },
  {
    title: "Google Office Visit",
    organization: "Google Indonesia",
    category: "Pacific Century Place Tower, SCBD, Jakarta Selatan",
    desc: "Mengunjungi kantor Google Indonesia di lantai 43 dan 45 Pacific Century Place Tower pada Selasa, 30 September 2025 sebagai bagian dari program Google Student Ambassador. Dalam kunjungan ini, kami diperkenalkan pada berbagai departemen dan fasilitas Google sekaligus mengenal lingkungan kerja di balik produk serta inisiatif komunitas Google.",
  },
  {
    title: "Unlocking the Potential of Gemini AI as a Student Study Companion",
    organization: "Google Student Ambassador",
    category: "Universitas Sugeng Hartono",
    desc: "Mengadakan seminar di Universitas Sugeng Hartono pada Jumat, 31 Oktober 2025 untuk memperkenalkan fitur Gemini AI sebagai pendamping belajar mahasiswa. Sebagai Google Student Ambassador, saya membagikan cara Gemini AI dapat membantu teman-teman kampus mengerjakan tugas harian dan belajar lebih efektif.",
  },
  {
    title: "Graduation Google Student Ambassador",
    organization: "Google Indonesia",
    category: "Ciputra Artpreneur",
    desc: "Menyelesaikan enam bulan sebagai Google Student Ambassador setelah menjalankan misi adopsi teknologi Gemini AI di Universitas Sugeng Hartono. Menjadi Google Student Ambassador dan masuk top 200 dari 12.000 pendaftar se-Indonesia menjadi salah satu pencapaian terbesar saya sebagai content creator.",
  },
  {
    title: "NgabuburIT: Menjelajah Teknologi, Merajut Kebersamaan",
    organization: "HIMAKOM Universitas Sugeng Hartono",
    category: "Panti Asuhan Aisyah",
    desc: "Pada Jumat, 20 Februari 2026, saya berkesempatan menjadi pembicara di NgabuburIT dengan tema \"Inovasi dalam Berbagi, Menginspirasi Generasi dengan Computational Thinking.\" Saya membagikan penerapan Computational Thinking dalam kehidupan sehari-hari kepada adik-adik di Panti Asuhan Aisyah untuk membantu mereka membangun kemampuan berpikir sistematis untuk masa depan.",
  },
];

function localizePortfolioData(language: Language) {
  if (language === "en") {
    return {
      techGroups,
      educationItems,
      careerItems,
      certificateItems,
      activityItems,
    };
  }

  return {
    techGroups: techGroups.map((group) => ({
      ...group,
      title: techGroupTitlesId[group.title] ?? group.title,
    })),
    educationItems: educationItems.map((item, index) => ({
      ...item,
      ...educationId[index],
    })),
    careerItems: careerItems.map((item, index) => ({
      ...item,
      ...careerId[index],
    })),
    certificateItems: certificateItems.map((item, index) => ({
      ...item,
      ...certificateId[index],
    })),
    activityItems: activityItems.map((item, index) => ({
      ...item,
      ...activityId[index],
    })),
  };
}

export function getPortfolioContent(language: Language) {
  const text = uiText[language];

  return {
    ...text,
    navItems: navSections.map((item) => ({
      ...item,
      label: text.nav[item.key],
    })),
    portfolio: localizePortfolioData(language),
  };
}

export type PortfolioContent = ReturnType<typeof getPortfolioContent>;
