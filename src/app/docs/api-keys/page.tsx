import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "API Key Setup — project-brain Docs" };

export default function ApiKeysPage() {
  return (
    <article>
      <DocHeading badge="LLM & Testing" title="API Key Setup" subtitle="API keys must never be stored in brain.yaml. Always use environment variables." />

      <Callout type="warning">Storing secrets in brain.yaml is a security risk — it gets committed to Git. Use environment variables only.</Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Windows (CMD)</h2>
      <CodeBlock>{`setx OPENAI_API_KEY "your_key"
setx GEMINI_API_KEY "your_key"
setx HUGGINGFACE_API_KEY "your_key"`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Windows (PowerShell)</h2>
      <CodeBlock>{`[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "your_key", "User")
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your_key", "User")`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Linux / macOS</h2>
      <CodeBlock>{`export OPENAI_API_KEY="your_key"
export GEMINI_API_KEY="your_key"
export HUGGINGFACE_API_KEY="your_key"

# Add to ~/.bashrc or ~/.zshrc to persist`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Verify key is set</h2>
      <CodeBlock>{`# Windows CMD
echo %OPENAI_API_KEY%

# Linux / macOS / PowerShell
echo $OPENAI_API_KEY`}</CodeBlock>

      <p className="mt-4 text-sm text-[#B6C2CF]">Then run <code className="font-mono text-xs text-[#E6EDF3]">brain testllm test</code> to validate provider connectivity.</p>

      <PageNav prev={{ href: "/docs/offline", label: "Offline Mode" }} next={{ href: "/docs/community", label: "brain community" }} />
    </article>
  );
}
