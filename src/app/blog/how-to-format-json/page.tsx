import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Format JSON — A Complete Guide | QuickKit",
  description: "Learn why JSON formatting matters, common mistakes, and how to use a free online JSON formatter to clean up your data instantly.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>How to Format JSON — A Complete Guide</h1>
      <p className="text-slate-400 text-sm">June 24, 2026 · 3 min read</p>

      <p>JSON (JavaScript Object Notation) is the most widely used data format on the web. APIs return it. Config files use it. Databases store it. But raw, unformatted JSON is painful to read and debug.</p>

      <h2>Why JSON Formatting Matters</h2>
      <p>Unformatted JSON looks like this:</p>
      <pre><code>{'{"name":"John","age":30,"address":{"city":"New York","zip":"10001"},"hobbies":["reading","coding"]}'}</code></pre>
      <p>Formatted JSON is instantly readable:</p>
      <pre><code>{`{
  "name": "John",
  "age": 30,
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": [
    "reading",
    "coding"
  ]
}`}</code></pre>

      <h2>Common JSON Mistakes</h2>
      <ul>
        <li><strong>Trailing commas</strong> — JSON doesn&apos;t allow them. <code>[1, 2, 3,]</code> is invalid.</li>
        <li><strong>Single quotes</strong> — JSON requires double quotes.</li>
        <li><strong>Comments</strong> — Standard JSON doesn&apos;t support comments.</li>
        <li><strong>Unquoted keys</strong> — Keys must be quoted.</li>
      </ul>

      <h2>How to Format JSON Online</h2>
      <p>The fastest way to format JSON is with a free online tool:</p>
      <ol>
        <li>Open the <Link href="/tools/json-formatter" className="text-indigo-600 hover:underline">JSON Formatter</Link></li>
        <li>Paste your raw JSON into the input area</li>
        <li>Click &quot;Format&quot; — the tool validates and pretty-prints your JSON instantly</li>
        <li>Copy the formatted result with one click</li>
      </ol>
      <p>The formatter also highlights syntax errors and shows line numbers, so you can find and fix problems fast.</p>

      <h2>Minify JSON</h2>
      <p>Sometimes you need the opposite — compact JSON with no whitespace for production. Use the <strong>Minify</strong> button in the same tool to strip all unnecessary spaces.</p>

      <h2>Try It Now</h2>
      <div className="not-prose mt-6">
        <Link href="/tools/json-formatter" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          Open JSON Formatter →
        </Link>
      </div>
    </article>
  );
}
