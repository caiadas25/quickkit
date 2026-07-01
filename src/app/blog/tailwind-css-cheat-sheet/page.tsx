import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind CSS Cheat Sheet — Every Utility Class Explained | QuickKit",
  description:
    "Complete Tailwind CSS cheat sheet with every utility class. Spacing, typography, colors, flexbox, grid, responsive design, dark mode, and more. Copy-paste ready.",
  openGraph: {
    title: "Tailwind CSS Cheat Sheet — Every Utility Class",
    description: "Complete reference for Tailwind CSS utility classes with copy-paste examples.",
    type: "article",
  },
};

const sections = [
  {
    title: "Layout & Display",
    code: `<!-- Display -->
<div class="block">Block</div>
<div class="inline">Inline</div>
<div class="inline-block">Inline Block</div>
<div class="flex">Flex</div>
<div class="grid">Grid</div>
<div class="hidden">Hidden</div>

<!-- Position -->
<div class="relative">Relative</div>
<div class="absolute">Absolute</div>
<div class="fixed">Fixed</div>
<div class="sticky">Sticky</div>

<!-- Overflow -->
<div class="overflow-hidden">Overflow Hidden</div>
<div class="overflow-auto">Overflow Auto</div>
<div class="overflow-scroll">Overflow Scroll</div>`,
  },
  {
    title: "Flexbox",
    code: `<!-- Flex Container -->
<div class="flex flex-row">Row</div>
<div class="flex flex-col">Column</div>
<div class="flex flex-wrap">Wrap</div>
<div class="flex items-center">Align Center</div>
<div class="flex justify-between">Justify Between</div>
<div class="flex justify-center">Justify Center</div>
<div class="flex gap-4">Gap 4 (1rem)</div>

<!-- Flex Items -->
<div class="flex-1">Grow</div>
<div class="flex-shrink-0">No Shrink</div>
<div class="order-1">Order 1</div>
<div class="self-start">Align Self Start</div>`,
  },
  {
    title: "Grid",
    code: `<!-- Grid Layout -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Responsive</div>
</div>

<!-- Column Span -->
<div class="col-span-2">Spans 2 columns</div>
<div class="row-span-2">Spans 2 rows</div>

<!-- Grid Template -->
<div class="grid-cols-[1fr_2fr_1fr]">Custom template</div>`,
  },
  {
    title: "Spacing (Margin & Padding)",
    code: `<!-- Padding -->
<div class="p-4">Padding 1rem</div>
<div class="px-4">Padding X 1rem</div>
<div class="py-2">Padding Y 0.5rem</div>
<div class="pt-8">Padding Top 2rem</div>
<div class="pl-4">Padding Left 1rem</div>

<!-- Margin -->
<div class="m-4">Margin 1rem</div>
<div class="mx-auto">Center Horizontally</div>
<div class="mt-8">Margin Top 2rem</div>
<div class="mb-4">Margin Bottom 1rem</div>
<div class="-mt-4">Negative Margin Top</div>

<!-- Spacing Scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96 -->`,
  },
  {
    title: "Typography",
    code: `<!-- Font Size -->
<div class="text-xs">12px</div>
<div class="text-sm">14px</div>
<div class="text-base">16px</div>
<div class="text-lg">18px</div>
<div class="text-xl">20px</div>
<div class="text-2xl">24px</div>
<div class="text-3xl">30px</div>

<!-- Font Weight -->
<div class="font-thin">Thin (100)</div>
<div class="font-normal">Normal (400)</div>
<div class="font-medium">Medium (500)</div>
<div class="font-semibold">Semibold (600)</div>
<div class="font-bold">Bold (700)</div>

<!-- Text Properties -->
<div class="text-center">Center</div>
<div class="text-left">Left</div>
<div class="text-right">Right</div>
<div class="uppercase">UPPERCASE</div>
<div class="lowercase">lowercase</div>
<div class="capitalize">Capitalize</div>
<div class="truncate">Truncated text...</div>
<div class="leading-relaxed">Line Height</div>
<div class="tracking-wide">Letter Spacing</div>`,
  },
  {
    title: "Colors",
    code: `<!-- Text Color -->
<div class="text-red-500">Red Text</div>
<div class="text-blue-600">Blue Text</div>
<div class="text-gray-900">Dark Text</div>
<div class="text-white">White Text</div>

<!-- Background Color -->
<div class="bg-red-500">Red Background</div>
<div class="bg-blue-100">Light Blue</div>
<div class="bg-gray-900">Dark Background</div>
<div class="bg-white">White Background</div>
<div class="bg-transparent">Transparent</div>

<!-- Border Color -->
<div class="border border-red-500">Red Border</div>
<div class="border-2 border-blue-600">Thick Blue Border</div>

<!-- Opacity -->
<div class="opacity-50">50% Opacity</div>
<div class="opacity-75">75% Opacity</div>`,
  },
  {
    title: "Sizing",
    code: `<!-- Width -->
<div class="w-full">Width 100%</div>
<div class="w-1/2">Width 50%</div>
<div class="w-64">Width 16rem</div>
<div class="w-screen">Width 100vw</div>
<div class="w-fit">Width Fit Content</div>
<div class="w-auto">Width Auto</div>

<!-- Height -->
<div class="h-full">Height 100%</div>
<div class="h-screen">Height 100vh</div>
<div class="h-64">Height 16rem</div>
<div class="min-h-screen">Min Height 100vh</div>

<!-- Min/Max -->
<div class="min-w-0">Min Width 0</div>
<div class="max-w-lg">Max Width 32rem</div>
<div class="max-w-4xl">Max Width 56rem</div>`,
  },
  {
    title: "Borders & Rounded",
    code: `<!-- Border Width -->
<div class="border">1px border</div>
<div class="border-0">No border</div>
<div class="border-2">2px border</div>
<div class="border-t">Top border only</div>

<!-- Border Radius -->
<div class="rounded">4px</div>
<div class="rounded-lg">8px</div>
<div class="rounded-xl">12px</div>
<div class="rounded-2xl">16px</div>
<div class="rounded-full">Full circle</div>
<div class="rounded-none">No radius</div>

<!-- Border Color -->
<div class="border border-gray-200">Gray border</div>
<div class="border border-red-500">Red border</div>`,
  },
  {
    title: "Shadows & Effects",
    code: `<!-- Box Shadow -->
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2XL shadow</div>
<div class="shadow-inner">Inset shadow</div>

<!-- Transitions -->
<div class="transition">Default transition</div>
<div class="transition-all">All properties</div>
<div class="transition-colors">Color transition</div>
<div class="duration-300">300ms duration</div>
<div class="ease-in-out">Ease in out</div>

<!-- Transform -->
<div class="scale-105">Scale 105%</div>
<div class="rotate-45">Rotate 45deg</div>
<div class="translate-x-4">Translate X</div>`,
  },
  {
    title: "Responsive Design",
    code: `<!-- Breakpoints: sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px -->

<!-- Mobile First -->
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive widths
</div>

<!-- Hide/Show -->
<div class="hidden md:block">Visible on md+</div>
<div class="block md:hidden">Hidden on md+</div>

<!-- Responsive Typography -->
<h1 class="text-xl md:text-3xl lg:text-5xl">
  Responsive heading
</h1>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  1→2→4 columns
</div>`,
  },
  {
    title: "Dark Mode & Pseudo-Classes",
    code: `<!-- Dark Mode (requires class strategy) -->
<div class="bg-white dark:bg-gray-900">
  <span class="text-black dark:text-white">Themed</span>
</div>

<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">
  Hover me
</button>

<!-- Focus -->
<input class="ring-2 ring-blue-500 focus:ring-blue-700 outline-none" />

<!-- Group Hover -->
<div class="group">
  <span class="group-hover:text-blue-500">
    Parent hover changes this
  </span>
</div>

<!-- Responsive + Dark -->
<div class="bg-white dark:bg-gray-900 p-4 md:p-8">
  Adaptive card
</div>`,
  },
  {
    title: "Common Patterns",
    code: `<!-- Center Everything -->
<div class="flex items-center justify-center min-h-screen">
  Centered content
</div>

<!-- Sticky Header -->
<header class="sticky top-0 z-50 bg-white shadow">
  Header
</div>

<!-- Card -->
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  Card content
</div>

<!-- Gradient Text -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  Gradient Text
</div>

<!-- Glass Effect -->
<div class="bg-white/80 backdrop-blur-sm border border-white/20">
  Glassmorphism
</div>`,
  },
];

const tips = [
  "Use `@apply` in your CSS to create reusable component classes from utilities",
  "Install the Tailwind CSS IntelliSense extension for VS Code autocompletion",
  "Use `@layer components` for custom component styles that work with variants",
  "The `@screen` directive lets you use breakpoints in regular CSS files",
  "Use `dark:` prefix with `class` strategy for dark mode support",
  "Combine responsive prefixes: `sm:md:lg:text-xl` applies from lg onward",
  "Use `ring` utilities for focus states instead of `outline` (better cross-browser)",
  "Install `tailwindcss-animate` plugin for built-in animation utilities",
];

export default function TailwindCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">QuickKit</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Tailwind CSS Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-sm font-medium text-blue-600 mb-2">Cheat Sheet</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tailwind CSS Cheat Sheet
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Complete reference for every Tailwind CSS utility class. Copy-paste ready code examples for layout, typography, colors, responsive design, and more.
          </p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
            <span>Updated July 2026</span>
            <span>·</span>
            <span>{sections.length} sections</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <h2 className="font-semibold text-gray-900 mb-3">Table of Contents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm">
            {sections.map((s, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="text-blue-600 hover:text-blue-800 hover:underline py-0.5"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600 text-sm">#{i + 1}</span>
                {section.title}
              </h2>
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                <code>{section.code}</code>
              </pre>
            </section>
          ))}
        </div>

        {/* Pro Tips */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pro Tips</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-gray-700">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/css-flexbox-cheat-sheet"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-gray-900">CSS Flexbox Cheat Sheet</span>
              <p className="text-gray-500 mt-1">Master flexbox with every property explained.</p>
            </Link>
            <Link
              href="/blog/css-grid-cheat-sheet"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-gray-900">CSS Grid Cheat Sheet</span>
              <p className="text-gray-500 mt-1">Complete CSS Grid reference with examples.</p>
            </Link>
            <Link
              href="/blog/html-cheat-sheet"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-gray-900">HTML Cheat Sheet</span>
              <p className="text-gray-500 mt-1">HTML elements, attributes, and forms reference.</p>
            </Link>
            <Link
              href="/blog/css-variables-cheat-sheet"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-gray-900">CSS Variables Cheat Sheet</span>
              <p className="text-gray-500 mt-1">Custom properties, theming, and design tokens.</p>
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Tailwind CSS Cheat Sheet — Every Utility Class Explained",
            description:
              "Complete Tailwind CSS cheat sheet with every utility class. Spacing, typography, colors, flexbox, grid, responsive design, and dark mode.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/tailwind-css-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
