"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Database,
  BarChart3,
  Brain,
  Code2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

// ==========================================
// DATA
// ==========================================

const STATS = [
  { value: 500, suffix: "K+", label: "Cost savings identified", prefix: "$" },
  { value: 15, suffix: "+", label: "Production dashboards", prefix: "" },
  { value: 18, suffix: "%", label: "Client churn reduced", prefix: "" },
  { value: 89, suffix: "%", label: "Predictive model accuracy", prefix: "" },
];

const EXPERIENCE = [
  {
    company: "Calibreon International",
    role: "Data Analyst / Power BI Developer",
    period: "May 2025 — Present",
    location: "Pakistan",
    highlights: [
      "Designed & deployed 50+ interactive Power BI dashboards with custom DAX measures, cutting executive review time by 35%",
      "Built star-schema data models connecting SQL, Excel, and APIs — enabling self-service reporting across 3 departments",
      "Interrogated 500K+ transactional records using Python and advanced SQL, driving 12% lift in quarterly sales targeting",
      "Engineered 6 automated reporting workflows, eliminating 10+ hours/week of manual effort",
    ],
    tags: ["Power BI", "DAX", "Python", "SQL", "A/B Testing"],
  },
  {
    company: "Boston Consulting Group (BCG)",
    role: "Data Analyst / BI Developer — Virtual Experience",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    highlights: [
      "Developed executive Tableau dashboards for C-suite, reducing quarterly review prep by 30%",
      "Conducted EDA on 200K+ row datasets, identifying $500K+ in annual cost savings",
      "Trained Logistic Regression & Random Forest models reaching 89% accuracy for demand forecasting",
      "Presented strategic analytics recommendations to senior consultants",
    ],
    tags: ["Tableau", "Python", "ML", "EDA", "Forecasting"],
  },
  {
    company: "PGT Recruitment",
    role: "Project Manager — Data & AI Workflows",
    period: "Jan 2024 — Jun 2024",
    location: "Remote",
    highlights: [
      "Owned end-to-end delivery of 4 BI and data analytics projects across 3 technical teams",
      "Authored 20+ data-driven reports with 98% accuracy, accelerating decision cycles by 25%",
      "Implemented agile sprint workflows and JIRA tracking for cross-team communication",
    ],
    tags: ["Project Management", "Agile", "BI", "JIRA"],
  },
  {
    company: "Excelerate",
    role: "Data Analyst",
    period: "Sep 2022 — Feb 2024",
    location: "Remote",
    highlights: [
      "Built Excel and SQL-powered reporting dashboards, improving forecast accuracy by 20%",
      "Analyzed 100K+ row operational datasets driving decisions across multiple business units",
      "Automated 8 recurring SQL and Excel reports, reclaiming 6+ hours/week",
    ],
    tags: ["SQL", "Excel", "Reporting", "Automation"],
  },
  {
    company: "Accelerate Prosperity — AKDN",
    role: "Data Analyst — Business Intelligence",
    period: "Dec 2020 — May 2022",
    location: "Pakistan",
    highlights: [
      "Architected 8+ interactive dashboards (Plotly Dash, Streamlit) for 50+ startups & SMEs",
      "Drove 18% reduction in fintech client churn via behavioral cohort analysis",
      "Executed K-Means & DBSCAN clustering, lifting outreach conversion by 22%",
      "Built ETL pipelines processing 200K+ records/week at 99.5% data integrity",
    ],
    tags: ["Plotly Dash", "Streamlit", "ETL", "ML", "Python"],
  },
];

const PROJECTS = [
  {
    title: "Customer Churn Prediction Dashboard",
    description:
      "End-to-end Power BI dashboard with star-schema model and SQL pipelines tracking 50K+ users. Custom DAX for churn probability, retention cohorts, rolling averages with drill-through navigation.",
    impact: "40% faster at-risk response time",
    stack: ["Power BI", "DAX", "SQL", "Python"],
    accent: "from-orange-500/20 to-rose-500/10",
  },
  {
    title: "Sales Forecasting Model & Dashboard",
    description:
      "Hybrid ARIMA + Random Forest ensemble predicting monthly revenue within 8% MAPE. Integrated into Power BI dashboard adopted by 2 business units for quarterly planning.",
    impact: "8% MAPE forecasting accuracy",
    stack: ["Python", "Power BI", "ARIMA", "Random Forest"],
    accent: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "SME Portfolio KPI Dashboard",
    description:
      "Interactive real-time portfolio dashboard monitoring 50+ startups & SMEs with custom filters, KPI cards, and drill-down charts powered by PostgreSQL backend.",
    impact: "50+ companies monitored",
    stack: ["Plotly Dash", "Streamlit", "Python", "PostgreSQL"],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Automated Executive Reporting System",
    description:
      "Python automation pipeline replacing 8 manual Excel reports. Delivers dashboards to stakeholders via scheduled email with full Plotly visualizations.",
    impact: "40+ hours/month saved",
    stack: ["Python", "Pandas", "Plotly", "SMTP"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const SKILLS = [
  {
    category: "BI & Visualization",
    icon: BarChart3,
    items: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Plotly Dash",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Power BI Expertise",
    icon: Sparkles,
    items: [
      "DAX",
      "Power Query / M",
      "Star & Snowflake Schema",
      "Row-Level Security",
      "Dataflows",
      "Drill-through",
      "Bookmarks",
    ],
  },
  {
    category: "Data & SQL",
    icon: Database,
    items: [
      "Advanced SQL",
      "PostgreSQL",
      "MySQL",
      "BigQuery",
      "MongoDB",
      "ETL Pipelines",
      "Data Modeling",
    ],
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "R", "JavaScript", "VBA"],
  },
  {
    category: "Machine Learning & AI",
    icon: Brain,
    items: [
      "Logistic Regression",
      "Random Forest",
      "K-Means",
      "DBSCAN",
      "TensorFlow",
      "LangChain",
      "Generative AI",
    ],
  },
  {
    category: "Analytics & Modeling",
    icon: TrendingUp,
    items: [
      "EDA",
      "A/B Testing",
      "Hypothesis Testing",
      "KPI Design",
      "Cohort Analysis",
      "Time Series (ARIMA)",
    ],
  },
];

const REVENUE_DATA = [
  { month: "Jan", revenue: 42, forecast: 40 },
  { month: "Feb", revenue: 48, forecast: 46 },
  { month: "Mar", revenue: 55, forecast: 53 },
  { month: "Apr", revenue: 51, forecast: 58 },
  { month: "May", revenue: 67, forecast: 64 },
  { month: "Jun", revenue: 73, forecast: 71 },
  { month: "Jul", revenue: 82, forecast: 79 },
  { month: "Aug", revenue: 91, forecast: 88 },
];

const CHURN_DATA = [
  { segment: "New", value: 8 },
  { segment: "Active", value: 24 },
  { segment: "At Risk", value: 18 },
  { segment: "Dormant", value: 12 },
  { segment: "Churned", value: 6 },
];

// ==========================================
// COMPONENTS
// ==========================================

function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10 py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-medium tracking-tight">
          Nisar<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="link-underline">Work</a>
          <a href="#experience" className="link-underline">Experience</a>
          <a href="#skills" className="link-underline">Skills</a>
          <a href="#contact" className="link-underline">Contact</a>
        </div>
        <a
          href="mailto:nisarahmad.py@gmail.com"
          className="group relative inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors duration-300"
        >
          Hire me
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grid-bg">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl blob" style={{ animationDelay: "5s" }} />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 md:px-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 text-sm text-muted mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for new projects
        </motion.div>

        <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight font-light">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block"
          >
            Data, made
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="block italic font-normal"
          >
            <span className="relative">
              decision-ready
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 600 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5,15 Q150,5 300,12 T595,8"
                  stroke="#ff5722"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                />
              </svg>
            </span>
            .
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-12 gap-8 mt-12"
        >
          <div className="md:col-span-5">
            <p className="text-lg text-muted leading-relaxed">
              I'm <span className="text-ink font-medium">Nisar Ahmad</span> — a Data Scientist & Power BI Developer with 4+ years building production dashboards, ML models, and ETL pipelines that drive measurable business outcomes.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Gilgit, Pakistan — Remote / Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:nisarahmad.py@gmail.com" className="link-underline">nisarahmad.py@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <span>+92 344 4601408</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            View my work
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink px-7 py-4 text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            Let's talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const tools = [
    "Power BI", "Tableau", "Python", "SQL", "DAX", "Looker Studio",
    "Plotly Dash", "Streamlit", "PostgreSQL", "BigQuery", "Pandas",
    "Scikit-learn", "TensorFlow", "ARIMA", "Random Forest", "K-Means",
  ];
  const list = [...tools, ...tools];

  return (
    <section className="border-y border-ink/10 py-8 overflow-hidden bg-ink text-paper">
      <div className="flex marquee-track whitespace-nowrap">
        {list.map((t, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-2xl md:text-3xl italic font-light">{t}</span>
            <span className="text-accent text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">— Impact at a glance</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-4 max-w-3xl">
            Numbers that <span className="italic">moved</span> the business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-paper p-8 md:p-12 group hover:bg-ink hover:text-paper transition-colors duration-500 cursor-default"
            >
              <div className="font-display text-5xl md:text-7xl font-light leading-none">
                <AnimatedCounter
                  end={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-6 text-sm text-muted group-hover:text-paper/70 transition-colors">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveDashboard() {
  return (
    <section className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-paper/50">— Live preview</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-4 max-w-3xl">
            A taste of what I <span className="italic">build</span>.
          </h2>
          <p className="text-paper/60 mt-4 max-w-xl">
            Interactive, production-grade dashboards. This is a sample with mock data — your data, your KPIs, your business questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10"
        >
          {/* Revenue Forecast */}
          <div className="md:col-span-2 bg-ink p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-xl">Revenue vs Forecast</h3>
              <span className="text-xs text-paper/50">YTD 2025</span>
            </div>
            <div className="text-3xl font-display tabular mb-1">
              $509K <span className="text-sm text-green-400">↑ 12.4%</span>
            </div>
            <div className="text-xs text-paper/50 mb-6">vs. previous period</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff5722" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#ff5722" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "12px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#ff5722"
                    strokeWidth={2}
                    fill="url(#rev)"
                  />
                  <Line type="monotone" dataKey="forecast" stroke="rgba(255,255,255,0.4)" strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Segmentation */}
          <div className="bg-ink p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-xl">Customer Segments</h3>
            </div>
            <div className="text-3xl font-display tabular mb-1">68 cohorts</div>
            <div className="text-xs text-paper/50 mb-6">K-Means clustering</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHURN_DATA} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis type="category" dataKey="segment" stroke="rgba(255,255,255,0.4)" fontSize={11} width={60} />
                  <Tooltip
                    contentStyle={{
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="value" fill="#ff5722" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* KPI cards */}
          {[
            { label: "Active Users", value: "52,481", change: "+8.2%", positive: true },
            { label: "Churn Rate", value: "3.4%", change: "-1.8%", positive: true },
            { label: "Avg. Revenue / User", value: "$142", change: "+5.1%", positive: true },
          ].map((kpi, i) => (
            <div key={i} className="bg-ink p-6 md:p-8">
              <div className="text-xs text-paper/50 uppercase tracking-wider mb-3">{kpi.label}</div>
              <div className="font-display text-3xl tabular">{kpi.value}</div>
              <div className={`text-sm mt-2 ${kpi.positive ? "text-green-400" : "text-red-400"}`}>
                {kpi.change} <span className="text-paper/40">last 30d</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">— Featured projects</span>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4">
              Selected <span className="italic">work</span>.
            </h2>
          </div>
          <p className="text-muted max-w-md">
            Projects built across fintech, consulting, and high-growth startups — each shipped to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white border border-ink/10 p-8 md:p-10 hover:border-ink transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-xs font-mono text-muted">0{i + 1} / 0{PROJECTS.length}</div>
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-ink group-hover:rotate-45 transition-all duration-300" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-medium mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">{p.description}</p>

                <div className="flex items-center gap-2 mb-6 text-sm">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="font-medium">{p.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 border border-ink/20 group-hover:border-ink/60 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">— Career timeline</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-4">
            Experience.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid md:grid-cols-12 gap-6 py-8 border-t border-ink/10 hover:bg-ink hover:text-paper transition-colors duration-500 -mx-4 px-4"
            >
              <div className="md:col-span-3">
                <div className="text-xs font-mono text-muted group-hover:text-paper/60 transition-colors">
                  {job.period}
                </div>
                <div className="text-xs text-muted mt-1 group-hover:text-paper/60 transition-colors">
                  {job.location}
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-1">
                  {job.company}
                </h3>
                <p className="text-muted mb-4 group-hover:text-paper/70 transition-colors">
                  {job.role}
                </p>
                <ul className="space-y-2 mb-4">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="text-sm flex gap-3 leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">→</span>
                      <span className="text-ink/80 group-hover:text-paper/80 transition-colors">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 border border-ink/20 group-hover:border-paper/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">— Technical toolkit</span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-4 max-w-3xl">
            The stack behind the <span className="italic">insights</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-paper p-8 group hover:bg-ink hover:text-paper transition-colors duration-500"
              >
                <Icon className="w-6 h-6 mb-6 text-accent" />
                <h3 className="font-display text-xl font-medium mb-4">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 border border-ink/20 group-hover:border-paper/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-24 md:py-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-paper/50">— Education & Certs</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4">
              Always <span className="italic">learning</span>.
            </h2>
          </div>

          <div className="md:col-span-7 space-y-10">
            <div>
              <h3 className="font-display text-2xl font-medium mb-1">Karakoram International University</h3>
              <p className="text-paper/60 text-sm">Bachelor of Science in Computer Science · May 2021 — May 2025</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium mb-1">National University of Sciences and Technology (NUST)</h3>
              <p className="text-paper/60 text-sm">Diploma in Artificial Intelligence · Jun 2023 — Sep 2024</p>
            </div>

            <div className="pt-8 border-t border-paper/10">
              <h4 className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-6">Certifications</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Python for Data Science, AI & Development — IBM",
                  "AI For Everyone — Andrew Ng (Coursera)",
                  "Introduction to Generative AI — Google Cloud",
                  "AI for Data Analysis",
                  "Foundations: Introduction to LangChain — Python",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-3 text-sm">
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-paper/80">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">— Let's work together</span>
          <h2 className="font-display text-5xl md:text-8xl font-light mt-6 leading-[0.95]">
            Got data?<br />
            <span className="italic">Let's make it talk.</span>
          </h2>
          <p className="text-muted mt-8 max-w-xl mx-auto leading-relaxed">
            Whether it's a Power BI dashboard, ML model, ETL pipeline, or you just need someone to make sense of a messy spreadsheet — I'd love to hear about it.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:nisarahmad.py@gmail.com"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-8 py-5 font-medium hover:bg-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              nisarahmad.py@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm">
            <a
              href="https://linkedin.com/in/nisarahmadpy5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 link-underline"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/iamnisarahmad1408-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 link-underline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="tel:+923444601408"
              className="flex items-center gap-2 link-underline"
            >
              <Phone className="w-4 h-4" />
              +92 344 4601408
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between flex-wrap gap-4 text-sm text-muted">
        <div>© {new Date().getFullYear()} Nisar Ahmad. Built with care.</div>
        <div className="font-mono text-xs">Gilgit, Pakistan · Open to remote worldwide</div>
      </div>
    </footer>
  );
}

// ==========================================
// PAGE
// ==========================================

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <LiveDashboard />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
