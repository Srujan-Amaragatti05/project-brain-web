"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarData } from "@/lib/docs";

export default function DocsSidebar({ sidebarData }: { sidebarData: SidebarData | null }) {
  const pathname = usePathname();

  const staticSections = [
    {
      group: "Getting Started",
      links: [
        { href: "/docs", label: "Overview" },
        { href: "/docs/installation", label: "Installation" },
        { href: "/docs/quickstart", label: "Quick Start" },
        { href: "/docs/configuration", label: "brain.yaml Config" },
      ],
    },
  ];

  const contributingSections = [
    {
      group: "Contributing",
      links: [
        { href: "/docs/contributing", label: "Development Setup" },
        { href: "/docs/architecture", label: "Architecture" },
        { href: "/docs/community", label: "Community" },
      ],
    },
  ];

  return (
    <aside className="hidden w-52 flex-shrink-0 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#7D8590]">
          Docs
        </p>
        <nav className="space-y-5">
          {/* Static Getting Started */}
          {staticSections.map((section) => (
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

          {/* Dynamic Command Sections */}
          {sidebarData && Object.entries(sidebarData).map(([category, items]) => (
            <div key={category}>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#E6EDF3]">
                {category.replace(/_/g, " ")}
              </p>
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const href = `/docs/${item.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors ${
                          active
                            ? "bg-[#11161D] text-[#3FB950]"
                            : "text-[#7D8590] hover:bg-[#11161D] hover:text-[#E6EDF3]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Static Contributing */}
          {contributingSections.map((section) => (
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
