import type { Metadata } from "next";
import { CodeBlock, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain community — project-brain Docs" };

export default function CommunityPage() {
  return (
    <article>
      <DocHeading badge="Community" title="brain community" subtitle="Access all community resources from the CLI or directly via the links below." />
      <CodeBlock>{`brain community`}</CodeBlock>

      <p className="mt-4 mb-6 text-sm text-[#B6C2CF]">Prints a panel with links to GitHub, PyPI, Discussions, and Issues. Also available as a global flag:</p>
      <CodeBlock>{`brain --feedback    # opens GitHub Discussions in your browser`}</CodeBlock>

      <h2 className="mb-4 mt-8 text-lg font-semibold text-[#E6EDF3]">Resources</h2>
      <div className="space-y-3">
        {[
          { label: "GitHub Repository", url: "https://github.com/Srujan-Amaragatti05/project-brain", desc: "Source code, issues, pull requests" },
          { label: "PyPI Package", url: "https://pypi.org/project/project-brain-cli/", desc: "project-brain-cli on PyPI" },
          { label: "Discussions", url: "https://github.com/Srujan-Amaragatti05/project-brain/discussions", desc: "Ask questions, share ideas, give feedback" },
          { label: "Issues", url: "https://github.com/Srujan-Amaragatti05/project-brain/issues", desc: "Bug reports and feature requests" },
        ].map((r) => (
          <a key={r.label} href={r.url} target="_blank" rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-[#202938] bg-[#11161D] p-4 transition-colors hover:border-[#30363D] hover:bg-[#161B22] group">
            <div>
              <p className="font-semibold text-sm text-[#E6EDF3] group-hover:text-[#3FB950] transition-colors">{r.label}</p>
              <p className="text-xs text-[#7D8590] mt-0.5">{r.desc}</p>
            </div>
            <span className="text-[#7D8590] text-xs">→</span>
          </a>
        ))}
      </div>

      <PageNav prev={{ href: "/docs/api-keys", label: "API Key Setup" }} next={{ href: "/docs/contributing", label: "Development Setup" }} />
    </article>
  );
}
