"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Network, GitGraph, TerminalSquare, Workflow } from "lucide-react";

import { fadeUp } from "@/lib/motion";

const FLOW_NODES = [
  {
    id: "repo",
    label: "Repository",
    sublabel: "Source Code",
    icon: Database,
    accent: "#3FB950",
    glow: "rgba(63, 185, 80, 0.2)",
    step: "01",
  },
  {
    id: "ast",
    label: "AST Analysis",
    sublabel: "Parse & Tokenize",
    icon: Network,
    accent: "#56C9A0",
    glow: "rgba(86, 201, 160, 0.2)",
    step: "02",
  },
  {
    id: "graph",
    label: "Semantic Graph",
    sublabel: "Build Relationships",
    icon: GitGraph,
    accent: "#39C5CF",
    glow: "rgba(57, 197, 207, 0.2)",
    step: "03",
  },
  {
    id: "git",
    label: "Git Intelligence",
    sublabel: "Semantic Diffing",
    icon: Workflow,
    accent: "#4DAAF5",
    glow: "rgba(77, 170, 245, 0.2)",
    step: "04",
  },
  {
    id: "workflows",
    label: "Dev Workflows",
    sublabel: "CLI Output",
    icon: TerminalSquare,
    accent: "#58A6FF",
    glow: "rgba(88, 166, 255, 0.2)",
    step: "05",
  },
];

export default function ArchitectureFlow() {
  return (
    <section id="architecture" className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background radial */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(57,197,207,0.05) 0%, transparent 70%)",
        }}
      />

      <motion.div {...fadeUp} className="relative mb-16 max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#3FB950]">
          Architecture
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How it works.
          <br />
          <span className="text-[#7D8590]">
            From raw code to semantic intelligence.
          </span>
        </h2>
      </motion.div>

      {/* Flow diagram */}
      <div className="relative flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-0">
        {/* Connector line behind (desktop only) */}
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #202938 10%, #202938 90%, transparent 100%)",
          }}
        />

        {FLOW_NODES.map((node, i) => {
          const Icon = node.icon;
          const isLast = i === FLOW_NODES.length - 1;

          return (
            <div
              key={node.id}
              className="relative flex flex-col items-center lg:flex-1 lg:flex-row"
            >
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                className="group relative z-10 flex w-full max-w-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#30363D] bg-[#11161D] p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 lg:max-w-none"
                whileHover={{
                  boxShadow: `0 8px 32px ${node.glow}`,
                  borderColor: node.accent + "60",
                }}
              >
                {/* Step number */}
                <span
                  className="font-mono text-[10px] font-semibold tracking-widest"
                  style={{ color: node.accent + "80" }}
                >
                  {node.step}
                </span>

                {/* Icon */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300"
                  style={{
                    borderColor: node.accent + "40",
                    backgroundColor: node.accent + "10",
                    boxShadow: `0 0 16px ${node.glow}`,
                  }}
                >
                  <Icon size={18} style={{ color: node.accent }} />
                </div>

                {/* Label */}
                <div>
                  <span className="block font-mono text-sm font-medium text-[#E6EDF3]">
                    {node.label}
                  </span>
                  <span className="block text-xs text-[#7D8590]">
                    {node.sublabel}
                  </span>
                </div>
              </motion.div>

              {/* Arrow */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.12 + 0.08 }}
                  className="relative z-10 flex items-center justify-center py-3 lg:px-3 lg:py-0"
                >
                  <ArrowRight
                    size={16}
                    className="rotate-90 text-[#30363D] lg:rotate-0"
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
