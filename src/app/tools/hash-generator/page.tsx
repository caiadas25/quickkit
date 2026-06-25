import type { Metadata } from "next";
import HashGeneratorClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Hash Generator — Free Online Tool | QuickKit",
  description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
  openGraph: {
    title: "Hash Generator — Free Online Tool | QuickKit",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Hash Generator — Free Online Tool | QuickKit",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
  },
};

export default function HashGeneratorPage() {
  return <HashGeneratorClient />;
}
