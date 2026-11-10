// Single source of truth for site-wide facts used by metadata, structured data,
// llms.txt and llms-full.txt, so search engines and AI assistants read the same
// answers everywhere.

export const siteUrl = "https://abidhanan.my.id";
export const siteName = "Abid Hanan Wicaksono";
export const contactEmail = "abidhanan0904@gmail.com";

export const socialProfiles = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/abid-hanan-wicaksono-6a9326326/" },
  { label: "GitHub", url: "https://github.com/abidhanan" },
  { label: "Instagram", url: "https://www.instagram.com/ahawi_channel" },
  { label: "YouTube", url: "https://youtube.com/@ahawichannel" },
  { label: "TikTok", url: "https://www.tiktok.com/@ahawi_channel" },
  { label: "X", url: "https://x.com/ahawi_channel" },
  { label: "Telegram", url: "https://t.me/ahawi_channel" },
];

export const summary = {
  en: "Abid Hanan Wicaksono (also known as Ahawi) is a Developer Relations specialist from Surakarta, Central Java, Indonesia, with a background in technology, business, and marketing. He connects technology with communities through clear, educational communication and meaningful collaboration.",
  id: "Abid Hanan Wicaksono (dikenal juga sebagai Ahawi) adalah Developer Relations asal Surakarta, Jawa Tengah, Indonesia, dengan latar belakang teknologi, bisnis, dan marketing. Ia menghubungkan teknologi dengan komunitas melalui komunikasi yang jelas, edukatif, dan kolaborasi yang bermakna.",
};

export const sections = [
  { id: "about", name: "About", description: "Who Abid Hanan Wicaksono is and what he values." },
  { id: "education", name: "Education", description: "Bachelor of Computer Science at Sugeng Hartono University." },
  { id: "tools", name: "Tools & Tech Stack", description: "Languages, frameworks, and platforms he works with." },
  { id: "certificates", name: "Licenses & Certificates", description: "Credentials, awards, and learning milestones." },
  { id: "career", name: "Career", description: "Work experience, ambassador roles, and creative roles." },
  { id: "startup", name: "Startup", description: "Digital businesses he is building." },
  { id: "faq", name: "FAQ", description: "Direct answers about his profile, skills, products, and contact details." },
  { id: "activity", name: "Activity", description: "Community, speaking, and learning activities." },
];

// Question-and-answer pairs written as short, self-contained answers.
export const faq = [
  {
    question: "Who is Abid Hanan Wicaksono?",
    answer: summary.en,
  },
  {
    question: "What does Abid Hanan Wicaksono do?",
    answer:
      "He works as a Marketing & Developer intern at Maua AI (since July 2026), building apps and automations and driving social media growth for clients. He also creates content on TikTok, YouTube, and Instagram.",
  },
  {
    question: "What does Abid Hanan Wicaksono study?",
    answer:
      "He studies for a Bachelor of Computer Science at Sugeng Hartono University (2024 to present). He is in semester 5 with a GPA of 3.97 out of 4.00.",
  },
  {
    question: "Which ambassador and community roles has he held?",
    answer:
      "He was a Google Student Ambassador (September 2025 to February 2026, selected from 12,000 students), an Ambassador for ARMchain and FLOQ, and Associate Marketing at Coinversity.",
  },
  {
    question: "What businesses does Abid Hanan Wicaksono own?",
    answer:
      "He is the CEO and Founder of Wiboost Store (a platform for social media boosting, game top-ups, mobile operator data packages, and premium apps) and Nocoding (website, application, and automation development services).",
  },
  {
    question: "Which technologies does he use?",
    answer:
      "HTML, CSS, JavaScript, TypeScript, Solidity, Move, Rust, Go, Python, PHP, React, Next.js, Tailwind CSS, Node.js, Laravel, MySQL, PostgreSQL, Supabase, Hardhat, Foundry, Figma, GitHub, Vercel, Cloudflare, and Docker.",
  },
];

export const faqId = [
  { question: "Siapa Abid Hanan Wicaksono?", answer: summary.id },
  {
    question: "Apa pekerjaan Abid Hanan Wicaksono?",
    answer: "Ia bekerja sebagai Marketing & Developer intern di Maua AI sejak Juli 2026, membangun aplikasi dan automasi serta membantu pertumbuhan media sosial klien. Ia juga membuat konten di TikTok, YouTube, dan Instagram.",
  },
  {
    question: "Apa pendidikan Abid Hanan Wicaksono?",
    answer: "Ia menempuh S1 Ilmu Komputer di Universitas Sugeng Hartono sejak 2024. Saat ini ia berada di semester 5 dengan IPK 3,97 dari 4,00.",
  },
  {
    question: "Apa pengalaman ambassador dan komunitasnya?",
    answer: "Ia pernah menjadi Google Student Ambassador, Ambassador ARMchain dan FLOQ, serta Associate Marketing di Coinversity.",
  },
  {
    question: "Bisnis apa yang dimiliki Abid Hanan Wicaksono?",
    answer: "Ia merupakan CEO dan Founder Wiboost Store (Platform penyedia layanan suntik sosmed, top up game, paket data operator, dan aplikasi premium) dan Nocoding (Jasa pembuatan website, aplikasi, dan automasi).",
  },
  {
    question: "Teknologi apa yang digunakan Abid Hanan Wicaksono?",
    answer: "HTML, CSS, JavaScript, TypeScript, Solidity, Move, Rust, Go, Python, PHP, React, Next.js, Tailwind CSS, Node.js, Laravel, MySQL, PostgreSQL, Supabase, Hardhat, Foundry, Figma, GitHub, Vercel, Cloudflare, dan Docker.",
  },
];

export const ventures = [
  {
    name: "Wiboost Store",
    url: "https://wiboostore.com",
    type: "Organization",
    description:
      "Platform for social media boosting, game top-ups, mobile operator data packages, and premium apps.",
  },
  {
    name: "Nocoding",
    url: "https://nocoding.web.id",
    type: "Organization",
    description: "Fast, affordable website, application, and automation development services.",
  },
];
