import type { Metadata } from "next";
import { CodeBlock, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain export file & dir — project-brain Docs" };

export default function ExportFilePage() {
  return (
    <article>
      <DocHeading badge="Export Commands" title="brain export file / dir" subtitle="Manually add a single file or directory to the export bundle." />

      <h2 className="mb-3 mt-6 text-lg font-semibold text-[#E6EDF3]">Export a single file</h2>
      <CodeBlock>{`brain export file <path>

# Example
brain export file src/api.py`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Export a directory</h2>
      <CodeBlock>{`brain export dir <path>

# Example
brain export dir src/`}</CodeBlock>

      <p className="mt-4 text-sm text-[#B6C2CF]">Both commands append to the export bundle at <code className="font-mono text-xs text-[#E6EDF3]">.brain/exports/</code>. The <code className="font-mono text-xs text-[#E6EDF3]">allow_duplicates</code> setting in brain.yaml controls whether the same file can be added twice.</p>

      <PageNav prev={{ href: "/docs/export-full-code", label: "brain export full_code" }} next={{ href: "/docs/export-code-changes", label: "brain export code_changes" }} />
    </article>
  );
}
