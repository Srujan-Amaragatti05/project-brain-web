import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain.yaml Configuration — project-brain Docs" };

export default function ConfigurationPage() {
  return (
    <article>
      <DocHeading badge="Getting Started" title="brain.yaml" subtitle="The optional config file created by brain project init. All fields have sensible defaults — you only need to edit what you want to change." />

      <CodeBlock>{`version: "1.0"

llm:
  provider: none          # none | openai | ollama | gemini | huggingface
  model: ""               # model name for chosen provider
  timeout_sec: 60

analysis:
  depth: fast             # analysis depth
  include_tests: false    # whether to scan test files
  ignore:
    - .brain/
    - .git/
    - node_modules/

diff:
  mode: function          # function | file

export:
  full_code:
    include_tests: false
    max_file_size_kb: 200
  manual_add:
    allow_duplicates: true
  changes:
    mode: function
    include_context: true
    output_path: .brain/exports/code_changes.txt

explain:
  level: detailed         # detailed | brief
  include_risks: true

output:
  format: text            # text | json | markdown`}</CodeBlock>

      <h2 className="mb-3 mt-10 text-lg font-semibold text-[#E6EDF3]">Key Settings</h2>
      <div className="space-y-4 text-sm">
        {[
          { key: "llm.provider", desc: "Set to none for fully offline mode. No API calls, no uploads.", accent: "#3FB950" },
          { key: "analysis.ignore", desc: "Paths excluded from AST scanning. Add large generated dirs here.", accent: "#39C5CF" },
          { key: "diff.mode", desc: "function shows per-function changes; file shows file-level only.", accent: "#58A6FF" },
          { key: "output.format", desc: "Controls brain project summary output format.", accent: "#BC8CFF" },
        ].map((item) => (
          <div key={item.key} className="flex items-start gap-3 rounded-xl border border-[#202938] bg-[#11161D] p-4">
            <span className="mt-0.5 font-mono text-xs" style={{ color: item.accent }}>{item.key}</span>
            <p className="text-[#7D8590]">{item.desc}</p>
          </div>
        ))}
      </div>

      <Callout type="warning">Never store API keys in brain.yaml. Use environment variables only — see <Link href="/docs/api-keys" className="text-[#58A6FF] underline underline-offset-4">API Key Setup</Link>.</Callout>

      <PageNav prev={{ href: "/docs/quickstart", label: "Quick Start" }} next={{ href: "/docs/project/brain_project_init", label: "brain project init" }} />
    </article>
  );
}
