import { PROFILE } from "@/lib/data";
import { ArrowIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg">
              Nisar Ahmad<span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-xs text-muted">
              Data analyst & BI developer · {PROFILE.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <a href="#work" className="link-underline hover:text-ink">
              Work
            </a>
            <a href="#workflow" className="link-underline hover:text-ink">
              AI workflow
            </a>
            <a href="#experience" className="link-underline hover:text-ink">
              Experience
            </a>
            <a href="#skills" className="link-underline hover:text-ink">
              Skills
            </a>
            <a href={PROFILE.resume} download className="link-underline hover:text-ink">
              CV
            </a>
            <a href="#contact" className="link-underline hover:text-ink">
              Contact
            </a>
          </nav>

          <a href="#top" className="inline-flex items-center gap-2 text-xs text-muted hover:text-ink transition-colors">
            Back to top
            <ArrowIcon className="w-3.5 h-3.5 -rotate-45" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-6 text-[11px] text-muted">
          <p>© {new Date().getFullYear()} Nisar Ahmad. Built with Next.js, Tailwind CSS and Power BI habits.</p>
          <p className="font-mono uppercase tracking-[0.12em]">Last updated · November 2026</p>
        </div>
      </div>
    </footer>
  );
}
