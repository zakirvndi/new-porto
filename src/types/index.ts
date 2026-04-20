export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  faculty: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  featured?: boolean;
  period?: string;
  highlights?: string[];
  githubUrl?: string;
  screenshots?: string[];
  tags?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
