export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Artificial Intelligence' | 'Machine Learning' | 'Data Science' | 'Algorithms & Systems';
  status: 'Completed Prototype' | 'Active Exploration' | 'Academic Capstone';
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

export interface Course {
  title: string;
  focus: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  highlight: string;
}

export const portfolioData = {
  personal: {
    name: "Shaik Saleem",
    initials: "SS",
    roleTitle: "AI & Data Science Undergraduate",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Hyderabad, Telangana, India",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    semester: "5th Semester (3rd Year)",
    graduationYear: "Class of 2027",
    availabilityStatus: "Open to Summer 2027 Internships & Research",
    shortBio: "Undergraduate student at CBIT Hyderabad exploring the architecture of machine learning models, statistical data pipelines, and pragmatic software engineering. Driven by foundational algorithms, reproducible experiments, and clean code.",
    aboutStory: "My journey began with algorithmic problem solving in C/C++ and evolved into a deep fascination with how statistical models uncover hidden patterns in data. Currently at CBIT Hyderabad, I spend my time understanding what happens under the hood of machine learning models—evaluating error boundaries, optimizing matrix operations, and building end-to-end applications that solve real-world problems.",
    philosophy: "I prioritize understanding first principles over chasing hype. Whether training an NLP classifier or indexing a SQL database, I believe in verifiable metrics, explicit error analysis, and maintainable software.",
    email: "shaiksaleem.cbit@gmail.com",
    resumePdfUrl: "/resume.pdf",
  },

  marqueeKeywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms",
    "PyTorch",
    "Python",
    "Deep Learning",
    "SQL & Relational Databases",
    "Pandas & NumPy",
    "Scikit-Learn",
    "Data Pipelines",
    "Computer Vision Basics",
    "CBIT Hyderabad",
    "Statistical Modeling",
    "Object-Oriented Design"
  ],

  quickFacts: [
    { label: "Institution", value: "CBIT, Hyderabad", detail: "Premier Autonomous Engineering College" },
    { label: "Academic Focus", value: "AI & Data Science", detail: "5th Semester / 3rd Year" },
    { label: "Graduation", value: "May 2027", detail: "B.Tech Undergraduate" },
    { label: "Core Mindset", value: "First Principles", detail: "Rigor, Evidence, and Code Clarity" }
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
      url: "https://linkedin.com",
      handle: "Shaik Saleem",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      handle: "saleem-cbit",
      icon: "code"
    }
  ],

  projects: [
    {
      id: "clinical-text-classifier",
      title: "Multiclass Clinical Note Classifier & Error Diagnostic Pipeline",
      tagline: "End-to-end NLP diagnostic pipeline contrasting TF-IDF baselines with fine-tuned transformers on noisy clinical abstracts.",
      category: "Artificial Intelligence",
      status: "Completed Prototype",
      problem: "Clinical narratives suffer from severe abbreviations, class imbalance, and sparse vocabulary, leading standard automated topic routers to produce dangerous false-negative rates.",
      myContribution: "Constructed regex cleaning and medical lemmatization pipelines; trained baseline models (Logistic Regression, LightGBM) and contrasted with DistilBERT; visualized confusion matrices to isolate class collision clusters.",
      stack: ["Python", "PyTorch", "Hugging Face", "Scikit-Learn", "Pandas", "Matplotlib"],
      dataSources: "Curated open medical dataset (~12,000 anonymized clinical records).",
      metricsOrOutcomes: "Achieved 88.4% macro F1-score; proved that TF-IDF with tuned inverse class weighting achieved 92% of transformer performance at 1/20th inference cost.",
      limitations: "Struggles with domain-specific rare pharmacology acronyms; evaluated on single GPU with synthetic batching.",
      keyTakeaways: "Rigorous exploratory data analysis and class-weighted baselines often solve 80% of classification challenges faster than heavy uncalibrated deep models.",
      githubUrl: "https://github.com/saleemshaik2005/MY-PORTFOLIO",
      liveUrl: ""
    },
    {
      id: "retail-analytics-pipeline",
      title: "Vectorized E-Commerce Pipeline & Customer Churn Engine",
      tagline: "High-throughput data cleaning, schema validation, cohort retention analysis, and stakeholder diagnostic dashboard.",
      category: "Data Science",
      status: "Active Exploration",
      problem: "Raw retail transactional logs contain duplicate order IDs, irregular timestamps, and return anomalies that distort standard lifetime revenue forecasts.",
      myContribution: "Engineered automated schema validation routines using Pandas; implemented RFM (Recency, Frequency, Monetary) customer segmentation algorithms; developed an interactive Streamlit diagnostic tool.",
      stack: ["Python", "Pandas", "NumPy", "DuckDB", "Streamlit", "Plotly"],
      dataSources: "Open E-Commerce Transactional Dataset (500,000+ line items).",
      metricsOrOutcomes: "Reduced data ingestion cleaning time by 60% through vectorized transformations; identified 3 distinct customer retention drop-off cohorts.",
      limitations: "In-memory processing currently capped at ~2M rows; requires batch migration to DuckDB/PostgreSQL for real-time scale.",
      keyTakeaways: "Data contracts and hygiene are 80% of data science; clean data pipelines outperform complex algorithms applied to dirty inputs.",
      githubUrl: "https://github.com/saleemshaik2005/MY-PORTFOLIO",
      liveUrl: ""
    },
    {
      id: "algo-visualizer-engine",
      title: "Interactive Graph & Heuristic Search Visualizer",
      tagline: "Visual simulation engine demonstrating pathfinding, state-space exploration, and time/space complexity trade-offs.",
      category: "Algorithms & Systems",
      status: "Completed Prototype",
      problem: "Students and junior engineers often struggle to understand how priority queues, heuristic functions (Manhattan vs Euclidean), and graph representations affect algorithmic latency.",
      myContribution: "Implemented Dijkstra, A* Search, and BFS/DFS algorithms with step-by-step visual step execution; integrated weighted graph generation and maze generation algorithms.",
      stack: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Data Structures"],
      dataSources: "Synthetically generated 2D grid mazes and random weighted graph topologies.",
      metricsOrOutcomes: "Zero frame-rate drop on 10,000 node graphs; provided interactive step-by-step state visualization for academic study groups at CBIT.",
      limitations: "Grid based; does not yet model 3D non-Euclidean spatial navigation.",
      keyTakeaways: "Visualizing state transitions is the most effective way to deeply internalize algorithm amortized complexity and heuristics.",
      githubUrl: "https://github.com/saleemshaik2005/MY-PORTFOLIO",
      liveUrl: ""
    }
  ] as Project[],

  skillCategories: [
    {
      name: "Programming Languages",
      description: "Languages used for algorithmic problem solving, scripting, and system implementation.",
      skills: [
        { name: "Python", levelEvidence: "Primary language: Data wrangling, ML pipelines, scripting, and notebook prototyping." },
        { name: "C / C++", levelEvidence: "Academic coursework: Core Data Structures, graph algorithms, and memory management." },
        { name: "SQL", levelEvidence: "Relational queries, multi-table joins, subqueries, indexing, and normalization." },
        { name: "JavaScript / HTML / CSS", levelEvidence: "Modern web tools, interactive data visualizers, and responsive layouts." }
      ]
    },
    {
      name: "Machine Learning & Data Science",
      description: "Libraries and concepts studied and applied in coursework and independent projects.",
      skills: [
        { name: "Data Wrangling & Analysis", levelEvidence: "Vectorized processing with Pandas and NumPy; exploratory statistical analysis." },
        { name: "Scikit-Learn", levelEvidence: "Supervised & unsupervised models: Random Forests, SVMs, Logistic Regression, cross-validation." },
        { name: "PyTorch Fundamentals", levelEvidence: "Tensors, autograd, custom Dataset loaders, and loss optimization loops." },
        { name: "Data Visualization", levelEvidence: "Exploratory graphics and diagnostics using Matplotlib, Seaborn, and Plotly." }
      ]
    },
    {
      name: "Developer Tools & Systems",
      description: "Core software engineering workflows and computing environments.",
      skills: [
        { name: "Git & GitHub", levelEvidence: "Clean commit history, branching workflows, pull requests, and repo maintenance." },
        { name: "Linux / CLI", levelEvidence: "Daily Unix environment: shell scripting, package management, virtual environments." },
        { name: "Relational DBMS", levelEvidence: "MySQL & PostgreSQL: schema architecture, transactions (ACID), and constraints." },
        { name: "Data Structures & Algorithms", levelEvidence: "Trees, graphs, dynamic programming, sorting, binary search, complexity analysis." }
      ]
    },
    {
      name: "Active Exploration & Curiosity",
      description: "Emerging domains currently exploring through literature and coursework.",
      skills: [
        { name: "Transformer Architectures", levelEvidence: "Self-attention mechanisms, tokenization strategies, and LLM fine-tuning techniques." },
        { name: "Data Engineering Patterns", levelEvidence: "Columnar formats (Parquet, DuckDB), stream processing fundamentals, and ETL orchestration." },
        { name: "MLOps & Model Evaluation", levelEvidence: "Model drift monitoring, latency benchmarking, and reproducible pipeline versioning." }
      ]
    }
  ] as SkillCategory[],

  education: {
    institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Gandipet, Hyderabad, Telangana",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    period: "2023 – 2027",
    semesterStanding: "Fifth Semester (3rd Year)",
    accreditation: "Autonomous Institution affiliated with Osmania University, NAAC A++ Accredited",
    courses: [
      { title: "Data Structures & Algorithms", focus: "Trees, graphs, heaps, dynamic programming, asymptotic analysis." },
      { title: "Database Management Systems", focus: "Relational algebra, SQL, normalization (BCNF/3NF), indexing, transactions." },
      { title: "Design & Analysis of Algorithms", focus: "Divide-and-conquer, greedy heuristics, graph traversals, NP-completeness." },
      { title: "Probability & Statistics", focus: "Hypothesis testing, Bayes theorem, distributions, statistical inference." },
      { title: "Machine Learning Fundamentals", focus: "Supervised/unsupervised models, gradient descent, loss formulations." },
      { title: "Operating Systems", focus: "Process scheduling, concurrency, virtual memory management, file systems." }
    ] as Course[]
  },

  certifications: [
    {
      title: "Foundations of Machine Learning & Data Science",
      issuer: "DeepLearning.AI / Coursera",
      date: "2025",
      credentialUrl: "",
      highlight: "Mathematical foundations of gradient descent, vectorization, and model diagnostics."
    },
    {
      title: "Advanced SQL & Relational Database Architecture",
      issuer: "HackerRank / Academic Honors",
      date: "2024",
      credentialUrl: "",
      highlight: "Complex multi-table queries, analytical window functions, and indexing strategies."
    }
  ] as Certification[]
};
