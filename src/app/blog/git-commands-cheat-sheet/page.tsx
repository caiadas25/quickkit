import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Commands Cheat Sheet — Essential Git Reference 2026 | QuickKit",
  description:
    "Complete Git commands cheat sheet. Every git command you use daily — staging, committing, branching, merging, rebasing, stashing, remote, and log. Copy-paste ready.",
  openGraph: {
    title: "Git Commands Cheat Sheet — Every Command You Need",
    description:
      "The complete Git cheat sheet. Branching, merging, staging, rebasing, stashing — every command with examples.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Git Commands Cheat Sheet — Complete Reference",
    description:
      "Every Git command explained with examples. Staging, committing, branching, rebasing, and more.",
  },
};

export default function GitCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Git Commands Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Cheat Sheet — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Git Commands Cheat Sheet — Essential Reference
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            The Git commands you use every day, organized by workflow. Every command is copy-paste ready with practical examples. Bookmark this page — you&apos;ll need it.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#setup" className="text-indigo-600 hover:underline">1. Setup & Configuration</a>
            <a href="#staging" className="text-indigo-600 hover:underline">2. Staging & Committing</a>
            <a href="#branching" className="text-indigo-600 hover:underline">3. Branching</a>
            <a href="#merging" className="text-indigo-600 hover:underline">4. Merging & Rebasing</a>
            <a href="#remote" className="text-indigo-600 hover:underline">5. Remote Repositories</a>
            <a href="#stashing" className="text-indigo-600 hover:underline">6. Stashing</a>
            <a href="#undo" className="text-indigo-600 hover:underline">7. Undoing Changes</a>
            <a href="#log" className="text-indigo-600 hover:underline">8. Log & Diff</a>
            <a href="#tags" className="text-indigo-600 hover:underline">9. Tags</a>
            <a href="#advanced" className="text-indigo-600 hover:underline">10. Advanced</a>
          </div>
        </section>

        {/* Setup */}
        <section className="mb-10" id="setup">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Setup & Configuration</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Set your identity (global)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Check all config
git config --list

# Initialize a new repo
git init

# Clone a repo
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder`}</pre>
          </div>
        </section>

        {/* Staging & Committing */}
        <section className="mb-10" id="staging">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Staging & Committing</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Stage a specific file
git add filename.js

# Stage all changes
git add .

# Stage only tracked files (no new files)
git add -u

# Interactive staging (choose hunks)
git add -p

# Check status
git status

# Commit with message
git commit -m "feat: add user authentication"

# Amend the last commit
git commit --amend
git commit --amend -m "better message"

# Add and commit in one step
git commit -am "fix: resolve login bug"`}</pre>
          </div>
        </section>

        {/* Branching */}
        <section className="mb-10" id="branching">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Branching</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# List branches
git branch

# List all branches (local + remote)
git branch -a

# Create a new branch
git branch feature/auth

# Switch to a branch
git checkout feature/auth
git switch feature/auth    # modern way

# Create and switch in one step
git checkout -b feature/auth
git switch -c feature/auth  # modern way

# Delete a branch
git branch -d feature/auth    # safe delete
git branch -D feature/auth    # force delete

# Rename current branch
git branch -m new-name

# Set upstream tracking
git branch --set-upstream-to=origin/feature/auth`}</pre>
          </div>
        </section>

        {/* Merging & Rebasing */}
        <section className="mb-10" id="merging">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Merging & Rebasing</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Merge a branch into current
git merge feature/auth

# Merge with no fast-forward (creates merge commit)
git merge --no-ff feature/auth

# Abort a merge
git merge --abort

# Rebase current branch onto main
git rebase main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Continue rebase after resolving conflicts
git rebase --continue

# Abort a rebase
git rebase --abort

# Squash merge (no merge commit, clean history)
git merge --squash feature/auth
git commit -m "feat: complete auth feature"`}</pre>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-indigo-700 font-medium mb-1">When to use which?</p>
            <p className="text-sm text-indigo-600">
              <strong>Merge</strong> preserves history and is safe for shared branches. <strong>Rebase</strong> creates linear history and is great for feature branches before merging. <strong>Squash merge</strong> combines all commits into one, keeping the main branch clean.
            </p>
          </div>
        </section>

        {/* Remote */}
        <section className="mb-10" id="remote">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Remote Repositories</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# List remotes
git remote -v

# Add a remote
git remote add origin https://github.com/user/repo.git

# Push to remote
git push origin main
git push -u origin feature/auth  # set upstream

# Pull with rebase (clean history)
git pull --rebase origin main

# Fetch all remotes
git fetch --all

# Prune deleted remote branches
git fetch --prune

# Delete a remote branch
git push origin --delete feature/auth`}</pre>
          </div>
        </section>

        {/* Stashing */}
        <section className="mb-10" id="stashing">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Stashing</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Stash current changes
git stash

# Stash with a message
git stash push -m "WIP: auth feature"

# Include untracked files
git stash -u

# List stashes
git stash list

# Apply most recent stash (keep in stash)
git stash apply

# Apply and remove most recent stash
git stash pop

# Apply a specific stash
git stash apply stash@{2}

# Drop a specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear`}</pre>
          </div>
        </section>

        {/* Undoing Changes */}
        <section className="mb-10" id="undo">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Undoing Changes</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Discard changes in working directory
git checkout -- filename.js
git restore filename.js         # modern way

# Unstage a file (keep changes)
git reset HEAD filename.js
git restore --staged filename.js  # modern way

# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Undo last commit (keep changes unstaged)
git reset HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new undo commit)
git revert abc1234

# Revert without committing
git revert --no-commit abc1234`}</pre>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-700 font-medium mb-1">Warning</p>
            <p className="text-sm text-amber-600">
              <code className="bg-amber-100 px-1 rounded">git reset --hard</code> permanently discards changes. Use <code className="bg-amber-100 px-1 rounded">git reset --soft</code> or <code className="bg-amber-100 px-1 rounded">git reset</code> (mixed) first. There is no undo for a hard reset.
            </p>
          </div>
        </section>

        {/* Log & Diff */}
        <section className="mb-10" id="log">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Log & Diff</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Simple log
git log

# Compact one-line log
git log --oneline

# Show last 5 commits
git log -5

# Show graph with branches
git log --oneline --graph --all

# Show file changes in log
git log --stat

# Show diff of last commit
git diff HEAD~1

# Show diff of staged changes
git diff --staged

# Show diff between two branches
git diff main..feature/auth

# Show who changed each line (blame)
git blame filename.js`}</pre>
          </div>
        </section>

        {/* Tags */}
        <section className="mb-10" id="tags">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Tags</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# List tags
git tag

# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag a past commit
git tag -a v0.9.0 abc1234 -m "Beta release"

# Push tags to remote
git push origin v1.0.0
git push origin --tags  # push all tags

# Delete a tag
git tag -d v1.0.0
git push origin --delete v1.0.0

# Checkout a tagged version
git checkout v1.0.0`}</pre>
          </div>
        </section>

        {/* Advanced */}
        <section className="mb-10" id="advanced">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Advanced</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre">{`# Cherry-pick a commit
git cherry-pick abc1234

# Interactive rebase to squash commits
git rebase -i HEAD~3

# Bisect to find bug introduction
git bisect start
git bisect bad     # current commit is bad
git bisect good v1.0  # this version was good
# Git checks out commits for you to test
git bisect reset

# Archive a branch as zip
git archive --format=zip main -o archive.zip

# Clean untracked files
git clean -fd

# Submodule add
git submodule add https://github.com/user/lib.git libs/lib

# Worktree (checkout multiple branches at once)
git worktree add ../feature-branch feature/auth`}</pre>
          </div>
        </section>

        {/* Quick Reference Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-700">Action</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Command</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3 text-slate-500">Undo last commit (keep changes)</td><td className="p-3 font-mono text-slate-900">git reset HEAD~1</td></tr>
                <tr><td className="p-3 text-slate-500">Undo last commit (discard)</td><td className="p-3 font-mono text-slate-900">git reset --hard HEAD~1</td></tr>
                <tr><td className="p-3 text-slate-500">Squash last 3 commits</td><td className="p-3 font-mono text-slate-900">git rebase -i HEAD~3</td></tr>
                <tr><td className="p-3 text-slate-500">Force push (dangerous)</td><td className="p-3 font-mono text-slate-900">git push --force-with-lease</td></tr>
                <tr><td className="p-3 text-slate-500">Find which commit introduced a bug</td><td className="p-3 font-mono text-slate-900">git bisect</td></tr>
                <tr><td className="p-3 text-slate-500">Delete remote branch</td><td className="p-3 font-mono text-slate-900">git push origin --delete branch</td></tr>
                <tr><td className="p-3 text-slate-500">See who changed each line</td><td className="p-3 font-mono text-slate-900">git blame file.js</td></tr>
                <tr><td className="p-3 text-slate-500">Compare two branches</td><td className="p-3 font-mono text-slate-900">git diff main..feature</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/blog/npm-cheat-sheet" className="text-indigo-600 hover:underline text-sm">
              NPM Commands Cheat Sheet →
            </Link>
            <Link href="/blog/css-flexbox-vs-grid" className="text-indigo-600 hover:underline text-sm">
              CSS Flexbox vs Grid →
            </Link>
            <Link href="/blog/javascript-regex-cheat-sheet" className="text-indigo-600 hover:underline text-sm">
              JavaScript Regex Cheat Sheet →
            </Link>
            <Link href="/blog/css-selectors-cheat-sheet" className="text-indigo-600 hover:underline text-sm">
              CSS Selectors Cheat Sheet →
            </Link>
          </div>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: "Git Commands Cheat Sheet — Essential Git Reference 2026",
              description: "Complete Git commands cheat sheet. Every git command you use daily with practical examples.",
              author: { "@type": "Organization", name: "QuickKit" },
              publisher: { "@type": "Organization", name: "QuickKit" },
              datePublished: "2026-06-30",
              dateModified: "2026-06-30",
              mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/git-commands-cheat-sheet",
            }),
          }}
        />
      </article>
    </div>
  );
}
