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
  bio: `I'm a Computer Science student at Lovely Professional University who builds end-to-end products — from pixel-perfect mobile apps to intelligent ML systems. I'm driven by the intersection of clean engineering and real-world impact, whether that's detecting student depression risk with fairness-aware models or shipping production-grade web platforms. When I'm not coding, I'm competing on LeetCode/Codeforces or breaking into systems on TryHackMe.`,
  location: "Siliguri, West Bengal, India",
  email: "debmrittick@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1zss7QU4uxqynbeSOz-x40Z-YB_jAfyTD/view?usp=drive_link",
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
  { label: "Projects Built", value: 7, suffix: "+" },
  { label: "LeetCode Rank", value: 25, suffix: "% Top", prefix: "Top " },
  { label: "TryHackMe", value: 7, suffix: "% Top", prefix: "Top " },
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
      { name: "Python" },
      { name: "Dart" },
      { name: "C" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Socket.io" },
    ],
  },
  {
    category: "Mobile",
    skills: [{ name: "Flutter" }],
  },
  {
    category: "ML / Data Science",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-Learn" },
      { name: "XGBoost" },
      { name: "SHAP" },
      { name: "SMOTE" },
      { name: "Pandas" },
      { name: "NumPy" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Firebase" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "Postman" },
      { name: "Power BI" },
      { name: "Jupyter Notebook" },
      { name: "Cloudinary" },
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
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Leave Management System",
    description:
      "Production-grade full-stack platform with role-based workflows, real-time notifications, JWT auth, OTP verification via Brevo API, and Cloudinary asset management.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Brevo API",
    ],
    githubUrl: "https://github.com/lordinsane07/QUICK-CHAT",
    liveUrl: "https://leave-manager-mu.vercel.app/dashboard",
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    title: "Lumina — Smart Study Planner",
    description:
      "Privacy-focused academic planner with schedule conflict detection, progress analytics, and a unique hand-crafted journal aesthetic — zero dependencies, runs entirely in the browser.",
    techStack: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/lordinsane07/Lumina-SmartStudyPlanner",
    liveUrl: "https://lumina-study-planner.vercel.app/",
    featured: true,
  },
  {
    title: "ForkFindr — Food Discovery App",
    description:
      "Full MERN stack food ordering platform with restaurant discovery, curated listings, filters, and secure JWT authentication.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    githubUrl:
      "https://github.com/lordinsane07/FORKFINDR-Discover-Dine-Delight",
    featured: false,
  },
  {
    title: "Car Price Prediction System",
    description:
      "End-to-end ML pipeline on 400,000+ vehicle records with EDA, XGBoost achieving 99% R², Streamlit web deployment, and an interactive Power BI executive dashboard.",
    techStack: [
      "Python",
      "XGBoost",
      "Streamlit",
      "Power BI",
      "Pandas",
      "Seaborn",
      "Matplotlib",
    ],
    githubUrl:
      "https://github.com/lordinsane07/CAR-PREDICTION-MODEL-STREAMLIT",
    liveUrl: "https://car-prediction-model-app-mrittick.streamlit.app/",
    featured: false,
  },
  {
    title: "Deliberate — Slow Conversation Platform",
    description:
      "A Flutter-built anti-impulsive debate platform with intentional reply cooldowns, structured stance tracking, AI-powered argument summarization, and moderation.",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Auth",
      "Cloud Firestore",
      "Go Router",
    ],
    githubUrl: "https://github.com/lordinsane07/Deliberate",
    featured: false,
  },
  {
    title: "Anomaly Detection Pipeline",
    description:
      "Unsupervised deep learning pipeline using TensorFlow autoencoders to detect rare abnormal patterns in unlabeled data via reconstruction error scoring — with calibrated thresholds benchmarked against baseline methods.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
    ],
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
}

export const certifications: Certification[] = [
  {
    title: "AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "Oct 2025",
  },
  {
    title: "Cloud Data Platform",
    issuer: "Oracle",
    date: "2025",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur",
    date: "May 2025",
  },
  {
    title: "Computer Architecture",
    issuer: "Princeton University",
    date: "Oct 2024",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "University of Colorado",
    date: "Oct 2024",
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
