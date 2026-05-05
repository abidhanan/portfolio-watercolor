type TechTool = {
  name: string;
  logo?: string;
  mark?: string;
};

type TechGroup = {
  title: string;
  tools: TechTool[];
};

type CareerItem = {
  period: string;
  role: string;
  company: string;
  companyLogo?: string;
  companyMark?: string;
  desc: string;
  highlights: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    tools: [
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Blade", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      { name: "Laravel Sanctum", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Eloquent ORM", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    ],
  },
  {
    title: "Web3",
    tools: [
      { name: "Sui", logo: "https://cdn.simpleicons.org/sui/4DA2FF" },
      { name: "Move", mark: "M" },
      { name: "Sui dApp Kit", logo: "https://cdn.simpleicons.org/sui/4DA2FF" },
      { name: "Mysten Sui SDK", logo: "https://cdn.simpleicons.org/sui/4DA2FF" },
      { name: "React Query", logo: "https://cdn.simpleicons.org/reactquery/FF4154" },
      { name: "NFT Marketplace", logo: "https://cdn.simpleicons.org/opensea/2081E2" },
    ],
  },
  {
    title: "Integrations & Workflow",
    tools: [
      { name: "Midtrans", mark: "M" },
      { name: "Digiflazz", mark: "D" },
      { name: "OrderSosmed API", mark: "OS" },
      { name: "Discord Webhook", logo: "https://cdn.simpleicons.org/discord/5865F2" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
    ],
  },
];

export const educationItems = [
  {
    year: "2024 - Sekarang",
    title: "S1 Ilmu Komputer",
    place: "Universitas Sugeng Hartono",
    desc: "Mahasiswa semester 4 dengan GPA 3,97. Fokus pada fondasi ilmu komputer, teknologi digital, komunikasi teknis, dan pengembangan wawasan yang mendukung peran Developer Relations.",
    logo: "/logo-ush.png",
  },
];

export const careerItems: CareerItem[] = [
  {
    period: "Mei 2019 - Saat ini",
    role: "Content Creator",
    company: "Instagram - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/instagram/E4405F",
    desc: "Passionate content creator with expertise in social media analytics, driving engagement, and building a dedicated audience. Skilled in creating insightful data-driven content to enhance visibility and interaction. Currently managing Instagram content to optimize reach and growth.",
    highlights: ["Instagram", "Content strategy", "Social analytics"],
  },
  {
    period: "Mei 2020 - Saat ini",
    role: "Social Media Marketing",
    company: "Instagram - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/instagram/E4405F",
    desc: "Experienced in digital marketing, specializing in social media strategy and campaign management. Focused on delivering effective marketing solutions for brands like Scarlett Whitening and elevating brand awareness through targeted campaigns.",
    highlights: ["Digital marketing", "Campaign management", "Brand awareness"],
  },
  {
    period: "Apr 2022 - Saat ini",
    role: "Entrepreneur",
    company: "Instagram - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/instagram/E4405F",
    desc: "Founder and entrepreneur specializing in creative entrepreneurship and digital marketing for digital products. Developed and marketed innovative digital solutions, driving customer engagement and sales growth through scalable online products.",
    highlights: ["Entrepreneurship", "Digital products", "Sales growth"],
  },
  {
    period: "Jun 2023 - Saat ini",
    role: "Content Creator",
    company: "TikTok - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/tiktok/000000",
    desc: "Content creator on TikTok with a focus on social media analytics to boost engagement and visibility. Skilled in tracking performance and optimizing content strategies to maximize reach. Currently developing creative content to grow the audience and enhance brand interaction.",
    highlights: ["TikTok", "Content optimization", "Audience growth"],
  },
  {
    period: "Jun 2023 - Saat ini",
    role: "Affiliator",
    company: "TikTok - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/tiktok/000000",
    desc: "Experienced in digital marketing as an affiliator, leveraging TikTok to drive product promotions and sales. Specializing in showcasing products and generating revenue through affiliate marketing with campaigns that drive conversions.",
    highlights: ["Affiliate marketing", "Product promotion", "Conversions"],
  },
  {
    period: "Jun 2023 - Saat ini",
    role: "Content Creator",
    company: "YouTube - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/youtube/FF0000",
    desc: "Content creator on YouTube, utilizing social media analytics to grow the channel and enhance viewer engagement. Focused on optimizing content strategies based on performance metrics and audience insights. Currently building a growing YouTube presence with data-driven content.",
    highlights: ["YouTube", "Audience insights", "Channel growth"],
  },
  {
    period: "Jun 2022 - Jun 2024",
    role: "Affiliator",
    company: "Shopee - Paruh Waktu",
    companyLogo: "https://cdn.simpleicons.org/shopee/EE4D2D",
    desc: "Affiliator on Shopee, promoting products through strategic digital marketing campaigns. Expert in curating product collections and driving sales through affiliate marketing. Focused on leveraging Shopee's platform to create effective campaigns that boost conversions.",
    highlights: ["Shopee", "Affiliate campaigns", "Product curation"],
  },
  {
    period: "Des 2025 - Feb 2026",
    role: "Ambassador",
    company: "FLOQ - Kontrak",
    companyLogo: "",
    companyMark: "FLOQ",
    desc: "Collaborated with FLOQ to demystify trading for beginners through engaging social media content, driving brand awareness and organic user growth.",
    highlights: ["Ambassador", "Trading education", "Brand awareness"],
  },
  {
    period: "Sep 2025 - Feb 2026",
    role: "Student Ambassador",
    company: "Google - Kontrak",
    companyLogo: "https://cdn.simpleicons.org/google/4285F4",
    desc: "Leading the adoption of Google AI on campus for one semester by creating a positive impact through effective leadership skills, networking, creativity, and digital communication.",
    highlights: ["Google AI", "Campus leadership", "Digital communication"],
  },
];

export const certificateItems = [
  {
    title: "Indeks Prestasi Terbaik 3,97/4,00",
    issuer: "Universitas Sugeng Hartono",
    year: "Feb 2026",
    issued: "Diterbitkan Feb 2026",
    credentialId: "6/STF/02/2026",
    image: "/certificate-best-gpa.jpg",
    desc: "Sertifikat Indeks Prestasi Terbaik 3,97/4,00 untuk Program Studi Ilmu Komputer, Fakultas Teknologi Hukum dan Bisnis, Universitas Sugeng Hartono, Semester Ganjil 2025/2026.",
  },
  {
    title: "Sui Developer Workshop",
    issuer: "Sui Foundation",
    year: "Workshop Completion",
    issued: "Certificate Workshop Completion",
    credentialId: "Modules 1-5",
    image: "/certificate-sui-workshop.jpg",
    desc: "For successfully completing the Sui Developer Workshop modules 1-5, including foundational concepts, hands-on development, and practical implementation within the Sui ecosystem.",
  },
  {
    title: "Data Science Course",
    issuer: "BISA AI Academy (PT BISA ARTIFISIAL INDONESIA)",
    year: "Jan 2026",
    issued: "Diterbitkan Jan 2026",
    credentialId: "2026/250/57666",
    image: "/certificate-data-science-bisa-ai.jpg",
    desc: "Sertifikat Data Science dari BISA AI Academy setelah menyelesaikan kelas gratis dengan materi Data Science.",
  },
  {
    title: "IDEONIC 2026",
    issuer: "Universitas Mercu Buana",
    year: "Jan 2026",
    issued: "Diterbitkan Jan 2026",
    credentialId: "Certificate of Participation",
    image: "/certificate-ideonic-2026.jpg",
    desc: "Certificate of Participation for participating in IDEONIC 2026 International Competition \"Inspiring Ideas, Shaping the Future\" organized by Universitas Mercu Buana (UMB), Jakarta, Indonesia.",
  },
  {
    title: "Certificate of Graduation",
    issuer: "Google",
    year: "Class of 2025",
    issued: "Google Student Ambassador",
    credentialId: "Class of 2025",
    image: "/certificate-google-student-ambassador.jpg",
    desc: "Certificate of completion for successful participation as a Google Student Ambassador, selected from a pool of 12,000 students nationwide, and for exceptional leadership in championing the adoption of Google AI within the campus community.",
  },
  {
    title: "Gemini Certified Student",
    issuer: "Google",
    year: "Okt 2025 - Okt 2028",
    issued: "Diterbitkan Okt 2025",
    credentialId: "Kedaluwarsa Okt 2028",
    image: "/certificate-gemini-certified-student.jpg",
    desc: "Certificate Gemini Student for having demonstrated the knowledge, skills, and basic competencies needed to use Google AI.",
  },
  {
    title: "Konco Konco Ngonten",
    issuer: "PT Dyandra Promosindo",
    year: "Agu 2025",
    issued: "Diterbitkan Agu 2025",
    credentialId: "Projek-D VOL.4 2025",
    image: "/certificate-konco-konco-ngonten.jpg",
    desc: "Sertifikat Konco Konco Ngonten dalam acara Projek-D VOL.4 2025.",
  },
  {
    title: "Certificate of 0G Builder",
    issuer: "HackQuest",
    year: "Agu 2025",
    issued: "Diterbitkan Agu 2025",
    credentialId: "1078108",
    image: "/certificate-0g-builder.jpg",
    desc: "Certificate of 0G Builder as a Certified 0G Builder.",
  },
  {
    title: "Certificate of 0G Learner",
    issuer: "HackQuest",
    year: "Agu 2025",
    issued: "Diterbitkan Agu 2025",
    credentialId: "1059217",
    image: "/certificate-0g-learner.jpg",
    desc: "Certificate of 0G Learner as a Certified 0G Learner.",
  },
  {
    title: "Certificate of Ethereum Builder",
    issuer: "HackQuest",
    year: "Agu 2025",
    issued: "Diterbitkan Agu 2025",
    credentialId: "1012200",
    image: "/certificate-ethereum-builder.jpg",
    desc: "Certificate of Ethereum Builder as a Certified Ethereum Builder.",
  },
  {
    title: "Certificate of Ethereum Learner",
    issuer: "HackQuest",
    year: "Jun 2025",
    issued: "Diterbitkan Jun 2025",
    credentialId: "1005535",
    image: "/certificate-ethereum-learner.jpg",
    desc: "Certificate of Ethereum Learner as a Certified Ethereum Learner.",
  },
  {
    title: "International Youthpreuner Competition",
    issuer: "Inventify Center",
    year: "Mei 2025",
    issued: "Diterbitkan Mei 2025",
    credentialId: "013-SR(PS)/IYC/Inventify-Center/V/2025",
    image: "/certificate-international-youthpreneur.jpg",
    desc: "International Youthpreuner Competition certificate for receiving a Bronze Medal.",
  },
  {
    title: "Web3 University Tour Yogyakarta",
    issuer: "Binance",
    year: "Apr 2025",
    issued: "Diterbitkan Apr 2025",
    credentialId: "Participant",
    image: "/certificate-web3-university-tour-yogyakarta.jpg",
    desc: "Participant certificate for Web3 University Tour Yogyakarta, an educational seminar organized by Binance Academy, Tokocrypto, and Coinvestasi.",
  },
  {
    title: "Empowering Industries with AI: Strategies for the New Era of Cyber Security",
    issuer: "Inixindo Jogja",
    year: "Des 2024",
    issued: "Diterbitkan Des 2024",
    credentialId: "65909926-3188-40d5-ad83-730c332585f9",
    image: "/certificate-inixindo-ai-cyber-security.jpg",
    desc: "Certificate of Attendance for Empowering Industries with AI: Strategies for the New Era of Cyber Security.",
  },
];

type ActivityItem = {
  title: string;
  desc: string;
  organization?: string;
  category?: string;
  image?: string;
};

export const activityItems: ActivityItem[] = [
  {
    title: "Together for Humanity: Distributing 10,000 Food Packages in Solo",
    organization: "Palang Merah Indonesia - PMI (Indonesian Red Cross)",
    category: "Sukarelawan - Penanggulangan Kemiskinan",
    image: "/activity-pmi-food-packages.jpg",
    desc: "Contributed as a representative of KSR Unit Markas PMI Surakarta in the distribution of 10,000 food packages for people in need, organized by the Solo Bersama Selamanya community at Benteng Vastenburg. This initiative strengthened my commitment to humanitarian efforts, solidarity, and social care.",
  },
  {
    title: "Youth Entrepreneurship Training Program 2025",
    organization: "Youth and Sports Office (Dispora) & Government of Surakarta",
    category: "Entrepreneurship Training - Riyadi Palace Hotel, Solo",
    image: "/activity-youth-entrepreneurship-training-2025.jpg",
    desc: "Participated in the Youth Entrepreneurship Training Program from April 14-16, 2025, designed to build character and fundamental entrepreneurial skills for young people entering the business world. The program included inspiration from city leaders and young entrepreneurs, followed by a closing visit to Griya Dhahar RB on April 17, 2025, as an example of innovative and sustainable culinary business management.",
  },
  {
    title: "WEB3 University Tour 2025",
    organization: "Coinvestasi, Binance Academy, and Tokocrypto",
    category: "Blockchain & Web3 Event - Gadjah Mada University",
    image: "/activity-web3-university-tour-2025.jpg",
    desc: "Joined WEB3 University Tour on Tuesday, April 29, 2025 at Gadjah Mada University, gaining insights into blockchain technology, the growing Web3 ecosystem, and career opportunities in crypto and the digital economy. This event was also a chance to connect with industry experts and Web3 enthusiasts from diverse backgrounds.",
  },
  {
    title: "Google Student Ambassador Inauguration Day",
    organization: "Google Student Ambassador Indonesia",
    category: "Inauguration Event - MGP Space, SCBD Park, South Jakarta",
    image: "/activity-google-student-ambassador-inauguration.jpg",
    desc: "Joined the inauguration of 800 Google Student Ambassadors from across Indonesia on Monday, September 29, 2025. The event expanded my network and deepened my insight into Google's Gemini AI features, which will later be shared with students and friends on campus.",
  },
  {
    title: "Google Office Visit",
    organization: "Google Indonesia",
    category: "Office Visit - Pacific Century Place Tower, SCBD, South Jakarta",
    image: "/activity-google-office-visit.jpg",
    desc: "Visited the Google Indonesia office on the 43rd and 45th floors of Pacific Century Place Tower on Tuesday, September 30, 2025, as part of the Google Student Ambassador program. During the visit, we were introduced to Google's departments and office facilities while learning more about the working environment behind Google's products and community initiatives.",
  },
  {
    title: "Unlocking the Potential of Gemini AI as a Student Study Companion",
    organization: "Universitas Sugeng Hartono",
    category: "Google Student Ambassador Seminar - Oct 31, 2025",
    image: "/activity-gemini-ai-study-companion.jpg",
    desc: "Held a seminar at Sugeng Hartono University on Friday, October 31, 2025 to introduce Gemini AI features as a student learning companion. As a Google Student Ambassador, I shared how Gemini AI can help campus friends handle daily assignments and study more effectively.",
  },
  {
    title: "Google Student Ambassador Graduation",
    organization: "Google Student Ambassador Indonesia",
    category: "Graduation - Class of 2025",
    image: "/activity-google-student-ambassador-graduation.jpg",
    desc: "Completed six months as a Google Student Ambassador after carrying out the mission to adopt Gemini AI technology on campus at Sugeng Hartono University. Becoming a Google Student Ambassador and reaching the top 200 among 12,000 applicants across Indonesia became one of my biggest achievements as a content creator.",
  },
  {
    title: "NgabuburIT: Menjelajah Teknologi, Merajut Kebersamaan",
    organization: "HIMAKOM Universitas Sugeng Hartono",
    category: "Speaker - Computational Thinking at Aisyah Orphanage",
    image: "/activity-ngabuburit-computational-thinking.jpg",
    desc: "On Friday, February 20, 2026, I had the opportunity to be a speaker at NgabuburIT with the theme \"Inovasi dalam Berbagi, Menginspirasi Generasi dengan Computational Thinking.\" I shared how Computational Thinking can be applied in daily life with the girls at Aisyah Orphanage, helping them build systematic thinking skills for the future.",
  },
];
