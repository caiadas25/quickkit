import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Convert JSON to XML — Complete Guide | QuickKit",
  description:
    "Learn how to convert JSON data to XML with JavaScript, Python, and our free online converter tool. Step-by-step code examples for developers.",
  openGraph: {
    title: "How to Convert JSON to XML — Complete Guide",
    description: "Convert JSON to XML in JavaScript, Python, or with a free online tool.",
    type: "article",
  },
};

const codeExamples = [
  {
    lang: "JavaScript",
    code: `function jsonToXml(obj, rootName = "root") {
  let xml = \`<?xml version="1.0" encoding="UTF-8"?>\\n\`;
  xml += \`<\${rootName}>\\n\`;
  xml += convertObject(obj);
  xml += \`</\${rootName}>\`;
  return xml;
}

function convertObject(obj, indent = "  ") {
  let xml = "";
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      xml += \`\${indent}<\${key}>\\n\`;
      for (const item of value) {
        xml += \`\${indent}  <item>\\n\`;
        xml += convertObject(item, indent + "    ");
        xml += \`\${indent}  </item>\\n\`;
      }
      xml += \`\${indent}</\${key}>\\n\`;
    } else if (typeof value === "object" && value !== null) {
      xml += \`\${indent}<\${key}>\\n\`;
      xml += convertObject(value, indent + "  ");
      xml += \`\${indent}</\${key}>\\n\`;
    } else {
      xml += \`\${indent}<\${key}>\${escapeXml(String(value))}</\${key}>\\n\`;
    }
  }
  return xml;
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
}

// Usage
const data = {
  book: {
    title: "The Hitchhiker's Guide",
    author: "Douglas Adams",
    year: 1979,
    tags: ["sci-fi", "comedy"]
  }
};

console.log(jsonToXml(data, "library"));`,
    description: "Custom function with no dependencies",
  },
  {
    lang: "Python",
    code: `import json
import xml.etree.ElementTree as ET
from xml.dom import minidom

def json_to_xml(data, root_name="root"):
    root = ET.Element(root_name)
    _build_xml(root, data)
    rough_string = ET.tostring(root, encoding="unicode")
    parsed = minidom.parseString(rough_string)
    return parsed.toprettyxml(indent="  ", encoding=None)

def _build_xml(parent, data):
    if isinstance(data, dict):
        for key, value in data.items():
            child = ET.SubElement(parent, key)
            _build_xml(child, value)
    elif isinstance(data, list):
        for item in data:
            child = ET.SubElement(parent, "item")
            _build_xml(child, item)
    else:
        parent.text = str(data)

# Usage
data = {
    "user": {
        "name": "Alice",
        "email": "alice@example.com",
        "roles": ["admin", "editor"]
    }
}

xml_output = json_to_xml(data, "users")
print(xml_output)`,
    description: "Using Python's built-in xml.etree module",
  },
  {
    lang: "Node.js (fast-xml-parser)",
    code: `const { XMLBuilder } = require("fast-xml-parser");

const builder = new XMLBuilder({
  format: true,
  indentBy: "  ",
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  allowBooleanAttributes: true,
  parseTagValue: true,
  trimValues: true,
});

const data = {
  catalog: {
    book: [
      {
        "@_id": "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
      },
      {
        "@_id": "2",
        title: "1984",
        author: "George Orwell",
        price: 8.99,
      },
    ],
  },
};

const xml = builder.build(data);
console.log(xml);`,
    description: "Using the fast-xml-parser library",
  },
];

const tips = [
  {
    title: "Always escape XML special characters",
    description: "Characters like <, >, &, \", and ' must be escaped in XML. Use &lt; for <, &amp; for &, etc.",
  },
  {
    title: "Arrays need special handling",
    description: "JSON arrays don't map cleanly to XML. Wrap array items in a parent element or use repeated sibling elements.",
  },
  {
    title: "XML needs a root element",
    description: "Every XML document must have exactly one root element. JSON objects are freeform, so you'll need to wrap them.",
  },
  {
    title: "Attribute vs element",
    description: "XML distinguishes between attributes (id on a tag) and elements (nested child tags). Choose based on your schema.",
  },
];

export default function JsonToXmlPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">How to Convert JSON to XML</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
            <time>2026-06-30</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How to Convert JSON to XML — Complete Guide
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            JSON and XML are the two most common data formats on the web. Here&apos;s how to convert between them
            in JavaScript, Python, or with a free online tool.
          </p>
        </header>

        {/* Key Takeaways */}
        <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-200 mb-10">
          <h2 className="font-semibold text-indigo-800 mb-2">Key Takeaways</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• JSON is lightweight and human-readable; XML is more verbose but supports attributes and schemas</li>
            <li>• Arrays need wrapper elements since XML has no native array concept</li>
            <li>• Always escape special XML characters (&lt;, &gt;, &amp;, &quot;, &apos;)</li>
            <li>• Every XML document needs exactly one root element</li>
            <li>• Use <Link href="/tools/json-to-xml" className="text-indigo-600 hover:underline">our free JSON to XML converter</Link> for quick conversions</li>
          </ul>
        </div>

        {/* Tool CTA */}
        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm mb-10 text-center">
          <span className="text-3xl mb-2 block">🔄</span>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Try Our Free JSON to XML Converter</h2>
          <p className="text-slate-500 text-sm mb-4">Paste your JSON, get clean XML. No signup, no tracking.</p>
          <Link
            href="/tools/json-to-xml"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm font-medium"
          >
            Open JSON to XML Tool →
          </Link>
        </div>

        {/* JSON vs XML comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JSON vs XML: Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Feature</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">JSON</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">XML</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Syntax", "Compact, key-value pairs", "Verbose, tag-based"],
                  ["Data types", "String, number, boolean, null, array, object", "All text (needs schema for types)"],
                  ["Attributes", "No native support", "Full support"],
                  ["Comments", "Not allowed", "Supported"],
                  ["Schema", "JSON Schema", "XSD, DTD, RelaxNG"],
                  ["File size", "Smaller", "Larger"],
                  ["Readability", "High", "Moderate"],
                  ["APIs", "REST (most common)", "SOAP, enterprise APIs"],
                ].map(([feature, json, xml]) => (
                  <tr key={feature} className="border-b border-slate-100">
                    <td className="px-4 py-2 font-medium text-slate-700">{feature}</td>
                    <td className="px-4 py-2 text-slate-500">{json}</td>
                    <td className="px-4 py-2 text-slate-500">{xml}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Code Examples</h2>
          <div className="space-y-8">
            {codeExamples.map((ex) => (
              <div key={ex.lang} className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="font-semibold text-slate-700">{ex.lang}</h3>
                  <span className="text-xs text-slate-400">{ex.description}</span>
                </div>
                <pre className="p-5 overflow-x-auto bg-slate-900 text-slate-200 text-sm font-mono leading-relaxed">
                  <code>{ex.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tips for JSON to XML Conversion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="p-5 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-semibold text-slate-700 mb-1">{tip.title}</h3>
                <p className="text-sm text-slate-500">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/json-cheat-sheet" className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all text-sm bg-white">
              <span className="text-slate-800 font-semibold">JSON Cheat Sheet →</span>
              <span className="block text-slate-400 mt-1">Complete JSON syntax reference</span>
            </Link>
            <Link href="/blog/how-to-convert-json-to-csv" className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all text-sm bg-white">
              <span className="text-slate-800 font-semibold">JSON to CSV →</span>
              <span className="block text-slate-400 mt-1">Another common JSON conversion</span>
            </Link>
            <Link href="/blog/how-to-convert-csv-to-json" className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all text-sm bg-white">
              <span className="text-slate-800 font-semibold">CSV to JSON →</span>
              <span className="block text-slate-400 mt-1">Convert tabular data to JSON</span>
            </Link>
            <Link href="/tools/xml-formatter" className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all text-sm bg-white">
              <span className="text-slate-800 font-semibold">XML Formatter Tool →</span>
              <span className="block text-slate-400 mt-1">Format and validate your XML output</span>
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
            headline: "How to Convert JSON to XML — Complete Guide",
            description: "Learn how to convert JSON data to XML with JavaScript, Python, and our free online converter tool.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/how-to-convert-json-to-xml",
          }),
        }}
      />
    </div>
  );
}
