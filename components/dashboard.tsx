"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SectionLabel } from "./ui";

type Tab = "executive" | "operations" | "forecast";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const REVENUE = [42, 48, 55, 51, 67, 73, 82, 91, 88, 96, 104, 113];
const FORECAST = [40, 46, 53, 58, 64, 71, 79, 88, 92, 95, 101, 109];
const RECORDS = [148, 162, 171, 158, 186, 194, 203, 211, 198, 217, 224, 231];

const EXEC_KPIS = [
  { label: "Revenue YTD", value: "$910K", delta: "+12.4%", positive: true },
  { label: "Enrollments", value: "2,418", delta: "+6.1%", positive: true },
  { label: "Payroll % of revenue", value: "28.4%", delta: "-1.2 pts", positive: true },
  { label: "Occupancy", value: "76%", delta: "+3.0 pts", positive: true },
];

const OPS_KPIS = [
  { label: "Records / week", value: "200K+", delta: "99.5% integrity", positive: true },
  { label: "Pipelines running", value: "6", delta: "ETL + reporting", positive: true },
  { label: "Manual hours saved", value: "10+/wk", delta: "automated", positive: true },
  { label: "Data-quality flags", value: "0.5%", delta: "reviewed", positive: true },
];

const FORECAST_KPIS = [
  { label: "MAPE", value: "8%", delta: "backtested", positive: true },
  { label: "Model", value: "ARIMA + RF", delta: "ensemble", positive: true },
  { label: "Horizon", value: "6 months", delta: "monthly grain", positive: true },
  { label: "Business units", value: "2", delta: "quarterly planning", positive: true },
];

const TABS: { id: Tab; label: string; heading: string; note: string }[] = [
  {
    id: "executive",
    label: "Executive",
    heading: "Revenue vs forecast",
    note: "Multi-location performance · monthly",
  },
  {
    id: "operations",
    label: "Operations",
    heading: "Pipeline throughput",
    note: "Records processed · monthly, thousands",
  },
  {
    id: "forecast",
    label: "Forecast",
    heading: "Actual vs predicted",
    note: "ARIMA + Random Forest · monthly revenue index",
  },
];

const RANGES = [
  { id: "3m", label: "3M", months: 3 },
  { id: "6m", label: "6M", months: 6 },
  { id: "ytd", label: "YTD", months: 12 },
];

const tooltipStyle = {
  background: "#0a0a0a",
  border: "1px solid rgba(250,250,247,0.15)",
  borderRadius: 0,
  fontSize: "12px",
  color: "#fafaf7",
  padding: "8px 10px",
};

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>("executive");
  const [range, setRange] = useState("ytd");

  const months = RANGES.find((r) => r.id === range)?.months ?? 12;

  const data = useMemo(() => {
    return MONTHS.slice(0, months).map((month, i) => ({
      month,
      revenue: REVENUE[i],
      forecast: FORECAST[i],
      records: RECORDS[i],
    }));
  }, [months]);

  const activeTab = TABS.find((t) => t.id === tab)!;
  const kpis = tab === "executive" ? EXEC_KPIS : tab === "operations" ? OPS_KPIS : FORECAST_KPIS;

  return (
    <section id="dashboard" className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] grid-bg-dark pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-7">
            <SectionLabel tone="dark">Live preview</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4">
              A taste of what I <span className="italic">build</span>.
            </h2>
          </div>
          <p className="md:col-span-5 text-paper/55 leading-relaxed">
            Interactive dashboards with real interaction patterns — filter, drill, compare. Sample data,
            but the same structure I use for production models: KPIs, trends, forecasts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="border border-paper/12 bg-[#0d0d0c]"
        >
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 px-3 sm:px-4 md:px-6 py-3">
            <div className="flex w-full items-center gap-1 sm:w-auto">
              <span className="mr-3 hidden items-center gap-1.5 sm:flex" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-paper/20" />
                <span className="h-2 w-2 rounded-full bg-paper/20" />
                <span className="h-2 w-2 rounded-full bg-paper/20" />
              </span>
              <div className="grid w-full grid-cols-3 gap-1 sm:flex sm:w-auto sm:flex-wrap" role="tablist" aria-label="Dashboard view">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={`px-2 py-1.5 text-center text-[10px] font-mono uppercase tracking-[0.1em] transition-colors sm:px-3 sm:text-xs sm:tracking-[0.12em] ${
                      tab === t.id ? "bg-paper text-ink" : "text-paper/50 hover:text-paper"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
                Mock data
              </span>
              <div className="flex border border-paper/15">
                {RANGES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRange(r.id)}
                    aria-pressed={range === r.id}
                    className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
                      range === r.id ? "bg-accent text-ink" : "text-paper/50 hover:text-paper"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3">
            {/* Chart */}
            <div className="lg:col-span-2 p-5 md:p-7 border-b lg:border-b-0 lg:border-r border-paper/10">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-display text-xl md:text-2xl">{activeTab.heading}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
                  {tab === "executive" ? "$K" : tab === "operations" ? "records" : "index"}
                </span>
              </div>
              <p className="text-xs text-paper/40 mb-5">{activeTab.note}</p>

              <div className="h-[280px] md:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  {tab === "executive" ? (
                    <AreaChart data={data} margin={{ left: -18, right: 6, top: 4 }}>
                      <defs>
                        <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff5722" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="#ff5722" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(250,250,247,0.07)" />
                      <XAxis dataKey="month" stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "rgba(250,250,247,0.2)" }} />
                      <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#ff5722" strokeWidth={2} fill="url(#revFill)" />
                      <Line type="monotone" dataKey="forecast" name="Forecast" stroke="rgba(250,250,247,0.45)" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
                    </AreaChart>
                  ) : tab === "operations" ? (
                    <BarChart data={data} margin={{ left: -18, right: 6, top: 4 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(250,250,247,0.07)" />
                      <XAxis dataKey="month" stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(250,250,247,0.05)" }} />
                      <Bar dataKey="records" name="Records (K)" fill="#ff5722" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  ) : (
                    <LineChart data={data} margin={{ left: -18, right: 6, top: 4 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(250,250,247,0.07)" />
                      <XAxis dataKey="month" stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(250,250,247,0.35)" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Line type="monotone" dataKey="revenue" name="Actual" stroke="#fafaf7" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="forecast" name="Predicted" stroke="#ff5722" strokeWidth={2} strokeDasharray="5 4" dot={false} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-[11px] font-mono uppercase tracking-[0.12em] text-paper/40">
                <span className="inline-flex items-center gap-2">
                  <span className="h-0.5 w-4 bg-accent" /> {tab === "forecast" ? "Predicted" : "Actual"}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-0.5 w-4 bg-paper/40" /> Forecast
                </span>
                <span className="ml-auto normal-case tracking-normal text-paper/30">
                  Illustrative sample data
                </span>
              </div>
            </div>

            {/* KPI panel */}
            <div className="p-5 md:p-7 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
                  Key metrics
                </span>
                <span className="font-mono text-[10px] text-paper/30">{activeTab.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-paper/10">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="min-w-0 bg-[#0d0d0c] p-4">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-paper/40 leading-snug min-h-[2.2em]">
                      {kpi.label}
                    </p>
                    <p
                      className={`mt-2 font-display tabular break-words ${
                        kpi.value.length > 6 ? "text-base md:text-xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {kpi.value}
                    </p>
                    <p className={`mt-1 font-mono text-[10px] ${kpi.positive ? "text-green-400" : "text-red-400"}`}>
                      {kpi.delta}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="border border-paper/12 p-4">
                  <p className="text-xs text-paper/55 leading-relaxed">
                    {tab === "executive"
                      ? "Built on a star schema with custom DAX measures, validated against the client's own reports before publishing to Power BI Service."
                      : tab === "operations"
                      ? "Python and SQL pipelines with validation rules, scheduled refresh and automated delivery through Power Automate."
                      : "Hybrid ARIMA + Random Forest model, backtested to 8% MAPE and embedded straight into the planning dashboard."}
                  </p>
                  <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-[11px] text-accent hover:underline">
                    Want this on your data? →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
