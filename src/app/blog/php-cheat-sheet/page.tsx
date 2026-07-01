import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PHP Cheat Sheet — Syntax, Functions & Common Patterns | QuickKit",
  description:
    "The complete PHP cheat sheet. Variables, arrays, string functions, loops, classes, and common patterns. Every PHP feature with copy-paste examples for web development.",
  openGraph: {
    title: "PHP Cheat Sheet — Every Feature Explained",
    description: "Variables, arrays, string functions, loops, classes, and common patterns. Copy-paste ready.",
    type: "article",
  },
};

interface PhpSection {
  title: string;
  example: string;
}

const sections: PhpSection[] = [
  {
    title: "Variables & Types",
    example: `<?php\n// Variables start with $\n$name = "Alice";       // string\n$age = 30;             // integer\n$price = 19.99;        // float\n$active = true;        // boolean\n$nothing = null;       // null\n\n// Variable type checking\ngettype($name);        // "string"\nis_string($name);      // true\nis_int($age);          // true\n\n// Type casting\n$number = (int) "42";  // 42\n$string = (string) 42; // "42"`,
  },
  {
    title: "Arrays",
    example: `<?php\n// Indexed array\n$colors = ["red", "green", "blue"];\n$colors[] = "yellow";  // append\n\n// Associative array\n$person = [\n  "name" => "Alice",\n  "age" => 30,\n  "email" => "alice@example.com"\n];\n\n// Access\n$first = $colors[0];         // "red"\n$name = $person["name"];     // "Alice"\n\n// Useful functions\ncount($colors);              // 4\narray_push($colors, "pink"); // add to end\narray_pop($colors);          // remove last\narray_merge($a, $b);         // combine arrays\narray_key_exists("name", $person); // true\nsort($colors);               // sort in place`,
  },
  {
    title: "String Functions",
    example: `<?php\n$str = "Hello World";\n\nstrlen($str);               // 11\nstrtolower($str);           // "hello world"\nstrtoupper($str);           // "HELLO WORLD"\nstr_replace("World", "PHP", $str); // "Hello PHP"\nsubstr($str, 0, 5);        // "Hello"\nstrpos($str, "World");     // 6\ntrim("  hello  ");         // "hello"\nexplode(" ", $str);        // ["Hello", "World"]\nimplode("-", ["a", "b"]);  // "a-b"\nhtmlspecialchars("<b>x</b>"); // escaped\nnl2br("line1\\nline2");     // adds <br>`,
  },
  {
    title: "Control Flow",
    example: `<?php\n// if/elseif/else\nif ($age >= 18) {\n  echo "Adult";\n} elseif ($age >= 13) {\n  echo "Teen";\n} else {\n  echo "Child";\n}\n\n// match (PHP 8+)\n$status = match($code) {\n  200 => "OK",\n  404 => "Not Found",\n  500 => "Server Error",\n  default => "Unknown"\n};\n\n// Ternary\n$greeting = $age >= 18 ? "Adult" : "Minor";\n\n// Null coalescing\n$name = $input["name"] ?? "Anonymous";`,
  },
  {
    title: "Loops",
    example: `<?php\n// for loop\nfor ($i = 0; $i < 10; $i++) {\n  echo $i;\n}\n\n// foreach with array\nforeach ($colors as $color) {\n  echo $color;\n}\n\n// foreach with key/value\nforeach ($person as $key => $value) {\n  echo "$key: $value";\n}\n\n// while\nwhile ($count > 0) {\n  $count--;\n}\n\n// do-while\ndo {\n  $count++;\n} while ($count < 10);`,
  },
  {
    title: "Functions",
    example: `<?php\n// Basic function\nfunction greet(string $name): string {\n  return "Hello, $name!";\n}\n\n// Default parameters\nfunction sum(int $a, int $b = 0): int {\n  return $a + $b;\n}\n\n// Variadic function\nfunction total(...$numbers): int {\n  return array_sum($numbers);\n}\n\ntotal(1, 2, 3);  // 6\n\n// Arrow functions (PHP 7.4+)\n$multiply = fn($a, $b) => $a * $b;\n$multiply(3, 4);  // 12`,
  },
  {
    title: "Classes & OOP",
    example: `<?php\nclass User {\n  public string $name;\n  private int $age;\n  protected string $email;\n\n  public function __construct(string $name, int $age) {\n    $this->name = $name;\n    $this->age = $age;\n  }\n\n  public function getAge(): int {\n    return $this->age;\n  }\n\n  // Static method\n  public static function create(string $name): self {\n    return new self($name, 0);\n  }\n}\n\n// Inheritance\nclass Admin extends User {\n  public function deleteUser(User $user): void {\n    // admin logic\n  }\n}\n\n$user = new User("Alice", 30);\necho $user->name;     // "Alice"\necho $user->getAge(); // 30`,
  },
  {
    title: "Error Handling",
    example: `<?php\n// Try-catch\ntry {\n  $data = json_decode($json, true, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n  echo "JSON error: " . $e->getMessage();\n}\n\n// Custom exceptions\nclass ValidationException extends \\Exception {}\n\nfunction validate(string $input): void {\n  if (empty($input)) {\n    throw new ValidationException("Input is required");\n  }\n}\n\n// Finally block\ntry {\n  $file = fopen("data.txt", "r");\n} catch (\\Exception $e) {\n  echo "Error";\n} finally {\n  // Always runs\n  fclose($file);\n}`,
  },
  {
    title: "Common Patterns",
    example: `<?php\n// Null coalescing assignment (PHP 7.4+)\n$config["debug"] ??= false;\n\n// Named arguments (PHP 8+)\nstr_contains(haystack: "hello", needle: "ell");\n\n// Enums (PHP 8.1+)\nenum Status: string {\n  case Active = "active";\n  case Inactive = "inactive";\n}\n\n// Match expression with types (PHP 8.0+)\nfunction describe(int|float $number): string {\n  return match(true) {\n    $number < 0 => "negative",\n    $number === 0 => "zero",\n    default => "positive",\n  };\n}\n\n// Array functions\n$filtered = array_filter($arr, fn($x) => $x > 10);\n$mapped = array_map(fn($x) => $x * 2, $arr);\n$reduced = array_reduce($arr, fn($carry, $x) => $carry + $x, 0);`,
  },
];

export default function PhpCheatSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            PHP Cheat Sheet
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            PHP powers 77% of all websites with known server-side languages. This cheat sheet covers variables, arrays, string functions, classes, error handling, and modern PHP 8+ features with copy-paste examples.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-3">{section.title}</h2>
              <pre className="bg-slate-50 border border-slate-200 rounded p-4 text-sm overflow-x-auto font-mono text-slate-700 whitespace-pre-wrap">
                {section.example}
              </pre>
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-4">PHP Quick Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">PHP 8+ Features</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">match</code> — type-safe switch</li>
                <li><code className="bg-slate-100 px-1 rounded">??=</code> — null coalescing assign</li>
                <li><code className="bg-slate-100 px-1 rounded">enums</code> — built-in enumerations</li>
                <li><code className="bg-slate-100 px-1 rounded">readonly</code> — immutable properties</li>
                <li><code className="bg-slate-100 px-1 rounded">named args</code> — keyword arguments</li>
                <li><code className="bg-slate-100 px-1 rounded">fibers</code> — lightweight concurrency</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Superglobals</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">$_GET</code> — URL query parameters</li>
                <li><code className="bg-slate-100 px-1 rounded">$_POST</code> — form POST data</li>
                <li><code className="bg-slate-100 px-1 rounded">$_REQUEST</code> — GET + POST + COOKIE</li>
                <li><code className="bg-slate-100 px-1 rounded">$_SESSION</code> — session data</li>
                <li><code className="bg-slate-100 px-1 rounded">$_SERVER</code> — server info</li>
                <li><code className="bg-slate-100 px-1 rounded">$_ENV</code> — environment variables</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Cheat Sheets</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/javascript-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              JavaScript Cheat Sheet →
            </Link>
            <Link href="/blog/python-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Python Cheat Sheet →
            </Link>
            <Link href="/blog/sql-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              SQL Cheat Sheet →
            </Link>
            <Link href="/blog/nodejs-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Node.js Cheat Sheet →
            </Link>
            <Link href="/blog/html-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              HTML Cheat Sheet →
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
            headline: "PHP Cheat Sheet — Syntax, Functions & Common Patterns",
            description:
              "Complete PHP cheat sheet with variables, arrays, string functions, loops, classes, and PHP 8+ features. Copy-paste examples for web development.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
          }),
        }}
      />
    </div>
  );
}
