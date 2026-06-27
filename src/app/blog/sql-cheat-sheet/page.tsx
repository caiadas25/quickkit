import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SQL Cheat Sheet — Complete Reference for Developers | QuickKit",
  description:
    "The complete SQL cheat sheet. SELECT, JOIN, INSERT, UPDATE, DELETE, GROUP BY, subqueries, window functions, and common patterns. Every query you need, copy-paste ready.",
  openGraph: {
    title: "SQL Cheat Sheet — Every Query You Need",
    description:
      "SELECT, JOIN, INSERT, UPDATE, DELETE, subqueries, window functions, and more. Organized by workflow with copy-paste examples.",
    type: "article",
  },
};

interface SqlCommand {
  command: string;
  description: string;
  example?: string;
}

interface SqlSection {
  title: string;
  commands: SqlCommand[];
}

const sections: SqlSection[] = [
  {
    title: "SELECT Queries",
    commands: [
      { command: "SELECT * FROM table", description: "Select all columns from a table" },
      { command: "SELECT col1, col2 FROM table", description: "Select specific columns" },
      { command: "SELECT DISTINCT col FROM table", description: "Select unique values" },
      { command: "SELECT col AS alias FROM table", description: "Rename a column in output" },
      { command: "SELECT TOP 10 * FROM table", description: "Limit results (SQL Server)", example: "SELECT TOP 10 * FROM users" },
      { command: "SELECT * FROM table LIMIT 10", description: "Limit results (MySQL, PostgreSQL)" },
      { command: "SELECT * FROM table ORDER BY col DESC", description: "Sort descending" },
      { command: "SELECT * FROM table ORDER BY col1, col2", description: "Sort by multiple columns" },
      { command: "SELECT * FROM table WHERE col = 'value'", description: "Filter rows with WHERE" },
      { command: "SELECT * FROM table WHERE col IN (1, 2, 3)", description: "Match any value in a list" },
      { command: "SELECT * FROM table WHERE col LIKE '%pattern%'", description: "Pattern matching with wildcards" },
      { command: "SELECT * FROM table WHERE col BETWEEN 1 AND 10", description: "Range filter (inclusive)" },
      { command: "SELECT * FROM table WHERE col IS NULL", description: "Check for NULL values" },
      { command: "SELECT * FROM table WHERE col IS NOT NULL", description: "Check for non-NULL values" },
      { command: "SELECT * FROM table WHERE NOT col = 'value'", description: "Negate a condition" },
    ],
  },
  {
    title: "Aggregate Functions",
    commands: [
      { command: "SELECT COUNT(*) FROM table", description: "Count all rows" },
      { command: "SELECT COUNT(DISTINCT col) FROM table", description: "Count unique values" },
      { command: "SELECT SUM(col) FROM table", description: "Sum all values" },
      { command: "SELECT AVG(col) FROM table", description: "Average of all values" },
      { command: "SELECT MIN(col) FROM table", description: "Minimum value" },
      { command: "SELECT MAX(col) FROM table", description: "Maximum value" },
      { command: "SELECT col, COUNT(*) FROM table GROUP BY col", description: "Count rows per group" },
      { command: "SELECT col, SUM(val) FROM table GROUP BY col HAVING SUM(val) > 100", description: "Filter groups with HAVING" },
    ],
  },
  {
    title: "JOIN Operations",
    commands: [
      { command: "SELECT * FROM a JOIN b ON a.id = b.a_id", description: "Inner join (only matching rows)" },
      { command: "SELECT * FROM a LEFT JOIN b ON a.id = b.a_id", description: "Left join (all rows from a)" },
      { command: "SELECT * FROM a RIGHT JOIN b ON a.id = b.a_id", description: "Right join (all rows from b)" },
      { command: "SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id", description: "Full outer join (all rows from both)" },
      { command: "SELECT * FROM a CROSS JOIN b", description: "Cartesian product (every combination)" },
      { command: "SELECT * FROM a LEFT JOIN b ON a.id = b.a_id WHERE b.a_id IS NULL", description: "Find rows in a with no match in b (anti-join)" },
      { command: "SELECT * FROM a JOIN b ON a.id = b.a_id JOIN c ON b.id = c.b_id", description: "Chain multiple joins" },
    ],
  },
  {
    title: "INSERT, UPDATE, DELETE",
    commands: [
      { command: "INSERT INTO table (col1, col2) VALUES (1, 'text')", description: "Insert a single row" },
      { command: "INSERT INTO table (col1, col2) VALUES (1, 'a'), (2, 'b')", description: "Insert multiple rows (MySQL, PostgreSQL)" },
      { command: "INSERT INTO table SELECT * FROM other_table", description: "Insert from another table" },
      { command: "UPDATE table SET col = 'new' WHERE id = 1", description: "Update rows matching a condition" },
      { command: "UPDATE a SET col = b.val FROM b WHERE a.id = b.a_id", description: "Update using another table (PostgreSQL)" },
      { command: "DELETE FROM table WHERE id = 1", description: "Delete rows matching a condition" },
      { command: "DELETE FROM table", description: "Delete all rows (keep structure)" },
      { command: "TRUNCATE TABLE table", description: "Delete all rows (faster, resets auto-increment)" },
    ],
  },
  {
    title: "Subqueries",
    commands: [
      { command: "SELECT * FROM table WHERE col IN (SELECT col FROM other)", description: "Subquery in WHERE" },
      { command: "SELECT * FROM table WHERE col = (SELECT MAX(col) FROM table)", description: "Scalar subquery (returns one value)" },
      { command: "SELECT * FROM (SELECT col, COUNT(*) as cnt FROM table GROUP BY sub) AS t WHERE t.cnt > 1", description: "Derived table (subquery in FROM)" },
      { command: "SELECT * FROM table WHERE EXISTS (SELECT 1 FROM other WHERE other.id = table.id)", description: "EXISTS check (often faster than IN)" },
      { command: "SELECT *, (SELECT COUNT(*) FROM other WHERE other.id = table.id) AS cnt FROM table", description: "Correlated subquery in SELECT" },
    ],
  },
  {
    title: "Window Functions (PostgreSQL, MySQL 8+, SQL Server)",
    commands: [
      { command: "SELECT *, ROW_NUMBER() OVER (ORDER BY col) AS rn FROM table", description: "Row number (1, 2, 3...)" },
      { command: "SELECT *, RANK() OVER (ORDER BY col DESC) AS rnk FROM table", description: "Rank (ties get same rank, gaps)" },
      { command: "SELECT *, DENSE_RANK() OVER (ORDER BY col DESC) AS rnk FROM table", description: "Dense rank (ties same rank, no gaps)" },
      { command: "SELECT *, LAG(col, 1) OVER (ORDER BY date) AS prev FROM table", description: "Previous row value" },
      { command: "SELECT *, LEAD(col, 1) OVER (ORDER BY date) AS next FROM table", description: "Next row value" },
      { command: "SELECT *, SUM(col) OVER (PARTITION BY group_col) AS total FROM table", description: "Running total within group" },
      { command: "SELECT *, AVG(col) OVER (PARTITION BY group_col) AS avg FROM table", description: "Average within group" },
      { command: "SELECT *, NTILE(4) OVER (ORDER BY col) AS quartile FROM table", description: "Split into N equal groups" },
    ],
  },
  {
    title: "CREATE & DDL",
    commands: [
      { command: "CREATE TABLE table (id INT PRIMARY KEY, name VARCHAR(255))", description: "Create a new table" },
      { command: "CREATE TABLE table (id INT AUTO_INCREMENT PRIMARY KEY)", description: "Auto-increment primary key (MySQL)" },
      { command: "CREATE TABLE table (id SERIAL PRIMARY KEY)", description: "Auto-increment primary key (PostgreSQL)" },
      { command: "ALTER TABLE table ADD COLUMN col TYPE", description: "Add a column" },
      { command: "ALTER TABLE table DROP COLUMN col", description: "Remove a column" },
      { command: "ALTER TABLE table MODIFY COLUMN col TYPE", description: "Change column type (MySQL)" },
      { command: "ALTER TABLE table RENAME COLUMN old TO new", description: "Rename a column" },
      { command: "DROP TABLE table", description: "Delete a table and its data" },
      { command: "CREATE INDEX idx_name ON table (col)", description: "Create an index" },
      { command: "CREATE UNIQUE INDEX idx_name ON table (col)", description: "Create a unique index" },
    ],
  },
  {
    title: "Common Patterns",
    commands: [
      { command: "SELECT col, COUNT(*) AS cnt FROM table GROUP BY col HAVING COUNT(*) > 1", description: "Find duplicates" },
      { command: "DELETE FROM table WHERE id NOT IN (SELECT MIN(id) FROM table GROUP BY col)", description: "Remove duplicate rows (keep first)" },
      { command: "SELECT * FROM table WHERE col LIKE '%\\_%' ESCAPE '\\\\'", description: "Match literal underscore (MySQL)" },
      { command: "SELECT * FROM table ORDER BY RANDOM() LIMIT 1", description: "Random row (PostgreSQL)" },
      { command: "SELECT * FROM table ORDER BY RAND() LIMIT 1", description: "Random row (MySQL)" },
      { command: "SELECT * FROM table WHERE col >= DATE_SUB(NOW(), INTERVAL 7 DAY)", description: "Rows from last 7 days (MySQL)" },
      { command: "SELECT * FROM table WHERE col >= NOW() - INTERVAL '7 days'", description: "Rows from last 7 days (PostgreSQL)" },
      { command: "SELECT CAST(col AS UNSIGNED) FROM table", description: "Type casting (MySQL)" },
      { command: "SELECT col::INT FROM table", description: "Type casting (PostgreSQL)" },
    ],
  },
];

function CommandCard({ cmd }: { cmd: SqlCommand }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-3 border-b border-slate-700/50 last:border-0">
      <code className="text-sm font-mono text-amber-400 sm:w-2/5 shrink-0 break-all">
        {cmd.command}
      </code>
      <span className="text-sm text-slate-400 flex-1">{cmd.description}</span>
    </div>
  );
}

export default function SqlCheatSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">SQL Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-400 text-sm font-medium mb-2">Database Reference — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SQL Cheat Sheet — Complete Reference for Developers
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Every SQL query you use daily, organized by workflow. SELECT, JOIN, INSERT, UPDATE,
            DELETE, subqueries, window functions, and common patterns. Copy-paste ready.
          </p>
        </header>

        {/* Quick Reference */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3">Quick Reference: SQL Clauses</h2>
          <p className="text-sm text-slate-400 mb-3">Order of execution in a SELECT query:</p>
          <ol className="text-sm text-slate-300 space-y-1 list-decimal list-inside">
            <li><span className="text-indigo-400 font-mono">FROM</span> — pick the table</li>
            <li><span className="text-indigo-400 font-mono">JOIN</span> — combine with other tables</li>
            <li><span className="text-indigo-400 font-mono">WHERE</span> — filter rows</li>
            <li><span className="text-indigo-400 font-mono">GROUP BY</span> — group rows</li>
            <li><span className="text-indigo-400 font-mono">HAVING</span> — filter groups</li>
            <li><span className="text-indigo-400 font-mono">SELECT</span> — pick columns</li>
            <li><span className="text-indigo-400 font-mono">DISTINCT</span> — remove duplicates</li>
            <li><span className="text-indigo-400 font-mono">ORDER BY</span> — sort results</li>
            <li><span className="text-indigo-400 font-mono">LIMIT</span> — restrict row count</li>
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <div className="bg-slate-800/40 border border-slate-700 rounded-xl px-5 py-2">
                {section.commands.map((cmd, i) => (
                  <CommandCard key={i} cmd={cmd} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Data Types Table */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-white mb-4">Common Data Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-2 text-left text-slate-300 font-semibold">Type</th>
                  <th className="px-4 py-2 text-left text-slate-300 font-semibold">MySQL</th>
                  <th className="px-4 py-2 text-left text-slate-300 font-semibold">PostgreSQL</th>
                  <th className="px-4 py-2 text-left text-slate-300 font-semibold">SQL Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr><td className="px-4 py-2 text-slate-400">Auto-increment ID</td><td className="px-4 py-2 font-mono text-xs text-slate-300">INT AUTO_INCREMENT</td><td className="px-4 py-2 font-mono text-xs text-slate-300">SERIAL / GENERATED</td><td className="px-4 py-2 font-mono text-xs text-slate-300">INT IDENTITY(1,1)</td></tr>
                <tr><td className="px-4 py-2 text-slate-400">Text</td><td className="px-4 py-2 font-mono text-xs text-slate-300">VARCHAR(n)</td><td className="px-4 py-2 font-mono text-xs text-slate-300">VARCHAR(n) / TEXT</td><td className="px-4 py-2 font-mono text-xs text-slate-300">NVARCHAR(n)</td></tr>
                <tr><td className="px-4 py-2 text-slate-400">Date/Time</td><td className="px-4 py-2 font-mono text-xs text-slate-300">DATETIME</td><td className="px-4 py-2 font-mono text-xs text-slate-300">TIMESTAMP</td><td className="px-4 py-2 font-mono text-xs text-slate-300">DATETIME2</td></tr>
                <tr><td className="px-4 py-2 text-slate-400">Boolean</td><td className="px-4 py-2 font-mono text-xs text-slate-300">TINYINT(1)</td><td className="px-4 py-2 font-mono text-xs text-slate-300">BOOLEAN</td><td className="px-4 py-2 font-mono text-xs text-slate-300">BIT</td></tr>
                <tr><td className="px-4 py-2 text-slate-400">UUID</td><td className="px-4 py-2 font-mono text-xs text-slate-300">CHAR(36)</td><td className="px-4 py-2 font-mono text-xs text-slate-300">UUID</td><td className="px-4 py-2 font-mono text-xs text-slate-300">UNIQUEIDENTIFIER</td></tr>
                <tr><td className="px-4 py-2 text-slate-400">JSON</td><td className="px-4 py-2 font-mono text-xs text-slate-300">JSON</td><td className="px-4 py-2 font-mono text-xs text-slate-300">JSONB</td><td className="px-4 py-2 font-mono text-xs text-slate-300">NVARCHAR(MAX)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-slate-700 pt-8 mt-12">
          <h2 className="text-lg font-bold text-white mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/json-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-indigo-600/50 transition-all text-sm">
              <span className="text-white font-semibold">JSON Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Data types, parsing, and common patterns</span>
            </Link>
            <Link href="/blog/docker-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-indigo-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Docker Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Containers, images, and Docker Compose</span>
            </Link>
            <Link href="/blog/git-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-indigo-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Git Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Branching, merging, and workflows</span>
            </Link>
            <Link href="/blog/regex-cheat-sheet" className="p-4 rounded-lg border border-slate-700 hover:border-indigo-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Regex Cheat Sheet →</span>
              <span className="block text-slate-500 mt-1">Patterns, character classes, and quantifiers</span>
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
            headline: "SQL Cheat Sheet — Complete Reference for Developers",
            description:
              "Complete SQL cheat sheet covering SELECT, JOIN, INSERT, UPDATE, DELETE, subqueries, window functions, and common patterns.",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            mainEntityOfPage:
              "https://quickkit-nine.vercel.app/blog/sql-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
