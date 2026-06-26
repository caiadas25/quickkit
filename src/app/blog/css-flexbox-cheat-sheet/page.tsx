import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Flexbox Cheat Sheet — Complete Layout Guide | QuickKit",
  description:
    "Master CSS Flexbox with this comprehensive cheat sheet. Every property, every value, every shortcut — with visual examples and copy-paste code. Covers flex-direction, justify-content, align-items, flex-wrap, and more.",
  openGraph: {
    title: "CSS Flexbox Cheat Sheet — Complete Layout Guide",
    description:
      "Every CSS Flexbox property with examples. Copy-paste ready code for flex containers and flex items.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Flexbox Cheat Sheet",
    description:
      "The complete CSS Flexbox reference. Every property, every value, with visual examples.",
  },
};

interface FlexProperty {
  property: string;
  values: { value: string; description: string; example?: string }[];
}

const containerProperties: FlexProperty[] = [
  {
    property: "display",
    values: [
      { value: "flex", description: "Enables flexbox on the container" },
      { value: "inline-flex", description: "Inline-level flex container" },
    ],
  },
  {
    property: "flex-direction",
    values: [
      { value: "row", description: "Items lay out left to right (default)" },
      { value: "row-reverse", description: "Items lay out right to left" },
      {
        value: "column",
        description: "Items lay out top to bottom",
      },
      {
        value: "column-reverse",
        description: "Items lay out bottom to top",
      },
    ],
  },
  {
    property: "flex-wrap",
    values: [
      { value: "nowrap", description: "All items on one line (default)" },
      { value: "wrap", description: "Items wrap to new lines" },
      {
        value: "wrap-reverse",
        description: "Items wrap upward",
      },
    ],
  },
  {
    property: "justify-content",
    values: [
      { value: "flex-start", description: "Items pack toward start" },
      { value: "flex-end", description: "Items pack toward end" },
      { value: "center", description: "Items centered" },
      {
        value: "space-between",
        description: "Equal space between items",
      },
      {
        value: "space-around",
        description: "Equal space around items",
      },
      {
        value: "space-evenly",
        description: "Equal space between and around items",
      },
    ],
  },
  {
    property: "align-items",
    values: [
      { value: "flex-start", description: "Items align to cross-axis start" },
      { value: "flex-end", description: "Items align to cross-axis end" },
      { value: "center", description: "Items centered on cross-axis" },
      {
        value: "stretch",
        description: "Items stretch to fill cross-axis (default)",
      },
      {
        value: "baseline",
        description: "Items align by text baseline",
      },
    ],
  },
  {
    property: "align-content",
    values: [
      {
        value: "flex-start",
        description: "Lines pack toward cross-axis start",
      },
      {
        value: "flex-end",
        description: "Lines pack toward cross-axis end",
      },
      { value: "center", description: "Lines centered on cross-axis" },
      {
        value: "space-between",
        description: "Equal space between lines",
      },
      {
        value: "space-around",
        description: "Equal space around lines",
      },
      {
        value: "stretch",
        description: "Lines stretch to fill space (default)",
      },
    ],
  },
];

const itemProperties: FlexProperty[] = [
  {
    property: "order",
    values: [
      {
        value: "0",
        description: "Default order. Items appear in source order",
      },
      { value: "<integer>", description: "Lower values appear first" },
    ],
  },
  {
    property: "flex-grow",
    values: [
      { value: "0", description: "Don't grow (default)" },
      {
        value: "1",
        description: "Grow equally to fill available space",
      },
      {
        value: "<number>",
        description: "Grow proportionally (e.g., 2 = twice as much)",
      },
    ],
  },
  {
    property: "flex-shrink",
    values: [
      { value: "1", description: "Shrink equally if needed (default)" },
      { value: "0", description: "Don't shrink — item keeps its size" },
    ],
  },
  {
    property: "flex-basis",
    values: [
      {
        value: "auto",
        description: "Based on content size (default)",
      },
      { value: "<length>", description: "e.g., 200px, 10em, 50%" },
      { value: "0", description: "Zero — grow to fill space" },
    ],
  },
  {
    property: "align-self",
    values: [
      { value: "auto", description: "Inherits from parent's align-items" },
      { value: "flex-start", description: "Align to cross-axis start" },
      { value: "flex-end", description: "Align to cross-axis end" },
      { value: "center", description: "Center on cross-axis" },
      { value: "stretch", description: "Stretch to fill" },
      { value: "baseline", description: "Align by text baseline" },
    ],
  },
  {
    property: "flex",
    values: [
      {
        value: "0 1 auto",
        description: "Default. No grow, shrink if needed, content-based",
      },
      {
        value: "1",
        description: "Shorthand for flex: 1 1 0% — grow equally",
      },
      {
        value: "0 0 auto",
        description: "Shorthand for no grow, no shrink, fixed size",
      },
    ],
  },
];

const shortcuts: { property: string; shorthand: string }[] = [
  {
    property: "flex: 1",
    shorthand: "flex: 1 1 0%",
  },
  {
    property: "flex: auto",
    shorthand: "flex: 1 1 auto",
  },
  {
    property: "flex: initial",
    shorthand: "flex: 0 1 auto",
  },
  {
    property: "flex: none",
    shorthand: "flex: 0 0 auto",
  },
];

const commonPatterns: {
  title: string;
  code: string;
  description: string;
}[] = [
  {
    title: "Center everything",
    code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
    description: "The most common flexbox pattern. Centers content both horizontally and vertically.",
  },
  {
    title: "Sidebar layout",
    code: `.layout {\n  display: flex;\n}\n.sidebar {\n  flex: 0 0 250px;\n}\n.content {\n  flex: 1;\n}`,
    description: "Fixed-width sidebar with fluid content area.",
  },
  {
    title: "Equal-width columns",
    code: `.grid {\n  display: flex;\n}\n.column {\n  flex: 1;\n}`,
    description: "All columns take equal width. Add flex-basis for minimum widths.",
  },
  {
    title: "Sticky footer",
    code: `body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex: 1;\n}`,
    description: "Footer stays at bottom even with short content.",
  },
  {
    title: "Navigation bar",
    code: `nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
    description: "Logo on left, links on right, everything vertically centered.",
  },
  {
    title: "Card grid (wrapping)",
    code: `.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.card {\n  flex: 1 1 300px;\n}`,
    description: "Responsive card grid that wraps at 300px minimum width.",
  },
];

function FlexDemo({
  direction,
  justify,
  align,
  wrap,
}: {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
}) {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: (direction as React.CSSProperties["flexDirection"]) || "row",
    justifyContent: (justify as React.CSSProperties["justifyContent"]) || "flex-start",
    alignItems: (align as React.CSSProperties["alignItems"]) || "stretch",
    flexWrap: (wrap as React.CSSProperties["flexWrap"]) || "nowrap",
    gap: "6px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    minHeight: "60px",
  };

  const colors = ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"];

  return (
    <div style={style}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: "40px",
            height: "30px",
            borderRadius: "4px",
            backgroundColor: colors[i - 1],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
}

export default function FlexboxCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-400 transition-colors">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">CSS Flexbox Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-400 text-sm font-medium mb-2">
            Cheat Sheet — Updated June 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CSS Flexbox Cheat Sheet
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            The complete reference for CSS Flexbox. Every property, every
            value, with copy-paste code and visual examples.
          </p>
        </header>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "CSS Flexbox Cheat Sheet — Complete Layout Guide",
              description:
                "Complete CSS Flexbox reference with every property, value, and copy-paste code example.",
              datePublished: "2026-06-27",
              dateModified: "2026-06-27",
              author: { "@type": "Organization", name: "QuickKit" },
              publisher: {
                "@type": "Organization",
                name: "QuickKit",
                url: "https://quickkit-nine.vercel.app",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://quickkit-nine.vercel.app/blog/css-flexbox-cheat-sheet",
              },
            }),
          }}
        />

        {/* Quick Reference */}
        <section className="mb-12 p-6 rounded-xl border border-blue-700/30 bg-blue-900/10">
          <h2 className="text-xl font-bold text-blue-400 mb-3">
            Quick Reference
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Container:</strong>{" "}
                <code className="text-blue-300">display: flex</code>
              </p>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Direction:</strong>{" "}
                <code className="text-blue-300">flex-direction</code>
              </p>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Spacing:</strong>{" "}
                <code className="text-blue-300">justify-content</code>
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Wrapping:</strong>{" "}
                <code className="text-blue-300">flex-wrap</code>
              </p>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Alignment:</strong>{" "}
                <code className="text-blue-300">align-items</code>
              </p>
              <p className="text-slate-400 mb-1">
                <strong className="text-white">Item sizing:</strong>{" "}
                <code className="text-blue-300">flex: grow shrink basis</code>
              </p>
            </div>
          </div>
        </section>

        {/* Container Properties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Container Properties
          </h2>
          <div className="space-y-8">
            {containerProperties.map((prop) => (
              <div key={prop.property}>
                <h3 className="text-lg font-bold text-blue-400 mb-3">
                  {prop.property}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800/50">
                        <th className="text-left px-4 py-2 text-slate-400">
                          Value
                        </th>
                        <th className="text-left px-4 py-2 text-slate-400">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {prop.values.map((v) => (
                        <tr key={v.value}>
                          <td className="px-4 py-2">
                            <code className="text-blue-300">{v.value}</code>
                          </td>
                          <td className="px-4 py-2 text-slate-300">
                            {v.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Item Properties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Item Properties
          </h2>
          <div className="space-y-8">
            {itemProperties.map((prop) => (
              <div key={prop.property}>
                <h3 className="text-lg font-bold text-blue-400 mb-3">
                  {prop.property}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800/50">
                        <th className="text-left px-4 py-2 text-slate-400">
                          Value
                        </th>
                        <th className="text-left px-4 py-2 text-slate-400">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {prop.values.map((v) => (
                        <tr key={v.value}>
                          <td className="px-4 py-2">
                            <code className="text-blue-300">{v.value}</code>
                          </td>
                          <td className="px-4 py-2 text-slate-300">
                            {v.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Common Layout Patterns
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {commonPatterns.map((pattern) => (
              <div
                key={pattern.title}
                className="p-5 rounded-xl border border-slate-800 bg-slate-800/20"
              >
                <h3 className="font-bold text-white mb-2">{pattern.title}</h3>
                <p className="text-slate-400 text-sm mb-3">
                  {pattern.description}
                </p>
                <pre className="text-xs bg-slate-900 p-3 rounded-lg overflow-x-auto text-blue-300">
                  <code>{pattern.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/tools/css-minifier"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-blue-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-blue-400 transition-colors mb-1">
                CSS Minifier
              </h3>
              <p className="text-slate-400 text-sm">
                Minify your CSS to reduce file size.
              </p>
            </Link>
            <Link
              href="/tools/html-minifier"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-blue-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-blue-400 transition-colors mb-1">
                HTML Minifier
              </h3>
              <p className="text-slate-400 text-sm">
                Compress HTML for faster page loads.
              </p>
            </Link>
            <Link
              href="/tools/json-formatter"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-blue-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-blue-400 transition-colors mb-1">
                JSON Formatter
              </h3>
              <p className="text-slate-400 text-sm">
                Format and validate JSON data.
              </p>
            </Link>
            <Link
              href="/blog/how-to-format-json"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-blue-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-blue-400 transition-colors mb-1">
                How to Format JSON
              </h3>
              <p className="text-slate-400 text-sm">
                Developer guide to formatting JSON.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
