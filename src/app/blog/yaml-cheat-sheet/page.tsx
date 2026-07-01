import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YAML Cheat Sheet — Syntax, Examples & Common Patterns | QuickKit",
  description:
    "The complete YAML cheat sheet. Scalars, lists, maps, anchors, multi-line strings, and merge keys. Every YAML feature with copy-paste examples for Docker Compose, Kubernetes, and CI/CD.",
  openGraph: {
    title: "YAML Cheat Sheet — Every Feature Explained",
    description: "Scalars, lists, maps, anchors, multi-line strings, and merge keys. Copy-paste ready.",
    type: "article",
  },
};

interface YamlSection {
  title: string;
  content: string;
  example: string;
  tip?: string;
}

const sections: YamlSection[] = [
  {
    title: "Scalars (Basic Values)",
    content: "Strings, numbers, booleans, and null. YAML is indentation-sensitive — use spaces, never tabs.",
    example: `name: John Smith          # string\nage: 30                   # integer\nprice: 19.99              # float\nactive: true              # boolean\ndeleted: false            # boolean\nnothing: null             # null\nversion: "3.8"            # force string`,
    tip: "Bare strings don't need quotes unless they start with special characters (?, :, {, }, [, ], &, *, #, |, >, !, %, @).",
  },
  {
    title: "Maps (Dictionaries)",
    content: "Key-value pairs. Nested maps use indentation.",
    example: `# Simple map\nperson:\n  name: Alice\n  age: 25\n\n# Compact flow style\nperson: { name: Alice, age: 25 }\n\n# Nested map\ndatabase:\n  host: localhost\n  port: 5432\n  credentials:\n    user: admin\n    password: secret`,
  },
  {
    title: "Lists (Sequences)",
    content: "Ordered collections using dash (-) syntax.",
    example: `# Block style\ncolors:\n  - red\n  - green\n  - blue\n\n# Inline flow style\ncolors: [red, green, blue]\n\n# List of maps\nusers:\n  - name: Alice\n    role: admin\n  - name: Bob\n    role: viewer`,
  },
  {
    title: "Multi-Line Strings",
    content: "Three styles for multi-line text: literal (|), folded (>), and stripped (+/-).",
    example: `# Literal block (|) — preserves newlines\ndescription: |\n  This is line one.\n  This is line two.\n  Empty lines preserved.\n\n# Folded (>) — folds newlines into spaces\nbio: >\n  This long text will be\n  folded into a single line\n\n# Literal strip (|-) — removes trailing newline\ntemplate: |-\n  First line\n  Last line\n\n# Folded strip (>-) — fold + remove trailing\nsummary: >-\n  This is a long text that\n  will be one line.`,
  },
  {
    title: "Anchors & References",
    content: "Reuse values with & (anchor) and * (alias). Avoids duplication.",
    example: `# Define an anchor with &\ndefaults: &default_settings\n  timeout: 30\n  retries: 3\n  log_level: info\n\n# Reference it with *\ndevelopment:\n  <<: *default_settings\n  debug: true\n\nproduction:\n  <<: *default_settings\n  debug: false`,
  },
  {
    title: "Merge Keys",
    content: "Merge a map into another using <<. Combined with anchors for DRY configs.",
    example: `base: &base\n  host: example.com\n  port: 8080\n  ssl: true\n\ndevelopment:\n  <<: *base\n  host: localhost\n  debug: true\n\nproduction:\n  <<: *base\n  host: api.production.com\n  replicas: 3`,
  },
  {
    title: "Multi-Document Files",
    content: "Separate documents in one file with --- (start) and ... (end).",
    example: `---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: my-config\ndata:\n  key: value`,
  },
  {
    title: "Comments",
    content: "Single-line comments with #. No multi-line comment syntax.",
    example: `# This is a comment\nname: value  # Inline comment\n\n# No block comments in YAML\n# Use multiple single-line comments\n# for multi-line explanations`,
  },
];

const yamlExamples: { title: string; code: string }[] = [
  {
    title: "Docker Compose",
    code: `version: "3.8"\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - NODE_ENV=production\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_PASSWORD: secret\nvolumes:\n  pgdata:`,
  },
  {
    title: "GitHub Actions",
    code: `name: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [18, 20, 22]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: \${{ matrix.node-version }}\n      - run: npm ci\n      - run: npm test`,
  },
  {
    title: "Kubernetes Deployment",
    code: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\n  labels:\n    app: web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n        - name: web\n          image: nginx:alpine\n          ports:\n            - containerPort: 80\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "250m"`,
  },
];

export default function YamlCheatSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            YAML Cheat Sheet
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            YAML (YAML Ain&apos;t Markup Language) is a human-readable data serialization format used in Docker Compose, Kubernetes, GitHub Actions, CI/CD pipelines, and configuration files. This cheat sheet covers every feature with copy-paste examples.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-2">{section.title}</h2>
              <p className="text-stone-500 text-sm mb-4">{section.content}</p>
              <pre className="bg-slate-50 border border-slate-200 rounded p-4 text-sm overflow-x-auto font-mono text-slate-700 whitespace-pre-wrap">
                {section.example}
              </pre>
              {section.tip && (
                <p className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-3 py-2">
                  <strong>Tip:</strong> {section.tip}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Real-World Examples */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-6">Real-World YAML Examples</h2>
          <div className="space-y-6">
            {yamlExamples.map((ex) => (
              <div key={ex.title} className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-bold text-stone-900 mb-3">{ex.title}</h3>
                <pre className="bg-slate-50 border border-slate-200 rounded p-4 text-sm overflow-x-auto font-mono text-slate-700 whitespace-pre-wrap">
                  {ex.code}
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-4">YAML Quick Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Key Syntax</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">key: value</code> — Map entry</li>
                <li><code className="bg-slate-100 px-1 rounded">- item</code> — List entry</li>
                <li><code className="bg-slate-100 px-1 rounded">&amp;anchor</code> — Define anchor</li>
                <li><code className="bg-slate-100 px-1 rounded">*alias</code> — Reference anchor</li>
                <li><code className="bg-slate-100 px-1 rounded">&lt;&lt;: *base</code> — Merge key</li>
                <li><code className="bg-slate-100 px-1 rounded">---</code> — Document separator</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">String Styles</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">|</code> — Literal (keep newlines)</li>
                <li><code className="bg-slate-100 px-1 rounded">&gt;</code> — Folded (newlines to spaces)</li>
                <li><code className="bg-slate-100 px-1 rounded">|-</code> — Literal, strip trailing newline</li>
                <li><code className="bg-slate-100 px-1 rounded">&gt;-</code> — Folded, strip trailing newline</li>
                <li><code className="bg-slate-100 px-1 rounded">&gt;+</code> — Folded, keep trailing newline</li>
                <li><code className="bg-slate-100 px-1 rounded">|+</code> — Literal, keep trailing newline</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Common Pitfalls</h2>
          <div className="space-y-3">
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-1">Tabs Are Forbidden</h3>
              <p className="text-red-600 text-sm">YAML uses only spaces for indentation. Mixing tabs and spaces causes parse errors. Configure your editor to use spaces.</p>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-1">Colon-After-Value Trap</h3>
              <p className="text-red-600 text-sm"><code className="bg-red-100 px-1">name: value: extra</code> is invalid. The colon must be followed by a space. Quote strings that contain colons.</p>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-1">Yes/No vs true/false</h3>
              <p className="text-red-600 text-sm">YAML treats <code className="bg-red-100 px-1">yes</code>, <code className="bg-red-100 px-1">no</code>, <code className="bg-red-100 px-1">on</code>, <code className="bg-red-100 px-1">off</code> as booleans. Quote them if you mean the literal string.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Cheat Sheets</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/json-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              JSON Cheat Sheet →
            </Link>
            <Link href="/blog/docker-compose-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Docker Compose Cheat Sheet →
            </Link>
            <Link href="/blog/kubernetes-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Kubernetes Cheat Sheet →
            </Link>
            <Link href="/blog/markdown-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Markdown Cheat Sheet →
            </Link>
            <Link href="/blog/bash-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Bash Cheat Sheet →
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
            headline: "YAML Cheat Sheet — Syntax, Examples & Common Patterns",
            description:
              "Complete YAML cheat sheet with scalars, maps, lists, multi-line strings, anchors, and merge keys. Copy-paste examples for Docker Compose, Kubernetes, and CI/CD.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
          }),
        }}
      />
    </div>
  );
}
