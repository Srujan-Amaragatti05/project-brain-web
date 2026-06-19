export interface DocParameter {
  name: string;
  required: boolean;
  default: string | null;
  type: string;
  kind: "argument" | "option";
  help: string;
}

export interface DocMetadata {
  command: string;
  category: string;
  examples: string[];
  related: string[];
  outputs: string[];
  consumes: string[];
  produces: string[];
  prerequisites: string[];
  use_cases: string[];
  personas: string[];
  tags: string[];
  stability: string;
  introduced: string;
  gifs: string[];
  errors: string[];
  notes: string[];
  edge_cases: string[];
  workflow: string[];
}

export interface DocNavigationItem {
  title: string;
  category: string;
  slug: string;
}

export interface DocNavigation {
  prev: DocNavigationItem | null;
  next: DocNavigationItem | null;
}

export interface DocCommand {
  command: string;
  help: string;
  parameters: DocParameter[];
  metadata: DocMetadata;
  navigation: DocNavigation;
}

// category -> slug -> command
export type DocsData = Record<string, Record<string, DocCommand>>;

export interface SidebarItem {
  title: string;
  slug: string;
}

export type SidebarData = Record<string, SidebarItem[]>;

export interface VersionData {
  version: string;
  generated_at: string;
  command_count: number;
}

export const DOCS_BASE_URL = "https://srujan-amaragatti05.github.io/project-brain";

const BASE_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? DOCS_BASE_URL;

async function fetchFromDocs<T>(path: string): Promise<T | null> {
  const url = `${BASE_URL}/${path}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // ISR: Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch docs from ${url}: ${res.statusText}`);
      return null;
    }

    return await res.json() as T;
  } catch (error) {
    console.error(`Error fetching docs from ${url}:`, error);
    return null;
  }
}

export async function getDocs(): Promise<DocsData | null> {
  return fetchFromDocs<DocsData>("docs.json");
}

export async function getSidebar(): Promise<SidebarData | null> {
  return fetchFromDocs<SidebarData>("sidebar.json");
}

export async function getVersion(): Promise<VersionData | null> {
  return fetchFromDocs<VersionData>("version.json");
}

export async function getCommand(category: string, slug: string): Promise<DocCommand | null> {
  const docs = await getDocs();
  if (!docs) return null;
  return docs[category]?.[slug] || null;
}
