"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/lib/tools";

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";

  const currentTool = tools.find((t) => t.href === `/tools/${slug}`);
  const related = currentTool
    ? tools
        .filter((t) => t.id !== slug && t.category === currentTool.category)
        .slice(0, 3)
    : tools.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-6"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Tools
        </Link>
        {children}

        {/* Related Tools - Internal Linking */}
        {related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {related.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 text-sm transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
