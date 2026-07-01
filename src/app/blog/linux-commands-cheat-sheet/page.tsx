import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Linux Commands Cheat Sheet — Essential Commands & Examples 2026 | QuickKit",
  description:
    "Complete Linux commands cheat sheet with copy-paste examples. File operations, text processing, networking, permissions, process management, and system monitoring.",
  openGraph: {
    title: "Linux Commands Cheat Sheet — QuickKit",
    description: "Every Linux command you use daily, with copy-paste examples.",
    type: "article",
  },
};

export default function LinuxCommandsCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Linux Commands Cheat Sheet",
    description: "Complete Linux commands cheat sheet covering file ops, text processing, networking, and system monitoring.",
    datePublished: "2026-07-01",
    author: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
    publisher: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Linux Commands Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Linux Commands Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every Linux command you use daily, with copy-paste examples. File operations, text processing, networking, permissions, and system monitoring.
            </p>
          </header>

          {/* Navigation */}
          <section className="mb-10">
            <div className="bg-slate-50 rounded-lg p-4 text-sm">
              <p className="font-semibold text-slate-700 mb-2">Jump to:</p>
              <div className="flex flex-wrap gap-2">
                {["File Operations", "Text Processing", "Permissions", "Networking", "Process Management", "System Monitoring", "Disk & Storage", "Compression", "User Management", "Shell Shortcuts"].map((section) => (
                  <a key={section} href={`#${section.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="px-2 py-1 bg-white border border-slate-200 rounded hover:bg-indigo-50 hover:border-indigo-300 transition-colors text-slate-600">
                    {section}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* File Operations */}
          <section className="mb-10" id="file-operations">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">File Operations</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Navigate directories
cd /path/to/dir       # Change directory
cd ~                  # Go to home directory
cd -                  # Go to previous directory
pwd                   # Print working directory

# List files
ls                    # List files in current dir
ls -la                # List all files (incl. hidden) with details
ls -lh                # Human-readable file sizes
ls -lt                # Sort by modification time
ls -ltr               # Sort by time, reversed (oldest last)

# Create & remove
mkdir -p dir/subdir   # Create nested directories
touch file.txt        # Create empty file or update timestamp
cp file.txt backup.txt          # Copy file
cp -r dir/ backup/              # Copy directory recursively
mv file.txt newname.txt         # Rename / move
rm file.txt                     # Delete file
rm -rf dir/                     # Delete directory recursively (careful!)

# Find files
find . -name "*.txt"                    # Find files by name
find . -type f -mtime -7               # Files modified in last 7 days
find . -name "*.log" -exec rm {} \\;    # Find and delete
locate filename                         # Fast search (uses index)

# Link files
ln -s /path/to/target linkname    # Symbolic link
ln /path/to/target linkname       # Hard link`}</pre>
            </div>
          </section>

          {/* Text Processing */}
          <section className="mb-10" id="text-processing">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Text Processing</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# View files
cat file.txt                # Print entire file
less file.txt               # Paginated view (q to quit)
head -n 20 file.txt         # First 20 lines
tail -n 20 file.txt         # Last 20 lines
tail -f /var/log/syslog     # Follow log in real time

# Search text
grep "pattern" file.txt             # Basic search
grep -i "pattern" file.txt          # Case-insensitive
grep -r "pattern" ./dir/            # Recursive search
grep -n "pattern" file.txt          # Show line numbers
grep -c "pattern" file.txt          # Count matches
grep -v "pattern" file.txt          # Invert (exclude matches)
grep -E "regex" file.txt            # Extended regex

# Sort & deduplicate
sort file.txt                        # Sort lines
sort -u file.txt                     # Sort + remove duplicates
sort -k2 -n file.txt                 # Sort by 2nd column numerically
uniq -c                              # Count adjacent duplicates (pipe from sort)

# Cut & awk
cut -d',' -f1,3 data.csv             # Extract columns 1 and 3 (comma-delimited)
awk '{print $1, $3}' file.txt        # Print columns 1 and 3 (whitespace)
awk -F: '{print $1}' /etc/passwd     # Set field delimiter
awk '$3 > 100' data.txt              # Filter rows where col 3 > 100

# Sed (stream editor)
sed 's/old/new/g' file.txt           # Replace all occurrences
sed -i 's/old/new/g' file.txt        # Replace in-place (modifies file)
sed -n '5,10p' file.txt              # Print lines 5-10
sed '/^#/d' config.txt               # Remove comment lines

# Word count
wc -l file.txt                       # Count lines
wc -w file.txt                       # Count words
wc -c file.txt                       # Count bytes`}</pre>
            </div>
          </section>

          {/* Permissions */}
          <section className="mb-10" id="permissions">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Permissions</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Numeric (octal) permissions
chmod 755 file          # rwxr-xr-x (owner: all, group/others: read+exec)
chmod 644 file          # rw-r--r-- (owner: read+write, others: read)
chmod 600 file          # rw------- (owner only)
chmod 777 file          # rwxrwxrwx (everyone — avoid in production)

# Symbolic permissions
chmod u+x script.sh     # Add execute for user
chmod g-w file          # Remove write for group
chmod o=r file          # Set others to read-only
chmod a+r file          # Add read for all

# Ownership
chown user:group file            # Change owner and group
chown -R user:group dir/         # Recursive

# Special permissions
chmod +s script.sh               # Setuid (run as file owner)
chmod g+s dir/                   # Setgid (new files inherit group)
chmod +t /tmp/                   # Sticky bit (only owner can delete)`}</pre>
            </div>
          </section>

          {/* Networking */}
          <section className="mb-10" id="networking">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Networking</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Connectivity
ping google.com                  # Test connectivity
traceroute google.com            # Trace route to host
mtr google.com                   # Combined ping + traceroute
dig google.com                   # DNS lookup
nslookup google.com              # DNS lookup (simpler)
host google.com                  # DNS lookup (simplest)

# Network interfaces
ip addr show                     # Show IP addresses
ip route show                    # Show routing table
ifconfig                         # Older interface config (deprecated)

# Ports & connections
netstat -tlnp                    # Listening TCP ports
ss -tlnp                         # Modern netstat replacement
lsof -i :8080                    # What's using port 8080
nmap -sT localhost                # Scan open ports

# Transfer
curl -O https://example.com/file.txt    # Download file
wget https://example.com/file.txt       # Download file
curl -X POST -d "data" url              # POST request
curl -H "Content-Type: application/json" -d '{"key":"val"}' url

# SSH & SCP
ssh user@host                            # Connect to remote
ssh -p 2222 user@host                    # Custom port
scp file.txt user@host:/path/            # Copy file to remote
scp user@host:/path/file.txt ./          # Copy file from remote
rsync -avz ./dir/ user@host:/path/dir/   # Sync directories`}</pre>
            </div>
          </section>

          {/* Process Management */}
          <section className="mb-10" id="process-management">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Process Management</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# View processes
ps aux                           # All running processes
ps aux | grep nginx              # Find specific process
top                              # Real-time process monitor
htop                             # Better top (if installed)

# Kill processes
kill PID                         # Send SIGTERM (graceful)
kill -9 PID                      # Send SIGKILL (forced)
killall nginx                    # Kill all processes by name
pkill -f "python script"         # Kill by pattern match

# Background jobs
command &                        # Run in background
jobs                             # List background jobs
fg %1                            # Bring job 1 to foreground
bg %1                            # Resume job 1 in background
nohup command &                  # Run detached from terminal

# Scheduling
crontab -e                       # Edit cron jobs
crontab -l                       # List cron jobs
at 2:00 PM                       # Schedule one-time job
atq                              # List scheduled at jobs`}</pre>
            </div>
          </section>

          {/* System Monitoring */}
          <section className="mb-10" id="system-monitoring">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">System Monitoring</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Disk usage
df -h                            # Filesystem disk usage
du -sh /path/to/dir              # Directory size
du -sh * | sort -rh              # Largest items in current dir
ncdu /path                       # Interactive disk usage (if installed)

# Memory
free -h                          # RAM and swap usage
vmstat 1 5                       # Memory stats, 5 samples at 1s

# System info
uname -a                         # Full system info
cat /etc/os-release              # OS distribution info
lscpu                            # CPU information
lsblk                            # Block devices (disks, partitions)
uptime                           # System uptime and load average

# Logs
journalctl -f                    # Follow systemd journal
journalctl -u nginx              # Logs for specific service
dmesg | tail                     # Kernel messages
last                             # Login history`}</pre>
            </div>
          </section>

          {/* Disk & Storage */}
          <section className="mb-10" id="disk--storage">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Disk & Storage</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Mount / unmount
mount /dev/sdb1 /mnt            # Mount partition
umount /mnt                     # Unmount
lsblk                           # List block devices

# Disk operations
fdisk -l                         # List partitions
blkid                            # Show partition UUIDs
mkfs.ext4 /dev/sdb1             # Format partition as ext4

# Swap
sudo swapon /dev/sdb2           # Enable swap
sudo swapoff /dev/sdb2          # Disable swap
free -h                          # Verify swap`}</pre>
            </div>
          </section>

          {/* Compression */}
          <section className="mb-10" id="compression">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Compression</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Tar + gzip (most common)
tar -czf archive.tar.gz dir/         # Create .tar.gz
tar -xzf archive.tar.gz              # Extract .tar.gz
tar -xzf archive.tar.gz -C /path     # Extract to specific dir

# Tar + bzip2 (better compression, slower)
tar -cjf archive.tar.bz2 dir/
tar -xjf archive.tar.bz2

# Tar + xz (best compression, slowest)
tar -cJf archive.tar.xz dir/
tar -xJf archive.tar.xz

# Zip / unzip
zip -r archive.zip dir/               # Create zip
unzip archive.zip                     # Extract zip
unzip archive.zip -d /path           # Extract to specific dir

# Gzip (single files only)
gzip file.txt                        # Compress (replaces file)
gunzip file.txt.gz                   # Decompress`}</pre>
            </div>
          </section>

          {/* User Management */}
          <section className="mb-10" id="user-management">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">User Management</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# User info
whoami                            # Current user
id                                # User ID, group ID, groups
who                               # Logged-in users

# Add / remove users
sudo adduser username             # Add user (interactive)
sudo useradd -m -s /bin/bash username   # Add user (scripted)
sudo userdel -r username          # Delete user and home dir

# Groups
sudo usermod -aG docker username  # Add user to group
groups username                   # Show user's groups

# Password
passwd                            # Change own password
sudo passwd username              # Change another user's password

# Sudo
sudo !!                           # Re-run last command as root
sudo -u user command              # Run command as different user`}</pre>
            </div>
          </section>

          {/* Shell Shortcuts */}
          <section className="mb-10" id="shell-shortcuts">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Shell Shortcuts</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# History
history                           # Show command history
!!                                # Re-run last command
!grep                             # Re-run last command starting with "grep"
Ctrl+R                            # Reverse search history

# Navigation
Ctrl+A                            # Move to start of line
Ctrl+E                            # Move to end of line
Ctrl+U                            # Delete to start of line
Ctrl+K                            # Delete to end of line
Ctrl+W                            # Delete word before cursor
Ctrl+Y                            # Paste deleted text (yank)

# Tab completion
Tab                               # Auto-complete file/command
Tab Tab                           # Show all completions

# Process control
Ctrl+C                            # Interrupt current command
Ctrl+Z                            # Suspend current command
Ctrl+D                            # End of input / exit shell

# Aliases (add to ~/.bashrc or ~/.zshrc)
alias ll='ls -la'
alias gs='git status'
alias gp='git push'
alias dc='docker compose'`}</pre>
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/bash-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Bash Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Shell scripting commands and patterns</span>
              </Link>
              <Link href="/blog/docker-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Docker Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Container commands and Dockerfiles</span>
              </Link>
              <Link href="/blog/kubernetes-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Kubernetes Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">kubectl commands and K8s concepts</span>
              </Link>
              <Link href="/blog/git-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Git Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Version control commands and workflows</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
