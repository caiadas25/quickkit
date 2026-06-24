"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"format" | "minify">("format");

  const process = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      if (mode === "format") {
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        setOutput(JSON.stringify(parsed));
      }
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const lines = output.split("\n");

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JSON Formatter</h1>
      <p className="text-slate-500 mb-8">Format, validate, and minify JSON data instantly.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder='{"key": "value"}'
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              onClick={() => setMode("format")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "format" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Format
            </button>
            <button
              onClick={() => setMode("minify")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "minify" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Minify
            </button>
          </div>
          <button
            onClick={process}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            {mode === "format" ? "Format JSON" : "Minify JSON"}
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
              <label className="block text-sm font-medium text-slate-700">Output</label>
              <CopyButton text={output} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 overflow-auto max-h-96">
              <table className="w-full">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-0.5 text-right text-xs text-slate-400 select-none w-10 font-mono border-r border-gray-200">
                        {i + 1}
                      </td>
                      <td className="px-4 py-0.5 font-mono text-sm text-slate-700 whitespace-pre">
                        {line}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is JSON formatting?</h3>
            <p className="text-sm text-slate-600 mt-1">JSON formatting (pretty-printing) adds indentation and line breaks to make JSON data more readable. Minification does the opposite, removing whitespace.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data sent to a server?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All processing happens in your browser. Your data never leaves your device.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What if my JSON is invalid?</h3>
            <p className="text-sm text-slate-600 mt-1">The tool will display an error message with details about what went wrong, helping you fix the JSON syntax.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — JSON Formatter\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/json-formatter\",\n      \"description\": \"Format, validate, and minify JSON data with line numbers and error highlighting.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
