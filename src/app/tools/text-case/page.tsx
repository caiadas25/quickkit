"use client";

import { useState, useMemo } from "react";
import CopyButton from "@/components/CopyButton";

type CaseType = {
  id: string;
  label: string;
  transform: (text: string) => string;
};

const CASES: CaseType[] = [
  {
    id: "upper",
    label: "UPPERCASE",
    transform: (t) => t.toUpperCase(),
  },
  {
    id: "lower",
    label: "lowercase",
    transform: (t) => t.toLowerCase(),
  },
  {
    id: "title",
    label: "Title Case",
    transform: (t) =>
      t.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  },
  {
    id: "sentence",
    label: "Sentence case",
    transform: (t) =>
      t
        .split(/([.!?]\s*)/)
        .map((s, i) =>
          i % 2 === 0
            ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
            : s
        )
        .join(""),
  },
  {
    id: "camel",
    label: "camelCase",
    transform: (t) =>
      t
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^[A-Z]/, (c) => c.toLowerCase()),
  },
  {
    id: "pascal",
    label: "PascalCase",
    transform: (t) =>
      t.replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, c) => c.toUpperCase()),
  },
  {
    id: "snake",
    label: "snake_case",
    transform: (t) =>
      t
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase(),
  },
  {
    id: "kebab",
    label: "kebab-case",
    transform: (t) =>
      t
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase(),
  },
  {
    id: "constant",
    label: "CONSTANT_CASE",
    transform: (t) =>
      t
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .toUpperCase(),
  },
  {
    id: "dot",
    label: "dot.case",
    transform: (t) =>
      t
        .replace(/([a-z])([A-Z])/g, "$1.$2")
        .replace(/[^a-zA-Z0-9]+/g, ".")
        .replace(/^\.+|\.+$/g, "")
        .toLowerCase(),
  },
];

export default function TextCasePage() {
  const [input, setInput] = useState("");
  const [activeCase, setActiveCase] = useState("upper");

  const activeTransform = CASES.find((c) => c.id === activeCase) || CASES[0];

  const output = useMemo(() => {
    if (!input) return "";
    return activeTransform.transform(input);
  }, [input, activeTransform]);

  const wordCount = useMemo(() => {
    if (!input.trim()) return 0;
    return input.trim().split(/\s+/).length;
  }, [input]);

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Text Case Converter</h1>
      <p className="text-slate-500 mb-8">
        Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.
      </p>

      <div className="space-y-4">
        {/* Input */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-slate-700">Input</label>
            <span className="text-xs text-slate-400">
              {wordCount} word{wordCount !== 1 ? "s" : ""}
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-36 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Enter text to convert..."
          />
        </div>

        {/* Case buttons */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Convert to</label>
          <div className="flex flex-wrap gap-2">
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(c.id)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                  activeCase === c.id
                    ? "border-indigo-300 bg-indigo-600 text-white"
                    : "border-gray-200 bg-white text-slate-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">Output</label>
              <CopyButton text={output} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-700 whitespace-pre-wrap break-all min-h-[4rem]">
              {output}
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What case formats are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">
              UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case,
              kebab-case, CONSTANT_CASE, and dot.case — covering all common naming conventions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              What&apos;s the difference between camelCase and PascalCase?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              camelCase starts with a lowercase letter (myVariableName), while PascalCase starts
              with an uppercase letter (MyVariableName). PascalCase is often used for class names
              and component names.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              How does the conversion work with special characters?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Special characters (spaces, hyphens, underscores, dots) are used as word separators
              to detect word boundaries, then replaced with the appropriate separator for the
              target case.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data stored anywhere?</h3>
            <p className="text-sm text-slate-600 mt-1">
              No. All conversions happen entirely in your browser. No data is sent to any server.
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — Text Case Converter\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/text-case\",\n      \"description\": \"Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
