import type { Metadata } from "next";
import TextDiffClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Text Diff — Free Online Tool | QuickKit",
  description: "Compare two pieces of text side by side and see what changed.",
  openGraph: {
    title: "Text Diff — Free Online Tool | QuickKit",
    description: "Compare two pieces of text side by side and see what changed.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Text Diff — Free Online Tool | QuickKit",
    description: "Compare two pieces of text side by side and see what changed.",
  },
};

export default function TextDiffPage() {
  return <TextDiffClient />;
}
