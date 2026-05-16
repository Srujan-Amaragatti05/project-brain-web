import type { Metadata } from "next";
import { CodeBlock, Callout, FlagTable, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain project analyze — project-brain Docs" };

export default function ProjectAnalyzePage() {
  return (
    <article>
      <DocHeading badge="Project Commands" title="brain project analyze" subtitle="Recursively scans the repository, performs AST parsing, and stores results to .brain/data.json." />
      <CodeBlock>{`brain project analyze [path]`}</CodeBlock>

      <FlagTable flags={[
        { flag: "path", type: "string", default: ".", desc: "Root directory to analyze" },
      ]} />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">What it does</h2>
      <ul className="space-y-1.5 text-sm text-[#B6C2CF]">
        {["Recursively traverses all files", "Skips paths in analysis.ignore (brain.yaml)", "Skips binary files automatically", "Skips test files if include_tests: false", "Parses Python files with AST module", "Extracts functions, classes, metadata, SHA256 hashes"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#3FB950]">•</span>{item}</li>
        ))}
      </ul>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output</h2>
      <CodeBlock>{`.brain/data.json`}</CodeBlock>

      <Callout type="note">Invalid or unreadable Python files are silently skipped — analysis never crashes. Check <code className="font-mono text-xs">.brain/logs.txt</code> for skipped files.</Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Example output</h2>
      <CodeBlock>{`🔍 Analyzing: .

📋 File Paths:
    src/api.py
    src/utils.py
    src/models.py

✅ Analysis complete → brain project summary`}</CodeBlock>

      <PageNav prev={{ href: "/docs/project-init", label: "brain project init" }} next={{ href: "/docs/project-summary", label: "brain project summary" }} />
    </article>
  );
}
