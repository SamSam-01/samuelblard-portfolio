export interface Project {
    id?: string | number;
    title: string;
    image: string;
    github?: string;
    website?: string;
    technologies: string[];
    description: string;
}

export interface Experience {
    id?: string | number;
    entreprise: string;
    title: string;
    logo?: string;
    contract: string;
    date: string;
    description: string;
}

export interface Competence {
    name: string;
    icon: string;
}
