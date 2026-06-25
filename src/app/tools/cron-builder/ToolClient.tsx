"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

const FIELDS = ["minute", "hour", "day of month", "month", "day of week"] as const;
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const PRESETS: { name: string; cron: string; desc: string }[] = [
  { name: "Every minute", cron: "* * * * *", desc: "Runs every minute" },
  { name: "Every hour", cron: "0 * * * *", desc: "Runs at minute 0 of every hour" },
  { name: "Daily at 9 AM", cron: "0 9 * * *", desc: "Runs at 9:00 AM every day" },
  { name: "Daily at midnight", cron: "0 0 * * *", desc: "Runs at 12:00 AM every day" },
  { name: "Weekly Monday 9 AM", cron: "0 9 * * 1", desc: "Runs at 9:00 AM every Monday" },
  { name: "Monthly 1st at midnight", cron: "0 0 1 * *", desc: "Runs at midnight on the 1st of every month" },
  { name: "Every 15 min", cron: "*/15 * * * *", desc: "Runs every 15 minutes" },
  { name: "Weekdays at 9 AM", cron: "0 9 * * 1-5", desc: "Runs at 9:00 AM Monday through Friday" },
];

function describeCron(fields: string[]): string {
  const [min, hour, dom, mon, dow] = fields;
  const parts: string[] = [];

  if (min === "*" && hour === "*") parts.push("Every minute");
  else if (min === "0" && hour === "*") parts.push("Every hour at minute 0");
  else if (min !== "*" && hour !== "*") parts.push(`At ${hour.padStart(2, "0")}:${min.padStart(2, "0")}`);
  else if (hour !== "*") parts.push(`At hour ${hour}`);
  else if (min === "0") parts.push("At minute 0");
  else parts.push(`At minute ${min}`);

  if (dom !== "*") parts.push(`on day ${dom}`);
  if (mon !== "*") parts.push(`in ${mon.split(",").map(m => MONTHS[parseInt(m) - 1] || m).join(", ")}`);
  if (dow !== "*") {
    if (dow.includes("-")) {
      const [a, b] = dow.split("-");
      parts.push(`${DAYS[parseInt(a)]} through ${DAYS[parseInt(b)]}`);
    } else {
      parts.push(`on ${dow.split(",").map(d => DAYS[parseInt(d)] || d).join(", ")}`);
    }
  }

  return parts.join(" ");
}

export default function CronBuilderTool() {
  const [fields, setFields] = useState(["*", "*", "*", "*", "*"]);
  const [activeField, setActiveField] = useState<number | null>(null);

  const setCronField = (index: number, value: string) => {
    const next = [...fields];
    next[index] = value;
    setFields(next);
  };

  const cronExpr = fields.join(" ");
  const description = describeCron(fields);

  return (
    <>
      <p className="text-slate-500 mb-6">
        Build cron expressions visually. Click a field to configure it, or start from a preset below.
      </p>

      {/* Presets */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => setFields(p.cron.split(" "))}
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Cron Expression Display */}
      <div className="rounded-lg bg-slate-900 text-white p-4 mb-4 flex items-center gap-3">
        <code className="flex-1 font-mono text-lg tracking-wider">{cronExpr}</code>
        <CopyButton text={cronExpr} className="bg-white/10 text-white hover:bg-white/20" />
      </div>
      <p className="text-sm text-slate-600 mb-6 italic">{description}</p>

      {/* Fields */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {FIELDS.map((name, i) => (
          <button
            key={name}
            onClick={() => setActiveField(activeField === i ? null : i)}
            className={`rounded-lg border-2 p-3 text-center transition ${
              activeField === i
                ? "border-indigo-500 bg-indigo-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="text-xs text-slate-500 mb-1">{name}</div>
            <div className="font-mono font-bold text-lg text-slate-800">{fields[i]}</div>
          </button>
        ))}
      </div>

      {/* Field Editor */}
      {activeField !== null && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Edit: {FIELDS[activeField]}</h3>
          
          {activeField === 0 && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setCronField(0, "*")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">* (every)</button>
                <button onClick={() => setCronField(0, "*/5")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">*/5 (every 5 min)</button>
                <button onClick={() => setCronField(0, "*/15")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">*/15 (every 15 min)</button>
                <button onClick={() => setCronField(0, "*/30")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">*/30 (every 30 min)</button>
              </div>
              <input
                value={fields[0]}
                onChange={(e) => setCronField(0, e.target.value)}
                className="w-full rounded border border-slate-300 px-3 py-2 font-mono text-sm"
                placeholder="0-59, *, */n"
              />
            </div>
          )}

          {activeField === 1 && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setCronField(1, "*")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">* (every)</button>
                {[0,6,9,12,18].map(h => (
                  <button key={h} onClick={() => setCronField(1, String(h))} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{String(h).padStart(2,"0")}:00</button>
                ))}
              </div>
              <input
                value={fields[1]}
                onChange={(e) => setCronField(1, e.target.value)}
                className="w-full rounded border border-slate-300 px-3 py-2 font-mono text-sm"
                placeholder="0-23, *, */n"
              />
            </div>
          )}

          {activeField === 2 && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setCronField(2, "*")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">* (every)</button>
                {[1,15,28].map(d => (
                  <button key={d} onClick={() => setCronField(2, String(d))} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">Day {d}</button>
                ))}
              </div>
              <input
                value={fields[2]}
                onChange={(e) => setCronField(2, e.target.value)}
                className="w-full rounded border border-slate-300 px-3 py-2 font-mono text-sm"
                placeholder="1-31, *, */n"
              />
            </div>
          )}

          {activeField === 3 && (
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setCronField(3, "*")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">* (every)</button>
              {MONTHS.map((m, i) => (
                <button key={m} onClick={() => setCronField(3, String(i + 1))} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{m}</button>
              ))}
            </div>
          )}

          {activeField === 4 && (
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setCronField(4, "*")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">* (every)</button>
              {DAYS.map((d, i) => (
                <button key={d} onClick={() => setCronField(4, String(i))} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{d}</button>
              ))}
              <button onClick={() => setCronField(4, "1-5")} className="rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">Mon-Fri</button>
            </div>
          )}
        </div>
      )}

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What is a cron expression?", a: "A cron expression is a string with 5 or 6 fields that represents a schedule. Fields from left to right: minute, hour, day of month, month, day of week." },
            { q: "What do asterisks (*) mean?", a: "An asterisk means 'every'. For example, * in the hour field means 'every hour'." },
            { q: "Where can I use cron expressions?", a: "Cron expressions are used in Unix/Linux crontab, GitHub Actions, GitLab CI, Jenkins, AWS CloudWatch Events, Vercel cron jobs, and many more scheduling systems." },
            { q: "What is the syntax for ranges and intervals?", a: "Ranges use hyphens: 1-5 means Monday through Friday. Intervals use slashes: */15 means every 15 units. Lists use commas: 1,3,5 means the 1st, 3rd, and 5th." },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-slate-800">{faq.q}</h3>
              <p className="text-slate-600 text-sm mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "QuickKit — Cron Expression Builder",
            "operatingSystem": "Any",
            "applicationCategory": "DeveloperApplication",
            "url": "https://quickkit-nine.vercel.app/tools/cron-builder",
            "description": "Build cron expressions visually with a point-and-click interface and human-readable descriptions.",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          }),
        }}
      />
    </>
  );
}
