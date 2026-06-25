import type { Metadata } from "next";
import LoremIpsumClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free Online Tool | QuickKit",
  description: "Generate placeholder text for designs, mockups, and prototypes.",
  openGraph: {
    title: "Lorem Ipsum Generator — Free Online Tool | QuickKit",
    description: "Generate placeholder text for designs, mockups, and prototypes.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Lorem Ipsum Generator — Free Online Tool | QuickKit",
    description: "Generate placeholder text for designs, mockups, and prototypes.",
  },
};

export default function LoremIpsumPage() {
  return <LoremIpsumClient />;
}
