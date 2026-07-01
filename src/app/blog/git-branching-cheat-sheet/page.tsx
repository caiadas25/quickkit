import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Branching Cheat Sheet — Branch, Merge, Rebase & More | QuickKit",
  description:
    "Complete Git branching cheat sheet. Create branches, switch branches, merge, rebase, cherry-pick, and resolve conflicts. Every command with copy-paste examples.",
  openGraph: {
    title: "Git Branching Cheat Sheet — Every Branch Command",
    description: "Master Git branching: create, switch, merge, rebase, cherry-pick, and resolve conflicts. Copy-paste ready.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Git Branching Cheat Sheet — Complete Guide",
    description: "Every Git branching command explained. Merge vs rebase, conflict resolution, and workflow patterns.",
  },
};

export default function GitBranchingCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Git Branching Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Cheat Sheet — Updated July 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Git Branching Cheat Sheet
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Branching is Git&apos;s superpower. This cheat sheet covers every branching command you need —
            creating, switching, merging, rebasing, cherry-picking, and resolving conflicts.
            Every command is copy-paste ready.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#create" className="text-indigo-600 hover:underline">1. Create & Delete Branches</a>
            <a href="#switch" className="text-indigo-600 hover:underline">2. Switch & Checkout</a>
            <a href="#merge" className="text-indigo-600 hover:underline">3. Merging Branches</a>
            <a href="#rebase" className="text-indigo-600 hover:underline">4. Rebasing</a>
            <a href="#cherry-pick" className="text-indigo-600 hover:underline">5. Cherry-Pick</a>
            <a href="#conflicts" className="text-indigo-600 hover:underline">6. Resolving Conflicts</a>
            <a href="#workflows" className="text-indigo-600 hover:underline">7. Branch Workflows</a>
            <a href="#tips" className="text-indigo-600 hover:underline">8. Pro Tips</a>
          </div>
        </section>

        {/* Create Branches */}
        <section id="create" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Create & Delete Branches</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# Create a new branch (does NOT switch to it)
git branch feature/login

# Create and switch to a new branch
git checkout -b feature/login
# or (modern)
git switch -c feature/login

# Create a branch from a specific commit
git branch hotfix abc1234

# Create a branch from a remote branch
git checkout -b feature/login origin/feature/login

# Rename a branch
git branch -m old-name new-name

# Delete a branch (safe — only if fully merged)
git branch -d feature/old

# Force delete a branch (even if not merged)
git branch -D feature/abandoned

# Delete a remote branch
git push origin --delete feature/old`}
            </pre>
          </div>
        </section>

        {/* Switch Branches */}
        <section id="switch" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Switch & Checkout</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# Switch to a branch
git switch main
git checkout main          # older syntax

# Switch to the last branch you were on
git switch -

# Detach HEAD (checkout a commit, not a branch)
git checkout abc1234

# Switch and create if it doesn't exist
git switch -c new-feature

# List all local branches (* = current)
git branch

# List all branches including remote
git branch -a

# List branches with last commit
git branch -v

# Filter branches by pattern
git branch -l "feature/*"`}
            </pre>
          </div>
        </section>

        {/* Merging */}
        <section id="merge" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Merging Branches</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# Fast-forward merge (no merge commit)
git checkout main
git merge feature/login
# Only works if main hasn't diverged

# No-fast-forward merge (creates merge commit)
git merge --no-ff feature/login
# Always creates a merge commit — good for history

# Abort a merge
git merge --abort

# Merge with a custom merge message
git merge --no-ff feature/login -m "Merge login feature"

# Squash merge (combine all commits into one)
git merge --squash feature/login
git commit -m "Add login feature"

# Merge a specific commit from another branch
git cherry-pick abc1234`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">Fast-Forward vs Merge Commit</h3>
            <p className="text-sm text-slate-600">
              <strong>Fast-forward</strong>: Replays the branch commits directly onto main. Clean history, no merge commit.
              Use when the branch is a simple linear sequence. <strong>--no-ff</strong> always creates a merge commit,
              which preserves the fact that work happened on a separate branch. Many teams prefer <code className="bg-indigo-100 px-1 rounded">--no-ff</code> for feature branches.
            </p>
          </div>
        </section>

        {/* Rebasing */}
        <section id="rebase" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Rebasing</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# Rebase current branch onto main
git rebase main

# Rebase a specific branch
git rebase main feature/login

# Interactive rebase (rewrite last N commits)
git rebase -i HEAD~5

# Rebase onto a different base
git rebase --onto main old-base feature/login

# Continue after resolving conflicts
git rebase --continue

# Abort a rebase
git rebase --abort

# Skip a commit during interactive rebase
# (change "pick" to "skip" in the editor)

# Rebase onto a remote branch
git rebase origin/main`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2">⚠️ Golden Rule of Rebase</h3>
            <p className="text-sm text-slate-600">
              <strong>Never rebase commits that have been pushed to a shared branch.</strong> Rebasing rewrites
              commit history. If others have based their work on those commits, rebasing will cause chaos.
              Only rebase local commits or commits on a personal feature branch.
            </p>
          </div>
        </section>

        {/* Cherry-Pick */}
        <section id="cherry-pick" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Cherry-Pick</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# Cherry-pick a single commit
git cherry-pick abc1234

# Cherry-pick multiple commits
git cherry-pick abc1234 def5678

# Cherry-pick a range of commits
git cherry-pick abc1234..ghi9012

# Cherry-pick without committing (stage only)
git cherry-pick --no-commit abc1234

# Cherry-pick a merge commit
git cherry-pick -m 1 abc1234

# Abort a cherry-pick
git cherry-pick --continue
git cherry-pick --abort`}
            </pre>
          </div>
        </section>

        {/* Conflicts */}
        <section id="conflicts" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Resolving Conflicts</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# After a merge/rebase conflict, Git marks files:
<<<<<<< HEAD
current branch changes
=======
incoming branch changes
>>>>>>> feature/login

# Resolution steps:
# 1. Open the file and edit the conflict markers
# 2. Choose which changes to keep
# 3. Remove the <<<<<< ======= >>>>>> markers

# After resolving:
git add resolved-file.ts
git commit                    # for merge
git rebase --continue         # for rebase

# See which files have conflicts
git diff --name-only --diff-filter=U

# Use a merge tool
git mergetool

# Accept theirs (incoming changes)
git checkout --theirs conflicting-file.ts

# Accept ours (current changes)
git checkout --ours conflicting-file.ts`}
            </pre>
          </div>
        </section>

        {/* Workflows */}
        <section id="workflows" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Branch Workflows</h2>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Feature Branch Workflow</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6">
            <pre className="text-sm text-slate-300 font-mono">
{`# 1. Start from main
git checkout main
git pull

# 2. Create feature branch
git checkout -b feature/user-profile

# 3. Work, commit, push
git add .
git commit -m "Add user profile page"
git push -u origin feature/user-profile

# 4. Keep in sync with main
git fetch origin
git rebase origin/main

# 5. When done, create PR on GitHub/GitLab
# After PR is approved and merged:

# 6. Clean up
git checkout main
git pull
git branch -d feature/user-profile
git push origin --delete feature/user-profile`}
            </pre>
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Git Flow Workflow</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
{`# main = production-ready
# develop = integration branch
# feature/* = new features
# hotfix/* = production fixes
# release/* = release prep

# Start a feature
git checkout develop
git checkout -b feature/payment

# Finish a feature
git checkout develop
git merge --no-ff feature/payment
git branch -d feature/payment

# Start a hotfix
git checkout main
git checkout -b hotfix/crash-fix

# Finish a hotfix
git checkout main
git merge --no-ff hotfix/crash-fix
git checkout develop
git merge --no-ff hotfix/crash-fix
git branch -d hotfix/crash-fix`}
            </pre>
          </div>
        </section>

        {/* Pro Tips */}
        <section id="tips" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Pro Tips</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-1">Auto-delete merged branches</h3>
              <code className="text-sm bg-slate-100 px-2 py-0.5 rounded font-mono">git config --global branch.autoSetupMerge always</code>
              <p className="text-sm text-slate-500 mt-1">Git will track branches for automatic deletion after merge.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-1">Visualize branch history</h3>
              <code className="text-sm bg-slate-100 px-2 py-0.5 rounded font-mono">git log --oneline --graph --all --decorate</code>
              <p className="text-sm text-slate-500 mt-1">See a visual graph of all branches and their relationships.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-1">Prune stale remote branches</h3>
              <code className="text-sm bg-slate-100 px-2 py-0.5 rounded font-mono">git fetch --prune</code>
              <p className="text-sm text-slate-500 mt-1">Remove references to branches that no longer exist on the remote.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-1">Rename a branch on remote</h3>
              <code className="text-sm bg-slate-100 px-2 py-0.5 rounded font-mono">git branch -m old new && git push origin old:new && git push origin --delete old</code>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <Link href="/blog/git-commands-cheat-sheet" className="p-3 rounded border border-slate-200 bg-white hover:border-indigo-200 transition-colors text-sm">
              <span className="font-medium text-slate-800">Git Commands Cheat Sheet</span>
              <span className="block text-xs text-slate-400 mt-1">All Git commands</span>
            </Link>
            <Link href="/blog/git-cheat-sheet" className="p-3 rounded border border-slate-200 bg-white hover:border-indigo-200 transition-colors text-sm">
              <span className="font-medium text-slate-800">Git Cheat Sheet</span>
              <span className="block text-xs text-slate-400 mt-1">Quick reference</span>
            </Link>
            <Link href="/blog/bash-cheat-sheet" className="p-3 rounded border border-slate-200 bg-white hover:border-indigo-200 transition-colors text-sm">
              <span className="font-medium text-slate-800">Bash Cheat Sheet</span>
              <span className="block text-xs text-slate-400 mt-1">Shell commands</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
