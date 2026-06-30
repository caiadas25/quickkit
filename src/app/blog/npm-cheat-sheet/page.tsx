import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NPM Commands Cheat Sheet — Essential Package Manager Reference | QuickKit",
  description:
    "Complete NPM cheat sheet. Install, update, scripts, dependencies, audit, workspaces, and registry commands. Every NPM command you use daily, copy-paste ready.",
  openGraph: {
    title: "NPM Commands Cheat Sheet — Every Command You Need",
    description:
      "Install, update, scripts, dependencies, audit, and workspaces — organized by workflow. Copy-paste ready.",
    type: "article",
  },
};

interface NpmCommand {
  command: string;
  description: string;
  example?: string;
}

interface NpmSection {
  title: string;
  commands: NpmCommand[];
}

const sections: NpmSection[] = [
  {
    title: "Install & Uninstall",
    commands: [
      { command: "npm install <package>", description: "Install a package and add to dependencies", example: "npm install express" },
      { command: "npm install <package>@<version>", description: "Install a specific version", example: "npm install express@4.18.2" },
      { command: "npm install --save-dev <package>", description: "Install as devDependency", example: "npm install --save-dev jest" },
      { command: "npm install --save-optional <package>", description: "Install as optional dependency", example: "npm install --save-optional fsevents" },
      { command: "npm install -g <package>", description: "Install globally", example: "npm install -g typescript" },
      { command: "npm install --save-exact <package>", description: "Pin exact version (no ^ or ~)", example: "npm install --save-exact express@4.18.2" },
      { command: "npm ci", description: "Clean install from package-lock.json (CI/CD)" },
      { command: "npm uninstall <package>", description: "Remove a package", example: "npm uninstall lodash" },
      { command: "npm uninstall -g <package>", description: "Uninstall a global package" },
      { command: "npm prune", description: "Remove extraneous packages not in package.json" },
    ],
  },
  {
    title: "Dependencies",
    commands: [
      { command: "npm ls", description: "List all installed packages" },
      { command: "npm ls --depth=0", description: "List only top-level packages" },
      { command: "npm ls <package>", description: "Check where a specific package is installed" },
      { command: "npm outdated", description: "Show packages that need updating" },
      { command: "npm update", description: "Update all packages to latest semver range" },
      { command: "npm update <package>", description: "Update a specific package" },
      { command: "npm dedupe", description: "Reduce duplication in node_modules tree" },
      { command: "npm explain <package>", description: "Show why a package is installed", example: "npm explain lodash" },
    ],
  },
  {
    title: "Scripts",
    commands: [
      { command: "npm run <script>", description: "Run a script from package.json", example: "npm run build" },
      { command: "npm test", description: "Run the test script (shorthand)" },
      { command: "npm start", description: "Run the start script (shorthand)" },
      { command: "npm run <script> -- <args>", description: "Pass arguments to a script", example: "npm run test -- --watch" },
      { command: "npm run", description: "List all available scripts" },
      { command: "npm restart", description: "Stop and restart the start script" },
      { command: "npm run <script> --if-present", description: "Only run if script exists" },
    ],
  },
  {
    title: "Init & Package Management",
    commands: [
      { command: "npm init", description: "Create a new package.json (interactive)" },
      { command: "npm init -y", description: "Create package.json with defaults" },
      { command: "npm init --scope=<org>", description: "Create scoped package", example: "npm init --scope=myorg" },
      { command: "npm version <type>", description: "Bump version (patch/minor/major)", example: "npm version patch" },
      { command: "npm version <type> -m \"<msg>\"", description: "Bump version with commit message" },
      { command: "npm pack", description: "Create a tarball for publishing" },
      { command: "npm publish", description: "Publish package to npm registry" },
      { command: "npm unpublish <package>@<version>", description: "Remove a published version" },
      { command: "npm deprecate <package> \"<msg>\"", description: "Mark a version as deprecated" },
      { command: "npm link", description: "Create a global symlink for local development" },
      { command: "npm unlink", description: "Remove global symlink" },
    ],
  },
  {
    title: "Security & Audit",
    commands: [
      { command: "npm audit", description: "Check for known vulnerabilities" },
      { command: "npm audit fix", description: "Automatically fix vulnerabilities" },
      { command: "npm audit fix --force", description: "Force fix (may include breaking changes)" },
      { command: "npm audit --json", description: "Output audit results as JSON" },
      { command: "npm fund", description: "Show funding information for packages" },
      { command: "npm owner ls <package>", description: "Show package owners" },
      { command: "npm owner add <user> <package>", description: "Add a package owner" },
    ],
  },
  {
    title: "Cache & Config",
    commands: [
      { command: "npm cache ls", description: "List cached packages" },
      { command: "npm cache clean --force", description: "Delete all cached data" },
      { command: "npm cache verify", description: "Verify cache integrity" },
      { command: "npm config list", description: "Show all config settings" },
      { command: "npm config get <key>", description: "Get a config value", example: "npm config get registry" },
      { command: "npm config set <key> <value>", description: "Set a config value", example: "npm config set registry https://registry.npmjs.org" },
      { command: "npm config delete <key>", description: "Delete a config value" },
      { command: "npm config edit", description: "Open config in editor" },
      { command: "npm config get prefix", description: "Show where global packages are installed" },
    ],
  },
  {
    title: "Workspaces",
    commands: [
      { command: "npm workspaces list", description: "List all workspaces" },
      { command: "npm ws <workspace> <cmd>", description: "Run a command in a specific workspace" },
      { command: "npm install --workspaces", description: "Install dependencies for all workspaces" },
      { command: "npm install --workspace=<name>", description: "Install for a specific workspace" },
      { command: "npm run <script> --workspaces", description: "Run script in all workspaces" },
      { command: "npm run <script> --workspace=<name>", description: "Run script in a specific workspace" },
      { command: "npm exec --workspaces -- <cmd>", description: "Execute a command in all workspaces" },
    ],
  },
  {
    title: "Registry & Publishing",
    commands: [
      { command: "npm whoami", description: "Show logged-in npm username" },
      { command: "npm login", description: "Log in to npm registry" },
      { command: "npm logout", description: "Log out from npm registry" },
      { command: "npm config set registry <url>", description: "Change default registry" },
      { command: "npm config set @<scope>:registry <url>", description: "Set registry for a scope", example: "npm config set @myorg:registry https://npm.pkg.github.com" },
      { command: "npm search <term>", description: "Search the npm registry" },
      { command: "npm view <package>", description: "View package metadata", example: "npm view express versions" },
      { command: "npm view <package> <field>", description: "View a specific field", example: "npm view express version" },
      { command: "npm pack --dry-run", description: "Preview what would be included in the tarball" },
    ],
  },
];

export default function NpmCheatSheetPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">NPM Commands Cheat Sheet</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          NPM Commands Cheat Sheet
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Every NPM command you use daily, organized by workflow. Install, update, scripts, audit, workspaces, and registry — copy-paste ready.
        </p>
      </header>

      {/* Command sections */}
      <div className="space-y-8 mb-12">
        {sections.map((section, s) => (
          <section key={s}>
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">{s + 1}</span>
              {section.title}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-slate-700">Command</th>
                    <th className="text-left px-4 py-2 font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {section.commands.map((cmd, i) => (
                    <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2 font-mono text-xs text-indigo-700 whitespace-nowrap">{cmd.command}</td>
                      <td className="px-4 py-2 text-slate-600">
                        {cmd.description}
                        {cmd.example && (
                          <span className="block text-xs text-slate-400 mt-0.5">e.g. <code className="bg-slate-100 px-1 rounded">{cmd.example}</code></span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* Pro tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { tip: "Use npm ci in CI/CD pipelines", detail: "npm ci installs exactly what's in package-lock.json, is faster, and fails if the lock file is out of sync with package.json." },
            { tip: "Pin exact versions for tools", detail: "Use --save-exact (-E) for CLI tools (typescript, eslint, prettier) to avoid unexpected behavior from minor version bumps." },
            { tip: "Use npx to run without installing", detail: "npx prettier --check . runs prettier without adding it to your project. Great for one-off commands and tools." },
            { tip: "Use overrides for security fixes", detail: "Add \"overrides\": { \"vulnerable-pkg\": \"1.2.3\" } to package.json to force a specific version of a transitive dependency." },
            { tip: "Clean install with npm ci", detail: "Delete node_modules and package-lock.json, then run npm ci for a pristine install. Fixes most phantom dependency issues." },
            { tip: "Use workspace protocol", detail: "In monorepos, use \"workspace:*\" in package.json to link local packages without publishing to a registry." },
          ].map((item, i) => (
            <div key={i} className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
              <p className="font-medium text-slate-800">{item.tip}</p>
              <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Scenarios</h2>
        <div className="space-y-4">
          {[
            { scenario: "Add a production dependency", command: "npm install express" },
            { scenario: "Add a dev dependency", command: "npm install --save-dev jest" },
            { scenario: "Update all packages safely", command: "npm outdated && npm update" },
            { scenario: "Fix security vulnerabilities", command: "npm audit && npm audit fix" },
            { scenario: "Start a new project", command: "npm init -y && npm install express" },
            { scenario: "Check for outdated packages", command: "npm outdated" },
            { scenario: "Run a one-off tool", command: "npx create-react-app my-app" },
            { scenario: "Reset node_modules completely", command: "rm -rf node_modules package-lock.json && npm ci" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded border border-slate-200 bg-white">
              <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-500 shrink-0">{i + 1}</span>
              <div>
                <p className="font-medium text-slate-800 text-sm">{item.scenario}</p>
                <code className="text-xs font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded mt-1 inline-block">{item.command}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Cheat Sheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/nodejs-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Node.js Cheat Sheet</h3>
            <p className="text-sm text-slate-500 mt-1">Common modules, patterns, and commands for Node.js.</p>
          </Link>
          <Link href="/blog/git-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Git Cheat Sheet</h3>
            <p className="text-sm text-slate-500 mt-1">Essential Git commands for everyday development.</p>
          </Link>
          <Link href="/blog/docker-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Docker Cheat Sheet</h3>
            <p className="text-sm text-slate-500 mt-1">Containers, images, and Docker Compose commands.</p>
          </Link>
          <Link href="/blog/typescript-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">TypeScript Cheat Sheet</h3>
            <p className="text-sm text-slate-500 mt-1">Types, generics, and utility types reference.</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
