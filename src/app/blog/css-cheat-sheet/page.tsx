import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Cheat Sheet — Complete Reference 2026 | QuickKit",
  description:
    "Complete CSS cheat sheet with copy-paste code. Selectors, box model, flexbox, grid, positioning, animations, media queries, variables, and more. Every property with examples.",
  openGraph: {
    title: "CSS Cheat Sheet — QuickKit",
    description: "Every CSS property you use daily, with copy-paste examples. Selectors, layout, animations, responsive, and more.",
    type: "article",
  },
};

export default function CSSCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "CSS Cheat Sheet",
    description: "Complete CSS cheat sheet covering selectors, box model, flexbox, grid, positioning, animations, media queries, and variables.",
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
          <span className="text-slate-500">CSS Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">CSS Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every CSS property you use daily, with copy-paste examples. Selectors, box model, flexbox, grid, positioning, animations, media queries, and variables.
            </p>
          </header>

          {/* Selectors */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Selectors</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`/* Type selectors */
h1 { color: red; }
p { margin: 0; }

/* Class selectors */
.button { padding: 8px 16px; }
.card--featured { border: 2px solid gold; }

/* ID selectors */
#header { position: sticky; top: 0; }

/* Universal */
* { box-sizing: border-box; margin: 0; }

/* Descendant / Child */
nav a { text-decoration: none; }     /* any <a> inside nav */
nav > a { text-decoration: none; }   /* direct child only */

/* Sibling */
h2 + p { margin-top: 0; }           /* adjacent (next sibling) */
h2 ~ p { margin-top: 0; }           /* general (all following) */

/* Attribute selectors */
a[href^="https"] { color: green; }    /* starts with */
input[type="text"] { border: 1px solid; }
a[href$=".pdf"] { color: red; }       /* ends with */
a[href*="example"] { color: blue; }   /* contains */

/* Pseudo-classes */
a:hover { color: blue; }
a:visited { color: purple; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2n) { background: #f5f5f5; }  /* even rows */
li:nth-child(3n+1) { background: #fafafa; } /* every 3rd */

/* Pseudo-elements */
p::first-line { font-variant: small-caps; }
p::before { content: "→ "; color: blue; }
p::after { content: " ¶"; color: gray; }
::selection { background: yellow; }

/* :has() — parent selector (2023+) */
.card:has(img) { padding: 0; }
div:has(> .error) { border-color: red; }`}</pre>
            </div>
          </section>

          {/* Box Model */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Box Model</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`/* Reset box model */
*, *::before, *::after { box-sizing: border-box; }

/* Width and height */
.box {
  width: 300px;
  height: 200px;
  /* width/height include padding + border with border-box */

  padding: 16px;                    /* all sides */
  padding: 8px 16px;                /* vertical | horizontal */
  padding: 8px 16px 8px 16px;       /* top right bottom left */
  padding-block: 8px;               /* logical (vertical) */
  padding-inline: 16px;             /* logical (horizontal) */

  border: 1px solid #ccc;           /* width style color */
  border-radius: 8px;               /* all corners */
  border-radius: 8px 0;             /* diagonal */
  border-top-left-radius: 8px;      /* individual */

  margin: 16px;                     /* all sides */
  margin: 0 auto;                   /* center horizontally */
  margin-block-start: 16px;         /* logical top */
}

/* Display */
.block { display: block; }           /* full-width, new line */
.inline { display: inline; }         /* flows with text */
.inline-block {                     /* inline but accepts w/h */
  display: inline-block;
  width: 100px;
  height: 50px;
}
.hidden { display: none; }
.grid-item { display: contents; }    /* removes box, keeps children */

/* Overflow */
.overflow-hidden { overflow: hidden; }
.scroll-x { overflow-x: auto; }     /* horizontal scroll */
.scroll-y { overflow-y: scroll; }   /* always scrollbar */
.clip { overflow: clip; }           /* no scrollbar, no scroll */

/* Object fit (for images/videos) */
img { object-fit: cover; width: 100%; height: 300px; }`}</pre>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Typography</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`.text {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 16px;             /* or 1rem */
  font-size: clamp(14px, 2vw, 18px);  /* fluid sizing */
  font-weight: 400;            /* 100-900 or keywords */
  font-style: italic;
  line-height: 1.6;            /* unitless = relative to font-size */
  letter-spacing: -0.02em;
  word-spacing: 0.1em;

  /* Text alignment */
  text-align: left;
  text-align: center;
  text-align: justify;

  /* Text decoration */
  text-decoration: underline;
  text-decoration: underline wavy red;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: auto;

  /* Text transform */
  text-transform: uppercase;
  text-transform: capitalize;
  text-transform: lowercase;

  /* Text overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Color and background */
  color: #333;
  color: hsl(0, 0%, 20%);
  background-color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  /* Text shadow */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

  /* Multi-column */
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #ccc;
}`}</pre>
            </div>
          </section>

          {/* Flexbox */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Flexbox</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`.container {
  display: flex;

  /* Direction */
  flex-direction: row;              /* left → right (default) */
  flex-direction: row-reverse;      /* right → left */
  flex-direction: column;           /* top → bottom */
  flex-direction: column-reverse;   /* bottom → top */

  /* Wrap */
  flex-wrap: nowrap;                 /* single line (default) */
  flex-wrap: wrap;                   /* multi-line */

  /* Main axis alignment */
  justify-content: flex-start;      /* pack to start */
  justify-content: flex-end;        /* pack to end */
  justify-content: center;          /* center */
  justify-content: space-between;   /* equal space between */
  justify-content: space-around;    /* equal space around */
  justify-content: space-evenly;    /* truly equal spacing */

  /* Cross axis alignment */
  align-items: stretch;             /* fill container (default) */
  align-items: flex-start;          /* top */
  align-items: flex-end;            /* bottom */
  align-items: center;              /* middle */
  align-items: baseline;            /* text baseline */

  /* Multi-line cross axis */
  align-content: flex-start;        /* pack lines to top */
  align-content: center;            /* center lines */
  align-content: space-between;     /* equal line spacing */

  /* Gap */
  gap: 8px;                         /* row + column */
  gap: 8px 16px;                    /* row | column */
}

.item {
  /* Self alignment (overrides container) */
  align-self: flex-start;
  align-self: center;

  /* Flex sizing */
  flex: 1;                          /* grow: 1, shrink: 1, basis: 0 */
  flex: 0 0 auto;                   /* fixed size, don't grow or shrink */
  flex-grow: 1;                     /* how much to grow */
  flex-shrink: 0;                   /* don't shrink */
  flex-basis: 200px;               /* starting size */

  /* Order */
  order: -1;                        /* before other items */
}`}</pre>
            </div>
          </section>

          {/* Grid */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Grid</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`.grid {
  display: grid;

  /* Column/row tracks */
  grid-template-columns: 1fr 1fr 1fr;    /* 3 equal columns */
  grid-template-columns: 200px 1fr 200px; /* sidebar-content-sidebar */
  grid-template-columns: repeat(3, 1fr);  /* repeat shorthand */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto 1fr auto;

  /* Named areas */
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;

  /* Gap */
  gap: 16px;
  row-gap: 16px;
  column-gap: 8px;

  /* Alignment */
  justify-items: center;      /* align items horizontally */
  align-items: start;         /* align items vertically */
  place-items: center;        /* shorthand */

  justify-content: center;    /* align entire grid */
  align-content: center;
  place-content: center;
}

.item {
  /* Position in grid */
  grid-column: 1 / 3;         /* span columns 1-2 */
  grid-column: span 2;        /* span 2 columns */
  grid-column: -1;            /* last column */
  grid-row: 1 / 3;            /* span rows 1-2 */

  /* Named area */
  grid-area: header;

  /* Alignment override */
  justify-self: end;
  align-self: center;
  place-self: center;
}`}</pre>
            </div>
          </section>

          {/* Positioning */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Positioning</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`.relative {
  position: relative;      /* offset from normal position */
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute;      /* removed from flow, positioned relative to nearest positioned ancestor */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.sticky {
  position: sticky;        /* toggles between relative and fixed */
  top: 0;                  /* sticks at 0px from viewport top */
  z-index: 10;
}

.fixed {
  position: fixed;         /* removed from flow, relative to viewport */
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

/* Z-index */
.overlay { z-index: 10; }
.modal { z-index: 100; }
.tooltip { z-index: 1000; }
/* z-index only works on positioned elements (not static) */

/* Inset shorthand */
.absolute-full {
  position: absolute;
  inset: 0;                /* top: 0; right: 0; bottom: 0; left: 0 */
}
.absolute-inset-4 {
  position: absolute;
  inset: 16px;             /* top/right/bottom/left: 16px */
}`}</pre>
            </div>
          </section>

          {/* Colors & Backgrounds */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Colors &amp; Backgrounds</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`.colors {
  color: #333;
  color: rgb(51, 51, 51);
  color: hsl(0, 0%, 20%);
  color: oklch(0.3 0.05 250);    /* modern color space */
  color: currentColor;            /* inherit from parent */
  color: transparent;

  opacity: 0.8;

  /* Background */
  background-color: white;
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;   /* parallax effect */

  /* Gradients */
  background: linear-gradient(135deg, #667eea, #764ba2);
  background: linear-gradient(to right, red, orange, yellow);
  background: radial-gradient(circle, #fff, #000);

  /* Multiple backgrounds */
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("/photo.jpg");
  background-size: cover, cover;
}

/* Opacity shorthand */
.faded { opacity: 0.5; }`}</pre>
            </div>
          </section>

          {/* Animations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Transitions &amp; Animations</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`/* Transitions */
.button {
  transition: color 0.2s ease;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.button:hover {
  background-color: blue;
  transform: translateY(-2px);
}

/* Keyframe animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Animation shorthand */
.animated {
  animation: fadeIn 0.5s ease 0.1s forwards;
  /* name | duration | timing | delay | fill-mode */
}

/* will-change for performance */
.smooth { will-change: transform, opacity; }`}</pre>
            </div>
          </section>

          {/* Media Queries */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Media Queries</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`/* Mobile-first (min-width) */
.container { padding: 8px; }

@media (min-width: 640px) {
  .container { padding: 16px; }    /* tablet */
}

@media (min-width: 1024px) {
  .container { padding: 24px; }    /* desktop */
}

/* Max-width (desktop-first) */
@media (max-width: 768px) {
  .sidebar { display: none; }
}

/* Breakpoint shortcuts */
@media (min-width: 640px) { }   /* sm */
@media (min-width: 768px) { }   /* md */
@media (min-width: 1024px) { }  /* lg */
@media (min-width: 1280px) { }  /* xl */
@media (min-width: 1536px) { }  /* 2xl */

/* Responsive typography */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

/* Print */
@media print {
  .no-print { display: none; }
  body { font-size: 12pt; }
}

/* Container queries (2023+) */
.card-container { container-type: inline-size; }
@container (min-width: 400px) {
  .card { flex-direction: row; }
}`}</pre>
            </div>
          </section>

          {/* CSS Variables */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">CSS Variables (Custom Properties)</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`:root {
  /* Define */
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --space-md: 16px;
  --radius: 8px;
  --font-sans: "Inter", system-ui, sans-serif;
  --shadow: 0 1px 3px rgba(0,0,0,0.12);
}

.button {
  /* Use */
  background: var(--color-primary);
  color: var(--color-text);
  padding: var(--space-md);
  border-radius: var(--radius);
  font-family: var(--font-sans);
  box-shadow: var(--shadow);

  /* Fallback */
  background: var(--color-primary, #3b82f6);
}

/* Dark mode with variables */
:root { --bg: white; --text: #1f2937; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #111; --text: #e5e7eb; }
}
body { background: var(--bg); color: var(--text); }

/* JavaScript access */
/* const styles = getComputedStyle(document.documentElement); */
/* styles.getPropertyValue('--color-primary'); */
/* document.documentElement.style.setProperty('--color-primary', 'red'); */`}</pre>
            </div>
          </section>

          {/* Utility Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`/* Center anything */
.center { display: flex; justify-content: center; align-items: center; }
.center-absolute { position: absolute; inset: 0; margin: auto; }

/* Truncate text */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive image */
img { max-width: 100%; height: auto; display: block; }

/* Aspect ratio box */
.aspect-video { aspect-ratio: 16/9; width: 100%; }
.aspect-square { aspect-ratio: 1; }

/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Skip to content (accessibility) */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus { top: 0; }

/* Focus visible (keyboard only) */
:focus-visible { outline: 2px solid blue; outline-offset: 2px; }
:focus:not(:focus-visible) { outline: none; }

/* Sticky footer layout */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; }

/* Scroll snap */
.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}
.gallery > * {
  flex: 0 0 100%;
  scroll-snap-align: start;
}`}</pre>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/css-flexbox-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">CSS Flexbox Cheat Sheet</span>
                <span className="text-slate-500">Deep dive into flex layout</span>
              </Link>
              <Link href="/blog/css-grid-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">CSS Grid Cheat Sheet</span>
                <span className="text-slate-500">2D layout with grid</span>
              </Link>
              <Link href="/blog/css-variables-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">CSS Variables Cheat Sheet</span>
                <span className="text-slate-500">Custom properties & theming</span>
              </Link>
              <Link href="/blog/tailwind-css-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">Tailwind CSS Cheat Sheet</span>
                <span className="text-slate-500">Utility-first CSS framework</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
