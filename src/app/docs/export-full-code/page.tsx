import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain export full_code — project-brain Docs" };

export default function ExportFullCodePage() {
  return (
    <article>
      <DocHeading badge="Export Commands" title="brain export full_code" subtitle="Packs the entire repository into a single AI-friendly flat text file." />
      <CodeBlock>{`brain export full_code`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output</h2>
      <CodeBlock>{`.brain/exports/full_code.txt`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">File format</h2>
      <CodeBlock>{`=== FILE: src/api.py ===
<file content>

=== FILE: src/utils.py ===
<file content>`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Behavior</h2>
      <ul className="space-y-1.5 text-sm text-[#B6C2CF]">
        {["Recursively scans all files", "Respects analysis.ignore paths from brain.yaml", "Skips files larger than export.full_code.max_file_size_kb", "Skips test files if include_tests: false", "Skips binary files automatically"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#3FB950]">•</span>{item}</li>
        ))}
      </ul>

      <Callout type="tip">Paste the content of full_code.txt directly into your LLM prompt to give it complete context of your codebase.</Callout>

      <PageNav prev={{ href: "/docs/diff-explain", label: "brain diff explain" }} next={{ href: "/docs/export-file", label: "brain export file" }} />
    </article>
  );
}
