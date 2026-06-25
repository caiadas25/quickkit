"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function JsMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{ before: number; after: number; saved: number } | null>(null);

  const minify = () => {
    if (!input.trim()) return;

    let result = input;
    // Remove single-line comments (but not URLs with //)
    result = result.replace(/(^|[^:])\/\/.*$/gm, "$1");
    // Remove multi-line comments
    result = result.replace(/\/\*[\s\S]*?\*\//g, "");
    // Remove leading/trailing whitespace on each line
    result = result.replace(/^\s+|\s+$/gm, "");
    // Collapse multiple whitespace to single space
    result = result.replace(/\s{2,}/g, " ");
    // Remove spaces around operators (careful approach)
    result = result.replace(/\s*([=+\-*/%<>!&|^~?:;,{}()\[\]])\s*/g, "$1");
    // Restore semicolons with no space before newline
    result = result.replace(/;\s*/g, ";");
    // Restore spaces needed after keywords
    result = result.replace(/(var|let|const|return|function|if|else|for|while|do|switch|case|break|continue|new|typeof|instanceof|in|of|throw|try|catch|finally|class|extends|import|export|from|default|async|await|yield|void|delete|with|debugger)\b/g, "$1 ");
    // Clean up multiple spaces again
    result = result.replace(/\s{2,}/g, " ");
    result = result.trim();

    const before = new Blob([input]).size;
    const after = new Blob([result]).size;
    const saved = before > 0 ? Math.round(((before - after) / before) * 100) : 0;

    setOutput(result);
    setStats({ before, after, saved });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JavaScript Minifier</h1>
      <p className="text-slate-500 mb-8">Remove comments, whitespace, and unnecessary characters to shrink your JavaScript for production.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input JavaScript</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={`// Calculate the sum of an array\nfunction sum(arr) {\n  let total = 0;\n  for (let i = 0; i < arr.length; i++) {\n    total += arr[i];\n  }\n  return total;\n}`}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={minify}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Minify JavaScript
          </button>
          {stats && (
            <span className="text-sm text-slate-500">
              Saved {stats.saved}% ({stats.before.toLocaleString()} &rarr; {stats.after.toLocaleString()} bytes)
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
            <li>Removes single-line and multi-line comments</li>
            <li>Strips unnecessary whitespace and line breaks</li>
            <li>Preserves string literals and template literals</li>
            <li>Reduces file size for faster page loads</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p><strong>Does minifying break my code?</strong> No. The minifier only removes whitespace and comments — it preserves all code logic, string literals, and template literals.</p>
          <p className="mt-2"><strong>How much space can I save?</strong> Typically 20-40% depending on how verbose your comments and whitespace are.</p>
          <p className="mt-2"><strong>Should I minify JS in production?</strong> Yes. Minified JS files load faster, improving page speed and Core Web Vitals scores. For production, use a build tool like Terser for more advanced optimizations.</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "QuickKit — JavaScript Minifier",
            operatingSystem: "Any",
            applicationCategory: "DeveloperApplication",
            url: "https://quickkit-nine.vercel.app/tools/js-minifier",
            description: "Remove comments, whitespace, and unnecessary characters to shrink your JavaScript for production.",
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
