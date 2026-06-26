import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Protobuf? — Protocol Buffers Explained for Developers | QuickKit",
  description:
    "Learn what Protocol Buffers (Protobuf) are, why Google created them, and how they compare to JSON for API data serialization. Includes practical code examples.",
  openGraph: {
    title: "What Is Protobuf? — Protocol Buffers Explained",
    description: "Protobuf vs JSON, schema evolution, and when to use Protocol Buffers in your projects.",
    type: "article",
  },
};

export default function ProtobufGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">What Is Protobuf?</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Developer Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Is Protobuf?
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Protocol Buffers (Protobuf) is Google&apos;s language-neutral, platform-neutral mechanism for
            serializing structured data. It&apos;s used in gRPC, config files, and anywhere JSON
            isn&apos;t fast enough.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">What Are Protocol Buffers?</h2>
          <div className="prose max-w-none space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              Protocol Buffers (Protobuf) is a serialization format developed by Google. Instead of
              sending human-readable JSON over the wire, Protobuf encodes data into compact binary
              form using a predefined schema.
            </p>
            <p>
              You define your data structure in a <code className="bg-slate-100 px-1 rounded">.proto</code> file,
              compile it with the <code className="bg-slate-100 px-1 rounded">protoc</code> compiler,
              and get generated code in your language of choice (Go, Java, Python, C++, TypeScript, etc.).
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Protobuf vs JSON</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-bold text-slate-800">Feature</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-800">JSON</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-800">Protobuf</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-600">Format</td>
                  <td className="px-4 py-3 text-slate-600">Text (human-readable)</td>
                  <td className="px-4 py-3 text-slate-600">Binary (compact)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Size</td>
                  <td className="px-4 py-3 text-slate-600">Larger</td>
                  <td className="px-4 py-3 text-slate-600">3–10x smaller</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Speed</td>
                  <td className="px-4 py-3 text-slate-600">Slower parsing</td>
                  <td className="px-4 py-3 text-slate-600">20–100x faster</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Schema</td>
                  <td className="px-4 py-3 text-slate-600">Optional (JSON Schema)</td>
                  <td className="px-4 py-3 text-slate-600">Required (.proto file)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Human Readable</td>
                  <td className="px-4 py-3 text-green-600">✅ Yes</td>
                  <td className="px-4 py-3 text-red-600">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Debugging</td>
                  <td className="px-4 py-3 text-green-600">Easy</td>
                  <td className="px-4 py-3 text-red-600">Harder (needs tooling)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">When to Use Protobuf</h2>
          <div className="grid gap-4 text-sm">
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">High-Performance APIs</h3>
              <p className="text-slate-500">When you need minimal latency and payload size — microservices, real-time systems, gaming backends.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">gRPC Services</h3>
              <p className="text-slate-500">Protobuf is the default serialization format for gRPC. If you&apos;re using gRPC, you&apos; already using Protobuf.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">Mobile Apps</h3>
              <p className="text-slate-500">Smaller payloads mean faster loads and less data usage on mobile networks.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-800 mb-2">When NOT to Use</h3>
              <p className="text-slate-500">For human-editable configs (use YAML/JSON), browser APIs (JSON is native), or small projects where simplicity beats performance.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">A Simple .proto File</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <pre className="text-xs font-mono text-slate-700 overflow-x-auto">{`// person.proto
syntax = "proto3";

message Person {
  string name = 1;
  int32 age = 2;
  string email = 3;
  repeated string hobbies = 4;
}`}</pre>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            The numbers (1, 2, 3, 4) are field tags — they define the binary encoding order and enable
            backward compatibility. You can add new fields without breaking existing code.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Schema Evolution</h2>
          <div className="prose max-w-none space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              One of Protobuf&apos;s killer features is schema evolution. You can add new fields to your
              proto definition without breaking old clients. The old fields are simply ignored.
            </p>
            <p>
              This makes Protobuf excellent for APIs that evolve over time — you can version your data
              format without maintaining multiple endpoints.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Try It</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
            <p className="text-slate-600 mb-4">
              Protobuf is a backend concern, but you can validate JSON data structures before serializing.
            </p>
            <Link
              href="/tools/json-formatter"
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Open JSON Formatter →
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/how-to-convert-yaml-to-json" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">YAML to JSON Converter →</span>
              <span className="block text-slate-500 mt-1">Convert between data formats</span>
            </Link>
            <Link href="/blog/what-is-toml" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">What Is TOML? →</span>
              <span className="block text-slate-500 mt-1">Another config format explained</span>
            </Link>
            <Link href="/tools/json-formatter" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">JSON Formatter →</span>
              <span className="block text-slate-500 mt-1">Format and validate JSON</span>
            </Link>
            <Link href="/blog/how-to-generate-uuids" className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">How to Generate UUIDs →</span>
              <span className="block text-slate-500 mt-1">UUID generation guide</span>
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
            headline: "What Is Protobuf? — Protocol Buffers Explained for Developers",
            description: "Learn what Protocol Buffers are, why Google created them, and how they compare to JSON.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/what-is-protobuf",
          }),
        }}
      />
    </div>
  );
}