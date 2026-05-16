"use client";

import { motion } from "framer-motion";
import { GitMerge, FolderTree, Cpu, ShieldCheck } from "lucide-react";

import { fadeUp } from "@/lib/motion";

const REASONS = [
  {
    title: "Git diffs are noisy",
    description:
      "Traditional diffs show line changes, not semantic meaning. A small refactor can generate large diffs while hiding the actual behavioral impact.",
    icon: GitMerge,
    accent: "#3FB950",
  },
  {
    title: "Codebases become difficult to understand",
    description:
      "Large repositories contain deeply nested modules, duplicated logic, and hidden dependencies. Understanding them manually is slow and error-prone.",
    icon: FolderTree,
    accent: "#39C5CF",
  },
  {
    title: "AI tools require structured context",
    description:
      "Most AI systems perform poorly when fed raw repositories. project-brain creates AI-friendly context and function-level intelligence to maximize output quality.",
    icon: Cpu,
    accent: "#58A6FF",
  },
  {
    title: "Local-first tooling matters",
    description:
      "Many developers do not want automatic code uploads or vendor lock-in. project-brain works fully offline with no cloud dependency — your code stays yours.",
    icon: ShieldCheck,
    accent: "#BC8CFF",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div {...fadeUp} className="mb-16 max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#39C5CF]">
          Motivation
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Why project-brain exists.
          <br />
          <span className="text-[#7D8590]">Fixing modern development workflows.</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {REASONS.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#30363D] bg-[#11161D] p-6 transition-all duration-300"
              whileHover={{
                borderColor: reason.accent + "40",
                y: -2,
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute bottom-0 left-0 top-0 w-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: reason.accent }}
              />

              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#30363D] bg-[#161B22] transition-colors duration-300"
                style={{
                  boxShadow: `0 0 12px ${reason.accent}20`,
                }}
              >
                <Icon size={18} style={{ color: reason.accent }} />
              </div>

              <div>
                <h3 className="font-mono text-sm font-medium text-[#E6EDF3]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#7D8590]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
