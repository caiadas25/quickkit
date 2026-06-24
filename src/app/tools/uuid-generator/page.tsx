"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

function generateUUID(): string {
  return crypto.randomUUID();
}

export default function UuidGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([]);

  const generate = (count: number) => {
    const newUuids = Array.from({ length: count }, () => generateUUID());
    setUuids((prev) => [...prev, ...newUuids]);
  };

  const clear = () => setUuids([]);

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">UUID Generator</h1>
      <p className="text-slate-500 mb-8">Generate random UUID v4 identifiers for your projects.</p>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {[1, 5, 10, 100].map((n) => (
            <button
              key={n}
              onClick={() => generate(n)}
              className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
            >
              Generate {n}
            </button>
          ))}
          {uuids.length > 0 && (
            <button onClick={clear} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors">
              Clear All
            </button>
          )}
        </div>

        {uuids.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500">{uuids.length} UUIDs generated</span>
              <CopyButton text={uuids.join("\n")} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-slate-50 p-4 max-h-80 overflow-y-auto">
              <ul className="space-y-1">
                {uuids.map((uuid, i) => (
                  <li key={i} className="flex items-center justify-between font-mono text-sm text-slate-700 py-1 border-b border-gray-100 last:border-0">
                    <span>{uuid}</span>
                    <CopyButton text={uuid} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is a UUID v4?</h3>
            <p className="text-sm text-slate-600 mt-1">UUID v4 is a universally unique identifier generated from random numbers. There's a 1 in 2^122 chance of collision, making them practically unique.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Are these cryptographically secure?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. This tool uses the browser's crypto.randomUUID() API which relies on a cryptographically secure random number generator.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I use these in production?</h3>
            <p className="text-sm text-slate-600 mt-1">Absolutely. UUID v4 is widely used in databases, APIs, and distributed systems for unique record identification.</p>
          </div>
        </div>
      </div>
    </>
  );
}
