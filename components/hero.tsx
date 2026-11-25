"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { HERO_SNAPSHOT, HERO_TAGS, PROFILE } from "@/lib/data";
import { ArrowIcon, Sparkline } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden grid-bg">
      <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl blob" />
      <div className="absolute bottom-0 -right-32 w-[26rem] h-[26rem] bg-sky-500/10 rounded-full blur-3xl blob" style={{ animationDelay: "6s" }} />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 md:px-10 w-full relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted mb-7"
            >
              <span className="inline-flex items-center gap-2 border border-ink/15 bg-paper/70 backdrop-blur px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {PROFILE.availability}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                {PROFILE.role}
                <span className="hidden sm:inline"> · {PROFILE.specialty}</span>
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.6rem,7.2vw,6.5rem)] leading-[0.94] tracking-tight font-light">
              <motion.span
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                {PROFILE.headline[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="block italic font-normal"
              >
                <span className="relative inline-block">
                  decision-ready
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 600 20" fill="none" preserveAspectRatio="none">
                    <motion.path
                      d="M5,15 Q150,5 300,12 T595,8"
                      stroke="#ff5722"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.4, delay: 1.1, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
                <span className="text-accent">.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 max-w-xl text-lg text-muted leading-relaxed"
            >
              {PROFILE.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-3 max-w-xl text-sm text-muted/90 leading-relaxed"
            >
              {PROFILE.introSecondary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-4 text-sm font-medium hover:bg-accent transition-colors duration-300"
              >
                See the case studies
                <ArrowIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href={PROFILE.resume}
                download
                className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="#contact" className="link-underline py-2 text-center text-sm font-medium sm:ml-1 sm:py-0 sm:text-left">
                Start a project
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="mt-9 flex flex-col gap-2.5 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
            >
              <span className="inline-flex items-start gap-2 sm:items-center">
                <MapPin className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent sm:mt-0" />
                <span>
                  {PROFILE.location} <span className="text-muted/50">·</span> {PROFILE.locationNote}
                </span>
              </span>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 link-underline">
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                {PROFILE.email}
              </a>
              <a href={PROFILE.phoneHref} className="inline-flex items-center gap-2 link-underline">
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                {PROFILE.phone}
              </a>
            </motion.div>
          </div>

          {/* Right — snapshot card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-ink text-paper border border-ink p-6 md:p-7 shadow-[0_30px_60px_-30px_rgba(10,10,10,0.45)]">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {HERO_SNAPSHOT.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
                  {HERO_SNAPSHOT.note}
                </span>
              </div>

              <div className="mb-1 flex items-baseline justify-between">
                <span className="font-display text-4xl tabular">$509K</span>
                <span className="font-mono text-xs text-green-400">↑ 12.4%</span>
              </div>
              <p className="text-xs text-paper/45 mb-4">Revenue tracked year to date</p>

              <Sparkline data={HERO_SNAPSHOT.spark} className="w-full h-20" />

              <div className="mt-6 divide-y divide-paper/10 border-t border-paper/10">
                {HERO_SNAPSHOT.kpis.map((kpi) => (
                  <div key={kpi.label} className="flex items-center justify-between py-3">
                    <span className="text-xs text-paper/55">{kpi.label}</span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-lg tabular">{kpi.value}</span>
                      <span className={`font-mono text-[10px] ${kpi.positive ? "text-green-400" : "text-red-400"}`}>
                        {kpi.delta}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
                  Power BI · DAX · BigQuery
                </span>
                <a href="#dashboard" className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline">
                  Explore live demo <ArrowIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border border-ink/15 bg-paper px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Results that stick
              </p>
              <p className="text-sm">
                <span className="font-display text-xl">35%</span>{" "}
                <span className="text-muted">faster executive reviews</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-muted"
        >
          <span className="h-8 w-px bg-ink/20" />
          <span className="max-w-xl truncate">{HERO_TAGS.join("  ✦  ")}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
