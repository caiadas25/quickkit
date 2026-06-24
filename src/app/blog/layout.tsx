import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — QuickKit",
  description: "Tutorials, guides, and tips for developers using free online tools.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {children}
    </div>
  );
}
