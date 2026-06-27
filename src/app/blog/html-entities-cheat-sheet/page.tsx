import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTML Entities Cheat Sheet — Special Characters & Symbols | QuickKit",
  description:
    "Complete HTML entities reference. Copy-paste HTML special characters, symbols, accented letters, arrows, and math symbols. With entity names and numeric codes.",
  openGraph: {
    title: "HTML Entities Cheat Sheet — QuickKit",
    description: "Complete HTML entities reference with copy-paste special characters, symbols, and accented letters.",
    type: "article",
  },
};

export default function HTMLEntitiesCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "HTML Entities Cheat Sheet",
    description:
      "Complete HTML entities reference with special characters, symbols, accented letters, arrows, and math symbols.",
    datePublished: "2026-06-27",
    author: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "QuickKit",
      url: "https://quickkit-nine.vercel.app",
    },
  };

  const entities = {
    "Common HTML Characters": [
      { name: "Less Than", entity: "&lt;", code: "&#60;" },
      { name: "Greater Than", entity: "&gt;", code: "&#62;" },
      { name: "Ampersand", entity: "&amp;", code: "&#38;" },
      { name: "Quotation Mark", entity: "&quot;", code: "&#34;" },
      { name: "Apostrophe", entity: "&apos;", code: "&#39;" },
      { name: "Non-Breaking Space", entity: "&nbsp;", code: "&#160;" },
    ],
    "Currency Symbols": [
      { name: "Dollar Sign", entity: "&dollar;", code: "&#36;" },
      { name: "Euro Sign", entity: "&euro;", code: "&#8364;" },
      { name: "Pound Sign", entity: "&pound;", code: "&#163;" },
      { name: "Yen Sign", entity: "&yen;", code: "&#165;" },
      { name: "Cent Sign", entity: "&cent;", code: "&#162;" },
      { name: "Copyright", entity: "&copy;", code: "&#169;" },
      { name: "Registered", entity: "&reg;", code: "&#174;" },
      { name: "Trademark", entity: "&trade;", code: "&#8482;" },
    ],
    "Arrows": [
      { name: "Left Arrow", entity: "&larr;", code: "&#8592;" },
      { name: "Right Arrow", entity: "&rarr;", code: "&#8594;" },
      { name: "Up Arrow", entity: "&uarr;", code: "&#8593;" },
      { name: "Down Arrow", entity: "&darr;", code: "&#8595;" },
      { name: "Left Right Arrow", entity: "&harr;", code: "&#8596;" },
      { name: "Double Left", entity: "&lArr;", code: "&#8656;" },
      { name: "Double Right", entity: "&rArr;", code: "&#8658;" },
    ],
    "Math & Logic Symbols": [
      { name: "Multiply", entity: "&times;", code: "&#215;" },
      { name: "Divide", entity: "&divide;", code: "&#247;" },
      { name: "Plus/Minus", entity: "&plusmn;", code: "&#177;" },
      { name: "Not Equal", entity: "&ne;", code: "&#8800;" },
      { name: "Less/Equal", entity: "&le;", code: "&#8804;" },
      { name: "Greater/Equal", entity: "&ge;", code: "&#8805;" },
      { name: "Infinity", entity: "&infin;", code: "&#8734;" },
      { name: "Sum", entity: "&sum;", code: "&#8721;" },
      { name: "Square Root", entity: "&radic;", code: "&#8730;" },
      { name: "Pi", entity: "&pi;", code: "&#960;" },
    ],
    "Accented Letters (Latin-1)": [
      { name: "À", entity: "&Agrave;", code: "&#192;" },
      { name: "Á", entity: "&Aacute;", code: "&#193;" },
      { name: "Â", entity: "&Acirc;", code: "&#194;" },
      { name: "Ã", entity: "&Atilde;", code: "&#195;" },
      { name: "Ä", entity: "&Auml;", code: "&#196;" },
      { name: "Æ", entity: "&AElig;", code: "&#198;" },
      { name: "Ç", entity: "&Ccedil;", code: "&#199;" },
      { name: "È", entity: "&Egrave;", code: "&#200;" },
      { name: "É", entity: "&Eacute;", code: "&#201;" },
      { name: "Ê", entity: "&Ecirc;", code: "&#202;" },
      { name: "Ë", entity: "&Euml;", code: "&#203;" },
      { name: "Í", entity: "&Iacute;", code: "&#205;" },
      { name: "Ó", entity: "&Oacute;", code: "&#211;" },
      { name: "Ö", entity: "&Ouml;", code: "&#214;" },
      { name: "Ü", entity: "&Uuml;", code: "&#220;" },
      { name: "ñ", entity: "&ntilde;", code: "&#241;" },
      { name: "ß", entity: "&szlig;", code: "&#223;" },
    ],
    "Punctuation & Formatting": [
      { name: "Left Double Quote", entity: "&ldquo;", code: "&#8220;" },
      { name: "Right Double Quote", entity: "&rdquo;", code: "&#8221;" },
      { name: "Left Single Quote", entity: "&lsquo;", code: "&#8216;" },
      { name: "Right Single Quote", entity: "&rsquo;", code: "&#8217;" },
      { name: "Em Dash", entity: "&mdash;", code: "&#8212;" },
      { name: "En Dash", entity: "&ndash;", code: "&#8211;" },
      { name: "Ellipsis", entity: "&hellip;", code: "&#8230;" },
      { name: "Middle Dot", entity: "&middot;", code: "&#183;" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">HTML Entities Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">
              Developer Reference
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              HTML Entities Cheat Sheet
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every HTML entity you will ever need. Special characters, symbols, accented letters,
              arrows, and math symbols with both entity names and numeric codes. Copy-paste ready.
              Use our <Link href="/tools/html-to-text" className="text-indigo-600 hover:underline">HTML to Text converter</Link> to strip entities from markup.
            </p>
          </header>

          {/* Quick Reference */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Reference</h2>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600 mb-6">
              <p className="mb-2">
                <strong>Named entities</strong> use a descriptive name: <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;lt;</code> for &lt;, <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;gt;</code> for &gt;, <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;amp;</code> for &amp;
              </p>
              <p className="mb-2">
                <strong>Numeric entities</strong> use decimal: <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;#60;</code> or hexadecimal: <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;#x3C;</code>
              </p>
              <p>
                <strong>Must-use in HTML:</strong> <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&lt;</code>, <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&gt;</code>, and <code className="bg-white px-1.5 py-0.5 rounded text-indigo-600">&amp;</code> must always be encoded in HTML content.
              </p>
            </div>
          </section>

          {/* Entity Tables */}
          {Object.entries(entities).map(([category, items]) => (
            <section key={category} className="mb-10">
              <h2 className="text-xl font-bold text-slate-800 mb-4">{category}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">Character</th>
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">Entity</th>
                      <th className="text-left py-3 px-4 text-slate-500 font-medium">Numeric</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    {items.map((item) => (
                      <tr key={item.name} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-lg" dangerouslySetInnerHTML={{ __html: item.entity }} />
                        <td className="py-3 px-4">{item.name}</td>
                        <td className="py-3 px-4 font-mono text-indigo-600 text-xs">
                          <code className="bg-indigo-50 px-1.5 py-0.5 rounded">{item.entity}</code>
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-500 text-xs">
                          <code>{item.code}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Pattern</th>
                    <th className="text-left py-3 px-4 text-slate-500 font-medium">Code</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Line break in pre-formatted text</td>
                    <td className="py-3 px-4 font-mono text-xs">&amp;#10; or &amp;#xA;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Tab character</td>
                    <td className="py-3 px-4 font-mono text-xs">&amp;#9; or &amp;#x9;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Zero-width space (invisible)</td>
                    <td className="py-3 px-4 font-mono text-xs">&amp;#8203; or &amp;#x200B;</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4">Soft hyphen (word break hint)</td>
                    <td className="py-3 px-4 font-mono text-xs">&amp;shy; or &amp;#173;</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Non-breaking space (prevent wrap)</td>
                    <td className="py-3 px-4 font-mono text-xs">&amp;nbsp; or &amp;#160;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Related Guides */}
          <section className="border-t border-slate-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/blog/what-is-markdown"
                className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <span className="text-sm font-medium text-slate-800">What Is Markdown?</span>
                <span className="block text-xs text-slate-500 mt-1">Markdown vs HTML for formatting</span>
              </Link>
              <Link
                href="/tools/html-to-text"
                className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <span className="text-sm font-medium text-slate-800">HTML to Text Tool</span>
                <span className="block text-xs text-slate-500 mt-1">Strip HTML tags and entities</span>
              </Link>
              <Link
                href="/blog/json-cheat-sheet"
                className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <span className="text-sm font-medium text-slate-800">JSON Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">JSON syntax reference</span>
              </Link>
              <Link
                href="/blog/what-is-base64-encoding"
                className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <span className="text-sm font-medium text-slate-800">What Is Base64 Encoding?</span>
                <span className="block text-xs text-slate-500 mt-1">Encode and decode Base64 strings</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
