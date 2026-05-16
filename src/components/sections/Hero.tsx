"use client";

import { motion } from "framer-motion";

import TerminalCard from "@/components/terminal/TerminalCard";
import { fadeUp } from "@/lib/motion";

const GITHUB_URL =
  "https://github.com/Srujan-Amaragatti05/project-brain";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid + radial glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-100" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(57,197,207,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:items-center lg:py-36">
        {/* Left — copy */}
        <motion.div {...fadeUp}>
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#202938] bg-[#11161D] px-4 py-1.5 text-xs text-[#7D8590]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3FB950] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3FB950]" />
            </span>
            <span className="font-mono">developer infrastructure tooling</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Semantic
            <br />
            intelligence
            <br />
            <span className="gradient-text-green-cyan">for real codebases.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-6 max-w-lg text-base leading-8 text-[#B6C2CF] md:text-lg">
            AST-aware analysis, semantic Git diffing, and AI-friendly export —
            all running locally with zero telemetry.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-[#3FB950] bg-[#3FB950]/10 px-5 py-3 text-sm font-medium text-[#3FB950] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#3FB950]/20 hover:shadow-[0_0_20px_rgba(63,185,80,0.25)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              View on GitHub
            </a>

            <a
              href="#cli"
              className="inline-flex items-center gap-2 rounded-xl border border-[#202938] bg-[#11161D] px-5 py-3 text-sm font-medium text-[#B6C2CF] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#30363D] hover:text-[#E6EDF3]"
            >
              <span className="font-mono text-[#7D8590]">$</span>
              pip install project-brain-cli
            </a>
          </div>
        </motion.div>

        {/* Right — terminal: real 30-second quick start */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative"
        >
          {/* Glow behind terminal */}
          <div
            className="pointer-events-none absolute -inset-8 rounded-3xl opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(57,197,207,0.25) 0%, transparent 70%)",
            }}
          />
          <TerminalCard
            title="project-brain — quick start"
            lines={[
              {
                type: "command",
                content: "brain project init",
              },
              {
                type: "success",
                content: "✓ Created .brain/",
              },
              {
                type: "success",
                content: "✓ Created brain.yaml",
              },
              {
                type: "command",
                content: "brain project analyze .",
              },
              {
                type: "output",
                content: "Scanning repository...",
              },
              {
                type: "success",
                content: "✓ AST parsed — stored in .brain/data.json",
              },
              {
                type: "command",
                content: "brain diff show",
              },
              {
                type: "output",
                content: "HEAD~1 → HEAD  |  2 files changed",
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}