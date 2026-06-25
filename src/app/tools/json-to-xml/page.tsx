"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function JsonToXmlPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [rootTag, setRootTag] = useState("root");

  const convert = () => {
    setError("");
    try {
      const obj = JSON.parse(input);
      const xml = jsonToXml(obj, rootTag || "root", indent, 0);
      setOutput(xml);
    } catch (e: any) {
      setError("Invalid JSON: " + e.message);
      setOutput("");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JSON to XML Converter</h1>
      <p className="text-slate-500 mb-8">
        Convert JSON data to well-formatted XML with configurable root tag and indentation.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={`{\n  "name": "John",\n  "age": 30,\n  "hobbies": ["reading", "coding"]\n}`}
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Root tag:</label>
            <input
              type="text"
              value={rootTag}
              onChange={(e) => setRootTag(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-indigo-500 outline-none w-28"
              placeholder="root"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Indent:</label>
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-indigo-500 outline-none"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={1}>1 space</option>
            </select>
          </div>
          <button
            onClick={convert}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Convert to XML
          </button>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">Output XML</label>
              <CopyButton text={output} />
            </div>
            <pre className="rounded-lg border border-gray-200 bg-slate-50 p-4 overflow-auto max-h-96">
              <code className="font-mono text-sm text-slate-700 whitespace-pre">{output}</code>
            </pre>
          </div>
        )}

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <h3 className="font-semibold text-slate-700 mb-2">Conversion Rules</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>JSON objects become XML elements</li>
            <li>JSON arrays create repeated child elements</li>
            <li>JSON values become text content</li>
            <li>Nested objects become nested elements</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p><strong>Can I convert XML back to JSON?</strong> Yes! Use our <a href="/tools/xml-formatter" className="underline">XML Formatter</a> for XML validation, then convert manually, or check our <a href="/tools/json-formatter" className="underline">JSON Formatter</a> for working with the output.</p>
          <p className="mt-2"><strong>How are arrays handled?</strong> Each array item becomes a repeated child element. For example, <code>[&quot;reading&quot;, &quot;coding&quot;]</code> becomes multiple <code>&lt;hobby&gt;</code> elements.</p>
          <p className="mt-2"><strong>Is my data sent to a server?</strong> No. All conversion happens in your browser.</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "QuickKit — JSON to XML Converter",
            operatingSystem: "Any",
            applicationCategory: "DeveloperApplication",
            url: "https://quickkit-nine.vercel.app/tools/json-to-xml",
            description: "Convert JSON data to well-formatted XML with configurable root tag and indentation.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}

function jsonToXml(
  obj: any,
  tagName: string,
  indent: number,
  level: number
): string {
  const pad = " ".repeat(indent * level);
  const childPad = " ".repeat(indent * (level + 1));
  const safeName = tagName.replace(/[^a-zA-Z0-9_-]/g, "_");

  if (obj === null || obj === undefined) {
    return `${pad}<${safeName} />`;
  }

  if (typeof obj !== "object") {
    const escaped = String(obj)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
    return `${pad}<${safeName}>${escaped}</${safeName}>`;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => jsonToXml(item, safeName, indent, level)).join("\n");
  }

  const children = Object.entries(obj)
    .map(([key, value]) => jsonToXml(value, key, indent, level + 1))
    .join("\n");

  return `${pad}<${safeName}>\n${children}\n${pad}</${safeName}>`;
}
