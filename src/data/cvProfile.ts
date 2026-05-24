export type CvExperience = {
  company: string;
  role: string;
  tools?: string[];
  technologies?: string[];
};

export const cvProfile = {
  name: "Reza Putra Fadilah",
  title: "Software Developer / Full Stack Developer",
  email: "reza.rr889@gmail.com",
  summary:
    "Fullstack Developer with hands-on experience building web-based applications, enterprise systems, and mobile apps across frontend and backend. Proficient in RESTful API development, relational database design, system integration, authentication, data processing, performance optimization, debugging, testing (UAT), and collaboration with QA teams. Experienced with scalable features such as QR code generation, dynamic links, and reporting systems, with a focus on maintainability and system reliability.",
  strengths: [
    "Java, Node.js, Spring Boot, Angular, AngularJS, JavaScript, PHP, CodeIgniter, Laravel, Vue.js, Nuxt.js, React.js, Dart, Flutter, and .NET",
    "RESTful API development, authentication, data processing, and system integration",
    "Database management with MySQL, SQL Server, and Navicat",
    "Debugging, testing (UAT), performance optimization, and collaboration with QA teams",
    "QR code generation, dynamic links, reporting systems, and enterprise application development",
    "Deployment and application management on WildFly server",
    "Version control and collaboration with Git, GitHub, Bitbucket, and GitLab",
  ],
  education: [
    {
      degree: "D3 Manajemen Informatika",
      school: "Universitas Bina Sarana Informatika",
    },
    {
      degree: "S1 Sistem Informasi",
      school: "STMIK Nusa Mandiri",
    },
  ],
  experiences: [
    {
      company: "PT Rafesh",
      role: "Magang Mahasiswa",
      tools: ["Ms. Excel", "Ms. Word", "Photoshop", "Kertas & Pulpen"],
    },
    {
      company: "PT Hasjrat Multifinance",
      role: "Web Developer",
      tools: ["Eclipse", "Navicat", "iReport"],
      technologies: ["Java", "Spring Boot", "Bootstrap", "CSS", "HTML", "JavaScript"],
    },
    {
      company: "Freelance",
      role: "IT Support",
    },
    {
      company: "PT Metropolitan Retailmart",
      role: "MSR Developer",
      tools: ["VS Code", "Postman", "Solr", "Git"],
      technologies: ["Golang", "PHP", "CodeIgniter", "JavaScript", "HTML5", "Bootstrap", "Razor"],
    },
    {
      company: "PT Summit Global Teknologi",
      role: "Frontend Engineer",
      tools: ["IntelliJ IDEA", "Figma", "Adobe XD", "Git", "ChatGPT", "Claude.ai", "Magic Scroll"],
      technologies: ["Vue.js", "Nuxt", "HTML5", "CSS"],
    },
    {
      company: "PT Optimasmartindo Industri",
      role: "Staff IT",
      tools: ["Canva", "TikTok", "Shopee", "Tokopedia", "Instagram", "YouTube", "Ms. Office", "CCTV"],
      technologies: ["C#", "Bootstrap"],
    },
    {
      company: "BPJS Kesehatan",
      role: "Programmer Fullstack",
      tools: ["Android Studio", "VS Code", "Postman", "Swagger", "SQL Server", "Bitbucket", "GitLab", "Eclipse"],
      technologies: ["AngularJS", "TypeScript", ".NET", "Java"],
    },
  ] satisfies CvExperience[],
  certifications: [
    "Desain Grafis",
    "CCNA (Cisco Certified Network Associate)",
    "3-in-1: Networking, Python, Automation",
    "Fullstack Web Development",
    "UI/UX Design",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "PHP",
    "HTML5",
    "CSS",
    "CodeIgniter",
    "Laravel",
    "Tailwind",
    "Nuxt.js",
    "Astro.js",
    "Vue.js",
    "React.js",
    "Java",
    "Node.js",
    "Angular",
    "AngularJS",
    "Dart",
    "Flutter",
    ".NET",
  ],
};

export function buildCvContext() {
  return JSON.stringify(cvProfile, null, 2);
}
