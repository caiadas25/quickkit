import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Generate UUIDs — A Developer's Guide | QuickKit",
  description:
    "Learn what UUIDs are, why they matter, and how to generate them instantly with our free online UUID generator. Covers v4, v5, and batch generation.",
  openGraph: {
    title: "How to Generate UUIDs — Developer's Guide",
    description: "What UUIDs are, when to use them, and how to generate them with a free online tool.",
    type: "article",
  },
};

export default function UUIDGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">How to Generate UUIDs</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Developer Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How to Generate UUIDs
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            UUIDs (Universally Unique Identifiers) are everywhere in modern software. Database primary
            keys, API request IDs, session tokens — they all use UUIDs. Here&apos;s everything you need
            to know, plus a free tool to generate them instantly.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">What is a UUID?</h2>
          <div className="prose max-w-none space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              A UUID is a 128-bit identifier that is unique across space and time. It looks like this:
            </p>
            <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-700">
              550e8400-e29b-41d4-a716-446655440000
            </pre>
            <p>
              The probability of generating two identical UUIDs is so astronomically low that you could
              generate 1 billion UUIDs per second for 85 years before having a 50% chance of a single
              collision. In practice, they are effectively unique.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Use UUIDs?</h2>
          <div className="grid gap-4 text-sm">
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">No Central Authority Needed</h3>
              <p className="text-slate-500">Unlike auto-increment IDs, UUIDs can be generated anywhere without coordinating with a database server. Perfect for distributed systems.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">No Data Leakage</h3>
              <p className="text-slate-500">Auto-increment IDs reveal how many records exist (user #1234 has been around since day one). UUIDs don&apos;t leak this information.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">Merge-Safe</h3>
              <p className="text-slate-500">When merging data from multiple sources, auto-increment IDs can collide. UUIDs won&apos;t, even across completely independent databases.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">UUID Versions</h2>
          <div className="prose max-w-none space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-800">UUID v4</strong> is the most common. It&apos;s purely random — 122 bits of randomness with 6 bits for version and variant. This is what most people mean when they say &quot;UUID.&quot;
            </p>
            <p>
              <strong className="text-slate-800">UUID v5</strong> is deterministic. It generates the same UUID from the same namespace and name using SHA-1 hashing. Useful when you need reproducible IDs.
            </p>
            <p>
              <strong className="text-slate-800">UUID v1</strong> is timestamp-based. It includes the MAC address and timestamp, which makes it less private but useful for sorting by creation time.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Generate UUIDs Now</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
            <p className="text-slate-600 mb-4">
              Our free UUID generator creates random v4 UUIDs instantly. Generate one or batch-generate up to 100 at a time.
            </p>
            <Link
              href="/tools/uuid-generator"
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Open UUID Generator →
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">UUIDs in Different Languages</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2 font-mono text-sm">JavaScript</h3>
              <pre className="bg-slate-50 rounded p-3 text-xs font-mono text-slate-700 overflow-x-auto">{`// Using crypto.randomUUID() (built-in)
const uuid = crypto.randomUUID();

// Using uuid package
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();`}</pre>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2 font-mono text-sm">Python</h3>
              <pre className="bg-slate-50 rounded p-3 text-xs font-mono text-slate-700 overflow-x-auto">{`import uuid
uuid_str = str(uuid.uuid4())

# Deterministic (v5)
uuid_v5 = uuid.uuid5(uuid.NAMESPACE_DNS, 'example.com')`}</pre>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2 font-mono text-sm">Go</h3>
              <pre className="bg-slate-50 rounded p-3 text-xs font-mono text-slate-700 overflow-x-auto">{`import "github.com/google/uuid"
id := uuid.New().String()`}</pre>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/hash-generator" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">Hash Generator →</span>
              <span className="block text-slate-500 mt-1">Generate MD5, SHA-1, SHA-256 hashes</span>
            </Link>
            <Link href="/tools/password-generator" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">Password Generator →</span>
              <span className="block text-slate-500 mt-1">Create strong, random passwords</span>
            </Link>
            <Link href="/tools/json-formatter" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">JSON Formatter →</span>
              <span className="block text-slate-500 mt-1">Format and validate JSON data</span>
            </Link>
            <Link href="/blog/what-is-base64-encoding" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">What is Base64? →</span>
              <span className="block text-slate-500 mt-1">Learn about Base64 encoding and decoding</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Generate UUIDs — A Developer's Guide",
            description: "Learn what UUIDs are, why they matter, and how to generate them with a free online tool.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/how-to-generate-uuids",
          }),
        }}
      />
    </div>
  );
}
