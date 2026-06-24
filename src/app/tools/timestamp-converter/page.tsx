"use client";

import { useState, useCallback } from "react";
import CopyButton from "@/components/CopyButton";

function formatRFC2822(date: Date): string {
  return date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
}

function formatRelative(date: Date): string {
  const now = Date.now();
  const diff = now - date.getTime();
  const absDiff = Math.abs(diff);
  const suffix = diff > 0 ? "ago" : "from now";

  const seconds = Math.floor(absDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""} ${suffix}`;
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ${suffix}`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ${suffix}`;
  if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ${suffix}`;
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ${suffix}`;
  return `${years} year${years !== 1 ? "s" : ""} ${suffix}`;
}

export default function TimestampConverterPage() {
  const [input, setInput] = useState("");

  const getTimestamps = useCallback(() => {
    if (!input.trim()) return null;

    const trimmed = input.trim();
    let date: Date | null = null;
    let detectedFormat = "";

    // Auto-detect: pure number = timestamp
    const numVal = Number(trimmed);
    if (!isNaN(numVal) && trimmed.match(/^\d+(\.\d+)?$/) && numVal > 0) {
      // Detect seconds vs milliseconds
      if (numVal > 1e12) {
        date = new Date(numVal);
        detectedFormat = "milliseconds";
      } else {
        date = new Date(numVal * 1000);
        detectedFormat = "seconds";
      }
    } else {
      // Try parsing as date string
      const parsed = new Date(trimmed);
      if (!isNaN(parsed.getTime())) {
        date = parsed;
        detectedFormat = "date string";
      }
    }

    if (!date) return null;

    return {
      detectedFormat,
      date,
      unixSeconds: Math.floor(date.getTime() / 1000),
      unixMs: date.getTime(),
      iso8601: date.toISOString(),
      rfc2822: formatRFC2822(date),
      relative: formatRelative(date),
    };
  }, [input]);

  const result = getTimestamps();

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Timestamp Converter</h1>
      <p className="text-slate-500 mb-8">
        Convert between Unix timestamps, ISO 8601, RFC 2822, and relative time formats.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Unix timestamp or date/time
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="e.g. 1700000000 or 2023-11-14T22:13:20.000Z"
            />
            <button
              onClick={() => setInput(String(Math.floor(Date.now() / 1000)))}
              className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Now
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Enter a Unix timestamp (auto-detects seconds vs milliseconds) or a date string.
          </p>
        </div>

        {result && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                Detected: {result.detectedFormat}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-slate-400 block">Unix (seconds)</span>
                <span className="font-mono text-sm text-slate-700">{result.unixSeconds}</span>
              </div>
              <CopyButton text={String(result.unixSeconds)} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-slate-400 block">Unix (milliseconds)</span>
                <span className="font-mono text-sm text-slate-700">{result.unixMs}</span>
              </div>
              <CopyButton text={String(result.unixMs)} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-slate-400 block">ISO 8601</span>
                <span className="font-mono text-sm text-slate-700">{result.iso8601}</span>
              </div>
              <CopyButton text={result.iso8601} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-slate-400 block">RFC 2822</span>
                <span className="font-mono text-sm text-slate-700">{result.rfc2822}</span>
              </div>
              <CopyButton text={result.rfc2822} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-slate-400 block">Relative time</span>
                <span className="font-mono text-sm text-slate-700">{result.relative}</span>
              </div>
              <CopyButton text={result.relative} />
            </div>
          </div>
        )}

        {!result && input.trim() && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
            <span className="font-semibold">Could not parse input.</span> Enter a valid Unix
            timestamp or date/time string.
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">
              What is a Unix timestamp?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              A Unix timestamp is the number of seconds (or milliseconds) that have elapsed since
              January 1, 1970 (the Unix epoch). It&apos;s commonly used in programming and APIs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              How does the tool detect seconds vs milliseconds?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              If the number is greater than 10^12 (1,000,000,000,000), it&apos;s treated as
              milliseconds. Otherwise, it&apos;s treated as seconds. Both formats are always
              shown.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              What date formats are accepted?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Any format that JavaScript&apos;s Date constructor can parse, including ISO 8601
              (2023-11-14T22:13:20Z), RFC 2822, and common date strings like &quot;Nov 14,
              2023&quot;.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Is my data stored anywhere?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              No. All conversions happen entirely in your browser. No data is sent to any server.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
