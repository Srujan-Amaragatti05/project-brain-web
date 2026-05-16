import type { Metadata } from "next";
import { CodeBlock, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain project summary — project-brain Docs" };

export default function ProjectSummaryPage() {
  return (
    <article>
      <DocHeading badge="Project Commands" title="brain project summary" subtitle="Generates a repository overview from the data stored by brain project analyze." />
      <CodeBlock>{`brain project summary`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output includes</h2>
      <ul className="space-y-1.5 text-sm text-[#B6C2CF]">
        {["Total files scanned", "Total functions extracted", "Total classes extracted", "Top files by function count", "Detected architecture hints"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#39C5CF]">•</span>{item}</li>
        ))}
      </ul>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output format</h2>
      <p className="mb-3 text-sm text-[#B6C2CF]">Controlled by <code className="font-mono text-xs text-[#E6EDF3]">output.format</code> in brain.yaml:</p>
      <CodeBlock>{`output:
  format: text    # text (default) | json | markdown`}</CodeBlock>
      <p className="mt-3 text-sm text-[#B6C2CF]">When <code className="font-mono text-xs text-[#E6EDF3]">format: json</code>, the full raw data is printed and a note is shown that it is already saved in <code className="font-mono text-xs text-[#E6EDF3]">.brain/data.json</code>.</p>

      <PageNav prev={{ href: "/docs/project-analyze", label: "brain project analyze" }} next={{ href: "/docs/project-doctor", label: "brain project doctor" }} />
    </article>
  );
}
