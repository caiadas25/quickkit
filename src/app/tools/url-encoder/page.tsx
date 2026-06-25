import type { Metadata } from "next";
import UrlEncoderClient from "./ToolClient";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder — Free Online Tool | QuickKit",
  description: "Encode text to URL-safe strings or decode URL-encoded text back to plain text.",
  openGraph: {
    title: "URL Encoder/Decoder — Free Online Tool | QuickKit",
    description: "Encode text to URL-safe strings or decode URL-encoded text back to plain text.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "URL Encoder/Decoder — Free Online Tool | QuickKit",
    description: "Encode text to URL-safe strings or decode URL-encoded text back to plain text.",
  },
};

export default function UrlEncoderPage() {
  return <UrlEncoderClient />;
}
