import Link from "next/link";
import Script from "next/script";
import { tools } from "@/lib/tools";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://quickkit-nine.vercel.app";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "QuickKit",
  url: siteUrl,
  description: "Free online developer and productivity tools",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    url: `${siteUrl}${tool.href}`,
    description: tool.description,
  })),
};

export default function Home() {
  return (
    <>
      <Script
        id="jsonld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="jsonld-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Free Online Developer Tools
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8">
              Fast, no signup. Format JSON, generate UUIDs, convert colors, and more — all in your browser.
            </p>
          </div>
        </section>

        {/* Tool Grid */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">All Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 mb-4">{tool.description}</p>
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                  Use Tool →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
