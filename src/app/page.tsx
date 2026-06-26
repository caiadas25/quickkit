"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools";
import type { Tool } from "@/lib/tools";

const CATEGORIES = ["All", "Code", "Text", "Data", "Design", "Security", "DevOps", "Utility"] as const;

const FAQS = [
  { q: "Are these tools really free?", a: "Yes, 100% free. No hidden costs, no premium tiers, no trials. Every tool is completely free to use forever." },
  { q: "Is my data safe?", a: "Absolutely. All processing happens entirely in your browser. No data is sent to any server. Your information never leaves your device." },
  { q: "Can I use these tools commercially?", a: "Yes. Use them for personal or commercial projects. There are no restrictions on usage." },
  { q: "Do I need to create an account?", a: "No. Every tool works instantly without signup, login, or any form of registration." },
  { q: "How do I report a bug or request a new tool?", a: "Open an issue on our GitHub repository. We review and respond to every issue." },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-indigo-300 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">{tool.icon}</span>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{tool.title}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">{tool.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">{tool.category}</span>
        <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 duration-200">Open →</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    let list = tools;
    if (activeCategory !== "All") {
      list = list.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Developer Tools<br />That Actually Work
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-xl mx-auto">
            {tools.length} free, fast, privacy-first tools. No signup. No ads. No BS.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 pl-12 pr-4 py-4 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition text-lg"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-200 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        {/* Category Chips */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  {tools.filter((t) => t.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
          {search && ` matching "${search}"`}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-medium text-slate-600">No tools found</p>
            <p className="text-sm text-slate-400 mt-1">Try a different search or category</p>
          </div>
        )}
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: "🔒", title: "100% Private", desc: "All processing happens in your browser. Your data never leaves your device." },
            { icon: "⚡", title: "Zero Latency", desc: "Tools run entirely client-side. No server round-trips, no waiting." },
            { icon: "🆓", title: "Always Free", desc: "No accounts, no limits, no watermarks. Free forever." },
          ].map((badge) => (
            <div key={badge.title} className="text-center">
              <span className="text-4xl block mb-3">{badge.icon}</span>
              <h3 className="font-bold text-slate-800 mb-1">{badge.title}</h3>
              <p className="text-sm text-slate-500">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.q} className="border-b border-slate-200 pb-6 last:border-0">
              <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ JSON-LD for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
