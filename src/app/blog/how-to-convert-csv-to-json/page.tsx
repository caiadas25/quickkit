import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Convert CSV to JSON — Complete Guide | QuickKit",
  description:
    "Learn how to convert CSV data to JSON format using JavaScript, Python, and our free online CSV to JSON converter tool. Step-by-step examples with code.",
  openGraph: {
    title: "How to Convert CSV to JSON — QuickKit",
    description:
      "Step-by-step guide to converting CSV to JSON in JavaScript, Python, and online tools. Copy-paste ready code examples.",
    type: "article",
  },
};

export default function HowToConvertCsvToJsonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">How to Convert CSV to JSON</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
          Data Format Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          How to Convert CSV to JSON
        </h1>
        <p className="text-lg text-slate-500">
          CSV is great for spreadsheets, JSON is great for APIs. Here&apos;s how to convert between them
          in JavaScript, Python, and with our free online tool.
        </p>
      </header>

      <article className="prose max-w-none">
        <h2>Why Convert CSV to JSON?</h2>
        <p>
          CSV (Comma-Separated Values) is the lingua franca of data exports. Most databases, spreadsheets,
          and analytics tools export to CSV. But when you need to consume that data in a web app or API,
          JSON is the standard format.
        </p>
        <p>
          Common scenarios: importing spreadsheet data into a React app, feeding CSV exports to a REST API,
          transforming database dumps into frontend-ready data, or cleaning up messy data with proper type handling.
        </p>

        <h2>Quick Method: Use Our Online Tool</h2>
        <p>
          The fastest way is to use our <Link href="/tools/csv-to-json" className="text-indigo-600 hover:underline">free CSV to JSON converter</Link>.
          Paste your CSV data, and it instantly converts to a JSON array of objects with proper headers.
        </p>
        <div className="not-prose my-6 p-4 rounded-xl border border-indigo-200 bg-indigo-50">
          <Link
            href="/tools/csv-to-json"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Try the CSV to JSON Converter →
          </Link>
        </div>

        <h2>Method 1: JavaScript (Browser)</h2>
        <p>
          Here&apos;s a lightweight function that parses CSV strings into JSON objects:
        </p>
        <pre><code className="language-javascript">{`function csvToJson(csv) {
  const lines = csv.trim().split("\\n");
  const headers = lines[0].split(",").map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    return headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {});
  });
}

// Usage
const csv = \`name,age,city
Alice,30,New York
Bob,25,San Francisco\`;

const json = csvToJson(csv);
console.log(JSON.stringify(json, null, 2));
// [{ "name": "Alice", "age": "30", "city": "New York" }, ...]`}</code></pre>

        <h2>Method 2: Python</h2>
        <p>
          Python has a built-in <code>csv</code> module that makes this straightforward:
        </p>
        <pre><code className="language-python">{`import csv
import json

def csv_to_json(csv_file_path):
    with open(csv_file_path, 'r') as f:
        reader = csv.DictReader(f)
        return json.dumps(list(reader), indent=2)

# Or from a string
csv_data = """name,age,city
Alice,30,New York
Bob,25,San Francisco"""

reader = csv.DictReader(csv_data.splitlines())
result = json.dumps(list(reader), indent=2)
print(result)`}</code></pre>

        <h2>Method 3: Node.js</h2>
        <p>
          For server-side Node.js, the <code>csv-parser</code> package handles large files efficiently:
        </p>
        <pre><code className="language-javascript">{`const csv = require('csv-parser');
const fs = require('fs');

const results = [];
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => results.push(row))
  .on('end', () => {
    console.log(JSON.stringify(results, null, 2));
  });`}</code></pre>

        <h2>Handling Edge Cases</h2>
        <h3>Quoted Fields</h3>
        <p>
          CSV fields containing commas, newlines, or quotes are wrapped in double quotes.
          A proper parser handles these automatically. Our online tool and Python&apos;s <code>csv.DictReader</code> both handle this correctly.
        </p>
        <h3>Data Types</h3>
        <p>
          CSV is always text. When converting to JSON, numbers stay as strings unless you explicitly parse them.
          If you need proper types, add type coercion after conversion.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-slate-200 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Related Tools</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/tools/csv-to-json" className="text-indigo-600 hover:underline">CSV to JSON Converter</Link> — Paste CSV, get JSON instantly</li>
            <li><Link href="/tools/json-to-csv" className="text-indigo-600 hover:underline">JSON to CSV Converter</Link> — The reverse operation</li>
            <li><Link href="/tools/json-formatter" className="text-indigo-600 hover:underline">JSON Formatter</Link> — Pretty-print JSON data</li>
            <li><Link href="/tools/json-to-yaml" className="text-indigo-600 hover:underline">JSON to YAML</Link> — Convert JSON to YAML format</li>
          </ul>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "How to Convert CSV to JSON",
            description:
              "Learn how to convert CSV data to JSON format using JavaScript, Python, and free online tools.",
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
          }),
        }}
      />
    </div>
  );
}
