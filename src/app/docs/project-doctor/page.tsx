import type { Metadata } from "next";
import { CodeBlock, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain project doctor — project-brain Docs" };

export default function ProjectDoctorPage() {
  return (
    <article>
      <DocHeading badge="Project Commands" title="brain project doctor" subtitle="Validates your entire environment and reports a clear status. Run this when something isn't working." />
      <CodeBlock>{`brain project doctor`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Checks performed</h2>
      <div className="space-y-2">
        {[
          { cat: "Repository", checks: ["Project initialized (.brain/ exists)", "Repository analyzed (.brain/data.json populated)", "Git available and functional"] },
          { cat: "Configuration", checks: ["brain.yaml present and valid", "Config schema valid"] },
          { cat: "LLM / Provider", checks: ["Provider correctly set", "API key environment variable present (if provider ≠ none)", "Model name configured"] },
          { cat: "Exports", checks: ["Export directory accessible"] },
        ].map((section) => (
          <div key={section.cat} className="rounded-xl border border-[#202938] bg-[#11161D] p-4">
            <p className="mb-2 font-mono text-xs font-semibold text-[#E6EDF3]">{section.cat}</p>
            <ul className="space-y-1">
              {section.checks.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[#7D8590]"><span className="text-[#3FB950]">✓</span>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Status levels</h2>
      <div className="overflow-hidden rounded-xl border border-[#30363D]">
        <table className="w-full text-sm">
          <tbody>
            {[
              { status: "READY",     color: "#3FB950", meaning: "All required checks passed — fully operational" },
              { status: "PARTIAL",   color: "#F0A500", meaning: "Some non-critical checks missing (e.g. no LLM configured)" },
              { status: "NOT READY", color: "#F85149", meaning: "Critical setup missing — run brain project init and analyze" },
            ].map((r, i, arr) => (
              <tr key={r.status} className={i < arr.length - 1 ? "border-b border-[#202938]" : ""}>
                <td className="px-4 py-3 w-32"><span className="font-mono text-xs font-bold" style={{ color: r.color }}>{r.status}</span></td>
                <td className="px-4 py-3 text-xs text-[#7D8590]">{r.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PageNav prev={{ href: "/docs/project-summary", label: "brain project summary" }} next={{ href: "/docs/diff-show", label: "brain diff show" }} />
    </article>
  );
}
