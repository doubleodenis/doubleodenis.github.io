export interface PreviousTitle {
  title: string;
  period?: string;
}

export interface Experience {
  title: string;
  titlePeriod?: string; // Period for current title specifically
  company: string;
  companyUrl: string;
  period: string; // Full tenure at company
  description: string;
  technologies: string[];
  previousTitles?: PreviousTitle[];
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
    titlePeriod: "2022 — Present",
    company: "PROS",
    companyUrl: "https://pros.com",
    period: "2019 — Present",
    description:
      "Building and maintaining internal and customer-facing advertisement solutions to travel industry clients. Collaborating with cross-functional teams to design and implement scalable features, optimize performance, and ensure high-quality user experiences.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Storybook",
      "Karma",
      "Cypress",
    ],
    previousTitles: [
      { title: "Software Engineer 1" },
      { title: "Software Engineer Intern" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "CommandZone",
    description:
      "A competitive stat tracker featuring an multiplayer ELO system, leaderboards, and interactive data visualizations.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "Vitest",
    ],
    live: "https://mtgcommandzone.netlify.app",
  },
  {
    title: "EchoSMS",
    description:
      "A bulk SMS delivery platform that uses a job queue to schedule and manage message delivery through the Twilio API.",
    technologies: ["React", "Next.js", "MongoDB", "AWS"],
  },
  {
    title: "Beck College Prep",
    description:
      "Web application for a tutoring company to attract new students and manage existing ones.",
    technologies: ["React", "GatsbyJS", "MongoDB"],
    github: "https://github.com/doubleodenis/project-four",
    live: "https://beckcollegeprep.com",
  },
];
