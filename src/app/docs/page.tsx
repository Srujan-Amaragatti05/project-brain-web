import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";

export const metadata: Metadata = {
  title: "Documentation — project-brain",
  description: "project-brain CLI documentation. Local-first developer intelligence for codebases.",
};

export default function DocsOverview() {
  return (
    <article>
      <DocHeading
        badge="v1.1.0"
        title="project-brain"
        subtitle="A CLI-first developer intelligence tool for analyzing codebases, tracking Git changes at function level, generating structured exports for AI systems, and explaining code changes — running entirely on your machine."
      />

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-[#E6EDF3]">30-Second Quick Start</h2>
        <CodeBlock>{`pip install project-brain-cli

brain project init          # create .brain/ + brain.yaml
brain project analyze .     # scan repo → .brain/data.json
brain diff show             # HEAD~1 → HEAD function-level diff
brain export full_code      # pack repo → .brain/exports/full_code.txt`}</CodeBlock>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Command Map</h2>
        <div className="overflow-hidden rounded-xl border border-[#30363D]">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#30363D] bg-[#11161D]">
              <th className="px-4 py-2.5 text-left font-mono text-xs text-[#7D8590]">Command</th>
              <th className="px-4 py-2.5 text-left font-mono text-xs text-[#7D8590]">What it does</th>
            </tr></thead>
            <tbody>
              {[
                ["brain project init",              "Create .brain/ directory and brain.yaml config"],
                ["brain project analyze [path]",    "Recursive AST scan → .brain/data.json"],
                ["brain project summary",           "Show file/function/class counts and architecture hints"],
                ["brain project doctor",            "Validate environment (Git, config, provider, API keys)"],
                ["brain diff show [from] [to]",     "Function-level diff between Git refs (default HEAD~1→HEAD)"],
                ["brain diff review [from] [to]",   "LLM semantic diff explanation → HTML + JSON reports"],
                ["brain diff explain <target>",     "Explain a file or function (src/api.py:create_user)"],
                ["brain export full_code",          "Pack entire repo → .brain/exports/full_code.txt"],
                ["brain export file <path>",        "Add single file to export"],
                ["brain export dir <path>",         "Add directory to export"],
                ["brain export code_changes A B",   "Export changed functions between two Git refs"],
                ["brain testllm test",              "Test LLM provider connectivity"],
                ["brain community",                 "Show GitHub, PyPI, Discussions links"],
                ["brain --version / -v",            "Print installed version"],
                ["brain --feedback",                "Open GitHub Discussions in browser"],
              ].map(([cmd, desc], i, arr) => (
                <tr key={cmd} className={i < arr.length - 1 ? "border-b border-[#202938]" : ""}>
                  <td className="px-4 py-2.5"><code className="font-mono text-xs text-[#39C5CF]">{cmd}</code></td>
                  <td className="px-4 py-2.5 text-xs text-[#7D8590]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-[#E6EDF3]">Requirements</h2>
        <ul className="space-y-2 text-sm text-[#B6C2CF]">
          <li><span className="text-[#3FB950]">•</span> <strong className="text-[#E6EDF3]">Python &gt;= 3.10</strong></li>
          <li><span className="text-[#3FB950]">•</span> Git installed and accessible in PATH</li>
          <li><span className="text-[#7D8590]">•</span> <span className="text-[#7D8590]">Optional: Ollama / OpenAI / Gemini / HuggingFace for LLM features</span></li>
        </ul>
        <Callout type="note">
          Both <code className="font-mono text-xs text-[#E6EDF3]">brain</code> and <code className="font-mono text-xs text-[#E6EDF3]">project-brain</code> aliases are registered after install.
        </Callout>
      </section>

      <PageNav next={{ href: "/docs/installation", label: "Installation" }} />
    </article>
  );
}
