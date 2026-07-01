import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docker Compose Cheat Sheet — Commands, YAML & Examples | QuickKit",
  description:
    "Complete Docker Compose cheat sheet. YAML syntax, commands, services, networks, volumes, environment variables, health checks, and multi-stage builds. Every command with copy-paste examples.",
  openGraph: {
    title: "Docker Compose Cheat Sheet — QuickKit",
    description: "Docker Compose commands, YAML syntax, services, networks, and volumes. Every command with copy-paste examples.",
    type: "article",
  },
};

export default function DockerComposeCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Docker Compose Cheat Sheet",
    description: "Complete Docker Compose cheat sheet covering commands, YAML syntax, services, networks, volumes, and multi-stage builds.",
    datePublished: "2026-07-01",
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
          <span className="text-slate-500">Docker Compose Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">DevOps Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Docker Compose Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Complete Docker Compose reference. YAML syntax, commands, services, networks, volumes, environment variables, health checks, and multi-stage builds.
            </p>
          </header>

          {/* Essential Commands */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Essential Commands</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Start all services (foreground)
docker compose up

# Start in background (detached)
docker compose up -d

# Build before starting
docker compose up --build

# Stop and remove containers, networks
docker compose down

# Stop and remove everything (including volumes)
docker compose down -v

# View running services
docker compose ps

# View logs (all services)
docker compose logs

# Follow logs for a specific service
docker compose logs -f web

# Execute command in running container
docker compose exec web sh
docker compose exec db psql -U postgres

# Run one-off command
docker compose run web npm test

# Restart a service
docker compose restart web

# Scale a service
docker compose up -d --scale web=3

# Pull latest images
docker compose pull

# Show container resource usage
docker compose top`}</pre>
            </div>
          </section>

          {/* YAML Syntax */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">YAML Syntax — compose.yml</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# compose.yml (v2+ syntax)
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NODE_ENV: production
    image: myapp:latest
    container_name: myapp-web
    ports:
      - "3000:3000"           # host:container
      - "127.0.0.1:8080:80"  # bind to localhost only
    volumes:
      - ./src:/app/src        # bind mount
      - node_modules:/app/node_modules  # named volume
      - /app/.next             # anonymous volume (ignore from host)
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/mydb
    env_file:
      - .env
      - .env.local
    depends_on:
      db:
        condition: service_healthy
    networks:
      - frontend
      - backend
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 15s

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    networks:
      - backend
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    networks:
      - backend

volumes:
  postgres_data:
  redis_data:
  node_modules:

networks:
  frontend:
  backend:`}</pre>
            </div>
          </section>

          {/* Build Options */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Build Options</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`services:
  app:
    build:
      context: .                    # build context directory
      dockerfile: Dockerfile        # custom Dockerfile name
      dockerfile: Dockerfile.dev    # dev-specific Dockerfile
      args:
        - NODE_ENV=development      # build-time variables
        - APP_VERSION=1.0.0
      target: production            # multi-stage target
      cache_from:
        - myapp:latest
      labels:
        com.example.version: "1.0"
    image: myapp:custom             # tag the built image

# Multi-stage Dockerfile example:
# FROM node:20 AS builder
# RUN npm ci
# RUN npm run build
#
# FROM node:20 AS production
# COPY --from=builder /app/dist ./dist
# CMD ["node", "dist/index.js"]`}</pre>
            </div>
          </section>

          {/* Volumes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Volumes &amp; Bind Mounts</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`services:
  app:
    volumes:
      # Bind mount (host path)
      - ./data:/app/data
      - /absolute/path:/container/path
      - ~/.ssh:/root/.ssh:ro          # read-only

      # Named volume (Docker-managed)
      - db_data:/var/lib/postgresql/data

      # Anonymous volume (unique ID)
      - /app/node_modules

      # TMPFS (in-memory, not persisted)
      - type: tmpfs
        target: /tmp
        tmpfs:
          size: 100M

volumes:
  db_data:                             # named volume definition
    driver: local
    driver_opts:
      type: none
      device: /mnt/ssd/postgres
      o: bind`}</pre>
            </div>
          </section>

          {/* Networks */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Networks</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`services:
  web:
    networks:
      - frontend
      - backend

  api:
    networks:
      backend:
        aliases:
          - api.internal       # DNS alias within network
        ipv4_address: 172.20.0.10  # static IP

networks:
  frontend:
    driver: bridge            # default
  backend:
    driver: bridge
    driver_opts:
      com.docker.network.bridge.name: mybridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
          gateway: 172.20.0.1

# External network (pre-existing)
  shared:
    external: true
    name: shared-network`}</pre>
            </div>
          </section>

          {/* Environment Variables */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Environment Variables</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`services:
  app:
    # List syntax
    environment:
      - NODE_ENV=production
      - PORT=3000

    # Map syntax (allows shell expansion)
    environment:
      NODE_ENV: production
      DB_URL: "postgres://\${DB_USER}:\${DB_PASS}@db:5432/mydb"

    # From file
    env_file:
      - .env
      - .env.local

    # Variable substitution defaults
    # Use \${VAR:-default} for fallback
    environment:
      POSTGRES_DB: \${POSTGRES_DB:-mydb}
      LOG_LEVEL: \${LOG_LEVEL:-info}

# .env file (in same directory as compose.yml)
# DB_USER=postgres
# DB_PASS=secret
# NODE_ENV=development`}</pre>
            </div>
          </section>

          {/* Profiles & Overrides */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Profiles &amp; Overrides</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Profiles — run services only when explicitly activated
services:
  app:
    # No profile = always runs
    image: myapp

  debug:
    profiles: ["debug"]
    image: busybox
    command: sleep infinity

  test:
    profiles: ["test", "ci"]
    image: myapp-test

# Usage:
# docker compose up              # only 'app'
# docker compose --profile debug up  # app + debug
# docker compose --profile test up   # app + test

# Override file (compose.override.yml)
# docker compose automatically merges this
# Override specific settings per environment

# Multiple files:
# docker compose -f compose.yml -f compose.prod.yml up
# docker compose --env-file .env.prod up`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Nginx + Node.js + PostgreSQL
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app

  app:
    build: .
    environment:
      DATABASE_URL: postgres://db:5432/app
    depends_on:
      db:
        condition: service_healthy
    networks:
      - backend

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      timeout: 3s
      retries: 5
    networks:
      - backend

volumes:
  pgdata:

# Useful commands:
# docker compose ps          — list services
# docker compose top         — running processes
# docker compose config      — validate & show resolved config
# docker compose cp web:/app/logs ./logs  — copy files
# docker compose pause / unpause`}</pre>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/docker-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">Docker Cheat Sheet</span>
                <span className="text-slate-500">Docker CLI commands & concepts</span>
              </Link>
              <Link href="/blog/kubernetes-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">Kubernetes Cheat Sheet</span>
                <span className="text-slate-500">K8s commands & resources</span>
              </Link>
              <Link href="/blog/bash-cheat-sheet" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">Bash Cheat Sheet</span>
                <span className="text-slate-500">Shell scripting commands</span>
              </Link>
              <Link href="/blog/cron-expressions-explained" className="block p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm">
                <span className="font-medium text-slate-800 block">Cron Expressions Explained</span>
                <span className="text-slate-500">Scheduling recurring tasks</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
