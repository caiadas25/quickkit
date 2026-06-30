import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "REST API Cheat Sheet - HTTP Methods, Status Codes & Patterns | QuickKit",
  description:
    "The complete REST API cheat sheet. HTTP methods, status codes, authentication, pagination, error handling, and RESTful design patterns. Copy-paste ready examples.",
  openGraph: {
    title: "REST API Cheat Sheet - HTTP Methods, Status Codes & Patterns",
    description:
      "GET, POST, PUT, PATCH, DELETE, authentication, error handling, and RESTful design patterns. Every API concept you need.",
    type: "article",
  },
};

interface ApiRow {
  label: string;
  code: string;
  note: string;
}

interface ApiSection {
  title: string;
  rows: ApiRow[];
}

const sections: ApiSection[] = [
  {
    title: "HTTP Methods",
    rows: [
      { label: "GET", code: "GET /users", note: "Retrieve resources (idempotent, cacheable)" },
      { label: "POST", code: "POST /users", note: "Create a new resource" },
      { label: "PUT", code: "PUT /users/123", note: "Replace entire resource (idempotent)" },
      { label: "PATCH", code: "PATCH /users/123", note: "Partial update of resource" },
      { label: "DELETE", code: "DELETE /users/123", note: "Remove resource (idempotent)" },
      { label: "HEAD", code: "HEAD /users", note: "Same as GET but no body (check existence)" },
      { label: "OPTIONS", code: "OPTIONS /users", note: "Describe allowed methods (CORS preflight)" },
    ],
  },
  {
    title: "HTTP Status Codes",
    rows: [
      { label: "200 OK", code: "GET /users/1", note: "Request succeeded" },
      { label: "201 Created", code: "POST /users", note: "Resource created (include Location header)" },
      { label: "204 No Content", code: "DELETE /users/1", note: "Success, no response body" },
      { label: "301 Moved", code: "GET /old-path", note: "Permanent redirect" },
      { label: "304 Not Modified", code: "GET /users/1", note: "Use cached version (ETag/If-None-Match)" },
      { label: "400 Bad Request", code: "POST /users", note: "Invalid request data" },
      { label: "401 Unauthorized", code: "GET /users", note: "Missing or invalid authentication" },
      { label: "403 Forbidden", code: "GET /admin", note: "Authenticated but not authorized" },
      { label: "404 Not Found", code: "GET /users/999", note: "Resource does not exist" },
      { label: "409 Conflict", code: "POST /users", note: "Duplicate or state conflict" },
      { label: "422 Unprocessable", code: "POST /users", note: "Validation failed (valid JSON, bad data)" },
      { label: "429 Too Many", code: "GET /users", note: "Rate limited (include Retry-After header)" },
      { label: "500 Internal", code: "GET /users", note: "Server error (generic)" },
      { label: "502 Bad Gateway", code: "GET /users", note: "Upstream service failed" },
      { label: "503 Unavailable", code: "GET /users", note: "Server temporarily down (maintenance)" },
    ],
  },
  {
    title: "RESTful URL Patterns",
    rows: [
      { label: "List", code: "GET /users", note: "Return collection" },
      { label: "Get one", code: "GET /users/:id", note: "Return single resource" },
      { label: "Create", code: "POST /users", note: "Body: JSON of new resource" },
      { label: "Update (full)", code: "PUT /users/:id", note: "Body: complete resource" },
      { label: "Update (partial)", code: "PATCH /users/:id", note: "Body: only changed fields" },
      { label: "Delete", code: "DELETE /users/:id", note: "204 No Content on success" },
      { label: "Nested resource", code: "GET /users/:id/posts", note: "Posts belonging to user" },
      { label: "Filtering", code: "GET /users?role=admin&status=active", note: "Query params for filters" },
      { label: "Sorting", code: "GET /users?sort=-created_at", note: "- prefix for descending" },
      { label: "Pagination", code: "GET /users?page=2&limit=25", note: "Offset-based pagination" },
      { label: "Cursor pagination", code: "GET /users?cursor=abc123&limit=25", note: "Cursor-based (preferred)" },
    ],
  },
  {
    title: "Request Headers",
    rows: [
      { label: "Content-Type", code: "Content-Type: application/json", note: "Format of request body" },
      { label: "Accept", code: "Accept: application/json", note: "Desired response format" },
      { label: "Authorization", code: "Authorization: Bearer <token>", note: "JWT or API key" },
      { label: "If-None-Match", code: "If-None-Match: \"abc123\"", note: "ETag for conditional requests" },
      { label: "Cache-Control", code: "Cache-Control: max-age=3600", note: "Caching directives" },
      { label: "X-Request-ID", code: "X-Request-ID: <uuid>", note: "Request tracing" },
    ],
  },
  {
    title: "Response Headers",
    rows: [
      { label: "Location", code: "Location: /users/123", note: "On 201 Created - URL of new resource" },
      { label: "ETag", code: "ETag: \"abc123\"", note: "Version identifier for caching" },
      { label: "Retry-After", code: "Retry-After: 60", note: "Seconds to wait after 429" },
      { label: "X-Rate-Limit", code: "X-Rate-Limit: 100", note: "Requests allowed per window" },
      { label: "Link", code: "Link: </users?page=3>; rel=\"next\"", note: "Pagination links (RFC 5988)" },
    ],
  },
  {
    title: "Authentication Patterns",
    rows: [
      { label: "Bearer Token", code: "Authorization: Bearer <token>", note: "JWT token in header" },
      { label: "API Key (header)", code: "X-API-Key: <key>", note: "Custom header" },
      { label: "API Key (query)", code: "GET /users?key=<key>", note: "Less secure, avoid for sensitive ops" },
      { label: "Basic Auth", code: "Authorization: Basic <base64>", note: "Base64(user:pass), use HTTPS only" },
    ],
  },
  {
    title: "Pagination Patterns",
    rows: [
      { label: "Offset", code: "?page=2&limit=25", note: "Simple but slow for large offsets" },
      { label: "Cursor", code: "?cursor=abc123&limit=25", note: "Stable, performant, recommended" },
      { label: "Page info", code: "Total: 150, Page: 2, Pages: 6", note: "Include metadata in response" },
      { label: "Link header", code: "Link: </api/users?page=3>; rel=\"next\"", note: "RFC 5988 standard" },
    ],
  },
  {
    title: "Error Response Format",
    rows: [
      { label: "Standard body", code: '{"error": {"code": "VALIDATION_ERROR", "message": "..."}}', note: "Consistent error shape" },
      { label: "Field errors", code: '{"errors": {"email": ["Required", "Invalid format"]}}', note: "Per-field validation errors" },
      { label: "Rate limit", code: '{"error": "Rate limit exceeded", "retry_after": 60}', note: "Include retry guidance" },
    ],
  },
];

export default function RestApiCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">REST API Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">API Guide - Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            REST API Cheat Sheet
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            HTTP methods, status codes, URL patterns, headers, authentication, and error handling.
            Every REST API concept you need, organized for quick reference.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-stone-700 w-1/4">{section.title === "Error Response Format" ? "Pattern" : section.title === "HTTP Methods" ? "Method" : "Code / Value"}</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Syntax / Example</th>
                    <th className="text-left p-3 font-semibold text-stone-700 w-1/3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {section.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 font-medium text-stone-900">{row.label}</td>
                      <td className="p-3 text-stone-600 font-mono text-xs break-all">{row.code}</td>
                      <td className="p-3 text-stone-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Quick Reference Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Example: CRUD User API</h2>
          <div className="p-4 rounded border border-stone-200 bg-white">
            <pre className="text-xs text-stone-600 font-mono overflow-x-auto whitespace-pre-wrap">{`# List users
GET /api/users?page=1&limit=25

# Get single user
GET /api/users/123

# Create user
POST /api/users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin"
}

# Partial update
PATCH /api/users/123
Content-Type: application/json

{
  "role": "super-admin"
}

# Delete user
DELETE /api/users/123
-> 204 No Content`}</pre>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-3">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/http-status-codes-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">HTTP Status Codes Explained</span>
              <span className="block text-stone-400 mt-1">Every status code with examples</span>
            </Link>
            <Link href="/blog/json-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">JSON Cheat Sheet</span>
              <span className="block text-stone-400 mt-1">JSON syntax and common patterns</span>
            </Link>
            <Link href="/blog/git-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Git Cheat Sheet</span>
              <span className="block text-stone-400 mt-1">Git commands for daily use</span>
            </Link>
            <Link href="/blog/docker-cheat-sheet" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Docker Cheat Sheet</span>
              <span className="block text-stone-400 mt-1">Containers, images, and compose</span>
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
            headline: "REST API Cheat Sheet - HTTP Methods, Status Codes & Patterns",
            description:
              "Complete REST API cheat sheet. HTTP methods, status codes, URL patterns, headers, authentication, and error handling.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/rest-api-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
