import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Node.js Cheat Sheet — Common Modules, Patterns & Commands | QuickKit",
  description:
    "Complete Node.js cheat sheet with copy-paste examples. Modules, fs, http, streams, async/await, child_process, and common CLI commands. Every Node.js feature you use daily.",
  openGraph: {
    title: "Node.js Cheat Sheet — QuickKit",
    description: "Every Node.js feature you use daily, with copy-paste examples. Modules, streams, async patterns, and more.",
    type: "article",
  },
};

export default function NodeCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Node.js Cheat Sheet",
    description: "Complete Node.js cheat sheet covering modules, streams, async patterns, and common CLI commands.",
    datePublished: "2026-06-30",
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
          <span className="text-slate-500">Node.js Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Node.js Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Complete Node.js cheat sheet with copy-paste examples. Modules, fs, http, streams, async/await, child_process, and common CLI commands. Every Node.js feature you use daily.
            </p>
          </header>

          {/* Modules & Imports */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Modules & Imports</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// CommonJS
const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

// ES Modules (type: "module" in package.json)
import fs from 'fs/promises';
import path from 'path';
import { EventEmitter } from 'events';

// Dynamic import
const { default: lodash } = await import('lodash');

// __dirname equivalent in ESM
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create your own module
export function greet(name) { return \`Hello, \${name}\`; }
export default class Logger { ... }`}</pre>
            </div>
          </section>

          {/* File System (fs) */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">File System (fs)</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Read a file (sync)
const data = fs.readFileSync('file.txt', 'utf-8');

// Read a file (async)
const data = await fs.readFile('file.txt', 'utf-8');

// Write a file
await fs.writeFile('output.txt', 'Hello World');

// Append to file
await fs.appendFile('log.txt', 'New line\\n');

// Check if file exists
try {
  await fs.access('file.txt');
  console.log('File exists');
} catch {
  console.log('File not found');
}

// List directory
const files = await fs.readdir('./');

// Create directory
await fs.mkdir('new-dir', { recursive: true });

// Delete file
await fs.unlink('file.txt');

// Get file stats
const stats = await fs.stat('file.txt');
console.log(stats.size, stats.isFile(), stats.isDirectory());

// Copy file
await fs.copyFile('src.txt', 'dest.txt');

// Rename/move
await fs.rename('old.txt', 'new.txt');

// Watch for changes
fs.watch('./', (event, filename) => {
  console.log(event, filename);
});`}</pre>
            </div>
          </section>

          {/* HTTP Server */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">HTTP Server</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`import http from 'http';

// Basic server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello World' }));
});
server.listen(3000, () => console.log('Server running on :3000'));

// Request handling
const server = http.createServer((req, res) => {
  const url = new URL(req.url, \`http://\${req.headers.host}\`);
  
  if (req.method === 'GET' && url.pathname === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }]));
  } else if (req.method === 'POST' && url.pathname === '/api/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const user = JSON.parse(body);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});`}</pre>
            </div>
          </section>

          {/* Async/Await Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Async/Await Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Sequential
const a = await fetchA();
const b = await fetchB();

// Parallel
const [a, b] = await Promise.all([fetchA(), fetchB()]);

// Race (first to finish)
const first = await Promise.race([fetchA(), fetchB()]);

// Settled (get all results)
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.log(r.reason);
});

// Error handling with try/catch
try {
  const data = await fetchData();
} catch (err) {
  console.error('Failed:', err.message);
}

// Retry with delay
async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try { return await fn(); }
    catch (e) { if (i === retries - 1) throw e; }
    await new Promise(r => setTimeout(r, delay));
  }
}

// Timeout
const result = await Promise.race([
  fetchData(),
  new Promise((_, rej) => setTimeout(() => rej(new Error('Timeout')), 5000))
]);`}</pre>
            </div>
          </section>

          {/* Streams */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Streams</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Read stream
const readable = fs.createReadStream('file.txt', { encoding: 'utf-8' });
readable.on('data', chunk => console.log(chunk));
readable.on('end', () => console.log('Done'));
readable.on('error', err => console.error(err));

// Write stream
const writable = fs.createWriteStream('output.txt');
writable.write('Line 1\\n');
writable.write('Line 2\\n');
writable.end();

// Pipe (read -> write)
fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));

// Transform stream
const { Transform } = require('stream');
const upper = new Transform({
  transform(chunk, encoding, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});
fs.createReadStream('input.txt').pipe(upper).pipe(fs.createWriteStream('output.txt'));

// HTTP response with stream
const server = http.createServer((req, res) => {
  fs.createReadStream('large-file.txt').pipe(res);
});`}</pre>
            </div>
          </section>

          {/* Child Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Child Process</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`import { exec, spawn } from 'child_process';

// exec (runs command in shell)
exec('ls -la', (err, stdout, stderr) => {
  if (err) console.error(err);
  else console.log(stdout);
});

// execSync
const output = execSync('ls -la').toString();

// spawn (more control)
const child = spawn('ls', ['-la']);
child.stdout.on('data', data => console.log(data.toString()));
child.stderr.on('data', data => console.error(data.toString()));
child.on('close', code => console.log('Exit:', code));

// execFile (no shell)
import { execFile } from 'child_process';
execFile('node', ['script.js'], (err, stdout) => {
  console.log(stdout);
});`}</pre>
            </div>
          </section>

          {/* Events */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Events</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

// Listen
emitter.on('data', (msg) => console.log(msg));

// Emit
emitter.emit('data', 'Hello World');

// Once (fires only once)
emitter.once('done', () => console.log('Done'));

// Remove listener
const handler = () => console.log('test');
emitter.on('event', handler);
emitter.removeListener('event', handler);

// Error handling
emitter.on('error', (err) => console.error(err));
emitter.emit('error', new Error('Something went wrong'));`}</pre>
            </div>
          </section>

          {/* Common CLI Commands */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common CLI Commands</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Run a script
node script.js

# Run with flags
node --max-old-space-size=4096 script.js

# Watch mode (Node 18+)
node --watch script.js

# Debug
node --inspect script.js

# Interactive REPL
node

# Version check
node --version

# Package management
npm init -y
npm install express
npm install --save-dev typescript
npm run dev
npm start

# Global packages
npm install -g nodemon
npm install -g typescript

# Check outdated
npm outdated

# Audit
npm audit
npm audit fix`}</pre>
            </div>
          </section>

          {/* JSON-LD */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-3 font-semibold text-slate-700">Module</th>
                    <th className="p-3 font-semibold text-slate-700">Purpose</th>
                    <th className="p-3 font-semibold text-slate-700">Key Functions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { module: "fs", purpose: "File system operations", key: "readFile, writeFile, mkdir, readdir" },
                    { module: "path", purpose: "File path utilities", key: "join, resolve, dirname, basename" },
                    { module: "http", purpose: "HTTP server/client", key: "createServer, request, get" },
                    { module: "os", purpose: "System information", key: "platform, arch, cpus, totalmem" },
                    { module: "events", purpose: "Event emitter", key: "on, emit, once, removeListener" },
                    { module: "stream", purpose: "Stream processing", key: "createReadStream, createWriteStream, pipe" },
                    { module: "child_process", purpose: "Run external commands", key: "exec, spawn, execFile" },
                    { module: "crypto", purpose: "Cryptographic functions", key: "randomBytes, hash, createCipher" },
                    { module: "url", purpose: "URL parsing", key: "parse, format, resolve" },
                    { module: "querystring", purpose: "Query string handling", key: "parse, stringify, encode" },
                  ].map((row, i) => (
                    <tr key={row.module} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-mono font-bold text-indigo-600">{row.module}</td>
                      <td className="p-3 text-slate-600">{row.purpose}</td>
                      <td className="p-3 font-mono text-sm text-slate-600">{row.key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/blog/typescript-cheat-sheet" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">TypeScript Cheat Sheet</span>
                <p className="text-sm text-slate-500 mt-1">Complete TypeScript reference with types and generics.</p>
              </Link>
              <Link href="/blog/python-cheat-sheet" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Python Cheat Sheet</span>
                <p className="text-sm text-slate-500 mt-1">Python syntax, libraries, and common patterns.</p>
              </Link>
              <Link href="/blog/bash-cheat-sheet" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Bash Cheat Sheet</span>
                <p className="text-sm text-slate-500 mt-1">Linux commands for developers.</p>
              </Link>
              <Link href="/blog/docker-cheat-sheet" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Docker Cheat Sheet</span>
                <p className="text-sm text-slate-500 mt-1">Docker commands and patterns for developers.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
