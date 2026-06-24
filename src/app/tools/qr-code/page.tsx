"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrCodePage() {
  const [text, setText] = useState("https://quickkit.dev");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);
  const canvasRef = useRef<HTMLDivElement>(null);

  const download = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">QR Code Generator</h1>
      <p className="text-slate-500 mb-8">Create QR codes from text or URLs and download as PNG.</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Text or URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            placeholder="Enter text or URL..."
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Foreground</label>
            <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="h-10 w-16 rounded border border-gray-300 cursor-pointer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Background</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-10 w-16 rounded border border-gray-300 cursor-pointer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            >
              <option value={128}>128px</option>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
            </select>
          </div>
        </div>

        {text && (
          <div className="flex flex-col items-center gap-4">
            <div ref={canvasRef} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <QRCodeCanvas value={text} size={size} fgColor={fgColor} bgColor={bgColor} />
            </div>
            <button
              onClick={download}
              className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
            >
              Download PNG
            </button>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What can I encode in a QR code?</h3>
            <p className="text-sm text-slate-600 mt-1">URLs, plain text, email addresses, phone numbers, WiFi credentials, and more. QR codes can store up to 4,296 alphanumeric characters.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What is the output format?</h3>
            <p className="text-sm text-slate-600 mt-1">The QR code is rendered as a PNG image that you can download. It's suitable for print and digital use.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Are the QR codes scannable?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. QR codes generated here follow the QR code specification and are fully compatible with all standard QR code scanners and smartphone cameras.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — QR Code Generator\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/qr-code\",\n      \"description\": \"Create QR codes from text or URLs and download as PNG.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
