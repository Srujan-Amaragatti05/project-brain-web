import type { Metadata } from "next";
import { CodeBlock, FlagTable, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain diff show — project-brain Docs" };

export default function DiffShowPage() {
  return (
    <article>
      <DocHeading badge="Diff Commands" title="brain diff show" subtitle="Shows Git changes between two refs at file level and function level. The core diff command." />
      <CodeBlock>{`brain diff show [from_ref] [to_ref]`}</CodeBlock>

      <FlagTable flags={[
        { flag: "from_ref", type: "string", default: "HEAD~1", desc: "Source Git reference" },
        { flag: "to_ref",   type: "string", default: "HEAD",   desc: "Target Git reference" },
      ]} />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Examples</h2>
      <CodeBlock>{`brain diff show                      # HEAD~1 → HEAD (default)
brain diff show HEAD~5 HEAD          # last 5 commits
brain diff show main feature/auth    # branch comparison
brain diff show abc1234 def5678      # specific commit SHAs`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output</h2>
      <CodeBlock>{`Files Changed: 3

── Modified Files ──
• src/api.py
• src/utils.py

── Added Files ──
• src/validators.py

── Deleted Files ──
• src/legacy.py

File: src/api.py
  Functions Added:    validate_user
  Functions Removed:  (none)
  Functions Modified: create_user, delete_user`}</CodeBlock>

      <Callout type="note">
        Function-level output only applies to Python files. Non-Python files receive file-level diff only.
        Mode can be changed to <code className="font-mono text-xs">file</code> in brain.yaml: <code className="font-mono text-xs">diff.mode: file</code>
      </Callout>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Git ref reference</h2>
      <div className="overflow-hidden rounded-xl border border-[#30363D]">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#30363D] bg-[#11161D]">
            <th className="px-4 py-2 text-left font-mono text-xs text-[#7D8590]">Ref</th>
            <th className="px-4 py-2 text-left font-mono text-xs text-[#7D8590]">Meaning</th>
          </tr></thead>
          <tbody>
            {[["HEAD", "Current commit"], ["HEAD~1", "Previous commit"], ["HEAD~5", "5 commits before HEAD"], ["main", "Branch tip"], ["abc1234", "Specific commit SHA"]].map(([r, m], i, arr) => (
              <tr key={r} className={i < arr.length - 1 ? "border-b border-[#202938]" : ""}>
                <td className="px-4 py-2.5"><code className="font-mono text-xs text-[#39C5CF]">{r}</code></td>
                <td className="px-4 py-2.5 text-xs text-[#7D8590]">{m}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PageNav prev={{ href: "/docs/project-doctor", label: "brain project doctor" }} next={{ href: "/docs/diff-review", label: "brain diff review" }} />
    </article>
  );
}
