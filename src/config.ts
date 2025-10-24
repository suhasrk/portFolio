export const siteConfig = {
  name: "Suhas R K",
  title: "Engineering @ Extreme Networks",
  description: "Showcasing skills, projects, and experience.",
  accentColor: "#1d4ed8",
  social: {
    email: "suhasrk233@gmail.com",
    linkedin: "https://www.linkedin.com/in/suhasrk233/",
    twitter: "https://x.com/SuhasRK2",
    github: "https://github.com/suhasrk",
  },
  aboutMe: `Software engineer with hands-on experience in building scalable, modular, and real-time applications using Angular,
Spring Boot, and message-driven architectures. Proficient in integrating RESTful APIs, building micro-frontend
systems, and designing event-driven services with Apache Kafka and gRPC. Skilled in implementing CI/CD
pipelines and working in Agile teams. Strong problem-solver with 300+ coding challenges solved on LeetCode and
similar platforms, with a solid foundation in data structures and algorithms.`,
  skills: [
    "HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python",
    "Angular", "React", "Node.js", "Spring Boot", "Microservices",
    "REST APIs", "Docker", "AWS", "CI/CD", "Agile Methodologies"
  ],
  projects: [
    {
      name: "AutoViz - Intelligent Data Visualization",
      description:
        "AutoViz is an intelligent data visualization platform that transforms raw tabular data into dynamic, insightful visualizations with minimal effort. Designed for simplicity and speed, AutoViz helps users quickly identify trends, patterns, and anomalies without writing custom visualization code.",
      link: "https://github.com/suhasrk/AutoViz",
      skills: ["Angular", "Python", "DeepSeek", "HighCharts.js", "REST APIs"],
    },
    {
      name: "Talksy - Real-time Chat Application",
      description:
        "A real-time chat application enhanced with AI to summarize conversations and suggest intelligent replies, enabling faster and more engaging communication.",
      link: "https://github.com/suhasrk/Talksy",
      skills: ["Angular", "Node.js", "Socket.IO", "OpenAI API", "MongoDB", "JWT Token"],
    },
    {
      name: "CurioGen - AI Course Builder",
      description:
        "An AI-powered web application that transforms any topic into a personalized, step-by-step learning course — complete with YouTube video lessons, reference summaries, and AI-generated quizzes.",
      link: "https://github.com/suhasrk/CurioGen",
      skills: ["Angular", "TypeScript", "Python", "OpenAI GPT", "YouTube API"],
    },
    {
      name: "ModuCart - Modular E-commerce Platform",
      description:
        "A modular e-commerce platform built with Angular and Single-SPA. ModuCart delivers a fast, scalable shopping experience by breaking the app into independently deployable micro-frontends. Featuring dynamic product views, seamless checkout, and a flexible architecture — it's designed for performance, maintainability, and growth.",
      link: "https://github.com/suhasrk/ModuCart",
      skills: ["Angular", "Single-SPA", "Tailwind CSS", "NgRx", "REST APIs", "Micro-frontend Architecture"],
    },
  ],
  experience: [
    {
      company: "Extreme Networks",
      title: "Software Engineer",
      dateRange: "Aug 2023 - Present",
      bullets: [
        "Developed and maintained a cloud-based network management platform using Angular and Single-SPA, enabling a modular architecture with 8+ micro-frontend apps.",
        "Delivered pixel-perfect, accessible UIs in collaboration with UX teams using the EC-1 component library, and handled real-time data visualization with AG Grid and Highcharts.",
        "Built and maintained backend REST APIs with Spring Boot and developed event-driven features using Apache Kafka and gRPC for real-time network monitoring workflows.",
        "Conducted code reviews, interviewed candidates, and mentored junior developers on best practices.",
      ],
    },
    {
      company: "Hewlett Packard Enterprise",
      title: "Research and Development Intern",
      dateRange: "Jan 2023 - July 2023",
      bullets: [
        "Built a UEFI tool in C and Python to automate OS installations by directly interacting with system firmware.",
        "Reduced installation time by 60% and enabled multi-OS deployment in HPE’s factory production pipeline.",
      ],
    },
  ],
  education: [
    {
      school: "PES University",
      degree: "Bachelor of Engineering in Computer Science",
      dateRange: "2019 - 2023",
      achievements: [
        "Graduated with 8.45 GPA",
        "Specialized in Computer Networks",
      ],
    },
  ],
  achievements: [
    {
      date: "Aug 2025",
      description: "Contributed to the Angular CLI repository — my first open-source contribution.",
      link: "https://github.com/angular/angular-cli/pull/30884"
    },
    {
      date: "Aug 2025",
      description: "Led the Grand Access release of Extreme Platform ONE as a core development team member, delivering key features for enterprise-scale deployment.",
      link: "https://www.extremenetworks.com/platform-one"
    },
    {
      date: "March 2025",
      description: "Won 3rd place in Company-wide Hackathon for developing an AI-powered Visualization tool - AutoViz.",
      link: "https://github.com/suhasrk/AutoViz"
    },
    {
      date: "Aug 2023",
      description: "Joined Extreme Networks as a Software Engineer.",
      link: ""
    },
    {
      date: "July 2023",
      description: "Published a research paper on Ensemble Deep Learning based Real-time Log Anomaly Detection in IEEE Conference, Curtin University, Malaysia.",
      link: "https://ieeexplore.ieee.org/document/10248821"
    },
    {
      date: "Jan 2023",
      description: "Joined Hewlett Packard Enterprise as a Research and Development Intern.",
      link: ""
    },
  ],
};
