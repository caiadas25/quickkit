import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Array Methods Cheat Sheet — Every Method Explained | QuickKit",
  description:
    "Complete JavaScript array methods cheat sheet. map, filter, reduce, find, sort, forEach, flatMap, includes, every, some, and more with copy-paste examples.",
  openGraph: {
    title: "JavaScript Array Methods Cheat Sheet — Every Method Explained",
    description:
      "map, filter, reduce, find, sort, and every other array method you use daily. Copy-paste ready examples for each one.",
    type: "article",
  },
};

interface ArrayMethod {
  method: string;
  description: string;
  returns: string;
  mutates: boolean;
  example: string;
  output: string;
}

interface ArraySection {
  title: string;
  methods: ArrayMethod[];
}

const sections: ArraySection[] = [
  {
    title: "Creating & Converting",
    methods: [
      {
        method: "Array.from(iterable)",
        description: "Creates a new array from an iterable (string, Set, NodeList, etc.)",
        returns: "Array",
        mutates: false,
        example: 'Array.from("hello")  // ["h","e","l","l","o"]\nArray.from({ length: 3 }, (_, i) => i * 2)  // [0, 2, 4]',
        output: '["h","e","l","l","o"]',
      },
      {
        method: "Array.of(...items)",
        description: "Creates an array from its arguments (useful for creating arrays of a single number)",
        returns: "Array",
        mutates: false,
        example: 'Array.of(3)  // [3]\nArray.of(1, 2, 3)  // [1, 2, 3]',
        output: "[3]",
      },
      {
        method: "Array.isArray(value)",
        description: "Checks if a value is an array",
        returns: "boolean",
        mutates: false,
        example: 'Array.isArray([1, 2, 3])  // true\nArray.isArray("hello")  // false',
        output: "true",
      },
    ],
  },
  {
    title: "Iteration",
    methods: [
      {
        method: ".forEach(callback)",
        description: "Executes a function for each element. Returns undefined (not chainable)",
        returns: "undefined",
        mutates: false,
        example: '[1, 2, 3].forEach((n, i) => console.log(`${i}: ${n}`))',
        output: "0: 1, 1: 2, 2: 3",
      },
      {
        method: ".entries()",
        description: "Returns an iterator of [index, value] pairs",
        returns: "Array Iterator",
        mutates: false,
        example: '[...["a", "b", "c"].entries()]  // [[0,"a"], [1,"b"], [2,"c"]]',
        output: '[[0,"a"], [1,"b"], [2,"c"]]',
      },
      {
        method: ".keys()",
        description: "Returns an iterator of array indices",
        returns: "Array Iterator",
        mutates: false,
        example: '[..."abc".keys()]  // [0, 1, 2]',
        output: "[0, 1, 2]",
      },
      {
        method: ".values()",
        description: "Returns an iterator of array values",
        returns: "Array Iterator",
        mutates: false,
        example: '[...["x", "y", "z"].values()]',
        output: '["x", "y", "z"]',
      },
    ],
  },
  {
    title: "Transforming",
    methods: [
      {
        method: ".map(callback)",
        description: "Creates a new array by applying a function to each element",
        returns: "Array",
        mutates: false,
        example: '[1, 2, 3].map(n => n * 2)  // [2, 4, 6]',
        output: "[2, 4, 6]",
      },
      {
        method: ".flatMap(callback)",
        description: "Maps each element then flattens the result by one level",
        returns: "Array",
        mutates: false,
        example: '[[1, 2], [3, 4]].flatMap(arr => arr.map(n => n * 10))\n// [10, 20, 30, 40]',
        output: "[10, 20, 30, 40]",
      },
      {
        method: ".filter(callback)",
        description: "Creates a new array with elements that pass the test",
        returns: "Array",
        mutates: false,
        example: '[1, 2, 3, 4, 5].filter(n => n > 3)  // [4, 5]',
        output: "[4, 5]",
      },
      {
        method: ".reduce(callback, init)",
        description: "Reduces an array to a single value (accumulator pattern)",
        returns: "any",
        mutates: false,
        example: '[1, 2, 3, 4].reduce((acc, n) => acc + n, 0)  // 10',
        output: "10",
      },
      {
        method: ".reduceRight(callback, init)",
        description: "Like reduce but processes the array from right to left",
        returns: "any",
        mutates: false,
        example: '["a", "b", "c"].reduceRight((acc, s) => acc + s, "")\n// "cba"',
        output: '"cba"',
      },
    ],
  },
  {
    title: "Searching",
    methods: [
      {
        method: ".find(callback)",
        description: "Returns the first element that passes the test, or undefined",
        returns: "element | undefined",
        mutates: false,
        example: '[5, 12, 8, 130].find(n => n > 10)  // 12',
        output: "12",
      },
      {
        method: ".findIndex(callback)",
        description: "Returns the index of the first match, or -1",
        returns: "number",
        mutates: false,
        example: '[5, 12, 8, 130].findIndex(n => n > 10)  // 1',
        output: "1",
      },
      {
        method: ".findLast(callback)",
        description: "Returns the last element that passes the test (ES2023)",
        returns: "element | undefined",
        mutates: false,
        example: '[1, 5, 12, 8].findLast(n => n < 10)  // 8',
        output: "8",
      },
      {
        method: ".findLastIndex(callback)",
        description: "Returns the index of the last match (ES2023)",
        returns: "number",
        mutates: false,
        example: '[1, 5, 12, 8].findLastIndex(n => n < 10)  // 3',
        output: "3",
      },
      {
        method: ".includes(value)",
        description: "Checks if the array contains a value (uses SameValueZero equality)",
        returns: "boolean",
        mutates: false,
        example: '[1, 2, 3].includes(2)  // true\n[1, 2, 3].includes(4)  // false',
        output: "true",
      },
      {
        method: ".indexOf(value)",
        description: "Returns the first index of a value, or -1",
        returns: "number",
        mutates: false,
        example: '["a", "b", "a"].indexOf("a")  // 0',
        output: "0",
      },
      {
        method: ".lastIndexOf(value)",
        description: "Returns the last index of a value, or -1",
        returns: "number",
        mutates: false,
        example: '["a", "b", "a"].lastIndexOf("a")  // 2',
        output: "2",
      },
    ],
  },
  {
    title: "Testing",
    methods: [
      {
        method: ".every(callback)",
        description: "Returns true if ALL elements pass the test",
        returns: "boolean",
        mutates: false,
        example: '[1, 2, 3].every(n => n > 0)  // true\n[1, -2, 3].every(n => n > 0)  // false',
        output: "true",
      },
      {
        method: ".some(callback)",
        description: "Returns true if at least ONE element passes the test",
        returns: "boolean",
        mutates: false,
        example: '[1, 2, 3].some(n => n > 2)  // true\n[1, 2, 3].some(n => n > 5)  // false',
        output: "true",
      },
    ],
  },
  {
    title: "Sorting",
    methods: [
      {
        method: ".sort(compareFn)",
        description: "Sorts the array in place (mutates!). Default: lexicographic sort",
        returns: "Array",
        mutates: true,
        example: '[3, 1, 4, 1, 5].sort((a, b) => a - b)  // [1, 1, 3, 4, 5]',
        output: "[1, 1, 3, 4, 5]",
      },
      {
        method: ".toSorted(compareFn)",
        description: "Like sort() but returns a new array (ES2023, non-mutating)",
        returns: "Array",
        mutates: false,
        example: '[3, 1, 4].toSorted((a, b) => a - b)  // [1, 3, 4]\n[3, 1, 4]  // still [3, 1, 4]',
        output: "[1, 3, 4]",
      },
      {
        method: ".reverse()",
        description: "Reverses the array in place (mutates!)",
        returns: "Array",
        mutates: true,
        example: '[1, 2, 3].reverse()  // [3, 2, 1]',
        output: "[3, 2, 1]",
      },
      {
        method: ".toReversed()",
        description: "Like reverse() but returns a new array (ES2023, non-mutating)",
        returns: "Array",
        mutates: false,
        example: '[1, 2, 3].toReversed()  // [3, 2, 1]\n[1, 2, 3]  // still [1, 2, 3]',
        output: "[3, 2, 1]",
      },
    ],
  },
  {
    title: "Slicing & Splicing",
    methods: [
      {
        method: ".slice(start, end)",
        description: "Returns a shallow copy of a portion of the array (non-mutating)",
        returns: "Array",
        mutates: false,
        example: '["a", "b", "c", "d"].slice(1, 3)  // ["b", "c"]',
        output: '["b", "c"]',
      },
      {
        method: ".splice(start, count, ...items)",
        description: "Changes the array by removing/replacing/adding elements (mutates!)",
        returns: "Array of removed elements",
        mutates: true,
        example: 'const a = [1, 2, 3, 4];\na.splice(1, 2, 10, 20);  // removed: [2, 3]\na  // [1, 10, 20, 4]',
        output: "removed: [2, 3]",
      },
      {
        method: ".toSpliced(start, count, ...items)",
        description: "Like splice() but returns a new array (ES2023, non-mutating)",
        returns: "Array",
        mutates: false,
        example: '[1, 2, 3, 4].toSpliced(1, 2, 10, 20)\n// [1, 10, 20, 4]\n[1, 2, 3, 4]  // still [1, 2, 3, 4]',
        output: "[1, 10, 20, 4]",
      },
      {
        method: ".at(index)",
        description: "Returns the element at the given index (supports negative indices)",
        returns: "element | undefined",
        mutates: false,
        example: '["a", "b", "c"].at(1)  // "b"\n["a", "b", "c"].at(-1)  // "c"',
        output: '"c"',
      },
    ],
  },
  {
    title: "Flattening & Combining",
    methods: [
      {
        method: ".flat(depth)",
        description: "Flattens nested arrays by the given depth (default: 1)",
        returns: "Array",
        mutates: false,
        example: '[1, [2, [3, [4]]]].flat()     // [1, 2, [3, [4]]]\n[1, [2, [3, [4]]]].flat(Infinity)  // [1, 2, 3, 4]',
        output: "[1, 2, 3, 4]",
      },
      {
        method: ".concat(...arrays)",
        description: "Merges arrays (non-mutating)",
        returns: "Array",
        mutates: false,
        example: '[1, 2].concat([3, 4], [5])  // [1, 2, 3, 4, 5]',
        output: "[1, 2, 3, 4, 5]",
      },
      {
        method: ".join(separator)",
        description: "Joins all elements into a string",
        returns: "string",
        mutates: false,
        example: '["a", "b", "c"].join("-")  // "a-b-c"',
        output: '"a-b-c"',
      },
    ],
  },
  {
    title: "Mutating Methods (Use Carefully!)",
    methods: [
      {
        method: ".push(...items)",
        description: "Adds elements to the end of the array",
        returns: "new length",
        mutates: true,
        example: 'const a = [1, 2];\na.push(3, 4);  // a is now [1, 2, 3, 4]',
        output: "4 (new length)",
      },
      {
        method: ".pop()",
        description: "Removes and returns the last element",
        returns: "removed element",
        mutates: true,
        example: 'const a = [1, 2, 3];\na.pop();  // returns 3, a is [1, 2]',
        output: "3",
      },
      {
        method: ".unshift(...items)",
        description: "Adds elements to the beginning of the array",
        returns: "new length",
        mutates: true,
        example: 'const a = [3, 4];\na.unshift(1, 2);  // a is [1, 2, 3, 4]',
        output: "4 (new length)",
      },
      {
        method: ".shift()",
        description: "Removes and returns the first element",
        returns: "removed element",
        mutates: true,
        example: 'const a = [1, 2, 3];\na.shift();  // returns 1, a is [2, 3]',
        output: "1",
      },
      {
        method: ".fill(value, start, end)",
        description: "Fills elements with a static value (mutates!)",
        returns: "Array",
        mutates: true,
        example: '[1, 2, 3, 4].fill(0, 1, 3)  // [1, 0, 0, 4]',
        output: "[1, 0, 0, 4]",
      },
      {
        method: ".copyWithin(target, start, end)",
        description: "Copies a portion of the array to another location in the same array",
        returns: "Array",
        mutates: true,
        example: '[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5]',
        output: "[4, 5, 3, 4, 5]",
      },
      {
        method: ".with(index, value)",
        description: "Returns a new array with the element at index replaced (ES2023, non-mutating)",
        returns: "Array",
        mutates: false,
        example: '["a", "b", "c"].with(1, "x")  // ["a", "x", "c"]',
        output: '["a", "x", "c"]',
      },
    ],
  },
];

function MethodCard({ method }: { method: ArrayMethod }) {
  return (
    <div className="p-4 rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <code className="text-sm font-mono font-semibold text-indigo-600">{method.method}</code>
        {method.mutates && (
          <span className="text-xs px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
            mutates
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 mb-2">{method.description}</p>
      <p className="text-xs text-slate-400 mb-3">
        <span className="font-medium">Returns:</span> <code className="font-mono">{method.returns}</code>
      </p>
      <pre className="bg-slate-50 rounded p-3 text-xs font-mono text-slate-700 overflow-x-auto whitespace-pre-wrap border border-slate-100">
        {method.example}
      </pre>
    </div>
  );
}

export default function JavaScriptArrayMethodsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">JavaScript Array Methods</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded bg-yellow-50 text-yellow-700 mb-3 inline-block border border-yellow-200">Cheat Sheet</span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          JavaScript Array Methods Cheat Sheet
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Every array method you use daily — map, filter, reduce, find, sort, and more.
          Copy-paste ready examples. Mutating methods flagged. Organized by workflow.
        </p>
      </header>

      {/* Quick Reference Table */}
      <div className="mb-10 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2 font-medium text-slate-500">Method</th>
              <th className="text-left px-4 py-2 font-medium text-slate-500">Purpose</th>
              <th className="text-center px-4 py-2 font-medium text-slate-500">Mutates?</th>
            </tr>
          </thead>
          <tbody>
            {sections.flatMap(s => s.methods).map((m, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-indigo-600 text-xs">{m.method.split("(")[0]}</td>
                <td className="px-4 py-2 text-slate-600 text-xs">{m.description.split(".")[0]}</td>
                <td className="px-4 py-2 text-center">
                  {m.mutates ? (
                    <span className="text-xs text-amber-600">⚠️ Yes</span>
                  ) : (
                    <span className="text-xs text-green-600">✅ No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Sections */}
      {sections.map((section, si) => (
        <section key={si} className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">{section.title}</h2>
          <div className="grid gap-4">
            {section.methods.map((method, mi) => (
              <MethodCard key={mi} method={method} />
            ))}
          </div>
        </section>
      ))}

      {/* Internal Links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Related Posts</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/blog/typescript-cheat-sheet", label: "TypeScript Cheat Sheet" },
            { href: "/blog/python-cheat-sheet", label: "Python Cheat Sheet" },
            { href: "/blog/json-cheat-sheet", label: "JSON Cheat Sheet" },
            { href: "/blog/regex-cheat-sheet", label: "Regex Cheat Sheet" },
            { href: "/blog/css-grid-cheat-sheet", label: "CSS Grid Cheat Sheet" },
            { href: "/blog/html-cheat-sheet", label: "HTML Cheat Sheet" },
          ].map(link => (
            <Link key={link.href} href={link.href} className="p-3 rounded-lg border border-slate-200 bg-white hover:border-indigo-300 transition-all text-sm font-medium text-slate-700 hover:text-indigo-600">
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-400 text-center space-y-1">
        <p>QuickKit — Free developer tools and cheat sheets. No signup required.</p>
        <p>Built by an AI agent as a dev tools experiment. <a href="https://github.com/caiadas25/quickkit" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors">Source on GitHub ↗</a></p>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "JavaScript Array Methods Cheat Sheet",
            description: "Complete JavaScript array methods cheat sheet with copy-paste examples.",
            datePublished: "2026-06-29",
            author: { "@type": "Organization", name: "QuickKit" },
          }),
        }}
      />
    </div>
  );
}
