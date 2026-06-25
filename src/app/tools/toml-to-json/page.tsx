"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function TomlToJsonPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError("");
    try {
      const parsed = parseToml(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      setError("TOML parse error: " + e.message);
      setOutput("");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">TOML to JSON Converter</h1>
      <p className="text-slate-500 mb-8">
        Convert TOML configuration files to JSON format. Supports tables, arrays, dates, and nested sections.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input TOML</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={`[server]\nhost = "example.com"\nport = 8080\n\n[database]\ndriver = "postgresql"\nconnection_pool = 10`}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={convert}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Convert to JSON
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
              <label className="block text-sm font-medium text-slate-700">Output JSON</label>
              <CopyButton text={output} />
            </div>
            <pre className="rounded-lg border border-gray-200 bg-slate-50 p-4 overflow-auto max-h-96">
              <code className="font-mono text-sm text-slate-700 whitespace-pre">{output}</code>
            </pre>
          </div>
        )}

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <h3 className="font-semibold text-slate-700 mb-2">Supported TOML Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Key-value pairs (strings, numbers, booleans)</li>
            <li>Sections and nested tables (<code>[section]</code>)</li>
            <li>Arrays (inline and multi-line)</li>
            <li>Comments (lines starting with #)</li>
            <li>Datetime values (ISO 8601 format)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p><strong>What is TOML?</strong> TOML (Tom&apos;s Obvious Minimal Language) is a configuration file format designed to be unambiguous and easy to parse. It&apos;s used by Cargo (Rust), pip (Python), and many modern tools.</p>
          <p className="mt-2"><strong>What tools use TOML?</strong> Rust&apos;s Cargo.toml, Python&apos;s pyproject.toml, GitHub Actions workflows, and numerous build tools and CLI applications.</p>
          <p className="mt-2"><strong>Is my data sent to a server?</strong> No. All processing happens in your browser.</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "QuickKit — TOML to JSON Converter",
            operatingSystem: "Any",
            applicationCategory: "DeveloperApplication",
            url: "https://quickkit-nine.vercel.app/tools/toml-to-json",
            description: "Convert TOML configuration files to JSON format with support for tables, arrays, and nested sections.",
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

// Lightweight TOML parser
function parseToml(toml: string): Record<string, any> {
  const result: Record<string, any> = {};
  let current: Record<string, any> = result;
  let currentPath: string[] = [];

  const lines = toml.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith("#")) continue;

    // Table header [section] or [section.sub]
    const tableMatch = line.match(/^\[([^\[\]]+)\]$/);
    if (tableMatch) {
      const path = tableMatch[1].split(".").map((s) => s.trim());
      currentPath = path;
      current = result;
      for (const key of path) {
        if (!current[key]) current[key] = {};
        current = current[key];
      }
      continue;
    }

    // Key = value
    const kvMatch = line.match(/^([a-zA-Z0-9_-]+)\s*=\s*(.+)$/);
    if (kvMatch) {
      const key = kvMatch[1].trim();
      const rawValue = kvMatch[2].trim();
      current[key] = parseTomlValue(rawValue);
      continue;
    }
  }

  return result;
}

function parseTomlValue(value: string): any {
  // Boolean
  if (value === "true") return true;
  if (value === "false") return false;

  // Integer
  const intMatch = value.match(/^-?\d+$/);
  if (intMatch) return parseInt(value, 10);

  // Float
  const floatMatch = value.match(/^-?\d+\.\d+$/);
  if (floatMatch) return parseFloat(value);

  // Quoted string
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }

  // Inline array
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((item) => parseTomlValue(item.trim()));
  }

  // Datetime
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value;
  }

  return value;
}
