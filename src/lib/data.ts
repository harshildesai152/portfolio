import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Twitter, Briefcase, Users, Zap, Brain, Lightbulb, Database, Server, Code, MonitorPlay, Construction, Palette, GitMerge, Container, FileText, Mail, MapPin, CheckCircle, ShieldCheck, Rocket, BrainCircuit, Layers, Component, Cloud, UsersRound, TrendingUp, Package, PackageCheck } from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAiHint: string;
  techStack: Skill[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  logoUrl?: string;
  logoAiHint?: string;
};

export type EducationItem = {
  degree: string;
  university: string;
  years: string;
  achievements?: string[];
};

export const developerName = "Alex Johnson";
export const developerTitle = "Software Engineer";
export const developerTagline = "Building digital experiences that are intuitive, efficient, and impactful.";

export const bio = {
  introduction: "A passionate and results-oriented Software Engineer with 3+ years of experience in developing and deploying robust web applications. Educated with a Master's in Computer Science, I thrive on solving complex problems and continuously expanding my skillset. My career goal is to leverage technology to create innovative solutions that make a tangible difference.",
  profilePictureUrl: "https://placehold.co/300x300.png",
  profilePictureAiHint: "professional portrait",
};

export const softSkills: Skill[] = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Effective Communication", icon: Briefcase }, // Using Briefcase as a generic icon for communication
  { name: "Adaptability", icon: Zap },
  { name: "Critical Thinking", icon: Brain },
];

export const personalValues: Skill[] = [
  { name: "Continuous Learning", icon: TrendingUp },
  { name: "Integrity & Ownership", icon: ShieldCheck },
  { name: "User-Centric Design", icon: UsersRound },
  { name: "Quality Craftsmanship", icon: PackageCheck },
  { name: "Innovation", icon: Rocket }
];

export const skills = {
  frontend: [
    { name: "React", icon: Component }, // Lucide 'Component' for React
    { name: "Next.js", icon: Layers }, // Lucide 'Layers' for Next.js
    { name: "TypeScript", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Palette },
  ] as Skill[],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "Python", icon: Code },
    { name: "Django", icon: Server },
  ] as Skill[],
  databases: [
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Firebase", icon: Cloud }, // Using Cloud for Firebase
  ] as Skill[],
  devops: [
    { name: "Docker", icon: Container }, // Replaced Docker with Container
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitMerge },
    { name: "CI/CD", icon: Package },
  ] as Skill[],
  tools: [
    { name: "VS Code", icon: MonitorPlay }, // Using MonitorPlay for VS Code
    { name: "GitHub", icon: Github },
    { name: "Jira", icon: Construction }, // Using Construction for Jira
    { name: "Figma", icon: Palette },
  ] as Skill[],
};

export const projects: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing inventory and orders.",
    thumbnailUrl: "https://placehold.co/600x400.png",
    thumbnailAiHint: "e-commerce products",
    techStack: [skills.frontend[0], skills.frontend[1], skills.backend[0], skills.databases[0]],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "#",
    category: "Web Apps",
  },
  {
    id: "proj2",
    title: "Task Management API",
    description: "A RESTful API for managing tasks, users, and projects, built with Node.js and Express, featuring JWT authentication and comprehensive test coverage.",
    thumbnailUrl: "https://placehold.co/600x400.png",
    thumbnailAiHint: "api code",
    techStack: [skills.backend[0], skills.backend[1], skills.databases[1]],
    githubUrl: "https://github.com/yourusername/task-api",
    category: "APIs",
  },
  {
    id: "proj3",
    title: "Portfolio Website v2",
    description: "The very website you are currently viewing! Built with Next.js and Tailwind CSS, showcasing my skills and projects in a responsive design.",
    thumbnailUrl: "https://placehold.co/600x400.png",
    thumbnailAiHint: "portfolio website",
    techStack: [skills.frontend[0], skills.frontend[1], skills.frontend[3]],
    githubUrl: "https://github.com/yourusername/portfolio-v2",
    category: "Web Apps",
  },
  {
    id: "proj4",
    title: "AI Content Generator",
    description: "A proof-of-concept application using OpenAI's API to generate blog post ideas and short content snippets based on user prompts.",
    thumbnailUrl: "https://placehold.co/600x400.png",
    thumbnailAiHint: "ai interface",
    techStack: [skills.frontend[0], skills.backend[2], { name: "OpenAI API", icon: BrainCircuit }],
    githubUrl: "https://github.com/yourusername/ai-content-gen",
    demoUrl: "#",
    category: "ML",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Developed and maintained scalable web applications using React, Node.js, and MongoDB.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Improved application performance by 20% through code optimization and database query tuning.",
      "Implemented CI/CD pipelines for automated testing and deployment.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoAiHint: "tech logo",
  },
  {
    role: "Junior Developer Intern",
    company: "Innovate Startups Co.",
    duration: "Jun 2021 - Dec 2021",
    responsibilities: [
      "Assisted senior developers in building and testing new software modules.",
      "Contributed to frontend development tasks using HTML, CSS, and JavaScript.",
      "Participated in agile development processes and daily stand-ups.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    logoAiHint: "startup logo",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    university: "Stanford University",
    years: "2019 - 2021",
    achievements: ["Graduated with Distinction", "Thesis on Scalable Distributed Systems"],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    university: "University of California, Berkeley",
    years: "2015 - 2019",
    achievements: ["Dean's List (4 semesters)", "Lead Developer for Capstone Project"],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter },
];

export const contactDetails = {
  email: "alex.johnson@example.com",
  resumeUrl: "/placeholder-resume.pdf", // Placeholder path
  location: "San Francisco, CA", // Optional
};

export const footerText = `© ${new Date().getFullYear()} ${developerName}. All rights reserved.`;

