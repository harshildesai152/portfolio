
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Twitter, Briefcase, Users, Zap, Brain, Lightbulb, Database, Server, Code, MonitorPlay, Construction, Palette, GitMerge, Container, FileText, Mail, MapPin, CheckCircle, ShieldCheck, Rocket, BrainCircuit, Layers, Component, Cloud, UsersRound, TrendingUp, Package, PackageCheck, Award, Dribbble, Instagram, ArrowRight, Activity, Star, GitFork } from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type GalleryImage = {
  url: string;
  aiHint: string;
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
  galleryImageUrls?: GalleryImage[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  responsibilities: string[];
};

export type EducationItem = {
  degree: string;
  university: string;
  years: string;
  achievements?: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  credentialUrl?: string;
  icon: LucideIcon;
  description?: string;
};

export type GitHubActivity = {
  username: string;
  totalRepositories: number;
  starsReceived: number;
  forks: number;
  contributionsLastYear: number;
  profileUrl: string;
  recentCommits?: { message: string; repo: string; url: string }[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  avatarAiHint: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type CompanyLogo = {
  name: string;
  url: string;
  aiHint: string;
};


export const developerName = "Alex Johnson";
export const developerTitle = "Software Engineer"; // Kept original title, image shows "Product Designer & Developer"
export const developerTagline = "Building digital experiences that are intuitive, efficient, and impactful.";

export const bio = {
  // Updated introduction to match the image's subtitle
  introduction: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  profilePictureUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzQ3NTc2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  profilePictureAiHint: "professional portrait",
};

// New stats data based on the image
export const aboutStats: AboutStat[] = [
  { value: "+12", label: "Years of Experience" },
  { value: "+46", label: "Projects Completed" },
  { value: "+20", label: "Worldwide Clients" },
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
    description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing inventory and orders. This project involved a deep dive into user experience design, secure payment gateway integration, and efficient state management for a seamless shopping experience. Scalability was a key consideration, leading to the adoption of microservices for certain backend functionalities.",
    thumbnailUrl: "https://images.unsplash.com/photo-1707553513157-4dfd44e857e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxFJTIwY29tbWVyY2UlMjBwbGF0Zm9ybXxlbnwwfHx8fDE3NDc1NzcyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    thumbnailAiHint: "e-commerce products",
    techStack: [skills.frontend[0], skills.frontend[1], skills.backend[0], skills.databases[0]],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "#",
    category: "Web Apps",
    galleryImageUrls: [
      { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8RS1jb21tZXJjZSUyMCUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ3NTgzNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'product detail page' },
      { url: 'https://placehold.co/600x400.png', aiHint: 'user checkout process' },
      { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8RS1jb21tZXJjZSUyMCUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ3NTgzNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'admin dashboard interface' },
      { url: 'https://placehold.co/600x400.png', aiHint: 'mobile responsive view' },
    ],
  },
  {
    id: "proj2",
    title: "Task Management API",
    description: "A RESTful API for managing tasks, users, and projects, built with Node.js and Express, featuring JWT authentication and comprehensive test coverage using Jest and Supertest. The API supports CRUD operations for all resources, real-time updates via WebSockets for collaborative features, and role-based access control to ensure data security and integrity. Documentation was generated using Swagger/OpenAPI.",
    thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8JTJGZSUyMGNvbWVzZSUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ3NTc2MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    thumbnailAiHint: "api code",
    techStack: [skills.backend[0], skills.backend[1], skills.databases[1]],
    githubUrl: "https://github.com/yourusername/task-api",
    category: "APIs",
    galleryImageUrls: [
      { url: 'https://placehold.co/600x400.png', aiHint: 'api endpoint example' },
      { url: 'https://placehold.co/600x400.png', aiHint: 'database schema diagram' },
    ],
  },
  {
    id: "proj3",
    title: "Portfolio Website v2",
    description: "The very website you are currently viewing! Built with Next.js and Tailwind CSS, showcasing my skills and projects in a responsive design. Leverages server-side rendering for improved SEO and performance, and features a clean, modern UI with smooth animations. Implemented a custom theme switcher and a dynamic project detail page. The focus was on creating a performant and visually appealing showcase of my capabilities.",
    thumbnailUrl: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8UG9ydGZvbGlvJTIwV2Vic2l0ZSUyMHYyfGVufDB8fHx8MTc0NzU3NjE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    thumbnailAiHint: "portfolio website",
    techStack: [skills.frontend[0], skills.frontend[1], skills.frontend[3]],
    githubUrl: "https://github.com/yourusername/portfolio-v2",
    category: "Web Apps",
    galleryImageUrls: [
      { url: 'https://placehold.co/600x400.png', aiHint: 'dark mode' },
      { url: 'https://placehold.co/600x400.png', aiHint: 'projects section' },
    ],
  },
  {
    id: "proj4",
    title: "AI Content Generator",
    description: "A proof-of-concept application using OpenAI's API to generate blog post ideas and short content snippets based on user prompts. The application features a simple interface for users to input keywords or topics, and it then interacts with the Genkit AI to produce creative and relevant content suggestions. This project explored prompt engineering techniques and the integration of large language models into web applications.",
    thumbnailUrl: "https://images.unsplash.com/photo-1665623544684-3069fb6457e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhbCUyMGNvbnRlbnQlMjBnZW5lcmF0b3J8ZW58MHx8fHwxNzQ3NTc3NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    thumbnailAiHint: "ai interface",
    techStack: [skills.frontend[0], skills.backend[2], { name: "Genkit", icon: BrainCircuit }],
    githubUrl: "https://github.com/yourusername/ai-content-gen",
    demoUrl: "#",
    category: "ML",
    galleryImageUrls: [
      { url: 'https://placehold.co/600x400.png', aiHint: 'input form example' },
      { url: 'https://placehold.co/600x400.png', aiHint: 'content output' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Lead a team of 5 developers in building modern web applications using React, TypeScript, and NextJS.",
      "Reduced page load time by 40% through performance optimizations and code splitting.",
      "Implemented CI/CD pipelines that decreased deployment time by 60%.",
      "Mentored junior developers and conducted code reviews to ensure quality standards.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "Mar 2020 - Dec 2021",
    location: "Boston, MA",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.",
      "Created responsive frontend interfaces with React and Material UI.",
      "Implemented authentication and authorization using JWT and OAuth.",
      "Designed and managed MongoDB databases for multiple projects.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Vision",
    duration: "Jun 2018 - Feb 2020",
    location: "Remote",
    responsibilities: [
        "Collaborated with design and product teams to create user-friendly web interfaces.",
        "Maintained and updated existing codebases, fixing bugs and improving functionality.",
        "Assisted in implementing responsive designs and ensuring cross-browser compatibility.",
        "Participated in code reviews and team meetings to improve development processes."
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

export const certifications: Certification[] = [
  {
    id: "cert1",
    name: "AWS Certified Solutions Architect - Associate",
    issuingOrganization: "Amazon Web Services (AWS)",
    date: "Issued: Mar 2023",
    credentialUrl: "https://www.credly.com/your-badge-url-1",
    icon: Award,
    description: "Validated ability to design and deploy well-architected solutions on AWS.",
  },
  {
    id: "cert2",
    name: "Certified Kubernetes Administrator (CKA)",
    issuingOrganization: "The Linux Foundation & CNCF",
    date: "Issued: Sep 2022",
    credentialUrl: "https://www.credly.com/your-badge-url-2",
    icon: Award,
    description: "Demonstrated expertise in managing and administering Kubernetes clusters.",
  },
  {
    id: "cert3",
    name: "Professional Scrum Master I (PSM I)",
    issuingOrganization: "Scrum.org",
    date: "Issued: Jun 2021",
    credentialUrl: "https://www.scrum.org/your-badge-url-3", // Added placeholder URL
    icon: PackageCheck,
    description: "Proficiency in Scrum principles, practices, and the role of the Scrum Master.",
  },
];


// Updated social links to match the image
export const socialLinks = [
  { name: "Dribbble", url: "#", icon: Dribbble }, // Placeholder URL
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter },
  { name: "Instagram", url: "#", icon: Instagram }, // Placeholder URL
  { name: "Email", url: "mailto:alex.johnson@example.com", icon: Mail },
];

export const contactDetails = {
  email: "alex.johnson@example.com",
  resumeUrl: "/placeholder-resume.pdf",
  location: "San Francisco, CA", // Used for About Me card
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

// New data for company logos
export const companyLogos: CompanyLogo[] = [
  { name: "LogoIpsum1", url: "https://placehold.co/150x50.png?text=LogoIpsum+1", aiHint: "company logo" },
  { name: "LogoIpsum2", url: "https://placehold.co/150x50.png?text=LogoIpsum+2", aiHint: "tech company" },
  { name: "LogoIpsum3", url: "https://placehold.co/150x50.png?text=LogoIpsum+3", aiHint: "startup logo" },
  { name: "LogoIpsum4", url: "https://placehold.co/150x50.png?text=LogoIpsum+4", aiHint: "partner logo" },
];

    