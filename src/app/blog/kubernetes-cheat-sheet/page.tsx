import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kubernetes (K8s) Cheat Sheet — Essential Commands & Resources | QuickKit",
  description:
    "The complete Kubernetes cheat sheet. kubectl commands, pods, deployments, services, configmaps, secrets, and networking. Every command you use daily, copy-paste ready.",
  openGraph: {
    title: "Kubernetes Cheat Sheet — Every Command You Need",
    description:
      "kubectl commands, pods, deployments, services, and networking — organized by workflow. Copy-paste ready.",
    type: "article",
  },
};

interface K8sCommand {
  command: string;
  description: string;
  example?: string;
}

interface K8sSection {
  title: string;
  commands: K8sCommand[];
}

const sections: K8sSection[] = [
  {
    title: "Cluster Info",
    commands: [
      {
        command: "kubectl cluster-info",
        description: "Display cluster information",
      },
      {
        command: "kubectl get nodes",
        description: "List all nodes in the cluster",
      },
      {
        command: "kubectl get nodes -o wide",
        description: "Show nodes with extra details (IP, OS, kernel)",
      },
      {
        command: "kubectl describe node <node>",
        description: "Detailed info about a specific node",
        example: "kubectl describe node node-1",
      },
      {
        command: "kubectl top nodes",
        description: "Show CPU and memory usage for nodes",
      },
      {
        command: "kubectl version",
        description: "Show client and server Kubernetes versions",
      },
      {
        command: "kubectl api-resources",
        description: "List all API resource types",
      },
      {
        command: "kubectl config get-contexts",
        description: "List all kubectl contexts",
      },
      {
        command: "kubectl config use-context <context>",
        description: "Switch to a different context",
        example: "kubectl config use-context production",
      },
    ],
  },
  {
    title: "Pods",
    commands: [
      {
        command: "kubectl get pods",
        description: "List pods in the current namespace",
      },
      {
        command: "kubectl get pods -A",
        description: "List pods in all namespaces",
      },
      {
        command: "kubectl get pods -o wide",
        description: "Show pods with node and IP info",
      },
      {
        command: "kubectl get pods --show-labels",
        description: "Show pods with their labels",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description: "Filter pods by label",
      },
      {
        command: "kubectl describe pod <pod>",
        description: "Detailed info about a specific pod",
        example: "kubectl describe pod my-pod",
      },
      {
        command: "kubectl logs <pod>",
        description: "Show logs for a pod",
        example: "kubectl logs my-pod",
      },
      {
        command: "kubectl logs <pod> -c <container>",
        description: "Show logs for a specific container in a multi-container pod",
        example: "kubectl logs my-pod -c sidecar",
      },
      {
        command: "kubectl logs <pod> --previous",
        description: "Show logs from the previous container instance",
      },
      {
        command: "kubectl logs -f <pod>",
        description: "Follow (stream) logs in real-time",
      },
      {
        command: "kubectl exec -it <pod> -- sh",
        description: "Open a shell in a running pod",
        example: "kubectl exec -it my-pod -- sh",
      },
      {
        command: "kubectl exec -it <pod> -c <container> -- sh",
        description: "Shell into a specific container",
        example: "kubectl exec -it my-pod -c sidecar -- sh",
      },
      {
        command: "kubectl port-forward <pod> <local>:<remote>",
        description: "Forward a local port to a pod port",
        example: "kubectl port-forward my-pod 8080:80",
      },
      {
        command: "kubectl cp <pod>:<path> <local-path>",
        description: "Copy a file from a pod to local filesystem",
        example: "kubectl cp my-pod:/var/log/app.log ./app.log",
      },
      {
        command: "kubectl delete pod <pod>",
        description: "Delete a specific pod",
      },
      {
        command: "kubectl get pods --field-selector status.phase=Failed",
        description: "List only failed pods",
      },
    ],
  },
  {
    title: "Deployments",
    commands: [
      {
        command: "kubectl get deployments",
        description: "List all deployments",
      },
      {
        command: "kubectl describe deployment <name>",
        description: "Detailed info about a deployment",
        example: "kubectl describe deployment my-app",
      },
      {
        command: "kubectl create deployment <name> --image=<image>",
        description: "Create a deployment from CLI",
        example: "kubectl create deployment my-app --image=nginx:latest",
      },
      {
        command: "kubectl scale deployment <name> --replicas=<n>",
        description: "Scale a deployment up or down",
        example: "kubectl scale deployment my-app --replicas=5",
      },
      {
        command: "kubectl set image deployment/<name> <container>=<image>",
        description: "Update container image (triggers rolling update)",
        example: "kubectl set image deployment/my-app app=nginx:1.25",
      },
      {
        command: "kubectl rollout status deployment/<name>",
        description: "Watch the rollout status of a deployment",
        example: "kubectl rollout status deployment/my-app",
      },
      {
        command: "kubectl rollout history deployment/<name>",
        description: "View rollout history",
        example: "kubectl rollout history deployment/my-app",
      },
      {
        command: "kubectl rollout undo deployment/<name>",
        description: "Rollback to the previous revision",
        example: "kubectl rollout undo deployment/my-app",
      },
      {
        command: "kubectl rollout undo deployment/<name> --to-revision=<n>",
        description: "Rollback to a specific revision",
        example: "kubectl rollout undo deployment/my-app --to-revision=2",
      },
      {
        command: "kubectl autoscale deployment <name> --min=<n> --max=<n> --cpu-percent=<n>",
        description: "Create a Horizontal Pod Autoscaler",
        example: "kubectl autoscale deployment my-app --min=2 --max=10 --cpu-percent=80",
      },
      {
        command: "kubectl delete deployment <name>",
        description: "Delete a deployment",
      },
    ],
  },
  {
    title: "Services",
    commands: [
      {
        command: "kubectl get services",
        description: "List all services",
      },
      {
        command: "kubectl get svc -o wide",
        description: "Show services with endpoint details",
      },
      {
        command: "kubectl describe service <name>",
        description: "Detailed info about a service",
        example: "kubectl describe service my-service",
      },
      {
        command: "kubectl expose deployment <name> --port=<port> --type=<type>",
        description: "Create a service for a deployment",
        example: "kubectl expose deployment my-app --port=80 --type=LoadBalancer",
      },
      {
        command: "kubectl get endpoints <service>",
        description: "Show endpoints backing a service",
        example: "kubectl get endpoints my-service",
      },
      {
        command: "kubectl delete service <name>",
        description: "Delete a service",
      },
    ],
  },
  {
    title: "ConfigMaps & Secrets",
    commands: [
      {
        command: "kubectl create configmap <name> --from-literal=key=value",
        description: "Create a ConfigMap from a literal value",
        example: 'kubectl create configmap app-config --from-literal=DATABASE_URL=postgres://localhost',
      },
      {
        command: "kubectl create configmap <name> --from-file=<path>",
        description: "Create a ConfigMap from a file",
        example: "kubectl create configmap app-config --from-file=config.yaml",
      },
      {
        command: "kubectl get configmaps",
        description: "List all ConfigMaps",
      },
      {
        command: "kubectl describe configmap <name>",
        description: "View ConfigMap contents",
      },
      {
        command: "kubectl create secret generic <name> --from-literal=key=value",
        description: "Create a generic secret",
        example: 'kubectl create secret generic db-secret --from-literal=password=my-secret-pw',
      },
      {
        command: "kubectl create secret tls <name> --cert=<cert> --key=<key>",
        description: "Create a TLS secret",
        example: "kubectl create secret tls my-tls --cert=cert.pem --key=key.pem",
      },
      {
        command: "kubectl get secrets",
        description: "List all secrets",
      },
      {
        command: "kubectl describe secret <name>",
        description: "View secret metadata (not decoded values)",
      },
      {
        command: "kubectl get secret <name> -o jsonpath='{.data.<key>}' | base64 -d",
        description: "Decode and view a secret value",
        example: "kubectl get secret db-secret -o jsonpath='{.data.password}' | base64 -d",
      },
    ],
  },
  {
    title: "Namespaces",
    commands: [
      {
        command: "kubectl get namespaces",
        description: "List all namespaces",
      },
      {
        command: "kubectl create namespace <name>",
        description: "Create a new namespace",
        example: "kubectl create namespace staging",
      },
      {
        command: "kubectl config set-context --current --namespace=<name>",
        description: "Set default namespace for current context",
        example: "kubectl config set-context --current --namespace=production",
      },
      {
        command: "kubectl delete namespace <name>",
        description: "Delete a namespace and all its resources",
      },
    ],
  },
  {
    title: "Networking",
    commands: [
      {
        command: "kubectl get ingress",
        description: "List all Ingress resources",
      },
      {
        command: "kubectl describe ingress <name>",
        description: "Detailed info about an Ingress",
      },
      {
        command: "kubectl get networkpolicies",
        description: "List NetworkPolicies",
      },
      {
        command: "kubectl run <name> --image=<image> --rm -it --restart=Never -- sh",
        description: "Run a one-off pod for debugging",
        example: "kubectl run debug --image=busybox --rm -it --restart=Never -- sh",
      },
      {
        command: "kubectl run <name> --image=<image> --rm -it --restart=Never -- nslookup <service>",
        description: "Test DNS resolution from a pod",
        example: "kubectl run dns-test --image=busybox --rm -it --restart=Never -- nslookup my-service",
      },
    ],
  },
  {
    title: "Troubleshooting",
    commands: [
      {
        command: "kubectl get events --sort-by='.lastTimestamp'",
        description: "List recent events, newest first",
      },
      {
        command: "kubectl get events -n <namespace>",
        description: "Events for a specific namespace",
      },
      {
        command: "kubectl describe pod <pod> | grep -A 5 'Conditions'",
        description: "Check pod conditions quickly",
      },
      {
        command: "kubectl get pods --field-selector status.phase!=Running",
        description: "List pods that aren't running",
      },
      {
        command: "kubectl get pods -o json | jq '.items[] | select(.status.phase != \"Running\") | .metadata.name'",
        description: "Find non-running pods using jq",
      },
      {
        command: "kubectl debug node/<node> -it --image=busybox",
        description: "Start a debug session on a node",
        example: "kubectl debug node/node-1 -it --image=busybox",
      },
      {
        command: "kubectl proxy",
        description: "Start a proxy to the Kubernetes API server",
      },
      {
        command: "kubectl get --raw /healthz",
        description: "Check API server health",
      },
    ],
  },
  {
    title: "Labels & Selectors",
    commands: [
      {
        command: "kubectl label pod <pod> key=value",
        description: "Add a label to a pod",
        example: "kubectl label pod my-pod env=production",
      },
      {
        command: "kubectl label pod <pod> key-",
        description: "Remove a label from a pod",
        example: "kubectl label pod my-pod env-",
      },
      {
        command: "kubectl get pods -l 'app in (nginx,redis)'",
        description: "Filter pods with label selector expressions",
      },
      {
        command: "kubectl get all -l environment=production",
        description: "Get all resources with a specific label",
      },
    ],
  },
  {
    title: "Resource Management",
    commands: [
      {
        command: "kubectl top pods",
        description: "Show CPU and memory usage for pods",
      },
      {
        command: "kubectl top pods --sort-by=memory",
        description: "Sort pods by memory usage",
      },
      {
        command: "kubectl top pods -A",
        description: "Show resource usage across all namespaces",
      },
      {
        command: "kubectl get resourcequotas",
        description: "List resource quotas",
      },
      {
        command: "kubectl get limitranges",
        description: "List limit ranges",
      },
    ],
  },
];

export default function KubernetesCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/blog"
          className="hover:text-indigo-600 transition-colors"
        >
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Kubernetes Cheat Sheet</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-purple-50 text-purple-800">
            DevOps
          </span>
          <span className="text-xs text-slate-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Kubernetes (K8s) Cheat Sheet
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Essential kubectl commands, resource management, and troubleshooting.
          Every command you use daily, organized by workflow. Copy-paste ready.
        </p>
      </header>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-10 p-4 rounded-lg bg-slate-50 border border-slate-200">
        {sections.map((section, i) => (
          <a
            key={i}
            href={`#section-${i}`}
            className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
          >
            {section.title}
          </a>
        ))}
      </div>

      {/* Command sections */}
      <div className="space-y-10">
        {sections.map((section, i) => (
          <section key={i} id={`section-${i}`}>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-indigo-500">#</span>
              {section.title}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-medium text-slate-600 w-[45%]">
                      Command
                    </th>
                    <th className="px-4 py-2.5 text-left font-medium text-slate-600">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.commands.map((cmd, j) => (
                    <tr
                      key={j}
                      className="border-t border-slate-100 hover:bg-slate-50/50"
                    >
                      <td className="px-4 py-2.5">
                        <code className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 break-all">
                          {cmd.command}
                        </code>
                        {cmd.example && (
                          <div className="mt-1 text-xs text-slate-400 font-mono">
                            e.g. {cmd.example}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        {cmd.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* Tips section */}
      <section className="mt-12 p-8 rounded-lg border border-slate-200 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Kubernetes Quick Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">
              Use Short Names
            </h3>
            <p>
              <code className="bg-slate-100 px-1 rounded">po</code> for pods, <code className="bg-slate-100 px-1 rounded">deploy</code> for deployments, <code className="bg-slate-100 px-1 rounded">svc</code> for services, <code className="bg-slate-100 px-1 rounded">ns</code> for namespaces, <code className="bg-slate-100 px-1 rounded">cm</code> for configmaps, <code className="bg-slate-100 px-1 rounded">no</code> for nodes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">
              Auto-complete
            </h3>
            <p>
              Enable kubectl auto-complete with{" "}
              <code className="bg-slate-100 px-1 rounded">source &lt;(kubectl completion bash)</code>. Then use Tab to auto-complete resource names.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">
              Watch Mode
            </h3>
            <p>
              Add <code className="bg-slate-100 px-1 rounded">-w</code> or <code className="bg-slate-100 px-1 rounded">--watch</code> to any get command to watch resources in real-time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">
              JSON Output
            </h3>
            <p>
              Use <code className="bg-slate-100 px-1 rounded">-o json</code> or <code className="bg-slate-100 px-1 rounded">-o yaml</code> to get full resource specs. Pipe through <code className="bg-slate-100 px-1 rounded">jq</code> for filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="mt-10 p-6 rounded border border-slate-200 bg-white">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Related Cheat Sheets
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/docker-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Docker Cheat Sheet →
          </Link>
          <Link
            href="/blog/bash-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Bash Cheat Sheet →
          </Link>
          <Link
            href="/blog/git-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Git Cheat Sheet →
          </Link>
          <Link
            href="/blog/sql-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            SQL Cheat Sheet →
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Kubernetes (K8s) Cheat Sheet — Essential Commands & Resources",
            description:
              "The complete Kubernetes cheat sheet. kubectl commands, pods, deployments, services, and networking.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
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
