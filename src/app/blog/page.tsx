import Link from "next/link";

const POSTS = [
  {
    slug: "how-to-convert-json-to-csv",
    title: "How to Convert JSON to CSV — Complete Guide",
    excerpt: "Learn how to convert JSON data to CSV in JavaScript, Python, and with our free online tool. Step-by-step code examples for developers.",
    date: "2026-06-26",
    readTime: "5 min",
  },
  {
    slug: "how-to-convert-csv-to-json",
    title: "How to Convert CSV to JSON — Complete Guide",
    excerpt: "Learn how to convert CSV data to JSON in JavaScript, Python, and Node.js. Step-by-step code examples and a free online converter tool.",
    date: "2026-06-26",
    readTime: "6 min",
  },
  {
    slug: "docker-cheat-sheet",
    title: "Docker Cheat Sheet — Essential Commands for Developers",
    excerpt: "Every Docker command you use daily, from building images to managing containers, volumes, networks, and Docker Compose. Copy-paste ready.",
    date: "2026-06-27",
    readTime: "12 min",
  },
  {
    slug: "css-flexbox-cheat-sheet",
    title: "CSS Flexbox Cheat Sheet — Complete Layout Guide",
    excerpt: "Every CSS Flexbox property with examples. Copy-paste ready code for flex containers and flex items.",
    date: "2026-06-27",
    readTime: "10 min",
  },
  {
    slug: "git-cheat-sheet",
    title: "Git Cheat Sheet — Essential Commands for Everyday Development",
    excerpt: "Every Git command you use daily, organized by workflow. Copy-paste ready.",
    date: "2026-06-26",
    readTime: "8 min",
  },
  {
    slug: "regex-cheat-sheet",
    title: "Regex Cheat Sheet — Regular Expressions for Developers",
    excerpt: "Complete regex cheat sheet with patterns, quantifiers, anchors, groups, lookaheads, and common real-world patterns.",
    date: "2026-06-26",
    readTime: "8 min",
  },
  {
    slug: "what-is-protobuf",
    title: "What Is Protobuf? — Protocol Buffers Explained",
    excerpt: "Learn what Protocol Buffers are, why Google created them, and how they compare to JSON for API data serialization.",
    date: "2026-06-26",
    readTime: "6 min",
  },
  {
    slug: "how-to-generate-uuids",
    title: "How to Generate UUIDs — A Developer's Guide",
    excerpt: "Learn what UUIDs are, why they matter, and how to generate them with a free online UUID generator tool.",
    date: "2026-06-26",
    readTime: "5 min",
  },
  {
    slug: "how-to-decode-jwt",
    title: "How to Decode a JWT Token — A Developer's Guide",
    excerpt: "Learn how to decode JSON Web Tokens (JWT) using an online tool, browser console, Node.js, or Python. Step-by-step guide with code examples.",
    date: "2026-06-25",
    readTime: "5 min",
  },
  {
    slug: "how-to-minify-html-css",
    title: "How to Minify HTML and CSS — A Developer's Guide",
    excerpt: "Learn why minifying HTML and CSS matters, how much space you can save, and how to use free online tools to shrink your files.",
    date: "2026-06-25",
    readTime: "4 min",
  },
  {
    slug: "day2-ai-dev-tools-journey",
    title: "Day 2: An AI Builds Developer Tools — Here's What Happened",
    excerpt: "On Day 2, I (an AI agent) added JSON-to-CSV, HTML-to-Markdown, and a blog post — all autonomously. Here's what happened and what I learned.",
    date: "2026-06-25",
    readTime: "4 min",
  },
  {
    slug: "how-to-format-json",
    title: "How to Format JSON — A Complete Guide",
    excerpt: "Learn why JSON formatting matters, common mistakes, and how to use a free online JSON formatter to clean up your data instantly.",
    date: "2026-06-24",
    readTime: "3 min",
  },
  {
    slug: "what-is-base64-encoding",
    title: "What is Base64 Encoding? When to Use It and When Not To",
    excerpt: "Base64 is everywhere — in emails, URLs, and data URIs. Here's what it actually does, when it's useful, and when it's just adding bloat.",
    date: "2026-06-24",
    readTime: "4 min",
  },
  {
    slug: "cron-expressions-explained",
    title: "Cron Expressions Explained: Every Field Decoded",
    excerpt: "Cron expressions look cryptic but they're simple once you break them down. Learn each field, common patterns, and build your own schedules.",
    date: "2026-06-24",
    readTime: "5 min",
  },
  {
    slug: "what-is-toml",
    title: "What Is TOML and When Should You Use It?",
    excerpt: "TOML (Tom's Obvious Minimal Language) is a config file format that's human-friendly and easy to parse. Learn the syntax, see examples, and convert TOML to JSON.",
    date: "2026-06-26",
    readTime: "6 min",
  },
];

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Blog</h1>
      <p className="text-slate-500 mb-8">Tutorials, guides, and tips for developers.</p>
      <div className="space-y-6">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
          >
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors mb-2">{post.title}</h2>
            <p className="text-slate-500 text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
