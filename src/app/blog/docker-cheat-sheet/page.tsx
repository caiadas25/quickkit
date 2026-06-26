import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docker Cheat Sheet — Essential Commands for Developers | QuickKit",
  description:
    "The complete Docker cheat sheet. Containers, images, Docker Compose, volumes, networking, and multi-stage builds. Every command you use daily, copy-paste ready.",
  openGraph: {
    title: "Docker Cheat Sheet — Every Command You Need",
    description: "Containers, images, Docker Compose, volumes, and networking — organized by workflow. Copy-paste ready.",
    type: "article",
  },
};

interface DockerCommand {
  command: string;
  description: string;
  example?: string;
}

interface DockerSection {
  title: string;
  commands: DockerCommand[];
}

const sections: DockerSection[] = [
  {
    title: "Images",
    commands: [
      { command: "docker build -t <name> .", description: "Build an image from a Dockerfile", example: "docker build -t myapp:latest ." },
      { command: "docker build -t <name> -f <file> .", description: "Build using a specific Dockerfile", example: "docker build -t myapp -f Dockerfile.prod ." },
      { command: "docker images", description: "List all local images" },
      { command: "docker image ls", description: "List all images (alias)" },
      { command: "docker rmi <image>", description: "Remove an image" },
      { command: "docker image prune -a", description: "Remove all unused images" },
      { command: "docker tag <image> <repo>:<tag>", description: "Tag an image for a repository" },
      { command: "docker push <repo>:<tag>", description: "Push an image to a registry" },
      { command: "docker pull <image>", description: "Pull an image from a registry" },
      { command: "docker history <image>", description: "Show image layer history" },
    ],
  },
  {
    title: "Containers",
    commands: [
      { command: "docker run <image>", description: "Run a container from an image" },
      { command: "docker run -d <image>", description: "Run in detached (background) mode" },
      { command: "docker run -it <image> sh", description: "Run interactively with a shell", example: "docker run -it ubuntu bash" },
      { command: "docker run -p <host>:<container> <image>", description: "Map ports", example: "docker run -p 3000:3000 myapp" },
      { command: "docker run -v <host>:<container> <image>", description: "Mount a volume", example: "docker run -v ./data:/app/data myapp" },
      { command: "docker run --name <name> <image>", description: "Run with a specific container name" },
      { command: "docker run --rm <image>", description: "Run and auto-remove container when it exits" },
      { command: "docker run -e KEY=VALUE <image>", description: "Pass environment variables" },
      { command: "docker ps", description: "List running containers" },
      { command: "docker ps -a", description: "List all containers (including stopped)" },
      { command: "docker stop <container>", description: "Stop a running container (graceful SIGTERM)" },
      { command: "docker start <container>", description: "Start a stopped container" },
      { command: "docker restart <container>", description: "Restart a container" },
      { command: "docker rm <container>", description: "Remove a stopped container" },
      { command: "docker rm -f <container>", description: "Force remove a running container" },
      { command: "docker exec -it <container> sh", description: "Enter a running container", example: "docker exec -it myapp bash" },
      { command: "docker logs <container>", description: "View container logs" },
      { command: "docker logs -f <container>", description: "Follow (tail) container logs" },
      { command: "docker inspect <container>", description: "Show detailed container info" },
      { command: "docker top <container>", description: "Show running processes in a container" },
      { command: "docker stats", description: "Live resource usage (CPU, memory, I/O)" },
    ],
  },
  {
    title: "Volumes & Data",
    commands: [
      { command: "docker volume create <name>", description: "Create a named volume" },
      { command: "docker volume ls", description: "List all volumes" },
      { command: "docker volume inspect <name>", description: "Show volume details" },
      { command: "docker volume rm <name>", description: "Remove a volume" },
      { command: "docker volume prune", description: "Remove all unused volumes" },
      { command: "docker cp <container>:<path> <host>", description: "Copy file from container to host" },
      { command: "docker cp <host> <container>:<path>", description: "Copy file from host to container" },
    ],
  },
  {
    title: "Networking",
    commands: [
      { command: "docker network ls", description: "List all networks" },
      { command: "docker network create <name>", description: "Create a custom network" },
      { command: "docker network connect <network> <container>", description: "Connect a container to a network" },
      { command: "docker network disconnect <network> <container>", description: "Disconnect a container from a network" },
      { command: "docker network inspect <network>", description: "Show network details" },
      { command: "docker network rm <name>", description: "Remove a network" },
      { command: "docker network prune", description: "Remove all unused networks" },
    ],
  },
  {
    title: "Docker Compose",
    commands: [
      { command: "docker compose up", description: "Build and start all services" },
      { command: "docker compose up -d", description: "Start in detached mode" },
      { command: "docker compose up --build", description: "Force rebuild before starting" },
      { command: "docker compose down", description: "Stop and remove all services" },
      { command: "docker compose down -v", description: "Stop, remove services AND volumes" },
      { command: "docker compose ps", description: "List running services" },
      { command: "docker compose logs", description: "View logs for all services" },
      { command: "docker compose logs -f <service>", description: "Follow logs for a specific service" },
      { command: "docker compose exec <service> sh", description: "Execute command in a running service" },
      { command: "docker compose run <service> <cmd>", description: "Run a one-off command in a service" },
      { command: "docker compose build", description: "Build/rebuild all services" },
      { command: "docker compose pull", description: "Pull all service images" },
      { command: "docker compose restart", description: "Restart all services" },
      { command: "docker compose stop", description: "Stop all services (don't remove)" },
    ],
  },
  {
    title: "Cleanup & System",
    commands: [
      { command: "docker system df", description: "Show disk usage" },
      { command: "docker system prune", description: "Remove all unused data (containers, networks, images)" },
      { command: "docker system prune -a", description: "Remove ALL unused data (including unused images)" },
      { command: "docker system prune --volumes", description: "Also remove unused volumes" },
      { command: "docker system prune -a --volumes", description: "Nuclear option: remove everything unused" },
    ],
  },
  {
    title: "Multi-Stage Build Patterns",
    commands: [
      { command: "FROM node:20-alpine AS builder", description: "Start a build stage", example: "Use multiple FROM statements to optimize image size" },
      { command: "COPY --from=builder /app/dist ./dist", description: "Copy artifacts from a previous stage" },
      { command: "COPY --from=node:20 /usr/local/bin/node /usr/local/bin/", description: "Copy a binary from a public image" },
      { command: "COPY --from=alpine /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/", description: "Copy system files from another image" },
    ],
  },
];

export default function DockerCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Docker Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-indigo-600 text-sm font-medium mb-2">Cheat Sheet — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Docker Cheat Sheet
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every Docker command you use daily, from building images to managing containers,
            volumes, networks, and Docker Compose. Copy-paste ready.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-10">
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h2 className="font-semibold text-slate-800 mb-3">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {sections.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Command Sections */}
        {sections.map((section) => (
          <section
            key={section.title}
            id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 w-2/5">Command</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {section.commands.map((cmd, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4">
                        <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                          {cmd.command}
                        </code>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {cmd.description}
                        {cmd.example && (
                          <div className="mt-1 text-xs text-slate-400">
                            Example: <code className="bg-slate-100 px-1 rounded">{cmd.example}</code>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Pro Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pro Tips</h2>
          <div className="grid gap-4">
            {[
              {
                tip: "Use .dockerignore to exclude files from the build context",
                detail: "Like .gitignore but for Docker builds. Add node_modules, .git, and test files to speed up builds.",
              },
              {
                tip: "Order Dockerfile instructions from least to most frequently changing",
                detail: "Docker caches layers. Put COPY package.json before COPY . to leverage build cache for npm install.",
              },
              {
                tip: "Use multi-stage builds for smaller images",
                detail: "Build in a full Node image, then copy only the dist/ folder to a slim alpine image. Can reduce image size by 90%.",
              },
              {
                tip: "Always use specific image tags, not :latest",
                detail: ":latest is unpredictable. Use node:20-alpine or node:20.11.0-alpine for reproducible builds.",
              },
              {
                tip: "Use docker compose for local development",
                detail: "Define your app, database, and Redis in docker-compose.yml. One command to start everything.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <p className="font-medium text-slate-800">{item.tip}</p>
                <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/git-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Git Cheat Sheet</h3>
              <p className="text-sm text-slate-500 mt-1">Essential Git commands for everyday development.</p>
            </Link>
            <Link href="/blog/css-flexbox-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">CSS Flexbox Cheat Sheet</h3>
              <p className="text-sm text-slate-500 mt-1">Complete layout guide with 6 patterns.</p>
            </Link>
            <Link href="/blog/regex-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Regex Cheat Sheet</h3>
              <p className="text-sm text-slate-500 mt-1">Regular expressions for developers.</p>
            </Link>
            <Link href="/blog/cron-expressions-explained" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-800 hover:text-indigo-600 transition-colors">Cron Expressions Explained</h3>
              <p className="text-sm text-slate-500 mt-1">Schedule tasks with cron syntax.</p>
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
            "@type": "Article",
            headline: "Docker Cheat Sheet — Essential Commands for Developers",
            description: "Every Docker command you use daily, from building images to managing containers, volumes, networks, and Docker Compose.",
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
          }),
        }}
      />
    </div>
  );
}
