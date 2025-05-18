
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Twitter, Briefcase, Users, Zap, Brain, Lightbulb, Database, Server, Code, MonitorPlay, Construction, Palette, GitMerge, Container, FileText, Mail, MapPin, CheckCircle, ShieldCheck, Rocket, BrainCircuit, Layers, Component, Cloud, UsersRound, TrendingUp, Package, PackageCheck, Quote, GitFork, Star, CalendarDays, Award } from 'lucide-react';

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
  location?: string; // Added location
  responsibilities: string[];
  // logoUrl and logoAiHint removed
};

export type EducationItem = {
  degree: string;
  university: string;
  years: string;
  achievements?: string[];
};

export type GitHubActivity = {
  username: string;
  totalRepositories: number;
  starsReceived: number;
  forks: number;
  contributionsLastYear: number; // Or a string like "500+"
  profileUrl: string;
  recentCommits?: { message: string; repo: string; url: string }[]; // Simplified
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  avatarAiHint: string;
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
  { name: "Effective Communication", icon: Briefcase },
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
    { name: "React", icon: Component },
    { name: "Next.js", icon: Layers },
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
    { name: "Firebase", icon: Cloud },
  ] as Skill[],
  devops: [
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitMerge },
    { name: "CI/CD", icon: Package },
  ] as Skill[],
  tools: [
    { name: "VS Code", icon: MonitorPlay },
    { name: "GitHub", icon: Github },
    { name: "Jira", icon: Construction },
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
    role: "Senior Frontend Developer", // Updated role to match image
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA", // Added location
    responsibilities: [
      "Lead a team of 5 developers in building modern web applications using React, TypeScript, and NextJS.", // Matched OCR
      "Reduced page load time by 40% through performance optimizations and code splitting.", // Matched OCR
      "Implemented CI/CD pipelines that decreased deployment time by 60%.", // Matched OCR
      "Mentored junior developers and conducted code reviews to ensure quality standards.", // Matched OCR
    ],
  },
  {
    role: "Full Stack Developer", // Matched OCR
    company: "Digital Solutions Ltd.", // Matched OCR
    duration: "Mar 2020 - Dec 2021", // Matched OCR
    location: "Boston, MA", // Added location
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.", // Matched OCR
      "Created responsive frontend interfaces with React and Material UI.", // Matched OCR (used Material UI from OCR)
      "Implemented authentication and authorization using JWT and OAuth.", // Matched OCR
      "Designed and managed MongoDB databases for multiple projects.", // Matched OCR
    ],
  },
  {
    role: "Junior Web Developer", // Added from OCR
    company: "StartUp Vision", // Added from OCR
    duration: "Jun 2018 - Feb 2020", // Added from OCR
    location: "Remote", // Added from OCR
    responsibilities: [
        "Collaborated with design and product teams to create user-friendly web interfaces.", // Added from OCR
        "Maintained and updated existing codebases, fixing bugs and improving functionality.", // Added from OCR
        "Assisted in implementing responsive designs and ensuring cross-browser compatibility.", // Added from OCR
        "Participated in code reviews and team meetings to improve development processes." // Added from OCR
    ],
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
  resumeUrl: "/placeholder-resume.pdf",
  location: "San Francisco, CA",
};

export const gitHubActivityData: GitHubActivity = {
  username: "yourusername",
  totalRepositories: 75,
  starsReceived: 320,
  forks: 150,
  contributionsLastYear: 1200,
  profileUrl: "https://github.com/yourusername",
  recentCommits: [
    { message: "feat: Implement new user authentication flow", repo: "ecommerce-platform", url: "#" },
    { message: "fix: Resolve critical bug in payment processing", repo: "ecommerce-platform", url: "#" },
    { message: "docs: Update API documentation for v2", repo: "task-api", url: "#" },
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    quote: "Alex is a highly skilled and dedicated software engineer. Their problem-solving abilities and attention to detail were instrumental in the success of our project. A true asset to any team!",
    author: "Jane Doe",
    role: "Project Manager, Tech Solutions Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "woman professional",
  },
  {
    id: "testimonial2",
    quote: "Working with Alex was a fantastic experience. They are not only technically proficient but also an excellent communicator and team player. Consistently delivered high-quality work on time.",
    author: "John Smith",
    role: "Lead Developer, Innovate Startups Co.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "man smiling",
  },
  {
    id: "testimonial3",
    quote: "Alex's innovative approach and deep understanding of web technologies significantly improved our application's performance and user experience. Highly recommended!",
    author: "Alice Brown",
    role: "CTO, Alpha Web Services",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "executive woman",
  },
];

export const footerText = `© ${new Date().getFullYear()} ${developerName}. All rights reserved.`;
