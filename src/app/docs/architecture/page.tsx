import type { Metadata } from "next";
import { PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "Architecture — project-brain Docs" };

export default function ArchitecturePage() {
  return (
    <article>
      <DocHeading badge="Contributing" title="Architecture" subtitle="How project-brain is structured internally." />

      <h2 className="mb-4 mt-8 text-lg font-semibold text-[#E6EDF3]">Module Map</h2>
      <div className="overflow-x-auto rounded-xl border border-[#30363D] bg-[#0D1117] p-5 font-mono text-sm leading-7 text-[#E6EDF3]">
        <pre>{`CLI Layer  (cli.py, cli_ui.py, cli_help.py)
│
├── project_app  →  core/analyzer.py, core/summarizer.py, core/doctor.py
├── diff_app     →  core/differ.py, core/explainer.py, core/explainer_file.py
├── export_app   →  core/exporter.py
├── llm_app      →  llm/provider.py
└── community_app → community.py

Shared Infrastructure
├── core/config_loader.py    YAML config load + defaults
├── core/logger.py           Persistent log → .brain/logs.txt
├── core/results.py          HTML report generation
└── storage/storage.py       Data persistence helpers`}</pre>
      </div>

      <h2 className="mb-4 mt-10 text-lg font-semibold text-[#E6EDF3]">Core Modules</h2>
      <div className="space-y-3">
        {[
          { file: "core/analyzer.py",       desc: "Recursive directory traversal, Python AST parsing, function/class/hash extraction. Writes to .brain/data.json." },
          { file: "core/differ.py",         desc: "Git diff computation, changed file detection, function-level diff by comparing AST-extracted function bodies." },
          { file: "core/explainer.py",      desc: "LLM-powered diff explanations, prompt construction, provider calls, caching, HTML report data." },
          { file: "core/explainer_file.py", desc: "Single-file and single-function explanation logic." },
          { file: "core/exporter.py",       desc: "All export modes: full_code, file, dir, code_changes. Structured output format." },
          { file: "core/doctor.py",         desc: "Orchestrates environment checks — delegates to doctor_checks/ submodules." },
          { file: "core/summarizer.py",     desc: "Repository summary formatting (text/json/markdown modes)." },
          { file: "core/config_loader.py",  desc: "Loads brain.yaml, merges with DEFAULT_CONFIG recursively, validates schema." },
          { file: "llm/provider.py",        desc: "Provider abstraction for OpenAI, Ollama, Gemini, HuggingFace — timeout handling, model listing, response normalization." },
          { file: "core/results.py",        desc: "Generates interactive HTML diff reports with risk labels and semantic summaries." },
        ].map((mod) => (
          <div key={mod.file} className="rounded-xl border border-[#202938] bg-[#11161D] p-4">
            <code className="font-mono text-xs text-[#39C5CF]">{mod.file}</code>
            <p className="mt-1.5 text-sm text-[#7D8590]">{mod.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 mt-10 text-lg font-semibold text-[#E6EDF3]">Data Flow</h2>
      <div className="overflow-x-auto rounded-xl border border-[#30363D] bg-[#0D1117] p-5 font-mono text-sm leading-7 text-[#E6EDF3]">
        <pre>{`Repository
  └─ brain project analyze
        └─ .brain/data.json         ← AST metadata
              └─ brain project summary  (reads data.json)
              └─ brain diff show        (reads git, optional data.json)
              └─ brain diff review      (reads git → calls LLM → .brain/reports/)
              └─ brain export full_code (reads filesystem → .brain/exports/)`}</pre>
      </div>

      <h2 className="mb-4 mt-10 text-lg font-semibold text-[#E6EDF3]">Directory layout (source)</h2>
      <div className="overflow-x-auto rounded-xl border border-[#30363D] bg-[#0D1117] p-5 font-mono text-sm leading-7 text-[#E6EDF3]">
        <pre>{`project-brain/
├── src/
│   └── project_brain/
│       ├── cli.py              ← CLI entry point
│       ├── cli_help.py         ← Help text strings
│       ├── cli_ui.py           ← Rich UI helpers
│       ├── community.py        ← Community command
│       ├── core/
│       │   ├── analyzer.py
│       │   ├── config_loader.py
│       │   ├── differ.py
│       │   ├── doctor.py
│       │   ├── doctor_checks/  ← environment, repo, llm, exports, analysis
│       │   ├── explainer.py
│       │   ├── explainer_file.py
│       │   ├── exporter.py
│       │   ├── logger.py
│       │   ├── results.py
│       │   └── summarizer.py
│       ├── llm/
│       │   └── provider.py
│       └── storage/
│           └── storage.py
├── tests/                      ← 18 pytest tests
├── brain.yaml                  ← default config
├── pyproject.toml
└── .github/
    ├── workflows/tests.yml     ← CI/CD
    └── ISSUE_TEMPLATE/`}</pre>
      </div>

      <PageNav prev={{ href: "/docs/contributing", label: "Contributing" }} />
    </article>
  );
}
