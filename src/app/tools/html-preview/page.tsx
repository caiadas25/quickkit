import type { Metadata } from "next";
import HtmlPreviewClient from "./ToolClient";

export const metadata: Metadata = {
  title: "HTML Preview — Free Online Tool | QuickKit",
  description: "Write HTML and see a live preview in real-time with a split-pane editor.",
  openGraph: {
    title: "HTML Preview — Free Online Tool | QuickKit",
    description: "Write HTML and see a live preview in real-time with a split-pane editor.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "HTML Preview — Free Online Tool | QuickKit",
    description: "Write HTML and see a live preview in real-time with a split-pane editor.",
  },
};

export default function HtmlPreviewPage() {
  return <HtmlPreviewClient />;
}
