export type CvLink = {
  label: string;
  href: string;
  display: string;
};

export type CvEducation = {
  degree: string;
  school: string;
  period?: string;
  location?: string;
};

export type CvExperience = {
  company: string;
  role: string;
  period?: string;
  location?: string;
  tools?: string[];
  technologies?: string[];
  highlights: string[];
};

export type CvProject = {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
};

export type CvSkillGroup = {
  title: string;
  skills: string[];
};

export const cvProfile = {
  name: "Reza Putra Fadilah",
  title: "Full Stack Developer",
  email: "reza.rr889@gmail.com",
  phone: "0858 1104 3930",
  location: "Bekasi, Indonesia",
  downloadUrl: "/pdf/Reza_putra_fadilah_FlowCV_Resume_2026-05-02.pdf",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/reza-putra-fadilah-87800316b/",
      display: "linkedin.com/in/reza-putra-fadilah-87800316b",
    },
    {
      label: "GitHub",
      href: "https://github.com/zaputlah",
      display: "github.com/zaputlah",
    },
  ] satisfies CvLink[],
  summary:
    "Full Stack Developer experienced in building web, enterprise, and mobile applications across frontend, backend, and database layers. Strong in REST API integration, relational database design, authentication flows, reporting systems, debugging, UAT support, and cross-functional collaboration with QA, backend, UI/UX, and business users.",
  coreCompetencies: [
    "Full-stack web development",
    "REST API design and integration",
    "Frontend UI implementation",
    "Relational database design",
    "Authentication and authorization flows",
    "Reporting and data processing",
    "Mobile app development",
    "Debugging, UAT, and QA collaboration",
  ],
  experiences: [
    {
      company: "BPJS Kesehatan",
      role: "Full Stack Developer",
      period: "06/2026 - present",
      technologies: ["Angular Js", "Java", "SQL Server", "REST API"],
      highlights: [
        "Redesigned the CSTI - SUPEL queue management UI to improve usability, visual consistency, responsiveness, and overall navigation flow.",
        "Adjusted sidebar layout, navigation menu, statistic cards, daily queue tables, and display layouts to create a cleaner and more structured interface.",
        "Developed and integrated the Ambil Antrean feature with the Aman JKN system to support a more effective service queue process.",
        "Implemented a face capture feature in the Ambil Antrean menu, including frontend flow, backend integration, FTP image storage, and database path saving.",
        "Enhanced the Display Queue menu to show participants currently being served and participants waiting in queue, including queue number, participant name, and queue source.",
        "Redesigned the Petugas SO menu UI and workflow to support proactive service, allowing officers to approach participants based on queue data.",
        "Integrated queue data, participant photos, and service status to improve participant identification and make service monitoring clearer and more structured.",
        "Conducted queue flow testing to ensure displayed data matched the service business process and operational requirements.",
      ],
    },
    {
      company: "BPJS Kesehatan",
      role: "Frontend Developer",
      period: "04/2026 - 05/2026",
      technologies: ["Angular", "TypeScript", "HTML", "CSS"],
      highlights: [
        "Redesigned key AMAN JKN user interfaces, including login, dashboard, validation, rehabilitation module, location search, and data update screens.",
        "Improved usability, visual consistency, and navigation flow across core application modules.",
      ],
    },
    {
      company: "BPJS Kesehatan",
      role: "Mobile Developer",
      period: "09/2025 - 04/2026",
      technologies: ["Flutter", "Dart", "REST API", "Provider"],
      highlights: [
        "Developed a mobile application from scratch with Flutter, focusing on frontend implementation and UI/UX alignment with system requirements.",
        "Integrated REST APIs for authentication, data submission, real-time status tracking, and profile-related workflows.",
        "Built core modules including login, register, OTP, forgot password, profile management, public information submission, objection/appeal, and informational pages.",
        "Applied Provider for state management and collaborated with backend and QA teams through testing, validation, and release feedback.",
      ],
    },
    {
      company: "BPJS Kesehatan",
      role: ".NET Developer",
      period: "06/2025 - 09/2025",
      technologies: [".NET", "C#", "LINQ", "SQL Server", "Microservices"],
      highlights: [
        "Contributed to a microservices-based system using .NET with a focus on maintainable service and data access layers.",
        "Refactored selected legacy database interactions from stored procedure-based queries to LINQ to improve readability and reduce database-level coupling.",
        "Optimized data retrieval and processing structure within the service layer.",
      ],
    },
    {
      company: "BPJS Kesehatan",
      role: "Full Stack Developer",
      period: "09/2024 - 06/2025",
      technologies: [
        "Java",
        "JAX-RS",
        "Jersey",
        "AngularJS",
        "JavaScript",
        "SQL Server",
        "REST API",
      ],
      highlights: [
        "Developed and maintained web-based applications with CRUD functionality using Java backend services and AngularJS frontend views.",
        "Designed relational database structures, including tables and stored procedures, to support application requirements.",
        "Built RESTful APIs and integrated frontend-backend data flows for consistent application behavior.",
        "Developed dynamic link and QR code features to improve access to information and distribution workflows.",
        "Supported testing, debugging, basic security checks, issue resolution, and User Acceptance Testing with users and QA teams.",
      ],
    },
    {
      company: "PT Summit Global Teknologi",
      role: "Frontend Engineer",
      period: "09/2023 - 12/2023",
      technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
      tools: ["IntelliJ IDEA", "Figma", "Adobe XD", "Git"],
      highlights: [
        "Developed responsive landing pages for the Infinix Series 40 product with attention to performance, responsiveness, and cross-device compatibility.",
        "Implemented multi-language localization to support regional users across different markets.",
        "Supported an AI-based chatbot initiative by coordinating technical requirements and aligning implementation with cross-functional teams.",
        "Collaborated with UI/UX teams to translate designs accurately and maintain visual consistency across digital assets.",
      ],
    },
    {
      company: "PT Metropolitan Retailmart",
      role: "Web Developer",
      period: "04/2022 - 03/2023",
      technologies: [
        "PHP",
        "CodeIgniter 3",
        "JavaScript",
        "MySQL",
        "Apache Solr",
        "Bootstrap",
      ],
      tools: ["VS Code", "Postman", "Git"],
      highlights: [
        "Developed email notification features and collaborated with end users to align implementation with business and technical requirements.",
        "Contributed to game event features, working closely with UI/UX teams on interface design and user validation before deployment.",
        "Maintained and enhanced web-based applications to support system stability, availability, and reliability.",
        "Analyzed and resolved application bugs, performed data validation, and optimized search functionality using Apache Solr.",
      ],
    },
    {
      company: "PT Hasjrat Multifinance",
      role: "Web Developer",
      period: "11/2019 - 10/2020",
      technologies: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "SQL Server",
      ],
      tools: ["Eclipse", "Navicat", "JasperReports", "iReport"],
      highlights: [
        "Maintained and optimized web-based applications to improve performance, stability, and reliability.",
        "Designed and customized JasperReports templates, including layout design, data mapping, and report integration based on business needs.",
        "Identified, analyzed, and resolved application issues to improve functionality and software quality.",
      ],
    },
  ] satisfies CvExperience[],
  additionalExperience: [
    {
      company: "PT Optimasmartindo Industri",
      role: "Staff IT",
      technologies: ["C#", "Bootstrap"],
      tools: ["Canva", "Marketplace tools", "Microsoft Office", "CCTV"],
      highlights: [
        "Supported internal IT operations, office tools, content operations, marketplace channels, and CCTV-related needs.",
      ],
    },
    {
      company: "Freelance",
      role: "IT Support",
      highlights: [
        "Provided technical support and troubleshooting for user devices, software issues, and basic operational needs.",
      ],
    },
    {
      company: "PT Rafesh",
      role: "Intern",
      tools: ["Microsoft Excel", "Microsoft Word", "Photoshop"],
      highlights: [
        "Supported administrative documentation and basic design tasks during internship placement.",
      ],
    },
  ] satisfies CvExperience[],
  education: [
    {
      degree: "S1 Sistem Informasi",
      school: "STMIK Nusa Mandiri",
      period: "2018 - 2019",
      location: "Bekasi",
    },
    {
      degree: "D3 Manajemen Informatika",
      school: "Universitas Bina Sarana Informatika",
      period: "2015 - 2018",
      location: "Bekasi",
    },
  ] satisfies CvEducation[],
  certifications: [
    "Desain Grafis",
    "CCNA (Cisco Certified Network Associate)",
    "3-in-1: Networking, Python, Automation",
    "Fullstack Web Development",
    "UI/UX Design",
  ],
  skillGroups: [
    {
      title: "Frontend",
      skills: [
        "Angular",
        "AngularJS",
        "Vue.js",
        "Nuxt.js",
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "JAX-RS",
        "Spring Boot",
        ".NET",
        "C#",
        "PHP",
        "CodeIgniter",
        "Laravel",
        "Node.js",
        "Golang",
      ],
    },
    {
      title: "Database",
      skills: [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Stored Procedures",
        "LINQ",
        "Apache Solr",
      ],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "Provider"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Postman",
        "Swagger",
        "JasperReports",
        "Figma",
        "VS Code",
        "Android Studio",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Effective Communication",
        "Team Collaboration",
        "Adaptability",
        "Analytical Thinking",
      ],
    },
  ] satisfies CvSkillGroup[],
  selectedProjects: [
    {
      title: "PPID",
      description:
        "Government profile and information portal built with Angular and TypeScript.",
      technologies: ["Angular", "TypeScript", "HTML", "CSS"],
      url: "https://ppidweb-ts-9nxt-1bq969w4y-rezarr889s-projects.vercel.app/beranda",
    },
    {
      title: "Hospital Website",
      description:
        "Healthcare website for service information, profile content, and dashboard access.",
      technologies: ["React", "JWT", "Axios", "CSS"],
      url: "https://hospital-zaputlah.vercel.app/",
    },
    {
      title: "Layanan Hiburan Digital",
      description:
        "Streaming-style web application interface with state management and responsive styling.",
      technologies: ["React", "Vite", "Redux", "Tailwind CSS"],
      url: "https://stream-verse-seven.vercel.app/",
    },
  ] satisfies CvProject[],
  skills: [
    "JavaScript",
    "TypeScript",
    "PHP",
    "HTML5",
    "CSS",
    "CodeIgniter",
    "Laravel",
    "Tailwind CSS",
    "Nuxt.js",
    "Astro.js",
    "Vue.js",
    "React.js",
    "Next.js",
    "Java",
    "Node.js",
    "Angular",
    "AngularJS",
    "Dart",
    "Flutter",
    ".NET",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
  ],
};

export function buildCvContext() {
  return JSON.stringify(cvProfile, null, 2);
}
