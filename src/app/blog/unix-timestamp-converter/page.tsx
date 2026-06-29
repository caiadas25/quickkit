import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter — How to Convert Epoch Time | QuickKit",
  description:
    "Convert Unix timestamps to human-readable dates and back. Complete guide to epoch time with JavaScript, Python, and Bash code examples. Free online timestamp converter tool.",
  openGraph: {
    title: "Unix Timestamp Converter — How to Convert Epoch Time",
    description:
      "Convert Unix timestamps to human-readable dates. JavaScript, Python, and Bash examples.",
    type: "article",
    siteName: "QuickKit",
  },
};

export default function BlogUnixTimestampConverterPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Unix Timestamp Converter — How to Convert Epoch Time",
    description:
      "Convert Unix timestamps to human-readable dates and back. Complete guide with code examples.",
    datePublished: "2026-06-29",
    author: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-6"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Unix Timestamp Converter
        </h1>
        <div className="flex items-center gap-3 text-sm text-slate-500 mb-8">
          <time dateTime="2026-06-29">June 29, 2026</time>
          <span>·</span>
          <span>5 min read</span>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-6">
            A Unix timestamp is the number of seconds that have elapsed since
            January 1, 1970 (the Unix epoch). It is the standard way computers
            represent dates and times, and you will encounter it everywhere:
            APIs, databases, log files, and system configurations.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-8">
            <p className="text-sm font-medium text-indigo-800 mb-1">
              Try Our Tool
            </p>
            <p className="text-sm text-indigo-700">
              Use our{" "}
              <Link
                href="/tools/timestamp-converter"
                className="font-medium underline"
              >
                Timestamp Converter
              </Link>{" "}
              to convert between Unix timestamps, ISO 8601, and human-readable
              dates instantly.
            </p>
          </div>

          <h2>What Is a Unix Timestamp?</h2>
          <p>
            A Unix timestamp (also called epoch time or POSIX time) is a
            single number representing a specific moment in time. It counts
            seconds since midnight UTC on January 1, 1970.
          </p>
          <p>
            For example, the timestamp <code>1719686400</code> corresponds to
            July 1, 2024 at midnight UTC. Every second since then has its own
            unique number.
          </p>

          <h2>Convert Timestamp to Date</h2>

          <h3>JavaScript</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`// Seconds to Date
const timestamp = 1719686400;
const date = new Date(timestamp * 1000);
console.log(date.toISOString()); // "2024-07-01T00:00:00.000Z"
console.log(date.toLocaleString()); // Local time string

// Milliseconds (no multiply needed)
const msTimestamp = 1719686400000;
const date2 = new Date(msTimestamp);
console.log(date2.toISOString()); // Same result`}
          </pre>

          <h3>Python</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`from datetime import datetime

# Seconds to Date
timestamp = 1719686400
date = datetime.fromtimestamp(timestamp)
print(date.isoformat())    # "2024-07-01T00:00:00"
print(date.strftime("%Y-%m-%d %H:%M:%S"))  # "2024-07-01 00:00:00"

# UTC time
from datetime import timezone
date_utc = datetime.fromtimestamp(timestamp, tz=timezone.utc)
print(date_utc.isoformat())  # "2024-07-01T00:00:00+00:00"`}
          </pre>

          <h3>Bash</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`# Seconds to Date
date -d @1719686400              # "Mon Jul  1 00:00:00 UTC 2024"
date -d @1719686400 "+%Y-%m-%d"  # "2024-07-01"

# Current timestamp
date +%s                         # Current epoch seconds`}
          </pre>

          <h2>Convert Date to Timestamp</h2>

          <h3>JavaScript</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`// Date to Seconds
const date = new Date("2024-07-01T00:00:00Z");
const timestamp = Math.floor(date.getTime() / 1000);
console.log(timestamp); // 1719686400

// Current timestamp
const now = Math.floor(Date.now() / 1000);`}
          </pre>

          <h3>Python</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`from datetime import datetime

# Date to Timestamp
dt = datetime(2024, 7, 1, 0, 0, 0)
timestamp = int(dt.timestamp())
print(timestamp)  # 1719686400

# Current timestamp
import time
now = int(time.time())`}
          </pre>

          <h3>Bash</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`# Date to Timestamp
date -d "2024-07-01" +%s    # 1719686400

# Current timestamp
date +%s                    # Current epoch seconds`}
          </pre>

          <h2>Common Timestamp Formats</h2>
          <table>
            <thead>
              <tr>
                <th>Format</th>
                <th>Example</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seconds</td>
                <td><code>1719686400</code></td>
                <td>Most APIs, databases</td>
              </tr>
              <tr>
                <td>Milliseconds</td>
                <td><code>1719686400000</code></td>
                <td>JavaScript Date, many APIs</td>
              </tr>
              <tr>
                <td>ISO 8601</td>
                <td><code>2024-07-01T00:00:00Z</code></td>
                <td>Human-readable, REST APIs</td>
              </tr>
              <tr>
                <td>Unix Date</td>
                <td><code>Mon Jul 1 00:00:00 UTC 2024</code></td>
                <td>Log files, terminal output</td>
              </tr>
            </tbody>
          </table>

          <h2>Quick Reference</h2>
          <ul>
            <li>
              <strong>Epoch start:</strong> January 1, 1970, 00:00:00 UTC
            </li>
            <li>
              <strong>Y2038 problem:</strong> 32-bit signed integers overflow on
              January 19, 2038. Use 64-bit or millisecond timestamps.
            </li>
            <li>
              <strong>JavaScript:</strong> <code>Date.getTime()</code> returns
              milliseconds, not seconds. Divide by 1000 for Unix seconds.
            </li>
            <li>
              <strong>Python:</strong> <code>time.time()</code> returns float
              seconds. Use <code>int()</code> for whole seconds.
            </li>
            <li>
              <strong>Bash:</strong> <code>date +%s</code> gives current
              timestamp. <code>date -d @TIMESTAMP</code> converts back.
            </li>
          </ul>

          <h2>When to Use Timestamps</h2>
          <ul>
            <li>
              <strong>APIs:</strong> Most REST and GraphQL APIs use Unix
              timestamps for created_at, updated_at, and expires_at fields.
            </li>
            <li>
              <strong>Databases:</strong> Storing timestamps as integers is
              timezone-agnostic and avoids DST ambiguity.
            </li>
            <li>
              <strong>Log analysis:</strong> Sorting log entries by timestamp
              integer is faster than string comparison.
            </li>
            <li>
              <strong>Caching:</strong> ETags and cache headers often use epoch
              timestamps to determine freshness.
            </li>
            <li>
              <strong>Version control:</strong> Git commit timestamps are stored
              as epoch values.
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Related Posts
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog/how-to-generate-uuids"
                className="text-indigo-600 hover:text-indigo-800"
              >
                How to Generate UUIDs
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-decode-jwt"
                className="text-indigo-600 hover:text-indigo-800"
              >
                How to Decode a JWT Token
              </Link>
            </li>
            <li>
              <Link
                href="/blog/cron-expressions-explained"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Cron Expressions Explained
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
