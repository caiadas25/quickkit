import Link from "next/link";

const POSTS = [
  {
    slug: "java-cheat-sheet",
    title: "Java Cheat Sheet — Syntax, Features & Common Patterns",
    excerpt: "Complete Java cheat sheet. Variables, collections, streams, lambdas, OOP, and multithreading with copy-paste examples.",
    date: "2026-07-01",
    readTime: "14 min",
  },
  {
    slug: "php-cheat-sheet",
    title: "PHP Cheat Sheet — Syntax, Functions & Common Patterns",
    excerpt: "Complete PHP cheat sheet. Variables, arrays, string functions, loops, classes, and PHP 8+ features with copy-paste examples.",
    date: "2026-07-01",
    readTime: "12 min",
  },
  {
    slug: "yaml-cheat-sheet",
    title: "YAML Cheat Sheet — Syntax, Examples & Common Patterns",
    excerpt: "Complete YAML cheat sheet. Scalars, maps, lists, multi-line strings, anchors, and merge keys with copy-paste examples.",
    date: "2026-07-01",
    readTime: "10 min",
  },
  {
    slug: "aws-cheat-sheet",
    title: "AWS CLI Cheat Sheet — Essential Commands & Examples 2026",
    excerpt: "Complete AWS CLI cheat sheet. EC2, S3, Lambda, IAM, CloudFormation, RDS, and CloudWatch commands with copy-paste examples.",
    date: "2026-07-01",
    readTime: "18 min",
  },
  {
    slug: "rust-cheat-sheet",
    title: "Rust Cheat Sheet — Ownership, Lifetimes & Common Patterns",
    excerpt: "Complete Rust cheat sheet with copy-paste code. Ownership, borrowing, lifetimes, structs, enums, error handling, and async patterns.",
    date: "2026-07-01",
    readTime: "14 min",
  },
  {
    slug: "linux-commands-cheat-sheet",
    title: "Linux Commands Cheat Sheet — Essential Commands & Examples 2026",
    excerpt: "Complete Linux commands cheat sheet with copy-paste examples. File operations, text processing, networking, permissions, process management, and system monitoring.",
    date: "2026-07-01",
    readTime: "15 min",
  },
  {
    slug: "javascript-cheat-sheet",
    title: "JavaScript Cheat Sheet — Every Feature Explained",
    excerpt: "Complete JavaScript cheat sheet with copy-paste code. Variables, functions, arrays, objects, async/await, DOM, ES6+, modules, and error handling.",
    date: "2026-07-01",
    readTime: "15 min",
  },
  {
    slug: "docker-compose-cheat-sheet",
    title: "Docker Compose Cheat Sheet — Commands, YAML & Examples",
    excerpt: "Complete Docker Compose cheat sheet. YAML syntax, commands, services, networks, volumes, environment variables, health checks, and multi-stage builds.",
    date: "2026-07-01",
    readTime: "12 min",
  },
  {
    slug: "css-cheat-sheet",
    title: "CSS Cheat Sheet — Complete Reference 2026",
    excerpt: "Complete CSS cheat sheet with copy-paste code. Selectors, box model, flexbox, grid, positioning, animations, media queries, and variables.",
    date: "2026-07-01",
    readTime: "14 min",
  },
  {
    slug: "go-cheat-sheet",
    title: "Go (Golang) Cheat Sheet — Syntax, Concurrency & Common Patterns",
    excerpt: "Complete Go cheat sheet with copy-paste code. Variables, structs, interfaces, goroutines, channels, error handling, and standard library.",
    date: "2026-07-01",
    readTime: "12 min",
  },
  {
    slug: "vim-cheat-sheet",
    title: "Vim Cheat Sheet — Every Command You Need 2026",
    excerpt: "Complete Vim cheat sheet. Navigation, editing, search, replace, macros, splits, tabs, and essential .vimrc config. Every command with copy-paste examples.",
    date: "2026-07-01",
    readTime: "14 min",
  },
  {
    slug: "tailwind-css-cheat-sheet",
    title: "Tailwind CSS Cheat Sheet — Every Utility Class Explained",
    excerpt: "Complete Tailwind CSS cheat sheet. Every utility class — spacing, typography, colors, flexbox, grid, responsive design, dark mode. Copy-paste ready.",
    date: "2026-07-01",
    readTime: "12 min",
  },
  {
    slug: "git-branching-cheat-sheet",
    title: "Git Branching Cheat Sheet — Branch, Merge, Rebase & More",
    excerpt: "Complete Git branching cheat sheet. Create branches, switch, merge, rebase, cherry-pick, and resolve conflicts. Every command with copy-paste examples.",
    date: "2026-07-01",
    readTime: "12 min",
  },
  {
    slug: "css-variables-cheat-sheet",
    title: "CSS Variables Cheat Sheet — Complete Reference 2026",
    excerpt: "Complete CSS custom properties (variables) cheat sheet. Syntax, scoping, fallback values, dynamic theming, dark mode, and 20+ real-world patterns. Copy-paste ready.",
    date: "2026-06-30",
    readTime: "10 min",
  },
  {
    slug: "git-commands-cheat-sheet",
    title: "Git Commands Cheat Sheet — Essential Git Reference 2026",
    excerpt: "Complete Git commands cheat sheet. Every git command you use daily — staging, committing, branching, merging, rebasing, stashing, remote, and log. Copy-paste ready.",
    date: "2026-06-30",
    readTime: "15 min",
  },
  {
    slug: "rest-api-cheat-sheet",
    title: "REST API Cheat Sheet — HTTP Methods, Status Codes & Patterns",
    excerpt: "REST API cheat sheet. GET, POST, PUT, PATCH, DELETE, status codes, authentication, pagination, and best practices. Copy-paste ready.",
    date: "2026-06-30",
    readTime: "10 min",
  },
  {
    slug: "javascript-regex-cheat-sheet",
    title: "JavaScript Regex Cheat Sheet — Regular Expressions Reference",
    excerpt: "JavaScript regex cheat sheet. Every regex pattern, quantifier, and flag explained. Email, phone, URL, and common validation patterns. Copy-paste ready.",
    date: "2026-06-29",
    readTime: "8 min",
  },
  {
    slug: "how-to-convert-json-to-xml",
    title: "How to Convert JSON to XML — Complete Guide 2026",
    excerpt: "Convert JSON to XML using JavaScript, Python, and online tools. Step-by-step with code examples and the best free converters.",
    date: "2026-06-29",
    readTime: "7 min",
  },
  {
    slug: "css-selectors-cheat-sheet",
    title: "CSS Selectors Cheat Sheet — Complete Reference 2026",
    excerpt: "CSS selectors cheat sheet. 60+ selectors from basic to advanced — combinators, attribute selectors, pseudo-classes, pseudo-elements, and specificity.",
    date: "2026-06-29",
    readTime: "10 min",
  },
  {
    slug: "npm-cheat-sheet",
    title: "NPM Commands Cheat Sheet — Essential NPM Reference 2026",
    excerpt: "NPM commands cheat sheet. Install, dependencies, scripts, init, security, cache, workspaces, and registry. 80+ commands copy-paste ready.",
    date: "2026-06-29",
    readTime: "10 min",
  },
  {
    slug: "javascript-array-methods-cheat-sheet",
    title: "JavaScript Array Methods Cheat Sheet — Every Method Explained",
    excerpt: "Complete JavaScript array methods cheat sheet. map, filter, reduce, find, sort, forEach, flatMap, includes, every, some — with copy-paste examples. Mutating methods flagged.",
    date: "2026-06-29",
    readTime: "15 min",
  },
  {
    slug: "react-hooks-cheat-sheet",
    title: "React Hooks Cheat Sheet — useState, useEffect, useContext & More",
    excerpt: "Complete React hooks cheat sheet. useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and custom hooks with copy-paste examples.",
    date: "2026-06-29",
    readTime: "12 min",
  },
  {
    slug: "unix-timestamp-converter",
    title: "Unix Timestamp Converter — How to Convert Epoch Time",
    excerpt: "Convert Unix timestamps to human-readable dates and back. JavaScript, Python, and Bash code examples. Free online tool.",
    date: "2026-06-29",
    readTime: "5 min",
  },
  {
    slug: "bash-cheat-sheet",
    title: "Bash Cheat Sheet — Shell Commands Reference 2026",
    excerpt: "Bash cheat sheet. File operations, text processing, process management, networking, and scripting. Every command with examples.",
    date: "2026-06-28",
    readTime: "12 min",
  },
  {
    slug: "sql-cheat-sheet",
    title: "SQL Cheat Sheet — Queries, Joins & Functions Reference",
    excerpt: "SQL cheat sheet. SELECT, JOIN, GROUP BY, subqueries, window functions, indexes, and optimization. Copy-paste ready.",
    date: "2026-06-28",
    readTime: "10 min",
  },
  {
    slug: "html-cheat-sheet",
    title: "HTML Cheat Sheet — Tags, Elements & Attributes Reference",
    excerpt: "HTML cheat sheet. Semantic elements, forms, tables, multimedia, accessibility, and meta tags. Every tag with examples.",
    date: "2026-06-28",
    readTime: "10 min",
  },
  {
    slug: "python-cheat-sheet",
    title: "Python Cheat Sheet — Syntax, Libraries & Patterns 2026",
    excerpt: "Python cheat sheet. Data types, list comprehensions, generators, decorators, file I/O, and common patterns. Copy-paste ready.",
    date: "2026-06-28",
    readTime: "12 min",
  },
  {
    slug: "typescript-cheat-sheet",
    title: "TypeScript Cheat Sheet — Types, Generics & Utility Types",
    excerpt: "TypeScript cheat sheet. Interfaces, types, generics, utility types, type guards, and advanced patterns. Copy-paste ready.",
    date: "2026-06-28",
    readTime: "10 min",
  },
  {
    slug: "html-entities-cheat-sheet",
    title: "HTML Entities Cheat Sheet — Special Characters & Symbols",
    excerpt: "HTML entities cheat sheet. Every special character — accented letters, math symbols, arrows, and currency. Copy-paste ready.",
    date: "2026-06-28",
    readTime: "5 min",
  },
  {
    slug: "git-cheat-sheet",
    title: "Git Cheat Sheet — Quick Reference 2026",
    excerpt: "Git cheat sheet quick reference. The most common Git commands with one-line explanations. Bookmark this page.",
    date: "2026-06-27",
    readTime: "5 min",
  },
  {
    slug: "regex-cheat-sheet",
    title: "Regex Cheat Sheet — Regular Expressions Reference",
    excerpt: "Regular expressions cheat sheet. Patterns, quantifiers, groups, lookaheads, and common use cases. Language-agnostic.",
    date: "2026-06-27",
    readTime: "8 min",
  },
  {
    slug: "what-is-protobuf",
    title: "What is Protobuf? Protocol Buffers Explained",
    excerpt: "What is Protocol Buffers (Protobuf)? How it works, why it's faster than JSON, and when to use it. Complete guide.",
    date: "2026-06-27",
    readTime: "7 min",
  },
  {
    slug: "how-to-generate-uuids",
    title: "How to Generate UUIDs — JavaScript, Python, Bash",
    excerpt: "Generate UUIDs (v4 and v7) in JavaScript, Python, Bash, and more. Code examples and the best UUID libraries.",
    date: "2026-06-27",
    readTime: "5 min",
  },
  {
    slug: "day2-ai-dev-tools-journey",
    title: "Day 2: Building AI-Powered Dev Tools — A 30-Day Journey",
    excerpt: "Day 2 of building AI-powered developer tools. Adding new tools, fixing bugs, and lessons learned from autonomous coding.",
    date: "2026-06-27",
    readTime: "8 min",
  },
  {
    slug: "how-to-format-json",
    title: "How to Format JSON — Pretty Print & Minify Guide",
    excerpt: "Format and pretty-print JSON using JavaScript, Python, Bash, and online tools. Indentation, sorting keys, and minification.",
    date: "2026-06-26",
    readTime: "5 min",
  },
  {
    slug: "what-is-base64-encoding",
    title: "What is Base64 Encoding? Explained with Examples",
    excerpt: "What is Base64 encoding? How it works, when to use it, and how to encode/decode in JavaScript, Python, and Bash.",
    date: "2026-06-26",
    readTime: "6 min",
  },
  {
    slug: "cron-expressions-explained",
    title: "Cron Expressions Explained — Every Field Explained",
    excerpt: "Cron expressions explained field by field. Every pattern with examples — daily, weekly, monthly, and complex schedules.",
    date: "2026-06-26",
    readTime: "7 min",
  },
  {
    slug: "how-to-convert-yaml-to-json",
    title: "How to Convert YAML to JSON — Complete Guide",
    excerpt: "Convert YAML to JSON using JavaScript, Python, and online tools. Handle arrays, nested objects, and edge cases.",
    date: "2026-06-26",
    readTime: "5 min",
  },
  {
    slug: "how-to-minify-html-css",
    title: "How to Minify HTML & CSS — Reduce File Size",
    excerpt: "Minify HTML and CSS to reduce file size and improve load times. Online tools, CLI tools, and build pipeline integration.",
    date: "2026-06-26",
    readTime: "5 min",
  },
  {
    slug: "how-to-decode-jwt",
    title: "How to Decode JWT — JSON Web Token Explained",
    excerpt: "Decode JWT tokens in JavaScript, Python, and Bash. Understand header, payload, and signature. Debug expired tokens.",
    date: "2026-06-26",
    readTime: "6 min",
  },
  {
    slug: "how-to-minify-javascript",
    title: "How to Minify JavaScript — Reduce Bundle Size",
    excerpt: "Minify JavaScript to reduce bundle size. Terser, esbuild, and SWC. Build pipeline integration and source maps.",
    date: "2026-06-26",
    readTime: "6 min",
  },
  {
    slug: "what-is-toml",
    title: "What is TOML? Tom's Obvious Minimal Language Explained",
    excerpt: "What is TOML? Syntax, data types, tables, arrays, and datetime. Compared to YAML and JSON. Complete guide.",
    date: "2026-06-25",
    readTime: "6 min",
  },
  {
    slug: "css-flexbox-cheat-sheet",
    title: "CSS Flexbox Cheat Sheet — Layout Guide 2026",
    excerpt: "CSS flexbox cheat sheet. Container properties, item properties, alignment, wrapping, and ordering. Every property with visual examples.",
    date: "2026-06-25",
    readTime: "8 min",
  },
  {
    slug: "css-grid-cheat-sheet",
    title: "CSS Grid Cheat Sheet — Layout Guide 2026",
    excerpt: "CSS grid cheat sheet. Grid template, areas, auto-placement, minmax, and responsive patterns. Every property with examples.",
    date: "2026-06-25",
    readTime: "10 min",
  },
  {
    slug: "docker-cheat-sheet",
    title: "Docker Cheat Sheet — Commands & Dockerfile Reference",
    excerpt: "Docker cheat sheet. Build, run, network, volumes, compose, and Dockerfile reference. Every command with examples.",
    date: "2026-06-25",
    readTime: "10 min",
  },
  {
    slug: "how-to-convert-csv-to-json",
    title: "How to Convert CSV to JSON — Complete Guide",
    excerpt: "Convert CSV to JSON using JavaScript, Python, and online tools. Handle headers, nested data, and large files.",
    date: "2026-06-25",
    readTime: "5 min",
  },
  {
    slug: "how-to-convert-json-to-csv",
    title: "How to Convert JSON to CSV — Complete Guide",
    excerpt: "Convert JSON to CSV using JavaScript, Python, and online tools. Handle nested objects, arrays, and large datasets.",
    date: "2026-06-25",
    readTime: "5 min",
  },
  {
    slug: "what-is-markdown",
    title: "What is Markdown? Syntax & Writing Guide",
    excerpt: "What is Markdown? Syntax, formatting, tables, links, images, and GitHub Flavored Markdown. Complete beginner guide.",
    date: "2026-06-24",
    readTime: "6 min",
  },
  {
    slug: "markdown-cheat-sheet",
    title: "Markdown Cheat Sheet — Every Syntax Explained",
    excerpt: "Markdown cheat sheet. Every syntax element — headings, bold, italic, links, images, code blocks, tables, and task lists.",
    date: "2026-06-24",
    readTime: "6 min",
  },
  {
    slug: "json-cheat-sheet",
    title: "JSON Cheat Sheet — Syntax & Validation Reference",
    excerpt: "JSON cheat sheet. Syntax, data types, nesting, arrays, validation, and common mistakes. Copy-paste examples.",
    date: "2026-06-24",
    readTime: "5 min",
  },
  {
    slug: "nodejs-cheat-sheet",
    title: "Node.js Cheat Sheet — Essential Commands & APIs",
    excerpt: "Node.js cheat sheet. File system, streams, HTTP, child processes, and common patterns. Every API with examples.",
    date: "2026-06-24",
    readTime: "10 min",
  },
  {
    slug: "kubernetes-cheat-sheet",
    title: "Kubernetes Cheat Sheet — kubectl Commands Reference",
    excerpt: "Kubernetes cheat sheet. kubectl commands for pods, deployments, services, configmaps, secrets, and debugging. 100+ commands.",
    date: "2026-06-24",
    readTime: "12 min",
  },
  {
    slug: "react-cheat-sheet",
    title: "React Cheat Sheet — Components, Hooks & Patterns",
    excerpt: "React cheat sheet. Components, hooks, context, refs, performance, and common patterns. Every API with examples.",
    date: "2026-06-23",
    readTime: "10 min",
  },
  {
    slug: "http-status-codes-explained",
    title: "HTTP Status Codes Explained — Every Code Meaning",
    excerpt: "HTTP status codes explained. 1xx, 2xx, 3xx, 4xx, 5xx — every code with meaning, cause, and fix. Color-coded groups.",
    date: "2026-06-23",
    readTime: "8 min",
  },
  {
    slug: "css-flexbox-vs-grid",
    title: "CSS Flexbox vs Grid — When to Use Which?",
    excerpt: "CSS flexbox vs grid: when to use each layout system. Decision flowchart, examples, and best practices.",
    date: "2026-06-23",
    readTime: "7 min",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">Developer Cheat Sheets & Guides</h1>
        <p className="text-lg text-slate-500">
          Free, copy-paste ready cheat sheets for developers. JavaScript, Python, Git, CSS, Docker, Kubernetes, and more.
        </p>
      </header>

      <div className="space-y-4">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-slate-400">{post.date}</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{post.readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-800 mb-1 hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
