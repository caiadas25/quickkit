import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Cheat Sheet — Every Feature Explained | QuickKit",
  description:
    "Complete JavaScript cheat sheet with copy-paste code. Variables, functions, arrays, objects, async/await, DOM, ES6+, modules, and error handling. Every feature with examples.",
  openGraph: {
    title: "JavaScript Cheat Sheet — QuickKit",
    description: "Every JavaScript feature you use daily, with copy-paste examples. ES6+, async/await, DOM, and more.",
    type: "article",
  },
};

export default function JavaScriptCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "JavaScript Cheat Sheet",
    description: "Complete JavaScript cheat sheet covering ES6+, async/await, DOM manipulation, arrays, objects, and modules.",
    datePublished: "2026-07-01",
    author: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
    publisher: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">JavaScript Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">JavaScript Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every JavaScript feature you use daily, with copy-paste examples. Variables, functions, arrays, objects, async/await, DOM, ES6+, modules, and error handling.
            </p>
          </header>

          {/* Variables & Scope */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Variables &amp; Scope</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// let — block-scoped, reassignable
let count = 0;
count = 1;           // OK

// const — block-scoped, cannot reassign
const API_KEY = "abc123";
// API_KEY = "xyz";  // TypeError

// var — function-scoped (avoid)
var old = "don't use";

// Destructuring
const [a, b, ...rest] = [1, 2, 3, 4];  // a=1, b=2, rest=[3,4]
const { name, age, ...props } = { name: "Alice", age: 30, city: "NYC" };

// Template literals
const greeting = \`Hello, \${name}! You are \${age}.\`;

// Nullish coalescing
const value = null ?? "default";    // "default"
const num = 0 ?? 42;                // 0 (only null/undefined trigger default)

// Optional chaining
const street = user?.address?.street;  // undefined if user or address is null`}</pre>
            </div>
          </section>

          {/* Functions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Functions</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Function declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}\`;
}

// Arrow function (concise, no own 'this')
const add = (a, b) => a + b;
const square = x => x * x;           // single param, no parens needed
const doWork = () => ({ done: true }); // return object — need parens

// Default parameters
function createUser(name, role = "user") {
  return { name, role };
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3);  // 6

// Closures
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}`}</pre>
            </div>
          </section>

          {/* Arrays */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Arrays</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`const arr = [1, 2, 3, 4, 5];

// Iterate
arr.forEach((item, i) => console.log(i, item));
for (const item of arr) { console.log(item); }

// Map — transform each element
const doubled = arr.map(x => x * 2);         // [2, 4, 6, 8, 10]

// Filter — keep elements matching condition
const evens = arr.filter(x => x % 2 === 0);   // [2, 4]

// Reduce — accumulate into single value
const total = arr.reduce((sum, x) => sum + x, 0);  // 15

// Find / FindIndex
const found = arr.find(x => x > 3);    // 4
const idx = arr.findIndex(x => x > 3); // 3

// Some / Every
arr.some(x => x > 4);   // true (at least one)
arr.every(x => x > 0);  // true (all)

// Sort (mutates!)
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);  // [1, 1, 3, 4, 5]

// Spread & destructuring
const copy = [...arr];
const merged = [...arr, 6, 7];
const [first, second, ...remaining] = arr;

// Flat
[[1, 2], [3, [4]]].flat(Infinity);  // [1, 2, 3, 4]

// Chaining
const result = arr
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .reduce((sum, x) => sum + x, 0);  // 60`}</pre>
            </div>
          </section>

          {/* Objects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Objects</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Create & access
const user = { name: "Alice", age: 30 };
user.name;         // "Alice"
user["age"];       // 30

// Computed property names
const field = "email";
const obj = { [field]: "alice@example.com" };

// Shorthand properties
const name = "Bob", age = 25;
const person = { name, age };  // { name: "Bob", age: 25 }

// Spread
const defaults = { theme: "light", lang: "en" };
const config = { ...defaults, theme: "dark" };  // theme overridden

// Destructuring
const { name: userName, age: userAge } = user;  // rename variables

// Object methods
const obj2 = {
  greet() { return \`Hi, I'm \${this.name}\`; },
};

// Optional chaining on methods
const result = user?.greet?.();

// Object.entries / keys / values
Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Alice", 30]
Object.entries(user); // [["name","Alice"], ["age",30]]

// Shorthand with Object.fromEntries
const params = Object.fromEntries(
  new URLSearchParams("a=1&b=2")
);  // { a: "1", b: "2" }`}</pre>
            </div>
          </section>

          {/* Promises & Async/Await */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Promises &amp; Async/Await</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Creating a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async/await
async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return await response.json();
  } catch (err) {
    console.error("Failed:", err.message);
    throw err;
  }
}

// Parallel execution
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);

// Promise.allSettled — no short-circuit on failure
const results = await Promise.allSettled([fetch(url1), fetch(url2)]);
results.forEach(r => {
  if (r.status === "fulfilled") console.log(r.value);
  else console.error(r.reason);
});

// Promise.race — first to resolve wins
const fastest = await Promise.race([fetch(url1), fetch(url2)]);

// Promise.any — first to succeed wins (ignores rejections)
const first = await Promise.any([fetch(url1), fetch(url2)]);`}</pre>
            </div>
          </section>

          {/* DOM Manipulation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">DOM Manipulation</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Select elements
document.getElementById("app");
document.querySelector(".card");           // first match
document.querySelectorAll("li > a");       // all matches

// Create & insert
const div = document.createElement("div");
div.textContent = "Hello";
div.className = "card";
div.classList.add("active", "visible");
div.style.color = "red";
document.body.appendChild(div);

// Events
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

// Event delegation (efficient for lists)
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// Form data
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log(data);  // { email: "...", password: "..." }
});

// classList
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.classList.contains("active");  // true/false`}</pre>
            </div>
          </section>

          {/* ES6+ Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">ES6+ Features</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Optional chaining (?.)
const street = user?.address?.street;

// Nullish coalescing (??)
const port = config.port ?? 3000;

// Logical assignment
x ??= 10;   // x = x ?? 10
x ||= 10;   // x = x || 10
x &&= 10;   // x = x && 10

// Array.at() — negative indexing
["a", "b", "c"].at(-1);  // "c"

// structuredClone — deep copy
const copy = structuredClone(original);

// Object.hasOwn()
Object.hasOwn({ a: 1 }, "a");  // true

// Promise.try() — catch sync errors in async context
const result = await Promise.try(() => {
  if (bad) throw new Error("no");
  return fetchData();
});

// Array grouping
const grouped = Object.groupBy(items, item => item.category);
// { electronics: [...], books: [...] }

// Temporal (Stage 3 — may not be available yet)
// const now = Temporal.Now.zonedDateTime();`}</pre>
            </div>
          </section>

          {/* Modules */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Modules</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Named exports (utils.js)
export const PI = 3.14159;
export function square(x) { return x * x; }
export default class Logger { ... }

// Import (app.js)
import Logger from "./utils.js";          // default
import { PI, square } from "./utils.js";  // named
import { PI as pi } from "./utils.js";    // renamed
import * as utils from "./utils.js";       // namespace

// Dynamic import (code splitting)
const module = await import("./heavy.js");
module.default();

// Re-export
export { default as Logger } from "./utils.js";
export { PI, square } from "./utils.js";`}</pre>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Error Handling</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Try / catch / finally
try {
  const data = JSON.parse(input);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error("Invalid JSON");
  } else {
    throw err;  // re-throw unknown errors
  }
} finally {
  cleanup();
}

// Custom errors
class NotFoundError extends Error {
  constructor(resource) {
    super(\`\${resource} not found\`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
throw new NotFoundError("User");

// Error.cause (ES2022)
try {
  fetch(url);
} catch (err) {
  throw new Error("API failed", { cause: err });
}`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Debounce
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// Throttle
function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...args);
    }
  };
}

// Memoize
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Deep clone (modern)
const clone = structuredClone(obj);

// Flatten object
function flatten(obj, prefix = "") {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const fullKey = prefix ? \`\${prefix}.\${key}\` : key;
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      Object.assign(acc, flatten(val, fullKey));
    } else {
      acc[fullKey] = val;
    }
    return acc;
  }, {});
}`}</pre>
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/typescript-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">TypeScript Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Types, generics, utility types, and more</span>
              </Link>
              <Link href="/blog/react-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">React Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Components, hooks, state, and patterns</span>
              </Link>
              <Link href="/blog/nodejs-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Node.js Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Modules, streams, CLI, and server patterns</span>
              </Link>
              <Link href="/blog/javascript-array-methods-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">JavaScript Array Methods →</span>
                <span className="block text-slate-400 mt-1">Every array method with examples</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
