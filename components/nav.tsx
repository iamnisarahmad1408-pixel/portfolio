"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";
import { ArrowIcon } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      (el): el is Element => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
      />

      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-xl border-b border-ink/10 py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-display text-xl font-medium tracking-tight">
              Nisar<span className="text-accent">.</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.18em] text-muted group-hover:text-ink transition-colors">
              Data / BI
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`link-underline transition-colors ${
                  active === item.href ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resume}
              download
              className="hidden sm:inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-sm font-medium hover:border-ink transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              Let&apos;s talk
              <ArrowIcon className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-ink/20"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-ink text-paper md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl">
                Nisar<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-paper/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="px-6 pt-6">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index + 0.1 }}
                  className="flex items-center justify-between border-b border-paper/10 py-5 font-display text-3xl font-light"
                >
                  {item.label}
                  <ArrowIcon className="w-5 h-5 text-accent" />
                </motion.a>
              ))}
              <motion.a
                href={PROFILE.resume}
                download
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 bg-accent text-ink px-6 py-4 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </nav>
            <div className="absolute bottom-8 left-6 right-6 space-y-1 text-sm text-paper/50">
              <p>{PROFILE.email}</p>
              <p>{PROFILE.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
