import Link from "next/link";
import Image from "next/image";

const GITHUB_URL = "https://github.com/Srujan-Amaragatti05/project-brain";
const PYPI_URL = "https://pypi.org/project/project-brain-cli/";

const FOOTER_LINKS = [
  {
    group: "Product",
    links: [
      { label: "Features",    href: "/#features" },
      { label: "How it works", href: "/#architecture" },
      { label: "CLI Reference", href: "/#cli" },
      { label: "Diagnostics",  href: "/#validation" },
    ],
  },
  {
    group: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "PyPI", href: PYPI_URL, external: true },
    ],
  },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0B0F14]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top row */}
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto]">
          {/* Brand */}
          <div className="max-w-xs">
          <div className="mb-1 flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="project-brain logo"
              width={60}
              height={70}
              className="h-20 w-auto rounded-none object-contain"
            />
            <div className="font-mono text-lg font-semibold text-[#E6EDF3]">
              <span className="text-[#3FB950]">project</span>
              <span className="text-[#7D8590]">-</span>
              <span>brain</span>
            </div>
            
          </div>
            <p className="mt-3 text-sm leading-relaxed text-[#7D8590]">
              Semantic intelligence for real codebases. AST-aware analysis,
              semantic diffs, and LLM-ready exports — 100% local.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#202938] bg-[#11161D] text-[#7D8590] transition-colors hover:border-[#30363D] hover:text-[#E6EDF3]"
                aria-label="GitHub Repository"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#7D8590]">
                {group.group}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#7D8590] transition-colors hover:text-[#E6EDF3]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#7D8590] transition-colors hover:text-[#E6EDF3]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-[#7D8590] md:flex-row">
          <span>
            © 2026 project-brain. Built by{" "}
            <a
              href={"https://srujan-portfolio-eight.vercel.app/"}
              target="_blank"
              rel="noreferrer"
              className="text-[#B6C2CF] transition-colors hover:text-[#E6EDF3]"
            >
              Srujan Amaragatti
            </a>
            .
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono">v1.1.0</span>
            <span aria-hidden="true">·</span>
            <span>MIT License</span>
            <span aria-hidden="true">·</span>
            <span>Python 3.10+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
