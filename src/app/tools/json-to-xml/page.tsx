import type { Metadata } from "next";
import JsonToXmlClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JSON to XML Converter — Free Online Tool | QuickKit",
  description: "Convert JSON data to well-formatted XML with configurable root tag and indentation.",
  openGraph: {
    title: "JSON to XML Converter — Free Online Tool | QuickKit",
    description: "Convert JSON data to well-formatted XML with configurable root tag and indentation.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JSON to XML Converter — Free Online Tool | QuickKit",
    description: "Convert JSON data to well-formatted XML with configurable root tag and indentation.",
  },
};

export default function JsonToXmlPage() {
  return <JsonToXmlClient />;
}
