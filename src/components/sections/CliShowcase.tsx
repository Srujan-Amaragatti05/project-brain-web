"use client";

import { motion } from "framer-motion";

import TerminalCard from "@/components/terminal/TerminalCard";
import { fadeUp } from "@/lib/motion";

// All commands taken directly from README
const COMMANDS = [
  {
    title: "brain project init",
    description: "Initialize project-brain in a repository",
    lines: [
      { type: "command" as const, content: "pip install project-brain-cli" },
      { type: "success" as const, content: "✓ project-brain installed" },
      { type: "command" as const, content: "brain project init" },
      { type: "success" as const, content: "✓ Created .brain/" },
      { type: "success" as const, content: "✓ Created .brain/cache/" },
      { type: "success" as const, content: "✓ Created .brain/data.json" },
      { type: "success" as const, content: "✓ Created brain.yaml" },
    ],
  },
  {
    title: "brain project analyze",
    description: "Recursive scan — AST parsing, metadata extraction",
    lines: [
      { type: "command" as const, content: "brain project analyze ." },
      { type: "output" as const, content: "🔍 Analyzing: ." },
      { type: "output" as const, content: "" },
      { type: "output" as const, content: "📋 File Paths:" },
      { type: "output" as const, content: "   src/api.py" },
      { type: "output" as const, content: "   src/utils.py" },
      { type: "output" as const, content: "" },
      { type: "success" as const, content: "✅ Analysis complete → .brain/data.json" },
    ],
  },
  {
    title: "brain diff show",
    description: "Inspect Git changes at function level (HEAD~1 → HEAD)",
    lines: [
      { type: "command" as const, content: "brain diff show" },
      { type: "output" as const, content: "Files Changed: 2" },
      { type: "output" as const, content: "" },
      { type: "output" as const, content: "Modified:  src/api.py" },
      { type: "output" as const, content: "Added:     src/utils.py" },
      { type: "output" as const, content: "" },
      { type: "output" as const, content: "Functions Modified:" },
      { type: "output" as const, content: "  • create_user" },
      { type: "output" as const, content: "Functions Added:" },
      { type: "output" as const, content: "  • validate_user" },
    ],
  },
  {
    title: "brain export full_code",
    description: "Pack entire repo into AI-friendly context",
    lines: [
      { type: "command" as const, content: "brain export full_code" },
      { type: "output" as const, content: "Scanning repository..." },
      { type: "output" as const, content: "Respecting ignore rules and file size limits..." },
      { type: "success" as const, content: "✓ Exported → .brain/exports/full_code.txt" },
      { type: "output" as const, content: "" },
      { type: "command" as const, content: "brain export code_changes HEAD~3 HEAD" },
      { type: "success" as const, content: "✓ Exported → .brain/exports/code_changes.txt" },
    ],
  },
];

export default function CliShowcase() {
  return (
    <section id="cli" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div {...fadeUp} className="mb-16 max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#3FB950]">
          CLI
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Designed for your terminal.
          <br />
          <span className="text-[#7D8590]">Fast, intuitive, and pipeable.</span>
        </h2>
        <p className="mt-4 text-base leading-8 text-[#B6C2CF]">
          A clean, composable CLI — both{" "}
          <code className="font-mono text-sm text-[#E6EDF3]">brain</code> and{" "}
          <code className="font-mono text-sm text-[#E6EDF3]">project-brain</code>{" "}
          aliases work.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {COMMANDS.map((cmd, i) => (
          <motion.div
            key={cmd.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm font-medium text-[#E6EDF3]">
                {cmd.title}
              </span>
              <span className="text-xs text-[#7D8590]">—</span>
              <span className="text-xs text-[#7D8590]">{cmd.description}</span>
            </div>
            <TerminalCard title={cmd.title} lines={cmd.lines} />
          </motion.div>
        ))}
      </div>

      {/* Quick-start install callout */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.25 }}
        className="mt-12 rounded-2xl border border-[#202938] bg-[#11161D] p-8"
      >
        <p className="mb-5 font-mono text-xs font-medium uppercase tracking-widest text-[#7D8590]">
          30-second quick start
        </p>
        <div className="flex flex-col gap-2 font-mono text-sm">
          {[
            { prompt: "$", cmd: "pip install project-brain-cli",  color: "#E6EDF3" },
            { prompt: "$", cmd: "brain project init",             color: "#3FB950" },
            { prompt: "$", cmd: "brain project analyze .",        color: "#3FB950" },
            { prompt: "$", cmd: "brain diff show",                color: "#39C5CF" },
            { prompt: "$", cmd: "brain export full_code",         color: "#39C5CF" },
          ].map((step) => (
            <div key={step.cmd} className="flex items-start gap-3">
              <span className="select-none text-[#3FB950]">{step.prompt}</span>
              <span style={{ color: step.color }}>{step.cmd}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-[#7D8590]">
          Requires Python 3.10+ and Git.
          <a
            href="https://github.com/Srujan-Amaragatti05/project-brain"
            target="_blank"
            rel="noreferrer"
            className="text-[#58A6FF] underline underline-offset-4 transition-colors hover:text-[#79B8FF]"
          >
            View full documentation on GitHub →
          </a>
        </p>
      </motion.div>
    </section>
  );
}
