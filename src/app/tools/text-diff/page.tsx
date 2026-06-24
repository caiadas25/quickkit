"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

interface DiffLine {
  type: "added" | "removed" | "unchanged";
  lineNumOld: number | null;
  lineNumNew: number | null;
  text: string;
}

function computeDiff(oldText: string, newText: string): DiffLine[] {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const result: DiffLine[] = [];

  const maxLen = Math.max(oldLines.length, newLines.length);

  // Simple LCS-based diff using longest common subsequence
  const m = oldLines.length;
  const n = newLines.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find diff
  const diffOps: { type: "added" | "removed" | "unchanged"; oldIdx: number; newIdx: number }[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      diffOps.unshift({ type: "unchanged", oldIdx: i - 1, newIdx: j - 1 });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diffOps.unshift({ type: "added", oldIdx: -1, newIdx: j - 1 });
      j--;
    } else {
      diffOps.unshift({ type: "removed", oldIdx: i - 1, newIdx: -1 });
      i--;
    }
  }

  for (const op of diffOps) {
    if (op.type === "unchanged") {
      result.push({
        type: "unchanged",
        lineNumOld: op.oldIdx + 1,
        lineNumNew: op.newIdx + 1,
        text: oldLines[op.oldIdx],
      });
    } else if (op.type === "added") {
      result.push({
        type: "added",
        lineNumOld: null,
        lineNumNew: op.newIdx + 1,
        text: newLines[op.newIdx],
      });
    } else {
      result.push({
        type: "removed",
        lineNumOld: op.oldIdx + 1,
        lineNumNew: null,
        text: oldLines[op.oldIdx],
      });
    }
  }

  return result;
}

export default function TextDiffPage() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [diffResult, setDiffResult] = useState<DiffLine[]>([]);
  const [hasCompared, setHasCompared] = useState(false);

  const compare = () => {
    const result = computeDiff(oldText, newText);
    setDiffResult(result);
    setHasCompared(true);
  };

  const diffText = diffResult
    .map((line) => {
      if (line.type === "added") return `+ ${line.text}`;
      if (line.type === "removed") return `- ${line.text}`;
      return `  ${line.text}`;
    })
    .join("\n");

  const addedCount = diffResult.filter((l) => l.type === "added").length;
  const removedCount = diffResult.filter((l) => l.type === "removed").length;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Text Diff</h1>
      <p className="text-slate-500 mb-8">Compare two pieces of text side by side and see what changed.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Original Text</label>
            <textarea
              value={oldText}
              onChange={(e) => setOldText(e.target.value)}
              className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
              placeholder="Paste original text here..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Modified Text</label>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
              placeholder="Paste modified text here..."
            />
          </div>
        </div>

        <button
          onClick={compare}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
        >
          Compare
        </button>

        {hasCompared && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-4">
                <label className="block text-sm font-medium text-slate-700">Diff Result</label>
                <span className="text-xs text-green-600 font-medium">+{addedCount} added</span>
                <span className="text-xs text-red-600 font-medium">-{removedCount} removed</span>
              </div>
              <CopyButton text={diffText} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 overflow-auto max-h-96">
              <table className="w-full">
                <tbody>
                  {diffResult.map((line, idx) => (
                    <tr key={idx} className="border-b border-gray-100 last:border-0">
                      <td className="px-2 py-0.5 text-right text-xs text-slate-400 select-none w-12 font-mono border-r border-gray-200">
                        {line.lineNumOld ?? ""}
                      </td>
                      <td className="px-2 py-0.5 text-right text-xs text-slate-400 select-none w-12 font-mono border-r border-gray-200">
                        {line.lineNumNew ?? ""}
                      </td>
                      <td
                        className={`px-4 py-0.5 font-mono text-sm whitespace-pre ${
                          line.type === "added"
                            ? "bg-green-50 text-green-800"
                            : line.type === "removed"
                            ? "bg-red-50 text-red-800"
                            : "text-slate-700"
                        }`}
                      >
                        {line.type === "added" ? "+ " : line.type === "removed" ? "- " : "  "}
                        {line.text}
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
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">How does the diff algorithm work?</h3>
            <p className="text-sm text-slate-600 mt-1">This tool uses a Longest Common Subsequence (LCS) algorithm to compare two texts line by line. It identifies which lines were added, removed, or remained unchanged.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data sent to a server?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All processing happens in your browser. Your data never leaves your device.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I compare files?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes, just paste the file contents into both text areas. The tool compares text line by line regardless of whether it comes from files or plain text.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is there a character limit?</h3>
            <p className="text-sm text-slate-600 mt-1">The tool works best with files under 10,000 lines. Very large inputs may slow down the comparison.</p>
          </div>
        </div>
      </div>
    </>
  );
}
