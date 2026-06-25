import type { Metadata } from "next";
import QrCodeClient from "./ToolClient";

export const metadata: Metadata = {
  title: "QR Code Generator — Free Online Tool | QuickKit",
  description: "Create QR codes from text or URLs and download as PNG.",
  openGraph: {
    title: "QR Code Generator — Free Online Tool | QuickKit",
    description: "Create QR codes from text or URLs and download as PNG.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "QR Code Generator — Free Online Tool | QuickKit",
    description: "Create QR codes from text or URLs and download as PNG.",
  },
};

export default function QrCodePage() {
  return <QrCodeClient />;
}
