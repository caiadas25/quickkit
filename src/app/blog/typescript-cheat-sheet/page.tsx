import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TypeScript Cheat Sheet — Types, Generics & Utility Types | QuickKit",
  description:
    "Complete TypeScript cheat sheet. Data types, interfaces, generics, utility types, enums, and type narrowing. Copy-paste ready examples for every TypeScript feature.",
  openGraph: {
    title: "TypeScript Cheat Sheet — QuickKit",
    description: "Complete TypeScript reference. Types, generics, utility types, and more with copy-paste examples.",
    type: "article",
  },
};

export default function TypeScriptCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "TypeScript Cheat Sheet",
    description:
      "Complete TypeScript cheat sheet covering data types, interfaces, generics, utility types, and type narrowing.",
    datePublished: "2026-06-27",
    author: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">TypeScript Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
              Developer Reference
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              TypeScript Cheat Sheet
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every TypeScript feature you use daily, with copy-paste examples.
              Types, interfaces, generics, utility types, enums, and type narrowing.
            </p>
          </header>

          {/* Basic Types */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Basic Types</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Type</th>
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Example</th>
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: string = &quot;hello&quot;</td>
                    <td className="py-3 px-4">Text values</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">number</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: number = 42</td>
                    <td className="py-3 px-4">Integers and floats</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">boolean</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: boolean = true</td>
                    <td className="py-3 px-4">true or false</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">null</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: null = null</td>
                    <td className="py-3 px-4">Intentional absence</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">undefined</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: undefined = undefined</td>
                    <td className="py-3 px-4">Uninitialized value</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">any</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: any = &quot;hi&quot;</td>
                    <td className="py-3 px-4">Opt out of type checking. Avoid.</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">unknown</td>
                    <td className="py-3 px-4 font-mono text-sm">const x: unknown = getData()</td>
                    <td className="py-3 px-4">Type-safe any. Must narrow before use.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-indigo-600">void</td>
                    <td className="py-3 px-4 font-mono text-sm">function log(): void {}</td>
                    <td className="py-3 px-4">No return value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Interfaces & Type Aliases */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Interfaces & Type Aliases</h2>
            <div className="bg-slate-50 rounded-lg p-4 text-sm font-mono text-slate-700 space-y-3">
              <pre className="overflow-x-auto">{`// Interface
interface User {
  id: number;
  name: string;
  email: string;
  role?: string;            // optional
  readonly createdAt: Date; // read-only
}

// Type alias
type Status = "active" | "inactive" | "pending";

// Intersection
type Admin = User & { permissions: string[] };

// Interface extends
interface AdminUser extends User {
  permissions: string[];
}`}</pre>
            </div>
          </section>

          {/* Generics */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Generics</h2>
            <div className="bg-slate-50 rounded-lg p-4 text-sm font-mono text-slate-700 space-y-3">
              <pre className="overflow-x-auto">{`// Generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Default generic
interface Paginated<T = any> {
  items: T[];
  total: number;
  page: number;
}`}</pre>
            </div>
          </section>

          {/* Utility Types */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Utility Types</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Utility</th>
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">What It Does</th>
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Example</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Partial&lt;T&gt;</td>
                    <td className="py-3 px-4">All properties optional</td>
                    <td className="py-3 px-4 font-mono text-xs">Partial&lt;User&gt; — for updates</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Required&lt;T&gt;</td>
                    <td className="py-3 px-4">All properties required</td>
                    <td className="py-3 px-4 font-mono text-xs">Required&lt;Config&gt;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Pick&lt;T, K&gt;</td>
                    <td className="py-3 px-4">Select specific properties</td>
                    <td className="py-3 px-4 font-mono text-xs">Pick&lt;User, &quot;name&quot; | &quot;email&quot;&gt;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Omit&lt;T, K&gt;</td>
                    <td className="py-3 px-4">Remove specific properties</td>
                    <td className="py-3 px-4 font-mono text-xs">Omit&lt;User, &quot;id&quot;&gt;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Record&lt;K, V&gt;</td>
                    <td className="py-3 px-4">Object with key/value types</td>
                    <td className="py-3 px-4 font-mono text-xs">Record&lt;string, number&gt;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">Readonly&lt;T&gt;</td>
                    <td className="py-3 px-4">All properties readonly</td>
                    <td className="py-3 px-4 font-mono text-xs">Readonly&lt;User&gt;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-mono text-indigo-600">ReturnType&lt;F&gt;</td>
                    <td className="py-3 px-4">Extract function return type</td>
                    <td className="py-3 px-4 font-mono text-xs">ReturnType&lt;typeof getUser&gt;</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-indigo-600">Parameters&lt;F&gt;</td>
                    <td className="py-3 px-4">Extract function param types</td>
                    <td className="py-3 px-4 font-mono text-xs">Parameters&lt;typeof getUser&gt;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Type Narrowing */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Type Narrowing</h2>
            <div className="bg-slate-50 rounded-lg p-4 text-sm font-mono text-slate-700">
              <pre className="overflow-x-auto">{`// typeof narrowing
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // string here
  }
  return value.toFixed(2); // number here
}

// instanceof narrowing
function logError(err: Error | string) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err);
  }
}

// Discriminated union
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":   return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
  }
}

// "in" narrowing
function greet(obj: { name: string } | { greet(): string }) {
  if ("greet" in obj) {
    obj.greet(); // { greet(): string }
  } else {
    console.log(obj.name); // { name: string }
  }
}`}</pre>
            </div>
          </section>

          {/* Enums & Literals */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Enums & Literal Types</h2>
            <div className="bg-slate-50 rounded-lg p-4 text-sm font-mono text-slate-700">
              <pre className="overflow-x-auto">{`// Numeric enum (avoid — use const enum or union)
enum Direction { Up, Down, Left, Right }

// String enum (better)
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

// Const enum (inlined at compile time)
const enum Color { Red, Green, Blue }

// Union literal type (prefer over enums)
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Type predicate
function isString(val: unknown): val is string {
  return typeof val === "string";
}`}</pre>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/json-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">JSON Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">JSON syntax reference</span>
              </Link>
              <Link href="/blog/css-grid-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">CSS Grid Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">CSS Grid layout reference</span>
              </Link>
              <Link href="/blog/git-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">Git Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Git commands reference</span>
              </Link>
              <Link href="/tools/json-formatter" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">JSON Formatter Tool</span>
                <span className="block text-xs text-slate-500 mt-1">Format and validate JSON</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
