type TechTool = {
  name: string;
  logo?: string;
  mark?: string;
  square?: boolean;
  padded?: boolean;
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
  logoContain?: boolean;
  logoPadded?: boolean;
  desc: string;
  highlights: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: "Web Fundamentals",
    tools: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "/logo-javascript.svg", square: true },
      { name: "TypeScript", logo: "/logo-typescript.svg", square: true },
    ],
  },
  {
    title: "Programming Languages",
    tools: [
      { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Move", logo: "/logo-move.svg" },
      { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
    ],
  },
  {
    title: "Frontend Frameworks & UI",
    tools: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Blade", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    ],
  },
  {
    title: "Backend, API & Database",
    tools: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
  {
    title: "Smart Contract Tooling",
    tools: [
      { name: "Hardhat", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
      { name: "Foundry", logo: "https://getfoundry.sh/foundry-logo.png" },
    ],
  },
  {
    title: "Design & Collaboration",
    tools: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Trello", logo: "https://cdn.simpleicons.org/trello/0052CC" },
    ],
  },
  {
    title: "Deployment & Developer Workflow",
    tools: [
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Discord Webhook", logo: "https://cdn.simpleicons.org/discord/5865F2" },
    ],
  },
  {
    title: "Analytics & Tracking",
    tools: [
      { name: "Google Analytics 4", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
      { name: "Microsoft Clarity", logo: "/logo-clarity.svg" },
    ],
  },
  {
    title: "Business & Service Integrations",
    tools: [
      { name: "Digiflazz", logo: "/logo-digiflazz.png" },
      { name: "OrderSosmed", logo: "/logo-ordersosmed.jpg", square: true, padded: true },
      { name: "Xoftware", logo: "/logo-xoftware.png" },
      { name: "Resend", logo: "https://cdn.simpleicons.org/resend/000000" },
    ],
  },
];

export const educationItems = [
  {
    year: "2024 - Present",
    title: "Bachelor of Computer Science",
    place: "Sugeng Hartono University",
    desc: "A 5th-semester Computer Science student with a GPA of 3.97, focused on computer science fundamentals, digital technology, technical communication, and professional growth that supports a Developer Relations path.",
    logo: "/logo-ush.png",
  },
];

export const careerItems: CareerItem[] = [
  {
    period: "Jul 2026 - Present",
    role: "Marketing & Developer",
    company: "Helden Inc - Part-time",
    companyLogo: "/logo-helden-inc.png",
    desc: "Driving marketing initiatives and building digital products for Helden Inc, a studio crafting gamified experiences for internal communication, blending growth-focused campaigns with hands-on development.",
    highlights: ["Marketing", "Development", "Gamification"],
  },
  {
    period: "Jul 2026 - Present",
    role: "Marketing & Developer",
    company: "Helden HQ - Part-time",
    companyLogo: "/logo-heldenhq.svg",
    logoPadded: true,
    desc: "Supporting Helden HQ as marketing and developer, handling the technology behind trainers' businesses so they can focus on teaching, while running campaigns that grow their reach.",
    highlights: ["Marketing", "Web development", "Automation"],
  },
  {
    period: "Jul 2026 - Present",
    role: "Marketing & Developer",
    company: "Maua AI - Part-time",
    companyLogo: "/logo-maua.svg",
    desc: "Working as marketing and developer at Maua AI, a team that takes over digital work, building apps and automations while driving social media growth for clients.",
    highlights: ["AI automation", "App development", "Social growth"],
  },
  {
    period: "Jun 2023 - Present",
    role: "Content Creator",
    company: "TikTok - Part-time",
    companyLogo: "/logo-tiktok.jpg",
    desc: "Content creator on TikTok with a focus on social media analytics to boost engagement and visibility. Skilled in tracking performance and optimizing content strategies to maximize reach. Currently developing creative content to grow the audience and enhance brand interaction.",
    highlights: ["TikTok", "Content optimization", "Audience growth"],
  },
  {
    period: "Jun 2023 - Present",
    role: "Content Creator",
    company: "YouTube - Part-time",
    companyLogo: "https://cdn.simpleicons.org/youtube/FF0000",
    logoContain: true,
    desc: "Content creator on YouTube, utilizing social media analytics to grow the channel and enhance viewer engagement. Focused on optimizing content strategies based on performance metrics and audience insights. Currently building a growing YouTube presence with data-driven content.",
    highlights: ["YouTube", "Audience insights", "Channel growth"],
  },
  {
    period: "May 2019 - Present",
    role: "Content Creator",
    company: "Instagram - Part-time",
    companyLogo: "/logo-instagram.jpg",
    desc: "Passionate content creator with expertise in social media analytics, driving engagement, and building a dedicated audience. Skilled in creating insightful data-driven content to enhance visibility and interaction. Currently managing Instagram content to optimize reach and growth.",
    highlights: ["Instagram", "Content strategy", "Social analytics"],
  },
  {
    period: "Apr 2026 - Jun 2026",
    role: "Ambassador",
    company: "ARMchain - Part-time",
    companyLogo: "/logo-armchain.jpg",
    desc: "Introducing ARMchain's technological solutions to a global audience, educating the community on blockchain innovation, and supporting ecosystem growth through strategic initiatives and networking.",
    highlights: ["ARMchain", "Blockchain education", "Ecosystem growth"],
  },
  {
    period: "Jun 2023 - Jun 2026",
    role: "Affiliator",
    company: "TikTok - Part-time",
    companyLogo: "/logo-tiktok.jpg",
    desc: "Experienced in digital marketing as an affiliator, leveraging TikTok to drive product promotions and sales. Specializing in showcasing products and generating revenue through affiliate marketing with campaigns that drive conversions.",
    highlights: ["Affiliate marketing", "Product promotion", "Conversions"],
  },
  {
    period: "Dec 2025 - Feb 2026",
    role: "Ambassador",
    company: "FLOQ - Contract",
    companyLogo: "/logo-floq.jpg",
    companyMark: "FLOQ",
    desc: "Collaborated with FLOQ to demystify trading for beginners through engaging social media content, driving brand awareness and organic user growth.",
    highlights: ["Ambassador", "Trading education", "Brand awareness"],
  },
  {
    period: "Oct 2025 - Feb 2026",
    role: "Associate Marketing",
    company: "Coinversity - Part-time",
    companyLogo: "/logo-coinversity.jpg",
    desc: "Bridging the gap to the future of the internet through simple, accurate, and inspiring Web3 education for everyone.",
    highlights: ["Coinversity", "Web3 education", "Marketing"],
  },
  {
    period: "Sep 2025 - Feb 2026",
    role: "Student Ambassador",
    company: "Google - Contract",
    companyLogo: "/logo-google.jpg",
    desc: "Leading the adoption of Google AI on campus for one semester by creating a positive impact through effective leadership skills, networking, creativity, and digital communication.",
    highlights: ["Google AI", "Campus leadership", "Digital communication"],
  },
  {
    period: "Jun 2022 - Jun 2024",
    role: "Affiliator",
    company: "Shopee - Part-time",
    companyLogo: "https://cdn.simpleicons.org/shopee/EE4D2D",
    logoContain: true,
    desc: "Affiliator on Shopee, promoting products through strategic digital marketing campaigns. Expert in curating product collections and driving sales through affiliate marketing. Focused on leveraging Shopee's platform to create effective campaigns that boost conversions.",
    highlights: ["Shopee", "Affiliate campaigns", "Product curation"],
  },
];

export const certificateItems = [
  {
    title: "Cybersecurity Research National Webinar",
    issuer: "HIMATIKOM Universitas Lamappapoleonro",
    year: "Jul 2026",
    issued: "Issued Jul 2026",
    credentialId: "Speaker",
    image: "/certificate-cybersecurity-webinar.jpg",
    desc: "Speaker at a National Webinar on cybersecurity research, exploring deepfake and social engineering as new challenges for informatics students in the AI era.",
  },
  {
    title: "Certificate of Web3 University Tour",
    issuer: "Coinversity",
    year: "May 2026",
    issued: "Issued May 2026",
    credentialId: "Associate",
    image: "/certificate-web3-university-tour-coinversity.jpg",
    desc: "In recognition of the role as Associate for the Web3 University Tour, contributing to the successful execution of program activities and supporting the coordination of event initiatives.",
  },
  {
    title: "Best GPA Achievement 3.97/4.00",
    issuer: "Sugeng Hartono University",
    year: "Feb 2026",
    issued: "Issued Feb 2026",
    credentialId: "6/STF/02/2026",
    image: "/certificate-best-gpa.jpg",
    desc: "Best GPA Achievement certificate for the Computer Science Program, Faculty of Technology, Law, and Business, Sugeng Hartono University, Odd Semester 2025/2026.",
  },
  {
    title: "Sui Developer Workshop",
    issuer: "Sui Foundation",
    year: "Feb 2026",
    issued: "Certificate Workshop Completion",
    credentialId: "Modules 1-5",
    image: "/certificate-sui-workshop.jpg",
    desc: "For successfully completing the Sui Developer Workshop modules 1-5, including foundational concepts, hands-on development, and practical implementation within the Sui ecosystem.",
  },
  {
    title: "Data Science Course",
    issuer: "BISA AI Academy (PT BISA Artificial Indonesia)",
    year: "Jan 2026",
    issued: "Issued Jan 2026",
    credentialId: "2026/250/57666",
    image: "/certificate-data-science-bisa-ai.jpg",
    desc: "Data Science certificate from BISA AI Academy for completing a free class with Data Science learning material.",
  },
  {
    title: "IDEONIC 2026",
    issuer: "Mercu Buana University",
    year: "Jan 2026",
    issued: "Issued Jan 2026",
    credentialId: "Certificate of Participation",
    image: "/certificate-ideonic-2026.jpg",
    desc: "Certificate of Participation for joining IDEONIC 2026 International Competition \"Inspiring Ideas, Shaping the Future\" organized by Mercu Buana University (UMB), Jakarta, Indonesia.",
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
    year: "Oct 2025 - Oct 2028",
    issued: "Issued Oct 2025",
    credentialId: "Expires Oct 2028",
    image: "/certificate-gemini-certified-student.jpg",
    desc: "Certificate Gemini Student for having demonstrated the knowledge, skills, and basic competencies needed to use Google AI.",
  },
  {
    title: "Konco Konco Ngonten",
    issuer: "PT Dyandra Promosindo",
    year: "Aug 2025",
    issued: "Issued Aug 2025",
    credentialId: "Projek-D VOL.4 2025",
    image: "/certificate-konco-konco-ngonten.jpg",
    desc: "Konco Konco Ngonten certificate from Projek-D VOL.4 2025.",
  },
  {
    title: "Certificate of 0G Builder",
    issuer: "HackQuest",
    year: "Aug 2025",
    issued: "Issued Aug 2025",
    credentialId: "1078108",
    image: "/certificate-0g-builder.jpg",
    desc: "Certificate of 0G Builder as a Certified 0G Builder.",
  },
  {
    title: "Certificate of 0G Learner",
    issuer: "HackQuest",
    year: "Aug 2025",
    issued: "Issued Aug 2025",
    credentialId: "1059217",
    image: "/certificate-0g-learner.jpg",
    desc: "Certificate of 0G Learner as a Certified 0G Learner.",
  },
  {
    title: "Certificate of Ethereum Builder",
    issuer: "HackQuest",
    year: "Aug 2025",
    issued: "Issued Aug 2025",
    credentialId: "1012200",
    image: "/certificate-ethereum-builder.jpg",
    desc: "Certificate of Ethereum Builder as a Certified Ethereum Builder.",
  },
  {
    title: "Certificate of Ethereum Learner",
    issuer: "HackQuest",
    year: "Jun 2025",
    issued: "Issued Jun 2025",
    credentialId: "1005535",
    image: "/certificate-ethereum-learner.jpg",
    desc: "Certificate of Ethereum Learner as a Certified Ethereum Learner.",
  },
  {
    title: "International Youthpreuner Competition",
    issuer: "Inventify Center",
    year: "May 2025",
    issued: "Issued May 2025",
    credentialId: "013-SR(PS)/IYC/Inventify-Center/V/2025",
    image: "/certificate-international-youthpreneur.jpg",
    desc: "International Youthpreuner Competition certificate for receiving a Bronze Medal.",
  },
  {
    title: "Web3 University Tour Yogyakarta",
    issuer: "Binance",
    year: "Apr 2025",
    issued: "Issued Apr 2025",
    credentialId: "Participant",
    image: "/certificate-web3-university-tour-yogyakarta.jpg",
    desc: "Participant certificate for Web3 University Tour Yogyakarta, an educational seminar organized by Binance Academy, Tokocrypto, and Coinvestasi.",
  },
  {
    title: "Empowering Industries with AI: Strategies for the New Era of Cyber Security",
    issuer: "Inixindo Jogja",
    year: "Dec 2024",
    issued: "Issued Dec 2024",
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
    organization: "Indonesian Red Cross (PMI)",
    category: "Vastenburg Fortress",
    image: "/activity-pmi-food-packages.jpg",
    desc: "Contributed as a representative of KSR Unit Markas PMI Surakarta in the distribution of 10,000 food packages for people in need, organized by the Solo Together Forever community at Vastenburg Fortress. This initiative strengthened my commitment to humanitarian efforts, solidarity, and social care.",
  },
  {
    title: "Youth Entrepreneurship Training Program 2025",
    organization: "Youth and Sports Office (Dispora) & Government of Surakarta",
    category: "Riyadi Palace Hotel, Solo",
    image: "/activity-youth-entrepreneurship-training-2025.jpg",
    desc: "Participated in the Youth Entrepreneurship Training Program from April 14-16, 2025, designed to build character and fundamental entrepreneurial skills for young people entering the business world. The program included inspiration from city leaders and young entrepreneurs, followed by a closing visit to Griya Dhahar RB on April 17, 2025, as an example of innovative and sustainable culinary business management.",
  },
  {
    title: "WEB3 University Tour 2025",
    organization: "Coinvestasi, Binance Academy, and Tokocrypto",
    category: "Gadjah Mada University",
    image: "/activity-web3-university-tour-2025.jpg",
    desc: "Joined WEB3 University Tour on Tuesday, April 29, 2025 at Gadjah Mada University, gaining insights into blockchain technology, the growing Web3 ecosystem, and career opportunities in crypto and the digital economy. This event was also a chance to connect with industry experts and Web3 enthusiasts from diverse backgrounds.",
  },
  {
    title: "Google Student Ambassador Inauguration Day",
    organization: "Google Indonesia",
    category: "MGP Space, SCBD Park, South Jakarta",
    image: "/activity-google-student-ambassador-inauguration.jpg",
    desc: "Joined the inauguration of 800 Google Student Ambassadors from across Indonesia on Monday, September 29, 2025. The event expanded my network and deepened my insight into Google's Gemini AI features, which will later be shared with students and friends on campus.",
  },
  {
    title: "Google Office Visit",
    organization: "Google Indonesia",
    category: "Pacific Century Place Tower, SCBD, South Jakarta",
    image: "/activity-google-office-visit.jpg",
    desc: "Visited the Google Indonesia office on the 43rd and 45th floors of Pacific Century Place Tower on Tuesday, September 30, 2025, as part of the Google Student Ambassador program. During the visit, we were introduced to Google's departments and office facilities while learning more about the working environment behind Google's products and community initiatives.",
  },
  {
    title: "Unlocking the Potential of Gemini AI as a Student Study Companion",
    organization: "Google Student Ambassador",
    category: "Sugeng Hartono University",
    image: "/activity-gemini-ai-study-companion.jpg",
    desc: "Held a seminar at Sugeng Hartono University on Friday, October 31, 2025 to introduce Gemini AI features as a student learning companion. As a Google Student Ambassador, I shared how Gemini AI can help campus friends handle daily assignments and study more effectively.",
  },
  {
    title: "Google Student Ambassador Graduation",
    organization: "Google Indonesia",
    category: "Ciputra Artpreneur",
    image: "/activity-google-student-ambassador-graduation.jpg",
    desc: "Completed six months as a Google Student Ambassador after carrying out the mission to adopt Gemini AI technology on campus at Sugeng Hartono University. Becoming a Google Student Ambassador and reaching the top 200 among 12,000 applicants across Indonesia became one of my biggest achievements as a content creator.",
  },
  {
    title: "NgabuburIT: Exploring Technology, Weaving Togetherness",
    organization: "HIMAKOM Sugeng Hartono University",
    category: "Aisyah Orphanage",
    image: "/activity-ngabuburit-computational-thinking.jpg",
    desc: "On Friday, February 20, 2026, I had the opportunity to be a speaker at NgabuburIT with the theme \"Innovation in Sharing, Inspiring the Next Generation through Computational Thinking.\" I shared how Computational Thinking can be applied in daily life with the girls at Aisyah Orphanage, helping them build systematic thinking skills for the future.",
  },
];
