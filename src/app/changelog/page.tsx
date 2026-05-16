import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Changelog — project-brain",
  description: "Release history for project-brain CLI. All versions with detailed change notes.",
};

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

interface Change { type: ChangeType; group?: string; text: string; }
interface Release { version: string; date: string; tag?: "latest"; summary: string; sections: { title: string; changes: Change[] }[]; }

const RELEASES: Release[] = [
  {
    version: "1.1.0",
    date: "2026-05-14",
    tag: "latest",
    summary: "Adds the community command group, --feedback CLI option, GitHub Discussions integration, and packaging fixes.",
    sections: [
      {
        title: "Added",
        changes: [
          { type: "feature", text: "brain community — prints GitHub, PyPI, Discussions, and Issues links in a styled panel" },
          { type: "feature", text: "brain --feedback — global flag that opens GitHub Discussions in the browser" },
          { type: "feature", text: "GitHub Discussions integration via community.py" },
          { type: "feature", text: "Community resource panel with all OSS ecosystem links" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "Version consistency fixes across CLI and package metadata" },
          { type: "improvement", text: "Packaging metadata cleanup for OSS readiness" },
          { type: "improvement", text: "OSS ecosystem readiness improvements" },
        ],
      },
      {
        title: "Fixed",
        changes: [
          { type: "fix", text: "CLI version resolution issue (brain --version now correct)" },
          { type: "fix", text: "Package metadata mismatch between pyproject.toml and __version__" },
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-05-14",
    summary: "Initial public release. Core AST analysis pipeline, function-level Git diff intelligence, structured AI-friendly exports, optional LLM explanations, and local-first developer workflows.",
    sections: [
      {
        title: "Core Analysis Engine",
        changes: [
          { type: "improvement", text: "Recursive repository scanning" },
          { type: "improvement", text: "AST-based Python parsing with function and class extraction" },
          { type: "improvement", text: "File metadata indexing and SHA256-based file tracking" },
          { type: "improvement", text: "Binary file detection and automatic skipping" },
          { type: "improvement", text: "Invalid Python parsing resilience — bad files skipped safely" },
        ],
      },
      {
        title: "Git Diff Intelligence",
        changes: [
          { type: "improvement", text: "Git reference comparison (any two refs)" },
          { type: "improvement", text: "File-level diff: added / modified / deleted file detection" },
          { type: "improvement", text: "Function-level diff analysis for Python files" },
          { type: "improvement", text: "Semantic function body comparison via AST" },
        ],
      },
      {
        title: "Export System",
        changes: [
          { type: "improvement", text: "brain export full_code — full repository export to .brain/exports/full_code.txt" },
          { type: "improvement", text: "brain export file <path> — single file export" },
          { type: "improvement", text: "brain export dir <path> — directory export" },
          { type: "improvement", text: "brain export code_changes <from> <to> — diff-based function export" },
          { type: "improvement", text: "AI-friendly structured output format (=== FILE: ... === sections)" },
        ],
      },
      {
        title: "Explain Engine",
        changes: [
          { type: "improvement", text: "brain diff explain <file> — file-level structural explanation" },
          { type: "improvement", text: "brain diff explain <file:function> — function-level explanation" },
          { type: "improvement", text: "brain diff review — LLM-assisted diff review with HTML + JSON reports" },
          { type: "improvement", text: "Explanation caching in .brain/cache/ — avoids repeated LLM calls" },
          { type: "improvement", text: "Fallback heuristic summaries when LLM is disabled" },
          { type: "improvement", text: "Interactive HTML reports with risk labels and semantic summaries" },
        ],
      },
      {
        title: "LLM Provider Layer",
        changes: [
          { type: "feature", text: "Gemini provider support" },
          { type: "feature", text: "HuggingFace provider support" },
          { type: "feature", text: "Offline mode: provider: none in brain.yaml — zero API calls" },
          { type: "feature", text: "brain testllm test — provider connectivity validation" },
          { type: "improvement", text: "Ollama provider support (local models)" },
          { type: "improvement", text: "OpenAI provider support" },
          { type: "improvement", text: "Timeout handling, model listing, response normalization" },
        ],
      },
      {
        title: "Diagnostics & Validation",
        changes: [
          { type: "improvement", text: "brain project doctor — full environment diagnostics (READY / PARTIAL / NOT READY)" },
          { type: "improvement", text: "Persistent logging to .brain/logs.txt — failures never crash CLI" },
          { type: "improvement", text: "Checks: project init, Git, config, provider, API keys, exports" },
        ],
      },
      {
        title: "CLI & Configuration",
        changes: [
          { type: "improvement", text: "brain project init — creates .brain/ structure and brain.yaml" },
          { type: "improvement", text: "brain and project-brain as CLI aliases (both work identically)" },
          { type: "improvement", text: "brain project analyze [path] — recursive AST scan" },
          { type: "improvement", text: "brain project summary — repo overview (text / json / markdown format)" },
          { type: "improvement", text: "brain.yaml config with llm, analysis, diff, export, explain, output sections" },
          { type: "improvement", text: "brain and project-brain as CLI aliases (both work identically)" },
          { type: "improvement", text: "brain --version / -v — show installed version" },
        ],
      },
      {
        title: "Fixed",
        changes: [
          { type: "fix", text: "Unicode-safe subprocess execution" },
          { type: "fix", text: "Safer file reading workflows for unreadable files" },
          { type: "fix", text: "Better provider fallback behavior" },
          { type: "fix", text: "Improved Git command handling for edge cases" },
        ],
      },
    ],
  },
  {
    version: "0.2.2-security",
    date: "2026-05-13",
    summary: "Security patch release. Merged hardened dev branch into main with dependency audit, unsafe file-read fixes, and access control improvements ahead of the public OSS release.",
    sections: [
      {
        title: "Testing & CI",
        changes: [
          { type: "feature", text: "18 automated tests passing (pytest)" },
          { type: "feature", text: "Test coverage: CLI, analyzer, differ, config, export, explain, logging, edge cases" },
          { type: "feature", text: "Real-world QA against Flask, Typer, and other open-source repositories" },
          { type: "feature", text: "GitHub Actions CI — automated test execution on every push" },
        ],
      },
      {
        title: "Fixed",
        changes: [
          { type: "fix", text: "Security hardening pass over the dev branch before OSS public release" },
          { type: "fix", text: "Resolved potential unsafe file-read and subprocess exposure vectors" },
          { type: "fix", text: "Dependency audit and cleanup ahead of PyPI publication" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "Code hygiene: removed debug artifacts and leftover dev scaffolding" },
          { type: "improvement", text: "Hardened branch merged to main as a pre-release security checkpoint" },
        ],
      },
    ],
  },
  {
    version: "0.2.1-license",
    date: "2026-04-28",
    summary: "License and documentation patch. Added MIT LICENSE file and updated README to reflect project identity, installation, and usage. Merged via PR #10.",
    sections: [
      {
        title: "Added",
        changes: [
          { type: "feature", text: "MIT LICENSE file added to the repository root (PR #10 — license branch)" },
          { type: "feature", text: "README.md updated with project description, install steps, and usage examples" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "OSS compliance: repository now includes proper open-source licensing" },
          { type: "improvement", text: "README reflects current CLI command surface and config structure" },
        ],
      },
    ],
  },
  {
    version: "0.2-testing",
    date: "2026-04-28",
    summary: "Stability build for automated QA. Core modules — analyzer, differ, exporter — stabilized and test artifacts cleaned for the v0.2 testing pipeline.",
    sections: [
      {
        title: "Fixed",
        changes: [
          { type: "fix", text: "Stabilized analyzer module — consistent AST parsing across edge-case files" },
          { type: "fix", text: "Stabilized differ module — reliable function-level diff output" },
          { type: "fix", text: "Stabilized exporter module — deterministic export file generation" },
          { type: "fix", text: "Cleaned test artifacts and removed stale fixture data polluting test runs" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "Automated test suite runs cleanly end-to-end for v0.2 milestone" },
          { type: "improvement", text: "Test isolation improved — no cross-test state contamination" },
        ],
      },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-04-26",
    summary: "Repository hygiene release. Removed accidentally tracked YAML configs and the .brainmain folder from version control, and tightened .gitignore to prevent re-tracking.",
    sections: [
      {
        title: "Fixed",
        changes: [
          { type: "fix", text: "Removed accidentally tracked yaml config files from version control" },
          { type: "fix", text: "Removed .brainmain/ folder from Git tracking — now correctly gitignored" },
          { type: "fix", text: ".gitignore updated to prevent re-tracking of runtime and output artifacts" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "Cleaner repository state for contributors cloning the project" },
          { type: "improvement", text: "Runtime output directories separated from source-controlled files" },
        ],
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-04-20",
    summary: "First tagged release. Initial dev branch merged to main — establishes the foundational CLI skeleton, project structure, and early prototype of the AST analysis pipeline.",
    sections: [
      {
        title: "Added",
        changes: [
          { type: "feature", text: "Initial CLI entry point — brain / project-brain command scaffolded" },
          { type: "feature", text: "Project directory structure established (.brain/, brain.yaml)" },
          { type: "feature", text: "Early prototype of the repository analyzer (AST scanning)" },
          { type: "feature", text: "Basic Git diff detection stub" },
          { type: "feature", text: "Dev branch first merge to main — project exists as an installable package" },
        ],
      },
      {
        title: "Improved",
        changes: [
          { type: "improvement", text: "pyproject.toml configured for local pip install" },
          { type: "improvement", text: "Initial project skeleton ready for iterative dev cycle" },
        ],
      },
    ],
  },
];

const TYPE_BADGE: Record<ChangeType, { label: string; color: string; bg: string }> = {
  feature:     { label: "New",     color: "#3FB950", bg: "#0d1a0f" },
  improvement: { label: "Improved", color: "#39C5CF", bg: "#0d1820" },
  fix:         { label: "Fixed",   color: "#F0A500", bg: "#1a140d" },
  breaking:    { label: "Breaking", color: "#F85149", bg: "#1a0d0d" },
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#3FB950]">
            RELEASE HISTORY
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#E6EDF3]">Changelog</h1>
          <p className="mt-4 text-base leading-8 text-[#B6C2CF]">
            All notable changes to project-brain are documented here. Releases follow{" "}
            <a href="https://semver.org" target="_blank" rel="noreferrer" className="text-[#58A6FF] underline underline-offset-4 hover:text-[#79B8FF]">
              semantic versioning
            </a>
            .
          </p>
        </div>

        <div className="space-y-16">
          {RELEASES.map((release) => (
            <div key={release.version}>
              {/* Version header */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <h2 className="font-mono text-2xl font-bold text-[#E6EDF3]">v{release.version}</h2>
                {release.tag === "latest" && (
                  <span className="rounded-full border border-[#3FB950]/30 bg-[#0d1a0f] px-2.5 py-0.5 font-mono text-xs text-[#3FB950]">
                    latest
                  </span>
                )}
                <span className="font-mono text-sm text-[#7D8590]">{release.date}</span>
                <a
                  href={`https://github.com/Srujan-Amaragatti05/project-brain/releases/tag/v${release.version}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#58A6FF] underline underline-offset-4 hover:text-[#79B8FF]"
                >
                  GitHub Release →
                </a>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-[#B6C2CF]">{release.summary}</p>

              {/* Sections */}
              <div className="space-y-8">
                {release.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-3 text-sm font-semibold text-[#E6EDF3]">{section.title}</h3>
                    <div className="space-y-2">
                      {section.changes.map((change, i) => {
                        const badge = TYPE_BADGE[change.type];
                        return (
                          <div key={i} className="flex items-start gap-3 rounded-xl border border-[#202938] bg-[#11161D] px-4 py-3">
                            <span
                              className="mt-0.5 flex-shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                              style={{ color: badge.color, backgroundColor: badge.bg }}
                            >
                              {badge.label}
                            </span>
                            <p className="text-sm text-[#B6C2CF]">{change.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <hr className="mt-12 border-[var(--border)]" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between text-sm">
          <Link href="/docs" className="text-[#7D8590] transition-colors hover:text-[#E6EDF3]">← Documentation</Link>
          <Link href="/feedback" className="text-[#7D8590] transition-colors hover:text-[#E6EDF3]">Give Feedback →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
