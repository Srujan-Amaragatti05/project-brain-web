import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "Installation — project-brain Docs" };

export default function InstallationPage() {
  return (
    <article>
      <DocHeading badge="Getting Started" title="Installation" subtitle="Install project-brain from PyPI in seconds. Requires Python 3.10+ and Git." />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Install from PyPI</h2>
      <CodeBlock>{`pip install project-brain-cli`}</CodeBlock>

      <Callout type="tip">
        It is recommended to install inside a virtual environment:
        <br />
        <code className="font-mono text-xs">python -m venv env &amp;&amp; env\Scripts\activate</code> (Windows)
        <br />
        <code className="font-mono text-xs">python3 -m venv env &amp;&amp; source env/bin/activate</code> (Linux / macOS)
      </Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Verify installation</h2>
      <CodeBlock>{`brain --version
# project-brain version: 1.1.0`}</CodeBlock>

      <Callout type="note">
        Both <code className="font-mono text-xs text-[#E6EDF3]">brain</code> and <code className="font-mono text-xs text-[#E6EDF3]">project-brain</code> are registered as CLI entry points — both work identically.
      </Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Requirements</h2>
      <ul className="space-y-2 text-sm text-[#B6C2CF]">
        <li className="flex items-start gap-2"><span className="text-[#3FB950]">•</span><strong className="text-[#E6EDF3]">Python &gt;= 3.10</strong></li>
        <li className="flex items-start gap-2"><span className="text-[#3FB950]">•</span>Git installed and accessible in PATH</li>
        <li className="flex items-start gap-2"><span className="text-[#7D8590]">•</span><span className="text-[#7D8590]">Optional: Ollama / OpenAI / Gemini / HuggingFace for LLM features</span></li>
      </ul>

      <Callout type="note">
        Are you a contributor? See the <Link href="/docs/contributing" className="text-[#58A6FF] underline underline-offset-4 hover:text-[#79B8FF]">Contributing guide</Link> for the source-install workflow (<code className="font-mono text-xs">pip install -e &quot;.[dev]&quot;</code>).
      </Callout>

      <PageNav prev={{ href: "/docs", label: "Overview" }} next={{ href: "/docs/quickstart", label: "Quick Start" }} />
    </article>
  );
}
