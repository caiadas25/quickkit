"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function CsvToJsonPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [hasHeader, setHasHeader] = useState(true);
  const [mode, setMode] = useState<"pretty" | "minified">("pretty");
  const [customDelimiter, setCustomDelimiter] = useState("");

  const process = () => {
    setError("");
    setOutput("");
    try {
      const rows = input
        .split("\n")
        .filter((row) => row.trim() !== "");
      if (rows.length === 0) {
        setError("No CSV data provided.");
        return;
      }

      const delim = delimiter === "custom" ? customDelimiter : delimiter;
      if (!delim) {
        setError("Please provide a delimiter.");
        return;
      }

      const parsedRows = rows.map((row) => {
        const values: string[] = [];
        let current = "";
        let inQuotes = false;

        for (let i = 0; i < row.length; i++) {
          const char = row[i];
          if (inQuotes) {
            if (char === '"') {
              if (i + 1 < row.length && row[i + 1] === '"') {
                current += '"';
                i++;
              } else {
                inQuotes = false;
              }
            } else {
              current += char;
            }
          } else {
            if (char === '"') {
              inQuotes = true;
            } else if (char === delim) {
              values.push(current);
              current = "";
            } else {
              current += char;
            }
          }
        }
        values.push(current);
        return values;
      });

      if (parsedRows.length < 1) {
        setError("Cannot parse CSV data.");
        return;
      }

      let result: Record<string, string>[];
      if (hasHeader) {
        if (parsedRows.length < 2) {
          setError("CSV needs at least a header row and one data row when 'Has Header Row' is enabled.");
          return;
        }
        const headers = parsedRows[0];
        result = parsedRows.slice(1).map((row) => {
          const obj: Record<string, string> = {};
          headers.forEach((h, i) => {
            obj[h] = row[i] !== undefined ? row[i] : "";
          });
          return obj;
        });
      } else {
        result = parsedRows.map((row) => {
          const obj: Record<string, string> = {};
          row.forEach((val, i) => {
            obj[`col${i + 1}`] = val;
          });
          return obj;
        });
      }

      if (mode === "pretty") {
        setOutput(JSON.stringify(result, null, 2));
      } else {
        setOutput(JSON.stringify(result));
      }
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const downloadJson = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">CSV to JSON</h1>
      <p className="text-slate-500 mb-8">Convert CSV data to JSON format with customizable options.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">CSV Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={"name,age,city\nAlice,30,New York\nBob,25,London"}
          />
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Delimiter</label>
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              {[
                { value: ",", label: "Comma" },
                { value: ";", label: "Semicolon" },
                { value: "\t", label: "Tab" },
                { value: "custom", label: "Custom" },
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

          {delimiter === "custom" && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Custom Delimiter</label>
              <input
                type="text"
                value={customDelimiter}
                onChange={(e) => setCustomDelimiter(e.target.value)}
                className="w-20 rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="|"
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={hasHeader}
                onChange={(e) => setHasHeader(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Has Header Row
            </label>
          </div>

          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              onClick={() => setMode("pretty")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "pretty" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Pretty
            </button>
            <button
              onClick={() => setMode("minified")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "minified" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Minified
            </button>
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
              <div className="flex items-center gap-2">
                <CopyButton text={output} />
                <button
                  onClick={downloadJson}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download .json
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 overflow-auto max-h-96">
              <pre className="p-4 font-mono text-sm text-slate-700 whitespace-pre">{output}</pre>
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What CSV format is supported?</h3>
            <p className="text-sm text-slate-600 mt-1">Standard CSV with comma, semicolon, tab, or custom delimiters. Quoted fields are handled correctly, including escaped quotes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What if my CSV is malformed?</h3>
            <p className="text-sm text-slate-600 mt-1">The tool will display an error message with details about what went wrong, helping you fix the CSV data.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data safe?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. All processing happens in your browser. Your data never leaves your device and is not stored anywhere.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I download the result?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Use the &quot;Download .json&quot; button to save the output as a JSON file, or the &quot;Copy&quot; button to copy it to your clipboard.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — CSV to JSON\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/csv-to-json\",\n      \"description\": \"Convert CSV data to JSON format with customizable delimiters and options.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}