"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeUp } from "@/lib/motion";

const CATEGORIES = [
  { id: "bug",     label: "Bug Report",       icon: "🐛", color: "#F85149", desc: "Something is broken or not working as expected" },
  { id: "feature", label: "Feature Request",  icon: "💡", color: "#3FB950", desc: "An idea or improvement you'd like to see" },
  { id: "docs",    label: "Docs Feedback",    icon: "📄", color: "#39C5CF", desc: "Missing info, confusing wording, or errors in the docs" },
  { id: "general", label: "General Feedback", icon: "💬", color: "#BC8CFF", desc: "Anything else — thoughts, praise, suggestions" },
];

const LINKS = [
  { label: "GitHub Discussions", url: "https://github.com/Srujan-Amaragatti05/project-brain/discussions", icon: "💬", desc: "Ask questions and share ideas" },
  { label: "Bug Reports",        url: "https://github.com/Srujan-Amaragatti05/project-brain/issues/new?template=bug_report.yml",  icon: "🐛", desc: "File a bug with the template" },
  { label: "Feature Requests",   url: "https://github.com/Srujan-Amaragatti05/project-brain/issues/new?template=feature_request.yml", icon: "🚀", desc: "Propose a new feature" },
  { label: "All Issues",         url: "https://github.com/Srujan-Amaragatti05/project-brain/issues", icon: "📋", desc: "Browse open issues" },
];

export default function FeedbackPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedCat = CATEGORIES.find((c) => c.id === selected);

  const githubUrl = selected === "bug"
    ? "https://github.com/Srujan-Amaragatti05/project-brain/issues/new?template=bug_report.yml"
    : selected === "feature"
    ? "https://github.com/Srujan-Amaragatti05/project-brain/issues/new?template=feature_request.yml"
    : "https://github.com/Srujan-Amaragatti05/project-brain/discussions/new";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fadeUp} className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#3FB950]">
            Feedback
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#E6EDF3] md:text-5xl">
            Help us improve
            <br />
            <span className="gradient-text-green-cyan">project-brain</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#B6C2CF]">
            All feedback goes directly to GitHub — the project is 100% open source and community-driven.
            Pick a category and we&apos;ll route you to the right place.
          </p>
        </motion.div>

        {/* Category picker */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
          <p className="mb-4 text-sm font-medium text-[#7D8590]">What kind of feedback?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelected(cat.id); setSubmitted(false); }}
                className={`rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-[2px] ${
                  selected === cat.id
                    ? "border-[var(--accent-green)] bg-[#0d1a0f] shadow-[0_0_20px_rgba(63,185,80,0.1)]"
                    : "border-[#202938] bg-[#11161D] hover:border-[#30363D]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-[#E6EDF3]">{cat.label}</p>
                    <p className="text-xs text-[#7D8590] mt-0.5">{cat.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA after selection */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-2xl border border-[#202938] bg-[#11161D] p-8 text-center"
            >
              <span className="text-4xl">{selectedCat?.icon}</span>
              <h2 className="mt-3 text-xl font-semibold text-[#E6EDF3]">{selectedCat?.label}</h2>
              <p className="mt-2 text-sm text-[#7D8590]">
                {selected === "bug"
                  ? "Open a pre-filled bug report on GitHub Issues."
                  : selected === "feature"
                  ? "Open a feature request on GitHub Issues."
                  : selected === "docs"
                  ? "Start a discussion in the Docs category on GitHub."
                  : "Share your thoughts in GitHub Discussions."}
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setSubmitted(true)}
                className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[#3FB950] bg-[#3FB950]/10 px-6 py-3 text-sm font-medium text-[#3FB950] transition-all hover:-translate-y-[2px] hover:bg-[#3FB950]/20"
                style={{ borderColor: selectedCat?.color, color: selectedCat?.color }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Continue on GitHub
              </a>
              {submitted && (
                <p className="mt-3 text-xs text-[#3FB950]">✓ Opening GitHub in a new tab…</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* All links */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-14">
          <p className="mb-5 text-sm font-medium text-[#7D8590]">Or go directly to:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {LINKS.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#202938] bg-[#11161D] p-4 transition-all hover:border-[#30363D] hover:bg-[#161B22] hover:-translate-y-[2px] group">
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-[#E6EDF3] group-hover:text-[#3FB950] transition-colors">{link.label}</p>
                  <p className="text-xs text-[#7D8590]">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CLI tip */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-[#202938] bg-[#11161D] p-6">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#7D8590]">From the CLI</p>
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-[#3FB950]">$</span>
            <span className="text-[#E6EDF3]">brain --feedback</span>
            <span className="text-[#7D8590]"># opens GitHub Discussions in browser</span>
          </div>
          <div className="mt-2 flex items-center gap-3 font-mono text-sm">
            <span className="text-[#3FB950]">$</span>
            <span className="text-[#E6EDF3]">brain community</span>
            <span className="text-[#7D8590]"># show all community links</span>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
