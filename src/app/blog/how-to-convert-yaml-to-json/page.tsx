import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Convert YAML to JSON — Quick Guide | QuickKit",
  description: "Learn how to convert YAML to JSON and back. Step-by-step guide for developers working with Docker, Kubernetes, and CI/CD configs.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>How to Convert YAML to JSON — A Developer&apos;s Guide</h1>
      <p className="text-slate-400 text-sm">June 25, 2026 · 4 min read</p>

      <p>YAML and JSON are the two most common data serialization formats in software development. Docker Compose uses YAML. Kubernetes manifests use YAML. APIs almost always use JSON. At some point, every developer needs to convert between them.</p>

      <h2>YAML vs JSON: What&apos;s the Difference?</h2>
      <p>Both formats represent the same data structures (objects, arrays, strings, numbers, booleans), but they look very different:</p>
      <ul>
        <li><strong>YAML</strong> uses indentation and is designed for humans. No quotes around strings, no trailing commas, no curly braces cluttering the view.</li>
        <li><strong>JSON</strong> uses braces and brackets. It&apos;s stricter but more universally supported across programming languages.</li>
      </ul>

      <h2>When You Need YAML to JSON Conversion</h2>
      <ul>
        <li><strong>APIs</strong> — Most REST APIs accept JSON, not YAML.</li>
        <li><strong>Configuration parsing</strong> — Many tools read YAML but your application logic works with JSON.</li>
        <li><strong>Data migration</strong> — Moving data between systems that use different formats.</li>
        <li><strong>Debugging</strong> — JSON is easier to paste into validation tools and debuggers.</li>
      </ul>

      <h2>How to Convert YAML to JSON Online</h2>
      <p>The fastest approach is a free online converter:</p>
      <ol>
        <li>Open the <Link href="/tools/yaml-to-json" className="text-indigo-600 hover:underline">YAML to JSON tool</Link></li>
        <li>Paste your YAML data into the input area</li>
        <li>Click &quot;Convert to JSON&quot; — get formatted or minified output</li>
        <li>Copy the result with one click</li>
      </ol>

      <h2>Common YAML to JSON Gotchas</h2>
      <ul>
        <li><strong>Unquoted strings that look like booleans</strong> — YAML treats <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code> as booleans. JSON will convert them to <code>true</code>/<code>false</code>.</li>
        <li><strong>Numbers vs strings</strong> — YAML auto-detects types. A zip code like <code>00123</code> becomes the number <code>123</code>. Quote it in YAML to keep it as a string.</li>
        <li><strong>Null values</strong> — Empty YAML values become <code>null</code> in JSON.</li>
      </ul>

      <h2>Going the Other Way: JSON to YAML</h2>
      <p>Sometimes you need the reverse — converting JSON to YAML for a Docker Compose file or Kubernetes manifest. Use the <Link href="/tools/json-to-yaml" className="text-indigo-600 hover:underline">JSON to YAML converter</Link> for that.</p>
      <p>YAML is especially useful when you want to:</p>
      <ul>
        <li>Write configuration that humans will edit by hand</li>
        <li>Add comments (YAML supports <code>#</code> comments, JSON doesn&apos;t)</li>
        <li>Create multi-line strings with <code>│</code> or <code>&gt;</code> blocks</li>
      </ul>

      <h2>Try It Now</h2>
      <div className="not-prose mt-6 flex gap-3">
        <Link href="/tools/yaml-to-json" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          YAML → JSON
        </Link>
        <Link href="/tools/json-to-yaml" className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 text-white font-medium hover:bg-slate-800 transition">
          JSON → YAML
        </Link>
      </div>
    </article>
  );
}
