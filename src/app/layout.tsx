import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "project-brain — Semantic Intelligence for Real Codebases",
  description:
    "AST-aware repository analysis, semantic Git diffing, and LLM export. Developer intelligence that runs entirely on your machine.",
  keywords: [
    "developer tools",
    "CLI",
    "AST analysis",
    "semantic diff",
    "code intelligence",
    "LLM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}