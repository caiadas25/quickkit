import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is TOML and When Should You Use It? | QuickKit",
  description:
    "TOML (Tom's Obvious Minimal Language) is a config file format that's human-friendly and easy to parse. Learn the syntax, see examples, and convert TOML to JSON with our free tool.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>What Is TOML and When Should You Use It?</h1>
      <p className="text-slate-400 text-sm">June 26, 2026 · 6 min read</p>

      <p>TOML stands for <strong>Tom&apos;s Obvious Minimal Language</strong>. It&apos;s a configuration file format designed to be unambiguous, easy to read, and easy to parse. If you&apos;ve worked with Rust, Python, or any modern DevOps tool, you&apos;ve probably seen <code>.toml</code> files.</p>

      <h2>TOML vs YAML vs JSON for Config Files</h2>
      <p>Every format has tradeoffs:</p>
      <ul>
        <li><strong>JSON</strong> is universal but verbose. No comments, no trailing commas, and quoted keys make it tedious for hand-edited config.</li>
        <li><strong>YAML</strong> is readable but has gotchas: indentation sensitivity, implicit type conversion (<code>yes</code> becomes <code>true</code>), and a spec that&apos;s 90+ pages long.</li>
        <li><strong>TOML</strong> strikes a balance. It has a clear spec (~10 pages), supports comments, and maps directly to a hash table. No ambiguous types.</li>
      </ul>

      <h2>TOML Syntax Cheat Sheet</h2>
      <h3>Key-Value Pairs</h3>
      <pre><code>{`# Strings
title = "My App"
version = "1.0.0"

# Numbers
port = 8080
max_retries = 3.0

# Booleans
debug = true
verbose = false`}</code></pre>

      <h3>Sections (Tables)</h3>
      <pre><code>{`[server]
host = "localhost"
port = 8080

[database]
driver = "postgres"
host = "db.example.com"
port = 5432
name = "myapp"`}</code></pre>

      <h3>Nested Tables (Dotted Keys)</h3>
      <pre><code>{`# These are equivalent:
[server]
server.host = "localhost"
server.port = 8080

# vs
[server]
host = "localhost"
port = 8080`}</code></pre>

      <h3>Arrays</h3>
      <pre><code>{`# Inline arrays
colors = ["red", "green", "blue"]

# Multi-line arrays
fruits = [
  "apple",
  "banana",
  "cherry",
]

# Arrays of tables
[[players]]
name = "Alice"
score = 100

[[players]]
name = "Bob"
score = 85`}</code></pre>

      <h3>Dates and Times</h3>
      <pre><code>{`# Date
created = 2026-06-26

# DateTime (RFC 3339)
updated = 2026-06-26T14:30:00Z

# Time
opens_at = 09:00:00`}</code></pre>

      <h2>Where Is TOML Used?</h2>
      <ul>
        <li><strong>Cargo</strong> (Rust): <code>Cargo.toml</code> is the project manifest</li>
        <li><strong>Python</strong>: <code>pyproject.toml</code> is now the standard for packaging and tool config</li>
        <li><strong>Bun</strong>: <code>bunfig.toml</code></li>
        <li><strong> Hugo</strong>: Site configuration</li>
        <li><strong>GitHub Actions</strong>: Custom action metadata</li>
        <li><strong>Pnpm</strong>: <code>pnpm-workspace.yaml</code> alternatives</li>
      </ul>

      <h2>When to Use TOML</h2>
      <p>Use TOML when:</p>
      <ul>
        <li>You need a config file that humans edit by hand</li>
        <li>You want comments in your config</li>
        <li>Your config is moderately complex (nested sections, arrays)</li>
        <li>You want to avoid YAML&apos;s gotchas</li>
      </ul>

      <p>Stick with JSON when:</p>
      <ul>
        <li>You&apos;re exchanging data between systems (APIs, not config)</li>
        <li>Your config is simple enough that comments aren&apos;t needed</li>
        <li>You need maximum tooling support</li>
      </ul>

      <h2>Convert TOML to JSON</h2>
      <p>Have a TOML file you need to convert? Use our free <Link href="/tools/toml-to-json" className="text-indigo-600 hover:text-indigo-700">TOML to JSON Converter</Link> — paste your TOML and get valid JSON instantly.</p>

      <h2>Further Reading</h2>
      <ul>
        <li><a href="https://toml.io/en/latest" className="text-indigo-600 hover:text-indigo-700">Official TOML Specification</a></li>
        <li><a href="https://toml.io/en/latest" className="text-indigo-600 hover:text-indigo-700">TOML Wikipedia page</a></li>
      </ul>
    </article>
  );
}
