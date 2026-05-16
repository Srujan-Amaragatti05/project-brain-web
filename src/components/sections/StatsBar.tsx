"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const STATS = [
  { label: "Zero Telemetry", icon: "🔒" },
  { label: "Local-first", icon: "💻" },
  { label: "MIT License", icon: "⚖️" },
  { label: "Python 3.10+", icon: "🐍" },
  { label: "100% Offline", icon: "📡" },
];

export default function StatsBar() {
  return (
    <div className="border-y border-[var(--border)]">
      <motion.div
        {...fadeUp}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-0 px-6"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex items-center"
          >
            <div className="flex items-center gap-2.5 px-8 py-4 text-sm text-[#7D8590] transition-colors hover:text-[#B6C2CF]">
              <span aria-hidden="true" className="text-base">
                {stat.icon}
              </span>
              <span className="font-mono font-medium">{stat.label}</span>
            </div>
            {i < STATS.length - 1 && (
              <span
                className="h-4 w-px bg-[var(--border)]"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
