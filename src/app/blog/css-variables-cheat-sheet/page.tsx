import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Variables Cheat Sheet — Complete Reference 2026 | QuickKit",
  description:
    "Complete CSS custom properties (variables) cheat sheet. Syntax, scoping, fallback values, dynamic theming, dark mode, and 20+ real-world patterns. Copy-paste ready.",
  openGraph: {
    title: "CSS Variables Cheat Sheet — Every Pattern You Need",
    description:
      "Master CSS custom properties. Syntax, scoping, fallbacks, dark mode theming, and practical patterns for modern CSS.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Variables Cheat Sheet — Complete Reference",
    description:
      "CSS custom properties from basics to advanced. Dark mode, dynamic theming, fallback values, and more.",
  },
};

export default function CSSVariablesCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">CSS Variables Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Cheat Sheet — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            CSS Variables Cheat Sheet — Complete Reference
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            CSS custom properties (also called CSS variables) let you store values and reuse them throughout your
            stylesheet. They support dynamic updates, scoped values, fallback defaults, and are the foundation
            of modern theming. Here&apos;s everything you need to know.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#syntax" className="text-indigo-600 hover:underline">1. Basic Syntax</a>
            <a href="#scoping" className="text-indigo-600 hover:underline">2. Scoping</a>
            <a href="#fallback" className="text-indigo-600 hover:underline">3. Fallback Values</a>
            <a href="#js" className="text-indigo-600 hover:underline">4. JavaScript Access</a>
            <a href="#theming" className="text-indigo-600 hover:underline">5. Dynamic Theming</a>
            <a href="#darkmode" className="text-indigo-600 hover:underline">6. Dark Mode</a>
            <a href="#responsive" className="text-indigo-600 hover:underline">7. Responsive Design</a>
            <a href="#patterns" className="text-indigo-600 hover:underline">8. Common Patterns</a>
            <a href="#vs-sass" className="text-indigo-600 hover:underline">9. CSS vs Sass Variables</a>
            <a href="#tips" className="text-indigo-600 hover:underline">10. Pro Tips</a>
          </div>
        </section>

        {/* 1. Basic Syntax */}
        <section id="syntax" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Basic Syntax</h2>
          <p className="text-slate-700 mb-4">
            CSS custom properties are declared with <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">--</code> prefix
            and accessed with <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">var()</code>.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --primary: #2563eb;
  --text: #1e293b;
  --radius: 8px;
  --spacing: 16px;
}

.button {
  background: var(--primary);
  color: white;
  padding: var(--spacing);
  border-radius: var(--radius);
}`}</pre>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-800">
            <strong>Note:</strong> Custom property names are case-sensitive. <code>--Color</code> and <code>--color</code> are different variables.
          </div>
        </section>

        {/* 2. Scoping */}
        <section id="scoping" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Scoping</h2>
          <p className="text-slate-700 mb-4">
            CSS variables are inherited by default. Define on <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">:root</code> for
            global scope, or on any element for local scope.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --bg: white;
}

.card {
  --bg: #f8fafc;
  background: var(--bg); /* #f8fafc */
}

.card .title {
  /* --bg is still #f8fafc here (inherited) */
  color: var(--bg);
}`}</pre>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-800">
            <strong>Key point:</strong> Variables cascade and inherit like any other CSS property. A child element
            can override a parent&apos;s variable, and the override only applies to that element and its descendants.
          </div>
        </section>

        {/* 3. Fallback Values */}
        <section id="fallback" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Fallback Values</h2>
          <p className="text-slate-700 mb-4">
            The <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">var()</code> function accepts
            a second argument as a fallback value.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`/* Single fallback */
color: var(--text, #1e293b);

/* Nested fallback (uses next if previous is invalid) */
padding: var(--spacing, var(--gap, 16px));

/* Fallback to a completely different property */
border-color: var(--border, var(--primary, #ccc));

/* No fallback — uses initial value if undefined */
margin: var(--undefined-var); /* equivalent to margin: initial */`}</pre>
          </div>
        </section>

        {/* 4. JavaScript Access */}
        <section id="js" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">4. JavaScript Access</h2>
          <p className="text-slate-700 mb-4">
            CSS variables are fully accessible from JavaScript using the CSS custom properties API.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`// Read a CSS variable
const value = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');
console.log(value); // " #2563eb"

// Set a CSS variable
document.documentElement.style.setProperty('--primary', '#7c3aed');

// Remove a CSS variable
document.documentElement.style.removeProperty('--primary');

// Read from a specific element
const card = document.querySelector('.card');
const bg = getComputedStyle(card).getPropertyValue('--bg');`}</pre>
          </div>
        </section>

        {/* 5. Dynamic Theming */}
        <section id="theming" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Dynamic Theming</h2>
          <p className="text-slate-700 mb-4">
            The real power of CSS variables is dynamic theming. Change one variable, and every element that uses it updates instantly.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
}

/* Theme: Forest */
.theme-forest {
  --primary: #16a34a;
  --primary-hover: #15803d;
}

/* Theme: Sunset */
.theme-sunset {
  --primary: #ea580c;
  --primary-hover: #c2410c;
}`}</pre>
          </div>
        </section>

        {/* 6. Dark Mode */}
        <section id="darkmode" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Dark Mode</h2>
          <p className="text-slate-700 mb-4">
            CSS variables + <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">prefers-color-scheme</code> = clean dark mode.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --bg: #ffffff;
  --text: #1e293b;
  --card-bg: #f8fafc;
  --border: #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #e2e8f0;
    --card-bg: #1e293b;
    --border: #334155;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
}`}</pre>
          </div>

          <p className="text-slate-700 mb-4">
            For manual toggle (class-based):
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`.dark {
  --bg: #0f172a;
  --text: #e2e8f0;
}

// Toggle in JavaScript
document.documentElement.classList.toggle('dark');`}</pre>
          </div>
        </section>

        {/* 7. Responsive Design */}
        <section id="responsive" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Responsive Design</h2>
          <p className="text-slate-700 mb-4">
            Override variables inside media queries for responsive layouts.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --cols: 1;
  --gap: 16px;
  --font-size: 14px;
}

@media (min-width: 640px) {
  :root {
    --cols: 2;
    --gap: 24px;
    --font-size: 16px;
  }
}

@media (min-width: 1024px) {
  :root {
    --cols: 3;
    --gap: 32px;
    --font-size: 18px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  gap: var(--gap);
  font-size: var(--font-size);
}`}</pre>
          </div>
        </section>

        {/* 8. Common Patterns */}
        <section id="patterns" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Common Patterns</h2>

          <h3 className="text-lg font-bold text-slate-800 mb-3">Design Token System</h3>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  /* Spacing scale */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* Typography */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  /* Colors */
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-900: #0f172a;
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">Animation Speed Control</h3>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
            <pre>{`:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}

.button {
  transition: all var(--duration-normal);
}

.button:hover {
  transform: translateY(-2px);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">Component Variants</h3>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`.alert {
  --alert-bg: #eff6ff;
  --alert-text: #1e40af;
  --alert-border: #bfdbfe;
}

.alert-success {
  --alert-bg: #f0fdf4;
  --alert-text: #166534;
  --alert-border: #bbf7d0;
}

.alert-danger {
  --alert-bg: #fef2f2;
  --alert-text: #991b1b;
  --alert-border: #fecaca;
}

.alert {
  background: var(--alert-bg);
  color: var(--alert-text);
  border: 1px solid var(--alert-border);
  padding: var(--sp-4);
  border-radius: var(--radius);
}`}</pre>
          </div>
        </section>

        {/* 9. CSS vs Sass */}
        <section id="vs-sass" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">9. CSS Variables vs Sass Variables</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-700">Feature</th>
                  <th className="text-left p-3 font-semibold text-indigo-600">CSS Custom Properties</th>
                  <th className="text-left p-3 font-semibold text-slate-500">Sass Variables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3 text-slate-500">Runtime updates</td><td className="p-3 text-green-600">Yes</td><td className="p-3 text-red-500">No (compiled)</td></tr>
                <tr><td className="p-3 text-slate-500">DOM access via JS</td><td className="p-3 text-green-600">Yes</td><td className="p-3 text-red-500">No</td></tr>
                <tr><td className="p-3 text-slate-500">Scoping/Cascade</td><td className="p-3 text-green-600">Yes (inherits)</td><td className="p-3 text-slate-600">File-scoped only</td></tr>
                <tr><td className="p-3 text-slate-500">Media query overrides</td><td className="p-3 text-green-600">Yes</td><td className="p-3 text-red-500">No</td></tr>
                <tr><td className="p-3 text-slate-500">Fallback values</td><td className="p-3 text-green-600">Built-in</td><td className="p-3 text-slate-600">With @default</td></tr>
                <tr><td className="p-3 text-slate-500">Math operations</td><td className="p-3 text-slate-600">Limited (calc)</td><td className="p-3 text-green-600">Full support</td></tr>
                <tr><td className="p-3 text-slate-500">Browser support</td><td className="p-3 text-green-600">All modern</td><td className="p-3 text-slate-600">Needs compilation</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 10. Pro Tips */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Pro Tips</h2>
          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li><span className="text-indigo-600 font-semibold">1.</span> Always define global variables on <code className="bg-slate-100 px-1 rounded">:root</code>, not <code className="bg-slate-100 px-1 rounded">html</code>, for consistency.</li>
              <li><span className="text-indigo-600 font-semibold">2.</span> Use <code className="bg-slate-100 px-1 rounded">--</code> prefix for CSS custom properties to distinguish them from Sass variables (<code className="bg-slate-100 px-1 rounded">$</code> prefix).</li>
              <li><span className="text-indigo-600 font-semibold">3.</span> Combine with <code className="bg-slate-100 px-1 rounded">calc()</code> for dynamic values: <code className="bg-slate-100 px-1 rounded">width: calc(100% - var(--sidebar))</code>.</li>
              <li><span className="text-indigo-600 font-semibold">4.</span> Use <code className="bg-slate-100 px-1 rounded">prefers-reduced-motion</code> to zero out animation durations for accessibility.</li>
              <li><span className="text-indigo-600 font-semibold">5.</span> Name variables by purpose (<code className="bg-slate-100 px-1 rounded">--text-primary</code>), not color (<code className="bg-slate-100 px-1 rounded">--blue-500</code>), so themes can swap colors without renaming.</li>
              <li><span className="text-indigo-600 font-semibold">6.</span> Variables in <code className="bg-slate-100 px-1 rounded">::before</code>/<code className="bg-slate-100 px-1 rounded">::after</code> pseudo-elements work the same as in regular elements.</li>
              <li><span className="text-indigo-600 font-semibold">7.</span> You can use CSS variables in <code className="bg-slate-100 px-1 rounded">background-image</code> with <code className="bg-slate-100 px-1 rounded">url(var(--icon))</code>.</li>
            </ul>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/css-flexbox-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded p-4 hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-indigo-600 text-sm">CSS Flexbox Cheat Sheet</h4>
              <p className="text-xs text-slate-500 mt-1">Complete guide to flex containers, items, and alignment.</p>
            </Link>
            <Link href="/blog/css-grid-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded p-4 hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-indigo-600 text-sm">CSS Grid Cheat Sheet</h4>
              <p className="text-xs text-slate-500 mt-1">Grid layout from basics to subgrid.</p>
            </Link>
            <Link href="/blog/css-selectors-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded p-4 hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-indigo-600 text-sm">CSS Selectors Cheat Sheet</h4>
              <p className="text-xs text-slate-500 mt-1">Every CSS selector from basic to advanced.</p>
            </Link>
            <Link href="/blog/html-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded p-4 hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-indigo-600 text-sm">HTML Cheat Sheet</h4>
              <p className="text-xs text-slate-500 mt-1">Essential HTML elements and attributes.</p>
            </Link>
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: "CSS Variables Cheat Sheet — Complete Reference 2026",
              description: "Complete CSS custom properties cheat sheet. Syntax, scoping, fallback values, dynamic theming, dark mode, and 20+ real-world patterns.",
              datePublished: "2026-06-30",
              dateModified: "2026-06-30",
              author: { "@type": "Organization", name: "QuickKit" },
              publisher: { "@type": "Organization", name: "QuickKit" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://quickkit-nine.vercel.app/blog/css-variables-cheat-sheet" },
            }),
          }}
        />
      </article>
    </div>
  );
}
