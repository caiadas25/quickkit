import type { Metadata } from "next";
import WordCounterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Word Counter — Free Online Tool | QuickKit",
  description: "Count words, characters, sentences, and paragraphs in real-time.",
  openGraph: {
    title: "Word Counter — Free Online Tool | QuickKit",
    description: "Count words, characters, sentences, and paragraphs in real-time.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Word Counter — Free Online Tool | QuickKit",
    description: "Count words, characters, sentences, and paragraphs in real-time.",
  },
};

export default function WordCounterPage() {
  return <WordCounterClient />;
}
