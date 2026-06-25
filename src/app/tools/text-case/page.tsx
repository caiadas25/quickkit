import type { Metadata } from "next";
import TextCaseClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Text Case Converter — Free Online Tool | QuickKit",
  description: "Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.",
  openGraph: {
    title: "Text Case Converter — Free Online Tool | QuickKit",
    description: "Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Text Case Converter — Free Online Tool | QuickKit",
    description: "Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.",
  },
};

export default function TextCasePage() {
  return <TextCaseClient />;
}
