"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function JsonToCsvPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [delimiter, setDelimiter] = useState(",");

  const process = () => {
    setError("");
    setOutput("");
    try {
      const parsed = JSON.parse(input);
      if (!Array.isArray(parsed)) {
        setError("Input must be a JSON array of objects. Example: [{\"name\":\"John\",\"age\":30}]");
        return;
      }
      if (parsed.length === 0) {
        setError("The JSON array is empty.");
        return;
      }
      if (typeof parsed[0] !== "object" || parsed[0] === null) {
        setError("Each element in the array must be an object.");
        return;
      }

      const headers = [...new Set(parsed.flatMap((item: Record<string, unknown>) => Object.keys(item)))];
      const rows = parsed.map((item: Record<string, unknown>) =>
        headers.map((h) => {
          const val = item[h];
          if (val === undefined || val === null) return "";
          const str = typeof val === "object" ? JSON.stringify(val) : String(val);
          if (str.includes(delimiter) || str.includes('"') || str.includes("\n")) {
            return `"${str.replace(/"/g, '""')}"`;
          }
          return str;
        })
      );

      const csv = [headers.join(delimiter), ...rows.map((r) => r.join(delimiter))].join("\n");
      setOutput(csv);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const downloadCsv = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exampleJson = '[{"name":"Alice","age":30,"city":"New York"},{"name":"Bob","age":25,"city":"London"}]';

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JSON to CSV</h1>
      <p className="text-slate-500 mb-8">Convert JSON arrays of objects to CSV format with customizable delimiters.</p>

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
            <label className="block text-sm font-medium text-slate-700 mb-1">Delimiter</label>
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              {[
                { value: ",", label: "Comma" },
                { value: ";", label: "Semicolon" },
                { value: "\t", label: "Tab" },
              ].map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDelimiter(d.value)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    delimiter === d.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-600 hover:bg-gray-50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={process}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Convert to CSV
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
              <label className="block text-sm font-medium text-slate-700">Output CSV</label>
              <div className="flex items-center gap-2">
                <CopyButton text={output} />
                <button
                  onClick={downloadCsv}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  Download
                </button>
              </div>
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
            <h3 className="font-semibold text-slate-800">What JSON format does this tool accept?</h3>
            <p className="text-sm text-slate-600 mt-1">A JSON array of objects. Each object becomes a row, and the keys become CSV headers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I use semicolons instead of commas?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Choose between comma, semicolon, or tab delimiters. Semicolons are common in European locales.</p>
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
          __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"QuickKit — JSON to CSV","operatingSystem":"Any","applicationCategory":"DeveloperApplication","url":"https://quickkit-nine.vercel.app/tools/json-to-csv","description":"Convert JSON arrays of objects to CSV format with customizable delimiters.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}`,
        }}
      />
    </>
  );
}