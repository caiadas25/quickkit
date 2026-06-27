import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bash Cheat Sheet — Linux Commands for Developers | QuickKit",
  description:
    "The complete Bash cheat sheet. File operations, text processing, process management, networking, and scripting. Every Linux command you use daily, copy-paste ready.",
  openGraph: {
    title: "Bash Cheat Sheet — Every Linux Command You Need",
    description:
      "File operations, text processing, process management, networking, and scripting. Organized by workflow with copy-paste examples.",
    type: "article",
  },
};

interface BashCommand {
  command: string;
  description: string;
  example?: string;
}

interface BashSection {
  title: string;
  commands: BashCommand[];
}

const sections: BashSection[] = [
  {
    title: "File & Directory Operations",
    commands: [
      { command: "ls -la", description: "List all files with details (permissions, size, date)" },
      { command: "ls -lh", description: "Human-readable file sizes (KB, MB, GB)" },
      { command: "cd /path/to/dir", description: "Change directory" },
      { command: "cd ..", description: "Go up one directory" },
      { command: "cd ~", description: "Go to home directory" },
      { command: "pwd", description: "Print current working directory" },
      { command: "mkdir -p dir/subdir", description: "Create directory (and parents)" },
      { command: "rm file.txt", description: "Remove a file" },
      { command: "rm -rf dir/", description: "Remove directory and all contents" },
      { command: "cp file.txt backup.txt", description: "Copy a file" },
      { command: "cp -r dir/ backup/", description: "Copy directory recursively" },
      { command: "mv old.txt new.txt", description: "Rename or move a file" },
      { command: "touch file.txt", description: "Create empty file or update timestamp" },
      { command: "find . -name '*.txt'", description: "Find files by name pattern" },
      { command: "find . -type f -mtime -7", description: "Find files modified in last 7 days" },
      { command: "find . -empty", description: "Find empty files and directories" },
      { command: "locate filename", description: "Find files using mlocate database" },
      { command: "ln -s target linkname", description: "Create a symbolic link" },
    ],
  },
  {
    title: "Text Processing",
    commands: [
      { command: "cat file.txt", description: "Display file contents" },
      { command: "less file.txt", description: "View file with scrolling (q to quit)" },
      { command: "head -20 file.txt", description: "Show first 20 lines" },
      { command: "tail -20 file.txt", description: "Show last 20 lines" },
      { command: "tail -f /var/log/syslog", description: "Follow a log file in real-time" },
      { command: "grep 'pattern' file.txt", description: "Search for a pattern in a file" },
      { command: "grep -r 'pattern' dir/", description: "Search recursively in a directory" },
      { command: "grep -i 'pattern' file.txt", description: "Case-insensitive search" },
      { command: "grep -n 'pattern' file.txt", description: "Show line numbers with matches" },
      { command: "grep -c 'pattern' file.txt", description: "Count matching lines" },
      { command: "sed 's/old/new/g' file.txt", description: "Replace text (stream editor)" },
      { command: "sed -i 's/old/new/g' file.txt", description: "Replace text in-place (modifies file)" },
      { command: "awk '{print $1}' file.txt", description: "Print first column of each line" },
      { command: "awk -F: '{print $1}' /etc/passwd", description: "Print first field using colon delimiter" },
      { command: "cut -d',' -f1,3 file.csv", description: "Extract columns 1 and 3 from CSV" },
      { command: "sort file.txt", description: "Sort lines alphabetically" },
      { command: "sort -n file.txt", description: "Sort numerically" },
      { command: "uniq -c", description: "Count duplicate lines (input must be sorted)" },
      { command: "wc -l file.txt", description: "Count lines in a file" },
    ],
  },
  {
    title: "Permissions & Ownership",
    commands: [
      { command: "chmod 755 script.sh", description: "Set permissions (rwxr-xr-x)" },
      { command: "chmod +x script.sh", description: "Make file executable" },
      { command: "chmod -R 644 dir/", description: "Set permissions recursively" },
      { command: "chown user:group file.txt", description: "Change file ownership" },
      { command: "chown -R user:group dir/", description: "Change ownership recursively" },
      { command: "ls -la file.txt", description: "View file permissions" },
    ],
  },
  {
    title: "Process Management",
    commands: [
      { command: "ps aux", description: "List all running processes" },
      { command: "ps aux | grep nginx", description: "Find a specific process" },
      { command: "top", description: "Interactive process monitor (q to quit)" },
      { command: "htop", description: "Enhanced process monitor (if installed)" },
      { command: "kill PID", description: "Send SIGTERM to a process" },
      { command: "kill -9 PID", description: "Force kill a process (SIGKILL)" },
      { command: "killall nginx", description: "Kill all processes by name" },
      { command: "nohup command &", description: "Run command in background (survives logout)" },
      { command: "jobs", description: "List background jobs" },
      { command: "fg %1", description: "Bring job 1 to foreground" },
      { command: "bg %1", description: "Resume job 1 in background" },
      { command: "free -h", description: "Show memory usage" },
      { command: "df -h", description: "Show disk space usage" },
      { command: "du -sh dir/", description: "Show directory size" },
    ],
  },
  {
    title: "Pipes & Redirection",
    commands: [
      { command: "cmd1 | cmd2", description: "Pipe output of cmd1 to cmd2" },
      { command: "cmd > file.txt", description: "Redirect stdout to file (overwrite)" },
      { command: "cmd >> file.txt", description: "Redirect stdout to file (append)" },
      { command: "cmd 2> error.log", description: "Redirect stderr to file" },
      { command: "cmd > out.txt 2>&1", description: "Redirect both stdout and stderr" },
      { command: "cmd < input.txt", description: "Read stdin from file" },
      { command: "cmd1 | tee output.txt", description: "Pipe and save output to file" },
      { command: "xargs", description: "Build commands from stdin" },
      { command: "find . -name '*.log' | xargs rm", description: "Remove all .log files" },
      { command: "cmd | sort | uniq -c | sort -rn", description: "Count and sort by frequency" },
    ],
  },
  {
    title: "Networking",
    commands: [
      { command: "curl https://example.com", description: "Make an HTTP request" },
      { command: "curl -I https://example.com", description: "Fetch headers only" },
      { command: "curl -o file.zip https://example.com/file.zip", description: "Download a file" },
      { command: "wget https://example.com/file.zip", description: "Download a file (with progress)" },
      { command: "ping google.com", description: "Test network connectivity" },
      { command: "dig example.com", description: "DNS lookup" },
      { command: "nslookup example.com", description: "DNS lookup (simpler)" },
      { command: "host example.com", description: "DNS lookup (simplest)" },
      { command: "ss -tlnp", description: "Show listening TCP ports" },
      { command: "netstat -tlnp", description: "Show listening TCP ports (older)" },
      { command: "ssh user@host", description: "SSH into a remote machine" },
      { command: "scp file.txt user@host:/path/", description: "Copy file to remote machine" },
      { command: "rsync -avz dir/ user@host:/path/", description: "Sync directory to remote" },
      { command: "ip addr show", description: "Show IP addresses" },
      { command: "ifconfig", description: "Show network interfaces (older)" },
    ],
  },
  {
    title: "Compression & Archives",
    commands: [
      { command: "tar -czf archive.tar.gz dir/", description: "Create gzipped tarball" },
      { command: "tar -xzf archive.tar.gz", description: "Extract gzipped tarball" },
      { command: "tar -cjf archive.tar.bz2 dir/", description: "Create bzip2 tarball" },
      { command: "tar -xjf archive.tar.bz2", description: "Extract bzip2 tarball" },
      { command: "zip -r archive.zip dir/", description: "Create zip archive" },
      { command: "unzip archive.zip", description: "Extract zip archive" },
      { command: "gzip file.txt", description: "Compress file with gzip" },
      { command: "gunzip file.txt.gz", description: "Decompress gzip file" },
    ],
  },
  {
    title: "System Info & Monitoring",
    commands: [
      { command: "uname -a", description: "Show system information" },
      { command: "hostname", description: "Show hostname" },
      { command: "uptime", description: "Show uptime and load averages" },
      { command: "whoami", description: "Show current user" },
      { command: "id", description: "Show user ID and group membership" },
      { command: "last", description: "Show login history" },
      { command: "dmesg | tail", description: "Show kernel messages" },
      { command: "journalctl -u service", description: "View systemd service logs" },
      { command: "systemctl status service", description: "Check service status" },
      { command: "systemctl start service", description: "Start a service" },
      { command: "systemctl stop service", description: "Stop a service" },
      { command: "systemctl restart service", description: "Restart a service" },
      { command: "crontab -e", description: "Edit cron jobs" },
      { command: "crontab -l", description: "List cron jobs" },
    ],
  },
  {
    title: "Useful One-Liners",
    commands: [
      { command: "history | grep 'cmd'", description: "Search command history" },
      { command: "!!", description: "Repeat last command" },
      { command: "sudo !!", description: "Repeat last command with sudo" },
      { command: "ctrl+r", description: "Reverse search command history" },
      { command: "ctrl+c", description: "Cancel current command" },
      { command: "ctrl+z", description: "Suspend current command" },
      { command: "ctrl+l", description: "Clear terminal" },
      { command: "echo $PATH", description: "Show PATH variable" },
      { command: "export VAR=value", description: "Set environment variable" },
      { command: "source ~/.bashrc", description: "Reload bash configuration" },
      { command: "watch -n 5 cmd", description: "Run command every 5 seconds" },
      { command: "timeout 10 cmd", description: "Run command with 10s timeout" },
      { command: "yes | cmd", description: "Auto-confirm prompts" },
    ],
  },
];

function CommandCard({ cmd }: { cmd: BashCommand }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-3 border-b border-slate-700/50 last:border-0">
      <code className="text-sm font-mono text-emerald-400 sm:w-2/5 shrink-0 break-all">
        {cmd.command}
      </code>
      <span className="text-sm text-slate-400 flex-1">{cmd.description}</span>
    </div>
  );
}

export default function BashCheatSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Bash Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-emerald-400 text-sm font-medium mb-2">Linux Reference — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bash Cheat Sheet — Linux Commands for Developers
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Every Bash command you use daily, organized by workflow. File operations, text processing,
            process management, networking, and scripting essentials. Copy-paste ready.
          </p>
        </header>

        {/* Quick Reference */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3">Keyboard Shortcuts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Tab</code>
              <span className="text-slate-400">Auto-complete commands and paths</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Ctrl+R</code>
              <span className="text-slate-400">Reverse search command history</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Ctrl+C</code>
              <span className="text-slate-400">Cancel current command</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Ctrl+D</code>
              <span className="text-slate-400">Exit shell (or send EOF)</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Ctrl+L</code>
              <span className="text-slate-400">Clear terminal screen</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">Ctrl+Z</code>
              <span className="text-slate-400">Suspend current process</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">!!</code>
              <span className="text-slate-400">Repeat last command</span>
            </div>
            <div className="flex gap-2">
              <code className="text-emerald-400 font-mono">!$</code>
              <span className="text-slate-400">Last argument of previous command</span>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-5 py-2">
                {section.commands.map((cmd, i) => (
                  <CommandCard key={i} cmd={cmd} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Internal Links */}
        <section className="border-t border-slate-700 pt-8 mt-12">
          <h2 className="text-lg font-bold text-white mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/docker-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-emerald-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Docker Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Containers, images, and Docker Compose</span>
            </Link>
            <Link href="/blog/git-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-emerald-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Git Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Branching, merging, and workflows</span>
            </Link>
            <Link href="/blog/sql-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-emerald-600/50 transition-all text-sm">
              <span className="text-white font-semibold">SQL Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">SELECT, JOIN, and query patterns</span>
            </Link>
            <Link href="/blog/regex-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-emerald-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Regex Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Patterns, character classes, and quantifiers</span>
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
            "@type": "TechArticle",
            headline: "Bash Cheat Sheet — Linux Commands for Developers",
            description:
              "Complete Bash cheat sheet covering file operations, text processing, process management, networking, and scripting.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            mainEntityOfPage:
              "https://quickkit-nine.vercel.app/blog/bash-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
