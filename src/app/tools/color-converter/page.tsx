"use client";

import { useState, useMemo } from "react";
import CopyButton from "@/components/CopyButton";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hexToComplementary(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [];
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hues = [(hsl.h + 30) % 360, (hsl.h + 60) % 360, (hsl.h + 180) % 360, (hsl.h + 210) % 360, (hsl.h + 330) % 360];
  return hues.map((h) => {
    const s = hsl.s, l = hsl.l;
    const a = s / 100;
    const b = l / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const c = b - a * Math.min(b, 1 - b) * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * c).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  });
}

export default function ColorConverterPage() {
  const [hex, setHex] = useState("#4F46E5");

  const rgb = useMemo(() => hexToRgb(hex), [hex]);
  const hsl = useMemo(() => (rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null), [rgb]);
  const palette = useMemo(() => hexToComplementary(hex), [hex]);

  const isValid = rgb !== null;
  const rgbStr = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "";
  const hslStr = hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "";

  const handleHexChange = (val: string) => {
    const cleaned = val.startsWith("#") ? val : `#${val}`;
    setHex(cleaned);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Color Converter</h1>
      <p className="text-slate-500 mb-8">Convert between HEX, RGB, and HSL color formats with live preview.</p>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">HEX Color</label>
              <input
                type="text"
                value={hex}
                onChange={(e) => handleHexChange(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="#4F46E5"
                maxLength={7}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pick a color</label>
              <input
                type="color"
                value={isValid ? hex : "#000000"}
                onChange={(e) => setHex(e.target.value)}
                className="h-10 w-20 rounded-lg border border-gray-300 cursor-pointer"
              />
            </div>

            {isValid && (
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2">
                  <span className="font-mono text-sm text-slate-700">{hex}</span>
                  <CopyButton text={hex} />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2">
                  <span className="font-mono text-sm text-slate-700">{rgbStr}</span>
                  <CopyButton text={rgbStr} />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-slate-50 px-4 py-2">
                  <span className="font-mono text-sm text-slate-700">{hslStr}</span>
                  <CopyButton text={hslStr} />
                </div>
              </div>
            )}
          </div>

          <div className="flex-shrink-0">
            <div
              className="w-40 h-40 rounded-xl border border-gray-200 shadow-inner"
              style={{ backgroundColor: isValid ? hex : "#ccc" }}
            />
          </div>
        </div>

        {palette.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-slate-700 mb-2">Harmonious Palette</h3>
            <div className="flex gap-2 flex-wrap">
              {palette.map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-lg border border-gray-200" style={{ backgroundColor: color }} />
                  <span className="font-mono text-xs text-slate-500">{color}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What color formats are supported?</h3>
            <p className="text-sm text-slate-600 mt-1">This tool converts between HEX (#4F46E5), RGB (rgb(79, 70, 229)), and HSL (hsl(245, 75%, 59%)) formats.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What are harmonious colors?</h3>
            <p className="text-sm text-slate-600 mt-1">These are colors that are adjacent or opposite on the color wheel, creating visually pleasing combinations for design work.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I copy colors for use in CSS?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes! Each format can be copied with one click and pasted directly into your CSS, Tailwind config, or design tool.</p>
          </div>
        </div>
      </div>
    </>
  );
}
