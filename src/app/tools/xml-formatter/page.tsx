import type { Metadata } from "next";
import XmlFormatterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "XML Formatter — Free Online Tool | QuickKit",
  description: "Format, validate, and minify XML data with proper indentation and error highlighting.",
  openGraph: {
    title: "XML Formatter — Free Online Tool | QuickKit",
    description: "Format, validate, and minify XML data with proper indentation and error highlighting.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "XML Formatter — Free Online Tool | QuickKit",
    description: "Format, validate, and minify XML data with proper indentation and error highlighting.",
  },
};

export default function XmlFormatterPage() {
  return <XmlFormatterClient />;
}
