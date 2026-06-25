"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function XmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  const format = () => {
    setError("");
    try {
      const formatted = formatXml(input, indent);
      setOutput(formatted);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const minify = () => {
    setError("");
    try {
      const minified = input.replace(/>\s+</g, "><").trim();
      setOutput(minified);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const lines = output.split("\n");

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">XML Formatter</h1>
      <p className="text-slate-500 mb-8">
        Format, validate, and minify XML data with proper indentation.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Input XML
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder='<root><item name="example">Content</item></root>'
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Indent:</label>
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-indigo-500 outline-none"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={1}>1 space</option>
            </select>
          </div>
          <button
            onClick={format}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Format XML
          </button>
          <button
            onClick={minify}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors"
          >
            Minify
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
              <label className="block text-sm font-medium text-slate-700">
                Output
              </label>
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
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">
              What is XML formatting?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              XML formatting (pretty-printing) adds indentation and line breaks
              to make XML data more readable. Minification removes whitespace to
              reduce file size.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Is my data sent to a server?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              No. All processing happens in your browser. Your data never leaves
              your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              What if my XML is invalid?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              The tool will display an error message with details about the
              parsing issue, including the line number where the error was
              detected.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Can I convert XML to JSON?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              This tool focuses on formatting and minifying XML. For XML to JSON
              conversion, use our{" "}
              <a href="/tools/json-formatter" className="text-indigo-600 hover:underline">
                JSON Formatter
              </a>{" "}
              with a conversion step.
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "QuickKit — XML Formatter",
            operatingSystem: "Any",
            applicationCategory: "DeveloperApplication",
            url: "https://quickkit-nine.vercel.app/tools/xml-formatter",
            description:
              "Format, validate, and minify XML data with proper indentation and error highlighting.",
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

function formatXml(xml: string, indent: number = 2): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const parseError = doc.querySelector("parsererror");
  if (parseError) {
    throw new Error(
      "Invalid XML: " + parseError.textContent?.slice(0, 200)
    );
  }
  return serializeXml(doc, indent, 0);
}

function serializeXml(
  node: Node,
  indent: number,
  level: number
): string {
  const pad = " ".repeat(indent * level);
  const childPad = " ".repeat(indent * (level + 1));

  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent?.trim() || "";
  }

  if (node.nodeType === Node.DOCUMENT_NODE) {
    const child = node.childNodes[0];
    if (child) return serializeXml(child, indent, level);
    return "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const el = node as Element;
  const tag = el.tagName;
  const attrs = Array.from(el.attributes)
    .map((a) => ` ${a.name}="${a.value}"`)
    .join("");

  const children = Array.from(el.childNodes).filter(
    (c) =>
      c.nodeType === Node.ELEMENT_NODE ||
      (c.nodeType === Node.TEXT_NODE && c.textContent?.trim())
  );

  if (children.length === 0) {
    return `${pad}<${tag}${attrs} />`;
  }

  if (
    children.length === 1 &&
    children[0].nodeType === Node.TEXT_NODE
  ) {
    const text = children[0].textContent?.trim() || "";
    return `${pad}<${tag}${attrs}>${text}</${tag}>`;
  }

  const childXml = children
    .map((c) => serializeXml(c, indent, level + 1))
    .join("\n");
  return `${pad}<${tag}${attrs}>\n${childXml}\n${pad}</${tag}>`;
}
