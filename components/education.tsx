"use client";

import { CERTIFICATIONS, EDUCATION } from "@/lib/data";
import { Reveal, SectionLabel } from "./ui";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel tone="dark">Education & certifications</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl font-light mt-4 leading-tight">
                Always <span className="italic">learning</span>.
              </h2>
              <p className="mt-6 text-paper/55 leading-relaxed max-w-sm">
                A computer science foundation, a formal AI diploma, and a steady stream of applied
                certificates in analytics, machine learning and generative AI.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {EDUCATION.map((item, index) => (
                <Reveal key={item.school} delay={index * 0.08}>
                  <div className="border border-paper/12 p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-medium">{item.school}</h3>
                        <p className="text-paper/60 text-sm mt-1">{item.degree}</p>
                        {item.note && <p className="text-paper/35 text-xs mt-1">{item.note}</p>}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/35 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-4">
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 text-sm py-1.5 border-b border-paper/10">
                    <span className="text-accent mt-0.5 shrink-0">✦</span>
                    <div>
                      <p className="text-paper/85 leading-snug">{cert.name}</p>
                      <p className="text-[11px] text-paper/35 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
