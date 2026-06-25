import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Minify HTML and CSS — A Developer's Guide | QuickKit",
  description: "Learn why minifying HTML and CSS matters, how much space you can save, and how to use free online tools to shrink your files for production.",
};

export default function BlogPost() {
  return (
    <article className="prose prose-slate max-w-none">
      <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium no-underline">&larr; Back to Blog</Link>
      <h1>How to Minify HTML and CSS — A Developer&apos;s Guide</h1>
      <p className="text-slate-400 text-sm">June 25, 2026 · 4 min read</p>

      <p>Every byte matters on the web. When a user visits your site, their browser has to download, parse, and render your HTML and CSS. Whitespace, comments, and unnecessary formatting don&apos;t affect how the page looks — but they do make files bigger and slower to process.</p>

      <h2>What Is Minification?</h2>
      <p>Minification is the process of removing all unnecessary characters from code without changing its behavior. That means stripping:</p>
      <ul>
        <li>Comments</li>
        <li>Whitespace (spaces, tabs, newlines)</li>
        <li>Redundant formatting</li>
        <li>In some cases: shortening variable names, removing quotes from attributes</li>
      </ul>
      <p>The result is functionally identical code that&apos;s significantly smaller.</p>

      <h2>Why Minify HTML and CSS?</h2>
      <p>Google&apos;s Core Web Vitals reward faster pages. Minifying your static assets directly improves your Largest Contentful Paint (LCP) and First Contentful Paint (FCP) scores. Here&apos;s what you typically save:</p>
      <ul>
        <li><strong>HTML:</strong> 10-30% size reduction</li>
        <li><strong>CSS:</strong> 20-40% size reduction</li>
      </ul>
      <p>For a 50KB HTML file, that&apos;s 5-15KB less for the browser to download. On a 3G connection, that can mean 100-300ms faster load time.</p>

      <h2>How to Minify HTML</h2>
      <p>The quickest way is with a free online tool:</p>
      <ol>
        <li>Open the <Link href="/tools/html-minifier" className="text-indigo-600 hover:underline">HTML Minifier</Link></li>
        <li>Paste your HTML into the input area</li>
        <li>Click &quot;Minify HTML&quot;</li>
        <li>See the size savings and copy the minified output</li>
      </ol>

      <h2>How to Minify CSS</h2>
      <p>Same process for CSS:</p>
      <ol>
        <li>Open the <Link href="/tools/css-minifier" className="text-indigo-600 hover:underline">CSS Minifier</Link></li>
        <li>Paste your CSS into the input area</li>
        <li>Click &quot;Minify CSS&quot;</li>
        <li>Copy the minified result</li>
      </ol>

      <h2>Automating Minification</h2>
      <p>For production, you should minify automatically in your build pipeline. Popular tools:</p>
      <ul>
        <li><strong>html-minifier-terser</strong> — the most configurable HTML minifier</li>
        <li><strong>cssnano</strong> — a modular CSS minifier for PostCSS</li>
        <li><strong>clean-css</strong> — fast and feature-rich CSS optimizer</li>
        <li><strong>Terser</strong> — the default minifier in Webpack and Vite</li>
      </ul>
      <p>In Next.js, CSS is already minified automatically in production builds. But for static HTML files or custom setups, you&apos;ll need to handle it yourself.</p>

      <h2>What NOT to Minify</h2>
      <p>Minification is for production assets. In development, keep your code readable. Also, don&apos;t minify:</p>
      <ul>
        <li>API responses (they&apos;re data, not presentation)</li>
        <li>Server-rendered HTML that changes frequently (the savings are minimal compared to the processing cost)</li>
        <li>SVG files with complex paths (use SVGO instead)</li>
      </ul>

      <h2>Try It Now</h2>
      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/tools/html-minifier" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          Minify HTML →
        </Link>
        <Link href="/tools/css-minifier" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
          Minify CSS →
        </Link>
      </div>
    </article>
  );
}
