import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Convert JSON to CSV — Complete Guide | QuickKit",
  description:
    "Learn how to convert JSON data to CSV format using JavaScript, Python, and our free online JSON to CSV converter tool. Step-by-step examples with code.",
  openGraph: {
    title: "How to Convert JSON to CSV — QuickKit",
    description: "Step-by-step guide to converting JSON to CSV in JavaScript, Python, and online tools. Copy-paste ready code examples.",
    type: "article",
  },
};

export default function HowToJsonToCsvPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">How to Convert JSON to CSV</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
          Data Format Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          How to Convert JSON to CSV
        </h1>
        <p className="text-lg text-slate-500">
          JSON is great for APIs, CSV is great for spreadsheets. Here&apos;s how to convert between them
          in JavaScript, Python, and with our free online tool.
        </p>
      </header>

      <article className="prose max-w-none">
        <h2>Why Convert JSON to CSV?</h2>
        <p>
          JSON is the default data format for APIs and web applications. But when you need to open data
          in Excel, Google Sheets, or share it with non-technical stakeholders, CSV is the universal format.
        </p>
        <p>
          Common scenarios: exporting API responses to spreadsheets, sharing database query results,
          creating reports from web app data, or feeding data into analytics tools that expect CSV input.
        </p>

        <h2>Quick Method: Use Our Online Tool</h2>
        <p>
          The fastest way is to use our <Link href="/tools/json-to-csv" className="text-indigo-600 hover:underline">free JSON to CSV converter</Link>.
          Paste your JSON array, and it instantly converts to properly formatted CSV with headers.
        </p>
        <div className="not-prose my-6 p-4 rounded-xl border border-indigo-200 bg-indigo-50">
          <Link
            href="/tools/json-to-csv"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Try JSON to CSV Converter →
          </Link>
        </div>

        <h2>JavaScript Method</h2>
        <p>
          The core idea: extract all unique keys from the JSON objects to form the CSV header row,
          then map each object&apos;s values to a row, handling nested objects and escaping special characters.
        </p>
        <pre><code>{`function jsonToCsv(data) {
  if (!data.length) return '';
  
  // Extract all unique headers
  const headers = [...new Set(data.flatMap(obj => Object.keys(obj)))];
  
  // Build CSV rows
  const rows = data.map(obj =>
    headers.map(header => {
      const val = obj[header];
      // Handle nested objects and arrays
      const cell = typeof val === 'object' ? JSON.stringify(val) : val;
      // Escape CSV special characters
      return \`"\${String(cell ?? '').replace(/"/g, '""')}"\`;
    }).join(',')
  );
  
  return [headers.join(','), ...rows].join('\\n');
}

// Usage
const data = [
  { name: "Alice", age: 30, city: "NYC" },
  { name: "Bob", age: 25, city: "LA" }
];

console.log(jsonToCsv(data));
// "name","age","city"
// "Alice","30","NYC"
// "Bob","25","LA"`}</code></pre>

        <h2>Python Method</h2>
        <p>
          Python&apos;s built-in <code>csv</code> module and <code>json</code> module make this straightforward.
          For more complex cases, the <code>pandas</code> library handles it in one line.
        </p>
        <pre><code>{`import json
import csv
from io import StringIO

def json_to_csv(json_string):
    data = json.loads(json_string)
    if not data:
        return ""
    
    output = StringIO()
    writer = csv.DictWriter(output, fieldnames=data[0].keys())
    writer.writeheader()
    writer.writerows(data)
    return output.getvalue()

# Usage
json_data = '[{"name":"Alice","age":30},{"name":"Bob","age":25}]'
print(json_to_csv(json_data))
# name,age
# Alice,30
# Bob,25

# One-liner with pandas:
import pandas as pd
df = pd.read_json(json_data)
df.to_csv("output.csv", index=False)`}</code></pre>

        <h2>Common Pitfalls</h2>
        <ul>
          <li><strong>Nested objects:</strong> CSV is flat. You need to serialize nested JSON objects as strings or flatten them first.</li>
          <li><strong>Inconsistent keys:</strong> If objects in your array have different keys, you need to handle missing values (empty cells).</li>
          <li><strong>Special characters:</strong> Commas, quotes, and newlines in values must be properly escaped or the CSV will break.</li>
          <li><strong>Encoding:</strong> Always use UTF-8 encoding to handle international characters correctly.</li>
        </ul>

        <h2>When to Use CSV vs JSON</h2>
        <p>
          <strong>Use CSV when:</strong> Opening in Excel/Google Sheets, sharing with non-technical users,
          exporting for analytics, or when the data is tabular and flat.
        </p>
        <p>
          <strong>Use JSON when:</strong> Working with APIs, storing nested/hierarchical data, configuring
          applications, or when you need to preserve data types (numbers vs strings).
        </p>

        <h2>Related Tools</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          <Link href="/tools/csv-to-json" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">CSV to JSON Converter →</span>
            <span className="block text-slate-500 mt-1">Convert CSV data back to JSON format</span>
          </Link>
          <Link href="/tools/json-formatter" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">JSON Formatter →</span>
            <span className="block text-slate-500 mt-1">Beautify and validate your JSON data</span>
          </Link>
          <Link href="/tools/json-to-yaml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">JSON to YAML →</span>
            <span className="block text-slate-500 mt-1">Convert JSON to human-readable YAML</span>
          </Link>
          <Link href="/tools/json-to-xml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">JSON to XML →</span>
            <span className="block text-slate-500 mt-1">Convert JSON to XML format</span>
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "How to Convert JSON to CSV",
            description: "Step-by-step guide to converting JSON data to CSV format using JavaScript, Python, and online tools.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/how-to-convert-json-to-csv",
          }),
        }}
      />
    </div>
  );
}
