import type { Metadata } from "next";
import TimestampConverterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Timestamp Converter — Free Online Tool | QuickKit",
  description: "Convert between Unix timestamps, ISO 8601, RFC 2822, and relative time formats.",
  openGraph: {
    title: "Timestamp Converter — Free Online Tool | QuickKit",
    description: "Convert between Unix timestamps, ISO 8601, RFC 2822, and relative time formats.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Timestamp Converter — Free Online Tool | QuickKit",
    description: "Convert between Unix timestamps, ISO 8601, RFC 2822, and relative time formats.",
  },
};

export default function TimestampConverterPage() {
  return <TimestampConverterClient />;
}
