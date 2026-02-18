export interface Menu {
    id: number;
    title: string;
    link: string;
}

export interface Experience {
    company: string;
    description: string;
    period: string;
    technologies: string[];
    title: string;
}

export interface Project {
    category: string;
    title: string;
    details: string;
    stack: string[];
    projectUrl: string;
    image: string;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}
