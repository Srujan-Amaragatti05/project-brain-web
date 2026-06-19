import type { Metadata } from "next";
import { CodeBlock, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "Offline Mode — project-brain Docs" };

export default function OfflinePage() {
  return (
    <article>
      <DocHeading badge="LLM & Testing" title="Offline Mode" subtitle="project-brain works fully offline. No API calls, no uploads, no cloud dependency." />

      <p className="mb-6 text-sm leading-relaxed text-[#B6C2CF]">Set <code className="font-mono text-xs text-[#E6EDF3]">provider: none</code> in brain.yaml to disable all LLM features:</p>
      <CodeBlock>{`llm:
  provider: none`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Behavior in offline mode</h2>
      <ul className="space-y-2 text-sm text-[#B6C2CF]">
        {[
          { label: "brain diff show", desc: "Works fully — no LLM needed" },
          { label: "brain diff review", desc: "Falls back to heuristic structural summaries" },
          { label: "brain diff explain", desc: "Returns structural summary only" },
          { label: "brain testllm test", desc: "Prints 'LLM disabled' and exits cleanly" },
          { label: "All export commands", desc: "Work fully — no LLM needed" },
          { label: "brain project *", desc: "All project commands work fully offline" },
        ].map((item) => (
          <li key={item.label} className="flex items-start gap-3 rounded-xl border border-[#202938] bg-[#11161D] p-3">
            <code className="flex-shrink-0 font-mono text-xs text-[#39C5CF]">{item.label}</code>
            <span className="text-[#7D8590]">{item.desc}</span>
          </li>
        ))}
      </ul>

      <PageNav prev={{ href: "/docs/testllm/brain_testllm_test", label: "brain testllm test" }} next={{ href: "/docs/api-keys", label: "API Key Setup" }} />
    </article>
  );
}
