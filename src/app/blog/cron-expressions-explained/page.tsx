import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron Expressions Explained: Every Field Decoded | QuickKit",
  description: "Cron expressions look cryptic but they're simple once you break them down. Learn each field, common patterns, and build your own schedules.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>Cron Expressions Explained: Every Field Decoded</h1>
      <p className="text-slate-400 text-sm">June 24, 2026 · 5 min read</p>

      <p>Cron expressions are the backbone of scheduled tasks on Linux servers, CI/CD pipelines, and cloud platforms. If you&apos;ve ever stared at <code>0 9 * * 1-5</code> and felt lost, this guide is for you.</p>

      <h2>The 5 Fields</h2>
      <p>A cron expression has 5 fields separated by spaces:</p>
      <pre><code>{`┌───────────── minute (0-59)
│ ┌───────────── hour (0-23)
│ │ ┌───────────── day of month (1-31)
│ │ │ ┌───────────── month (1-12)
│ │ │ │ ┌───────────── day of week (0-7, 0=7=Sun)
│ │ │ │ │
* * * * *`}</code></pre>

      <h2>Special Characters</h2>
      <ul>
        <li><code>*</code> — &quot;every&quot; — matches any value</li>
        <li><code>*/n</code> — every n units (e.g., <code>*/15</code> = every 15 minutes)</li>
        <li><code>a-b</code> — range from a to b (e.g., <code>1-5</code> = Mon-Fri)</li>
        <li><code>a,b,c</code> — list of specific values (e.g., <code>1,3,5</code>)</li>
      </ul>

      <h2>Common Examples</h2>
      <table>
        <thead><tr><th>Expression</th><th>Schedule</th></tr></thead>
        <tbody>
          <tr><td><code>* * * * *</code></td><td>Every minute</td></tr>
          <tr><td><code>0 * * * *</code></td><td>Every hour (at :00)</td></tr>
          <tr><td><code>0 9 * * *</code></td><td>Daily at 9:00 AM</td></tr>
          <tr><td><code>0 9 * * 1-5</code></td><td>Weekdays at 9:00 AM</td></tr>
          <tr><td><code>0 0 1 * *</code></td><td>1st of every month at midnight</td></tr>
          <tr><td><code>*/5 * * * *</code></td><td>Every 5 minutes</td></tr>
          <tr><td><code>0 0 * * 0</code></td><td>Every Sunday at midnight</td></tr>
        </tbody>
      </table>

      <h2>Build Cron Expressions Visually</h2>
      <p>Instead of memorizing the syntax, use a visual builder to point-and-click your schedule:</p>

      <div className="not-prose mt-6">
        <Link href="/tools/cron-builder" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          Open Cron Expression Builder →
        </Link>
      </div>
    </article>
  );
}
