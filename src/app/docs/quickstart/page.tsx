import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "Quick Start — project-brain Docs" };

export default function QuickstartPage() {
  return (
    <article>
      <DocHeading badge="Getting Started" title="Quick Start" subtitle="From zero to a working semantic analysis in under 30 seconds." />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 1 — Install</h2>
      <CodeBlock>{`pip install project-brain-cli`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 2 — Initialize</h2>
      <p className="mb-3 text-sm text-[#B6C2CF]">Run this inside any existing Git repository:</p>
      <CodeBlock>{`brain project init`}</CodeBlock>
      <p className="mt-3 text-sm text-[#B6C2CF]">Creates <code className="font-mono text-xs text-[#E6EDF3]">.brain/</code>, <code className="font-mono text-xs text-[#E6EDF3]">.brain/cache/</code>, <code className="font-mono text-xs text-[#E6EDF3]">.brain/data.json</code>, <code className="font-mono text-xs text-[#E6EDF3]">.brain/index.json</code>, and <code className="font-mono text-xs text-[#E6EDF3]">brain.yaml</code>. Safe to re-run.</p>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 3 — Analyze</h2>
      <CodeBlock>{`brain project analyze .`}</CodeBlock>
      <p className="mt-3 text-sm text-[#B6C2CF]">Recursively scans the repo, parses Python ASTs, extracts functions + classes, writes results to <code className="font-mono text-xs text-[#E6EDF3]">.brain/data.json</code>.</p>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 4 — Inspect changes</h2>
      <CodeBlock>{`brain diff show`}</CodeBlock>
      <p className="mt-3 text-sm text-[#B6C2CF]">Defaults to <code className="font-mono text-xs text-[#E6EDF3]">HEAD~1 → HEAD</code>. Shows modified / added / deleted files plus function-level changes inside Python files.</p>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 5 — Export for LLM</h2>
      <CodeBlock>{`brain export full_code`}</CodeBlock>
      <p className="mt-3 text-sm text-[#B6C2CF]">Packs the repo into <code className="font-mono text-xs text-[#E6EDF3]">.brain/exports/full_code.txt</code> — ready to paste into any LLM prompt.</p>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Step 6 — Validate environment</h2>
      <CodeBlock>{`brain project doctor`}</CodeBlock>
      <Callout type="tip">Run <code className="font-mono text-xs">brain project doctor</code> any time something is not working. It checks project init, Git, config, and provider setup and gives you a clear READY / PARTIAL / NOT READY status.</Callout>

      <PageNav prev={{ href: "/docs/installation", label: "Installation" }} next={{ href: "/docs/configuration", label: "brain.yaml Config" }} />
    </article>
  );
}
