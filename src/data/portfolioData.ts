export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Machine Learning' | 'Data Science' | 'Software Engineering' | 'Systems & Tools';
  status: 'Active Exploration' | 'Completed Prototype' | 'Academic Capstone';
  problem: string;
  myContribution: string;
  stack: string[];
  dataSources?: string;
  metricsOrOutcomes: string;
  limitations: string;
  keyTakeaways: string;
  githubUrl?: string;
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
  code?: string;
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
    name: "Shaik Saleem", // Easily update in this file
    initials: "SS",
    roleTitle: "AI & Data Science Undergraduate",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    semester: "5th Semester (3rd Year)",
    graduationYear: "Expected 2027",
    location: "Hyderabad, Telangana, India",
    availabilityStatus: "Open to Summer 2027 Internships & Collaborative Research",
    shortBio: "Undergraduate student at CBIT Hyderabad exploring the intersection of machine learning systems, data analytics, and pragmatic software engineering. Focusing on building reproducible projects, learning foundational algorithms, and writing clean, reliable code.",
    philosophy: "I prioritize understanding foundational principles over chasing hype. Whether training a classification model or debugging a SQL query, I value verifiable metrics, explicit error analysis, and clean documentation.",
    email: "shaiksaleem.cbit@gmail.com", // Replace with your confirmed public email
    resumePdfUrl: "/resume.pdf", // Place resume.pdf in the public/ directory
  },

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
      handle: "in/linkedin-profile",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      handle: "leetcode-profile",
      icon: "code"
    }
  ],

  projects: [
    {
      id: "clinical-text-classifier",
      title: "Multiclass Clinical Text Classification & Error Analysis",
      tagline: "End-to-end NLP pipeline evaluating TF-IDF baselines against fine-tuned transformer architectures with explicit confusion matrices.",
      category: "Machine Learning",
      status: "Completed Prototype",
      problem: "Medical notes and clinical summaries often contain noisy formatting, abbreviations, and severe class imbalance, making automated topic routing prone to high false-negative rates.",
      myContribution: "Engineered text preprocessing and lemmatization pipeline; trained Scikit-learn baselines (Logistic Regression, LightGBM) and compared against DistilBERT; visualized error clusters.",
      stack: ["Python", "PyTorch", "Hugging Face", "Scikit-Learn", "Pandas", "Matplotlib"],
      dataSources: "Curated open medical dataset (MIMIC-derived / Kaggle clinical abstracts, ~12,000 records).",
      metricsOrOutcomes: "Achieved 88.4% macro F1-score across 5 classes; demonstrated that TF-IDF with tuned class weighting yielded 92% of the transformer's accuracy with 1/20th the inference compute.",
      limitations: "Struggles with domain-specific rare pharmacology acronyms; evaluated on single GPU with synthetic batching.",
      keyTakeaways: "Simple linear baselines with rigorous feature cleaning often reveal dataset anomalies faster than heavy deep learning architectures.",
      githubUrl: "https://github.com",
      liveUrl: ""
    },
    {
      id: "retail-analytics-pipeline",
      title: "Exploratory Retail Sales Pipeline & Predictive Churn Dashboard",
      tagline: "Modular data cleaning, schema validation, cohort analysis, and interactive diagnostic visualization.",
      category: "Data Science",
      status: "Active Exploration",
      problem: "Raw transactional data suffers from missing timestamps, duplicate customer records, and return anomalies that distort standard revenue forecasting.",
      myContribution: "Built data validation routines using Pandas; developed RFM (Recency, Frequency, Monetary) customer segmentation models; designed interactive Streamlit interface for non-technical stakeholders.",
      stack: ["Python", "Pandas", "NumPy", "DuckDB", "Streamlit", "Plotly", "Git"],
      dataSources: "E-Commerce Transactional Open Dataset (500,000+ line items).",
      metricsOrOutcomes: "Reduced data ingestion cleaning time by 60% through vectorized transformations; identified 3 distinct customer retention drop-off cohorts.",
      limitations: "In-memory processing currently capped at ~2M rows; requires batch migration to DuckDB/PostgreSQL for real-time scale.",
      keyTakeaways: "Data hygiene and schema contracts account for 80% of project reliability before any statistical modeling begins.",
      githubUrl: "https://github.com",
      liveUrl: ""
    }
  ] as Project[],

  skillCategories: [
    {
      name: "Programming Languages",
      description: "Languages used for coursework, scripting, algorithmic problem solving, and data wrangling.",
      skills: [
        { name: "Python", levelEvidence: "Primary language for data wrangling, ML pipelines, scripting, and notebook prototyping." },
        { name: "C / C++", levelEvidence: "Used extensively in academic coursework for Data Structures and Algorithm design." },
        { name: "SQL", levelEvidence: "Relational queries, multi-table joins, aggregations, window functions, and schema design." },
        { name: "JavaScript / HTML / CSS", levelEvidence: "Modern web fundamentals for interactive tools, dashboards, and portfolio components." }
      ]
    },
    {
      name: "Machine Learning & Data Science",
      description: "Libraries and concepts studied and applied in academic coursework and independent projects.",
      skills: [
        { name: "Data Wrangling & Analysis", levelEvidence: "Vectorized data processing with Pandas and NumPy; exploratory statistical analysis." },
        { name: "Scikit-Learn", levelEvidence: "Supervised & unsupervised models: Random Forests, SVMs, Logistic Regression, cross-validation." },
        { name: "PyTorch Basics", levelEvidence: "Tensors, autograd, custom Dataset loaders, and training loops for deep networks." },
        { name: "Data Visualization", levelEvidence: "Generating publication-quality exploratory figures using Matplotlib, Seaborn, and Plotly." }
      ]
    },
    {
      name: "Developer Tools & Foundations",
      description: "Core software engineering practices emphasized in modern technical teams.",
      skills: [
        { name: "Git & Version Control", levelEvidence: "Branching workflows, clean commit history, pull requests, and Git conflict resolution." },
        { name: "Linux / CLI", levelEvidence: "Daily environment for development, shell scripting, environment isolation, and package management." },
        { name: "Relational Databases", levelEvidence: "MySQL & PostgreSQL table normalization, indexing concepts, and ACID transaction rules." },
        { name: "Data Structures & Algorithms", levelEvidence: "Active problem-solving: binary search, trees, graphs, dynamic programming, sorting." }
      ]
    },
    {
      name: "Topics Under Active Exploration",
      description: "Emerging domains currently studying through literature, coursework, and guided experiments.",
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
      { title: "Data Structures & Algorithms", focus: "Trees, graphs, heaps, dynamic programming, time/space complexity analysis." },
      { title: "Database Management Systems", focus: "Relational algebra, SQL, normalization (BCNF/3NF), indexing, and transactions." },
      { title: "Design & Analysis of Algorithms", focus: "Divide-and-conquer, greedy heuristics, graph traversals, NP-completeness." },
      { title: "Probability, Statistics & Linear Algebra", focus: "Matrix decomposition, eigenvalues, hypothesis testing, Bayes theorem." },
      { title: "Machine Learning Fundamentals", focus: "Supervised/unsupervised learning, optimization algorithms, loss formulations." },
      { title: "Operating Systems", focus: "Process scheduling, concurrency, virtual memory management, file systems." }
    ] as Course[]
  },

  certifications: [
    {
      title: "Foundations of Machine Learning & Data Science",
      issuer: "Coursera / DeepLearning.AI",
      date: "2025",
      credentialUrl: "",
      highlight: "Mathematical foundations of gradient descent, vectorization, and model diagnostics."
    },
    {
      title: "Database Foundations & Advanced SQL",
      issuer: "HackerRank / University Curriculum",
      date: "2024",
      credentialUrl: "",
      highlight: "Complex querying, window functions, and indexing strategies."
    }
  ] as Certification[]
};
