export const resume = {
  name: "Himanshu Patil",
  tagline: "Full-Stack Engineer · React / Next.js / AWS · 7 Years",

  // File name suggested when saving as PDF (browsers use the page title)
  pdfFileName: "Himanshu_Patil_Resume",

  // SEO fields — these appear in Google search results
  seo: {
    title: "Himanshu Patil — Full-Stack Engineer",
    description:
      "Software engineer with ~7 years building scalable frontend and full-stack products using React, Next.js, Angular, and AWS. Based in Mumbai.",
    url: "https://himanshupatil.dev", // ← your live domain
    ogImage: "/og.png",              // ← optional social preview image (drop in /public)
  },

  contact: {
    phone: "+91 82377 32718",
    email: "dev@himanshupatil.dev",
    website: "himanshupatil.dev",
    linkedin: "linkedin.com/in/mehimanshupatil",
    github: "github.com/mehimanshupatil",
    location: "Mumbai, India",
  },

  summary:
    "Full-stack engineer with 7 years building production-grade frontend and backend systems using React, Next.js, Angular, and AWS. Architected browser extensions, reusable component systems, serverless backends, and multi-environment CI/CD pipelines. Owns end-to-end delivery from design collaboration to production, and applies AI tooling to accelerate engineering workflows.",

  experience: [
    {
      title: "Full-Stack Developer",
      company: "Canvs Creative Solutions Pvt Ltd",
      location: "Mumbai",
      from: "Mar 2021",
      to: "Present",
      bullets: [
        "Designed and shipped browser and design-tool integrations (Chrome extension, Figma plugin, Sketch plugin), extending product workflows to 3+ platforms.",
        "Led Next.js development of the Cassini landing platform, re-architecting a multi-product codebase to improve build maintainability.",
        "Architected shared API client libraries, a reusable component system and internal tooling adopted across multiple teams and repos, removing duplicated solutions and unblocking cross-product delivery.",
        "Built serverless backend services on AWS (Lambda, API Gateway, SAM) for scalable file processing and workflow automation.",
        "Designed CI/CD pipelines that promote a single build across multiple environments, eliminating manual release steps.",
      ],
    },
    {
      title: "Software Developer",
      company: "Bizotics Tech Consultancy and Services Pvt Ltd",
      location: "Mumbai",
      from: "Jun 2019",
      to: "Feb 2021",
      bullets: [
        "Led the Bryzos Dashboard migration from Angular 5 to Angular 8, modernising the architecture and removing legacy dependencies.",
        "Built an SEO-optimised Gatsby homepage for Bryzos, improving page-load performance through bundle analysis and code splitting.",
        "Built a dynamic form platform in Angular 9 for the Aditya Birla Health Insurance LMS, plus an Outlook add-in for email automation.",
        "Developed features for trading and enterprise applications using React, Redux, OpenFin and Angular SSR.",
      ],
    },
  ],

  skills: [
    { label: "Frontend", items: "JavaScript, TypeScript, React, Next.js, Angular, Gatsby, React Native, HTML/CSS, Tailwind CSS" },
    { label: "Backend & Cloud", items: "Node.js, REST APIs, AWS Lambda, API Gateway, AWS SAM, S3, Serverless" },
    { label: "State & Data", items: "Redux, React Query, Zustand" },
    { label: "Build & Tooling", items: "Vite, Webpack, Rollup, Storybook, ESLint, Biome, Husky" },
    { label: "Extensions & Integrations", items: "Chrome Extensions, Figma Plugin API, Sketch Plugins, Outlook Add-in" },
    { label: "Dev Practices", items: "CI/CD, Git, Component Systems, Performance Optimisation, AI-assisted workflows (Claude Code, Copilot)" },
  ],

  education: [
    {
      degree: "Bachelor of Engineering, Information Technology",
      institution: "Mumbai University, Mumbai",
      from: "2016",
      to: "2019",
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Maharashtra State Board of Technical Education, Mumbai",
      from: "2013",
      to: "2016",
    },
  ],
};
