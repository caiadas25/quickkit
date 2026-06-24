"use client";

import { useState, useMemo } from "react";
import CopyButton from "@/components/CopyButton";

const PRESETS: { name: string; pattern: string }[] = [
  { name: "Email", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
  { name: "URL", pattern: "https?://[^\\s/$.?#].[^\\s]*" },
  { name: "IPv4", pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b" },
  { name: "Phone (US)", pattern: "\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}" },
  { name: "Date (YYYY-MM-DD)", pattern: "\\d{4}[-/]\\d{2}[-/]\\d{2}" },
  { name: "Hex Color", pattern: "#[0-9a-fA-F]{3,8}" },
  { name: "HTML Tag", pattern: "<([a-z][a-z0-9]*)\\b[^>]*>" },
];

interface MatchResult {
  fullMatch: string;
  index: number;
  groups: (string | undefined)[];
}

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState<Record<string, boolean>>({
    g: true,
    i: false,
    m: false,
    s: false,
  });
  const [testString, setTestString] = useState("");

  const flagsStr = Object.entries(flags)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join("");

  const { regex, error } = useMemo(() => {
    if (!pattern) return { regex: null, error: "" };
    try {
      return { regex: new RegExp(pattern, flagsStr), error: "" };
    } catch (e: any) {
      return { regex: null, error: e.message };
    }
  }, [pattern, flagsStr]);

  const { matches, highlightedText } = useMemo(() => {
    if (!regex || !testString) return { matches: [], highlightedText: "" };

    const results: MatchResult[] = [];
    let match: RegExpExecArray | null;

    // Reset lastIndex for global regex
    regex.lastIndex = 0;

    if (flags.g) {
      while ((match = regex.exec(testString)) !== null) {
        results.push({
          fullMatch: match[0],
          index: match.index,
          groups: match.slice(1),
        });
        if (match[0].length === 0) {
          regex.lastIndex++;
        }
      }
    } else {
      match = regex.exec(testString);
      if (match) {
        results.push({
          fullMatch: match[0],
          index: match.index,
          groups: match.slice(1),
        });
      }
    }

    // Build highlighted text
    let html = "";
    let lastIdx = 0;
    const sortedMatches = [...results].sort((a, b) => a.index - b.index);

    for (const m of sortedMatches) {
      if (m.index < lastIdx) continue; // skip overlapping
      html += escapeHtml(testString.slice(lastIdx, m.index));
      html += `<mark class="bg-yellow-200 text-slate-800 rounded px-0.5">${escapeHtml(m.fullMatch)}</mark>`;
      lastIdx = m.index + m.fullMatch.length;
    }
    html += escapeHtml(testString.slice(lastIdx));

    return { matches: results, highlightedText: html };
  }, [regex, testString, flags.g]);

  const toggleFlag = (flag: string) => {
    setFlags((prev) => ({ ...prev, [flag]: !prev[flag] }));
  };

  const applyPreset = (preset: string) => {
    setPattern(preset);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Regex Tester</h1>
      <p className="text-slate-500 mb-8">
        Test regular expressions with live highlighting, match details, and common presets.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {/* Pattern input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Regex Pattern
            </label>
            <div className="flex">
              <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-slate-400 font-mono">
                /
              </span>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="flex-1 border border-gray-300 bg-white px-3 py-2.5 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="Enter regex pattern"
              />
              <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-slate-400 font-mono">
                /{flagsStr}
              </span>
            </div>
          </div>

          {/* Flags */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Flags</label>
            <div className="flex gap-3">
              {["g", "i", "m", "s"].map((flag) => (
                <label
                  key={flag}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium cursor-pointer transition-all ${
                    flags[flag]
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 bg-white text-slate-500 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={flags[flag]}
                    onChange={() => toggleFlag(flag)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                      flags[flag]
                        ? "bg-indigo-600 text-white"
                        : "border border-gray-300 bg-white"
                    }`}
                  >
                    {flags[flag] && "✓"}
                  </span>
                  <span className="font-mono">{flag}</span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {flag === "g"
                      ? "global"
                      : flag === "i"
                        ? "case-insensitive"
                        : flag === "m"
                          ? "multiline"
                          : "dotAll"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <span className="font-semibold">Regex Error:</span> {error}
            </div>
          )}

          {/* Test string */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Test String
            </label>
            <textarea
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              className="w-full h-40 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
              placeholder="Enter text to test against..."
            />
          </div>

          {/* Highlighted result */}
          {testString && regex && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Highlighted Matches ({matches.length})
                </label>
                <CopyButton text={matches.map((m) => m.fullMatch).join("\n")} />
              </div>
              <div
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-mono text-sm text-slate-700 whitespace-pre-wrap break-all"
                dangerouslySetInnerHTML={{ __html: highlightedText }}
              />
            </div>
          )}

          {/* Match details */}
          {matches.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Match Details
              </label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {matches.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-indigo-600">
                        Match {i + 1} at index {m.index}
                      </span>
                    </div>
                    <div className="font-mono text-sm text-slate-700 bg-white rounded px-2 py-1 mb-1 border border-gray-100">
                      &quot;{m.fullMatch}&quot;
                    </div>
                    {m.groups.length > 0 && (
                      <div className="space-y-0.5">
                        {m.groups.map((g, gi) => (
                          <div key={gi} className="text-xs text-slate-500">
                            Group {gi + 1}:{" "}
                            <span className="font-mono text-slate-700">
                              {g !== undefined ? `"${g}"` : "undefined"}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Common patterns */}
        <div className="lg:w-56 flex-shrink-0">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Common Patterns</h3>
          <div className="space-y-1.5">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p.pattern)}
                className="w-full text-left rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all"
              >
                <span className="block">{p.name}</span>
                <span className="block text-xs font-mono text-slate-400 truncate">
                  /{p.pattern.length > 30 ? p.pattern.slice(0, 30) + "..." : p.pattern}/
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is a regular expression?</h3>
            <p className="text-sm text-slate-600 mt-1">
              A regular expression (regex) is a sequence of characters that defines a search
              pattern. It&apos;s commonly used for string matching, validation, and text
              extraction.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              What do the flag checkboxes mean?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              <strong>g</strong> (global) finds all matches, not just the first.{" "}
              <strong>i</strong> (case-insensitive) ignores case. <strong>m</strong> (multiline)
              makes ^ and $ match line boundaries. <strong>s</strong> (dotAll) lets . match
              newlines.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Can I copy individual matches?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Yes. Use the copy button next to &quot;Highlighted Matches&quot; to copy all matched
              text at once, separated by newlines.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Is my data sent to a server?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              No. All regex testing happens in your browser. Your pattern and test string never
              leave your device.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
