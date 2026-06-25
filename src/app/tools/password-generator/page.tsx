import type { Metadata } from "next";
import PasswordGeneratorClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Password Generator — Free Online Tool | QuickKit",
  description: "Create strong, secure passwords with customizable length and character options.",
  openGraph: {
    title: "Password Generator — Free Online Tool | QuickKit",
    description: "Create strong, secure passwords with customizable length and character options.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Password Generator — Free Online Tool | QuickKit",
    description: "Create strong, secure passwords with customizable length and character options.",
  },
};

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}
