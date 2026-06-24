"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    setError("");
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setError("Failed to encode. Make sure input is valid text.");
    }
  };

  const decode = () => {
    setError("");
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch {
      setError("Failed to decode. Input is not valid Base64.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Base64 Encode / Decode</h1>
      <p className="text-slate-500 mb-8">Encode text to Base64 or decode Base64 strings back to plain text.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Enter text to encode or Base64 to decode..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button onClick={encode} className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none">
            Encode →
          </button>
          <button onClick={decode} className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none">
            ← Decode
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
              <label className="block text-sm font-medium text-slate-700">Output</label>
              <CopyButton text={output} />
            </div>
            <textarea
              readOnly
              value={output}
              className="w-full h-32 rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800 outline-none resize-y"
            />
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is Base64 encoding?</h3>
            <p className="text-sm text-slate-600 mt-1">Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 ASCII characters. It's commonly used for transmitting data over text-based protocols.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is Base64 the same as encryption?</h3>
            <p className="text-sm text-slate-600 mt-1">No. Base64 is an encoding, not encryption. It provides no security — anyone can decode Base64 text easily.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Does it handle Unicode?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. This tool properly handles Unicode characters (emoji, CJK, etc.) through UTF-8 encoding before Base64 conversion.</p>
          </div>
        </div>
      </div>
    </>
  );
}
