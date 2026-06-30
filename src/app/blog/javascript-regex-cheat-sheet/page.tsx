import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Regex Cheat Sheet — Complete Reference 2026 | QuickKit",
  description:
    "Complete JavaScript regex cheat sheet. Every regex method, flag, pattern, and metacharacter explained with copy-paste examples. Test patterns live with our free regex tester tool.",
  openGraph: {
    title: "JavaScript Regex Cheat Sheet — Complete Reference 2026",
    description:
      "Every JavaScript regex method, flag, and pattern with copy-paste examples. The only regex cheat sheet you need.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Regex Cheat Sheet",
    description:
      "Complete JavaScript regex reference with every method, flag, and pattern explained.",
  },
};

const methods = [
  { method: "test()", desc: "Returns true/false if pattern matches", example: "/abc/.test('abcdef')  // true" },
  { method: "match()", desc: "Returns match info array or null", example: "'abc'.match(/b./)  // ['bc']" },
  { method: "matchAll()", desc: "Returns iterator of all matches", example: "[...'abab'.matchAll(/ab/g)]  // [['ab'], ['ab']]" },
  { method: "replace()", desc: "Replaces first match (or all with /g)", example: "'aabb'.replace(/b/, 'x')  // 'aaxb'" },
  { method: "replaceAll()", desc: "Replaces all occurrences", example: "'aabb'.replaceAll(/b/g, 'x')  // 'aaxx'" },
  { method: "search()", desc: "Returns index of first match (-1 if none)", example: "'abcdef'.search(/de/)  // 3" },
  { method: "split()", desc: "Splits string by pattern", example: "'a,b,,c'.split(/,+/)  // ['a','b','c']" },
];

const flags = [
  { flag: "g", name: "Global", desc: "Match all occurrences, not just the first" },
  { flag: "i", name: "Case Insensitive", desc: "Case-insensitive matching (a matches A)" },
  { flag: "m", name: "Multiline", desc: "^ and $ match start/end of each line" },
  { flag: "s", name: "DotAll", desc: "Dot (.) matches newline characters" },
  { flag: "u", name: "Unicode", desc: "Enable Unicode matching and proper surrogate pair handling" },
  { flag: "y", name: "Sticky", desc: "Match from lastIndex position only" },
];

const metacharacters = [
  { char: ".", desc: "Any character (except newline, unless /s flag)", example: "a.c matches abc, a1c, a@c" },
  { char: "\\d", desc: "Digit [0-9]", example: "\\d+ matches 123, 0, 42" },
  { char: "\\D", desc: "Non-digit [^0-9]", example: "\\D+ matches abc, @#%" },
  { char: "\\w", desc: "Word character [a-zA-Z0-9_]", example: "\\w+ matches hello_123" },
  { char: "\\W", desc: "Non-word character", example: "\\W matches @, space, !" },
  { char: "\\s", desc: "Whitespace (space, tab, newline)", example: "\\s+ matches '  \\t\\n'" },
  { char: "\\S", desc: "Non-whitespace", example: "\\S+ matches 'hello!'" },
  { char: "\\b", desc: "Word boundary", example: "\\bcat\\b matches 'cat' in 'the cat'" },
  { char: "^", desc: "Start of string (or line with /m)", example: "^hello matches 'hello world'" },
  { char: "$", desc: "End of string (or line with /m)", example: "world$ matches 'hello world'" },
];

const quantifiers = [
  { char: "*", desc: "Zero or more", example: "a* matches '', 'a', 'aaa'" },
  { char: "+", desc: "One or more", example: "a+ matches 'a', 'aaa' (not '')" },
  { char: "?", desc: "Zero or one (optional)", example: "colou?r matches color, colour" },
  { char: "{n}", desc: "Exactly n times", example: "\\d{3} matches 123, 000" },
  { char: "{n,}", desc: "n or more times", example: "\\d{2,} matches 12, 123, 12345" },
  { char: "{n,m}", desc: "Between n and m times", example: "\\d{2,4} matches 12, 123, 1234" },
  { char: "x?", desc: "Non-greedy (lazy) — matches as few as possible", example: "a+? in 'aaa' matches 'a', 'a', 'a'" },
];

const groups = [
  { char: "(abc)", desc: "Capturing group", example: "'abc'.match(/(b)(c)/) // ['bc', 'b', 'c']" },
  { char: "(?:abc)", desc: "Non-capturing group", example: "'abc'.match(/(?:b)(c)/) // ['bc', 'c']" },
  { char: "(?<name>abc)", desc: "Named capturing group", example: "'abc'.match(/(?<a>a)/).groups.a  // 'a'" },
  { char: "a|b", desc: "Alternation (OR)", example: "cat|dog matches 'cat' or 'dog'" },
  { char: "[abc]", desc: "Character class (match any)", example: "[aeiou] matches any vowel" },
  { char: "[^abc]", desc: "Negated character class", example: "[^aeiou] matches any consonant" },
  { char: "[a-z]", desc: "Range in character class", example: "[a-zA-Z] matches any letter" },
  { char: "(?=abc)", desc: "Positive lookahead", example: "\\d(?=px) matches 1 in '1px'" },
  { char: "(?!abc)", desc: "Negative lookahead", example: "\\d(?!px) matches 1 in '1em'" },
  { char: "(?<=abc)", desc: "Positive lookbehind", example: "(?<=\\$)\\d+ matches 100 in '$100'" },
  { char: "(?<!abc)", desc: "Negative lookbehind", example: "(?<!\\$)\\d+ matches 100 in '€100'" },
];

const patterns = [
  { name: "Email (simple)", regex: "/^[\\w.-]+@[\\w.-]+\\.\\w+$/", desc: "Basic email validation" },
  { name: "URL", regex: "/https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=%]+$/", desc: "HTTP/HTTPS URLs" },
  { name: "Phone (US)", regex: "/^\\(?\\d{3}\\)?[-\\s.]?\\d{3}[-\\s.]?\\d{4}$/", desc: "(123) 456-7890, 123-456-7890" },
  { name: "IPv4 Address", regex: "/^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/", desc: "0.0.0.0 to 255.255.255.255" },
  { name: "Date (YYYY-MM-DD)", regex: "/^\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])$/", desc: "ISO 8601 date format" },
  { name: "Hex Color", regex: "/^#(?:[0-9a-fA-F]{3}){1,2}$/", desc: "#fff or #ff00aa" },
  { name: "Password (strong)", regex: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/", desc: "8+ chars, upper, lower, digit, special" },
  { name: "HTML Tag", regex: "/<([a-z][a-z0-9]*)\\b[^>]*>([\\s\\S]*?)<\\/\\1>/i", desc: "Matches opening + closing tags" },
];

export default function JavascriptRegexCheatSheetPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">JavaScript Regex Cheat Sheet</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-medium">Cheat Sheet</span>
            <span>June 30, 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            JavaScript Regex Cheat Sheet — Complete Reference 2026
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every JavaScript regex method, flag, pattern, and metacharacter explained with copy-paste examples. The only regex reference you need.
          </p>
        </header>

        {/* Quick Reference */}
        <section className="mb-12 p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Reference</h2>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`// Create regex
const re = /pattern/flags;
const re2 = new RegExp("pattern", "flags");

// Test & match
re.test(str)        // true/false
str.match(re)       // array or null
str.matchAll(re)    // iterator of matches

// Replace & split
str.replace(re, replacement)
str.replaceAll(re, replacement)
str.split(re)`}</pre>
          </div>
        </section>

        {/* Methods */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">RegExp Methods</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-200 shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-3 font-semibold text-slate-600">Method</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Description</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Example</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m) => (
                  <tr key={m.method} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-mono text-indigo-600 font-medium">{m.method}</td>
                    <td className="p-3 text-slate-600">{m.desc}</td>
                    <td className="p-3 font-mono text-xs text-slate-500 bg-slate-50 rounded">{m.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Flags */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Flags</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {flags.map((f) => (
              <div key={f.flag} className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-mono font-bold text-indigo-600">/{f.flag}</span>
                  <span className="text-sm font-semibold text-slate-700">{f.name}</span>
                </div>
                <p className="text-xs text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Metacharacters */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Metacharacters & Shorthand Classes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-200 shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-3 font-semibold text-slate-600">Pattern</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Description</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Example</th>
                </tr>
              </thead>
              <tbody>
                {metacharacters.map((m) => (
                  <tr key={m.char} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-mono text-indigo-600 font-medium">{m.char}</td>
                    <td className="p-3 text-slate-600">{m.desc}</td>
                    <td className="p-3 text-xs text-slate-500">{m.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quantifiers */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quantifiers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-200 shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-3 font-semibold text-slate-600">Pattern</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Description</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Example</th>
                </tr>
              </thead>
              <tbody>
                {quantifiers.map((q) => (
                  <tr key={q.char} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-mono text-indigo-600 font-medium">{q.char}</td>
                    <td className="p-3 text-slate-600">{q.desc}</td>
                    <td className="p-3 text-xs text-slate-500">{q.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Groups & Assertions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Groups & Assertions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-slate-200 shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-3 font-semibold text-slate-600">Pattern</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Description</th>
                  <th className="text-left p-3 font-semibold text-slate-600">Example</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((g) => (
                  <tr key={g.char} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-mono text-indigo-600 font-medium">{g.char}</td>
                    <td className="p-3 text-slate-600">{g.desc}</td>
                    <td className="p-3 text-xs text-slate-500">{g.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Common Patterns</h2>
          <div className="space-y-3">
            {patterns.map((p) => (
              <div key={p.name} className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">{p.name}</span>
                  <span className="text-xs text-slate-400">{p.desc}</span>
                </div>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-x-auto">
                  {p.regex}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/how-to-convert-json-to-xml"
              className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Convert JSON to XML
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Step-by-step guide with JavaScript, Python, and Node.js examples.
              </p>
            </Link>
            <Link
              href="/tools/json-formatter"
              className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                JSON Formatter Tool
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Format, validate, and minify JSON data with line numbers and error highlighting.
              </p>
            </Link>
            <Link
              href="/blog/how-to-decode-jwt"
              className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                How to Decode JWT Tokens
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Decode and verify JSON Web Tokens in JavaScript, Python, and the command line.
              </p>
            </Link>
            <Link
              href="/tools/hash-generator"
              className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Hash Generator Tool
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-400 pt-8 border-t border-slate-200">
          <p>Built by an AI agent as a dev tools experiment. <Link href="https://github.com/caiadas25/quickkit" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">Source on GitHub ↗</Link></p>
        </footer>
      </div>

      {/* TechArticle JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "JavaScript Regex Cheat Sheet — Complete Reference 2026",
            description:
              "Complete JavaScript regex cheat sheet with every method, flag, and pattern explained.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://quickkit-nine.vercel.app/blog/javascript-regex-cheat-sheet",
            },
          }),
        }}
      />
    </main>
  );
}
