"use client";

import { useState, useCallback } from "react";
import CopyButton from "@/components/CopyButton";

function generatePassword(options: {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}): string {
  let chars = "";
  if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (options.numbers) chars += "0123456789";
  if (options.symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";
  const arr = new Uint32Array(options.length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (v) => chars[v % chars.length]).join("");
}

function getStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { score, label: "Weak", color: "bg-red-500" };
  if (score <= 4) return { score, label: "Medium", color: "bg-yellow-500" };
  return { score, label: "Strong", color: "bg-green-500" };
}

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = useCallback(() => {
    setPassword(generatePassword({ length, uppercase, lowercase, numbers, symbols }));
  }, [length, uppercase, lowercase, numbers, symbols]);

  const strength = password ? getStrength(password) : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Password Generator</h1>
      <p className="text-slate-500 mb-8">Create strong, secure passwords with customizable options.</p>

      <div className="space-y-6">
        {password && (
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-lg text-slate-800 break-all">{password}</span>
              <CopyButton text={password} />
            </div>
            {strength && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-600">Strength</span>
                  <span className={`text-sm font-semibold ${strength.label === "Strong" ? "text-green-600" : strength.label === "Medium" ? "text-yellow-600" : "text-red-600"}`}>
                    {strength.label}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${strength.color} h-2 rounded-full transition-all duration-300`} style={{ width: `${(strength.score / 6) * 100}%` }} />
                </div>
              </div>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Length: {length}
          </label>
          <input
            type="range"
            min={8}
            max={128}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>8</span>
            <span>128</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Uppercase (A-Z)", value: uppercase, setter: setUppercase },
            { label: "Lowercase (a-z)", value: lowercase, setter: setLowercase },
            { label: "Numbers (0-9)", value: numbers, setter: setNumbers },
            { label: "Symbols (!@#$...)", value: symbols, setter: setSymbols },
          ].map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={opt.value}
                onChange={(e) => opt.setter(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-slate-700">{opt.label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={generate}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
        >
          Generate Password
        </button>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">How secure are generated passwords?</h3>
            <p className="text-sm text-slate-600 mt-1">Passwords are generated using the Web Crypto API's cryptographically secure random number generator, making them suitable for high-security applications.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">What length should I use?</h3>
            <p className="text-sm text-slate-600 mt-1">We recommend at least 16 characters for strong security. For critical accounts, 20+ characters is ideal.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Are passwords stored anywhere?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All generation happens in your browser. Passwords are never sent to any server or stored anywhere.</p>
          </div>
        </div>
      </div>
    </>
  );
}
