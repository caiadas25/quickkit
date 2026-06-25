import type { Metadata } from "next";
import ColorConverterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Color Converter — Free Online Tool | QuickKit",
  description: "Convert between HEX, RGB, and HSL color formats with live preview.",
  openGraph: {
    title: "Color Converter — Free Online Tool | QuickKit",
    description: "Convert between HEX, RGB, and HSL color formats with live preview.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Color Converter — Free Online Tool | QuickKit",
    description: "Convert between HEX, RGB, and HSL color formats with live preview.",
  },
};

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}
