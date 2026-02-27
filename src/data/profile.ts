export interface Skill {
    name: string;
    icon?: string;
}

export interface SkillGroup {
    category: string;
    categoryKey: string;
    skills: Skill[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    descriptionKeys: string[];
    techStack: string[];
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
    phone: "+84 913 926 737",
    location: "TP. Hồ Chí Minh, Việt Nam",
    yearsOfExperience: 4,
    cvUrl: "/cv/resume.pdf",
};

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/Hoanghai2603", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/nhhai2603it/", icon: "linkedin" },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        categoryKey: "skills.languages",
        skills: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" },
            { name: "TypeScript" },
        ],
    },
    {
        category: "Frameworks",
        categoryKey: "skills.frameworks",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Vue.js" },
        ],
    },
    {
        category: "Styling",
        categoryKey: "skills.styling",
        skills: [
            { name: "Tailwind CSS" },
            { name: "SASS/SCSS" },
            { name: "Styled Components" },
        ],
    },
    {
        category: "Tools",
        categoryKey: "skills.tools",
        skills: [
            { name: "Git" },
            { name: "Figma" },
            { name: "VS Code" },
            { name: "Vite" },
            { name: "Webpack" },
        ],
    },
    {
        category: "Others",
        categoryKey: "skills.others",
        skills: [
            { name: "Jest" },
            { name: "Playwright" },
            { name: "CI/CD" },
            { name: "Agile" },
        ],
    },
];

export const experiences: Experience[] = [
    {
        company: "Công ty ABC",
        role: "Senior Frontend Developer",
        period: "01/2023 – Hiện tại",
        descriptionKeys: [
            "experience.abc.desc1",
            "experience.abc.desc2",
            "experience.abc.desc3",
        ],
        techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
        company: "Công ty XYZ",
        role: "Frontend Developer",
        period: "06/2021 – 12/2022",
        descriptionKeys: [
            "experience.xyz.desc1",
            "experience.xyz.desc2",
        ],
        techStack: ["React", "JavaScript", "SASS", "Redux"],
    },
];

export const projects: Project[] = [
    {
        titleKey: "projects.project1.title",
        descriptionKey: "projects.project1.description",
        role: "Lead Frontend",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        image: "/images/project-placeholder.svg",
    },
    {
        titleKey: "projects.project2.title",
        descriptionKey: "projects.project2.description",
        role: "Solo Developer",
        techStack: ["React", "JavaScript", "Styled Components"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        image: "/images/project-placeholder.svg",
    },
];

export const educations: Education[] = [
    {
        school: "Đại học HUFLIT",
        degree: "Cử nhân Công nghệ Thông tin",
        period: "2018 – 2022",
    },
];
