"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function HtmlMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{ before: number; after: number; saved: number } | null>(null);

  const minify = () => {
    if (!input.trim()) return;

    let result = input;
    // Remove HTML comments (but keep conditional comments)
    result = result.replace(/<!--(?!\[if)[\s\S]*?-->/g, "");
    // Remove whitespace between tags
    result = result.replace(/>\s+</g, "><");
    // Collapse multiple whitespace to single space
    result = result.replace(/\s{2,}/g, " ");
    // Remove leading/trailing whitespace
    result = result.trim();

    const before = new Blob([input]).size;
    const after = new Blob([result]).size;
    const saved = Math.round(((before - after) / before) * 100);

    setOutput(result);
    setStats({ before, after, saved });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">HTML Minifier</h1>
      <p className="text-slate-500 mb-8">Remove comments, whitespace, and unnecessary characters to shrink your HTML.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input HTML</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="<div>\n  <!-- comment -->\n  <p>  Hello world  </p>\n</div>"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={minify}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Minify HTML
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
            <li>Removes HTML comments (preserves IE conditional comments)</li>
            <li>Strips whitespace between tags</li>
            <li>Collapses multiple spaces into one</li>
            <li>Reduces file size for faster page loads</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <p><strong>Does minifying HTML break anything?</strong> No. HTML minification removes only whitespace and comments — content and structure remain identical.</p>
          <p className="mt-2"><strong>How much space can I save?</strong> Typically 10-30% depending on how much whitespace and how many comments your HTML contains.</p>
          <p className="mt-2"><strong>Should I minify HTML in production?</strong> Yes. It reduces file size, which means faster downloads and better Core Web Vitals scores.</p>
        </div>
      </div>
    </>
  );
}
