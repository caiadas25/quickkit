"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function CssMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{ before: number; after: number; saved: number } | null>(null);

  const minify = () => {
    if (!input.trim()) return;

    let result = input;
    // Remove CSS comments
    result = result.replace(/\/\*[\s\S]*?\*\//g, "");
    // Remove whitespace around selectors and properties
    result = result.replace(/\s*{\s*/g, "{");
    result = result.replace(/\s*}\s*/g, "}");
    result = result.replace(/\s*:\s*/g, ":");
    result = result.replace(/\s*;\s*/g, ";");
    // Remove last semicolon before closing brace
    result = result.replace(/;}/g, "}");
    // Collapse multiple whitespace
    result = result.replace(/\s{2,}/g, " ");
    // Remove newlines
    result = result.replace(/\n/g, "");
    result = result.trim();

    const before = new Blob([input]).size;
    const after = new Blob([result]).size;
    const saved = Math.round(((before - after) / before) * 100);

    setOutput(result);
    setStats({ before, after, saved });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">CSS Minifier</h1>
      <p className="text-slate-500 mb-8">Minify CSS by removing comments, whitespace, and unnecessary characters.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input CSS</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="/* Reset */\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={minify}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Minify CSS
          </button>
          {stats && (
            <span className="text-sm text-slate-500">
              Saved {stats.saved}% ({stats.before.toLocaleString()} → {stats.after.toLocaleString()} bytes)
            </span>
          )}
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">Minified Output</label>
              <CopyButton text={output} />
            </div>
            <pre className="rounded-lg border border-gray-200 bg-slate-50 p-4 overflow-auto max-h-96">
              <code className="font-mono text-sm text-slate-700 whitespace-pre">{output}</code>
            </pre>
          </div>
        )}

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <h3 className="font-semibold text-slate-700 mb-2">What does this do?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Removes CSS comments</li>
            <li>Strips whitespace around selectors, properties, and values</li>
            <li>Removes trailing semicolons before closing braces</li>
            <li>Collapses multiple spaces and removes newlines</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p><strong>Does CSS minification affect rendering?</strong> No. Minified CSS is functionally identical to the original — only whitespace and comments are removed.</p>
          <p className="mt-2"><strong>How much can CSS be minified?</strong> Typically 20-40% reduction. CSS with lots of comments and formatting saves more.</p>
          <p className="mt-2"><strong>Should I use this in a build pipeline?</strong> Yes. Tools like cssnano and clean-css do this automatically. This tool is great for quick checks or one-off minification.</p>
        </div>
      </div>
    </>
  );
}
