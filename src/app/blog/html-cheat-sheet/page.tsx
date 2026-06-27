import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTML Cheat Sheet — Tags, Attributes & Elements | QuickKit",
  description:
    "Complete HTML cheat sheet with every tag, attribute, and element. Copy-paste ready HTML reference for developers. Covers semantic HTML5, forms, tables, and more.",
  openGraph: {
    title: "HTML Cheat Sheet — Complete Reference for Developers",
    description:
      "Master HTML with this comprehensive cheat sheet. Every tag, attribute, and element with copy-paste examples.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Cheat Sheet — Complete Reference",
    description:
      "Complete HTML reference with copy-paste examples for developers.",
  },
};

export default function HtmlCheatSheetPage() {
  const techArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "HTML Cheat Sheet — Tags, Attributes & Elements",
    description:
      "Complete HTML cheat sheet with every tag, attribute, and element. Copy-paste ready HTML reference for developers.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(techArticleJsonLd),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">HTML Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-900/30 text-cyan-400 mb-3 inline-block">
              Cheat Sheet
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HTML Cheat Sheet — Tags, Attributes & Elements
            </h1>
            <p className="text-lg text-slate-400">
              Complete HTML reference with every tag, attribute, and element.
              Copy-paste ready code examples for developers. Covers semantic
              HTML5, forms, tables, and more.
            </p>
          </header>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              HTML Document Structure
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <article>...</article>
  </main>
  <footer>...</footer>
</body>
</html>`}
              </pre>
            </div>
          </section>

          {/* Semantic HTML5 Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Semantic HTML5 Elements
            </h2>
            <div className="grid gap-4">
              {[
                {
                  tag: "header",
                  desc: "Introductory content or navigation",
                  example: "<header><h1>Site Title</h1><nav>...</nav></header>",
                },
                {
                  tag: "nav",
                  desc: "Navigation links",
                  example: '<nav><a href="/">Home</a> <a href="/about">About</a></nav>',
                },
                {
                  tag: "main",
                  desc: "Main content of the page",
                  example: "<main><article>...</article></main>",
                },
                {
                  tag: "article",
                  desc: "Self-contained content (blog post, news article)",
                  example: "<article><h2>Title</h2><p>Content...</p></article>",
                },
                {
                  tag: "section",
                  desc: "Thematic grouping of content",
                  example: '<section><h2>Section Title</h2><p>Content...</p></section>',
                },
                {
                  tag: "aside",
                  desc: "Tangentially related content (sidebar)",
                  example: "<aside><p>Related links...</p></aside>",
                },
                {
                  tag: "footer",
                  desc: "Footer content for its nearest sectioning context",
                  example: "<footer><p>Copyright 2026</p></footer>",
                },
                {
                  tag: "figure",
                  desc: "Self-contained content with optional caption",
                  example: '<figure><img src="photo.jpg" alt="Photo"><figcaption>Caption</figcaption></figure>',
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <code className="text-cyan-400 font-mono text-sm">
                      {"<" + item.tag + ">"}
                    </code>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                  <pre className="text-sm text-slate-300 bg-slate-800/50 rounded p-3 overflow-x-auto">
                    {item.example}
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Headings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Headings
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<h1>Heading Level 1</h1>  <!-- Main heading, only one per page -->
<h2>Heading Level 2</h2>  <!-- Section heading -->
<h3>Heading Level 3</h3>  <!-- Subsection heading -->
<h4>Heading Level 4</h4>  <!-- Sub-subsection -->
<h5>Heading Level 5</h5>  <!-- Rarely used -->
<h6>Heading Level 6</h6>  <!-- Rarely used -->`}
              </pre>
            </div>
          </section>

          {/* Text Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Text Elements
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<u>Underlined text</u>
<s>Strikethrough text</s>
<mark>Highlighted text</mark>
<small>Small text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Inline code</code>
<abbr title="HyperText Markup Language">HTML</abbr>
<blockquote>Block quote</blockquote>
<pre>Preformatted text</pre>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule -->`}
              </pre>
            </div>
          </section>

          {/* Links & Media */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Links & Media
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<!-- Links -->
<a href="https://example.com">Link text</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External link</a>
<a href="#section">Jump to section</a>
<a href="mailto:user@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>

<!-- Images -->
<img src="photo.jpg" alt="Description" width="300" height="200">
<img srcset="small.jpg 480w, large.jpg 800w" sizes="(max-width: 600px) 480px, 800w" src="large.jpg" alt="Responsive">

<!-- Audio -->
<audio controls src="audio.mp3">Your browser does not support audio.</audio>

<!-- Video -->
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video>`}
              </pre>
            </div>
          </section>

          {/* Lists */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Lists
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Description List -->
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>

<!-- Nested List -->
<ul>
  <li>Item
    <ul>
      <li>Sub-item</li>
    </ul>
  </li>
</ul>`}
              </pre>
            </div>
          </section>

          {/* Tables */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Tables
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Designer</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total: 2</td>
    </tr>
  </tfoot>
</table>`}
              </pre>
            </div>
          </section>

          {/* Forms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Forms
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8">

  <label for="msg">Message:</label>
  <textarea id="msg" name="message" rows="4"></textarea>

  <label for="color">Color:</label>
  <select id="color" name="color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>

  <label>
    <input type="checkbox" name="agree" required> I agree
  </label>

  <label>
    <input type="radio" name="size" value="s"> Small
    <input type="radio" name="size" value="m"> Medium
  </label>

  <input type="range" min="0" max="100" value="50">

  <input type="date" name="date">
  <input type="time" name="time">
  <input type="url" name="website" placeholder="https://">

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>`}
              </pre>
            </div>
          </section>

          {/* HTML Entities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Common HTML Entities
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`&   &  <!-- & (ampersand) -->
<   <  <!-- < (less than) -->
>   >  <!-- > (greater than) -->
"  " <!-- " (double quote) -->
'  ' <!-- ' (single quote) -->
     <!-- non-breaking space -->
©  © <!-- © (copyright) -->
®  ® <!-- ® (registered) -->
™ ™ <!-- ™ (trademark) -->
— — <!-- — (em dash) -->
– – <!-- – (en dash) -->
… … <!-- … (ellipsis) -->
•  • <!-- • (bullet) -->
←  ← <!-- ← (left arrow) -->
→  → <!-- → (right arrow) -->
↑  ↑ <!-- ↑ (up arrow) -->
↓  ↓ <!-- ↓ (down arrow) -->`}
              </pre>
            </div>
          </section>

          {/* Global Attributes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Global Attributes
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
              <pre className="text-sm text-cyan-300 overflow-x-auto">
{`<!-- Common global attributes -->
<div id="myId" class="container" title="Tooltip">
<div data-custom="value" data-id="123">
<div role="button" tabindex="0" aria-label="Close">
<div hidden>
<div contenteditable="true">
<div style="color: red;">
<div lang="en">
<div dir="ltr"> <!-- ltr, rtl, auto -->`}
              </pre>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/markdown-cheat-sheet"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-600/50 transition-all"
              >
                <h3 className="font-bold text-white mb-1">
                  Markdown Cheat Sheet
                </h3>
                <p className="text-sm text-slate-400">
                  Complete Markdown syntax reference with examples. Headers,
                  lists, links, images, tables, and code blocks.
                </p>
              </Link>
              <Link
                href="/blog/css-flexbox-cheat-sheet"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-600/50 transition-all"
              >
                <h3 className="font-bold text-white mb-1">
                  CSS Flexbox Cheat Sheet
                </h3>
                <p className="text-sm text-slate-400">
                  Master CSS Flexbox with this comprehensive cheat sheet. Every
                  property, every value, with visual examples.
                </p>
              </Link>
              <Link
                href="/tools/html-preview"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-600/50 transition-all"
              >
                <h3 className="font-bold text-white mb-1">
                  HTML Preview Tool
                </h3>
                <p className="text-sm text-slate-400">
                  Preview your HTML in real-time. Paste your code and see the
                  rendered output instantly.
                </p>
              </Link>
              <Link
                href="/tools/html-to-markdown"
                className="block p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-600/50 transition-all"
              >
                <h3 className="font-bold text-white mb-1">
                  HTML to Markdown Tool
                </h3>
                <p className="text-sm text-slate-400">
                  Convert HTML to Markdown instantly. Paste your HTML and get
                  clean, readable Markdown output.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
