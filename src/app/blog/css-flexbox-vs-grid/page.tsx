import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Flexbox vs Grid — When to Use Which | QuickKit",
  description:
    "CSS Flexbox vs CSS Grid explained. When to use Flexbox, when to use Grid, and when to use both. Real-world examples, common patterns, and copy-paste code for every layout scenario.",
  openGraph: {
    title: "CSS Flexbox vs Grid — When to Use Which",
    description:
      "The definitive guide to CSS Flexbox vs Grid. Examples, patterns, and when to use each.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Flexbox vs Grid — When to Use Which",
    description:
      "When to use Flexbox, when to use Grid, and when to combine both.",
  },
};

interface ComparisonExample {
  scenario: string;
  recommendation: string;
  flexCode: string;
  gridCode: string;
  winner: "flex" | "grid" | "both";
}

const examples: ComparisonExample[] = [
  {
    scenario: "Centering an element",
    recommendation: "Flexbox is simpler for single-axis centering.",
    flexCode: `display: flex;
justify-content: center;
align-items: center;`,
    gridCode: `display: grid;
place-items: center;`,
    winner: "both",
  },
  {
    scenario: "Navigation bar with evenly spaced links",
    recommendation: "Flexbox excels at distributing items along one axis.",
    flexCode: `display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;`,
    gridCode: `display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap: 1rem;`,
    winner: "flex",
  },
  {
    scenario: "Dashboard with variable-height cards",
    recommendation: "Grid handles 2D layouts with implicit rows better.",
    flexCode: `display: flex;
flex-wrap: wrap;
gap: 1rem;
/* Cards need explicit widths */
flex: 1 1 300px;`,
    gridCode: `display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 1rem;
/* Rows adjust automatically */`,
    winner: "grid",
  },
  {
    scenario: "Sidebar + main content layout",
    recommendation: "Grid for the overall structure, Flexbox inside components.",
    flexCode: `display: flex;
gap: 1rem;
/* Need to set widths manually */
.sidebar { width: 250px; }
.main { flex: 1; }`,
    gridCode: `display: grid;
grid-template-columns: 250px 1fr;
gap: 1rem;`,
    winner: "grid",
  },
  {
    scenario: "Inline tags or badges (wrap naturally)",
    recommendation: "Flexbox handles wrapping flow naturally.",
    flexCode: `display: flex;
flex-wrap: wrap;
gap: 0.5rem;`,
    gridCode: `display: grid;
grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
gap: 0.5rem;
/* Items stretch to fill cells */`,
    winner: "flex",
  },
  {
    scenario: "Card with image, title, text, button (vertical stack)",
    recommendation: "Flexbox with column direction is perfect for this.",
    flexCode: `display: flex;
flex-direction: column;
gap: 0.75rem;`,
    gridCode: `display: grid;
grid-template-rows: auto auto 1fr auto;
gap: 0.75rem;`,
    winner: "flex",
  },
];

export default function FlexboxVsGridPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Flexbox vs Grid</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700">CSS Guide</span>
          <span className="text-xs text-slate-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          CSS Flexbox vs Grid — When to Use Which
        </h1>
        <p className="text-lg text-slate-500">
          The #1 CSS layout question answered with real-world examples. Use Flexbox for one-dimensional layouts, Grid for two-dimensional. Here&apos;s exactly when each one wins.
        </p>
      </header>

      <article className="prose prose-slate max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">The One-Liner Answer</h2>
          <div className="not-prose p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-lg text-slate-700 font-medium">
              <strong>Flexbox</strong> = one-dimensional (row OR column)
            </p>
            <p className="text-lg text-slate-700 font-medium mt-2">
              <strong>Grid</strong> = two-dimensional (rows AND columns)
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Decision Flowchart</h2>
          <div className="not-prose space-y-3">
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <p className="font-medium text-slate-700">Are you laying out items in ONE direction (a row or a column)?</p>
              <p className="text-sm text-green-600 mt-1">→ Use <strong>Flexbox</strong></p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <p className="font-medium text-slate-700">Do you need items aligned in both rows AND columns?</p>
              <p className="text-sm text-purple-600 mt-1">→ Use <strong>Grid</strong></p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <p className="font-medium text-slate-700">Are you building a page-level layout (sidebar + content)?</p>
              <p className="text-sm text-purple-600 mt-1">→ Use <strong>Grid</strong> for the shell</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 bg-white">
              <p className="font-medium text-slate-700">Are you arranging a navbar, button group, or tag list?</p>
              <p className="text-sm text-green-600 mt-1">→ Use <strong>Flexbox</strong></p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Side-by-Side Examples</h2>
          <div className="not-prose space-y-8">
            {examples.map((ex) => (
              <div key={ex.scenario} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-bold text-slate-800">{ex.scenario}</h3>
                  <p className="text-sm text-slate-500 mt-1">{ex.recommendation}</p>
                  <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded ${
                    ex.winner === "flex" ? "bg-green-100 text-green-700" :
                    ex.winner === "grid" ? "bg-purple-100 text-purple-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {ex.winner === "flex" ? "Flexbox wins" :
                     ex.winner === "grid" ? "Grid wins" : "Both work"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="p-4">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Flexbox</span>
                    <pre className="mt-2 text-sm text-slate-700 bg-green-50 rounded-lg p-3 overflow-x-auto"><code>{ex.flexCode}</code></pre>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Grid</span>
                    <pre className="mt-2 text-sm text-slate-700 bg-purple-50 rounded-lg p-3 overflow-x-auto"><code>{ex.gridCode}</code></pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">The Power Combo: Grid + Flexbox</h2>
          <p className="text-slate-600 mb-4">
            The best modern CSS layouts use Grid for the page structure and Flexbox inside individual components. You don&apos;t have to choose one.
          </p>
          <pre className="text-sm text-slate-700 bg-slate-50 rounded-xl p-4 overflow-x-auto"><code>{`.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}`}</code></pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Flexbox Properties</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">Property</th>
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">What It Does</th>
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">display</td><td className="p-3 border-b border-slate-100">Enables flexbox</td><td className="p-3 border-b border-slate-100">flex, inline-flex</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">flex-direction</td><td className="p-3 border-b border-slate-100">Main axis direction</td><td className="p-3 border-b border-slate-100">row, column, row-reverse, column-reverse</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">justify-content</td><td className="p-3 border-b border-slate-100">Main axis alignment</td><td className="p-3 border-b border-slate-100">flex-start, center, space-between, space-around, space-evenly</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">align-items</td><td className="p-3 border-b border-slate-100">Cross axis alignment</td><td className="p-3 border-b border-slate-100">stretch, center, flex-start, flex-end, baseline</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">flex-wrap</td><td className="p-3 border-b border-slate-100">Allow wrapping</td><td className="p-3 border-b border-slate-100">nowrap, wrap, wrap-reverse</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-indigo-600">gap</td><td className="p-3 border-b border-slate-100">Space between items</td><td className="p-3 border-b border-slate-100">Any length value</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Grid Properties</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">Property</th>
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">What It Does</th>
                  <th className="text-left p-3 border-b border-slate-200 font-bold text-slate-700">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">grid-template-columns</td><td className="p-3 border-b border-slate-100">Define columns</td><td className="p-3 border-b border-slate-100">200px 1fr 1fr</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">grid-template-rows</td><td className="p-3 border-b border-slate-100">Define rows</td><td className="p-3 border-b border-slate-100">auto 1fr auto</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">grid-template-areas</td><td className="p-3 border-b border-slate-100">Named layout regions</td><td className="p-3 border-b border-slate-100">&quot;header header&quot; &quot;sidebar main&quot;</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">grid-column</td><td className="p-3 border-b border-slate-100">Item spans columns</td><td className="p-3 border-b border-slate-100">1 / 3 (span 2 columns)</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">auto-fill / auto-fit</td><td className="p-3 border-b border-slate-100">Responsive columns</td><td className="p-3 border-b border-slate-100">repeat(auto-fill, minmax(250px, 1fr))</td></tr>
                <tr><td className="p-3 border-b border-slate-100 font-mono text-purple-600">place-items</td><td className="p-3 border-b border-slate-100">Shorthand for justify + align</td><td className="p-3 border-b border-slate-100">center</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Guides</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            <Link href="/blog/css-flexbox-cheat-sheet" className="block p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-slate-800">CSS Flexbox Cheat Sheet</h3>
              <p className="text-sm text-slate-500">Every Flexbox property with examples and copy-paste code.</p>
            </Link>
            <Link href="/blog/css-grid-cheat-sheet" className="block p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-slate-800">CSS Grid Cheat Sheet</h3>
              <p className="text-sm text-slate-500">Every CSS Grid property with examples and patterns.</p>
            </Link>
            <Link href="/blog/html-cheat-sheet" className="block p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-slate-800">HTML Cheat Sheet</h3>
              <p className="text-sm text-slate-500">Complete HTML reference with every tag and attribute.</p>
            </Link>
            <Link href="/blog/typescript-cheat-sheet" className="block p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-slate-800">TypeScript Cheat Sheet</h3>
              <p className="text-sm text-slate-500">TypeScript types, generics, and utility types reference.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
