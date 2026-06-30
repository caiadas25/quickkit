import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Selectors Cheat Sheet — Complete Reference | QuickKit",
  description:
    "Master CSS selectors with this comprehensive cheat sheet. Basic, combinators, pseudo-classes, pseudo-elements, attribute selectors, and specificity rules — all with copy-paste examples.",
  openGraph: {
    title: "CSS Selectors Cheat Sheet — Complete Reference",
    description:
      "Every CSS selector type explained with examples. Basic, compound, combinators, pseudo-classes, pseudo-elements, and attribute selectors.",
    type: "article",
  },
};

interface SelectorGroup {
  category: string;
  selectors: { selector: string; description: string; example: string }[];
}

const selectorGroups: SelectorGroup[] = [
  {
    category: "Basic Selectors",
    selectors: [
      { selector: "*", description: "Universal selector — matches all elements", example: "* { box-sizing: border-box; }" },
      { selector: "element", description: "Type selector — matches all elements of that type", example: "p { line-height: 1.6; }" },
      { selector: ".class", description: "Class selector — matches elements with that class", example: ".card { border: 1px solid #ddd; }" },
      { selector: "#id", description: "ID selector — matches the element with that ID", example: "#header { position: sticky; }" },
    ],
  },
  {
    category: "Combinators",
    selectors: [
      { selector: "A B", description: "Descendant — B is a descendant of A", example: "nav a { color: white; }" },
      { selector: "A > B", description: "Child — B is a direct child of A", example: "ul > li { list-style: disc; }" },
      { selector: "A + B", description: "Adjacent sibling — B immediately follows A", example: "h2 + p { margin-top: 0; }" },
      { selector: "A ~ B", description: "General sibling — B follows A (not necessarily adjacent)", example: "h2 ~ p { color: #666; }" },
    ],
  },
  {
    category: "Attribute Selectors",
    selectors: [
      { selector: "[attr]", description: "Elements with the attribute", example: "[disabled] { opacity: 0.5; }" },
      { selector: "[attr=value]", description: "Attribute equals exact value", example: "[type='text'] { font-family: sans-serif; }" },
      { selector: "[attr~=value]", description: "Attribute contains value in space-separated list", example: "[class~='highlight'] { background: yellow; }" },
      { selector: "[attr|=value]", description: "Attribute starts with value or value-", example: "[lang|='en'] { font-family: serif; }" },
      { selector: "[attr^=value]", description: "Attribute starts with value", example: "[href^='https'] { color: green; }" },
      { selector: "[attr$=value]", description: "Attribute ends with value", example: "[href$='.pdf'] { color: red; }" },
      { selector: "[attr*=value]", description: "Attribute contains value substring", example: "[title*='error'] { border-color: red; }" },
    ],
  },
  {
    category: "Pseudo-Classes",
    selectors: [
      { selector: ":hover", description: "Element when mouse is over it", example: "a:hover { text-decoration: underline; }" },
      { selector: ":focus", description: "Element when focused (keyboard/mouse)", example: "input:focus { outline: 2px solid blue; }" },
      { selector: ":active", description: "Element while being clicked", example: "button:active { transform: scale(0.98); }" },
      { selector: ":first-child", description: "First child of its parent", example: "li:first-child { font-weight: bold; }" },
      { selector: ":last-child", description: "Last child of its parent", example: "li:last-child { margin-bottom: 0; }" },
      { selector: ":nth-child(n)", description: "The nth child (2n = even, 2n+1 = odd)", example: "tr:nth-child(even) { background: #f5f5f5; }" },
      { selector: ":not(selector)", description: "Negation — elements NOT matching the selector", example: "p:not(.special) { color: gray; }" },
      { selector: ":checked", description: "Checked checkboxes and radios", example: "input:checked + label { color: blue; }" },
      { selector: ":disabled", description: "Disabled form elements", example: "input:disabled { background: #eee; }" },
      { selector: ":empty", description: "Elements with no children", example: "div:empty { display: none; }" },
      { selector: ":has(selector)", description: "Elements containing a matching descendant (modern)", example: "div:has(img) { display: flex; }" },
    ],
  },
  {
    category: "Pseudo-Elements",
    selectors: [
      { selector: "::before", description: "Inserts content before the element", example: ".quote::before { content: '\\201C'; }" },
      { selector: "::after", description: "Inserts content after the element", example: ".badge::after { content: '*'; color: red; }" },
      { selector: "::first-line", description: "First line of a block element", example: "p::first-line { font-weight: bold; }" },
      { selector: "::first-letter", description: "First letter of a block element", example: "p::first-letter { font-size: 2em; }" },
      { selector: "::selection", description: "Text selected by the user", example: "::selection { background: blue; color: white; }" },
      { selector: "::placeholder", description: "Input placeholder text", example: "::placeholder { color: #999; }" },
      { selector: "::marker", description: "List item markers/bullets", example: "li::marker { color: blue; }" },
    ],
  },
  {
    category: "Form Pseudo-Classes",
    selectors: [
      { selector: ":required", description: "Required form fields", example: "input:required { border-left: 3px solid red; }" },
      { selector: ":optional", description: "Optional form fields", example: "input:optional { border-left: 3px solid green; }" },
      { selector: ":valid", description: "Form fields with valid input", example: "input:valid { border-color: green; }" },
      { selector: ":invalid", description: "Form fields with invalid input", example: "input:invalid { border-color: red; }" },
      { selector: ":in-range", description: "Numeric inputs within range", example: "input:in-range { background: #e8ffe8; }" },
      { selector: ":out-of-range", description: "Numeric inputs outside range", example: "input:out-of-range { background: #ffe8e8; }" },
    ],
  },
];

const specificity = [
  { level: "1", type: "Inline styles", example: 'style="color: red"', weight: "1,0,0,0" },
  { level: "2", type: "IDs", example: "#header", weight: "0,1,0,0" },
  { level: "3", type: "Classes, attributes, pseudo-classes", example: ".nav, [href], :hover", weight: "0,0,1,0" },
  { level: "4", type: "Elements, pseudo-elements", example: "div, ::before", weight: "0,0,0,1" },
  { level: "5", type: "Universal, combinators, :not()", example: "*, >, +, :not()", weight: "0,0,0,0" },
];

export default function CSSSelectorsCheatSheet() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "CSS Selectors Cheat Sheet — Complete Reference",
            description:
              "Master CSS selectors with this comprehensive cheat sheet. Basic, combinators, pseudo-classes, pseudo-elements, attribute selectors, and specificity rules.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-30",
          }),
        }}
      />

      <nav className="text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">CSS Selectors</span>
      </nav>

      <h1 className="text-4xl font-bold text-stone-900 mb-4">
        CSS Selectors Cheat Sheet
      </h1>
      <p className="text-xl text-stone-600 mb-8">
        Every CSS selector type with copy-paste examples. Basic, combinators, attribute selectors, pseudo-classes, pseudo-elements, and specificity rules.
      </p>

      {/* Table of Contents */}
      <nav className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
        <h2 className="font-semibold text-stone-900 mb-2">Contents</h2>
        <div className="grid grid-cols-2 gap-1 text-sm">
          {selectorGroups.map((g) => (
            <a key={g.category} href={`#${g.category.toLowerCase().replace(/\s+/g, "-")}`} className="text-indigo-600 hover:underline">
              {g.category}
            </a>
          ))}
          <a href="#specificity" className="text-indigo-600 hover:underline">Specificity</a>
        </div>
      </nav>

      {/* Selector Groups */}
      {selectorGroups.map((group) => (
        <section key={group.category} id={group.category.toLowerCase().replace(/\s+/g, "-")} className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">{group.category}</h2>
          <div className="space-y-3">
            {group.selectors.map((s) => (
              <div key={s.selector} className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 bg-white">
                  <code className="font-mono text-sm text-indigo-700 bg-indigo-50 px-2 py-1 rounded whitespace-nowrap">{s.selector}</code>
                  <span className="text-sm text-stone-600">{s.description}</span>
                </div>
                <pre className="px-4 py-3 bg-stone-50 border-t border-stone-100 text-sm overflow-x-auto">
                  <code>{s.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Specificity */}
      <section id="specificity" className="mb-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Specificity</h2>
        <p className="text-sm text-stone-600 mb-4">
          CSS specificity determines which rule wins when multiple rules apply to the same element. Specificity is calculated as a four-part value (inline, ID, class, element).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left px-4 py-2 text-sm font-semibold">Level</th>
                <th className="text-left px-4 py-2 text-sm font-semibold">Type</th>
                <th className="text-left px-4 py-2 text-sm font-semibold">Example</th>
                <th className="text-left px-4 py-2 text-sm font-semibold">Weight</th>
              </tr>
            </thead>
            <tbody>
              {specificity.map((s) => (
                <tr key={s.level} className="border-t border-stone-200">
                  <td className="px-4 py-2 text-sm">{s.level}</td>
                  <td className="px-4 py-2 text-sm font-medium">{s.type}</td>
                  <td className="px-4 py-2 text-sm"><code className="bg-stone-100 px-1 rounded">{s.example}</code></td>
                  <td className="px-4 py-2 text-sm font-mono text-stone-500">{s.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related */}
      <section className="bg-stone-100 rounded-lg p-6 mt-12">
        <h2 className="font-bold text-stone-900 mb-3">Related</h2>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          <Link href="/blog/css-flexbox-cheat-sheet" className="text-indigo-600 hover:underline">CSS Flexbox Cheat Sheet</Link>
          <Link href="/blog/css-grid-cheat-sheet" className="text-indigo-600 hover:underline">CSS Grid Cheat Sheet</Link>
          <Link href="/blog/css-flexbox-vs-grid" className="text-indigo-600 hover:underline">Flexbox vs Grid</Link>
          <Link href="/tools/color-converter" className="text-indigo-600 hover:underline">Color Converter Tool</Link>
        </div>
      </section>
    </article>
  );
}
