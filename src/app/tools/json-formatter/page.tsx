import type { Metadata } from "next";
import JsonFormatterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JSON Formatter — Free Online Tool | QuickKit",
  description: "Format, validate, and minify JSON data with line numbers and error highlighting.",
  openGraph: {
    title: "JSON Formatter — Free Online Tool | QuickKit",
    description: "Format, validate, and minify JSON data with line numbers and error highlighting.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JSON Formatter — Free Online Tool | QuickKit",
    description: "Format, validate, and minify JSON data with line numbers and error highlighting.",
  },
};

export default function JsonFormatterPage() {
  return <JsonFormatterClient />;
}
