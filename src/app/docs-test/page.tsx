import { getDocs, getVersion } from "@/lib/docs";
import { DocHeading, Callout, CodeBlock } from "@/components/docs/DocComponents";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function DocsTestPage() {
  const version = await getVersion();
  const docs = await getDocs();

  const categories = docs ? Object.keys(docs) : [];
  const allCommands = docs
    ? Object.values(docs).flatMap((cat) => Object.values(cat))
    : [];
  
  const firstCommand = allCommands[0] || null;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <DocHeading
          badge="Connectivity Test"
          title="Documentation Bridge Verification"
          subtitle="Verifying external docs connectivity and data integrity."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#30363D] bg-[#0D1117] p-6 text-center">
            <p className="text-xs font-mono text-[#7D8590] uppercase tracking-widest mb-2">Version</p>
            <p className="text-2xl font-bold text-[#3FB950]">{version?.version || "Unknown"}</p>
          </div>
          <div className="rounded-xl border border-[#30363D] bg-[#0D1117] p-6 text-center">
            <p className="text-xs font-mono text-[#7D8590] uppercase tracking-widest mb-2">Commands</p>
            <p className="text-2xl font-bold text-[#3FB950]">{version?.command_count || allCommands.length}</p>
          </div>
          <div className="rounded-xl border border-[#30363D] bg-[#0D1117] p-6 text-center">
            <p className="text-xs font-mono text-[#7D8590] uppercase tracking-widest mb-2">Categories</p>
            <p className="text-2xl font-bold text-[#3FB950]">{categories.length}</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#E6EDF3] mb-4">Connection Status</h2>
          {docs ? (
            <Callout type="tip">
              Successfully connected to remote documentation API.
              <br />
              Generated at: <code className="text-xs">{version?.generated_at || "N/A"}</code>
            </Callout>
          ) : (
            <Callout type="warning">
              Failed to fetch documentation data. Check your network or the BASE_URL in <code className="text-xs">src/lib/docs.ts</code>.
            </Callout>
          )}
        </section>

        {firstCommand && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[#E6EDF3] mb-4">First Command Sample</h2>
            <div className="rounded-xl border border-[#30363D] bg-[#0D1117] p-6">
              <p className="text-sm font-bold text-[#E6EDF3] mb-2">{firstCommand.command}</p>
              <p className="text-sm text-[#7D8590] mb-4">{firstCommand.help}</p>
              <CodeBlock>{JSON.stringify(firstCommand.metadata, null, 2)}</CodeBlock>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
