export const resume = {
  name: "Himanshu Patil",
  tagline: "Full-Stack Engineer · React / Next.js / AWS · 7 Years",

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
        "Led development of the Cassini landing platform in Next.js, modernising architecture and improving build maintainability across a multi-product codebase.",
        "Designed and shipped browser and design-tool integrations (Chrome extension, Sketch plugin, Figma plugin) enabling product workflows across 3+ platforms.",
        "Architected reusable private API libraries and component systems adopted across multiple repos, reducing duplication and improving engineering consistency.",
        "Designed CI/CD pipelines supporting multi-environment deployments from a single build, eliminating manual release steps.",
        "Built serverless backend infrastructure using AWS SAM, Lambda, and API Gateway for scalable file-processing and workflow automation.",
        "Built shared internal tooling adopted across teams, eliminating duplicated solutions and unblocking cross-product delivery.",
      ],
    },
    {
      title: "Software Developer",
      company: "Bizotics Tech Consultancy and Services Pvt Ltd",
      location: "Mumbai",
      from: "Jun 2019",
      to: "Feb 2021",
      bullets: [
        "Developed SEO-optimised Gatsby homepage for Bryzos; improved page load performance via bundle analysis and code splitting.",
        "Led Angular 5 → Angular 8 migration of the Bryzos Dashboard, modernising architecture and removing legacy dependencies.",
        "Built a dynamic form platform in Angular 9 for Aditya Birla Health Insurance LMS and an Outlook Add-in for email automation.",
        "Extended and maintained trading and enterprise applications built with React, Redux, OpenFin, and Angular SSR.",
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
      degree: "Bachelor of Engineering, Computer Science",
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

  other: [
    {
      title: "Sanjeevani Parivar NGO",
      description: "Technical member — builds and maintains all software tools and automation for the organisation.",
    },
    {
      title: "Certification",
      description: "Python for Everybody Specialisation — University of Michigan, Coursera",
    },
    {
      title: "Open Source",
      description: "Contributes to open-source packages on GitHub; active on StackOverflow.",
    },
  ],
};
