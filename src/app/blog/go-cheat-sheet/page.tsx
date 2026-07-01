import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Go (Golang) Cheat Sheet — Syntax, Concurrency & Common Patterns | QuickKit",
  description:
    "Complete Go cheat sheet with copy-paste code. Variables, structs, interfaces, goroutines, channels, error handling, and the most common standard library packages.",
  openGraph: {
    title: "Go (Golang) Cheat Sheet — QuickKit",
    description: "Every Go feature you use daily, with copy-paste examples.",
    type: "article",
  },
};

export default function GoCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Go (Golang) Cheat Sheet",
    description: "Complete Go cheat sheet covering syntax, concurrency, error handling, and standard library.",
    datePublished: "2026-07-01",
    author: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
    publisher: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Go Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Go (Golang) Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every Go feature you use daily, with copy-paste examples. Variables, structs, interfaces, goroutines, channels, error handling, and standard library essentials.
            </p>
          </header>

          {/* Variables & Types */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Variables &amp; Types</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Variable declaration
var name string = "Alice"
var age int = 30

// Short declaration (most common)
name := "Alice"
age := 30
height := 5.9
isActive := true

// Multiple declarations
var (
    x int = 10
    y int = 20
)

// Constants
const Pi = 3.14159
const StatusOK = 200

// Zero values
var i int      // 0
var f float64  // 0.0
var s string   // ""
var b bool     // false
`}</pre>
            </div>
          </section>

          {/* Structs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Structs</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Struct definition
type User struct {
    Name  string
    Email string
    Age   int
}

// Create instance
user := User{Name: "Alice", Email: "alice@example.com", Age: 30}

// Anonymous struct
point := struct{ X, Y int }{X: 1, Y: 2}

// Method on struct
func (u User) Greet() string {
    return "Hello, " + u.Name
}

// Pointer receiver (can modify)
func (u *User) SetAge(age int) {
    u.Age = age
}

// Embedded struct
type Admin struct {
    User
    Role string
}

admin := Admin{
    User: User{Name: "Bob", Email: "bob@example.com"},
    Role: "admin",
}`}</pre>
            </div>
          </section>

          {/* Interfaces */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Interfaces</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Interface definition
type Writer interface {
    Write(p []byte) (n int, err error)
}

// Any type that implements Write satisfies Writer
// No "implements" keyword needed (implicit)

// Interface{} is the empty interface (any type)
func printAny(v interface{}) {
    fmt.Printf("%v\\n", v)
}

// Type assertion
var w Writer = os.Stdout
f, ok := w.(*os.File)
if ok {
    fmt.Println("It's a file!")
}

// Type switch
switch v := w.(type) {
case *os.File:
    fmt.Println("File:", v.Name())
case *bytes.Buffer:
    fmt.Println("Buffer:", v.Len())
default:
    fmt.Println("Unknown type")
}

// Empty interface as map value
data := map[string]interface{}{
    "name": "Alice",
    "age":  30,
}`}</pre>
            </div>
          </section>

          {/* Slices & Maps */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Slices &amp; Maps</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Slices
nums := []int{1, 2, 3, 4, 5}
nums = append(nums, 6)

// Make slice with length and capacity
buf := make([]byte, 0, 1024)

// Subslice
sub := nums[1:3]  // [2, 3]

// Copy slice
dst := make([]int, len(nums))
copy(dst, nums)

// Maps
m := map[string]int{
    "alice": 30,
    "bob":   25,
}

// Check if key exists
age, ok := m["alice"]
if ok {
    fmt.Println(age)
}

// Delete key
delete(m, "bob")

// Iterate
for key, value := range m {
    fmt.Printf("%s: %d\\n", key, value)
}

// Iterate slice with index
for i, v := range nums {
    fmt.Printf("[%d] = %d\\n", i, v)
}`}</pre>
            </div>
          </section>

          {/* Goroutines & Channels */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Goroutines &amp; Channels</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Goroutine
go func() {
    fmt.Println("Hello from goroutine")
}()

// Channel (unbuffered)
ch := make(chan int)
go func() { ch <- 42 }()
val := <-ch

// Buffered channel
ch := make(chan string, 10)
ch <- "hello"

// Close channel
close(ch)

// Range over channel
for msg := range ch {
    fmt.Println(msg)
}

// Select (multiplex channels)
select {
case msg := <-ch1:
    fmt.Println("ch1:", msg)
case msg := <-ch2:
    fmt.Println("ch2:", msg)
case <-time.After(1 * time.Second):
    fmt.Println("timeout")
}

// WaitGroup
var wg sync.WaitGroup
for i := 0; i < 5; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Println("worker", id)
    }(i)
}
wg.Wait()

// Mutex
var mu sync.Mutex
var count int

func increment() {
    mu.Lock()
    defer mu.Unlock()
    count++
}`}</pre>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Error Handling</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Basic error handling
result, err := doSomething()
if err != nil {
    log.Fatal(err)
}

// Custom error
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return e.Field + ": " + e.Message
}

// Creating errors
return errors.New("something went wrong")
return fmt.Errorf("user %d not found", id)
return &ValidationError{Field: "email", Message: "invalid"}

// errors.Is and errors.As (Go 1.13+)
if errors.Is(err, sql.ErrNoRows) {
    fmt.Println("no rows")
}

var ve *ValidationError
if errors.As(err, &ve) {
    fmt.Println("validation:", ve.Field)
}

// Error wrapping
if err != nil {
    return fmt.Errorf("processing failed: %w", err)
}

// Panic and recover
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered: %v", r)
        }
    }()
    return a / b, nil
}`}</pre>
            </div>
          </section>

          {/* HTTP Server */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">HTTP Server &amp; Client</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Simple HTTP server
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
})
log.Fatal(http.ListenAndServe(":8080", nil))

// JSON response
http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
})

// HTTP client
resp, err := http.Get("https://api.example.com/data")
if err != nil {
    log.Fatal(err)
}
defer resp.Body.Close()

body, err := io.ReadAll(resp.Body)

// POST with JSON
data := map[string]string{"name": "Alice"}
jsonBody, _ := json.Marshal(data)
resp, err := http.Post(
    "https://api.example.com/users",
    "application/json",
    bytes.NewBuffer(jsonBody),
)

// Request with context
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()
req, _ := http.NewRequestWithContext(ctx, "GET", "https://api.example.com", nil)
resp, err := http.DefaultClient.Do(req)`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Function options pattern
type Option func(*Server)

func WithPort(port int) Option {
    return func(s *Server) { s.port = port }
}

func NewServer(opts ...Option) *Server {
    s := &Server{port: 8080}
    for _, opt := range opts {
        opt(s)
    }
    return s
}

// Builder pattern
type Query struct {
    table  string
    where  string
    limit  int
}

func (q *Query) Where(cond string) *Query {
    q.where = cond
    return q
}

func (q *Query) Limit(n int) *Query {
    q.limit = n
    return q
}

// Usage: q := NewQuery("users").Where("age > 18").Limit(10)

// Context cancellation
func fetchData(ctx context.Context) ([]byte, error) {
    req, _ := http.NewRequestWithContext(ctx, "GET", "https://api.example.com", nil)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()
    return io.ReadAll(resp.Body)
}

// Deferred file close
func processFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close()

    scanner := bufio.NewScanner(f)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
    return scanner.Err()
}`}</pre>
            </div>
          </section>

          {/* Related Cheat Sheets */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Cheat Sheets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/blog/python-cheat-sheet"
                className="p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="font-medium text-slate-800">Python Cheat Sheet</span>
                <p className="text-slate-500 mt-1">Variables, lists, dicts, classes, and standard library.</p>
              </Link>
              <Link
                href="/blog/typescript-cheat-sheet"
                className="p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="font-medium text-slate-800">TypeScript Cheat Sheet</span>
                <p className="text-slate-500 mt-1">Types, generics, utility types, and common patterns.</p>
              </Link>
              <Link
                href="/blog/rust-cheat-sheet"
                className="p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="font-medium text-slate-800">Rust Cheat Sheet</span>
                <p className="text-slate-500 mt-1">Ownership, borrowing, traits, and common patterns.</p>
              </Link>
              <Link
                href="/blog/docker-cheat-sheet"
                className="p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="font-medium text-slate-800">Docker Cheat Sheet</span>
                <p className="text-slate-500 mt-1">Containers, images, compose, and networking.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
