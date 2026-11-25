// ==========================================
// SITE CONTENT — sourced from CV, cover letter
// and portfolio case studies (Nov 2026)
// ==========================================

export const PROFILE = {
  name: "Nisar Ahmad",
  shortName: "Nisar",
  role: "Data Analyst & BI Developer",
  specialty: "AI-Augmented Analytics",
  headline: ["Data, made", "decision-ready."],
  location: "Gilgit-Baltistan, Pakistan",
  locationNote: "Remote · Open to relocation",
  email: "nisarahmad.py@gmail.com",
  phone: "+92 344 4601408",
  phoneHref: "tel:+923444601408",
  linkedin: "https://linkedin.com/in/nisarahmadpy5",
  github: "https://github.com/iamnisarahmad1408-pixel",
  resume: "/nisar-ahmad-cv.pdf",
  availability: "Open to new roles & projects",
  intro:
    "I'm Nisar — a data analyst and Power BI developer with 4+ years turning raw operational, financial and field data into dashboards, KPIs and predictive insights for teams in the US, UAE and Pakistan.",
  introSecondary:
    "Currently Data Insights Officer at the Aga Khan Rural Support Programme (AKRSP), building M&E data systems by day — and wiring AI into the analytics workflow everywhere else.",
};

export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "AI Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO_TAGS = [
  "Power BI",
  "DAX",
  "Python",
  "SQL",
  "BigQuery",
  "Claude / MCP",
  "Tableau",
  "Power Automate",
];

export const HERO_SNAPSHOT = {
  label: "Live snapshot",
  note: "Sample data",
  kpis: [
    { label: "Dashboards live", value: "50+", delta: "across 3 depts", positive: true },
    { label: "Records / week", value: "200K", delta: "99.5% integrity", positive: true },
    { label: "Forecast MAPE", value: "8%", delta: "ARIMA + RF", positive: true },
  ],
  spark: [34, 41, 38, 47, 52, 49, 58, 63, 61, 72, 78, 84],
};

export const STATS = [
  { value: 50, suffix: "+", label: "Power BI dashboards shipped", detail: "across HSEQ, M&E, finance & operations", prefix: "" },
  { value: 500, suffix: "K+", label: "Annual savings identified", detail: "from EDA across 200K+ row datasets", prefix: "$" },
  { value: 200, suffix: "K+", label: "Records piped per week", detail: "ETL at 99.5% data integrity", prefix: "" },
  { value: 8, suffix: "%", label: "Forecast error (MAPE)", detail: "ARIMA + Random Forest ensemble", prefix: "" },
];

export const MARQUEE_TOOLS = [
  "Power BI",
  "DAX",
  "Python",
  "SQL",
  "BigQuery",
  "Claude · MCP",
  "Power Automate",
  "Tableau",
  "Looker Studio",
  "Pandas",
  "Scikit-learn",
  "ARIMA",
  "KoboToolbox",
  "Streamlit",
  "n8n",
  "Redshift",
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  problem: string;
  build: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  accent: string;
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sports-center-executive-bi",
    title: "Executive BI for a multi-location sports center",
    sector: "Sports & education · USA",
    summary:
      "One trusted view of revenue, payroll, enrollment and retention for a 3-location, 2,400+ student operation — replacing manual spreadsheet reporting.",
    problem:
      "Leadership across three locations had no single source of truth. Revenue lived in QuickBooks Online, enrollment and trials in the iClass CRM, and payroll in a separate system. Monthly reporting meant stitching spreadsheets together by hand.",
    build: [
      "Integrated 9+ tables from the client's iClass CRM data lake on Amazon Redshift with QuickBooks Online revenue and payroll data.",
      "Modeled a star schema and authored DAX for 7 executive KPIs: revenue, payroll %, enrollments, trials, cancellations, occupancy and conversion.",
      "Added a Department Deep Dive and a Comparisons page, then validated every figure against the client's own reports before publishing.",
      "Shipped to Power BI Service with director access and a documented weekly refresh process.",
    ],
    outcome:
      "Directors now open one dashboard instead of chasing reports, and manual spreadsheet reporting is retired from the weekly routine.",
    metrics: [
      { value: "3", label: "locations unified" },
      { value: "2,400+", label: "active students" },
      { value: "7", label: "executive KPIs" },
      { value: "9+", label: "source tables" },
    ],
    stack: ["Power BI", "DAX", "Amazon Redshift", "QuickBooks Online", "Power BI Service"],
    accent: "from-orange-500/25 to-amber-500/10",
    featured: true,
  },
  {
    slug: "nyc-real-estate-platform",
    title: "NYC real estate intelligence platform",
    sector: "Real estate · USA",
    summary:
      "A live web platform that folds six-plus NYC open data sources into one search — built with AI-assisted development end to end.",
    problem:
      "An investor was researching properties across half a dozen city websites — PLUTO for zoning, ACRIS for deeds and mortgages, DOB and HPD for permits and violations — to find under-built or distressed assets.",
    build: [
      "Brought PLUTO, ACRIS, DOB and HPD data together with search by zip, lot width, stories, sale date and unused FAR / buildable sq ft.",
      "Built a clickable parcel map plus property cards with deeds, mortgages, violations, permits, owner contacts and tax-bill links.",
      "Added an activity feed of new sales, permits and violations, saved lists, notes and Excel/PDF export.",
      "Used Claude-assisted development in VS Code for data exploration, plus DAX and Python logic, then verified outputs against source data.",
    ],
    outcome:
      "Property research that used to mean visiting many city websites now takes one search — under-built and distressed properties surface in minutes.",
    metrics: [
      { value: "6+", label: "data sources merged" },
      { value: "1", label: "search across all" },
      { value: "FAR", label: "unused buildable area" },
      { value: "Excel / PDF", label: "export formats" },
    ],
    stack: ["JavaScript", "NYC Open Data APIs", "ArcGIS", "Claude", "Vercel"],
    accent: "from-sky-500/25 to-indigo-500/10",
    featured: true,
  },
  {
    slug: "hseq-enterprise-analytics",
    title: "Enterprise BI & HSEQ performance analytics",
    sector: "Energy · compliance",
    summary:
      "50+ dashboards on star-schema models with custom DAX, covering HSEQ and MEPS data across three departments.",
    problem:
      "Compliance, operational and safety KPIs were tracked in disconnected reports, so executive reviews meant reconciling numbers from several teams before any decision could be made.",
    build: [
      "Designed 50+ interactive Power BI dashboards on star-schema models with custom DAX and Power Query.",
      "Consolidated HSEQ and MEPS datasets across three departments into shared KPI definitions and drill paths.",
      "Engineered 6 automated ETL and reporting workflows, moving 500K+ records with Python and advanced SQL.",
      "Set up role-based access so each team saw its own slice without separate report copies.",
    ],
    outcome:
      "Executive review time dropped 35%, and one set of KPI definitions replaced competing spreadsheets.",
    metrics: [
      { value: "50+", label: "dashboards" },
      { value: "3", label: "departments" },
      { value: "35%", label: "faster reviews" },
      { value: "500K+", label: "records analysed" },
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python", "SQL", "Row-Level Security"],
    accent: "from-emerald-500/25 to-teal-500/10",
    featured: true,
  },
  {
    slug: "akrsp-me-data-quality",
    title: "AI-assisted M&E data quality at AKRSP",
    sector: "International development · M&E",
    summary:
      "Field data collection, validation and programme dashboards for the Diamer programme — with LLM-assisted quality checks.",
    problem:
      "Monitoring and evaluation survey data arrived from the field in volume, and every round needed cleaning, validation and progress reporting before management could act on it.",
    build: [
      "Manage KoboToolbox field data collection and monitor surveys for quality, completeness and consistency across the programme.",
      "Clean, validate and transform field datasets with Python, SQL and Google BigQuery into repeatable pipelines.",
      "Introduced Claude-assisted workflows for data-quality checks, cleaning and recurring reporting, with human review of every figure.",
      "Build Power BI dashboards and programme progress reports, including MERL study budgets for management decisions.",
    ],
    outcome:
      "Stronger data quality, faster recurring reports and a repeatable AI-assisted approach to development programme data.",
    metrics: [
      { value: "Kobo", label: "field collection" },
      { value: "BigQuery", label: "warehouse" },
      { value: "M&E", label: "programme focus" },
      { value: "LLM", label: "quality checks" },
    ],
    stack: ["KoboToolbox", "Python", "SQL", "BigQuery", "Claude", "Power BI"],
    accent: "from-lime-500/25 to-emerald-500/10",
  },
  {
    slug: "offshore-campaigns",
    title: "Offshore campaign performance dashboard",
    sector: "Energy / oil & gas · UAE",
    summary:
      "A planned-vs-actual view of offshore campaign and shutdown plans, built from daily completion extracts.",
    problem:
      "Campaign progress was tracked by hand from daily completion extracts, so the project team never had one current view of where each offshore campaign actually stood.",
    build: [
      "Modeled planned-vs-actual progress for offshore campaign and shutdown plans in Power BI with DAX and Power Query.",
      "Standardised daily completion extracts into a consistent reporting structure.",
      "Scoped a Power Automate pipeline to process and email the daily extracts automatically.",
    ],
    outcome:
      "The project team now has a single current view of progress across campaigns instead of manual tracking.",
    metrics: [
      { value: "Planned", label: "vs actual" },
      { value: "Daily", label: "extract cadence" },
      { value: "1", label: "current view" },
      { value: "Auto", label: "email pipeline" },
    ],
    stack: ["Power BI", "DAX", "Power Query", "Power Automate"],
    accent: "from-slate-500/25 to-zinc-500/10",
  },
  {
    slug: "sales-forecasting",
    title: "Sales forecasting engine & dashboard",
    sector: "Finance & planning",
    summary:
      "A hybrid ARIMA + Random Forest ensemble predicting monthly revenue within 8% MAPE, embedded in Power BI.",
    problem:
      "Quarterly planning relied on flat extrapolation, so revenue targets drifted from actuals and each business unit planned on its own assumptions.",
    build: [
      "Combined ARIMA time-series structure with a Random Forest residual model for monthly revenue forecasting.",
      "Backtested across historical periods to reach 8% MAPE, then packaged the output as a Power BI forecast dashboard.",
      "Handed the model to two business units for quarterly planning with documented assumptions.",
    ],
    outcome:
      "Two business units now plan quarterly against the same forecast, at 8% error instead of guesswork.",
    metrics: [
      { value: "8%", label: "MAPE" },
      { value: "2", label: "business units" },
      { value: "ARIMA", label: "+ Random Forest" },
      { value: "Monthly", label: "forecast grain" },
    ],
    stack: ["Python", "ARIMA", "Random Forest", "Power BI", "Pandas"],
    accent: "from-violet-500/25 to-fuchsia-500/10",
  },
];

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
  tools: string[];
};

export const WORKFLOW: WorkflowStep[] = [
  {
    step: "01",
    title: "Ingest & quality-check",
    description:
      "Field, operational and financial data comes in from KoboToolbox, APIs, SQL databases and spreadsheets. Python and SQL enforce validation rules for missing values, duplicates and outliers before anything is modelled.",
    tools: ["KoboToolbox", "Python", "SQL", "BigQuery"],
  },
  {
    step: "02",
    title: "Model for decisions",
    description:
      "Star schemas, semantic models and DAX measures built around the questions management actually asks — not around how the source system happens to store data.",
    tools: ["Star schema", "DAX", "Power Query", "RLS"],
  },
  {
    step: "03",
    title: "Build with AI in the loop",
    description:
      "Power BI PBIX files are converted to PBIP projects (TMDL + PBIR) and edited in VS Code, with Claude connected through Model Context Protocol to write measures, document models and run QA. Every output is checked against source data.",
    tools: ["Claude", "MCP", "PBIP / TMDL", "VS Code"],
  },
  {
    step: "04",
    title: "Ship & automate",
    description:
      "Reports publish to Power BI Service with governed access. Power Automate and n8n pipelines process daily extracts and deliver refreshed summaries — so reporting runs without anyone rebuilding it by hand.",
    tools: ["Power BI Service", "Power Automate", "n8n", "Git"],
  },
];

export const EXPERIENCE = [
  {
    company: "Aga Khan Rural Support Programme (AKRSP)",
    role: "Data Insights Officer — Monitoring & Evaluation",
    period: "Aug 2026 — Present",
    location: "Diamer, Gilgit-Baltistan",
    current: true,
    highlights: [
      "Manage KoboToolbox field data collection for M&E, monitoring survey data for quality, completeness and consistency across the Diamer programme.",
      "Clean, validate and transform field datasets with Python, SQL and Google BigQuery into repeatable pipelines for downstream analysis.",
      "Introduced AI/LLM-assisted workflows (Claude) for data-quality checks, cleaning and recurring reporting, cutting manual review effort.",
      "Build Power BI dashboards and programme progress reports, including MERL study budgets that inform management decisions.",
    ],
    tags: ["KoboToolbox", "BigQuery", "Python", "SQL", "Power BI", "M&E"],
  },
  {
    company: "Calibreon International",
    role: "Data Scientist / Data Analyst",
    period: "May 2025 — Present",
    location: "Pakistan",
    current: true,
    highlights: [
      "Designed and deployed 50+ Power BI dashboards with custom DAX and Power Query, tracking cross-departmental KPIs and cutting executive review time by 35%.",
      "Managed HSEQ and MEPS datasets; built star-schema models across 3 departments for compliance and performance-monitoring reports.",
      "Analysed 500K+ records with Python and SQL to surface revenue trends (12% targeting lift) and engineered 6 automated ETL/reporting workflows saving 10+ hours per week.",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Python", "SQL", "HSEQ"],
  },
  {
    company: "Boston Consulting Group (BCG)",
    role: "Data Analyst / BI Developer — Virtual Experience",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    current: false,
    highlights: [
      "Built C-suite Tableau dashboards that cut quarterly review prep by 30%.",
      "Ran EDA on 200K+ row datasets and identified three bottlenecks worth $500K+ in annual savings.",
      "Trained Logistic Regression and Random Forest models reaching 89% accuracy for demand forecasting.",
      "Presented strategic analytics recommendations to senior consultants.",
    ],
    tags: ["Tableau", "Python", "EDA", "Random Forest", "Forecasting"],
  },
  {
    company: "PGT Recruitment",
    role: "Project Manager — Data & AI Workflows",
    period: "Jan 2024 — Jun 2024",
    location: "Remote",
    current: false,
    highlights: [
      "Delivered 4 BI and analytics projects end-to-end across 3 technical teams using Agile and JIRA.",
      "Authored 20+ reports and dashboards at 98% accuracy, accelerating decision cycles by 25%.",
    ],
    tags: ["Project Management", "Agile", "JIRA", "BI"],
  },
  {
    company: "Excelerate",
    role: "Data Analyst",
    period: "Sep 2022 — Feb 2024",
    location: "Remote",
    current: false,
    highlights: [
      "Built Excel and SQL reporting dashboards on 100K+ row datasets that improved forecast accuracy by 20%.",
      "Automated 8 recurring reports, reclaiming 6+ hours per week of manual work.",
    ],
    tags: ["SQL", "Excel", "Reporting", "Automation"],
  },
  {
    company: "Accelerate Prosperity — AKDN",
    role: "Data Analyst — Business Intelligence",
    period: "Dec 2020 — May 2022",
    location: "Gilgit-Baltistan, Pakistan",
    current: false,
    highlights: [
      "Collected, validated and reported programme data for 50+ startups, SMEs and partners to support M&E and evidence-based decisions.",
      "Built automated ETL pipelines (Python, Pandas, SQLAlchemy) processing 200K+ records per week at 99.5% data integrity, plus 8+ dashboards in Plotly Dash and Streamlit.",
      "Applied K-Means and DBSCAN segmentation that drove an 18% churn reduction and a 22% outreach conversion lift.",
    ],
    tags: ["Python", "ETL", "Plotly Dash", "Clustering", "M&E"],
  },
];

export const SKILL_GROUPS = [
  {
    category: "Business intelligence",
    icon: "chart",
    items: [
      "Power BI Service",
      "DAX",
      "Power Query / M",
      "Star & snowflake schema",
      "Row-level security",
      "Tableau",
      "Looker Studio",
      "Excel (Power Pivot)",
    ],
  },
  {
    category: "AI-augmented analytics",
    icon: "spark",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Model Context Protocol",
      "Power BI MCP",
      "PBIP / TMDL / PBIR",
      "AI-assisted DAX & SQL",
      "RAG & LangChain",
    ],
  },
  {
    category: "Programming & data",
    icon: "code",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SQL (Postgres, MySQL, SQL Server)",
      "BigQuery",
      "Amazon Redshift",
      "FastAPI / REST",
      "Git",
    ],
  },
  {
    category: "Data engineering & automation",
    icon: "database",
    items: [
      "ETL pipelines",
      "Data quality & governance",
      "Power Automate",
      "n8n",
      "KoboToolbox",
      "QuickBooks Online integration",
    ],
  },
  {
    category: "Data science",
    icon: "brain",
    items: [
      "EDA",
      "A/B testing",
      "Hypothesis testing",
      "Forecasting (ARIMA)",
      "Regression",
      "Random Forest",
      "K-Means & DBSCAN",
      "Predictive modelling",
    ],
  },
  {
    category: "Delivery & reporting",
    icon: "trend",
    items: [
      "KPI & executive reporting",
      "M&E and results management",
      "Dashboard design",
      "Stakeholder communication",
      "Agile delivery",
      "Documentation",
    ],
  },
];

export const DOMAINS = [
  "Monitoring & evaluation",
  "International development",
  "Energy / oil & gas",
  "HSEQ",
  "Finance & payroll",
  "Real estate",
  "Sports & education",
  "E-commerce",
];

export const EDUCATION = [
  {
    school: "Karakoram International University",
    degree: "BS Computer Science",
    period: "May 2021 — May 2025",
  },
  {
    school: "National University of Sciences & Technology (NUST)",
    degree: "Diploma in Artificial Intelligence",
    period: "Jun 2023 — Sep 2024",
    note: "High Impact Data Science & AI Program",
  },
];

export const CERTIFICATIONS = [
  { name: "IBM Data Science Professional Certificate", issuer: "IBM / Coursera" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM" },
  { name: "AI for Everyone", issuer: "DeepLearning.AI" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud" },
  { name: "Foundations: Introduction to LangChain", issuer: "Python" },
  { name: "AI for Data Analysis", issuer: "Coursera" },
  { name: "Data Analytics Virtual Experience", issuer: "BCG" },
];

export const LANGUAGES = [
  { language: "English", level: "Full professional proficiency" },
  { language: "Urdu", level: "Native" },
];
