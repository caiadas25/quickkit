import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Next.js Cheat Sheet — App Router, Server Components & Common Patterns | QuickKit",
  description:
    "Complete Next.js cheat sheet with copy-paste code. App Router, Server Components, Server Actions, data fetching, middleware, and common patterns.",
  openGraph: {
    title: "Next.js Cheat Sheet — QuickKit",
    description: "Next.js App Router, Server Components, data fetching, and common patterns with copy-paste examples.",
    type: "article",
  },
};

export default function NextjsCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Next.js Cheat Sheet",
    description: "Complete Next.js cheat sheet covering App Router, Server Components, Server Actions, and data fetching.",
    datePublished: "2026-07-02",
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
          <span className="text-slate-500">Next.js Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Next.js Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              App Router, Server Components, Server Actions, data fetching, middleware, and common patterns with copy-paste code.
            </p>
          </header>

          {/* File Structure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">App Router File Structure</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`app/
  layout.tsx        # Root layout (wraps all pages)
  page.tsx          # Home page (/)
  loading.tsx       # Loading UI (Suspense boundary)
  error.tsx         # Error boundary
  not-found.tsx     # 404 page
  globals.css       # Global styles

  about/
    page.tsx        # /about

  blog/
    layout.tsx      # Blog-specific layout
    page.tsx        # /blog (list)
    [slug]/
      page.tsx      # /blog/:slug (dynamic)

  api/
    users/
      route.ts      # GET/POST /api/users`}</pre>
            </div>
          </section>

          {/* Server vs Client Components */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Server vs Client Components</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-700 mb-2">Server Component (default)</h3>
                <pre className="text-xs font-mono">{`// Runs on the server only
// Can access DB, file system, env vars
// Zero client-side JS sent

async function UserProfile({ id }) {
  const user = await db.user.find(id);
  return <div>{user.name}</div>;
}`}</pre>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-700 mb-2">Client Component</h3>
                <pre className="text-xs font-mono">{`"use client";  // <-- required!

// Runs on client (browser)
// Can use useState, useEffect, events
// Adds JS bundle for interactivity

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c+1)}>
    {count}
  </button>;
}`}</pre>
              </div>
            </div>
          </section>

          {/* Data Fetching */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Fetching</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Server Component — async data fetching (no useEffect needed)
async function Page() {
  const data = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600 }  // ISR: revalidate every hour
  });
  const posts = await data.json();

  return <PostList posts={posts} />;
}

// Dynamic (always fresh, no cache)
const data = await fetch(url, { cache: "no-store" });

// Static (cached forever, rebuild needed)
const data = await fetch(url, { cache: "force-cache" });

// Revalidate on demand
revalidatePath("/blog");
revalidateTag("posts");`}</pre>
            </div>
          </section>

          {/* Server Actions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Server Actions</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Define server action (in a Server Component file)
async function createPost(formData) {
  "use server";  // <-- required!

  const title = formData.get("title");
  await db.post.create({ data: { title } });
  revalidatePath("/posts");
  redirect("/posts");
}

// Use in a form
<form action={createPost}>
  <input name="title" required />
  <button type="submit">Create Post</button>
</form>

// Call from client component
"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>
    {pending ? "Saving..." : "Save"}
  </button>;
}`}</pre>
            </div>
          </section>

          {/* Routing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Routing &amp; Navigation</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Link component (client-side navigation)
import Link from "next/link";
<Link href="/about">About</Link>
<Link href="/blog/post-1" prefetch={false}>Post</Link>

// Programmatic navigation
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/dashboard");
router.back();

// Dynamic route params (Server Component)
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <article>{post.title}</article>;
}

// Catch-all routes
// app/[...slug]/page.tsx
// /docs/getting-started → params.slug = ["docs", "getting-started"]

// Route Groups (no URL segment)
// app/(marketing)/layout.tsx → /about, /blog
// app/(dashboard)/layout.tsx → /settings, /profile`}</pre>
            </div>
          </section>

          {/* Middleware */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Middleware</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// middleware.ts (root level)
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("session");

  // Protect /dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set("x-custom", "value");
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};`}</pre>
            </div>
          </section>

          {/* Layout & Loading */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Layouts &amp; Loading States</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Root layout (app/layout.tsx) — persists across navigations
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>...</nav>  {/* stays mounted during navigation */}
        {children}
      </body>
    </html>
  );
}

// Nested layout (app/dashboard/layout.tsx)
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

// Loading UI (app/dashboard/loading.tsx) — shows during data fetch
export default function Loading() {
  return <div className="animate-pulse">Loading dashboard...</div>;
}`}</pre>
            </div>
          </section>

          {/* Metadata */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Metadata &amp; SEO</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Static metadata
export const metadata = {
  title: "My Page",
  description: "Page description for SEO",
  openGraph: { title: "My Page", images: ["/og.png"] },
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}`}</pre>
            </div>
          </section>

          {/* Image & Fonts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Image Optimization &amp; Fonts</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Optimized images
import Image from "next/image";
<Image
  src="/hero.png"
  alt="Hero image"
  width={800}
  height={400}
  priority  // preload above-the-fold images
/>

// Google Fonts (auto-optimized, self-hosted)
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Use in <body className={inter.variable} /> or {inter.className}`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Parallel Routes — render multiple pages simultaneously
// app/@analytics/page.tsx + app/@team/page.tsx
// Both render in layout: {analytics} {team}

// Intercepting Routes — modal over existing page
// app/@modal/(..)post/[id]/page.tsx
// Clicking /post/123 opens a modal, URL stays /post/123

// Streaming — progressively render with Suspense
import { Suspense } from "react";
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>

// Route Handlers (API)
// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body }, { status: 201 });
}`}</pre>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-700 mb-4">Related Cheat Sheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/react-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">React Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Components, hooks, and patterns</span>
              </Link>
              <Link href="/blog/react-hooks-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">React Hooks Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">useState, useEffect, and custom hooks</span>
              </Link>
              <Link href="/blog/typescript-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">TypeScript Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Types, generics, and utility types</span>
              </Link>
              <Link href="/blog/nodejs-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">Node.js Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Express, streams, and async patterns</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
