import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Hooks Cheat Sheet — useState, useEffect, useContext & More | QuickKit",
  description:
    "Complete React hooks cheat sheet. useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and custom hooks with copy-paste examples.",
  openGraph: {
    title: "React Hooks Cheat Sheet — QuickKit",
    description:
      "Every React hook explained with copy-paste examples. useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef.",
    type: "article",
  },
};

export default function ReactHooksCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "React Hooks Cheat Sheet",
    description:
      "Complete React hooks cheat sheet covering useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and custom hooks.",
    datePublished: "2026-06-29",
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
          <span className="text-slate-500">React Hooks Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
              Developer Reference
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              React Hooks Cheat Sheet
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every React hook you use daily, with copy-paste examples. useState,
              useEffect, useContext, useReducer, useMemo, useCallback, useRef, and
              custom hooks.
            </p>
          </header>

          {/* useState */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useState</h2>
            <p className="text-sm text-slate-500 mb-4">Manage local component state.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// Basic state
const [count, setCount] = useState(0);

// With initializer function
const [state, setState] = useState(() => {
  return JSON.parse(localStorage.getItem("data") || "{}");
});

// Updating based on previous state
setCount(prev => prev + 1);

// Object state
const [user, setUser] = useState({ name: "", email: "" });
setUser(prev => ({ ...prev, name: "Alice" }));

// Array state
const [items, setItems] = useState<string[]>([]);
setItems(prev => [...prev, "new item"]);`}</pre>
            </div>
          </section>

          {/* useEffect */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useEffect</h2>
            <p className="text-sm text-slate-500 mb-4">Run side effects after render.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// Run after every render (use sparingly)
useEffect(() => {
  console.log("rendered");
});

// Run once on mount
useEffect(() => {
  fetchData();
}, []);

// Run when dependency changes
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// Cleanup function
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);

// Async data fetching
useEffect(() => {
  let cancelled = false;
  async function load() {
    const res = await fetch("/api/data");
    const data = await res.json();
    if (!cancelled) setData(data);
  }
  load();
  return () => { cancelled = true; };
}, []);`}</pre>
            </div>
          </section>

          {/* useContext */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useContext</h2>
            <p className="text-sm text-slate-500 mb-4">Consume values from a React context.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// Provider setup
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

// Consuming context
function Child() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Hello</div>;
}

// With TypeScript
interface AuthContextType {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}`}</pre>
            </div>
          </section>

          {/* useReducer */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useReducer</h2>
            <p className="text-sm text-slate-500 mb-4">Complex state logic with a reducer function.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    case "reset": return 0;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}`}</pre>
            </div>
          </section>

          {/* useMemo */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useMemo</h2>
            <p className="text-sm text-slate-500 mb-4">Memoize expensive computations.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// Only recomputes when dependencies change
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// Expensive calculation
const fibonacci = useMemo(() => {
  return calculateFibonacci(n);
}, [n]);

// Memoize object reference (prevents child re-renders)
const config = useMemo(() => ({
  apiUrl: "/api",
  timeout: 5000,
}), []);`}</pre>
            </div>
          </section>

          {/* useCallback */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useCallback</h2>
            <p className="text-sm text-slate-500 mb-4">Memoize functions to prevent unnecessary re-renders.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// Without useCallback - new function every render
const handleClick = () => { doSomething(id); };

// With useCallback - same function reference
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// Useful with React.memo children
const MemoizedChild = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  // Child won't re-render when count changes
  return <MemoizedChild onClick={handleClick} />;
}`}</pre>
            </div>
          </section>

          {/* useRef */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">useRef</h2>
            <p className="text-sm text-slate-500 mb-4">Access DOM elements and persist values across renders.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// DOM reference
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

// Persist value without re-render
const renderCount = useRef(0);
renderCount.current += 1;

// Store timer ID
const timerRef = useRef<NodeJS.Timeout>();
useEffect(() => {
  timerRef.current = setInterval(() => {}, 1000);
  return () => clearInterval(timerRef.current!);
}, []);

// Previous value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}`}</pre>
            </div>
          </section>

          {/* Custom Hooks */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Custom Hooks</h2>
            <p className="text-sm text-slate-500 mb-4">Extract reusable logic into custom hooks.</p>
            <div className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <pre className="text-slate-800">{`// useLocalStorage
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
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// useMediaQuery
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// useFetch
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then(r => r.json())
      .then(d => { if (!cancelled) { setData(d); setLoading(false); } })
      .catch(e => { if (!cancelled) { setError(e.message); setLoading(false); } });
    return () => { cancelled = true; };
  }, [url]);

  return { data, error, loading };
}`}</pre>
            </div>
          </section>

          {/* Rules of Hooks */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Rules of Hooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                <h3 className="font-semibold text-green-800 mb-2">Do</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Call hooks at the top level of your component</li>
                  <li>• Call hooks from React functions (components or custom hooks)</li>
                  <li>• Use the array destructuring convention (useState, useReducer)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-red-200 bg-red-50">
                <h3 className="font-semibold text-red-800 mb-2">Don&apos;t</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Call hooks inside loops, conditions, or nested functions</li>
                  <li>• Call hooks from regular JavaScript functions</li>
                  <li>• Call hooks from React class components</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="mb-10 p-6 rounded-lg border border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <Link href="/blog/typescript-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                TypeScript Cheat Sheet →
              </Link>
              <Link href="/blog/python-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                Python Cheat Sheet →
              </Link>
              <Link href="/blog/css-flexbox-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                CSS Flexbox Cheat Sheet →
              </Link>
              <Link href="/blog/html-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                HTML Cheat Sheet →
              </Link>
              <Link href="/blog/git-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                Git Cheat Sheet →
              </Link>
              <Link href="/blog/json-cheat-sheet" className="text-indigo-600 hover:text-indigo-700">
                JSON Cheat Sheet →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
