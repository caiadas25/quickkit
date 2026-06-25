import type { Metadata } from "next";
import HtmlMinifierClient from "./ToolClient";

export const metadata: Metadata = {
  title: "HTML Minifier — Free Online Tool | QuickKit",
  description: "Remove comments, whitespace, and unnecessary characters to shrink your HTML for production.",
  openGraph: {
    title: "HTML Minifier — Free Online Tool | QuickKit",
    description: "Remove comments, whitespace, and unnecessary characters to shrink your HTML for production.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "HTML Minifier — Free Online Tool | QuickKit",
    description: "Remove comments, whitespace, and unnecessary characters to shrink your HTML for production.",
  },
};

export default function HtmlMinifierPage() {
  return <HtmlMinifierClient />;
}
