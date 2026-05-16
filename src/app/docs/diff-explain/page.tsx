import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain diff explain — project-brain Docs" };

export default function DiffExplainPage() {
  return (
    <article>
      <DocHeading badge="Diff Commands" title="brain diff explain" subtitle="Generates an explanation for a specific file or function using the local semantic graph and optional LLM." />
      <CodeBlock>{`brain diff explain <target>`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Target syntax</h2>
      <CodeBlock>{`brain diff explain src/api.py                  # explain entire file
brain diff explain src/api.py:create_user      # explain specific function`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output depends on LLM config</h2>
      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-[#202938] bg-[#11161D] p-4">
          <p className="mb-1 font-mono text-xs font-semibold text-[#7D8590]">Without LLM (provider: none)</p>
          <p className="text-sm text-[#B6C2CF]">Structural summary — function list, class list, import graph, size metrics.</p>
        </div>
        <div className="rounded-xl border border-[#202938] bg-[#11161D] p-4">
          <p className="mb-1 font-mono text-xs font-semibold text-[#3FB950]">With LLM configured</p>
          <p className="text-sm text-[#B6C2CF]">Semantic explanation — what the code does, risks, logic overview, behavioral impact.</p>
        </div>
      </div>

      <Callout type="tip">Results are cached in <code className="font-mono text-xs">.brain/cache/</code> — re-running on unchanged functions returns instantly without LLM calls.</Callout>

      <PageNav prev={{ href: "/docs/diff-review", label: "brain diff review" }} next={{ href: "/docs/export-full-code", label: "brain export full_code" }} />
    </article>
  );
}
