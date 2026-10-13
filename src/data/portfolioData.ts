export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  problem: string;
  myContribution: string;
  stack: string[];
  dataSources?: string;
  metricsOrOutcomes: string;
  limitations: string;
  keyTakeaways: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  subImage?: string;
  badge?: string;
  screenshots?: { url: string; caption: string }[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    levelEvidence: string;
  }[];
}

export interface EducationEntry {
  institution: string;
  degreeOrQualification: string;
  location: string;
  period: string;
  scoreOrDetail?: string;
  notes?: string;
}

export interface Course {
  title: string;
  focus: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  highlight: string;
}

export const portfolioData = {
  personal: {
    name: "Shaik Saleem",
    initials: "SS",
    roleTitle: "Artificial Intelligence & Data Science Undergraduate",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Hyderabad, Telangana, India",
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science",
    semester: "Fifth-Semester Undergraduate",
    studyPeriod: "August 2024 – May 2028 (Expected)",
    availabilityStatus: "Open to Summer 2027 Internships & Technical Collaborations",
    shortBio: "Undergraduate student at CBIT Hyderabad pursuing a B.E. in Artificial Intelligence and Data Science. Passionate about software systems, multimodal document intelligence, semantic vector search, and clean algorithmic problem solving.",
    aboutStory: "My foundation began with algorithmic problem solving and web systems, evolving into an active interest in multimodal artificial intelligence, vector search, and compliance engineering. As a fifth-semester student at CBIT Hyderabad, I build practical software applications—from an AI certificate verification system deployed for the college to Smart India Hackathon legal compliance tools and semantic vector recovery platforms—focusing on rigorous architecture, SDLC principles, and data integrity.",
    philosophy: "I prioritize understanding foundational principles over superficial claims. Whether developing an authenticated web application with vector similarity search or analyzing complex distributions in datasets, I focus on verifiable logic, clear documentation, and steady improvement.",
    email: "saleemshaik.dev@gmail.com",
    resumePdfUrl: "/resume.pdf",
  },

  marqueeKeywords: [
    "Artificial Intelligence",
    "Multimodal Document OCR",
    "Vector Search (pgvector)",
    "Next.js 16 App Router",
    "Python",
    "TypeScript",
    "Java",
    "C++ & C",
    "SQL & MySQL",
    "Supabase PostgreSQL",
    "Exploratory Data Analysis",
    "NumPy & Pandas",
    "Smart India Hackathon",
    "CBIT Hyderabad",
    "SDLC & Full-Stack"
  ],

  quickFacts: [
    { label: "Institution", value: "CBIT, Hyderabad", detail: "Premier Autonomous Engineering College" },
    { label: "Degree & Major", value: "B.E. in AI & DS", detail: "August 2024 – May 2028 (Expected)" },
    { label: "Current Status", value: "5th Semester", detail: "Undergraduate Engineering Student" },
    { label: "Prior Academic", value: "Sri Medha Jr. College", detail: "Intermediate: 96.2% (2022–2024)" }
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/saleemshaik2005",
      handle: "@saleemshaik2005",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saleemshaikatcbit",
      handle: "in/saleemshaikatcbit",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/saleem2005",
      handle: "saleem2005",
      icon: "code"
    }
  ],

  projects: [
    {
      id: "cbit-activity-points",
      title: "CBIT Student Portfolio & Activity Points Verification Platform",
      tagline: "Autonomous institutional MAR tracking and multimodal AI certificate OCR verification platform for CBIT Hyderabad.",
      category: "Full-Stack & Multimodal AI",
      status: "Live Academic Platform",
      badge: "🌐 Live in Production",
      problem: "Students at CBIT must complete 60 non-academic activity points (up to a 100-point cap) across Semesters I through VIII under official autonomous college regulations. Manual certificate verification created severe administrative bottlenecks for faculty mentors.",
      myContribution: "Developed with peers in AI&DS Section 2, 5th Semester under faculty mentorship (Dr. Shobarani Salvadi, Dr. SHEENA MOHAMMED, Dr. Anireddy Srilakshmi, Ms. Talla Sai Sree, Dr. K. Radhika); engineered Next.js 16 App Router frontend; integrated multimodal AI document intelligence for automated certificate OCR (parsing certificate title, student name, issuing authority, completion date, credential IDs, and QR validation links); built automatic mapping to the 24 official CBIT Activity Categories; implemented faculty mentor verification drawer and 1-click official MAR PDF generation.",
      stack: ["Next.js 16 (App Router)", "TypeScript", "Multimodal Document AI", "Tailwind CSS", "PDF Generation", "Vercel"],
      dataSources: "Student-uploaded activity certificates, workshop credentials, NPTEL awards, and internship proofs across 24 official categories.",
      metricsOrOutcomes: "Deployed live at cbit-activity-points.vercel.app; automates extraction of credential numbers, dates, and QR verification URLs; outputs official regulation-compliant MAR PDF sheets for autonomous accreditation.",
      limitations: "OCR extraction accuracy depends on clarity and resolution of scanned documents; points overrides require faculty mentor confirmation.",
      keyTakeaways: "Gained practical experience implementing multimodal document parsing, Next.js App Router state management, and building software that directly serves institutional compliance workflows.",
      githubUrl: "https://github.com/saleemshaik2005/CBIT-Activity-Points",
      liveUrl: "https://cbit-activity-points.vercel.app",
      image: "/images/projects/cbit_activity_login.png",
      subImage: "/images/projects/cbit_activity_ocr.png",
      screenshots: [
        { url: "/images/projects/cbit_activity_login.png", caption: "Student Portal Login & Role-Based Authentication" },
        { url: "/images/projects/cbit_activity_ocr.png", caption: "Multimodal AI OCR Certificate Verification & Forensics" },
        { url: "/images/projects/cbit_activity_upload.png", caption: "Institutional AI Batch Activity Certificate Upload Engine" }
      ]
    },
    {
      id: "inspack-legal-metrology",
      title: "Inspack 🛡️📦 — AI Legal Metrology Compliance Inspection System",
      tagline: "Deterministic computer vision and OCR compliance inspection system for packaged commodities under Legal Metrology Rules, 2011.",
      category: "AI & Computer Vision",
      status: "Smart India Hackathon 2026",
      badge: "🏆 SIH 2026 Problem SIH-26034",
      problem: "Packaged commodities sold across retail stores, supermarkets, and e-commerce dark stores in India are legally mandated by the Ministry of Consumer Affairs to carry standard declarations. Enforcement agencies face massive logistical bottlenecks when manually verifying millions of packaging designs.",
      myContribution: "Engineered for Smart India Hackathon 2026 (Problem Statement ID: SIH-26034, Ministry of Consumer Affairs, Food and Public Distribution) with Team Neural Knights; built multi-view packaging inspection workflow (Front, Back, Side) with on-screen Principal Display Panel (PDP) viewfinder guides; integrated OCR extraction with a deterministic rules engine validating Rule 6(1)(a) & 10 (manufacturer address & PIN), Rule 6(1)(c) & 13 (SI unit net quantity, banning archaic terms like dozen/gross), Rule 6(1)(e) & 18 (statutory MRP syntax & dual pricing detection), Rule 7 & 8 (PDP numeral/letter height & clear area clutter), Rule 9 (contrast checks), and Second Schedule standard pack sizes.",
      stack: ["React / Vite", "TypeScript", "Tailwind CSS", "Computer Vision & OCR", "Deterministic Compliance Engine", "PDF Report Generator"],
      dataSources: "Statutory rules and schedules under Legal Metrology Act, 2009 & Packaged Commodities Rules, 2011 across 19 commodity classes.",
      metricsOrOutcomes: "Automates multi-rule statutory validation across 19 mandatory commodity classes; flags illegal unit symbols (e.g., 'gm/gms' vs 'g') and dual-pricing tampering; generates formal inspection PDF audit reports.",
      limitations: "Requires well-lit, non-reflective multi-angle photos for accurate PDP numeral height measurement; offline camera feed requires WebAssembly OCR acceleration.",
      keyTakeaways: "Learned how to translate complex statutory legal rules into deterministic validation algorithms and design intuitive viewfinder guides for field inspectors.",
      githubUrl: "https://github.com/saleemshaik2005/Software-System-to-check-compliance-of-Packaged-Commodities-under-Legal-Metrology-Rules-2011",
      liveUrl: "https://inspacknksih2026.vercel.app/",
      image: "/images/projects/inspack_screenshot_main.png",
      subImage: "/images/projects/inspack_screenshot_audit.png",
      screenshots: [
        { url: "/images/projects/inspack_screenshot_audit.png", caption: "Statutory Compliance Audit (Pintola Packaging 100/100 Score)" },
        { url: "/images/projects/inspack_screenshot_modules.png", caption: "8 Direct Portals: Scan Studio, Batch Catalog & Surveillance" },
        { url: "/images/projects/inspack_architecture.png", caption: "System Architecture & Legal Metrology Inspection Pipeline" },
        { url: "/images/projects/inspack_workflow.png", caption: "Field Inspector & Verification Workflow" }
      ]
    },
    {
      id: "cbit-lost-found-ai",
      title: "CBIT Lost & Found — AI-Powered Campus Retrieval Platform",
      tagline: "Campus item recovery platform powered by Google Gemini 2.5 Flash, 768-D semantic vector search, and anti-fraud verification.",
      category: "Full-Stack & Vector Search",
      status: "Production Prototype",
      badge: "⚡ pgvector + Gemini AI",
      problem: "Lost property recovery on college campuses is disorganized and plagued by false claims, lack of verification, and no structured way to match descriptive student reports with found items.",
      myContribution: "Engineered end-to-end full-stack platform using Next.js 15, Supabase (PostgreSQL 16), and Google Gemini 2.5 Flash; integrated multimodal attribute extraction from item photos (brand, model, color, distinguishing marks, damage); implemented 768-dimensional vector embeddings with text-embedding-004 and pgvector HNSW indexing; implemented multi-factor hybrid scoring algorithm combining vector cosine, category, brand, color, location, and time; built anti-fraud ownership challenges protected by PostgreSQL Row-Level Security (RLS); designed 1-on-1 private handover chat and Recharts analytics.",
      stack: ["Next.js 15", "TypeScript", "Supabase (PostgreSQL + pgvector + RLS)", "Google Gemini 2.5 Flash", "Tailwind CSS", "shadcn/ui", "Recharts", "Vitest"],
      dataSources: "Student-reported lost and found campus listings stored with vector embeddings.",
      metricsOrOutcomes: "Sub-second semantic vector similarity queries; hybrid formula balances semantic intent with hard filters; zero unauthorized access to private proof answers due to strict RLS policies.",
      limitations: "Hybrid formula weights require ongoing calibration based on campus traffic; image storage is bounded by Supabase storage quotas.",
      keyTakeaways: "Integrating vector similarity search into relational databases, implementing strict RLS security boundaries, and designing user-centric anti-fraud challenges.",
      githubUrl: "https://github.com/saleemshaik2005/Portal-for-retrival-of-lost-items-in-the-college-CBIT",
      liveUrl: "https://portal-for-retrival-of-lost-items-i.vercel.app/report/lost",
      image: "/images/projects/lostfound_screenshot_hero.png",
      subImage: "/images/projects/lostfound_screenshot_gemini.png",
      screenshots: [
        { url: "/images/projects/lostfound_screenshot_gemini.png", caption: "Gemini AI Multimodal Structured Attribute Extraction" },
        { url: "/images/projects/lostfound_screenshot_map.png", caption: "Interactive Official CBIT Campus Map with Academic Building Pins" }
      ]
    },
    {
      id: "traffic-accident-analysis",
      title: "Traffic Accident Data Analysis",
      tagline: "Exploratory data analysis uncovering temporal trends, environmental factors, and accident distribution patterns.",
      category: "Data Science & Analytics",
      status: "Exploratory Project",
      problem: "Identifying critical contributors to traffic collisions requires systematic data preprocessing, handling missing entries, and evaluating multi-dimensional temporal distributions.",
      myContribution: "Cleaned and preprocessed observational traffic collision datasets using Pandas; examined temporal distribution curves to identify high-risk time intervals; generated structured Matplotlib visualizations correlating road surface conditions, lighting, and incident frequency.",
      stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      dataSources: "Observational traffic accident dataset.",
      metricsOrOutcomes: "Communicated distribution trends, isolated high-incident time windows, and visualized road condition patterns through structured Matplotlib figures.",
      limitations: "Observational retrospective study; does not account for real-time vehicular telematics or causal attribution.",
      keyTakeaways: "Data hygiene, missing value imputation, and distribution sanity checks are essential before drawing conclusions from observational data.",
      githubUrl: "https://github.com/saleemshaik2005/MY-PORTFOLIO"
    }
  ] as Project[],

  skillCategories: [
    {
      name: "Programming Languages & Web",
      description: "Languages practiced for software development, data wrangling, and algorithmic problem solving.",
      skills: [
        { name: "Python", levelEvidence: "Used for exploratory data analysis, data wrangling (Pandas, NumPy), and scripting." },
        { name: "Java", levelEvidence: "Practiced for object-oriented design and foundational algorithmic concepts." },
        { name: "SQL", levelEvidence: "Relational querying, joins, aggregations, and schema design (MySQL)." },
        { name: "C++ & C", levelEvidence: "Used for Data Structures, algorithm implementation, and memory concepts." },
        { name: "JavaScript (ES6) & TypeScript", levelEvidence: "Full-stack development: Next.js, React, Node.js, asynchronous logic, and type-safe APIs." },
        { name: "HTML5 & CSS3", levelEvidence: "Responsive semantic markup, modern layout styling, and accessibility." }
      ]
    },
    {
      name: "Data Science & Machine Learning",
      description: "Data analysis libraries and statistical workflows applied in coursework and projects.",
      skills: [
        { name: "Exploratory Data Analysis (EDA)", levelEvidence: "Systematic data inspection, missing value handling, and summary statistics." },
        { name: "NumPy & Pandas", levelEvidence: "Vectorized numerical computing, dataframe manipulation, grouping, and filtering." },
        { name: "Matplotlib", levelEvidence: "Generating informative charts, distribution plots, and trend visualizations." },
        { name: "Multimodal AI & Vector Search", levelEvidence: "Integrated Gemini 2.5 Flash, OCR, and pgvector embeddings in campus platforms." }
      ]
    },
    {
      name: "Databases & Tools",
      description: "Database engines, authentication services, and daily engineering tools.",
      skills: [
        { name: "PostgreSQL & pgvector", levelEvidence: "Relational schemas, vector cosine indexing (HNSW), and Row-Level Security (RLS)." },
        { name: "MySQL", levelEvidence: "Relational database querying, relational algebra, and schema normalization." },
        { name: "Firebase Firestore & Auth", levelEvidence: "NoSQL document storage, Google Authentication integration, and security rules." },
        { name: "Git & GitHub", levelEvidence: "Version control workflows, commit history, repository management, and collaboration." },
        { name: "Jupyter Notebook", levelEvidence: "Interactive computational notebooks for data exploration and visualization." }
      ]
    },
    {
      name: "Computer Science Foundations",
      description: "Core curriculum subjects emphasized across engineering coursework at CBIT.",
      skills: [
        { name: "Data Structures & Algorithms", levelEvidence: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, and complexity analysis." },
        { name: "Object-Oriented Programming (OOP)", levelEvidence: "Encapsulation, inheritance, polymorphism, and modular software design." },
        { name: "Database Management Systems (DBMS)", levelEvidence: "Relational models, ACID properties, normalization (3NF/BCNF), and indexing." },
        { name: "Operating Systems & Networks", levelEvidence: "Process management, memory paging, concurrency, and TCP/IP networking layers." },
        { name: "SDLC & Engineering Practices", levelEvidence: "Systematic problem solving, testing, debugging, and requirements analysis." }
      ]
    }
  ] as SkillCategory[],

  educationHistory: [
    {
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      degreeOrQualification: "Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science",
      location: "Gandipet, Hyderabad, Telangana",
      period: "August 2024 – May 2028 (Expected)",
      scoreOrDetail: "CGPA: 8.18 · 5th Semester",
      notes: "Autonomous Engineering College affiliated with Osmania University, NAAC A++ Accredited."
    },
    {
      institution: "Sri Medha Junior College",
      degreeOrQualification: "Intermediate (Class XII)",
      location: "Telangana, India",
      period: "2022 – 2024",
      scoreOrDetail: "Percentage: 96.2%",
      notes: "Core focus in Mathematics, Physics, and Chemistry."
    },
    {
      institution: "NCL High School",
      degreeOrQualification: "Secondary School Certificate (SSC / Class X)",
      location: "Telangana, India",
      period: "Graduated 2022",
      scoreOrDetail: "Completed with Distinction",
      notes: "Secondary schooling foundational studies."
    }
  ] as EducationEntry[],

  relevantCoursework: [
    { title: "Design and Analysis of Algorithms", focus: "Divide-and-conquer, dynamic programming, graph traversal, and complexity analysis." },
    { title: "Database Management Systems", focus: "Relational algebra, SQL, normalization, concurrency control, and transactions." },
    { title: "Machine Learning", focus: "Mathematical formulation of learning algorithms, evaluation metrics, and optimization." },
    { title: "Operating Systems", focus: "Process scheduling, thread synchronization, memory management, and file systems." },
    { title: "Computer Networks", focus: "OSI and TCP/IP protocol stack, routing, socket communication, and packet flow." },
    { title: "Enterprise Application Development", focus: "Architectural tiers, service communication, and web enterprise patterns." },
    { title: "Computer Architecture", focus: "Instruction set architecture, pipelining, cache memory hierarchy, and datapath design." },
    { title: "Software Engineering", focus: "Software Development Life Cycle (SDLC) models, testing strategies, and quality assurance." }
  ] as Course[],

  certifications: [
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      highlight: "Demonstrated proficiency in complex multi-table joins, subqueries, and aggregation queries."
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      highlight: "Completed foundational curriculum in semantic HTML5, modern CSS3 layouts, and accessible design."
    },
    {
      title: "Microsoft Power BI",
      issuer: "LinkedIn Learning",
      highlight: "Trained in data modeling, interactive dashboard construction, and business analytics visualization."
    }
  ] as Certification[]
};
