"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

const DEFAULT_MARKDOWN = `# Hello World

This is a **live Markdown preview**. Start typing on the left!

## Features

- **Bold text** and *italic text*
- \`inline code\` support
- Lists (ordered and unordered)
- [Links](https://example.com)
- Code blocks

### Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Table

| Tool | Description |
|------|-------------|
| Formatter | Formats code |
| Generator | Generates content |

> Blockquotes work too!

---

Happy writing! ✍️
`;

export default function MarkdownPreviewPage() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Markdown Preview</h1>
      <p className="text-slate-500 mb-8">Write Markdown and see a live preview side-by-side.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[600px]">
        {/* Editor */}
        <div className="flex flex-col rounded-lg border border-gray-300 overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Editor</span>
          </div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="flex-1 w-full p-4 font-mono text-sm text-slate-800 bg-white resize-none focus:outline-none"
            placeholder="Type Markdown here..."
          />
        </div>

        {/* Preview */}
        <div className="flex flex-col rounded-lg border border-gray-300 overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Preview</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6 prose prose-slate max-w-none text-sm">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What Markdown features are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">Headers, bold, italic, strikethrough, links, images, code blocks, inline code, lists, tables, blockquotes, and horizontal rules.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I export the preview?</h3>
            <p className="text-sm text-slate-600 mt-1">You can copy the Markdown source from the editor. The preview is for visual reference while editing.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Does it support GitHub Flavored Markdown?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Common GFM features like tables and task lists are supported through the react-markdown library.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — Markdown Preview\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/markdown-preview\",\n      \"description\": \"Write Markdown and see a live preview side-by-side.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
