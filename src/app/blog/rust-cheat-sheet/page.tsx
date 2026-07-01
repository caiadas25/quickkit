import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rust Cheat Sheet — Ownership, Lifetimes & Common Patterns | QuickKit",
  description:
    "Complete Rust cheat sheet with copy-paste code. Ownership, borrowing, lifetimes, structs, enums, error handling, async, and common patterns.",
  openGraph: {
    title: "Rust Cheat Sheet — QuickKit",
    description: "Every Rust feature you use daily, with copy-paste examples.",
    type: "article",
  },
};

export default function RustCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Rust Cheat Sheet",
    description: "Complete Rust cheat sheet covering ownership, borrowing, lifetimes, and common patterns.",
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
          <span className="text-slate-500">Rust Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Rust Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every Rust feature you use daily, with copy-paste examples. Ownership, borrowing, lifetimes, structs, enums, error handling, and async.
            </p>
          </header>

          {/* Variables & Mutability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Variables &amp; Mutability</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Immutable by default
let x = 5;
// x = 6;  // Error!

// Mutable
let mut y = 5;
y = 6;  // OK

// Type inference
let z = 42;          // i32 by default
let pi = 3.14;       // f64
let name = "Alice";  // &str

// Explicit types
let a: i32 = 42;
let b: f64 = 3.14;
let c: bool = true;
let d: &str = "hello";

// Constants
const MAX_SIZE: usize = 1024;

// Shadowing (rebinds the variable)
let x = 5;
let x = x + 1;    // OK, new binding
let x = "hello";  // OK, changes type too`}</pre>
            </div>
          </section>

          {/* Ownership */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Ownership &amp; Borrowing</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Move semantics — value is transferred
let s1 = String::from("hello");
let s2 = s1;          // s1 is moved to s2
// println!("{}", s1); // Error! s1 is no longer valid

// Clone — explicit deep copy
let s1 = String::from("hello");
let s2 = s1.clone();   // Both valid
println!("{}", s1);     // OK

// Borrowing — reference without ownership
fn print_len(s: &String) {{
    println!("len: {}", s.len());
}}
let s = String::from("hello");
print_len(&s);         // Borrow s
println!("{}", s);      // Still valid!

// Mutable borrowing
fn push_world(s: &mut String) {{
    s.push_str(" world");
}}
let mut s = String::from("hello");
push_world(&mut s);
println!("{}", s);  // "hello world"

// Rules:
// - Any number of immutable references: &T
// - OR exactly one mutable reference: &mut T
// - References must always be valid (no dangling refs)`}</pre>
            </div>
          </section>

          {/* Lifetimes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Lifetimes</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Basic lifetime annotation
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {{
    if x.len() > y.len() {{ x }} else {{ y }}
}}

// Struct with lifetime
struct Excerpt<'a> {{
    text: &'a str,
}}

// 'static — lives for the entire program
let s: &'static str = "I live forever";

// Lifetime elision rules (compiler infers):
// 1. Each reference gets its own lifetime
// 2. If there's one input lifetime, it's assigned to all outputs
// 3. If there's &self or &mut self, self's lifetime is assigned to outputs`}</pre>
            </div>
          </section>

          {/* Structs & Enums */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Structs &amp; Enums</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Struct
struct User {{
    name: String,
    email: String,
    age: u32,
}}

let user = User {{
    name: String::from("Alice"),
    email: String::from("alice@example.com"),
    age: 30,
}};

// Tuple struct
struct Point(f64, f64);
let p = Point(1.0, 2.0);

// Enum with data
enum Message {{
    Quit,
    Move {{ x: i32, y: i32 }},
    Write(String),
    Color(u8, u8, u8),
}}

// Pattern matching
match msg {{
    Message::Quit => println!("Quit"),
    Message::Move {{ x, y }} => println!("Move to ({}, {})", x, y),
    Message::Write(text) => println!("Write: {}", text),
    Message::Color(r, g, b) => println!("Color: #{:02x}{:02x}{:02x}", r, g, b),
}}

// impl blocks
impl User {{
    fn new(name: &str, email: &str) -> Self {{
        User {{ name: name.to_string(), email: email.to_string(), age: 0 }}
    }}

    fn is_adult(&self) -> bool {{
        self.age >= 18
    }}
}}`}</pre>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Error Handling</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Result<T, E> — recoverable errors
fn divide(a: f64, b: f64) -> Result<f64, String> {{
    if b == 0.0 {{
        Err(String::from("Division by zero"))
    }} else {{
        Ok(a / b)
    }}
}}

// Pattern matching on Result
match divide(10.0, 2.0) {{
    Ok(result) => println!("{}", result),
    Err(e) => println!("Error: {}", e),
}}

// ? operator — propagate errors
fn read_file(path: &str) -> Result<String, std::io::Error> {{
    let content = std::fs::read_to_string(path)?;  // Returns Err on failure
    Ok(content)
}}

// unwrap / expect — panic on error (use sparingly)
let value = divide(10.0, 0.0).unwrap();        // Panics!
let value = divide(10.0, 0.0).expect("Failed"); // Panics with message

// Option<T> — optional values
fn find_user(id: u32) -> Option<String> {{
    if id == 1 {{ Some(String::from("Alice")) }} else {{ None }}
}}

// Chaining Options
let name = find_user(1)
    .map(|n| n.to_uppercase())
    .unwrap_or(String::from("Unknown"));`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Vec
let mut v = vec![1, 2, 3];
v.push(4);
for val in &v {{ println!("{}", val); }}

// HashMap
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("name", "Alice");
let name = map.get("name");  // Option<&&str>

// Iterators
let nums = vec![1, 2, 3, 4, 5];
let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();
let evens: Vec<&i32> = nums.iter().filter(|&&x| x % 2 == 0).collect();

// Closures
let add = |a, b| a + b;
println!("{}", add(2, 3));  // 5

// Async/Await
async fn fetch_data() -> Result<String, reqwest::Error> {{
    let resp = reqwest::get("https://api.example.com").await?;
    let body = resp.text().await?;
    Ok(body)
}}

// Traits
trait Summary {{
    fn summarize(&self) -> String;
}}

impl Summary for User {{
    fn summarize(&self) -> String {{
        format!("{} ({})", self.name, self.email)
    }}
}}`}</pre>
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/go-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Go Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Another systems language with different concurrency model</span>
              </Link>
              <Link href="/blog/typescript-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">TypeScript Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Static typing for JavaScript</span>
              </Link>
              <Link href="/blog/javascript-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">JavaScript Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">The language Rust compiles to via WebAssembly</span>
              </Link>
              <Link href="/blog/python-cheat-sheet" className="p-4 rounded border border-slate-200 hover:border-indigo-300 transition-all text-sm">
                <span className="text-slate-800 font-semibold">Python Cheat Sheet →</span>
                <span className="block text-slate-400 mt-1">Another popular language with different philosophy</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
