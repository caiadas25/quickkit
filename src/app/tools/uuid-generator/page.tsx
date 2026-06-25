import type { Metadata } from "next";
import UuidGeneratorClient from "./ToolClient";

export const metadata: Metadata = {
  title: "UUID Generator — Free Online Tool | QuickKit",
  description: "Generate random UUID v4 identifiers instantly. Batch generate up to 100.",
  openGraph: {
    title: "UUID Generator — Free Online Tool | QuickKit",
    description: "Generate random UUID v4 identifiers instantly. Batch generate up to 100.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "UUID Generator — Free Online Tool | QuickKit",
    description: "Generate random UUID v4 identifiers instantly. Batch generate up to 100.",
  },
};

export default function UuidGeneratorPage() {
  return <UuidGeneratorClient />;
}
