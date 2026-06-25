"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

function htmlToMarkdown(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;

  function processNode(node: Node, indent: string): string {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || "";
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();
    const children = () => Array.from(el.childNodes).map((c) => processNode(c, "")).join("");

    switch (tag) {
      case "h1": return `# ${el.textContent?.trim()}\n\n`;
      case "h2": return `## ${el.textContent?.trim()}\n\n`;
      case "h3": return `### ${el.textContent?.trim()}\n\n`;
      case "h4": return `#### ${el.textContent?.trim()}\n\n`;
      case "h5": return `##### ${el.textContent?.trim()}\n\n`;
      case "h6": return `###### ${el.textContent?.trim()}\n\n`;
      case "p": return `${children()}\n\n`;
      case "br": return "\n";
      case "strong":
      case "b": return `**${children()}**`;
      case "em":
      case "i": return `*${children()}*`;
      case "u": return `<u>${children()}</u>`;
      case "del":
      case "s": return `~~${children()}~~`;
      case "blockquote": return `> ${children().trim()}\n\n`;
      case "hr": return `\n---\n\n`;
      case "a": {
        const href = el.getAttribute("href") || "";
        return `[${children().trim()}](${href})`;
      }
      case "img": {
        const alt = el.getAttribute("alt") || "";
        const src = el.getAttribute("src") || "";
        return `![${alt}](${src})`;
      }
      case "ul": {
        return Array.from(el.children)
          .map((li) => `- ${li.textContent?.trim()}`)
          .join("\n") + "\n\n";
      }
      case "ol": {
        return Array.from(el.children)
          .map((li, i) => `${i + 1}. ${li.textContent?.trim()}`)
          .join("\n") + "\n\n";
      }
      case "li": return children();
      case "pre": {
        const codeEl = el.querySelector("code");
        const code = codeEl ? codeEl.textContent || "" : el.textContent || "";
        return `\`\`\`\n${code}\n\`\`\`\n\n`;
      }
      case "code": return `\`${el.textContent?.trim()}\``;
      case "table": {
        const rows = Array.from(el.querySelectorAll("tr"));
        if (rows.length === 0) return "";
        let md = "";
        rows.forEach((row, ri) => {
          const cells = Array.from(row.querySelectorAll("th, td")).map(
            (cell) => cell.textContent?.trim() || ""
          );
          md += `| ${cells.join(" | ")} |\n`;
          if (ri === 0) {
            md += `| ${cells.map(() => "---").join(" | ")} |\n`;
          }
        });
        return md + "\n";
      }
      case "div":
      case "span":
      case "section":
      case "article":
      case "main":
      case "body":
      case "html":
        return children();
      default:
        return children();
    }
  }

  return processNode(div, "").trim();
}

export default function HtmlToMarkdownPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const exampleHtml = '<h1>Hello World</h1>\n<p>This is a <strong>paragraph</strong> with <em>emphasis</em>.</p>\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<a href="https://example.com">Link</a>';

  const process = () => {
    setOutput(htmlToMarkdown(input));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">HTML to Markdown</h1>
      <p className="text-slate-500 mb-8">Convert HTML code to clean, readable Markdown syntax.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">HTML Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder={exampleHtml}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={process}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Convert to Markdown
          </button>
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">Output Markdown</label>
              <CopyButton text={output} />
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
            <h3 className="font-semibold text-slate-800">What HTML elements are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">Headings, paragraphs, emphasis, links, images, lists, blockquotes, code blocks, tables, and more.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I convert HTML snippets from a CMS?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Paste any HTML snippet and it converts to Markdown. Great for migrating content between platforms.</p>
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
          __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"QuickKit — HTML to Markdown","operatingSystem":"Any","applicationCategory":"DeveloperApplication","url":"https://quickkit-nine.vercel.app/tools/html-to-markdown","description":"Convert HTML code to clean, readable Markdown syntax.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}`,
        }}
      />
    </>
  );
}