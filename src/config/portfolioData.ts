import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://arjunmalik.github.io/portfolio", // update if you have a custom domain
    pdf: `${import.meta.env.BASE_URL}arjun_malik.pdf`,
  },
  personal: {
    name: "Arjun Malik",
    title: "Software Engineer ",
    headline:
      "ReactJS . NodeJS . MongoDB . JavaScript . C++ . Firebase . TailwindCSS . Git & GitHub",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      { url: "./arjun.jpeg", label: "" },
    ],
    summary:
      "I am passionate about building modern web applications using ReactJS, Node.js, Firebase, and MongoDB, with styling using Tailwind CSS. I also have a strong foundation in Data Structures and Algorithms using C++. Currently pursuing my M.Tech at NIT Jalandhar, I am eager to apply my skills and contribute to real-world projects.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "I am passionate about building modern web applications using ReactJS, Node.js, Firebase, and MongoDB, with styling using Tailwind CSS. I also have a strong foundation in Data Structures and Algorithms using C++. Currently pursuing my M.Tech at NIT Jalandhar, I am eager to apply my skills and contribute to real-world projects.",
    },
    contact: {
      email: "arjunmalik1821@gmail.com",
      phone: "+91 7251991507",
      location: "Delhi, India",
      website: "https://arjunmalik.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/arjun-malik-67a20a24b/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/ArjunMalikOfficial",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Full Stack Developer with a strong foundation in Data Structures and Algorithms using C++",
    "Proficient in building modern web applications using ReactJS, Node.js, Firebase, MongoDB, and Tailwind CSS",
    "Familiar with Git, version control, and deployment practices",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 80,
          icon: "SiReact",
          category: "frontend",
        },
        {
          name: "JavaScript",
          level: 85,
          icon: "SiJavascript",
          category: "frontend",
        },
        {
          name: "HTML5",
          level: 85,
          icon: "SiHtml5",
          category: "frontend",
        },
        {
          name: "CSS3",
          level: 80,
          icon: "SiCss3",
          category: "frontend",
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: "SiTailwindcss",
          category: "frontend",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 75,
          icon: "SiNodedotjs",
          category: "backend",
        },
        {
          name: "Express.js",
          level: 70,
          icon: "SiExpress",
          category: "backend",
        },
        {
          name: "Firebase",
          level: 75,
          icon: "SiFirebase",
          category: "backend",
        },
      ],
    },
    {
      title: "Programming & DSA",
      skills: [
        {
          name: "C++",
          level: 80,
          icon: "SiC",
          category: "programming",
        },
        {
          name: "Data Structures & Algorithms",
          level: 75,
          category: "programming",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          level: 75,
          icon: "SiMongodb",
          category: "database",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          level: 80,
          icon: "SiGit",
          category: "tooling",
        },
        {
          name: "GitHub",
          level: 85,
          icon: "SiGithub",
          category: "tooling",
        },
        {
          name: "VS Code",
          level: 90,
          icon: "SiVisualstudiocode",
          category: "tooling",
        },
      ],
    },
  ],
  projects: [
    {
      id: "news-wave",
      title: "News Wave",
      description:
        "A React-based news web application that fetches real-time news using NewsAPI. It provides users with up-to-date articles and a clean, responsive interface for browsing news.",
      tags: ["React", "JavaScript", "API", "Frontend"],
      image: "https://source.unsplash.com/800x600/?news",
      href: "https://github.com/ArjunMalikOfficial/news-wave",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ArjunMalikOfficial/news-wave",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "link-bite",
      title: "Link Bite (URL Shortener)",
      description:
        "A lightweight URL shortener that converts long links into short, shareable URLs. Built for simplicity and efficiency with a clean user interface.",
      tags: ["JavaScript", "Web App", "Frontend"],
      image: "https://source.unsplash.com/800x600/?technology",
      href: "https://github.com/ArjunMalikOfficial/link-bite",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ArjunMalikOfficial/link-bite",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "text-alter",
      title: "Text Alter",
      description:
        "A text utility tool that provides features like word count, character count, case conversion, and reading time estimation.",
      tags: ["React", "JavaScript", "Utility"],
      image: "https://source.unsplash.com/800x600/?text",
      href: "https://github.com/ArjunMalikOfficial/text-alter",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ArjunMalikOfficial/text-alter",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "shop-easy",
      title: "Shop Easy (E-commerce)",
      description:
        "A modern e-commerce web application built using React and Firebase featuring authentication, cart management, and order handling.",
      tags: ["React", "Firebase", "E-commerce", "Full Stack"],
      image: "https://source.unsplash.com/800x600/?ecommerce",
      href: "https://github.com/ArjunMalikOfficial/shop-easy",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ArjunMalikOfficial/shop-easy",
          icon: "SiGithub",
        },
      ],
    },
  ],
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
