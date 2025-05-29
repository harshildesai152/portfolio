
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Twitter, Briefcase, Users, Zap, Brain,SquareChevronRight , Lightbulb, Database, Server, Code, MonitorPlay,Rotate3d ,Webhook ,BookMinus,Speech , Construction, Palette, GitMerge, Container, FileText, Mail, MapPin, CheckCircle, ShieldCheck, Rocket, BrainCircuit, Layers, Component, Cloud, UsersRound, TrendingUp, Package, PackageCheck, Award, Dribbble, Instagram, ArrowRight, Activity, Star, GitFork, GraduationCap, FolderKanban } from 'lucide-react';
import myImage from '../image/my.jpg';
import project1 from '../image/Screenshot 2024-07-13 131735.png';
import project2 from '../image/Screenshot 2024-07-13 131749.png';
import project3 from '../image/Screenshot 2024-07-13 134104.png';
import project4 from '../image/Screenshot 2024-07-13 134301.png';
import project5 from '../image/Screenshot 2024-07-13 132537.png';
import project6 from '../image/Screenshot 2025-05-24 114707.png';
import project7 from '../image/Screenshot 2025-05-24 124202.png';
import project8 from '../image/Screenshot 2025-05-24 124022.png';
import project9 from '../image/Screenshot 2025-05-24 124037.png';
import project10 from '../image/Screenshot 2025-05-24 124058.png';
import project11 from '../image/Screenshot 2025-05-24 124112.png';
import project12 from '../image/Screenshot 2025-05-24 124150.png';
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
  des: string;
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
  title: string; // Added title field
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

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};


export const developerName = "Harshil Desai";
export const developerTitle = "Software Engineer";
export const developerTagline = "Building digital experiences that are intuitive, efficient, and impactful.";

export const bio = {
  introduction: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  profilePictureUrl: myImage,
  profilePictureAiHint: "professional portrait",
};

export const aboutStats: AboutStat[] = [
  { value: "+4", label: "Month of Experience" },
  { value: "+5", label: "Projects Completed" },
  { value: "+2", label: "Worldwide Clients" },
];

export const skills = {
  frontend: [
    { name: "React", icon: Component },
    { name: "Next.js", icon: Layers },
    { name: "Express js", icon: SquareChevronRight  },
    { name: "javaScript ", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Palette },
  ] as Skill[],
   Languages: [
    { name: "C", icon: Component },
    { name: "C++", icon: Layers },
    { name: "Python", icon: SquareChevronRight  },
    { name: "Java ", icon: Code },
  ] as Skill[],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "Python", icon: Code },
    // { name: "Django", icon: Server },
  ] as Skill[],
  databases: [
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Cloud },
    // { name: "Firebase", icon: Cloud },
  ] as Skill[],
  devops: [
    // { name: "Docker", icon: Container },
    // { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitMerge },
    { name: "GitHub", icon: Package },
  ] as Skill[],
  tools: [
    { name: "VS Code", icon: MonitorPlay },
    { name: "GitHub", icon: Github },
    // { name: "Jira", icon: Construction },
    { name: "Figma", icon: Palette },
  ] as Skill[],
  Libraries: [
    { name: "NumPy", icon: BrainCircuit },
    { name: "pandas", icon: Github },
    // { name: "Jira", icon: Construction },
    { name: "GUI", icon: BookMinus },
    { name: "pyttsx3", icon: Speech  },
    { name: "redux", icon: Webhook  },
    { name: "Axios", icon: Rotate3d },
  ] as Skill[],
};

export const projects: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: " E-Commerce Website | Developed an Admin Dashboard for product management, inventory control,and review and comments management, including payment integration using Stripe. UtilizedCloudinary for uploading, storing, and optimizing product images.Implemented user authenticationfor sign-up, login, password reset, and profile management. Added features for product search andfilters, shopping cart functionality, and the ability for users to view their purchase history and order details",
    thumbnailUrl: project1 ,
    thumbnailAiHint: "e-commerce products",
    techStack: [skills.frontend[0], skills.frontend[2], skills.backend[0], skills.databases[0]],
    githubUrl: "https://github.com/harraycoder/E-comm",
    demoUrl: "#",
    category: "Web Apps",
    galleryImageUrls: [
      { url: project2},
      { url: project3, aiHint: 'user checkout process' },
      { url: project4, aiHint: 'admin dashboard interface' },
      { url: project5, aiHint: 'mobile responsive view' },
    ],
  },
  { 
    id: "proj2",
    title: " Speech To Recognize",  
    description: " Speech To Recognize | Developed an intelligent speech recognition assistant using Python, which recognized and processed specific voice commands to execute tasks. Utilized libraries such as SpeechRecognition, PyAudio, and pydub for audio processing and speech recognition. Implemented real- time speech recognition, text-to-speech, web automation, email handling, YouTube video downloading, and GUI automation.",
    thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8JTJGZSUyMGNvbWVzZSUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ3NTc2MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    thumbnailAiHint: "api code",
    techStack: [skills.backend[2]],
    githubUrl: "https://github.com/harraycoder/personal-assistant-",
    category: "APIs",
    galleryImageUrls: [
      { url: project6 , aiHint: 'api endpoint example' },
      // { url: 'https://placehold.co/600x400.png', aiHint: 'database schema diagram' },
      // { url: 'https://placehold.co/600x400.png', aiHint: 'code snippet' },
    ],
  },
  {
    id: "proj3",
    title: "Movie Website",
    description: " Created intuitive navigation, engaging visual elements, and efficient layout structures for a movie website. Utilized libraries like Google Fonts and frameworks like Bootstrap for enhanced functionality and design. Implemented interactive features such as sliders, video controls, and navigation menus.",
    thumbnailUrl: project9,
    thumbnailAiHint: "portfolio website",
    techStack: [skills.frontend[5], skills.frontend[6], skills.frontend[3]],
    githubUrl: "https://github.com/harraycoder/poka-movie",
    category: "Web Apps",
    galleryImageUrls: [
      { url: project7, aiHint: 'dark mode' },
      { url: project8, aiHint: 'dark mode' },
      { url: project9, aiHint: 'dark mode' },
      { url: project10, aiHint: 'dark mode' },
      { url: project11, aiHint: 'dark mode' },
      { url: project12, aiHint: 'dark mode' },
  
    ],
  },
  // {
  //   id: "proj4",
  //   title: "AI Content Generator",
  //   description: "A proof-of-concept application using OpenAI's API to generate blog post ideas and short content snippets based on user prompts. The application features a simple interface for users to input keywords or topics, and it then interacts with the Genkit AI to produce creative and relevant content suggestions. This project explored prompt engineering techniques and the integration of large language models into web applications.",
  //   thumbnailUrl: "https://images.unsplash.com/photo-1665623544684-3069fb6457e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhbCUyMGNvbnRlbnQlMjBnZW5lcmF0b3J8ZW58MHx8fHwxNzQ3NTc3NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   thumbnailAiHint: "ai interface",
  //   techStack: [skills.frontend[0], skills.backend[2], { name: "Genkit", icon: BrainCircuit }],
  //   githubUrl: "https://github.com/yourusername/ai-content-gen",
  //   demoUrl: "#",
  //   category: "ML",
  //   galleryImageUrls: [
  //     { url: 'https://placehold.co/600x400.png', aiHint: 'input form example' },
  //     { url: 'https://placehold.co/600x400.png', aiHint: 'content output' },
  //   ],
  // },
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Internship",
    company: "ACCELATE INNOVATIONS LLP",
    duration: "may 2024",
    location: "Surat, India",
    responsibilities: [
      " Worked on a Full-stack E-commerce application using Node.js for backend API calls, MongoDB for  database connectivity, React.js, and Redux for frontend state management",
      "Used Redux to store filter options and dispatch actions to fetch updated product lists based on user input.",
      "Built a Redux store for the cart with actions to add, remove, and update quantity of products.",
      "Admin Dashboard for managing products, inventory, and reviews, with Stripe payment integration and Cloudinary for image storage.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: " ACCELATE INNOVATIONS LLP",
    duration: "Jan 2025 ",
    location: "Surat, India",
    responsibilities: [
      " I am currently working as a React.js Developer Intern, specializing in the development and enhancement of dynamic web interfaces utilizing React.js, Next.js, and Redux.",
      "Engineered key features including dynamic slug generation, server-side pagination for enhanced SEO and performance.",
      "Optimized component rendering through efficient state and prop management. Utilized props to pass data into a reusable common filter component, improving code modularity and reusability.",
      "Integrated encryption/decryption techniques to ensure secure data handling. Collaborated in an agile environment, contributing to feature development and code reviews.",
    ],
  },
  // {
  //   role: "Junior Web Developer",
  //   company: "StartUp Vision",
  //   duration: "Jan 2025 - Feb 2020",
  //   location: "Remote",
  //   responsibilities: [
  //       "Collaborated with design and product teams to create user-friendly web interfaces.",
  //       "Maintained and updated existing codebases, fixing bugs and improving functionality.",
  //       "Assisted in implementing responsive designs and ensuring cross-browser compatibility.",
  //       "Participated in code reviews and team meetings to improve development processes."
  //   ],
  // },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering ",
    university: " Madhuben and Bhanubhai Patel Institute of Technology, CVM University",
    des:"I pursued my Bachelor of Engineering in Computer Engineering atMadhuben and Bhanubhai Patel Institute of Technology, a reputed institution under Charutar Vidya Mandal  (CVM University). During the course of my studies from 2021 to 2025, , I built a solid grounding in programming, algorithms, software engineering, and modern technologies such as machine learning and web development. The curriculum offered a balanced mix of academic theory and practical exposure through real-world projects, internships, and workshops aligned with current industry trends.",
    years: "2021 - 2025",
    achievements: ["Additional course on Emerging Technologies by SAP, Edunet Foundation, Code Unnati", 
      // "Thesis on Scalable Distributed Systems"
    ],
  },
  {
    degree: "HSC - Science Stream (Mathematics)",
    university: "Ashadeep IIT | Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    des:"I completed my higher secondary education in the Science stream with Mathematics from Ashadeep IIT. During this period, I developed a strong interest in problem-solving, logical thinking, and analytical skills, which laid the foundation for my journey into engineering. Alongside my academic curriculum, I prepared for competitive exams such as JEE (Joint Entrance Examination) and GUJCET (Gujarat Common Entrance Test).",
    years: "2019 - 2020",
    
  },
];

export const certifications: Certification[] = [
  {
    id: "cert1",
    name: " Google Cloud Skills Boost",
    issuingOrganization: "Prepare Data for ML APIs on Google Cloud",
    date: "Issued: Oct , 2023",
    credentialUrl: "https://www.credly.com/your-badge-url-1",
    icon: Award,
    description: "Complete the introductory Prepare Data for ML APIs on Google Cloud skill badge to demonstrate skills in the following: cleaning data with Dataprep by Trifacta, running data pipelines in Dataflow, creating clusters and running Apache Spark jobs in Dataproc, and calling ML APIs including the Cloud Natural Language API, Google Cloud Speech-to-Text API, and Video Intelligence API. A skill badge is an exclusive digital badge issued by Google Cloud in recognition of your proficiency with Google Cloud products and services and tests your ability to apply your knowledge in an interactive hands-on environment. Complete this skill badge course, and the final assessment challenge lab, to receive a skill badge that you can share with your network.",
  },
  {
    id: "cert2",
    name: " Google Cloud Skills Boost",
    issuingOrganization: " Google Cloud Computing Foundations: Networking & Security in Google Cloud",
    date: "Issued: Oct , 2023",
    credentialUrl: "https://www.credly.com/your-badge-url-2",
    icon: Award,
    description: "The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills. The courses should be completed in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud This third course covers cloud automation and management tools and building secure networks.",
  },
  {
    id: "cert3",
    name: " Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuingOrganization: "Cloud Computing Fundamentals",
    date: "Issued: Oct , 2023",
    credentialUrl: "https://www.scrum.org/your-badge-url-3", // Added placeholder URL
    icon: PackageCheck,
    description: "The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills. The courses should be completed in the following order: 1. Google Cloud Computing Foundations: Cloud Computing Fundamentals 2. Google Cloud Computing Foundations: Infrastructure in Google Cloud 3. Google Cloud Computing Foundations: Networking and Security in Google Cloud 4. Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud This first course provides an overview of cloud computing, ways to use Google Cloud, and different compute options.",
  },
    {
    id: "cert4",
    name: "  Emerging Technologies by SAP, Edunet Foundation",
    issuingOrganization: "Code Unnati",
    date: "Issued: may , 2023",
    credentialUrl: "https://www.scrum.org/your-badge-url-3", // Added placeholder URL
    icon: PackageCheck,
    description: " Emerging Technologies by SAP, Edunet Foundation, Code Unnati This course provided valuable insights into the latest emerging technologies like Machine Learning, Deep Learning, Computer Vision and loT with Raspberry Pl and Groove PI with integration of some amazing sensors and their practical applications across different sectors. I am excited to apply this knowledge to drive innovation and create impactful solutions.",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/harraycoder", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/harshil-desai-aba792284", icon: Linkedin },
  // { name: "Dribbble", url: "#", icon: Dribbble },
  // { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter },
  { name: "Instagram", url: "https://www.instagram.com/harshil_desai_?igsh=N3E5cnk3bTVjeHpq", icon: Instagram },
  { name: "Email", url: "mailto:harshildesai152@gmail.com", icon: Mail },
];

export const contactDetails = {
  email: "harshildesai152@gmail.com",
  resumeUrl: "/placeholder-resume.pdf",
  location: "Surat, India",
};

export const gitHubActivityData: GitHubActivity = {
  username: "yourusername",
  totalRepositories: 5,
  starsReceived: 0,
  forks: 5,
  contributionsLastYear: 6,
  profileUrl: "https://github.com/harshil-desai-aba792284",
  recentCommits: [
    { message: "feat: Implement new user authentication flow", repo: "ecommerce-platform", url: "#" },
    { message: "fix: Resolve critical bug in payment processing", repo: "ecommerce-platform", url: "#" },
    { message: "docs: Update API documentation for v2", repo: "task-api", url: "#" },
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    title: "A master of frontend development with a keen design sensibility",
    quote: "Alex is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth. We're extremely happy with the results and would highly recommend him!",
    author: "Jane Doe",
    role: "Project Manager, Tech Solutions Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "woman professional",
  },
  {
    id: "testimonial2",
    title: "A frontend developer who transforms visions into reality",
    quote: "Working with Alex was a fantastic experience. They are not only technically proficient but also an excellent communicator and team player. Consistently delivered high-quality work on time.",
    author: "John Smith",
    role: "Lead Developer, Innovate Startups Co.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "man smiling",
  },
  {
    id: "testimonial3",
    title: "Efficient, innovative, and a pleasure to work with",
    quote: "Alex's innovative approach and deep understanding of web technologies significantly improved our application's performance and user experience. Highly recommended!",
    author: "Alice Brown",
    role: "CTO, Alpha Web Services",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarAiHint: "executive woman",
  },
];

export const footerText = `© ${new Date().getFullYear()} ${developerName}. All rights reserved.`;

export const companyLogos: CompanyLogo[] = [
  { name: "LogoIpsum1", url: "https://placehold.co/150x50.png?text=LogoIpsum+1", aiHint: "company logo" },
  { name: "LogoIpsum2", url: "https://placehold.co/150x50.png?text=LogoIpsum+2", aiHint: "tech company" },
  { name: "LogoIpsum3", url: "https://placehold.co/150x50.png?text=LogoIpsum+3", aiHint: "startup logo" },
  { name: "LogoIpsum4", url: "https://placehold.co/150x50.png?text=LogoIpsum+4", aiHint: "partner logo" },
];

export const faqItems: FAQItem[] = [
  // {
  //   id: "faq1",
  //   question: "What services do you offer?",
  //   answer: "I offer a range of services including custom web development, frontend and backend solutions, API development, and UI/UX design consulting. My goal is to build scalable and high-performing digital products tailored to client needs."
  // },
  {
    id: "faq2",
    question: "What is your design process?",
    answer: "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs."
  },
  {
    id: "faq3",
    question: "How do you handle project timelines?",
    answer: "I work closely with clients to establish clear timelines and milestones, ensuring that projects stay on track and are delivered on time. Regular communication and transparent progress tracking are key components of my approach."
  },
  {
    id: "faq4",
    question: "Can you work with existing teams?",
    answer: "Absolutely! I can collaborate seamlessly with existing teams, integrating into your workflow to enhance design and development efforts. I'm experienced in various team structures and communication tools."
  },
  {
    id: "faq5",
    question: "What tools do you use?",
    answer: "I utilize various tools for design and development, including Figma, Adobe XD, HTML, CSS, JavaScript, and React, ensuring high-quality outcomes for all projects. I'm also proficient with backend technologies like Node.js, Python, and various database systems."
  }
];
