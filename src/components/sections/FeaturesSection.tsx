"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Database,
  DownloadCloud,
  GitCompare,
  Network,
  TerminalSquare,
} from "lucide-react";

import { fadeUp } from "@/lib/motion";

const FEATURES = [
  {
    title: "AST Analysis",
    description:
      "Deep semantic understanding of your codebase using precise Abstract Syntax Trees. Parses Python, TypeScript, JavaScript, and more.",
    icon: Network,
    accent: "var(--accent-green)",
    glow: "rgba(63, 185, 80, 0.12)",
  },
  {
    title: "Semantic Diffing",
    description:
      "Understand what actually changed logically, ignoring whitespace and formatting noise. See intent, not lines.",
    icon: GitCompare,
    accent: "var(--accent-cyan)",
    glow: "rgba(57, 197, 207, 0.12)",
  },
  {
    title: "Export Engine",
    description:
      "Pack your entire repository into LLM-optimized formats instantly. Markdown, JSON, or custom schemas — ready for any model.",
    icon: DownloadCloud,
    accent: "var(--accent-blue)",
    glow: "rgba(88, 166, 255, 0.12)",
  },
  {
    title: "Explain Engine",
    description:
      "Generate intelligent, context-aware explanations for complex legacy modules. Powered by local semantic graphs.",
    icon: TerminalSquare,
    accent: "var(--accent-green)",
    glow: "rgba(63, 185, 80, 0.12)",
  },
  {
    title: "Diagnostics",
    description:
      "Catch structural anomalies and architectural decay before they hit production. Circular deps, layer violations, and more.",
    icon: Activity,
    accent: "var(--accent-cyan)",
    glow: "rgba(57, 197, 207, 0.12)",
  },
  {
    title: "Local-first Workflows",
    description:
      "Zero telemetry. All intelligence and processing runs securely on your local machine. No cloud, no data leaks.",
    icon: Database,
    accent: "var(--accent-blue)",
    glow: "rgba(88, 166, 255, 0.12)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div {...fadeUp} className="mb-16 max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#3FB950]">
          Capabilities
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need.
          <br />
          <span className="text-[#7D8590]">Nothing you don&apos;t.</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[#11161D] p-6 transition-all duration-300 hover:border-[#30363D]"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              whileHover={{
                boxShadow: `0 8px 32px ${feature.glow}`,
                y: -2,
              }}
            >
              {/* Subtle top accent line */}
              <div
                className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
                }}
              />

              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[#161B22] transition-colors duration-300 group-hover:border-opacity-60"
                style={{
                  boxShadow: `0 0 12px ${feature.glow}`,
                }}
              >
                <Icon size={18} style={{ color: feature.accent }} />
              </div>

              <div>
                <h3 className="font-mono text-sm font-medium text-[#E6EDF3]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#7D8590]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
