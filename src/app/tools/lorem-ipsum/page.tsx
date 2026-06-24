"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "perspiciatis", "unde",
  "omnis", "iste", "natus", "error", "voluptatem", "accusantium", "doloremque",
  "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
  "inventore", "veritatis", "quasi", "architecto", "beatae", "vitae", "dicta",
];

function randomWord(): string {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateSentence(): string {
  const len = 8 + Math.floor(Math.random() * 12);
  const words = Array.from({ length: len }, randomWord);
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(): string {
  const sentences = 4 + Math.floor(Math.random() * 4);
  return Array.from({ length: sentences }, generateSentence).join(" ");
}

export default function LoremIpsumPage() {
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  const generate = () => {
    let result = "";
    if (type === "paragraphs") {
      result = Array.from({ length: count }, generateParagraph).join("\n\n");
    } else if (type === "sentences") {
      result = Array.from({ length: count }, generateSentence).join(" ");
    } else {
      const words = Array.from({ length: count }, randomWord);
      words[0] = words[0][0].toUpperCase() + words[0].slice(1);
      result = words.join(" ") + ".";
    }
    setOutput(result);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Lorem Ipsum Generator</h1>
      <p className="text-slate-500 mb-8">Generate placeholder text for designs, mockups, and prototypes.</p>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Count</label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
              className="w-24 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>
          <button
            onClick={generate}
            className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            Generate
          </button>
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">Generated Text</label>
              <CopyButton text={output} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 max-h-80 overflow-y-auto text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              {output}
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-800">What is Lorem Ipsum?</h3>
            <p className="text-sm text-slate-600 mt-1">Lorem Ipsum is placeholder text used in the printing and typesetting industry since the 1500s. It helps visualize the layout of a page without relying on meaningful content.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Can I use this in commercial projects?</h3>
            <p className="text-sm text-slate-600 mt-1">Yes. Lorem Ipsum text has no copyright restrictions and can be used freely in any project.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Is this real Latin?</h3>
            <p className="text-sm text-slate-600 mt-1">It is derived from Latin but is not meaningful Latin prose. It was popularized by a 1960s typesetting specimen book.</p>
          </div>
        </div>
      </div>
    </>
  );
}
