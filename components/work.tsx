"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "@/lib/data";
import { ArrowIcon, Reveal, SectionLabel } from "./ui";

function CaseCard({ study, index, onOpen }: { study: CaseStudy; index: number; onOpen: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group relative h-full"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative flex h-full w-full flex-col bg-white border border-ink/10 p-6 md:p-8 text-left hover:border-ink transition-colors duration-500 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        aria-label={`Read case study: ${study.title}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {study.sector}
              </span>
            </div>
            <ArrowIcon className="w-5 h-5 text-muted group-hover:text-ink group-hover:rotate-45 transition-all duration-300" />
          </div>

          <h3 className="font-display text-2xl md:text-[1.7rem] leading-snug font-medium mb-3">
            {study.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">{study.summary}</p>

          <div className="mt-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 border-t border-ink/10 pt-4 mb-5">
              {study.metrics.slice(0, 4).map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-lg leading-none tabular">{metric.value}</p>
                  <p className="mt-1 text-[10px] text-muted leading-tight">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {study.stack.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] px-2 py-1 border border-ink/15 bg-paper/40"
                >
                  {tool}
                </span>
              ))}
              {study.stack.length > 4 && (
                <span className="font-mono text-[10px] px-2 py-1 text-muted">+{study.stack.length - 4}</span>
              )}
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium underline-offset-4 group-hover:underline">
              Read the case study
              <ArrowIcon className="w-3 h-3" />
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[80] flex items-start md:items-center justify-center bg-ink/75 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={study.title}
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.99 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[100vh] md:max-h-[88vh] overflow-y-auto bg-paper text-ink"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-paper/95 backdrop-blur px-5 md:px-8 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{study.sector}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center border border-ink/15 hover:bg-ink hover:text-paper transition-colors"
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 md:px-8 py-7 md:py-9">
          <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">{study.title}</h3>
          <p className="mt-4 text-muted leading-relaxed">{study.summary}</p>

          <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="bg-paper p-4">
                <p className="font-display text-2xl leading-none tabular">{metric.value}</p>
                <p className="mt-1.5 text-[11px] text-muted leading-tight">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-7">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-2">The problem</h4>
              <p className="text-sm leading-relaxed text-ink/85">{study.problem}</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">What I built</h4>
              <ul className="space-y-2.5">
                {study.build.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-2">Outcome</h4>
              <p className="text-sm leading-relaxed text-ink/85">{study.outcome}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-ink/10 pt-6">
            {study.stack.map((tool) => (
              <span key={tool} className="font-mono text-[10px] px-2.5 py-1 border border-ink/20">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4">
              Case studies, not <span className="italic">screenshots</span>.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Six builds across development programmes, energy, real estate, sports and finance — with the
            problem, the build and the outcome written down.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {CASE_STUDIES.map((study, index) => (
            <CaseCard key={study.slug} study={study} index={index} onOpen={() => setOpenIndex(index)} />
          ))}
        </div>

        <AnimatePresence>
          {openIndex !== null && (
            <CaseModal study={CASE_STUDIES[openIndex]} onClose={() => setOpenIndex(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
