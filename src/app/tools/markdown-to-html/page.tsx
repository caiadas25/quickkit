import type { Metadata } from "next";
import MarkdownToHtmlClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Markdown to HTML — Free Online Tool | QuickKit",
  description: "Convert Markdown to clean, ready-to-use HTML with live preview.",
  openGraph: {
    title: "Markdown to HTML — Free Online Tool | QuickKit",
    description: "Convert Markdown to clean, ready-to-use HTML with live preview.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Markdown to HTML — Free Online Tool | QuickKit",
    description: "Convert Markdown to clean, ready-to-use HTML with live preview.",
  },
};

export default function MarkdownToHtmlPage() {
  return <MarkdownToHtmlClient />;
}
