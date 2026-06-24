export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
}

export const tools: Tool[] = [
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON data with line numbers and error highlighting.",
    category: "Developer",
    icon: "🔧",
    href: "/tools/json-formatter",
  },
  {
    id: "base64",
    title: "Base64 Encode/Decode",
    description: "Encode text to Base64 or decode Base64 strings back to plain text.",
    category: "Developer",
    icon: "🔐",
    href: "/tools/base64",
  },
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate random UUID v4 identifiers instantly. Batch generate up to 100.",
    category: "Developer",
    icon: "🆔",
    href: "/tools/uuid-generator",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "Create strong, secure passwords with customizable length and character options.",
    category: "Security",
    icon: "🔑",
    href: "/tools/password-generator",
  },
  {
    id: "word-counter",
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in real-time.",
    category: "Productivity",
    icon: "📝",
    href: "/tools/word-counter",
  },
  {
    id: "color-converter",
    title: "Color Converter",
    description: "Convert between HEX, RGB, and HSL color formats with live preview.",
    category: "Design",
    icon: "🎨",
    href: "/tools/color-converter",
  },
  {
    id: "lorem-ipsum",
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for designs, mockups, and prototypes.",
    category: "Productivity",
    icon: "📄",
    href: "/tools/lorem-ipsum",
  },
  {
    id: "hash-generator",
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    category: "Security",
    icon: "#️⃣",
    href: "/tools/hash-generator",
  },
  {
    id: "qr-code",
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs and download as PNG.",
    category: "Utility",
    icon: "📱",
    href: "/tools/qr-code",
  },
  {
    id: "markdown-preview",
    title: "Markdown Preview",
    description: "Write Markdown and see a live preview side-by-side.",
    category: "Developer",
    icon: "✍️",
    href: "/tools/markdown-preview",
  },
];
