import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTP Status Code Lookup — Free Online Tool | QuickKit",
  description:
    "Look up HTTP status codes instantly. Find out what 200, 301, 404, 500 and every other status code means, common causes, and how to fix them.",
  openGraph: {
    title: "HTTP Status Code Lookup — Free Online Tool | QuickKit",
    description:
      "Instant HTTP status code reference. What does 429 mean? Why am I getting 503? Search any status code.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "HTTP Status Code Lookup — Free Online Tool | QuickKit",
    description:
      "Search any HTTP status code. 200 OK, 404 Not Found, 500 Internal Server Error — meanings, causes, and fixes.",
  },
};

interface StatusCode {
  code: number;
  name: string;
  description: string;
  causes: string[];
  solutions: string[];
}

const statusCodes: StatusCode[] = [
  { code: 200, name: "OK", description: "The request succeeded. The server returned the requested resource.", causes: ["Normal successful response"], solutions: ["No action needed"] },
  { code: 201, name: "Created", description: "The request succeeded, and a new resource was created as a result.", causes: ["POST request created a new resource"], solutions: ["No action needed"] },
  { code: 204, name: "No Content", description: "The request succeeded, but there is no content to send in the response body.", causes: ["DELETE request succeeded", "Server has nothing to return"], solutions: ["No action needed"] },
  { code: 301, name: "Moved Permanently", description: "The requested resource has been permanently moved to a new URL.", causes: ["Domain changed", "URL structure changed", "HTTP moved to HTTPS"], solutions: ["Update links to point to the new URL", "Set up server-side redirects"] },
  { code: 302, name: "Found (Temporary Redirect)", description: "The resource has been temporarily moved to a different URL.", causes: ["A/B testing", "Temporary maintenance", "Geo-based routing"], solutions: ["Update links if permanent", "Check redirect loops"] },
  { code: 304, name: "Not Modified", description: "The resource hasn't changed since the last request. Used with caching.", causes: ["Browser cache is valid", "ETag or If-Modified-Since matched"], solutions: ["No action needed — caching is working"] },
  { code: 400, name: "Bad Request", description: "The server cannot process the request due to malformed syntax.", causes: ["Malformed JSON", "Missing required fields", "Invalid URL parameters", "Request too large"], solutions: ["Check request body for syntax errors", "Validate all required fields", "Check Content-Type header"] },
  { code: 401, name: "Unauthorized", description: "Authentication is required and has either failed or not been provided.", causes: ["Missing authentication token", "Expired token", "Invalid credentials"], solutions: ["Add Authorization header", "Refresh expired tokens", "Verify credentials"] },
  { code: 403, name: "Forbidden", description: "The server understood the request but refuses to authorize it.", causes: ["User lacks permissions", "IP blocked", "CORS policy violation", "Rate limiting"], solutions: ["Check user permissions", "Verify CORS headers", "Check rate limit headers"] },
  { code: 404, name: "Not Found", description: "The server cannot find the requested resource.", causes: ["Typo in URL", "Resource was deleted", "Route not configured", "Case-sensitive URL mismatch"], solutions: ["Check URL for typos", "Verify route exists", "Check if resource was moved or deleted"] },
  { code: 405, name: "Method Not Allowed", description: "The request HTTP method is not allowed for the requested resource.", causes: ["Using POST on a GET-only endpoint", "Wrong HTTP method"], solutions: ["Check the API documentation for allowed methods", "Use the correct HTTP method"] },
  { code: 408, name: "Request Timeout", description: "The server timed out waiting for the request from the client.", causes: ["Client took too long to send request", "Network issues", "Server overloaded"], solutions: ["Retry the request", "Check network connection", "Reduce request size"] },
  { code: 409, name: "Conflict", description: "The request conflicts with the current state of the server resource.", causes: ["Creating a duplicate resource", "Version conflict in optimistic locking", "Concurrent modification"], solutions: ["Check if the resource already exists", "Use PUT for updates instead of POST", "Implement retry logic"] },
  { code: 413, name: "Payload Too Large", description: "The request body is larger than the server can handle.", causes: ["File upload too large", "Request body exceeds server limit"], solutions: ["Compress the data", "Split into smaller requests", "Increase server upload limit"] },
  { code: 415, name: "Unsupported Media Type", description: "The request payload format is not supported by the server.", causes: ["Wrong Content-Type header", "Server doesn't support the format"], solutions: ["Set correct Content-Type (application/json, etc.)", "Convert to supported format"] },
  { code: 429, name: "Too Many Requests", description: "The client has sent too many requests in a given time period (rate limiting).", causes: ["API rate limit exceeded", "Too many requests per second"], solutions: ["Implement exponential backoff", "Check Retry-After header", "Cache responses", "Reduce request frequency"] },
  { code: 500, name: "Internal Server Error", description: "The server encountered an unexpected condition that prevented it from fulfilling the request.", causes: ["Unhandled exception", "Database connection failure", "Null pointer / undefined reference", "Configuration error"], solutions: ["Check server logs", "Verify database connectivity", "Review recent code changes", "Check environment variables"] },
  { code: 502, name: "Bad Gateway", description: "The server received an invalid response from the upstream server.", causes: ["Upstream server crashed", "Proxy misconfiguration", "Upstream server overloaded", "Network issue between servers"], solutions: ["Check upstream server health", "Verify proxy configuration", "Check network connectivity"] },
  { code: 503, name: "Service Unavailable", description: "The server is temporarily unable to handle the request due to maintenance or overload.", causes: ["Server maintenance", "Overloaded server", "Application dependency down"], solutions: ["Retry after a delay", "Check server status page", "Scale up resources"] },
  { code: 504, name: "Gateway Timeout", description: "The upstream server failed to respond in time.", causes: ["Slow database query", "Upstream server overloaded", "Network latency", "Timeout configuration too low"], solutions: ["Optimize slow queries", "Increase timeout values", "Check upstream server performance"] },
];

export default function HttpStatusPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">
          HTTP Status Code Lookup
        </h1>
        <p className="text-slate-400">
          Search any HTTP status code. Instant reference for developers.
        </p>
      </header>

      <div className="space-y-4">
        {statusCodes.map((sc) => (
          <div
            key={sc.code}
            className="p-5 rounded-xl border border-slate-700 bg-slate-800/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`text-sm font-mono font-bold px-2.5 py-0.5 rounded ${
                  sc.code < 300
                    ? "bg-green-900/40 text-green-400"
                    : sc.code < 400
                    ? "bg-blue-900/40 text-blue-400"
                    : sc.code < 500
                    ? "bg-yellow-900/40 text-yellow-400"
                    : "bg-red-900/40 text-red-400"
                }`}
              >
                {sc.code}
              </span>
              <h2 className="text-lg font-bold text-white">{sc.name}</h2>
            </div>
            <p className="text-slate-400 text-sm mb-3">{sc.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase mb-1">
                  Common Causes
                </h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  {sc.causes.map((cause, i) => (
                    <li key={i}>• {cause}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase mb-1">
                  How to Fix
                </h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  {sc.solutions.map((sol, i) => (
                    <li key={i}>• {sol}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
