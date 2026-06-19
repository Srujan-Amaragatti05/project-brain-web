import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCommand, getDocs, DOCS_BASE_URL } from "@/lib/docs";
import {
  DocHeading,
  CodeBlock,
  FlagTable,
  PageNav,
  DocGif,
} from "@/components/docs/DocComponents";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const docs = await getDocs();
  if (!docs) return [];

  const params = [];
  for (const category in docs) {
    for (const slug in docs[category]) {
      params.push({
        category,
        slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const command = await getCommand(category, slug);

  if (!command) {
    return {
      title: "Command Not Found",
    };
  }

  return {
    title: `${command.command} — project-brain`,
    description: command.help,
  };
}

export default async function DynamicDocPage({ params }: PageProps) {
  const { category, slug } = await params;
  const cmd = await getCommand(category, slug);

  if (!cmd) {
    notFound();
  }

  const meta = cmd.metadata;

  return (
    <article className="max-w-3xl">
      <DocHeading
        badge={meta.category}
        title={cmd.command}
        subtitle={cmd.help}
      />

      {/* Metadata Bar */}
      {((meta.stability && meta.stability.trim() !== "") || (meta.introduced && meta.introduced.trim() !== "")) && (
        <div className="mb-8 flex flex-wrap gap-4 text-xs font-mono text-[#7D8590] border-b border-[#30363D] pb-4">
          {meta.stability && (
            <div className="flex items-center gap-1.5">
              <span>Stability:</span>
              <span className={`rounded px-1.5 py-0.5 font-semibold text-xs ${
                meta.stability.toLowerCase() === "stable"
                  ? "bg-[#1A201C] text-[#56D364] border border-[#56D364]/30"
                  : "bg-[#2D1F1C] text-[#F85149] border border-[#F85149]/30"
              }`}>
                {meta.stability}
              </span>
            </div>
          )}
          {meta.introduced && (
            <div className="flex items-center gap-1.5">
              <span>Introduced:</span>
              <span className="rounded bg-[#1C2128] px-1.5 py-0.5 text-[#C9D1D9] border border-[#30363D]">
                {meta.introduced}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Syntax</h2>
        <CodeBlock>{`${cmd.command} [options]`}</CodeBlock>
      </section>

      {/* Parameters */}
      {cmd.parameters && cmd.parameters.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Parameters</h2>
          <FlagTable
            flags={cmd.parameters.map((p) => ({
              flag: p.name,
              type: p.type,
              default: p.default || undefined,
              desc: p.help,
            }))}
          />
        </section>
      )}

      {/* Demo GIFs */}
      {meta.gifs && meta.gifs.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Demo</h2>
          {meta.gifs.map((gif) => (
            <DocGif key={gif} src={`${DOCS_BASE_URL}/gifs/${gif}`} alt={cmd.command} />
          ))}
        </section>
      )}

      {/* Prerequisites */}
      {meta.prerequisites && meta.prerequisites.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Prerequisites</h2>
          <ul className="space-y-2 text-sm text-[#B6C2CF]">
            {meta.prerequisites.map((req, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#3FB950]">✔</span>
                {req}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Consumes & Produces */}
      {((meta.consumes && meta.consumes.length > 0) || (meta.produces && meta.produces.length > 0)) && (
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          {meta.consumes && meta.consumes.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Consumes</h3>
              <div className="flex flex-wrap gap-2">
                {meta.consumes.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-[#1F242C] px-2.5 py-1 font-mono text-xs text-[#388BFD] border border-[#388BFD]/30"
                  >
                    📥 {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {meta.produces && meta.produces.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Produces</h3>
              <div className="flex flex-wrap gap-2">
                {meta.produces.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-[#1A201C] px-2.5 py-1 font-mono text-xs text-[#56D364] border border-[#56D364]/30"
                  >
                    📤 {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Examples */}
      {meta.examples && meta.examples.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Examples</h2>
          <div className="space-y-4">
            {meta.examples.map((ex, i) => (
              <CodeBlock key={i}>{ex}</CodeBlock>
            ))}
          </div>
        </section>
      )}

      {/* Workflow */}
      {meta.workflow && meta.workflow.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Workflow</h2>
          <div className="rounded-xl border border-[#30363D] bg-[#0D1117] p-5">
            <ol className="space-y-4">
              {meta.workflow.map((step, i) => (
                <li key={i} className="flex gap-4 text-sm text-[#B6C2CF]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1C2128] font-mono text-xs font-bold text-[#3FB950] border border-[#30363D]">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <code className="text-[#39C5CF]">{step}</code>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Errors & Failures */}
      {meta.errors && meta.errors.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Errors & Failures</h2>
          <ul className="space-y-2 text-sm text-[#B6C2CF]">
            {meta.errors.map((err, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className="text-[#F85149] shrink-0 font-mono">⚠️</span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Use Cases & Personas */}
      {((meta.use_cases && meta.use_cases.length > 0) || (meta.personas && meta.personas.length > 0)) && (
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          {meta.use_cases && meta.use_cases.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Use Cases</h3>
              <ul className="space-y-2 text-xs text-[#8B949E]">
                {meta.use_cases.map((uc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#3FB950]">•</span>
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {meta.personas && meta.personas.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Target Personas</h3>
              <div className="flex flex-wrap gap-2">
                {meta.personas.map((persona, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-[#21262D] px-2.5 py-1 font-mono text-xs text-[#C9D1D9] border border-[#30363D]"
                  >
                    👤 {persona}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Notes & Edge Cases */}
      {((meta.notes && meta.notes.length > 0) || (meta.edge_cases && meta.edge_cases.length > 0)) && (
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          {meta.notes && meta.notes.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Notes</h3>
              <ul className="space-y-2 text-xs text-[#8B949E]">
                {meta.notes.map((note, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#3FB950]">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {meta.edge_cases && meta.edge_cases.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7D8590]">Edge Cases</h3>
              <ul className="space-y-2 text-xs text-[#8B949E]">
                {meta.edge_cases.map((edge, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#F85149]">•</span>
                    {edge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Related Commands */}
      {meta.related && meta.related.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-[#E6EDF3]">Related Commands</h2>
          <div className="flex flex-wrap gap-2">
            {meta.related.map((rel) => (
              <span
                key={rel}
                className="rounded-md bg-[#1C2128] px-2 py-1 font-mono text-xs text-[#7D8590] border border-[#30363D]"
              >
                {rel}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <PageNav
        prev={
          cmd.navigation.prev
            ? {
                href: `/docs/${cmd.navigation.prev.category}/${cmd.navigation.prev.slug}`,
                label: cmd.navigation.prev.title,
              }
            : undefined
        }
        next={
          cmd.navigation.next
            ? {
                href: `/docs/${cmd.navigation.next.category}/${cmd.navigation.next.slug}`,
                label: cmd.navigation.next.title,
              }
            : undefined
        }
      />
    </article>
  );
}
