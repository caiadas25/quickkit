import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Grid Cheat Sheet — Complete Layout Guide | QuickKit",
  description:
    "Master CSS Grid with this comprehensive cheat sheet. Every property, every value — with visual examples and copy-paste code. Covers grid-template-columns, grid-area, gap, fr units, and responsive layouts.",
  openGraph: {
    title: "CSS Grid Cheat Sheet — Complete Layout Guide",
    description:
      "Every CSS Grid property with examples. Copy-paste ready code for grid containers and grid items.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Grid Cheat Sheet",
    description:
      "The complete CSS Grid reference. Every property, every value, with visual examples.",
  },
};

interface GridProperty {
  property: string;
  values: { value: string; description: string; example?: string }[];
}

const containerProperties: GridProperty[] = [
  {
    property: "display",
    values: [
      { value: "grid", description: "Enables grid layout on the container" },
      { value: "inline-grid", description: "Inline-level grid container" },
    ],
  },
  {
    property: "grid-template-columns",
    values: [
      { value: "none", description: "No explicit column tracks" },
      { value: "1fr 2fr 1fr", description: "Three columns: middle is twice as wide" },
      { value: "repeat(3, 1fr)", description: "Three equal-width columns" },
      { value: "repeat(auto-fill, minmax(200px, 1fr))", description: "Responsive columns, minimum 200px" },
      { value: "200px 1fr auto", description: "Fixed, flexible, and auto-sized columns" },
    ],
  },
  {
    property: "grid-template-rows",
    values: [
      { value: "none", description: "No explicit row tracks" },
      { value: "100px auto 1fr", description: "Fixed header, auto body, flexible footer" },
      { value: "repeat(3, 150px)", description: "Three rows of 150px each" },
    ],
  },
  {
    property: "gap",
    values: [
      { value: "10px", description: "10px gap between all rows and columns" },
      { value: "10px 20px", description: "10px row gap, 20px column gap" },
      { value: "row-gap: 1rem", description: "Row gap only" },
      { value: "column-gap: 2rem", description: "Column gap only" },
    ],
  },
  {
    property: "grid-template-areas",
    values: [
      {
        value: '"header header" "sidebar main" "footer footer"',
        description: "Named grid areas for semantic layouts",
      },
    ],
  },
  {
    property: "justify-items",
    values: [
      { value: "stretch", description: "Fill the entire grid cell (default)" },
      { value: "start", description: "Align to start of cell" },
      { value: "center", description: "Center within cell" },
      { value: "end", description: "Align to end of cell" },
    ],
  },
  {
    property: "align-items",
    values: [
      { value: "stretch", description: "Fill the entire grid cell (default)" },
      { value: "start", description: "Align to top of cell" },
      { value: "center", description: "Center vertically within cell" },
      { value: "end", description: "Align to bottom of cell" },
    ],
  },
  {
    property: "justify-content",
    values: [
      { value: "start", description: "Pack grid toward start" },
      { value: "center", description: "Center the grid within container" },
      { value: "space-between", description: "Equal space between columns" },
      { value: "space-evenly", description: "Equal space around all columns" },
    ],
  },
];

const itemProperties: GridProperty[] = [
  {
    property: "grid-column",
    values: [
      { value: "span 2", description: "Span across 2 columns" },
      { value: "1 / 3", description: "Start at line 1, end at line 3" },
      { value: "1 / -1", description: "Span the full width" },
    ],
  },
  {
    property: "grid-row",
    values: [
      { value: "span 2", description: "Span across 2 rows" },
      { value: "1 / 3", description: "Start at line 1, end at line 3" },
    ],
  },
  {
    property: "grid-area",
    values: [
      { value: "header", description: "Place in named grid area" },
      { value: "1 / 1 / 3 / 4", description: "row-start / col-start / row-end / col-end" },
    ],
  },
  {
    property: "justify-self",
    values: [
      { value: "start", description: "Align item to start of cell" },
      { value: "center", description: "Center horizontally" },
      { value: "end", description: "Align to end" },
      { value: "stretch", description: "Fill cell width (default)" },
    ],
  },
  {
    property: "align-self",
    values: [
      { value: "start", description: "Align to top" },
      { value: "center", description: "Center vertically" },
      { value: "end", description: "Align to bottom" },
      { value: "stretch", description: "Fill cell height (default)" },
    ],
  },
];

const patterns = [
  {
    name: "Holy Grail Layout",
    code: `.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }`,
  },
  {
    name: "Responsive Cards",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
  },
  {
    name: "Center Anything",
    code: `.center {
  display: grid;
  place-items: center; /* shorthand for justify + align */
  min-height: 100vh;
}`,
  },
  {
    name: "Responsive Dashboard",
    code: `.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.widget-wide {
  grid-column: span 2;
}
@media (max-width: 600px) {
  .widget-wide {
    grid-column: span 1;
  }
}`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "CSS Grid Cheat Sheet — Complete Layout Guide",
  description:
    "Master CSS Grid with this comprehensive cheat sheet. Every property, every value, with visual examples and copy-paste code.",
  author: { "@type": "Organization", name: "QuickKit" },
  publisher: { "@type": "Organization", name: "QuickKit" },
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
};

export default function CSSGridCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">CSS Grid Cheat Sheet</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
          Developer Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          CSS Grid Cheat Sheet
        </h1>
        <p className="text-lg text-slate-500">
          CSS Grid is a two-dimensional layout system. Unlike Flexbox (one axis at a time),
          Grid handles rows and columns simultaneously. This cheat sheet covers every property.
        </p>
      </header>

      <article className="prose max-w-none">
        <h2>Container Properties</h2>
        {containerProperties.map((prop) => (
          <div key={prop.property} className="mb-6">
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              <code className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {prop.property}
              </code>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-2 font-medium text-slate-600">Value</th>
                    <th className="text-left px-4 py-2 font-medium text-slate-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {prop.values.map((v, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-2">
                        <code className="text-xs bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                          {v.value}
                        </code>
                      </td>
                      <td className="px-4 py-2 text-slate-600">{v.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2>Item Properties</h2>
        {itemProperties.map((prop) => (
          <div key={prop.property} className="mb-6">
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              <code className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {prop.property}
              </code>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-2 font-medium text-slate-600">Value</th>
                    <th className="text-left px-4 py-2 font-medium text-slate-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {prop.values.map((v, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-2">
                        <code className="text-xs bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                          {v.value}
                        </code>
                      </td>
                      <td className="px-4 py-2 text-slate-600">{v.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2>Common Layout Patterns</h2>
        {patterns.map((pattern) => (
          <div key={pattern.name} className="mb-8">
            <h3 className="text-lg font-bold text-slate-700 mb-2">{pattern.name}</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{pattern.code}</code>
            </pre>
          </div>
        ))}

        <h2>Grid vs Flexbox</h2>
        <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-700 mb-2">Use Grid when:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>You need two-dimensional layouts (rows AND columns)</li>
                <li>Building page-level layouts</li>
                <li>Creating complex grid-based designs</li>
                <li>You want to place items by grid area name</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-700 mb-2">Use Flexbox when:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>You need one-dimensional layouts (row OR column)</li>
                <li>Aligning items in a navigation bar</li>
                <li>Distributing space among items in a single row</li>
                <li>Building component-level layouts</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>fr units</strong> are Grid-specific fractional units that distribute remaining space</li>
          <li><strong>repeat() + auto-fill/auto-fit</strong> creates responsive layouts without media queries</li>
          <li><strong>grid-template-areas</strong> makes layouts readable and semantic</li>
          <li><strong>place-items: center</strong> is the fastest way to center anything</li>
          <li>Grid and Flexbox are complementary, not competing</li>
        </ul>

        <div className="not-prose mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-sm text-indigo-700">
            <strong>Related:</strong>{" "}
            <Link href="/blog/css-flexbox-cheat-sheet" className="underline hover:text-indigo-900">
              CSS Flexbox Cheat Sheet
            </Link>
            {" | "}
            <Link href="/tools/json-formatter" className="underline hover:text-indigo-900">
              JSON Formatter Tool
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
