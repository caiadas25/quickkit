import type { Metadata } from "next";
import JwtDecoderClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JWT Decoder — Free Online Tool | QuickKit",
  description: "Decode JSON Web Tokens to view their header, payload, and signature.",
  openGraph: {
    title: "JWT Decoder — Free Online Tool | QuickKit",
    description: "Decode JSON Web Tokens to view their header, payload, and signature.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JWT Decoder — Free Online Tool | QuickKit",
    description: "Decode JSON Web Tokens to view their header, payload, and signature.",
  },
};

export default function JwtDecoderPage() {
  return <JwtDecoderClient />;
}
