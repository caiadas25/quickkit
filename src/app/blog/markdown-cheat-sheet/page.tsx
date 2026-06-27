import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markdown Cheat Sheet — Complete Syntax Reference | QuickKit",
  description:
    "Complete Markdown cheat sheet with every syntax element. Headers, lists, links, images, tables, code blocks, blockquotes, task lists, and more. Copy-paste ready examples for developers and writers.",
  openGraph: {
    title: "Markdown Cheat Sheet — Complete Syntax Reference",
    description: "Every Markdown syntax element with examples. Copy-paste ready reference for developers and technical writers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Cheat Sheet — Complete Syntax Reference",
    description: "Every Markdown syntax element with copy-paste examples.",
  },
};

interface SyntaxItem {
  name: string;
  markdown: string;
  description: string;
}

interface SyntaxSection {
  title: string;
  items: SyntaxItem[];
}

const sections: SyntaxSection[] = [
  {
    title: "Headers",
    items: [
      { name: "H1", markdown: "# Header 1", description: "Largest header" },
      { name: "H2", markdown: "## Header 2", description: "Second largest" },
      { name: "H3", markdown: "### Header 3", description: "Third level" },
      { name: "H4", markdown: "#### Header 4", description: "Fourth level" },
      { name: "H5", markdown: "##### Header 5", description: "Fifth level" },
      { name: "H6", markdown: "###### Header 6", description: "Smallest header" },
      { name: "Alternative H1", markdown: "Header 1\n============", description: "Underline style" },
      { name: "Alternative H2", markdown: "Header 2\n------------", description: "Underline style" },
    ],
  },
  {
    title: "Text Formatting",
    items: [
      { name: "Bold", markdown: "**bold text**", description: "Double asterisks" },
      { name: "Italic", markdown: "*italic text*", description: "Single asterisk" },
      { name: "Bold + Italic", markdown: "***bold and italic***", description: "Triple asterisks" },
      { name: "Strikethrough", markdown: "~~strikethrough~~", description: "Double tildes" },
      { name: "Inline Code", markdown: "`code`", description: "Backticks" },
      { name: "Highlight", markdown: "==highlighted==", description: "Double equals (GitHub)" },
      { name: "Subscript", markdown: "H~2~O", description: "Single tilde" },
      { name: "Superscript", markdown: "X^2^", description: "Single caret" },
    ],
  },
  {
    title: "Lists",
    items: [
      { name: "Unordered List", markdown: "- Item 1\n- Item 2\n- Item 3", description: "Dash, plus, or asterisk" },
      { name: "Ordered List", markdown: "1. First\n2. Second\n3. Third", description: "Numbers with periods" },
      { name: "Nested List", markdown: "- Parent\n  - Child\n  - Child", description: "Indent with 2 spaces" },
      { name: "Task List", markdown: "- [x] Done\n- [ ] Todo", description: "Checkboxes (GitHub)" },
    ],
  },
  {
    title: "Links & Images",
    items: [
      { name: "Inline Link", markdown: "[text](https://url.com)", description: "Standard link" },
      { name: "Link with Title", markdown: '[text](url "title")', description: "Hover text" },
      { name: "Reference Link", markdown: "[text][ref]\n\n[ref]: https://url.com", description: "Separate definition" },
      { name: "Auto Link", markdown: "<https://url.com>", description: "Angle brackets" },
      { name: "Image", markdown: "![alt text](image-url)", description: "Exclamation mark prefix" },
      { name: "Image with Title", markdown: '![alt](url "title")', description: "Hover text on image" },
    ],
  },
  {
    title: "Code Blocks",
    items: [
      { name: "Fenced Code Block", markdown: "```\ncode here\n```", description: "Triple backticks" },
      { name: "Syntax Highlighting", markdown: "```javascript\nconst x = 1;\n```", description: "Language tag" },
      { name: "Indented Code", markdown: "    4 spaces\n    or 1 tab", description: "4 spaces or 1 tab" },
      { name: "Code in List", markdown: "1. Step one:\n   ```js\n   code()\n   ```", description: "Indent 3 more spaces" },
    ],
  },
  {
    title: "Tables",
    items: [
      {
        name: "Basic Table",
        markdown: "| Header | Header |\n|--------|--------|\n| Cell   | Cell   |",
        description: "Pipe-separated columns",
      },
      {
        name: "Alignment",
        markdown: "| Left | Center | Right |\n|:-----|:------:|------:|\n| a    | b      | c     |",
        description: "Colons for alignment",
      },
    ],
  },
  {
    title: "Blockquotes & Dividers",
    items: [
      { name: "Blockquote", markdown: "> quoted text", description: "Greater-than symbol" },
      { name: "Nested Blockquote", markdown: "> outer\n> > inner", description: "Multiple >" },
      { name: "Horizontal Rule", markdown: "---", description: "Three dashes" },
      { name: "Alt Horizontal Rule", markdown: "***", description: "Three asterisks" },
    ],
  },
  {
    title: "Escaping & Utilities",
    items: [
      { name: "Escape Character", markdown: "\\*not bold\\*", description: "Backslash prefix" },
      { name: "Emoji (GitHub)", markdown: ":rocket:", description: "Colon-wrapped name" },
      { name: "Footnote", markdown: "Text[^1]\n\n[^1]: Footnote", description: "Bracket notation" },
      { name: "Definition List", markdown: "Term\n: Definition", description: "Colon prefix" },
    ],
  },
];

function SyntaxBlock({ item }: { item: SyntaxItem }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden hover:border-indigo-300 transition-colors">
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-600 uppercase">{item.name}</span>
        <span className="text-xs text-slate-400">{item.description}</span>
      </div>
      <pre className="px-4 py-3 text-sm text-slate-800 font-mono bg-white overflow-x-auto whitespace-pre-wrap">
        {item.markdown}
      </pre>
    </div>
  );
}

export default function MarkdownCheatSheetPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Markdown Cheat Sheet</h1>
      <p className="text-slate-500 mb-8">Complete syntax reference with copy-paste examples for every Markdown element.</p>

      {/* Quick Reference */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Quick Reference</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div><code className="text-indigo-600"># Header</code><span className="text-slate-500 ml-2">Headers</span></div>
          <div><code className="text-indigo-600">**bold**</code><span className="text-slate-500 ml-2">Bold text</span></div>
          <div><code className="text-indigo-600">*italic*</code><span className="text-slate-500 ml-2">Italic text</span></div>
          <div><code className="text-indigo-600">[link](url)</code><span className="text-slate-500 ml-2">Links</span></div>
          <div><code className="text-indigo-600">![alt](img)</code><span className="text-slate-500 ml-2">Images</span></div>
          <div><code className="text-indigo-600">`code`</code><span className="text-slate-500 ml-2">Inline code</span></div>
          <div><code className="text-indigo-600">&gt; quote</code><span className="text-slate-500 ml-2">Blockquote</span></div>
          <div><code className="text-indigo-600">- item</code><span className="text-slate-500 ml-2">List item</span></div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.title} className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
          <div className="grid gap-3">
            {section.items.map((item) => (
              <SyntaxBlock key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* Common Patterns */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Common Patterns</h2>
        <div className="grid gap-3">
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-2">Badge / Shield</h3>
            <pre className="text-sm text-slate-600 font-mono">![Status](https://img.shields.io/badge/status-active-brightgreen)</pre>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-2">Collapsible Section</h3>
            <pre className="text-sm text-slate-600 font-mono">{`&lt;details&gt;
&lt;summary&gt;Click to expand&lt;/summary&gt;

Content here

&lt;/details&gt;`}</pre>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-2">Anchor Link</h3>
            <pre className="text-sm text-slate-600 font-mono">[Go to section](#section-name)</pre>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-2">Table of Contents</h3>
            <pre className="text-sm text-slate-600 font-mono">{`## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)
  - [Subsection](#subsection)`}</pre>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="border-t border-slate-200 pt-8 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/blog/what-is-markdown" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">What Is Markdown? →</span>
            <span className="block text-slate-500 mt-1">Introduction to Markdown for beginners</span>
          </Link>
          <Link href="/blog/how-to-convert-csv-to-json" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">CSV to JSON Guide →</span>
            <span className="block text-slate-500 mt-1">Data format conversion guide</span>
          </Link>
          <Link href="/tools/markdown-preview" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">Markdown Preview Tool →</span>
            <span className="block text-slate-500 mt-1">Write Markdown, see live preview</span>
          </Link>
          <Link href="/tools/markdown-to-html" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
            <span className="text-slate-800 font-semibold">Markdown to HTML Tool →</span>
            <span className="block text-slate-500 mt-1">Convert Markdown to clean HTML</span>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Markdown Cheat Sheet — Complete Syntax Reference",
            description: "Complete Markdown syntax reference with copy-paste examples for headers, lists, links, tables, code blocks, and more.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/markdown-cheat-sheet",
          }),
        }}
      />
    </>
  );
}
