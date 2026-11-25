"use client";

import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { ArrowIcon, Reveal, SectionLabel } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <Reveal className="text-center">
          <SectionLabel>Let&apos;s work together</SectionLabel>
          <h2 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] font-light mt-5 leading-[0.95]">
            Got data?
            <br />
            <span className="italic">Let&apos;s make it talk.</span>
          </h2>
          <p className="text-muted mt-7 max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a Power BI dashboard, an M&E data system, an ML model or a pipeline that
            replaces a weekly spreadsheet ritual — tell me what decision you&apos;re trying to make.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}?subject=Project%20enquiry`}
              className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              {PROFILE.email}
              <ArrowIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-ink/25 px-5 py-4 text-sm font-medium hover:border-ink transition-colors"
              aria-live="polite"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 border border-ink/25 px-5 py-4 text-sm font-medium hover:border-ink transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {[
              {
                icon: MapPin,
                label: "Based in",
                value: PROFILE.location,
                note: PROFILE.locationNote,
              },
              {
                icon: Phone,
                label: "Call or WhatsApp",
                value: PROFILE.phone,
                href: PROFILE.phoneHref,
                note: "Mon–Sat, PKT",
              },
              {
                icon: Linkedin,
                label: "Find me online",
                value: "LinkedIn & GitHub",
                href: PROFILE.linkedin,
                note: "Code, dashboards, notes",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="w-4 h-4 text-accent mb-3" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{item.label}</p>
                  <p className="mt-1.5 text-sm font-medium">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.note}</p>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-paper p-6 hover:bg-white transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="bg-paper p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 link-underline"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 link-underline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href={PROFILE.phoneHref} className="inline-flex items-center gap-2 link-underline">
              <Phone className="w-4 h-4" />
              {PROFILE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
