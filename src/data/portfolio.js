export const portfolioData = {
  name: "Charmaine Crescini",
  title: "Frontend Engineer",
  tagline: "JavaScript · React · TypeScript · Agile Delivery",
  location: "Toronto, ON",
  email: "charm.p.crescini@gmail.com",
  linkedin: "https://linkedin.com/in/charmaine-crescini",
  github: "https://github.com/charmainecrescini",
  bio: "Software Engineer with 6+ years of experience building customer-facing web applications across digital banking and consulting environments. Skilled in JavaScript, TypeScript, React, Redux, and frontend architecture. Experienced in delivering modern, reusable UIs across the software development lifecycle in cross-functional Agile teams.",

skills: [
    {
      category: "Frontend Engineering",
      items: ["JavaScript", "TypeScript", "React", "Redux", "AngularJS", "Lit", "HTML", "CSS", "React Native"],
    },
    {
      category: "Integration & APIs",
      items: ["REST API Integration", "Firebase", "Node.js", "Responsive UI", "Component Architecture"],
    },
    {
      category: "Testing & Monitoring",
      items: ["Unit Testing", "E2E Testing", "Splunk", "Defect Resolution", "Release Support"],
    },
    {
      category: "Delivery & Tools",
      items: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "JIRA", "Azure DevOps", "Postman", "Confluence"],
    },
  ],

  experience: [
    {
      company: "ING Bank",
      role: "Web Engineer",
      period: "Aug 2022 – Dec 2024",
      description: "A Dutch multinational financial institution known for its innovative digital banking solutions.",
      highlights: [
        "Modernized 3 customer-facing lending interfaces using Lit, JavaScript, HTML, and CSS — contributing to a 6% lift in digital sales per 1,000 active customers.",
        "Migrated a legacy credit decision UI from AngularJS to Lit, improving frontend maintainability and performance.",
        "Integrated loan processing APIs to show real-time application status updates across the customer flow.",
        "Built reusable components for step-based application flows, improving validation states and journey consistency.",
        "Added Splunk monitoring to a critical flow, improving visibility into frontend and integration issues.",
        "Led production rollout of migrated UI components, coordinating UAT, defect fixes, and stakeholder sign-off.",
      ],
    },
    {
      company: "Accenture",
      role: "Software Engineer – Consultant",
      period: "May 2018 – Jul 2022",
      description: "A global professional services company specializing in digital, cloud, and technology solutions.",
      highlights: [
        "Built an interactive Energy KPI dashboard using React, Material-UI, and Redux with reusable views for charts, filters, tables, and KPI summaries.",
        "Managed Redux state for filters, date ranges, and KPI views, improving reliability across complex dashboard interactions.",
        "Integrated backend services for dynamic KPI data fetching, keeping dashboard views current and responsive.",
        "Mentored junior developers on component structure and debugging, improving team delivery quality.",
        "Reviewed React code and implementation patterns, improving consistency across Agile releases.",
                "Delivered 13 web features for an internal event platform, supporting 400+ users with real-time event data.",
        "Built a React Native social feed for a push-notification app, improving dynamic content delivery and user interaction.",
      ],
    }
  ],

  certifications: [
    { name: "Generative AI Fundamentals", issuer: "Databricks", year: "2026" },
    { name: "Fabric Analytics Engineer Associate (DP-600)", issuer: "Microsoft", year: "2025" },
    { name: "Unity Certified Associate", issuer: "Unity Technologies", year: "2019" },
  ],
};
