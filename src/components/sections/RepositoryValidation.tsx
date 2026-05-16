"use client";

import { motion } from "framer-motion";
import TerminalCard from "@/components/terminal/TerminalCard";
import { fadeUp } from "@/lib/motion";

export default function RepositoryValidation() {
  return (
    <section id="validation" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left — copy */}
        <motion.div {...fadeUp} className="order-2 lg:order-1">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#39C5CF]">
            Diagnostics
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Catch problems early.
            <br />
            <span className="text-[#7D8590]">
              Before they reach production.
            </span>
          </h2>
          <p className="mt-6 text-base leading-8 text-[#B6C2CF]">
            <code className="font-mono text-sm text-[#E6EDF3]">brain project doctor</code>{" "}
            validates your entire environment — from Git availability to API key
            presence — and reports a clear status.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                label: "brain project doctor",
                detail: "Checks project init, Git, config, and provider setup",
                color: "#3FB950",
              },
              {
                label: "brain project summary",
                detail: "Total files, functions, classes, architecture hints",
                color: "#39C5CF",
              },
              {
                label: "brain diff review",
                detail: "Semantic diff explanations with optional LLM — HTML reports",
                color: "#58A6FF",
              },
              {
                label: "brain diff explain <file>",
                detail: "Explain a specific file or function: src/api.py:create_user",
                color: "#BC8CFF",
              },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <div>
                  <span className="font-mono text-sm font-medium text-[#E6EDF3]">
                    {item.label}
                  </span>
                  <p className="text-sm text-[#7D8590]">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — terminal */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative order-1 lg:order-2"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-3xl opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(88,166,255,0.3) 0%, transparent 70%)",
            }}
          />
          <TerminalCard
            title="brain project doctor"
            lines={[
              { type: "command", content: "brain project doctor" },
              { type: "output", content: "" },
              { type: "success", content: "✓ Project initialized     (.brain/ exists)" },
              { type: "success", content: "✓ Repository analyzed     (.brain/data.json)" },
              { type: "success", content: "✓ Git available           (2.45.0)" },
              { type: "success", content: "✓ Config valid            (brain.yaml)" },
              { type: "output", content: "~ Provider: none          (offline mode)" },
              { type: "output", content: "" },
              { type: "success", content: "Status: READY" },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
