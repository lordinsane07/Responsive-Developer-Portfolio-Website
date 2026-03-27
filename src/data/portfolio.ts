// ─────────────────────────────────────────────
// Mrittick Deb — Portfolio Data Configuration
// Edit this file to update all portfolio content
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Mrittick Deb",
  firstName: "Mrittick",
  lastName: "Deb",
  roles: [
    "Full Stack Developer",
    "ML Engineer",
    "Flutter Developer",
    "Open Source Contributor",
    "Competitive Programmer",
  ],
  bio: `I’m a Computer Science engineer focused on building production-grade, real-time software systems that integrate intelligent machine learning workflows. My work spans full-stack platforms, distributed architectures, and applied AI — from agentic RAG research systems to real-time collaborative interview simulators and offline-first mobile applications.\n\nI specialize in designing scalable backend infrastructures, low-latency event systems, and end-to-end product experiences that move from research ideas to deployed software. Alongside core engineering, I work with machine learning and data science to build practical AI features such as semantic retrieval, fairness-aware evaluation, and NLP-driven analysis.\n\nOutside product building, I sharpen problem-solving through competitive programming and deepen security thinking through hands-on offensive learning platforms.`,
  location: "Siliguri, West Bengal, India",
  email: "debmrittick@gmail.com",
  resumeUrl: "/cv/FEBGENCVMRITTICKDEB.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/lordinsane07", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrittick-deb-600763275/",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lord_insane/",
    icon: "leetcode",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/lord_insane",
    icon: "codeforces",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/lord_insane",
    icon: "gfg",
  },
  {
    name: "TakeUforward",
    url: "https://takeuforward.org/profile/lord_insane",
    icon: "takeuf",
  },
  {
    name: "Code360",
    url: "https://www.naukri.com/code360/profile/lordinsane",
    icon: "code360",
  },
  {
    name: "TryHackMe",
    url: "https://tryhackme.com/p/lordinsane",
    icon: "tryhackme",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/insane_hustler07/",
    icon: "instagram",
  },
  {
    name: "Twitter",
    url: "https://x.com/lord_insane69",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:debmrittick@gmail.com",
    icon: "email",
  },
];

export const stats = [
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "LeetCode Contests", value: 25, suffix: "%", prefix: "Top " },
  { label: "TryHackMe", value: 7, suffix: "%", prefix: "Top " },
  { label: "CGPA", value: 8.05, suffix: "/10", decimals: 2 },
];

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Dart" },
      { name: "Python" },
      { name: "C" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter 3.13+" },
      { name: "Dart 3.0+" },
      { name: "Bloc" },
      { name: "Riverpod" },
      { name: "Hive" },
      { name: "SQLite/SQLCipher" },
      { name: "FCM" },
    ],
  },
  {
    category: "Full-Stack",
    skills: [
      { name: "React.js 18" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js 18+" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Redis" },
      { name: "WebRTC" },
    ],
  },
  {
    category: "Real-Time & APIs",
    skills: [
      { name: "Socket.io" },
      { name: "WebSocket" },
      { name: "RESTful API" },
      { name: "JWT" },
      { name: "OAuth 2.0" },
      { name: "OpenAI API" },
      { name: "Cloudinary API" },
      { name: "Brevo SMTP" },
      { name: "Groq" },
      { name: "RapidAPI" },
      { name: "Judge0" },
      { name: "LiveKit" },
      { name: "Resend" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "GitHub Actions CI/CD" },
      { name: "Nginx" },
      { name: "AWS EC2" },
      { name: "Git" },
      { name: "Postman" },
      { name: "Linux" },
      { name: "Power BI" },
      { name: "Jupyter Notebook" },
      { name: "Cloudinary" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LLM Orchestration" },
      { name: "Agentic AI" },
      { name: "RAG Pipelines" },
      { name: "HuggingFace" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-Learn" },
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  isActive: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Aossie",
    role: "Open Source Contributor",
    duration: "Nov 2025 – Present",
    isActive: true,
    bullets: [
      "Contributed to the Resonate open-source project by building Flutter UI components and submitting 2-3 pull requests to the core repository",
      "Resolved UI and functional issues, collaborating with maintainers through GitHub code reviews",
    ],
  },
  {
    company: "Summer Training Program",
    role: "Training Intern",
    duration: "Jun 2025 – Jul 2025",
    isActive: false,
    bullets: [
      "Built 2 end-to-end ML and full-stack applications processing 15,000+ real-world data records",
      "Improved model performance by 25% over baseline through feature engineering and hyperparameter tuning",
      "Deployed scalable web solutions supporting real-time ML predictions using Streamlit and MERN stack",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Leave Management — Multi-Tenant RBAC Workflow Engine",
    description:
      "Created React dashboard with role-based views (Admin/Manager/Employee), form validation, and live status notifications. Built Node.js REST API with JWT + RBAC middleware, Cloudinary file uploads, and AES-256 encrypted storage. Architected Socket.io real-time alerts with <500ms delivery, Redis offline queuing, and Brevo SMTP email fallback.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Redis",
      "PostgreSQL",
      "Cloudinary",
      "Docker",
    ],
    githubUrl: "https://github.com/lordinsane07/Leave-Manager",
    liveUrl: "https://leave-manager-mu.vercel.app/dashboard",
    image: "/projects/leavemanager.png",
    featured: true,
  },
  {
    title: "ResearchGPT — Agentic RAG System for Large-Scale Research Synthesis",
    description:
      "Developed React.js frontend with agentic query UI, streaming LLM responses, and markdown-rendered citation cards. Constructed Node.js REST API with RAG pipeline, OpenAI embeddings, MongoDB vector store, and JWT auth. Deployed via Docker + Nginx with Redis semantic cache achieving <3s end-to-end latency.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "OpenAI API",
      "LangChain",
      "Docker",
      "Nginx",
    ],
    githubUrl: "https://github.com/lordinsane07/ResearchGPT",
    liveUrl: "https://researchgpt-demo.vercel.app",
    image: "/projects/researchgpt.png",
    featured: true,
  },
  {
    title: "PrepSync — Real-Time Technical Interview Simulation Platform",
    description:
      "Architected AI interview simulation platform with WebRTC peer rooms, collaborative editor, and Socket.io event bus. Built Node.js backend with Yjs CRDT sync, Redis pub/sub, LiveKit SFU, and JWT-secured REST API. Deployed Groq Llama 3.3 70B pipeline generating 6-dimension scored reports in <10s with async summariser.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "LiveKit",
      "Yjs CRDT",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/lordinsane07/PrepSync",
    liveUrl: "https://prepsync-demo.vercel.app",
    image: "/projects/prepsync.png",
    featured: true,
  },
  {
    title: "Deliberate — Debate Platform with Real-Time Fallacy Detection",
    description:
      "Developed Flutter UI with threaded debate feeds, argument cards, live fallacy badges, and animated cooldown indicators. Launched Node.js WebSocket backend with NLP fallacy detection (ad hominem, straw man) reducing incidence by 40%. Implemented Riverpod state management with optimistic UI updates and offline-aware sync via Redis queue on AWS EC2.",
    techStack: [
      "Flutter 3.13+",
      "Dart 3.0+",
      "Node.js",
      "MongoDB",
      "WebSocket",
      "Redis",
      "Riverpod",
      "AWS EC2",
    ],
    githubUrl: "https://github.com/lordinsane07/DeliberateApp",
    downloadUrl: "https://github.com/lordinsane07/DeliberateApp",
    image: "/projects/deliberate.png",
    featured: false,
  },
  {
    title: "Offline-First Task Manager — Conflict-Free Sync with Bloc",
    description:
      "Assembled Flutter UI with Bloc-driven task boards, priority filters, offline badge indicators, and FCM push notifications. Configured Node.js REST API with PostgreSQL row versioning, JWT auth, and ETag-based optimistic concurrency control. Established SQLCipher local DB with conflict-free sync achieving 99.9% convergence within 5s post-reconnect.",
    techStack: [
      "Flutter 3.13+",
      "Dart 3.0+",
      "Bloc",
      "Node.js",
      "PostgreSQL",
      "SQLite/SQLCipher",
      "Docker",
      "FCM",
    ],
    githubUrl: "https://github.com/lordinsane07/Offline-First-Task-Manager",
    downloadUrl: "https://github.com/lordinsane07/Offline-First-Task-Manager",
    image: "/projects/taskmanager.png",
    featured: false,
  },
  {
    title: "FinFlow — Personal Finance Tracker",
    description:
      "Bloomberg-meets-Revolut fintech dashboard with real-time transaction tracking, Recharts visualizations, Firebase auth, and seamless dark/light mode.",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Recharts",
      "Lucide React",
    ],
    githubUrl: "https://github.com/lordinsane07/FINFLOW",
    liveUrl: "https://finflow-cyan.vercel.app/",
    image: "/projects/expensetracker.png",
    featured: false,
  },
  {
    title: "Lumina — Smart Study Planner",
    description:
      "Privacy-focused academic planner with schedule conflict detection, progress analytics, and a unique hand-crafted journal aesthetic — zero dependencies, runs entirely in the browser.",
    techStack: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/lordinsane07/Lumina-SmartStudyPlanner",
    liveUrl: "https://lumina-study-planner.vercel.app/",
    image: "/projects/lumina.png",
    featured: false,
  },
  {
    title: "Student Depression Risk Prediction",
    description:
      "Recall-optimized ML screening system trained on 27,901 records using XGBoost with SMOTE balancing, SHAP explainability, and gender-based fairness evaluation for early mental health detection.",
    techStack: [
      "Python",
      "XGBoost",
      "Scikit-Learn",
      "SHAP",
      "SMOTE",
      "Pandas",
      "NumPy",
    ],
    githubUrl:
      "https://github.com/lordinsane07/STUDENT-DEPRESSION-PREDICTION-MODEL",
    liveUrl:
      "https://student-depression-prediction-model-mrittickdeb.streamlit.app/",
    image: "/projects/studentdepression.jpg",
    featured: false,
  },
];

export const education = {
  degree: "Bachelor of Technology — Computer Science & Engineering",
  university: "Lovely Professional University",
  location: "Punjab, India",
  duration: "Aug 2023 – Present",
  cgpa: "8.05 / 10",
};

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "Oct 2025",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=49B6784C05EFEFA38FE0F5D4DBFE232903EF915B2B03F97E54E0338BEC39C500",
    image: "/certs/ai-foundations.jpg",
  },
  {
    title: "Cloud Data Platform",
    issuer: "Oracle",
    date: "Feb 2026",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=496BED4757E365C007848BEF14BBA592A8CC9240FE35578A96D0E70AF359D998",
    image: "/certs/cloud-data-platform.jpg",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur",
    date: "May 2025",
    url: "https://drive.google.com/file/d/1f5QGbEuuKE8jHdmWyzmEMidhn_qaLmPP/view?usp=drive_link",
    image: "/certs/cloud-computing.jpg",
  },
  {
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona",
    date: "Oct 2024",
    url: "https://coursera.org/share/17cafb1810c3ddaffeafa7d9f16b85a0",
    image: "/certs/digital-systems.jpg",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "University of Colorado",
    date: "Oct 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/BUDCDN1K66Y9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    image: "/certs/computer-communications.jpg",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "LeetCode — Global Top 25%",
    description:
      "Ranked in top 25% globally in Weekly & Biweekly Contests",
    icon: "trophy",
  },
  {
    title: "TryHackMe — Top 7%",
    description: "Ranked among 4M+ global users with hands-on security fundamentals",
    icon: "shield",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to Aossie's Resonate project on GitHub",
    icon: "gitBranch",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
