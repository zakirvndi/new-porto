import type { Experience, Education, SkillCategory, Certification, Project, SocialLink } from "@/types";

export const profile = {
  name: "Muhammad Zaki Revandi",
  role: "Software Engineer",
  location: "Jakarta, Indonesia",
  email: "revandizaki183@gmail.com",
  github: "https://github.com/zakirvndi",
  linkedin: "https://linkedin.com/in/muhammad-zaki-revandi-a93654246",
  summary:
    "I am a fresh graduate in Software Engineering from BINUS University, with one year of experience as a Full Stack Developer Intern. I have been actively deepening my expertise in both front-end and back-end development through internships and online courses, with hands-on experience in C# (.NET) and JavaScript.\n\nI am a motivated and adaptable learner with strong problem-solving skills, eager to contribute to innovative and impactful technology solutions while continuously advancing my expertise in the field.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/zakirvndi", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-zaki-revandi-a93654246", icon: "linkedin" },
  { label: "Email", href: "mailto:revandizaki183@gmail.com", icon: "mail" },
];

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Company",
    period: "Feb 2025 – Feb 2026",
    description: [
      "Developed and maintained backend systems using MVC and CQRS architectures",
      "Implemented CQRS with MediatR and FluentValidation to improve code structure and maintainability",
      "Designed scalable backend systems following clean architecture principles",
      "Collaborated with team using Git (GitHub/GitLab) to ensure efficient workflows",
      "Leveraged AI tools (ChatGPT, Claude, GitHub Copilot) to accelerate development and improve code quality",
      "Worked closely with business analysts and senior engineers to translate business requirements into technical solutions",
    ],
  },
  {
    title: "Network Engineer Intern",
    company: "Company",
    period: "Mar 2021 – May 2022",
    description: [
      "Performed preventive maintenance on network devices",
      "Analyzed performance data to proactively identify potential issues",
      "Conducted physical and functional inspections to ensure device reliability",
      "Replaced faulty or outdated hardware to maintain system stability",
    ],
  },
];

export const education: Education = {
  school: "BINUS University",
  degree: "Bachelor of Engineering in Software Engineering",
  faculty: "School of Computer Science",
  period: "2022 – 2026",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["C", "C#", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Vue", "Tailwind CSS", "Bootstrap", "Ant Design", "Shadcn UI"],
  },
  {
    category: "Backend Development",
    skills: [".NET (ASP.NET Core, EF Core, Dapper)", "Supabase"],
  },
  {
    category: "Database",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Figma"],
  },
  {
    category: "Currently Learning",
    skills: ["Go"],
  },
];

export const certifications: Certification[] = [
  { name: "SQL (Basic)", issuer: "HackerRank" },
  { name: "SQL (Intermediate)", issuer: "HackerRank" },
  { name: "Dasar Pemrograman Web", issuer: "Dicoding" },
];

export const projects: Project[] = [
  {
    title: "BuddyDose",
    description:
      "A medication management web application designed to help users manage their daily medication routines effectively, with family-based management and real-time communication.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    image: "/buddydose/buddydose1.png",
    featured: true,
    highlights: [
      "Daily medication scheduling & intake tracking",
      "Inventory and expiration tracking",
      "Family-based medication management",
      "Calendar-based scheduling",
      "Group chat for family communication",
    ],
    githubUrl: "https://github.com/zakirvndi/buddydose",
    screenshots: [
      "/buddydose/buddydose1.png",
      "/buddydose/buddydose2.png",
      "/buddydose/buddydose3.png",
      "/buddydose/buddydose4.png",
      "/buddydose/buddydose5.png",
      "/buddydose/buddydose6.png",
    ],
  },
  {
    title: "Fiship",
    description:
      "Marketplace platform for fishermen to sell fish products online, featuring responsive design with product filtering and interactive UI elements.\n\nThis is University Project and built using vanilla code to strengthen the fundamentals of web development and provide a solid foundation.",
    tech: ["HTML5", "CSS", "JavaScript", "Figma"],
    image: "/fiship/fiship1.png",
    period: "Mar 2024 – Jul 2024",
    tags: ["University Project", "Vanilla"],
    highlights: [
      "Responsive design using Flexbox",
      "Interactive product filtering and pop-ups",
      "UI designed in Figma for usability and consistency",
      "Collaborative development via GitHub",
    ],
    githubUrl: "https://github.com/zakirvndi/fiship",
    screenshots: ["/fiship/fiship1.png", "/fiship/fiship2.png", "/fiship/fiship3.png"],
  },
  {
    title: "WorkIn",
    description:
      "Job portal platform connecting job seekers with employers, with job filtering, dynamic UI, and a strong focus on UX and navigation flow.\n\nThis is University Project and built using vanilla code to strengthen the fundamentals of web development and provide a solid foundation.",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    image: "/workin/workin1.png",
    period: "Apr 2024 – Jul 2024",
    tags: ["University Project", "Vanilla"],
    highlights: [
      "Job filtering and dynamic UI features",
      "Designed using Figma with focus on UX",
      "Tested and refined UI using prototypes",
      "Collaborative development via GitHub",
    ],
    githubUrl: "https://github.com/zakirvndi/workin",
    screenshots: ["/workin/workin1.png", "/workin/workin2.png"],
  },
  {
    title: "Stockas",
    description:
      "Backend-focused system project built with MVC and CQRS architecture, emphasizing maintainability, scalability, and clean code structure.",
    tech: [".NET", "MediatR", "FluentValidation", "CQRS"],
    image: "/stockas/stockas1.png",
    period: "Mar 2025 – Apr 2025",
    highlights: [
      "MVC and CQRS architecture",
      "MediatR and FluentValidation implementation",
      "Scalable backend design",
      "Clean code and maintainability focus",
    ],
    githubUrl: "https://github.com/zakirvndi/stockas",
    screenshots: ["/stockas/stockas1.png", "/stockas/stockas2.png", "/stockas/stockas3.png"],
  },
];
