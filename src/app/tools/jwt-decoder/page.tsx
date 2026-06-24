"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

interface DecodedJWT {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
  error: string | null;
}

function decodeJWT(token: string): DecodedJWT {
  const empty: DecodedJWT = { header: {}, payload: {}, signature: "", error: null };

  const parts = token.trim().split(".");
  if (parts.length !== 3) {
    return { ...empty, error: "Invalid JWT format. Expected 3 parts separated by dots." };
  }

  try {
    const header = JSON.parse(atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")));
    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));

    // Convert signature to hex
    const sigBytes = atob(parts[2].replace(/-/g, "+").replace(/_/g, "/"));
    const signature = Array.from(sigBytes)
      .map((b) => b.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");

    return { header, payload, signature, error: null };
  } catch (e: any) {
    return { ...empty, error: `Failed to decode JWT: ${e.message}` };
  }
}

export default function JwtDecoderPage() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState<DecodedJWT | null>(null);

  const decode = () => {
    if (!token.trim()) {
      setResult({ header: {}, payload: {}, signature: "", error: "Please paste a JWT token." });
      return;
    }
    setResult(decodeJWT(token));
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setToken(text);
      setResult(decodeJWT(text));
    } catch {
      // Clipboard access denied
    }
  };

  const headerJson = result ? JSON.stringify(result.header, null, 2) : "";
  const payloadJson = result ? JSON.stringify(result.payload, null, 2) : "";

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">JWT Decoder</h1>
      <p className="text-slate-500 mb-8">Decode JSON Web Tokens to view their header, payload, and signature.</p>

      <div className="space-y-4">
        {/* Warning */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 flex items-start gap-3">
          <svg className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <span className="font-semibold">Warning:</span> This only decodes the token — it does NOT verify the signature. Do not trust decoded data without independent verification.
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">JWT Token</label>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full h-32 rounded-lg border border-gray-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Paste your JWT token here..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={decode}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Decode JWT
          </button>
          <button
            onClick={handlePaste}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            📋 Paste from clipboard
          </button>
        </div>

        {result?.error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <span className="font-semibold">Error:</span> {result.error}
          </div>
        )}

        {result && !result.error && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500" />
                  <label className="block text-sm font-medium text-blue-700">Header</label>
                </div>
                <CopyButton text={headerJson} />
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 overflow-auto max-h-60">
                <table className="w-full">
                  <tbody>
                    {Object.entries(result.header).map(([key, value]) => (
                      <tr key={key} className="border-b border-blue-100 last:border-0">
                        <td className="px-4 py-1.5 text-sm font-semibold text-blue-800 font-mono w-1/3">{key}</td>
                        <td className="px-4 py-1.5 text-sm text-blue-700 font-mono">{typeof value === "object" ? JSON.stringify(value) : String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payload */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
                  <label className="block text-sm font-medium text-green-700">Payload</label>
                </div>
                <CopyButton text={payloadJson} />
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 overflow-auto max-h-96">
                <table className="w-full">
                  <tbody>
                    {Object.entries(result.payload).map(([key, value]) => (
                      <tr key={key} className="border-b border-green-100 last:border-0">
                        <td className="px-4 py-1.5 text-sm font-semibold text-green-800 font-mono w-1/3">{key}</td>
                        <td className="px-4 py-1.5 text-sm text-green-700 font-mono break-all">{typeof value === "object" ? JSON.stringify(value) : String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Signature */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500" />
                <label className="block text-sm font-medium text-red-700">Signature</label>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <code className="text-sm text-red-700 font-mono break-all">{result.signature}</code>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is a JWT?</h3>
            <p className="text-sm text-slate-600 mt-1">JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts: header, payload, and signature.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can this tool verify JWT tokens?</h3>
            <p className="text-sm text-slate-600 mt-1">No. This tool only decodes the token contents. It does not verify the signature or check if the token is valid. For verification, you need the signing key.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What does the signature section show?</h3>
            <p className="text-sm text-slate-600 mt-1">The signature is shown in hexadecimal format. It's the part that proves the token was created by a specific entity and hasn't been tampered with.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my data sent to a server?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All decoding happens in your browser. Your JWT token never leaves your device.</p>
          </div>
        </div>
      </div>
    </>
  );
}
