import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Decode a JWT Token — A Developer's Guide",
  description:
    "Learn how to decode JSON Web Tokens (JWT) using our online tool, Node.js, Python, or browser DevTools. Step-by-step guide with code examples.",
  openGraph: {
    title: "How to Decode a JWT Token — A Developer's Guide",
    description:
      "Learn how to decode JSON Web Tokens (JWT) using our online tool, Node.js, Python, or browser DevTools.",
    type: "article",
    siteName: "QuickKit",
  },
};

export default function BlogDecodeJwtPage() {
  return (
    <article className="max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-6"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold text-slate-800 mb-4">
        How to Decode a JWT Token
      </h1>
      <div className="flex items-center gap-3 text-sm text-slate-500 mb-8">
        <time>June 25, 2026</time>
        <span>·</span>
        <span>5 min read</span>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 leading-relaxed">
          JSON Web Tokens (JWT) are everywhere in modern web development. They
          power authentication in APIs, single sign-on systems, and session
          management. But when something goes wrong, the first step is decoding
          the token to see what's inside.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          What is a JWT?
        </h2>
        <p className="text-slate-600">
          A JWT is a compact, URL-safe token format used for transmitting
          claims between two parties. It consists of three parts separated by
          dots:
        </p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700 my-4">
          <span className="text-indigo-600">header</span>.<span className="text-emerald-600">payload</span>.<span className="text-amber-600">signature</span>
        </div>
        <ul className="text-slate-600 space-y-2 list-disc pl-5">
          <li>
            <strong>Header</strong> — Contains the token type and signing
            algorithm (e.g., RS256, HS256)
          </li>
          <li>
            <strong>Payload</strong> — Contains the claims (user ID, expiration,
            roles, etc.)
          </li>
          <li>
            <strong>Signature</strong> — Verifies the token hasn&apos;t been
            tampered with
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Method 1: Use Our Online JWT Decoder
        </h2>
        <p className="text-slate-600 mb-4">
          The fastest way to decode a JWT is with an online tool. Our{" "}
          <Link
            href="/tools/jwt-decoder"
            className="text-indigo-600 hover:underline font-medium"
          >
            JWT Decoder
          </Link>{" "}
          instantly shows you the header, payload, and signature with
          color-coded output. No signup, no data sent to any server.
        </p>
        <ol className="text-slate-600 space-y-2 list-decimal pl-5">
          <li>Copy your JWT token</li>
          <li>Paste it into the decoder</li>
          <li>Read the decoded header and payload</li>
        </ol>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Method 2: Decode in the Browser Console
        </h2>
        <p className="text-slate-600 mb-4">
          You can decode any JWT directly in your browser&apos;s DevTools
          console. The payload is just Base64-encoded JSON:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
          {`// Decode the payload part of a JWT
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const payload = JSON.parse(atob(token.split('.')[1]));
console.log(payload);

// Decode the header
const header = JSON.parse(atob(token.split('.')[0]));
console.log(header);`}
        </pre>
        <p className="text-slate-600 mt-4">
          This works because the header and payload are simply Base64URL-encoded
          JSON. No secret key is needed to read them.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Method 3: Decode in Node.js
        </h2>
        <p className="text-slate-600 mb-4">
          In a Node.js application, use the{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
            jwt-decode
          </code>{" "}
          package (note: this only decodes, it does not verify):
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
          {`import jwt_decode from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiIs...";
const decoded = jwt_decode(token);
console.log(decoded);
// { sub: "1234567890", name: "Alice", iat: 1719312000 }`}
        </pre>
        <p className="text-slate-600 mt-4">
          For full verification (checking the signature), use the{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
            jsonwebtoken
          </code>{" "}
          library instead:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
          {`import jwt from "jsonwebtoken";

const decoded = jwt.verify(token, secretKey);
console.log(decoded);`}
        </pre>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Method 4: Decode in Python
        </h2>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
          {`import jwt

# Decode without verification (read-only)
decoded = jwt.decode(token, options={"verify_signature": False})
print(decoded)

# Decode with verification
decoded = jwt.decode(token, secret_key, algorithms=["HS256"])
print(decoded)`}
        </pre>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Common JWT Claims
        </h2>
        <p className="text-slate-600 mb-4">
          When decoding a JWT, you&apos;ll typically see these standard claims:
        </p>
        <ul className="text-slate-600 space-y-2 list-disc pl-5">
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              sub
            </code>{" "}
            — Subject (who the token belongs to)
          </li>
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              iss
            </code>{" "}
            — Issuer (who created the token)
          </li>
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              exp
            </code>{" "}
            — Expiration time (Unix timestamp)
          </li>
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              iat
            </code>{" "}
            — Issued at (when the token was created)
          </li>
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              aud
            </code>{" "}
            — Audience (who the token is intended for)
          </li>
          <li>
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              roles
            </code>{" "}
            — Custom claim for user permissions
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Security Note
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
          <p className="text-amber-800 text-sm">
            <strong>Important:</strong> Decoding a JWT does not verify its
            signature. Anyone can read the payload. Never store sensitive data
            (passwords, secret keys) in a JWT payload. The signature is what
            ensures the token hasn&apos;t been tampered with.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Try It Now
        </h2>
        <p className="text-slate-600">
          Paste any JWT token into our{" "}
          <Link
            href="/tools/jwt-decoder"
            className="text-indigo-600 hover:underline font-medium"
          >
            JWT Decoder
          </Link>{" "}
          to see the decoded header, payload, and signature instantly.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "How to Decode a JWT Token",
            description:
              "Learn how to decode JSON Web Tokens using our online tool, browser console, Node.js, or Python.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://quickkit-nine.vercel.app/blog/how-to-decode-jwt",
            },
          }),
        }}
      />
    </article>
  );
}
