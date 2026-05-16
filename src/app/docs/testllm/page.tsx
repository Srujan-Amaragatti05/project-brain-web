import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain testllm test — project-brain Docs" };

export default function TestLLMPage() {
  return (
    <article>
      <DocHeading badge="LLM & Testing" title="brain testllm test" subtitle="Validates connectivity and response from your configured LLM provider." />
      <CodeBlock>{`brain testllm test`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">What it does</h2>
      <ol className="space-y-1.5 text-sm text-[#B6C2CF]">
        {["Loads provider config from brain.yaml", "Sends a simple test prompt (\"What is 2 + 2?\")", "Validates the response", "Fetches and displays available model list (first 5)", "Reports pass or fail with actionable suggestions"].map((step, i) => (
          <li key={step} className="flex items-start gap-3">
            <span className="flex-shrink-0 font-mono text-xs text-[#39C5CF]">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Supported providers</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { name: "OpenAI", value: "openai" },
          { name: "Ollama", value: "ollama" },
          { name: "Gemini", value: "gemini" },
          { name: "HuggingFace", value: "huggingface" },
        ].map((p) => (
          <div key={p.value} className="rounded-xl border border-[#202938] bg-[#11161D] p-3 text-center">
            <p className="font-semibold text-sm text-[#E6EDF3]">{p.name}</p>
            <code className="font-mono text-xs text-[#7D8590]">{p.value}</code>
          </div>
        ))}
      </div>

      <Callout type="note">
        If <code className="font-mono text-xs">provider: none</code>, the command prints <em>"LLM disabled"</em> and exits cleanly.
      </Callout>

      <PageNav prev={{ href: "/docs/export-code-changes", label: "brain export code_changes" }} next={{ href: "/docs/offline", label: "Offline Mode" }} />
    </article>
  );
}
