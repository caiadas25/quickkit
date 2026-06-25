"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import * as yaml from "js-yaml";

export default function JsonToYamlPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  const process = () => {
    setError("");
    setOutput("");
    try {
      if (!input.trim()) {
        setError("Please enter some JSON data.");
        return;
      }
      const parsed = JSON.parse(input);
      const formatted = yaml.dump(parsed, {
        indent,
        lineWidth: -1,
        noRefs: true,
        sortKeys: false,
      });
      setOutput(formatted);
    } catch (e: any) {
      setError(e.message || "Invalid JSON input. Make sure your JSON is well-formed.");
      setOutput("");
    }
  };

  const exampleJson = `{
  "name": "Alice",
  "age": 30,
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": [
    "reading",
    "coding"
  ]
}`;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JSON to YAML</h1>
      <p className="text-slate-500 mb-8">Convert JSON data to clean, readable YAML format. Ideal for configuration files.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">JSON Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={exampleJson}
          />
        </div>

        <div className="flex items-center gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Indentation</label>
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              {[2, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => setIndent(n)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    indent === n
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-600 hover:bg-gray-50"
                  }`}
                >
                  {n} spaces
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={process}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Convert to YAML
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
              <label className="block text-sm font-medium text-slate-700">Output YAML</label>
              <CopyButton text={output} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 overflow-auto max-h-96">
              <pre className="font-mono text-sm text-slate-700 p-4 whitespace-pre">{output}</pre>
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">Why convert JSON to YAML?</h3>
            <p className="text-sm text-slate-600 mt-1">YAML is more human-readable for configuration files. Docker Compose, Kubernetes, and many CI/CD tools prefer YAML over JSON.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Does it handle nested objects?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Deeply nested JSON structures convert to properly indented YAML with correct hierarchy.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data sent to a server?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All processing happens in your browser. Your data never leaves your device.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"QuickKit — JSON to YAML","operatingSystem":"Any","applicationCategory":"DeveloperApplication","url":"https://quickkit-nine.vercel.app/tools/json-to-yaml","description":"Convert JSON data to clean, readable YAML format. Ideal for configuration files.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}`,
        }}
      />
    </>
  );
}
