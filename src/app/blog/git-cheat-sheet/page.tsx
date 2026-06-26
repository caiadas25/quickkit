import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Cheat Sheet — Essential Commands for Everyday Development | QuickKit",
  description:
    "The only Git cheat sheet you need. Every essential command from staging and branching to rebashing, cherry-picking, and resolving merge conflicts. Copy-paste ready.",
  openGraph: {
    title: "Git Cheat Sheet — Essential Commands for Developers",
    description: "Every Git command you use daily, organized by workflow. Copy-paste ready.",
    type: "article",
  },
};

interface GitCommand {
  command: string;
  description: string;
  example?: string;
}

interface GitSection {
  title: string;
  commands: GitCommand[];
}

const sections: GitSection[] = [
  {
    title: "Getting Started",
    commands: [
      { command: "git init", description: "Initialize a new Git repository" },
      { command: "git clone <url>", description: "Clone a remote repository" },
      { command: "git clone --depth 1 <url>", description: "Shallow clone (latest commit only)" },
    ],
  },
  {
    title: "Staging & Committing",
    commands: [
      { command: "git add .", description: "Stage all changes" },
      { command: "git add <file>", description: "Stage a specific file" },
      { command: "git status", description: "Check working tree status" },
      { command: "git commit -m \"message\"", description: "Commit staged changes", example: "git commit -m \"feat: add user auth\"" },
      { command: "git commit --amend", description: "Modify the last commit (message or files)" },
      { command: "git diff --staged", description: "Show staged changes before committing" },
    ],
  },
  {
    title: "Branching",
    commands: [
      { command: "git branch", description: "List local branches" },
      { command: "git branch -a", description: "List all branches (local + remote)" },
      { command: "git branch <name>", description: "Create a new branch" },
      { command: "git checkout <branch>", description: "Switch to a branch" },
      { command: "git checkout -b <branch>", description: "Create and switch to a new branch", example: "git checkout -b feature/auth" },
      { command: "git branch -d <branch>", description: "Delete a branch" },
    ],
  },
  {
    title: "Merging & Rebasing",
    commands: [
      { command: "git merge <branch>", description: "Merge a branch into the current branch" },
      { command: "git rebase <branch>", description: "Rebase current branch onto another" },
      { command: "git rebase --abort", description: "Abort a rebase in progress" },
      { command: "git merge --abort", description: "Abort a merge in progress" },
    ],
  },
  {
    title: "Undoing Things",
    commands: [
      { command: "git restore <file>", description: "Discard changes in working directory", example: "git restore src/app.tsx" },
      { command: "git restore --staged <file>", description: "Unstage a file" },
      { command: "git reset HEAD~1", description: "Undo the last commit (keep changes)" },
      { command: "git reset --hard HEAD~1", description: "Undo the last commit (discard changes)", example: "⚠️ This destroys changes!" },
      { command: "git revert <commit>", description: "Create a new commit that undoes a specific commit" },
    ],
  },
  {
    title: "Stashing",
    commands: [
      { command: "git stash", description: "Stash current changes" },
      { command: "git stash list", description: "List all stashes" },
      { command: "git stash pop", description: "Apply and remove the latest stash" },
      { command: "git stash drop", description: "Delete the latest stash" },
    ],
  },
  {
    title: "Remote & Sync",
    commands: [
      { command: "git remote -v", description: "List remote repositories" },
      { command: "git fetch origin", description: "Download remote changes (no merge)" },
      { command: "git pull", description: "Fetch and merge remote changes" },
      { command: "git pull --rebase", description: "Fetch and rebase on remote changes" },
      { command: "git push", description: "Push local commits to remote" },
      { command: "git push -f origin main", description: "Force push (use with caution!)", example: "⚠️ Overwrites remote history" },
    ],
  },
  {
    title: "Inspecting History",
    commands: [
      { command: "git log --oneline", description: "Compact commit history" },
      { command: "git log --oneline --graph", description: "Visual branch history" },
      { command: "git log --author=\"name\"", description: "Filter by author" },
      { command: "git blame <file>", description: "Show who changed each line" },
      { command: "git show <commit>", description: "Show details of a specific commit" },
    ],
  },
  {
    title: "Useful Aliases",
    commands: [
      { command: "git config --global alias.co checkout", description: "Shorten checkout to `git co`" },
      { command: "git config --global alias.br branch", description: "Shorten branch to `git br`" },
      { command: "git config --global alias.st status", description: "Shorten status to `git st`" },
      { command: "git config --global alias.unstage 'restore --staged'", description: "Add `git unstage` command" },
    ],
  },
];

export default function GitCheatSheetPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Git Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Developer Reference — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Git Cheat Sheet
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every Git command you use daily, organized by workflow. Copy-paste ready.
            Bookmark this page and stop Googling the same commands.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-4 py-2 font-mono text-slate-600">Command</th>
                    <th className="text-left px-4 py-2 text-slate-600">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {section.commands.map((cmd) => (
                    <tr key={cmd.command} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2 font-mono text-xs text-indigo-700 whitespace-nowrap">
                        {cmd.command}
                      </td>
                      <td className="px-4 py-2 text-slate-600">
                        {cmd.description}
                        {cmd.example && (
                          <div className="text-xs text-slate-400 mt-1 font-mono">
                            {cmd.example}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Internal Links */}
        <section className="border-t border-slate-200 pt-8 mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/cron-expressions-explained" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">Cron Expressions →</span>
              <span className="block text-slate-500 mt-1">Schedule tasks with cron</span>
            </Link>
            <Link href="/blog/what-is-toml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">What Is TOML? →</span>
              <span className="block text-slate-500 mt-1">Config file format guide</span>
            </Link>
            <Link href="/blog/how-to-generate-uuids" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">How to Generate UUIDs →</span>
              <span className="block text-slate-500 mt-1">UUID generation guide</span>
            </Link>
            <Link href="/tools/json-formatter" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">JSON Formatter →</span>
              <span className="block text-slate-500 mt-1">Format and validate JSON</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Git Cheat Sheet — Essential Commands for Everyday Development",
            description: "Every Git command you use daily, organized by workflow. Copy-paste ready.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/git-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}