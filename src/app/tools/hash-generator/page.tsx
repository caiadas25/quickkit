"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

async function computeHash(algorithm: string, text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!input) return;
    setLoading(true);
    const algorithms = [
      ["MD5", "MD5"],
      ["SHA-1", "SHA-1"],
      ["SHA-256", "SHA-256"],
      ["SHA-512", "SHA-512"],
    ];
    // Note: Web Crypto doesn't support MD5. We'll show a message for it.
    const results: Record<string, string> = {};
    for (const [name, algo] of algorithms) {
      if (algo === "MD5") {
        results[name] = "Not supported by Web Crypto API";
      } else {
        results[name] = await computeHash(algo, input);
      }
    }
    setHashes(results);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Hash Generator</h1>
      <p className="text-slate-500 mb-8">Generate SHA-1, SHA-256, and SHA-512 hashes from any text input.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Enter text to hash..."
          />
        </div>

        <button
          onClick={generate}
          disabled={!input || loading}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Computing..." : "Generate Hashes"}
        </button>

        {Object.keys(hashes).length > 0 && (
          <div className="space-y-3">
            {Object.entries(hashes).map(([algo, hash]) => (
              <div key={algo} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700">{algo}</span>
                  {!hash.startsWith("Not supported") && <CopyButton text={hash} />}
                </div>
                <div className="font-mono text-xs text-slate-600 break-all bg-slate-50 rounded p-2">
                  {hash}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What hash algorithms are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">This tool generates SHA-1, SHA-256, and SHA-512 hashes using the browser's Web Crypto API. MD5 is not supported by the Web Crypto API for security reasons.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Which hash should I use?</h3>
            <p className="text-sm text-slate-600 mt-1">SHA-256 is the most commonly recommended for general use. SHA-512 offers higher security but produces longer hashes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Are hashes one-way?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Cryptographic hash functions are designed to be irreversible — you cannot recover the original text from a hash.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — Hash Generator\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/hash-generator\",\n      \"description\": \"Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
