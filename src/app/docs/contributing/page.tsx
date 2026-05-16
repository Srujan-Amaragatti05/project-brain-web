import type { Metadata } from "next";
import { CodeBlock, Callout, PageNav, DocHeading } from "@/components/docs/DocComponents";
export const metadata: Metadata = { title: "Contributing — project-brain Docs" };

export default function ContributingPage() {
  return (
    <article>
      <DocHeading badge="Contributing" title="Contributing to project-brain" subtitle="Thank you for contributing. This guide covers setup, tests, commit style, and PR guidelines." />

      <section id="setup">
        <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Development Setup</h2>
        <CodeBlock>{`git clone https://github.com/Srujan-Amaragatti05/project-brain
cd project-brain

# Windows
python -m venv env
env\\Scripts\\activate

# Linux / macOS
python3 -m venv env
source env/bin/activate

# Install with dev extras (includes pytest + pytest-cov)
pip install -e ".[dev]"`}</CodeBlock>
        <Callout type="tip">Use <code className="font-mono text-xs">pip install -e ".[dev]"</code> (not just <code className="font-mono text-xs">pip install -e .</code>) to get pytest and pytest-cov included.</Callout>
      </section>

      <section id="tests">
        <h2 className="mb-3 mt-10 text-lg font-semibold text-[#E6EDF3]">Running Tests</h2>
        <CodeBlock>{`pytest                          # run all 18 tests
pytest tests/test_cli.py        # run a specific test file
pytest --cov=project_brain      # with coverage report`}</CodeBlock>

        <h2 className="mb-3 mt-6 text-base font-semibold text-[#E6EDF3]">Test files</h2>
        <div className="overflow-hidden rounded-xl border border-[#30363D]">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#30363D] bg-[#11161D]">
              <th className="px-4 py-2 text-left font-mono text-xs text-[#7D8590]">File</th>
              <th className="px-4 py-2 text-left font-mono text-xs text-[#7D8590]">Covers</th>
            </tr></thead>
            <tbody>
              {[
                ["test_cli.py",                 "Core CLI commands"],
                ["test_analyzer.py",            "AST analyzer"],
                ["test_diff.py",                "Git diff logic"],
                ["test_config.py",              "Config loader"],
                ["test_advanced_cli.py",        "Edge cases for CLI"],
                ["test_advanced_config.py",     "Config edge cases"],
                ["test_advanced_diff.py",       "Diff edge cases"],
                ["test_advanced_export.py",     "Export system"],
                ["test_advanced_explain.py",    "Explain engine"],
                ["test_advanced_edge_cases.py", "Error handling"],
                ["test_advanced_logging.py",    "Logging system"],
              ].map(([file, desc], i, arr) => (
                <tr key={file} className={i < arr.length - 1 ? "border-b border-[#202938]" : ""}>
                  <td className="px-4 py-2.5"><code className="font-mono text-xs text-[#39C5CF]">{file}</code></td>
                  <td className="px-4 py-2.5 text-xs text-[#7D8590]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="guidelines">
        <h2 className="mb-3 mt-10 text-lg font-semibold text-[#E6EDF3]">Contribution Guidelines</h2>
        <ul className="space-y-2 text-sm text-[#B6C2CF]">
          {[
            "Keep PRs focused on one change",
            "Preserve CLI consistency — no breaking changes to existing commands",
            "Add tests for any new behavior",
            "Avoid adding unnecessary dependencies",
            "Maintain local-first philosophy — no cloud calls without explicit opt-in",
            "Update documentation if behavior changes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="text-[#3FB950]">•</span>{item}</li>
          ))}
        </ul>
      </section>

      <section id="commits">
        <h2 className="mb-3 mt-10 text-lg font-semibold text-[#E6EDF3]">Commit Style</h2>
        <CodeBlock>{`feat: add semantic export filtering
fix: improve git diff handling for merge commits
docs: update README installation steps
test: add edge case for empty repository
refactor: split exporter into smaller modules`}</CodeBlock>

        <h2 className="mb-3 mt-8 text-lg font-semibold text-[#E6EDF3]">Recommended workflow</h2>
        <CodeBlock>{`git checkout -b feature/my-feature    # create branch
# make your changes...
pytest                                # verify tests pass
git add .
git commit -m "feat: describe change"
git push origin feature/my-feature   # open PR`}</CodeBlock>
      </section>

      <section>
        <h2 className="mb-3 mt-10 text-lg font-semibold text-[#E6EDF3]">Before opening a PR</h2>
        <ul className="space-y-2 text-sm text-[#B6C2CF]">
          {["All tests pass (pytest)", "CLI commands work end-to-end", "Documentation updated if behavior changed", "No new dependencies added without discussion"].map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="text-[#39C5CF]">✓</span>{item}</li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <a href="https://github.com/Srujan-Amaragatti05/project-brain/issues" target="_blank" rel="noreferrer"
            className="rounded-xl border border-[#202938] bg-[#11161D] px-4 py-2.5 text-sm text-[#7D8590] transition-colors hover:text-[#E6EDF3]">
            Open an Issue →
          </a>
          <a href="https://github.com/Srujan-Amaragatti05/project-brain/discussions" target="_blank" rel="noreferrer"
            className="rounded-xl border border-[#202938] bg-[#11161D] px-4 py-2.5 text-sm text-[#7D8590] transition-colors hover:text-[#E6EDF3]">
            Start a Discussion →
          </a>
        </div>
      </section>

      <PageNav prev={{ href: "/docs/community", label: "brain community" }} next={{ href: "/docs/architecture", label: "Architecture" }} />
    </article>
  );
}
