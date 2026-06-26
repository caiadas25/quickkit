import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Markdown? — Complete Beginner's Guide | QuickKit",
  description:
    "Learn what Markdown is, why developers use it, and how to write Markdown with our complete syntax reference. Includes a free online Markdown preview tool.",
  openGraph: {
    title: "What Is Markdown? — QuickKit",
    description: "Complete beginner's guide to Markdown syntax. Learn headers, lists, code blocks, tables, and more with examples.",
    type: "article",
  },
};

export default function WhatIsMarkdownPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">What Is Markdown</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
          Developer Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          What Is Markdown?
        </h1>
        <p className="text-lg text-slate-500">
          Markdown is a lightweight markup language that lets you write formatted text using plain text syntax.
          It&apos;s the most popular format for documentation, READMEs, and developer notes.
        </p>
      </header>

      <article className="prose max-w-none">
        <h2>Why Markdown Matters</h2>
        <p>
          Every major tech company uses Markdown. GitHub READMEs, Stack Overflow questions,
          Reddit posts, Slack messages, Notion pages — they all support Markdown. Learning
          Markdown takes 10 minutes and pays off for the rest of your career.
        </p>
        <p>
          The key insight: Markdown separates <strong>content</strong> from <strong>presentation</strong>.
          You write plain text with simple syntax markers, and the renderer turns it into HTML,
          PDF, or whatever output format you need.
        </p>

        <h2>Quick Start: Try It Now</h2>
        <p>
          The fastest way to learn is to use our <Link href="/tools/markdown-preview" className="text-indigo-600 hover:underline">free Markdown preview tool</Link>.
          Type Markdown on the left, see the rendered output on the right. Try each syntax example below.
        </p>
        <div className="not-prose my-6 p-4 rounded-xl border border-indigo-200 bg-indigo-50">
          <Link
            href="/tools/markdown-preview"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Try Markdown Preview Tool →
          </Link>
        </div>

        <h2>Core Syntax</h2>

        <h3>Headers</h3>
        <pre><code>{`# Heading 1
## Heading 2
### Heading 3
#### Heading 4`}</code></pre>

        <h3>Text Formatting</h3>
        <pre><code>{`**bold text**
*italic text*
~~strikethrough~~
\`inline code\``}</code></pre>

        <h3>Lists</h3>
        <pre><code>{`- Unordered item
- Another item
  - Nested item

1. Ordered item
2. Another item
3. Third item`}</code></pre>

        <h3>Links and Images</h3>
        <pre><code>{`[Link text](https://example.com)
![Alt text](image-url.jpg)`}</code></pre>

        <h3>Code Blocks</h3>
        <pre><code>{`\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\``}</code></pre>

        <h3>Blockquotes</h3>
        <pre><code>{`> This is a blockquote.
> It can span multiple lines.`}</code></pre>

        <h3>Tables</h3>
        <pre><code>{`| Name    | Price | Rating |
|---------|-------|--------|
| Product A | $10  | 4.5    |
| Product B | $25  | 4.8    |`}</code></pre>

        <h3>Horizontal Rules</h3>
        <pre><code>{`---
***`}</code></pre>

        <h2>Where Is Markdown Used?</h2>
        <ul>
          <li><strong>GitHub:</strong> README.md, issue descriptions, pull request comments, wiki pages</li>
          <li><strong>Documentation:</strong> JSDoc, Python docstrings, Docusaurus, VuePress, MkDocs</li>
          <li><strong>Communication:</strong> Slack, Discord, Reddit, Stack Overflow</li>
          <li><strong>Note-taking:</strong> Obsidian, Notion, Bear, Ulysses</li>
          <li><strong>Blogging:</strong> Hugo, Jekyll, Gatsby, Next.js blog templates</li>
          <li><strong>Email:</strong> Many email clients support Markdown formatting</li>
        </ul>

        <h2>Markdown Flavors</h2>
        <p>
          Different platforms support slightly different Markdown syntax. The core syntax is
          universal, but extensions vary:
        </p>
        <ul>
          <li><strong>CommonMark:</strong> The standardized spec. Most implementations target this.</li>
          <li><strong>GitHub Flavored Markdown (GFM):</strong> Adds tables, task lists, and syntax highlighting.</li>
          <li><strong>Pandoc Markdown:</strong> Adds footnotes, citations, and math equations.</li>
          <li><strong>MDX:</strong> Combines Markdown with JSX components for React-based sites.</li>
        </ul>

        <h2>Related Tools</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          <Link href="/tools/markdown-preview" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">Markdown Preview →</span>
            <span className="block text-slate-500 mt-1">Live preview as you type</span>
          </Link>
          <Link href="/tools/markdown-to-html" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">Markdown to HTML →</span>
            <span className="block text-slate-500 mt-1">Convert Markdown to clean HTML</span>
          </Link>
          <Link href="/tools/html-to-markdown" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">HTML to Markdown →</span>
            <span className="block text-slate-500 mt-1">Convert any webpage to Markdown</span>
          </Link>
          <Link href="/blog/css-flexbox-cheat-sheet" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">CSS Flexbox Cheat Sheet →</span>
            <span className="block text-slate-500 mt-1">Complete layout reference</span>
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "What Is Markdown? — Complete Beginner's Guide",
            description: "Learn what Markdown is, why developers use it, and how to write it with a complete syntax reference.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/what-is-markdown",
          }),
        }}
      />
    </div>
  );
}
