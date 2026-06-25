import type { Metadata } from "next";
import JsonToCsvClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JSON to CSV — Free Online Tool | QuickKit",
  description: "Convert JSON arrays of objects to CSV format with customizable delimiters.",
  openGraph: {
    title: "JSON to CSV — Free Online Tool | QuickKit",
    description: "Convert JSON arrays of objects to CSV format with customizable delimiters.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JSON to CSV — Free Online Tool | QuickKit",
    description: "Convert JSON arrays of objects to CSV format with customizable delimiters.",
  },
};

export default function JsonToCsvPage() {
  return <JsonToCsvClient />;
}
