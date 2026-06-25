import type { Metadata } from "next";
import HtmlToMarkdownClient from "./ToolClient";

export const metadata: Metadata = {
  title: "HTML to Markdown — Free Online Tool | QuickKit",
  description: "Convert HTML code to clean, readable Markdown syntax.",
  openGraph: {
    title: "HTML to Markdown — Free Online Tool | QuickKit",
    description: "Convert HTML code to clean, readable Markdown syntax.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "HTML to Markdown — Free Online Tool | QuickKit",
    description: "Convert HTML code to clean, readable Markdown syntax.",
  },
};

export default function HtmlToMarkdownPage() {
  return <HtmlToMarkdownClient />;
}
