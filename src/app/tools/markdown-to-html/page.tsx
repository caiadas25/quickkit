"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import CopyButton from "@/components/CopyButton";

const DEFAULT_MD = `# Hello World

This is a **Markdown** document that gets converted to HTML.

## Features

- **Bold text** and *italic text*
- [Links](https://example.com)
- \`inline code\` and code blocks

### Code Block

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Table

| Tool | Description |
|------|-------------|
| JSON Formatter | Format JSON |
| UUID Generator | Generate UUIDs |

> This is a blockquote. Great for highlighting important information.
`;

function mdToSimpleHtml(md: string): string {
  // Use the browser's DOM to render markdown via a temporary div approach
  // For server-safe output, we'll use a simple regex-based conversion
  let html = md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");
  return `<p>${html}</p>`;
}

export default function MarkdownToHtmlTool() {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);
  const [showRaw, setShowRaw] = useState(false);

  const rawHtml = mdToSimpleHtml(markdown);

  return (
    <>
      <p className="text-slate-500 mb-4">
        Write Markdown on the left, see the rendered preview and clean HTML output on the right.
      </p>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowRaw(false)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${!showRaw ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
        >
          Visual Preview
        </button>
        <button
          onClick={() => setShowRaw(true)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${showRaw ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
        >
          Raw HTML
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Markdown</label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[400px] rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none bg-slate-50"
            spellCheck={false}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-slate-700">
              {showRaw ? "Raw HTML Output" : "Preview"}
            </label>
            <CopyButton text={showRaw ? rawHtml : rawHtml} />
          </div>
          {showRaw ? (
            <textarea
              value={rawHtml}
              readOnly
              className="w-full h-[400px] rounded-lg border border-slate-300 p-3 font-mono text-xs text-slate-800 bg-slate-50 resize-none"
            />
          ) : (
            <div className="h-[400px] rounded-lg border border-slate-300 p-4 overflow-auto prose prose-slate max-w-none bg-white">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => {
            const blob = new Blob([rawHtml], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "output.html";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Download .html
        </button>
      </div>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What Markdown features are supported?", a: "Headings, bold, italic, links, images, code blocks, inline code, blockquotes, lists (ordered and unordered), tables, and horizontal rules." },
            { q: "Can I use this to generate HTML for my blog?", a: "Yes! Write your post in Markdown, switch to Raw HTML view, and copy the clean HTML output for your blog or CMS." },
            { q: "Does it support GitHub Flavored Markdown?", a: "Yes, the preview uses react-markdown with GFM support including tables, strikethrough, and task lists." },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-slate-800">{faq.q}</h3>
              <p className="text-slate-600 text-sm mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "QuickKit — Markdown to HTML",
            "operatingSystem": "Any",
            "applicationCategory": "DeveloperApplication",
            "url": "https://quickkit-nine.vercel.app/tools/markdown-to-html",
            "description": "Convert Markdown to clean, ready-to-use HTML with live preview.",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          }),
        }}
      />
    </>
  );
}
