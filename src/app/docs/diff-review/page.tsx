import type { Metadata } from "next";
import { CodeBlock, FlagTable, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain diff review — project-brain Docs" };

export default function DiffReviewPage() {
  return (
    <article>
      <DocHeading badge="Diff Commands" title="brain diff review" subtitle="Generates semantic diff explanations using your configured LLM provider, then opens an interactive HTML report." />
      <CodeBlock>{`brain diff review [from_ref] [to_ref]`}</CodeBlock>

      <FlagTable flags={[
        { flag: "from_ref", type: "string", default: "HEAD~1", desc: "Source Git reference" },
        { flag: "to_ref",   type: "string", default: "HEAD",   desc: "Target Git reference" },
      ]} />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Workflow</h2>
      <ol className="space-y-2 text-sm text-[#B6C2CF]">
        {["Validates Git refs", "Computes diff (same as diff show)", "Extracts changed Python functions", "Builds prompts per function", "Calls configured LLM provider", "Caches results in .brain/cache/", "Writes JSON + HTML reports", "Opens HTML report in browser"].map((step, i) => (
          <li key={step} className="flex items-start gap-3">
            <span className="flex-shrink-0 font-mono text-xs text-[#3FB950]">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output files</h2>
      <CodeBlock>{`.brain/reports/diff_2026-05-14_10-30.json
.brain/reports/diff_2026-05-14_10-30.html   ← opens automatically`}</CodeBlock>

      <p className="mt-3 text-sm text-[#B6C2CF]">The HTML report is interactive and includes grouped files, risk labels (low/medium/high), semantic summaries, and impact descriptions.</p>

      <Callout type="note">
        When <code className="font-mono text-xs">provider: none</code> in brain.yaml, review falls back to heuristic structural summaries — no LLM required.
      </Callout>

      <PageNav prev={{ href: "/docs/diff-show", label: "brain diff show" }} next={{ href: "/docs/diff-explain", label: "brain diff explain" }} />
    </article>
  );
}
