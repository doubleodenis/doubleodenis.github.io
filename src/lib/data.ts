export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer 2",
    company: "Your Company",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    description:
      "Building and maintaining scalable web applications with modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions that improve user experience and drive business value.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Previous Company",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    description:
      "Developed and maintained multiple client-facing applications. Implemented new features, optimized performance, and contributed to architectural decisions. Mentored junior developers and participated in code reviews.",
    technologies: ["JavaScript", "React", "Python", "Django", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "First Company",
    companyUrl: "https://example.com",
    period: "2019 — 2021",
    description:
      "Started my professional journey building responsive web applications. Learned best practices for clean code, version control, and agile methodologies. Contributed to various frontend and backend projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a beautiful dark theme. Showcases my work and skills in an engaging way.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/doubleodenis/portfolio",
    live: "https://denisortega.dev",
  },
  {
    title: "Project Two",
    description:
      "A full-stack web application that solves a real-world problem. Features user authentication, real-time updates, and a responsive design that works on all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/doubleodenis/project-two",
    live: "https://project-two.com",
  },
  {
    title: "Project Three",
    description:
      "An open-source tool that helps developers be more productive. Built with performance and developer experience in mind.",
    technologies: ["TypeScript", "CLI", "Node.js"],
    github: "https://github.com/doubleodenis/project-three",
  },
  {
    title: "Project Four",
    description:
      "A mobile-first web app with offline capabilities and push notifications. Demonstrates modern PWA techniques and best practices.",
    technologies: ["React", "PWA", "Service Workers", "IndexedDB"],
    github: "https://github.com/doubleodenis/project-four",
    live: "https://project-four.com",
  },
];
