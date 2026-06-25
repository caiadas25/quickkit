"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import * as yaml from "js-yaml";

export default function YamlToJsonPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"pretty" | "minified">("pretty");

  const process = () => {
    setError("");
    setOutput("");
    try {
      if (!input.trim()) {
        setError("Please enter some YAML data.");
        return;
      }
      const parsed = yaml.load(input);
      if (parsed === undefined || parsed === null) {
        setError("The YAML input produced no data.");
        return;
      }
      const formatted = mode === "pretty" ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed);
      setOutput(formatted);
    } catch (e: any) {
      setError(e.message || "Invalid YAML input.");
      setOutput("");
    }
  };

  const exampleYaml = `name: Alice
age: 30
address:
  city: New York
  zip: "10001"
hobbies:
  - reading
  - coding`;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">YAML to JSON</h1>
      <p className="text-slate-500 mb-8">Convert YAML data to JSON format instantly. Paste YAML, get JSON.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">YAML Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={exampleYaml}
          />
        </div>

        <div className="flex items-center gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Output Format</label>
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              {[
                { value: "pretty", label: "Formatted" },
                { value: "minified", label: "Minified" },
              ].map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMode(m.value as "pretty" | "minified")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    mode === m.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-600 hover:bg-gray-50"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={process}
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
            <h3 className="font-semibold text-slate-800">What YAML features are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">Full YAML 1.2 support including nested objects, arrays, multi-line strings, anchors, and all scalar types (strings, numbers, booleans, null).</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I convert YAML configuration files?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. This tool handles Docker Compose files, Kubernetes manifests, CI/CD configs, and any standard YAML data.</p>
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
          __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"QuickKit — YAML to JSON","operatingSystem":"Any","applicationCategory":"DeveloperApplication","url":"https://quickkit-nine.vercel.app/tools/yaml-to-json","description":"Convert YAML data to JSON format instantly. Paste YAML, get formatted or minified JSON.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}`,
        }}
      />
    </>
  );
}
