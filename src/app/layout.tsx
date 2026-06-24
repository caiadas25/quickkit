import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickKit — Free Online Developer Tools",
  description:
    "Free online developer and productivity tools. Format JSON, generate UUIDs, convert colors, create QR codes, and more — fast, no signup required.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "QuickKit — Free Online Developer Tools",
    description:
      "Free online developer and productivity tools. Format JSON, generate UUIDs, convert colors, create QR codes, and more — fast, no signup required.",
    url: "https://quickkit-nine.vercel.app",
    siteName: "QuickKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickKit — Free Online Developer Tools",
    description:
      "Free online developer and productivity tools. Format JSON, generate UUIDs, convert colors, create QR codes, and more — fast, no signup required.",
  },
  metadataBase: new URL("https://quickkit-nine.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
