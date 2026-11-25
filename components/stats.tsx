"use client";

import { MARQUEE_TOOLS, STATS } from "@/lib/data";
import { Counter, Reveal, SectionLabel } from "./ui";

export function Marquee() {
  const list = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS];
  return (
    <section className="border-y border-ink/10 py-6 overflow-hidden bg-ink text-paper" aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap hover:[animation-play-state:paused]">
        {list.map((tool, i) => (
          <div key={`${tool}-${i}`} className="flex items-center gap-10 px-5">
            <span className="font-display text-xl md:text-2xl italic font-light">{tool}</span>
            <span className="text-accent text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="py-24 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14">
          <SectionLabel>Impact at a glance</SectionLabel>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-light max-w-2xl">
              Numbers that <span className="italic">moved</span> the business.
            </h2>
            <p className="text-sm text-muted max-w-xs">
              Every figure below comes from a shipped dashboard, pipeline or model — not a pilot.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group h-full bg-paper p-6 md:p-9 hover:bg-ink hover:text-paper transition-colors duration-500">
                <div className="font-display text-5xl md:text-6xl font-light leading-none">
                  <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="mt-5 text-sm font-medium leading-snug">{stat.label}</p>
                <p className="mt-2 text-xs text-muted group-hover:text-paper/55 transition-colors leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
