import type { Metadata } from "next";
import MarkdownPreviewClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Markdown Preview — Free Online Tool | QuickKit",
  description: "Write Markdown and see a live preview side-by-side.",
  openGraph: {
    title: "Markdown Preview — Free Online Tool | QuickKit",
    description: "Write Markdown and see a live preview side-by-side.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Markdown Preview — Free Online Tool | QuickKit",
    description: "Write Markdown and see a live preview side-by-side.",
  },
};

export default function MarkdownPreviewPage() {
  return <MarkdownPreviewClient />;
}
