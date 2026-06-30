import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTTP Status Codes Explained — Complete Reference | QuickKit",
  description:
    "Every HTTP status code explained with causes and solutions. 200, 301, 400, 403, 404, 500, 502, 503 — what each means and how to fix it. Developer-friendly reference.",
  openGraph: {
    title: "HTTP Status Codes Explained — Complete Reference",
    description: "Every HTTP status code explained. 1xx, 2xx, 3xx, 4xx, 5xx — what they mean and how to fix them.",
    type: "article",
  },
};

interface StatusCode {
  code: number;
  name: string;
  meaning: string;
  when: string;
  fix: string;
}

const statusCodes: StatusCode[] = [
  // 1xx — Informational
  { code: 100, name: "Continue", meaning: "Server received request headers; client should proceed to send body.", when: "Large POST requests with Expect: 100-continue header.", fix: "Automatic — client continues sending the request body." },
  { code: 101, name: "Switching Protocols", meaning: "Server is switching protocols as requested by the client.", when: "WebSocket upgrade request or HTTP/2 upgrade.", fix: "Automatic — protocol switch in progress." },

  // 2xx — Success
  { code: 200, name: "OK", meaning: "Request succeeded. Server returned the requested resource.", when: "Successful GET, PUT, PATCH, or DELETE.", fix: "Nothing to fix — this is success." },
  { code: 201, name: "Created", meaning: "Request succeeded and a new resource was created.", when: "POST request created a new resource.", fix: "Nothing to fix — resource created successfully." },
  { code: 204, name: "No Content", meaning: "Request succeeded but there's no content to return.", when: "DELETE request or PUT with no response body needed.", fix: "Nothing to fix — expected behavior." },

  // 3xx — Redirection
  { code: 301, name: "Moved Permanently", meaning: "Resource has permanently moved to a new URL.", when: "URL changed, domain migrated, HTTP to HTTPS redirect.", fix: "Update all links to point to the new URL. Configure server redirects." },
  { code: 302, name: "Found", meaning: "Resource temporarily moved to a different URL.", when: "Temporary redirect, A/B testing, maintenance mode.", fix: "Usually automatic. If unexpected, check server redirect rules." },
  { code: 304, name: "Not Modified", meaning: "Resource hasn't changed since last request; use cached version.", when: "Browser cache validation with If-None-Match or If-Modified-Since.", fix: "Nothing to fix — caching works correctly." },
  { code: 307, name: "Temporary Redirect", meaning: "Resource temporarily moved; method must not change.", when: "Temporary redirect that preserves HTTP method (POST stays POST).", fix: "Update client to use new URL if persistent." },
  { code: 308, name: "Permanent Redirect", meaning: "Resource permanently moved; method must not change.", when: "Permanent redirect that preserves HTTP method.", fix: "Update all links to the new URL." },

  // 4xx — Client Errors
  { code: 400, name: "Bad Request", meaning: "Server can't process the request due to malformed syntax.", when: "Invalid JSON, missing required fields, malformed URL.", fix: "Check request body, headers, and URL parameters. Validate JSON format." },
  { code: 401, name: "Unauthorized", meaning: "Authentication required to access the resource.", when: "Missing or invalid API key, token, or credentials.", fix: "Provide valid authentication credentials. Check API key is correct." },
  { code: 403, name: "Forbidden", meaning: "Server understands the request but refuses to authorize it.", when: "Authenticated but not permitted. IP block. CORS policy.", fix: "Check permissions. Verify CORS headers. Check server access rules." },
  { code: 404, name: "Not Found", meaning: "Requested resource doesn't exist at this URL.", when: "Wrong URL, deleted resource, or typo in the path.", fix: "Verify the URL is correct. Check if resource exists." },
  { code: 405, name: "Method Not Allowed", meaning: "HTTP method is not supported for this endpoint.", when: "POST to a read-only endpoint, DELETE on a resource that can't be deleted.", fix: "Check the API docs for allowed methods. Use the correct HTTP verb." },
  { code: 408, name: "Request Timeout", meaning: "Server timed out waiting for the request.", when: "Slow client, large upload, or network issues.", fix: "Retry the request. Reduce payload size. Check network connection." },
  { code: 409, name: "Conflict", meaning: "Request conflicts with current server state.", when: "Creating a duplicate resource, version conflict.", fix: "Check if resource already exists. Resolve the conflict (e.g., merge changes)." },
  { code: 413, name: "Payload Too Large", meaning: "Request body is larger than the server allows.", when: "File upload exceeds server limit.", fix: "Reduce file size. Increase server body size limit (e.g., client_max_body_size in nginx)." },
  { code: 415, name: "Unsupported Media Type", meaning: "Server doesn't support the request Content-Type.", when: "Sending XML when server expects JSON.", fix: "Set the correct Content-Type header. Check API docs for supported formats." },
  { code: 422, name: "Unprocessable Entity", meaning: "Request is syntactically correct but semantically invalid.", when: "Valid JSON but invalid field values (e.g., age: -5).", fix: "Validate request data before sending. Check business logic constraints." },
  { code: 429, name: "Too Many Requests", meaning: "Client has exceeded the rate limit.", when: "Making too many requests too quickly.", fix: "Implement exponential backoff. Check Retry-After header. Reduce request frequency." },

  // 5xx — Server Errors
  { code: 500, name: "Internal Server Error", meaning: "Server encountered an unexpected error.", when: "Unhandled exception, null reference, database crash.", fix: "Check server logs. Fix the bug in server code. Add error handling." },
  { code: 501, name: "Not Implemented", meaning: "Server doesn't support the requested functionality.", when: "HTTP method not implemented on this endpoint.", fix: "Server needs to implement the feature. Client should use supported methods." },
  { code: 502, name: "Bad Gateway", meaning: "Invalid response from upstream server.", when: "Reverse proxy got invalid response from backend. Backend crashed.", fix: "Check upstream server health. Restart the backend service." },
  { code: 503, name: "Service Unavailable", meaning: "Server is temporarily unavailable (overloaded or down).", when: "Maintenance mode, too many requests, or service crash.", fix: "Retry with Retry-After header. Check service health. Scale if overloaded." },
  { code: 504, name: "Gateway Timeout", meaning: "Upstream server didn't respond in time.", when: "Slow backend, database timeout, or network issue.", fix: "Check upstream server performance. Increase timeout settings. Optimize queries." },
];

export default function HttpStatusCodesPage() {
  const faqItems = [
    {
      question: "What is the difference between 401 and 403?",
      answer: "401 Unauthorized means you need to authenticate (provide credentials). 403 Forbidden means you're authenticated but not allowed to access this resource. Think of 401 as 'who are you?' and 403 as 'I know who you are, but you can't come in.'",
    },
    {
      question: "What does HTTP 500 mean?",
      answer: "HTTP 500 Internal Server Error means the server encountered an unexpected condition. It's a generic error that usually indicates a bug in the server code, a database connection issue, or an unhandled exception. Check server logs for the specific error.",
    },
    {
      question: "How do I fix HTTP 429 Too Many Requests?",
      answer: "Implement rate limiting on the client side with exponential backoff. Check the Retry-After header in the response for how long to wait. Reduce request frequency, or upgrade your API plan if you need higher limits.",
    },
    {
      question: "What is the difference between 301 and 302 redirects?",
      answer: "301 Moved Permanently tells search engines the URL has permanently changed — they should update their index. 302 Found is temporary — the original URL should still be used. For SEO, use 301 for permanent changes and 302 for temporary ones.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">HTTP Status Codes</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-400 text-sm font-medium mb-2">Reference Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            HTTP Status Codes Explained
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every HTTP status code you&apos;ll encounter, explained with causes, when it happens, and how to fix it. From 200 OK to 504 Gateway Timeout.
          </p>
        </header>

        {/* Status Code Groups */}
        {[
          { prefix: "1", title: "1xx — Informational", desc: "Server received the request and is processing." },
          { prefix: "2", title: "2xx — Success", desc: "Request was successfully received and processed." },
          { prefix: "3", title: "3xx — Redirection", desc: "Further action needed to complete the request." },
          { prefix: "4", title: "4xx — Client Errors", desc: "The request contains bad syntax or cannot be fulfilled." },
          { prefix: "5", title: "5xx — Server Errors", desc: "Server failed to fulfill a valid request." },
        ].map((group) => {
          const codes = statusCodes.filter((s) => s.code.toString().startsWith(group.prefix));
          return (
            <section key={group.prefix} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-2">{group.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{group.desc}</p>
              <div className="space-y-3">
                {codes.map((sc) => (
                  <div key={sc.code} className="p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-600 transition-colors">
                    <div className="flex items-start gap-3">
                      <code className={`text-sm font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                        sc.code < 300 ? "bg-green-900/50 text-green-300" :
                        sc.code < 400 ? "bg-blue-900/50 text-blue-300" :
                        sc.code < 500 ? "bg-amber-900/50 text-amber-300" :
                        "bg-red-900/50 text-red-300"
                      }`}>
                        {sc.code}
                      </code>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-white">{sc.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">{sc.meaning}</p>
                        <div className="mt-2 grid md:grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-gray-500">When: </span>
                            <span className="text-gray-400">{sc.when}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Fix: </span>
                            <span className="text-gray-300">{sc.fix}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="p-6 rounded-lg bg-gray-900 border border-gray-800">
          <h2 className="font-bold text-white mb-3">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <Link href="/tools/http-status" className="text-sm text-blue-400 hover:underline">HTTP Status Code Lookup Tool</Link>
            <Link href="/blog/cron-expressions-explained" className="text-sm text-blue-400 hover:underline">Cron Expressions Explained</Link>
            <Link href="/blog/json-cheat-sheet" className="text-sm text-blue-400 hover:underline">JSON Cheat Sheet</Link>
            <Link href="/blog/regex-cheat-sheet" className="text-sm text-blue-400 hover:underline">Regex Cheat Sheet</Link>
            <Link href="/tools/url-encoder" className="text-sm text-blue-400 hover:underline">URL Encoder Tool</Link>
            <Link href="/blog/how-to-decode-jwt" className="text-sm text-blue-400 hover:underline">JWT Decoder Guide</Link>
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
            headline: "HTTP Status Codes Explained — Complete Reference",
            description: "Every HTTP status code explained with causes and solutions.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
