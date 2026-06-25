"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [realTime, setRealTime] = useState(false);

  const encode = () => {
    setError("");
    try {
      setOutput(encodeURIComponent(input));
    } catch {
      setError("Failed to encode input.");
    }
  };

  const decode = () => {
    setError("");
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setError("Failed to decode input. Make sure it is valid URL-encoded text.");
    }
  };

  const process = () => {
    if (mode === "encode") encode();
    else decode();
  };

  // Real-time encoding/decoding
  const handleInputChange = (value: string) => {
    setInput(value);
    if (realTime) {
      setError("");
      try {
        if (mode === "encode") {
          setOutput(encodeURIComponent(value));
        } else {
          setOutput(decodeURIComponent(value));
        }
      } catch {
        setError("Invalid input for current mode.");
        setOutput("");
      }
    }
  };

  const encodeURIResult = (() => {
    try {
      return encodeURI(input);
    } catch {
      return "";
    }
  })();

  const encodeURIComponentResult = (() => {
    try {
      return encodeURIComponent(input);
    } catch {
      return "";
    }
  })();

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">URL Encoder / Decoder</h1>
      <p className="text-slate-500 mb-8">Encode text to URL-safe strings or decode URL-encoded text back to plain text.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input</label>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full h-32 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Enter text to encode or URL-encoded text to decode..."
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              onClick={() => setMode("encode")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "encode" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Encode
            </button>
            <button
              onClick={() => setMode("decode")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mode === "decode" ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              Decode
            </button>
          </div>

          <button
            onClick={process}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            {mode === "encode" ? "Encode →" : "← Decode"}
          </button>

          <label className="inline-flex items-center gap-2 text-sm text-slate-600 ml-4 cursor-pointer">
            <input
              type="checkbox"
              checked={realTime}
              onChange={(e) => {
                setRealTime(e.target.checked);
                if (e.target.checked && input) {
                  try {
                    if (mode === "encode") setOutput(encodeURIComponent(input));
                    else setOutput(decodeURIComponent(input));
                  } catch {
                    setOutput("");
                  }
                }
              }}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            Real-time
          </label>
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

        {/* Info Box */}
        {input && (
          <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-4 text-sm">
            <h4 className="font-semibold text-indigo-800 mb-2">Difference: encodeURI vs encodeURIComponent</h4>
            <div className="space-y-2 font-mono text-xs">
              <div>
                <span className="text-slate-500">encodeURI:</span>{" "}
                <span className="text-slate-700">{encodeURIResult || "—"}</span>
              </div>
              <div>
                <span className="text-slate-500">encodeURIComponent:</span>{" "}
                <span className="text-slate-700">{encodeURIComponentResult || "—"}</span>
              </div>
            </div>
            <p className="text-indigo-700 mt-2">
              <strong>encodeURI</strong> preserves URL structure (does not encode: <code>A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * #</code>).
              <br />
              <strong>encodeURIComponent</strong> encodes everything except: <code>A-Z a-z 0-9 - _ . ! ~ * ' ( )</code>.
            </p>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is URL encoding?</h3>
            <p className="text-sm text-slate-600 mt-1">URL encoding (percent-encoding) converts characters that are not allowed in URLs into a format that can be transmitted over the Internet. For example, a space becomes %20.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">When should I use encodeURI vs encodeURIComponent?</h3>
            <p className="text-sm text-slate-600 mt-1">Use <strong>encodeURI</strong> when encoding a complete URL (it preserves slashes, colons, etc.). Use <strong>encodeURIComponent</strong> when encoding a single parameter value (it encodes more characters).</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data sent to a server?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All processing happens in your browser. Your data never leaves your device.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I encode non-ASCII characters?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. The tool handles Unicode characters (emoji, CJK, etc.) correctly using JavaScript's built-in encoding functions.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — URL Encoder/Decoder\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/url-encoder\",\n      \"description\": \"Encode text to URL-safe strings or decode URL-encoded text back to plain text.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
