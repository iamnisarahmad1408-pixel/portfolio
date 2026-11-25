"use client";

import { motion } from "framer-motion";
import { WORKFLOW } from "@/lib/data";
import { ArrowIcon, Reveal, SectionLabel } from "./ui";

const PIPELINE = ["Claude", "MCP", "PBIP / TMDL", "VS Code", "Power BI"];

export default function Workflow() {
  return (
    // overflow-clip (not overflow-hidden) so the sticky intro still tracks the viewport
    <section id="workflow" className="py-24 md:py-32 bg-ink text-paper relative overflow-clip">
      <div className="absolute inset-0 opacity-[0.035] grid-bg-dark pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel tone="dark">How the work gets done</SectionLabel>
                <h2 className="font-display text-4xl md:text-6xl font-light mt-4 leading-[1.02]">
                  AI in the loop, <span className="italic">human in charge</span>.
                </h2>
                <p className="mt-6 text-paper/60 leading-relaxed">
                  I build BI the way it should be built in 2026: models stay under version control, Claude
                  writes and reviews DAX, SQL and Python through Model Context Protocol, and automated
                  pipelines deliver the reports. Every number still gets checked against source data.
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-8">
                <div className="border border-paper/12 p-4 md:p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40 mb-3">
                    The chain
                  </p>
                  <div className="font-mono text-[11px] leading-relaxed text-paper/75">
                    {PIPELINE.map((item, index) => (
                      <span key={item}>
                        <span className="text-paper">{item}</span>
                        {index < PIPELINE.length - 1 && <span className="mx-2 text-accent">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-6">
                <div className="flex items-start gap-3 border-l-2 border-accent pl-4">
                  <p className="text-sm text-paper/55 leading-relaxed">
                    <span className="text-paper">Why it matters:</span> dashboards ship in days instead of
                    weeks, model changes get reviewed like code, and documentation stays current because it is
                    generated alongside the measures.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <div className="relative border-l border-paper/12 ml-1">
              {WORKFLOW.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group relative pl-7 md:pl-10 pb-10 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-paper/30 ring-4 ring-ink group-hover:bg-accent transition-colors" />
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-accent">{step.step}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/25">
                      {step.tools[0]}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-[1.75rem] font-light">{step.title}</h3>
                  <p className="mt-2.5 text-sm text-paper/55 leading-relaxed max-w-xl">{step.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] px-2 py-1 border border-paper/15 text-paper/70 group-hover:border-paper/30 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-paper text-ink px-6 py-4 text-sm font-medium hover:bg-accent transition-colors"
              >
                Put this to work on your data
                <ArrowIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
