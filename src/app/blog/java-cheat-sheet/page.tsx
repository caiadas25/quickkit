import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Java Cheat Sheet — Syntax, Features & Common Patterns | QuickKit",
  description:
    "The complete Java cheat sheet. Variables, collections, streams, lambdas, multithreading, and common patterns. Every Java feature with copy-paste examples for backend development.",
  openGraph: {
    title: "Java Cheat Sheet — Every Feature Explained",
    description: "Variables, collections, streams, lambdas, and multithreading. Copy-paste ready.",
    type: "article",
  },
};

interface JavaSection {
  title: string;
  example: string;
}

const sections: JavaSection[] = [
  {
    title: "Variables & Types",
    example: `// Primitive types\nint age = 30;\ndouble price = 19.99;\nboolean active = true;\nchar grade = 'A';\nlong bigNumber = 123456789L;\nfloat pi = 3.14f;\nbyte b = 127;\nshort s = 32000;\n\n// Reference types\nString name = "Alice";\nInteger count = 42;      // wrapper class\nvar list = List.of(1, 2); // local variable type inference\n\n// Constants\nfinal double TAX_RATE = 0.08;\nstatic final String APP_NAME = "MyApp";`,
  },
  {
    title: "Collections",
    example: `import java.util.*;\n\n// List (ordered, allows duplicates)\nList<String> names = new ArrayList<>();\nnames.add("Alice");\nnames.add("Bob");\nnames.get(0);           // "Alice"\nnames.size();           // 2\n\n// Set (unique elements)\nSet<Integer> ids = new HashSet<>();\nids.add(1);\nids.contains(1);        // true\n\n// Map (key-value pairs)\nMap<String, Integer> ages = new HashMap<>();\nages.put("Alice", 30);\nages.get("Alice");      // 30\nages.containsKey("Bob"); // false\n\n// Immutable collections\nList.of(1, 2, 3);       // unmodifiable\nMap.of("a", 1, "b", 2);`,
  },
  {
    title: "Streams",
    example: `import java.util.stream.*;\n\nList<String> names = List.of("Alice", "Bob", "Charlie");\n\n// Filter\nnames.stream()\n  .filter(n -> n.length() > 3)\n  .collect(Collectors.toList());  // [Alice, Charlie]\n\n// Map\nnames.stream()\n  .map(String::toUpperCase)\n  .collect(Collectors.toList());  // [ALICE, BOB, CHARLIE]\n\n// Reduce\nint sum = IntStream.range(1, 11)\n  .reduce(0, Integer::sum);  // 55\n\n// Collect to Map\nMap<String, Integer> lengths = names.stream()\n  .collect(Collectors.toMap(\n    n -> n,\n    String::length\n  ));  // {Alice=5, Bob=3, Charlie=7}\n\n// Chaining\nnames.stream()\n  .filter(n -> n.startsWith("A"))\n  .map(String::toUpperCase)\n  .findFirst()            // Optional[ALICE]`,
  },
  {
    title: "Lambdas & Functional Interfaces",
    example: `// Lambda expression\n(x, y) -> x + y\n\n// Method reference\nString::length\nlist::add\nMath::max\n\n// Common functional interfaces\nPredicate<String> isLong = s -> s.length() > 5;\nFunction<String, Integer> toLen = String::length;\nConsumer<String> print = System.out::println;\nSupplier<List<String>> factory = ArrayList::new;\n\n// Optional\nOptional.ofNullable(name)\n  .ifPresent(n -> System.out.println(n));\nString result = Optional.ofNullable(name)\n  .orElse("default");`,
  },
  {
    title: "Classes & OOP",
    example: `public class User {\n    private final String name;\n    private int age;\n\n    // Constructor\n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Getter\n    public String getName() { return name; }\n\n    // Setter\n    public void setAge(int age) { this.age = age; }\n\n    // Static factory\n    public static User of(String name) {\n        return new User(name, 0);\n    }\n\n    @Override\n    public String toString() {\n        return "User{name=" + name + "}";\n    }\n}\n\n// Inheritance\npublic class Admin extends User {\n    public void deleteUser(User user) { /* ... */ }\n}\n\n// Interface\npublic interface Repository<T> {\n    T findById(String id);\n    List<T> findAll();\n    void save(T entity);\n}`,
  },
  {
    title: "Exception Handling",
    example: `// Try-catch\ntry {\n    String data = readFile("data.txt");\n} catch (FileNotFoundException e) {\n    System.err.println("File not found: " + e.getMessage());\n} catch (IOException e) {\n    System.err.println("IO error: " + e.getMessage());\n} finally {\n    // Always runs\n}\n\n// Try-with-resources\ntry (var reader = new BufferedReader(new FileReader("file.txt"))) {\n    String line = reader.readLine();\n} // auto-closed\n\n// Custom exceptions\npublic class ValidationException extends Exception {\n    public ValidationException(String message) {\n        super(message);\n    }\n}\n\n// Throwing\nif (input == null) {\n    throw new IllegalArgumentException("Input cannot be null");\n}`,
  },
  {
    title: "Multithreading",
    example: `// Thread\nThread t = new Thread(() -> {\n    System.out.println("Hello from thread");\n});\nt.start();\nt.join();\n\n// ExecutorService\nvar executor = Executors.newFixedThreadPool(4);\nexecutor.submit(() -> doWork());\nexecutor.shutdown();\n\n// CompletableFuture\nCompletableFuture.supplyAsync(() -> fetchData())\n  .thenApply(data -> process(data))\n  .thenAccept(result -> System.out.println(result))\n  .join();\n\n// synchronized\npublic synchronized void criticalSection() {\n    // thread-safe code\n}`,
  },
  {
    title: "Common Patterns",
    example: `// Builder pattern\nUser user = User.builder()\n    .name("Alice")\n    .age(30)\n    .build();\n\n// Singleton\npublic class Config {\n    private static final Config INSTANCE = new Config();\n    public static Config getInstance() { return INSTANCE; }\n}\n\n// Null check with Optional\nOptional.ofNullable(user)\n    .map(User::getName)\n    .orElse("Anonymous");\n\n// Stream grouping\nMap<String, List<User>> byCity = users.stream()\n  .collect(Collectors.groupingBy(User::getCity));\n\n// Pattern matching (Java 17+)\nString desc = switch (obj) {\n    case Integer i -> "int: " + i;\n    case String s  -> "str: " + s;\n    default        -> "other";\n};`,
  },
];

export default function JavaCheatSheet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Java Cheat Sheet
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Java powers millions of applications from Android to enterprise backend systems. This cheat sheet covers variables, collections, streams, lambdas, OOP, multithreading, and modern Java 17+ features with copy-paste examples.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-3">{section.title}</h2>
              <pre className="bg-slate-50 border border-slate-200 rounded p-4 text-sm overflow-x-auto font-mono text-slate-700 whitespace-pre-wrap">
                {section.example}
              </pre>
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Java Quick Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Java 17+ Features</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">switch</code> — pattern matching</li>
                <li><code className="bg-slate-100 px-1 rounded">record</code> — immutable data classes</li>
                <li><code className="bg-slate-100 px-1 rounded">sealed</code> — restricted inheritance</li>
                <li><code className="bg-slate-100 px-1 rounded">text blocks</code> — multi-line strings</li>
                <li><code className="bg-slate-100 px-1 rounded">var</code> — local variable inference</li>
                <li><code className="bg-slate-100 px-1 rounded">stream.toList()</code> — shortcut</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Common Libraries</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li><code className="bg-slate-100 px-1 rounded">Lombok</code> — boilerplate reduction</li>
                <li><code className="bg-slate-100 px-1 rounded">JUnit 5</code> — testing</li>
                <li><code className="bg-slate-100 px-1 rounded">Jackson</code> — JSON parsing</li>
                <li><code className="bg-slate-100 px-1 rounded">SLF4J</code> — logging facade</li>
                <li><code className="bg-slate-100 px-1 rounded">Guava</code> — utility functions</li>
                <li><code className="bg-slate-100 px-1 rounded">Spring Boot</code> — web framework</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Cheat Sheets</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/kotlin-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Kotlin Cheat Sheet →
            </Link>
            <Link href="/blog/python-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Python Cheat Sheet →
            </Link>
            <Link href="/blog/javascript-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              JavaScript Cheat Sheet →
            </Link>
            <Link href="/blog/typescript-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              TypeScript Cheat Sheet →
            </Link>
            <Link href="/blog/go-cheat-sheet" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
              Go Cheat Sheet →
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Java Cheat Sheet — Syntax, Features & Common Patterns",
            description:
              "Complete Java cheat sheet with variables, collections, streams, lambdas, OOP, and multithreading. Copy-paste examples for backend development.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
          }),
        }}
      />
    </div>
  );
}
