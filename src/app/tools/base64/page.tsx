import type { Metadata } from "next";
import Base64Client from "./ToolClient";

export const metadata: Metadata = {
  title: "Base64 Encode/Decode — Free Online Tool | QuickKit",
  description: "Encode text to Base64 or decode Base64 strings back to plain text.",
  openGraph: {
    title: "Base64 Encode/Decode — Free Online Tool | QuickKit",
    description: "Encode text to Base64 or decode Base64 strings back to plain text.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Base64 Encode/Decode — Free Online Tool | QuickKit",
    description: "Encode text to Base64 or decode Base64 strings back to plain text.",
  },
};

export default function Base64Page() {
  return <Base64Client />;
}
