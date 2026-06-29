import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Cheat Sheet — Complete Reference for Developers | QuickKit",
  description:
    "Complete React cheat sheet with hooks, state management, JSX patterns, components, context, performance optimization, and common patterns. Copy-paste ready examples.",
  openGraph: {
    title: "React Cheat Sheet — Complete Reference 2026",
    description: "Every React hook, pattern, and API with copy-paste examples.",
    type: "article",
  },
};

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: "Component Basics",
    content: `// Functional component
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

// Arrow component
const Greeting = ({ name }: { name: string }) => (
  <h1>Hello, {name}</h1>
);

// Default props
Greeting.defaultProps = { name: "World" };

// Children prop
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}`,
  },
  {
    title: "useState",
    content: `import { useState } from "react";

// Basic state
const [count, setCount] = useState(0);

// With initial function (expensive computation)
const [data, setData] = useState(() => computeExpensiveValue());

// Object state
const [user, setUser] = useState({ name: "", email: "" });
setUser({ ...user, name: "Alice" });

// Functional update (always use when new state depends on old)
setCount(prev => prev + 1);`,
  },
  {
    title: "useEffect",
    content: `import { useEffect } from "react";

// Run on every render
useEffect(() => {
  console.log("rendered");
});

// Run once on mount
useEffect(() => {
  fetchData();
}, []);

// Run when dependencies change
useEffect(() => {
  document.title = \`\${count} items\`;
}, [count]);

// Cleanup function
useEffect(() => {
  const handler = () => {};
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
}, []);`,
  },
  {
    title: "useContext",
    content: `import { createContext, useContext } from "react";

// Create context
const ThemeContext = createContext("light");

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consumer
const theme = useContext(ThemeContext);

// Default value pattern
const UserContext = createContext<User | null>(null);`,
  },
  {
    title: "useReducer",
    content: `import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
  }
}

const [count, dispatch] = useReducer(reducer, 0);
dispatch({ type: "increment" });`,
  },
  {
    title: "useMemo & useCallback",
    content: `import { useMemo, useCallback } from "react";

// useMemo: cache expensive computations
const sorted = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// useCallback: cache function references (for child optimization)
const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);`,
  },
  {
    title: "useRef",
    content: `import { useRef } from "react";

// DOM reference
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

// Mutable value that persists across renders
const countRef = useRef(0);
countRef.current += 1;`,
  },
  {
    title: "Custom Hooks",
    content: `// useLocalStorage
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// useDebounce
function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}`,
  },
  {
    title: "Performance Patterns",
    content: `// React.memo (skip re-renders)
const ExpensiveChild = React.memo(({ onClick, count }: Props) => {
  return <button onClick={onClick}>Count: {count}</button>;
});

// Lazy loading
const LazyComponent = React.lazy(() => import("./LazyComponent"));

// Virtualized lists for large datasets
import { FixedSizeList } from "react-window";`,
  },
  {
    title: "Error Boundaries",
    content: `import { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong</h1>;
    return this.props.children;
  }
}`,
  },
];

function SectionCard({ section, index }: { section: Section; index: number }) {
  return (
    <div className="border border-stone-200 rounded p-6 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded bg-blue-50 text-blue-800 text-sm font-bold flex items-center justify-center">
          {index + 1}
        </span>
        <h3 className="text-lg font-bold text-stone-900">{section.title}</h3>
      </div>
      <pre className="bg-stone-50 border border-stone-200 rounded p-4 text-sm text-stone-700 overflow-x-auto whitespace-pre-wrap font-mono">
        {section.content}
      </pre>
    </div>
  );
}

export default function ReactCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">React Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Cheat Sheet — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            React Cheat Sheet
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Every React hook, pattern, and API with copy-paste examples.
            From useState to custom hooks, error boundaries to performance optimization.
          </p>
        </header>

        {/* Quick Reference */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Hook</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Common Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useState</td><td className="px-4 py-2 text-stone-500">Local state</td><td className="px-4 py-2 text-stone-500">Form inputs, toggles, counters</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useEffect</td><td className="px-4 py-2 text-stone-500">Side effects</td><td className="px-4 py-2 text-stone-500">API calls, subscriptions, DOM updates</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useContext</td><td className="px-4 py-2 text-stone-500">Context access</td><td className="px-4 py-2 text-stone-500">Theme, auth, language</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useReducer</td><td className="px-4 py-2 text-stone-500">Complex state</td><td className="px-4 py-2 text-stone-500">Multi-step forms, state machines</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useMemo</td><td className="px-4 py-2 text-stone-500">Memoize values</td><td className="px-4 py-2 text-stone-500">Expensive computations, filtered lists</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useCallback</td><td className="px-4 py-2 text-stone-500">Memoize functions</td><td className="px-4 py-2 text-stone-500">Event handlers passed to children</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useRef</td><td className="px-4 py-2 text-stone-500">Mutable refs</td><td className="px-4 py-2 text-stone-500">DOM access, timers, previous values</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useImperativeHandle</td><td className="px-4 py-2 text-stone-500">Custom ref handle</td><td className="px-4 py-2 text-stone-500">Expose component methods to parent</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-mono">useLayoutEffect</td><td className="px-4 py-2 text-stone-500">Sync side effects</td><td className="px-4 py-2 text-stone-500">Measure DOM, prevent flicker</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Complete Reference</h2>
          <div className="grid gap-4">
            {sections.map((section, i) => (
              <SectionCard key={section.title} section={section} index={i} />
            ))}
          </div>
        </section>

        {/* Rules of Hooks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Rules of Hooks</h2>
          <div className="grid gap-3 text-sm">
            <div className="p-4 rounded border border-green-200 bg-green-50">
              <h3 className="font-bold text-green-800 mb-1">✅ Do</h3>
              <ul className="space-y-1 text-green-700">
                <li>Call hooks at the top level of your component</li>
                <li>Call hooks from React functions (components or custom hooks)</li>
                <li>Use the dependency array in useEffect</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-1">❌ Don&apos;t</h3>
              <ul className="space-y-1 text-red-700">
                <li>Call hooks inside loops, conditions, or nested functions</li>
                <li>Call hooks from regular JavaScript functions</li>
                <li>Omit the dependency array (leads to stale closures)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/typescript-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">TypeScript Cheat Sheet →</span>
              <span className="block text-stone-400 mt-1">Types, generics, and utility types</span>
            </Link>
            <Link href="/blog/javascript-array-methods-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">JS Array Methods →</span>
              <span className="block text-stone-400 mt-1">Every array method explained</span>
            </Link>
            <Link href="/blog/react-hooks-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">React Hooks Cheat Sheet →</span>
              <span className="block text-stone-400 mt-1">Deep dive on useState, useEffect & more</span>
            </Link>
            <Link href="/blog/css-grid-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">CSS Grid Cheat Sheet →</span>
              <span className="block text-stone-400 mt-1">Complete layout guide</span>
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
            "@type": "TechArticle",
            headline: "React Cheat Sheet — Complete Reference for Developers",
            description: "Every React hook, pattern, and API with copy-paste examples. useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and custom hooks.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-29",
            dateModified: "2026-06-29",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/react-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
