import type { Metadata } from "next";
import JsMinifierClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JavaScript Minifier — Free Online Tool | QuickKit",
  description: "Remove comments, whitespace, and unnecessary characters to shrink your JavaScript for production.",
  openGraph: {
    title: "JavaScript Minifier — Free Online Tool | QuickKit",
    description: "Remove comments, whitespace, and unnecessary characters to shrink your JavaScript for production.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JavaScript Minifier — Free Online Tool | QuickKit",
    description: "Remove comments, whitespace, and unnecessary characters to shrink your JavaScript for production.",
  },
};

export default function JsMinifierPage() {
  return <JsMinifierClient />;
}
