"use client";

import { BarChart3, Brain, Code2, Database, Sparkles, TrendingUp } from "lucide-react";
import { DOMAINS, LANGUAGES, SKILL_GROUPS } from "@/lib/data";
import { Reveal, SectionLabel } from "./ui";

const ICONS = {
  chart: BarChart3,
  spark: Sparkles,
  code: Code2,
  database: Database,
  brain: Brain,
  trend: TrendingUp,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-ink/10 bg-[#f3f2ec]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Technical toolkit</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4 max-w-2xl">
              The stack behind the <span className="italic">insights</span>.
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Deep in Power BI and SQL, fluent in Python, and deliberately early on AI tooling that actually
            holds up in production.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = ICONS[group.icon as keyof typeof ICONS] ?? BarChart3;
            return (
              <Reveal key={group.category} delay={index * 0.05}>
                <div className="group h-full bg-white border border-ink/10 p-6 md:p-7 hover:bg-ink hover:text-paper transition-colors duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="font-mono text-[10px] text-muted group-hover:text-paper/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] px-2 py-1 border border-ink/15 group-hover:border-paper/25 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid md:grid-cols-12 gap-8 border-t border-ink/10 pt-8">
            <div className="md:col-span-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
                Domains I&apos;ve worked in
              </h3>
              <div className="flex flex-wrap gap-2">
                {DOMAINS.map((domain) => (
                  <span key={domain} className="text-xs px-3 py-1.5 bg-white border border-ink/10">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-4">Languages</h3>
              <ul className="space-y-2">
                {LANGUAGES.map((item) => (
                  <li key={item.language} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium">{item.language}</span>
                    <span className="text-xs text-muted text-right">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
