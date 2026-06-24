"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 2rem auto; padding: 0 1rem; }
    h1 { color: #4F46E5; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <div class="card">
    <p>Edit this HTML to see a live preview →</p>
  </div>
</body>
</html>`;

const SNIPPETS = [
  { name: "Empty Page", html: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page</title>\n</head>\n<body>\n  \n</body>\n</html>" },
  { name: "Card Layout", html: DEFAULT_HTML },
  { name: "Email Template", html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
<h2 style="color:#4F46E5">Hello!</h2>
<p>This is an email template.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;border-radius:8px;padding:20px">
<tr><td><strong>Feature:</strong> Something great</td></tr>
<tr><td><strong>Date:</strong> Today</td></tr>
</table>
<br>
<a href="#" style="background:#4F46E5;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">Click Me</a>
</body></html>` },
];

export default function HtmlPreviewTool() {
  const [html, setHtml] = useState(DEFAULT_HTML);

  return (
    <>
      <p className="text-slate-500 mb-4">
        Write HTML on the left, see the live result on the right. Great for testing email templates, snippets, and layouts.
      </p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {SNIPPETS.map((s) => (
          <button
            key={s.name}
            onClick={() => setHtml(s.html)}
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-slate-700">HTML</label>
            <CopyButton text={html} />
          </div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-[400px] rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none bg-slate-50"
            spellCheck={false}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-slate-700 mb-2 block">Preview</label>
          <iframe
            srcDoc={html}
            className="w-full h-[400px] rounded-lg border border-slate-300 bg-white"
            title="HTML Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

      <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 mb-6">
        <h3 className="text-sm font-semibold text-slate-700 mb-1">Download HTML</h3>
        <button
          onClick={() => {
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "page.html";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Download .html
        </button>
      </div>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Can I use this to preview email templates?", a: "Yes! Email HTML is notoriously tricky. Use this to quickly test how your email markup renders before sending." },
            { q: "Does the preview run JavaScript?", a: "The preview uses a sandboxed iframe. Inline scripts will run, but external resource loading may be restricted for security." },
            { q: "Can I share the HTML with others?", a: "Copy or download the HTML file and share it however you like. The tool doesn't store any of your code." },
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
            "name": "QuickKit — HTML Preview",
            "operatingSystem": "Any",
            "applicationCategory": "DeveloperApplication",
            "url": "https://quickkit-nine.vercel.app/tools/html-preview",
            "description": "Write HTML and see a live preview in real-time with a split-pane editor.",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          }),
        }}
      />
    </>
  );
}
