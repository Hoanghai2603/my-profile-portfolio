export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  categoryKey: string;
  skills: Skill[];
}

export interface ExperienceProject {
  name: string;
  descriptionKey?: string;
  techStack: string[];
  bulletKeys: string[];
}

export interface Experience {
  company: string;
  companyKey: string;
  role: string;
  period: string;
  locationKey?: string;
  summaryKey?: string;
  projects: ExperienceProject[];
}

export interface Project {
  titleKey: string;
  descriptionKey: string;
  role: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const profile = {
  name: "Nguyễn Hoàng Hải",
  titleKey: "hero.title",
  taglineKey: "hero.tagline",
  email: "nghoanghai260300.it@gmail.com",
  phone: "0913926737",
  location: "TP. Hồ Chí Minh, Việt Nam",
  yearsOfExperience: 4,
  cvUrl:
    "https://drive.google.com/file/d/17g-POaAKzAUhG7QY5vuVlCbq9z_ZQvAr/view?usp=drive_link",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Hoanghai2603",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/nhhai2603it/",
    icon: "linkedin",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Core & Frameworks",
    categoryKey: "skills.core",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
  },
  {
    category: "State Management",
    categoryKey: "skills.stateManagement",
    skills: [{ name: "Redux" }, { name: "Zustand" }, { name: "React Context" }],
  },
  {
    category: "UI/UX & Styling",
    categoryKey: "skills.ui",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Ant Design" },
      { name: "Material UI" },
      { name: "shadcn/ui" },
      { name: "Styled-components" },
    ],
  },
  {
    category: "API & Data Handling",
    categoryKey: "skills.api",
    skills: [
      { name: "RESTful API" },
      { name: "GraphQL" },
      { name: "Socket.io" },
      { name: "Zod" },
      { name: "OAuth2" },
    ],
  },
  {
    category: "Testing & Tools",
    categoryKey: "skills.testing",
    skills: [
      { name: "Vite" },
      { name: "Jest" },
      { name: "Vitest" },
      { name: "Sentry" },
    ],
  },
  {
    category: "Specialized (Web3 & AI)",
    categoryKey: "skills.specialized",
    skills: [
      { name: "Web3.js" },
      { name: "Ethers.js" },
      { name: "Wagmi" },
      { name: "Gemini / OpenAI API" },
      { name: "AI Agent" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Alchemy",
    companyKey: "alchemy",
    role: "Frontend Developer (Middle/Senior)",
    period: "04/2023 – Hiện tại",
    locationKey: "location.hcm",
    summaryKey: "experience.alchemy.summary",
    projects: [
      {
        name: "Crypto GameHub Platform - Client-side",
        descriptionKey: "experience.alchemy.clientDesc",
        techStack: ["Next.js", "TypeScript", "Socket.io", "SEO", "RESTful API"],
        bulletKeys: ["c1", "c2", "c3", "c4", "c5"]
      },
      {
        name: "Crypto GameHub Platform - Admin-side",
        descriptionKey: "experience.alchemy.adminDesc",
        techStack: ["React.js", "TypeScript", "Socket.io", "RESTful API", "Gemini/OpenAI API", "AI Bot Chat"],
        bulletKeys: ["a1", "a2", "a3", "a4", "a5", "a6", "a7"]
      }
    ]
  },
  {
    company: "Aion Tech",
    companyKey: "aion",
    role: "Frontend Developer",
    period: "08/2022 – 01/2023",
    locationKey: "location.hcm",
    summaryKey: "experience.aion.summary",
    projects: [
      {
        name: "VTM (Video Teller Machine)",
        descriptionKey: "experience.aion.vtmDesc",
        techStack: ["React.js", "Material UI", "Socket.io", "SDK Video", "RESTful API", "Elastic Search", "Vitest"],
        bulletKeys: ["desc1", "desc2", "desc3", "desc4", "desc5"]
      }
    ]
  },
  {
    company: "ITBee Solution",
    companyKey: "itbee",
    role: "Frontend Developer",
    period: "08/2021 – 08/2022",
    locationKey: "location.hcm",
    summaryKey: "experience.itbee.summary",
    projects: [
      {
        name: "Daysaki Spa & Clinic",
        descriptionKey: "experience.itbee.daysakiDesc",
        techStack: ["React.js", "Next.js", "Redux", "Antd", "Styled-Components", "GraphQL", "SEO"],
        bulletKeys: ["desc1", "desc2", "desc3", "desc4", "desc5"]
      }
    ]
  }
];

export const projects: Project[] = [
  {
    titleKey: "projects.gamehub.title",
    descriptionKey: "projects.gamehub.description",
    role: "Frontend Developer",
    techStack: [
      "Next.js (App Router)",
      "Web3.js",
      "Ethers.js",
      "Wagmi",
      "Smart Contracts",
      "Zustand",
      "Gemini API",
      "Telegram API",
    ],
    image: "/images/project-placeholder.svg",
  },
  {
    titleKey: "projects.vtm.title",
    descriptionKey: "projects.vtm.description",
    role: "Frontend Developer",
    techStack: [
      "React.js",
      "Next.js",
      "Ant Design",
      "Redux Toolkit",
      "Socket.io",
      "Sentry",
    ],
    image: "/images/project-placeholder.svg",
  },
  {
    titleKey: "projects.daysaki.title",
    descriptionKey: "projects.daysaki.description",
    role: "Frontend Developer",
    techStack: [
      "React.js",
      "Next.js",
      "Ant Design",
      "Redux Toolkit",
      "GraphQL",
    ],
    image: "/images/project-placeholder.svg",
  },
];

export const educations: Education[] = [
  {
    school: "Đại học Ngoại Ngữ - Tin Học (HUFLIT)",
    degree: "Cử nhân Công nghệ Thông tin",
    period: "2018 – 2022",
  },
];
