"use client";

import { useState, useMemo } from "react";

interface Stats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: string;
  speakingTime: string;
}

function getStats(text: string): Stats {
  const trimmed = text.trim();
  if (!trimmed) {
    return { words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, readingTime: "0 min", speakingTime: "0 min" };
  }

  const words = trimmed.split(/\s+/).filter(Boolean).length;
  const characters = trimmed.length;
  const charactersNoSpaces = trimmed.replace(/\s/g, "").length;
  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  const paragraphs = trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 1;

  const readingMinutes = Math.ceil(words / 200);
  const speakingMinutes = Math.ceil(words / 150);

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime: readingMinutes < 1 ? "< 1 min" : `${readingMinutes} min`,
    speakingTime: speakingMinutes < 1 ? "< 1 min" : `${speakingMinutes} min`,
  };
}

export default function WordCounterPage() {
  const [text, setText] = useState("");
  const stats = useMemo(() => getStats(text), [text]);

  const items = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading Time", value: stats.readingTime },
    { label: "Speaking Time", value: stats.speakingTime },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Word Counter</h1>
      <p className="text-slate-500 mb-8">Count words, characters, sentences, and paragraphs in real-time.</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Paste or type your text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-48 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-y"
            placeholder="Start typing or paste text here..."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">{item.value}</div>
              <div className="text-sm text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">How is reading time calculated?</h3>
            <p className="text-sm text-slate-600 mt-1">Based on an average reading speed of 200 words per minute, which is typical for adult readers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">How is speaking time calculated?</h3>
            <p className="text-sm text-slate-600 mt-1">Based on an average speaking rate of 150 words per minute, suitable for presentations and speeches.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is my text stored?</h3>
            <p className="text-sm text-slate-600 mt-1">No. All counting happens locally in your browser. Text is never sent to any server.</p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"SoftwareApplication\",\n      \"name\": \"QuickKit — Word Counter\",\n      \"operatingSystem\": \"Any\",\n      \"applicationCategory\": \"DeveloperApplication\",\n      \"url\": \"https://quickkit-nine.vercel.app/tools/word-counter\",\n      \"description\": \"Count words, characters, sentences, and paragraphs in real-time.\",\n      \"offers\": {\n            \"@type\": \"Offer\",\n            \"price\": \"0\",\n            \"priceCurrency\": \"USD\"\n      }\n}",
        }}
      />
    </>
  );
}
