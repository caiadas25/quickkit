import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JSON Cheat Sheet — Complete Reference for Developers | QuickKit",
  description:
    "JSON syntax reference with examples. Data types, objects, arrays, nested data, validation, and common patterns. Copy-paste ready examples in JavaScript and Python.",
  openGraph: {
    title: "JSON Cheat Sheet — QuickKit",
    description: "Complete JSON syntax reference with examples. Data types, objects, arrays, and more.",
    type: "article",
  },
};

export default function JSONCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">JSON Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
            Developer Reference
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            JSON Cheat Sheet
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Everything you need to know about JSON syntax, data types, and common patterns.
            Use our <Link href="/tools/json-formatter" className="text-indigo-600 hover:underline">JSON Formatter</Link> and{" "}
            <Link href="/tools/json-to-csv" className="text-indigo-600 hover:underline">JSON to CSV converter</Link> to work with your data.
          </p>
        </header>

        {/* Basic Types */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Data Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Example</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-mono text-indigo-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">"hello"</td>
                  <td className="py-3 px-4">Double quotes required. No single quotes.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-mono text-indigo-600">number</td>
                  <td className="py-3 px-4 font-mono text-sm">42, 3.14, -1, 1e10</td>
                  <td className="py-3 px-4">No quotes. No trailing zeros (use 3.1 not 3.10).</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-mono text-indigo-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true, false</td>
                  <td className="py-3 px-4">Lowercase. Not True/False.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-mono text-indigo-600">null</td>
                  <td className="py-3 px-4 font-mono text-sm">null</td>
                  <td className="py-3 px-4">Lowercase. Not "null", not None, not 0.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-mono text-indigo-600">object</td>
                  <td className="py-3 px-4 font-mono text-sm">{"{ }"}</td>
                  <td className="py-3 px-4">Key-value pairs. Keys must be strings.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-indigo-600">array</td>
                  <td className="py-3 px-4 font-mono text-sm">[ ]</td>
                  <td className="py-3 px-4">Ordered list. Can mix types.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Objects */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Objects</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`{
  "name": "Alice",
  "age": 30,
  "active": true,
  "address": null
}`}
          </pre>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Keys <strong>must</strong> be strings wrapped in double quotes</li>
            <li>• No trailing commas allowed: <code className="bg-slate-100 px-1 rounded text-red-600">{"{"} "a": 1, "b": 2, {"}"}</code></li>
            <li>• No comments allowed in JSON</li>
            <li>• No undefined, NaN, Infinity, or functions</li>
          </ul>
        </section>

        {/* Arrays */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Arrays</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`// Simple array
[1, 2, 3]

// Mixed types
["hello", 42, true, null]

// Nested objects
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}
          </pre>
        </section>

        {/* Nested Structures */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Nested Structures</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "scores": [95, 87, 91],
      "address": {
        "city": "Portland",
        "zip": "97201"
      }
    },
    {
      "id": 2,
      "name": "Bob",
      "scores": [88, 92, 85],
      "address": {
        "city": "Seattle",
        "zip": "98101"
      }
    }
  ]
}`}
          </pre>
        </section>

        {/* Escape Characters */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Escape Characters</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Escape</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Result</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">\\</td><td className="py-2 px-4">Backslash</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">"</td><td className="py-2 px-4">Double quote</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">/</td><td className="py-2 px-4">Forward slash</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">\\b</td><td className="py-2 px-4">Backspace</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">\\f</td><td className="py-2 px-4">Form feed</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">\\n</td><td className="py-2 px-4">Newline</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2 px-4 font-mono">\\r</td><td className="py-2 px-4">Carriage return</td></tr>
                <tr><td className="py-2 px-4 font-mono">\\t</td><td className="py-2 px-4">Tab</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-red-200 bg-red-50">
              <p className="text-red-700 font-mono text-sm mb-2">❌ Wrong</p>
              <pre className="text-red-600 text-xs font-mono">{"{ 'name': 'Alice' }"}</pre>
              <p className="text-red-600 text-xs mt-2">Single quotes not allowed</p>
            </div>
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <p className="text-green-700 font-mono text-sm mb-2">✅ Correct</p>
              <pre className="text-green-600 text-xs font-mono">{"{ \"name\": \"Alice\" }"}</pre>
              <p className="text-green-600 text-xs mt-2">Double quotes required</p>
            </div>
            <div className="p-4 rounded-lg border border-red-200 bg-red-50">
              <p className="text-red-700 font-mono text-sm mb-2">❌ Wrong</p>
              <pre className="text-red-600 text-xs font-mono">{"{ \"a\": 1, \"b\": 2, }"}</pre>
              <p className="text-red-600 text-xs mt-2">Trailing comma not allowed</p>
            </div>
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <p className="text-green-700 font-mono text-sm mb-2">✅ Correct</p>
              <pre className="text-green-600 text-xs font-mono">{"{ \"a\": 1, \"b\": 2 }"}</pre>
              <p className="text-green-600 text-xs mt-2">No trailing comma</p>
            </div>
            <div className="p-4 rounded-lg border border-red-200 bg-red-50">
              <p className="text-red-700 font-mono text-sm mb-2">❌ Wrong</p>
              <pre className="text-red-600 text-xs font-mono">{"{ \"name\": undefined }"}</pre>
              <p className="text-red-600 text-xs mt-2">undefined is not valid JSON</p>
            </div>
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <p className="text-green-700 font-mono text-sm mb-2">✅ Correct</p>
              <pre className="text-green-600 text-xs font-mono">{"{ \"name\": null }"}</pre>
              <p className="text-green-600 text-xs mt-2">Use null instead</p>
            </div>
          </div>
        </section>

        {/* Parse in JS */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Parsing in JavaScript</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`// Parse JSON string → object
const data = JSON.parse('{"name": "Alice", "age": 30}');

// Stringify object → JSON string
const json = JSON.stringify(data, null, 2);

// Pretty print with 2-space indent
console.log(JSON.stringify(data, null, 2));

// Check if valid JSON
try {
  JSON.parse(maybeJSON);
} catch (e) {
  console.error("Invalid JSON:", e.message);
}`}
          </pre>
        </section>

        {/* Parse in Python */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Parsing in Python</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`import json

# Parse JSON string → dict
data = json.loads('{"name": "Alice", "age": 30}')

# Dict → JSON string
json_str = json.dumps(data, indent=2)

# Read JSON from file
with open("data.json") as f:
    data = json.load(f)

# Write JSON to file
with open("output.json", "w") as f:
    json.dump(data, f, indent=2)`}
          </pre>
        </section>

        {/* JSON Schema */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JSON Schema Validation</h2>
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-slate-300">
{`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age":  { "type": "integer", "minimum": 0 },
    "email":{ "type": "string", "format": "email" },
    "tags": {
      "type": "array",
      "items": { "type": "string" },
      "uniqueItems": true
    }
  },
  "required": ["name", "age"],
  "additionalProperties": false
}`}
          </pre>
        </section>

        {/* Related Tools */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Related Tools</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/tools/json-formatter" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">🔧</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">JSON Formatter</p>
              <p className="text-slate-500 text-sm">Beautify and validate JSON</p>
            </Link>
            <Link href="/tools/json-to-csv" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">📊</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">JSON to CSV</p>
              <p className="text-slate-500 text-sm">Convert JSON to CSV format</p>
            </Link>
            <Link href="/tools/json-to-xml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">📄</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">JSON to XML</p>
              <p className="text-slate-500 text-sm">Convert JSON to XML format</p>
            </Link>
            <Link href="/tools/json-to-yaml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">📝</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">JSON to YAML</p>
              <p className="text-slate-500 text-sm">Convert JSON to YAML format</p>
            </Link>
            <Link href="/tools/csv-to-json" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">🔄</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">CSV to JSON</p>
              <p className="text-slate-500 text-sm">Convert CSV to JSON format</p>
            </Link>
            <Link href="/tools/yaml-to-json" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all group">
              <span className="text-2xl">🔄</span>
              <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-2">YAML to JSON</p>
              <p className="text-slate-500 text-sm">Convert YAML to JSON format</p>
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "JSON Cheat Sheet — Complete Reference for Developers",
            description: "JSON syntax reference with examples. Data types, objects, arrays, nested data, and common patterns.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
          }),
        }}
      />
    </div>
  );
}
