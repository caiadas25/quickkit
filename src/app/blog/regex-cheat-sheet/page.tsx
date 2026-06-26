import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regex Cheat Sheet — Regular Expressions for Developers | QuickKit",
  description:
    "Complete regular expressions cheat sheet. Patterns, quantifiers, anchors, groups, lookaheads, and common regex patterns for JavaScript, Python, and more. Copy-paste ready.",
  openGraph: {
    title: "Regex Cheat Sheet — Regular Expressions for Developers",
    description: "Every regex pattern you need, with examples. Quantifiers, groups, lookaheads, and real-world patterns.",
    type: "article",
  },
};

interface RegexSection {
  title: string;
  patterns: { pattern: string; description: string; example?: string }[];
}

const sections: RegexSection[] = [
  {
    title: "Character Classes",
    patterns: [
      { pattern: ".", description: "Any character except newline" },
      { pattern: "\\d", description: "Digit [0-9]" },
      { pattern: "\\D", description: "Non-digit [^0-9]" },
      { pattern: "\\w", description: "Word character [a-zA-Z0-9_]" },
      { pattern: "\\W", description: "Non-word character" },
      { pattern: "\\s", description: "Whitespace (space, tab, newline)" },
      { pattern: "\\S", description: "Non-whitespace" },
      { pattern: "[abc]", description: "Character set: a, b, or c" },
      { pattern: "[^abc]", description: "Negated set: NOT a, b, or c" },
      { pattern: "[a-z]", description: "Range: any lowercase letter" },
      { pattern: "[a-zA-Z0-9]", description: "Alphanumeric characters" },
    ],
  },
  {
    title: "Quantifiers",
    patterns: [
      { pattern: "*", description: "Zero or more" },
      { pattern: "+", description: "One or more" },
      { pattern: "?", description: "Zero or one (optional)" },
      { pattern: "{n}", description: "Exactly n times" },
      { pattern: "{n,}", description: "n or more times" },
      { pattern: "{n,m}", description: "Between n and m times" },
      { pattern: "*?", description: "Zero or more (lazy, as few as possible)" },
      { pattern: "+?", description: "One or more (lazy)" },
    ],
  },
  {
    title: "Anchors & Boundaries",
    patterns: [
      { pattern: "^", description: "Start of string (or line with multiline flag)" },
      { pattern: "$", description: "End of string (or line with multiline flag)" },
      { pattern: "\\b", description: "Word boundary" },
      { pattern: "\\B", description: "Non-word boundary" },
    ],
  },
  {
    title: "Groups & Alternation",
    patterns: [
      { pattern: "(abc)", description: "Capturing group" },
      { pattern: "(?:abc)", description: "Non-capturing group" },
      { pattern: "(?<name>abc)", description: "Named capturing group" },
      { pattern: "a|b", description: "Alternation: a or b" },
      { pattern: "\\1", description: "Back-reference to first captured group" },
    ],
  },
  {
    title: "Lookaround",
    patterns: [
      { pattern: "(?=abc)", description: "Positive lookahead: followed by abc" },
      { pattern: "(?!abc)", description: "Negative lookahead: NOT followed by abc" },
      { pattern: "(?<=abc)", description: "Positive lookbehind: preceded by abc" },
      { pattern: "(?<!abc)", description: "Negative lookbehind: NOT preceded by abc" },
    ],
  },
  {
    title: "Flags",
    patterns: [
      { pattern: "g", description: "Global: match all occurrences" },
      { pattern: "i", description: "Case-insensitive matching" },
      { pattern: "m", description: "Multiline: ^ and $ match line boundaries" },
      { pattern: "s", description: "Dotall: . matches newline characters" },
      { pattern: "u", description: "Unicode: enable full Unicode support" },
    ],
  },
];

const commonPatterns = [
  { name: "Email address", regex: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$", description: "Basic email validation" },
  { name: "URL", regex: "https?:\\/\\/[\\w.-]+(?:\\.[\\w]+)+(?:\\/[\\w.-]*)*", description: "HTTP/HTTPS URLs" },
  { name: "IP address (v4)", regex: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$", description: "Basic IPv4 pattern" },
  { name: "Phone (US)", regex: "^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$", description: "US phone numbers" },
  { name: "Date (YYYY-MM-DD)", regex: "^\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])$", description: "ISO date format" },
  { name: "Hex color", regex: "^#(?:[0-9a-fA-F]{3}){1,2}$", description: "#RGB or #RRGGBB" },
  { name: "HTML tag", regex: "<([a-z][a-z0-9]*)\\b[^>]*>(.*?)<\\/\\1>", description: "Match HTML opening/closing tags" },
  { name: "Whitespace trim", regex: "^\\s+|\\s+$", description: "Leading and trailing whitespace" },
  { name: "Strong password", regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#]).{8,}$", description: "Min 8 chars, upper, lower, digit, special" },
  { name: "Slug", regex: "^[a-z0-9]+(?:-[a-z0-9]+)*$", description: "URL slug (kebab-case)" },
];

export default function RegexCheatSheetPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Regex Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Cheat Sheet — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Regex Cheat Sheet
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every regular expression pattern you need, organized by category.
            Copy-paste ready with examples for JavaScript, Python, and other languages.
          </p>
        </header>

        {/* Quick Reference Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-2 px-3 font-semibold text-slate-700">Pattern</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">\\d</td>
                  <td className="py-2 px-3 text-slate-600">Any digit [0-9]</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">\\w</td>
                  <td className="py-2 px-3 text-slate-600">Word character [a-zA-Z0-9_]</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">\\s</td>
                  <td className="py-2 px-3 text-slate-600">Whitespace</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">.</td>
                  <td className="py-2 px-3 text-slate-600">Any character (except newline)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">^</td>
                  <td className="py-2 px-3 text-slate-600">Start of string</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">$</td>
                  <td className="py-2 px-3 text-slate-600">End of string</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">*</td>
                  <td className="py-2 px-3 text-slate-600">Zero or more</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">+</td>
                  <td className="py-2 px-3 text-slate-600">One or more</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">?</td>
                  <td className="py-2 px-3 text-slate-600">Zero or one (optional)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3 font-mono text-indigo-600">{"{n,m}"}</td>
                  <td className="py-2 px-3 text-slate-600">Between n and m times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Sections */}
        {sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-2 px-3 font-semibold text-slate-700">Pattern</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {section.patterns.map((p) => (
                    <tr key={p.pattern} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-2 px-3 font-mono text-indigo-600 whitespace-nowrap">{p.pattern}</td>
                      <td className="py-2 px-3 text-slate-600">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Common Real-World Patterns */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Common Real-World Patterns</h2>
          <div className="space-y-4">
            {commonPatterns.map((p) => (
              <div key={p.name} className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">{p.name}</span>
                  <span className="text-xs text-slate-500">{p.description}</span>
                </div>
                <code className="block text-sm font-mono text-indigo-600 bg-white p-2 rounded border border-slate-200 overflow-x-auto">
                  {p.regex}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Language-Specific Examples */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Usage Examples</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-700 mb-2">JavaScript</h3>
              <pre className="text-sm font-mono text-slate-600 bg-slate-50 p-3 rounded overflow-x-auto">
{`// Test a regex
const isValid = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/.test(email);

// Match all occurrences
const matches = text.match(/\\d+/g);

// Replace with regex
const cleaned = text.replace(/\\s+/g, ' ').trim();

// Named groups
const date = "2026-06-26";
const [, year, month, day] = date.match(/(\\d{4})-(\\d{2})-(\\d{2})/);`}
              </pre>
            </div>
            <div className="p-4 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-700 mb-2">Python</h3>
              <pre className="text-sm font-mono text-slate-600 bg-slate-50 p-3 rounded overflow-x-auto">
{`import re

# Full match
match = re.fullmatch(r'\\d{3}-\\d{4}', phone)

# Find all
numbers = re.findall(r'\\d+', text)

# Search with groups
m = re.search(r'(\\d{4})-(\\d{2})-(\\d{2})', date_str)

# Replace
cleaned = re.sub(r'\\s+', ' ', text).strip()`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pro Tips</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">1.</span>
              <span><strong className="text-slate-700">Start simple.</strong> Build your regex incrementally. Test with a few cases before making it handle edge cases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">2.</span>
              <span><strong className="text-slate-700">Use non-capturing groups (?:...).</strong> If you don&apos;t need the captured value, non-capturing groups are slightly faster and cleaner.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">3.</span>
              <span><strong className="text-slate-700">Avoid greedy by default.</strong> Use <code className="bg-slate-100 px-1 rounded">*?</code> and <code className="bg-slate-100 px-1 rounded">+?</code> for lazy quantifiers when you want the shortest match.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">4.</span>
              <span><strong className="text-slate-700">Test with regex101.com.</strong> It shows you exactly what your regex matches, step by step, in real time. Essential for debugging.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">5.</span>
              <span><strong className="text-slate-700">Don&apos;t validate email with regex.</strong> Use a proper email validation library. A regex that handles all valid emails is impossibly complex.</span>
            </li>
          </ul>
        </section>

        {/* Try Our Regex Tool */}
        <section className="mt-12 p-6 rounded-xl border border-indigo-200 bg-indigo-50">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Test Your Regex</h2>
          <p className="text-sm text-slate-600 mb-4">
            Use our interactive <strong>Regex Tester</strong> to test patterns in real time with highlighting.
          </p>
          <Link
            href="/tools/regex-tester"
            className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Open Regex Tester →
          </Link>
        </section>

        {/* Related Tools */}
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/regex-tester" className="p-3 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">Regex Tester →</span>
              <span className="block text-slate-500 mt-1">Test patterns with live highlighting</span>
            </Link>
            <Link href="/tools/json-formatter" className="p-3 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all text-sm">
              <span className="text-slate-800 font-semibold">JSON Formatter →</span>
              <span className="block text-slate-500 mt-1">Format and validate JSON data</span>
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
            headline: "Regex Cheat Sheet — Regular Expressions for Developers",
            description: "Every regex pattern you need, with examples. Quantifiers, groups, lookaheads, and real-world patterns.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/regex-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
