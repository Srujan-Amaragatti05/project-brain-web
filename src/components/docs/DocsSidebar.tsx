"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    group: "Getting Started",
    links: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/quickstart", label: "Quick Start" },
      { href: "/docs/configuration", label: "brain.yaml Config" },
    ],
  },
  {
    group: "Project Commands",
    links: [
      { href: "/docs/project-init", label: "brain project init" },
      { href: "/docs/project-analyze", label: "brain project analyze" },
      { href: "/docs/project-summary", label: "brain project summary" },
      { href: "/docs/project-doctor", label: "brain project doctor" },
    ],
  },
  {
    group: "Diff Commands",
    links: [
      { href: "/docs/diff-show", label: "brain diff show" },
      { href: "/docs/diff-review", label: "brain diff review" },
      { href: "/docs/diff-explain", label: "brain diff explain" },
    ],
  },
  {
    group: "Export Commands",
    links: [
      { href: "/docs/export-full-code", label: "brain export full_code" },
      { href: "/docs/export-file", label: "brain export file" },
      { href: "/docs/export-dir", label: "brain export dir" },
      { href: "/docs/export-code-changes", label: "brain export code_changes" },
    ],
  },
  {
    group: "LLM & Testing",
    links: [
      { href: "/docs/testllm", label: "brain testllm test" },
      { href: "/docs/offline", label: "Offline Mode" },
      { href: "/docs/api-keys", label: "API Key Setup" },
    ],
  },
  {
    group: "Community",
    links: [
      { href: "/docs/community", label: "brain community" },
    ],
  },
  {
    group: "Contributing",
    links: [
      { href: "/docs/contributing", label: "Development Setup" },
      { href: "/docs/contributing#tests", label: "Running Tests" },
      { href: "/docs/contributing#guidelines", label: "Guidelines" },
      { href: "/docs/contributing#commits", label: "Commit Style" },
      { href: "/docs/architecture", label: "Architecture" },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-52 flex-shrink-0 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#7D8590]">
          Docs
        </p>
        <nav className="space-y-5">
          {NAV.map((section) => (
            <div key={section.group}>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#E6EDF3]">
                {section.group}
              </p>
              <ul className="space-y-0.5">
                {section.links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors ${
                          active
                            ? "bg-[#11161D] text-[#3FB950]"
                            : "text-[#7D8590] hover:bg-[#11161D] hover:text-[#E6EDF3]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
