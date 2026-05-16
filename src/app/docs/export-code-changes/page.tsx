import type { Metadata } from "next";
import { CodeBlock, FlagTable, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "brain export code_changes — project-brain Docs" };

export default function ExportCodeChangesPage() {
  return (
    <article>
      <DocHeading badge="Export Commands" title="brain export code_changes" subtitle="Exports only the changed functions between two Git refs — ideal for targeted LLM context." />
      <CodeBlock>{`brain export code_changes <from_ref> <to_ref>`}</CodeBlock>

      <FlagTable flags={[
        { flag: "from_ref", type: "string", desc: "Source Git reference (required)" },
        { flag: "to_ref",   type: "string", desc: "Target Git reference (required)" },
      ]} />

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Examples</h2>
      <CodeBlock>{`brain export code_changes HEAD~1 HEAD
brain export code_changes HEAD~3 HEAD
brain export code_changes main feature/auth`}</CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Output</h2>
      <CodeBlock>{`.brain/exports/code_changes.txt`}</CodeBlock>

      <h2 className="mb-3 mt-6 text-lg font-semibold text-[#E6EDF3]">Output format</h2>
      <CodeBlock>{`=== FILE: src/api.py ===

--- FUNCTION: create_user (UPDATED) ---
OLD:
def create_user(name):
    return User(name)

NEW:
def create_user(name, email):
    validate_email(email)
    return User(name, email)`}</CodeBlock>

      <PageNav prev={{ href: "/docs/export-file", label: "brain export file / dir" }} next={{ href: "/docs/testllm", label: "brain testllm test" }} />
    </article>
  );
}
