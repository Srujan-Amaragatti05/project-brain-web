import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain project init — project-brain Docs" };

export default function ProjectInitPage() {
  return (
    <article>
      <DocHeading badge="Project Commands" title="brain project init" subtitle="Initializes project-brain in the current directory. Always the first command to run." />
      <CodeBlock>{`brain project init`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">What it creates</h2>
      <CodeBlock>{`.brain/              ← data directory
.brain/cache/        ← explanation cache (avoids repeated LLM calls)
.brain/data.json     ← AST analysis output (populated by analyze)
.brain/index.json    ← file index
brain.yaml           ← configuration file (all defaults pre-filled)`}</CodeBlock>

      <Callout type="tip">Safe to re-run. Existing files and directories are preserved — only missing pieces are created.</Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Next step</h2>
      <CodeBlock>{`brain project analyze .`}</CodeBlock>

      <PageNav prev={{ href: "/docs/configuration", label: "brain.yaml Config" }} next={{ href: "/docs/project-analyze", label: "brain project analyze" }} />
    </article>
  );
}
