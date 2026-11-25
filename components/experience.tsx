"use client";

import { EXPERIENCE } from "@/lib/data";
import { Reveal, SectionLabel } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Career timeline</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4">
              Experience<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="text-sm text-muted max-w-sm">
            Four years across development programmes, consulting, energy and education — currently split
            between M&E at AKRSP and BI delivery at Calibreon.
          </p>
        </Reveal>

        <div>
          {EXPERIENCE.map((job, index) => (
            <ExperienceRow key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  job,
  index,
}: {
  job: (typeof EXPERIENCE)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <article className="group grid md:grid-cols-12 gap-4 md:gap-6 border-t border-ink/10 py-8 md:py-9 px-3 md:px-4 -mx-3 md:-mx-4 hover:bg-ink hover:text-paper transition-colors duration-500">
        <div className="md:col-span-3 flex md:flex-col items-start justify-between gap-2">
          <span className="font-mono text-[11px] text-muted group-hover:text-paper/55 transition-colors">
            {job.period}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted/80 group-hover:text-paper/40 transition-colors">
            {job.location}
          </span>
        </div>

        <div className="md:col-span-9">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="font-display text-2xl md:text-[1.7rem] font-medium leading-tight">{job.company}</h3>
            {job.current && (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] border border-accent/50 text-accent px-2 py-0.5 group-hover:border-accent transition-colors">
                Current
              </span>
            )}
          </div>
          <p className="text-sm text-muted group-hover:text-paper/65 transition-colors mb-4">{job.role}</p>

          <ul className="space-y-2 mb-5">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-accent mt-1 shrink-0">→</span>
                <span className="text-ink/80 group-hover:text-paper/80 transition-colors">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-1 border border-ink/15 group-hover:border-paper/25 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
