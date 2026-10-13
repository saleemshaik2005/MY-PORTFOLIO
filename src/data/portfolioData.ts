export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack Web' | 'Data Science & Analytics' | 'Artificial Intelligence' | 'Systems & Tools';
  status: 'Completed Project' | 'Exploratory Project' | 'Academic Project';
  problem: string;
  myContribution: string;
  stack: string[];
  dataSources?: string;
  metricsOrOutcomes: string;
  limitations: string;
  keyTakeaways: string;
  githubUrl: string;
  liveUrl?: string;
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
    shortBio: "Undergraduate student at CBIT Hyderabad pursuing a B.E. in Artificial Intelligence and Data Science. Passionate about software engineering, structured data exploration, and algorithmic problem solving with clean, verifiable code.",
    aboutStory: "My foundation began with algorithmic problem solving and web technologies, evolving into an interest in data-driven systems and machine learning. As a fifth-semester student at CBIT Hyderabad, I build practical software applications—from full-stack authenticated campus platforms to exploratory data analyses—focusing on clean architecture, SDLC principles, and data integrity.",
    philosophy: "I prioritize understanding foundational principles over superficial claims. Whether developing an authenticated web application or analyzing complex distributions in datasets, I focus on verifiable logic, clear documentation, and steady improvement.",
    email: "saleemshaik.dev@gmail.com",
    resumePdfUrl: "/resume.pdf",
  },

  marqueeKeywords: [
    "Artificial Intelligence",
    "Data Science",
    "Python",
    "Java",
    "C++ & C",
    "SQL & MySQL",
    "Data Structures & Algorithms",
    "Firebase Firestore",
    "Exploratory Data Analysis",
    "NumPy & Pandas",
    "Operating Systems",
    "Computer Networks",
    "CBIT Hyderabad",
    "Full-Stack Development"
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
      id: "cbit-lost-found",
      title: "CBIT Lost & Found Campus Portal",
      tagline: "A centralized, authenticated web portal for college students to report, track, and recover misplaced campus items.",
      category: "Full-Stack Web",
      status: "Completed Project",
      problem: "College students regularly misplace belongings across large campus premises without a structured, verified platform to safely report items, moderate listings, or confirm recovery.",
      myContribution: "Engineered web portal following SDLC principles; integrated Google Authentication; built administrative management dashboard with role-based access control (RBAC); implemented anonymous reporting, client-side image compression, and 24-hour submission rate limiting to prevent spam.",
      stack: ["HTML5", "CSS3", "JavaScript (ES6)", "Firebase Firestore", "Firebase Authentication"],
      dataSources: "Student-reported campus lost and found listings stored in Firestore.",
      metricsOrOutcomes: "Delivered authenticated student verification, role-based listing moderation, and reduced upload bandwidth via client-side image compression.",
      limitations: "Client-side image compression depends on device memory; database quotas governed by Firebase Spark tier limits.",
      keyTakeaways: "Practical experience implementing role-based authorization, rate limiting, and balancing open student reporting with administrative moderation.",
      githubUrl: "https://github.com/saleemshaik2005/Lost-Found-CBIT-website",
      liveUrl: ""
    },
    {
      id: "traffic-accident-analysis",
      title: "Traffic Accident Data Analysis",
      tagline: "Exploratory data analysis uncovering temporal trends, accident frequency patterns, and critical risk factors.",
      category: "Data Science & Analytics",
      status: "Exploratory Project",
      problem: "Identifying key contributors to roadway collisions requires systematic data preprocessing, handling missing entries, and evaluating temporal distributions.",
      myContribution: "Loaded and cleaned traffic accident dataset using Pandas; conducted exploratory data analysis (EDA) to investigate accident trends; generated visualizations examining high-risk time intervals and environmental correlations.",
      stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      dataSources: "Observational traffic accident dataset.",
      metricsOrOutcomes: "Communicated distribution trends, isolated high-incident time windows, and visualized road condition patterns through structured Matplotlib figures.",
      limitations: "Observational retrospective study; does not account for real-time vehicular telematics or causal attribution.",
      keyTakeaways: "Data hygiene and exploratory visualization are indispensable for understanding real-world patterns before drawing conclusions.",
      githubUrl: "https://github.com/saleemshaik2005/MY-PORTFOLIO",
      liveUrl: ""
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
        { name: "JavaScript (ES6)", levelEvidence: "Core web development, DOM manipulation, asynchronous logic, and Firebase integration." },
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
        { name: "Machine Learning Concepts", levelEvidence: "Foundational supervised and unsupervised learning algorithms studied in curriculum." }
      ]
    },
    {
      name: "Databases & Tools",
      description: "Database engines, authentication services, and daily engineering tools.",
      skills: [
        { name: "MySQL", levelEvidence: "Relational database querying, relational algebra, and schema normalization." },
        { name: "Firebase Firestore", levelEvidence: "NoSQL document storage, real-time queries, and rule-based data security." },
        { name: "Firebase Authentication", levelEvidence: "Integrated Google Auth and secure user sessions in campus projects." },
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
      scoreOrDetail: "Fifth-Semester Undergraduate",
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
