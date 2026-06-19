"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#architecture", label: "How it works" },
  { href: "/#cli", label: "CLI" },
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
  { href: "/feedback", label: "Feedback" },
];

const GITHUB_URL = "https://github.com/Srujan-Amaragatti05/project-brain";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#0B0F14]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.svg"
            alt="project-brain logo"
            width={40}
            height={50}
            className="h-12 object-contain w-auto rounded-none"
            priority
          />
          <span className="font-mono text-base font-semibold text-[#E6EDF3] transition-colors hover:text-white">
            <span className="text-[#3FB950]">project</span>
            <span className="text-[#7D8590]">-</span>
            <span>brain</span>
          </span>
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 text-sm text-[#B6C2CF] md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-[#11161D] hover:text-[#E6EDF3]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#202938] bg-[#11161D] px-4 py-2 text-sm text-[#B6C2CF] transition-all hover:border-[#30363D] hover:text-[#E6EDF3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
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
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-[#B6C2CF] transition-colors hover:bg-[#11161D] hover:text-[#E6EDF3] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full flex w-full flex-col border-b border-[var(--border)] bg-[#0B0F14] px-6 py-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1 text-sm text-[#B6C2CF]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition-colors hover:bg-[#11161D] hover:text-[#E6EDF3]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 rounded-lg border border-[#202938] px-3 py-2.5 transition-colors hover:border-[#30363D] hover:text-[#E6EDF3]"
              >
                GitHub
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
  );
}