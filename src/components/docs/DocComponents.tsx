import Link from "next/link";

export function CodeBlock({ children }: { children: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#30363D] bg-[#0D1117] p-4">
      <pre className="font-mono text-sm leading-7 text-[#E6EDF3]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function Callout({
  type,
  children,
}: {
  type: "note" | "warning" | "tip";
  children: React.ReactNode;
 }) {
  const s = {
    note:    { accent: "#58A6FF", bg: "#0d1320", label: "Note" },
    warning: { accent: "#F85149", bg: "#1a0d0d", label: "Warning" },
    tip:     { accent: "#3FB950", bg: "#0d1a0f", label: "Tip" },
  }[type];
  return (
    <div className="my-5 rounded-xl border-l-4 p-4" style={{ borderLeftColor: s.accent, backgroundColor: s.bg }}>
      <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: s.accent }}>{s.label}</p>
      <div className="text-sm leading-relaxed text-[#B6C2CF]">{children}</div>
    </div>
  );
}

export function FlagTable({ flags }: { flags: { flag: string; type?: string; default?: string; desc: string }[] }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-[#30363D]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#30363D] bg-[#11161D]">
            <th className="px-4 py-2 text-left font-mono text-[11px] text-[#7D8590]">Argument</th>
            {flags.some((f) => f.type)    && <th className="px-4 py-2 text-left font-mono text-[11px] text-[#7D8590]">Type</th>}
            {flags.some((f) => f.default) && <th className="px-4 py-2 text-left font-mono text-[11px] text-[#7D8590]">Default</th>}
            <th className="px-4 py-2 text-left font-mono text-[11px] text-[#7D8590]">Description</th>
          </tr>
        </thead>
        <tbody>
          {flags.map((f, i) => (
            <tr key={f.flag} className={i < flags.length - 1 ? "border-b border-[#202938]" : ""}>
              <td className="px-4 py-3"><code className="font-mono text-xs text-[#39C5CF]">{f.flag}</code></td>
              {flags.some((x) => x.type)    && <td className="px-4 py-3 font-mono text-xs text-[#7D8590]">{f.type ?? "—"}</td>}
              {flags.some((x) => x.default) && <td className="px-4 py-3 font-mono text-xs text-[#7D8590]">{f.default ?? "—"}</td>}
              <td className="px-4 py-3 text-xs text-[#7D8590]">{f.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PageNav({ prev, next }: { prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <div className="mt-14 flex justify-between border-t border-[var(--border)] pt-6 text-sm">
      {prev ? (
        <Link href={prev.href} className="text-[#7D8590] transition-colors hover:text-[#E6EDF3]">← {prev.label}</Link>
      ) : <span />}
      {next && (
        <Link href={next.href} className="text-[#7D8590] transition-colors hover:text-[#E6EDF3]">{next.label} →</Link>
      )}
    </div>
  );
}

export function DocHeading({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      {badge && (
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#3FB950]">{badge}</p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-[#E6EDF3] md:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-base leading-8 text-[#B6C2CF]">{subtitle}</p>}
    </div>
  );
}

export function DocGif({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#30363D] bg-[#0B0F14] shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-[#30363D] bg-[#161B22] px-4 py-2.5 select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]/90" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/90" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]/90" />
        </div>
        <span className="font-mono text-[11px] text-[#7D8590]">{alt}</span>
        <div className="w-12" />
      </div>
      {/* GIF Body */}
      <div className="relative w-full bg-[#0D1117] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ marginBottom: "-35px" }}
          className="w-full h-auto object-contain block"
          loading="lazy"
        />
      </div>
      {caption && (
        <div className="border-t border-[#30363D] bg-[#0D1117]/50 px-4 py-2.5 text-center text-xs text-[#7D8590] leading-relaxed font-mono">
          {caption}
        </div>
      )}
    </div>
  );
}
