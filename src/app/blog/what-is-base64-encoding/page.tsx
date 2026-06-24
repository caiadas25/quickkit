import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Base64 Encoding? When to Use It and When Not To | QuickKit",
  description: "Base64 is everywhere — in emails, URLs, and data URIs. Here's what it actually does, when it's useful, and when it's just adding bloat.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>What is Base64 Encoding? When to Use It and When Not To</h1>
      <p className="text-slate-400 text-sm">June 24, 2026 · 4 min read</p>

      <p>You&apos;ve probably seen strings like <code>SGVsbG8gV29ybGQ=</code> and wondered what they are. That&apos;s Base64 — a way to encode binary data as plain text.</p>

      <h2>How Base64 Works</h2>
      <p>Base64 takes every 3 bytes of binary data and converts them into 4 ASCII characters. It uses a set of 64 characters: A-Z, a-z, 0-9, +, and /. A padding character (=) fills the end when the input isn&apos;t a multiple of 3.</p>
      <p>The result is about 33% larger than the original — but it&apos;s safe to transmit over any text-based system.</p>

      <h2>Where Base64 Is Used</h2>
      <ul>
        <li><strong>Email attachments</strong> — MIME encoding in emails uses Base64 to attach binary files</li>
        <li><strong>Data URIs</strong> — Embedding images directly in HTML/CSS: <code>data:image/png;base64,iVBOR...</code></li>
        <li><strong>JWT tokens</strong> — The header and payload of JSON Web Tokens are Base64-encoded</li>
        <li><strong>Basic HTTP Authentication</strong> — <code>Authorization: Basic dXNlcjpwYXNz</code></li>
        <li><strong>Embedding binary in JSON</strong> — When you can&apos;t send raw bytes</li>
      </ul>

      <h2>When NOT to Use Base64</h2>
      <ul>
        <li><strong>Encryption</strong> — Base64 is NOT encryption. Anyone can decode it. It provides zero security.</li>
        <li><strong>Compression</strong> — It makes data larger, not smaller.</li>
        <li><strong>Modern file transfer</strong> — If you can send binary, just send binary. Base64 is for systems that only handle text.</li>
      </ul>

      <h2>Encode and Decode Base64 Online</h2>
      <p>Use the <Link href="/tools/base64" className="text-indigo-600 hover:underline">Base64 Encode/Decode tool</Link> to convert text to Base64 or decode Base64 back to plain text. It works entirely in your browser — no data is sent anywhere.</p>

      <div className="not-prose mt-6">
        <Link href="/tools/base64" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          Open Base64 Tool →
        </Link>
      </div>
    </article>
  );
}
