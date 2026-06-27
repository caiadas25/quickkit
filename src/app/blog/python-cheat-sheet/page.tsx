import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Python Cheat Sheet — Syntax, Libraries & Common Patterns | QuickKit",
  description:
    "Complete Python cheat sheet with copy-paste code. Variables, lists, dicts, classes, comprehensions, decorators, and the most common standard library modules.",
  openGraph: {
    title: "Python Cheat Sheet — QuickKit",
    description: "Every Python feature you use daily, with copy-paste examples.",
    type: "article",
  },
};

export default function PythonCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Python Cheat Sheet",
    description: "Complete Python cheat sheet covering syntax, data structures, OOP, and standard library.",
    datePublished: "2026-06-27",
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
          <span className="text-slate-500">Python Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Python Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every Python feature you use daily, with copy-paste examples. Variables, lists, dictionaries, classes, comprehensions, and standard library essentials.
            </p>
          </header>

          {/* Variables & Types */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Variables &amp; Types</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Dynamic typing — no type declarations needed
name = "Alice"           # str
age = 30                 # int
height = 5.9             # float
is_active = True         # bool
data = None              # NoneType

# Type checking
type(name)               # <class 'str'>
isinstance(age, int)     # True

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0

# f-strings (formatted string literals)
greeting = f"Hello, {name}! You are {age} years old."
pi_approx = f"Pi is approximately {3.14159:.2f}"`}</pre>
            </div>
          </section>

          {/* Collections */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Lists</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Create
fruits = ["apple", "banana", "cherry"]
numbers = list(range(1, 11))     # [1, 2, ..., 10]

# Access & slice
first = fruits[0]                # "apple"
last = fruits[-1]                # "cherry"
subset = fruits[1:3]             # ["banana", "cherry"]

# Modify
fruits.append("date")            # Add to end
fruits.insert(1, "blueberry")    # Insert at index 1
fruits.remove("banana")          # Remove first occurrence
popped = fruits.pop()            # Remove & return last
fruits.sort()                    # Sort in place
fruits.reverse()                 # Reverse in place

# List comprehension
squares = [x**2 for x in range(10)]           # [0,1,4,9,16,25,36,49,64,81]
evens = [x for x in range(20) if x % 2 == 0]  # [0,2,4,...,18]
words = ["hello", "world"]
upper = [w.upper() for w in words]            # ["HELLO", "WORLD"]`}</pre>
            </div>
          </section>

          {/* Dictionaries */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Dictionaries</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Create
person = {"name": "Alice", "age": 30, "active": True}
scores = dict(math=95, science=88)

# Access
name = person["name"]               # "Alice"
safe = person.get("email", "N/A")   # "N/A" (no KeyError)

# Modify
person["age"] = 31
person["email"] = "alice@example.com"
del person["active"]

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Iterate
for key, value in person.items():
    print(f"{key}: {value}")

# Merge (Python 3.9+)
merged = {"a": 1} | {"b": 2}`}</pre>
            </div>
          </section>

          {/* Control Flow */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Control Flow</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# if / elif / else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

# Ternary
status = "adult" if age >= 18 else "minor"

# for loop
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

# enumerate
for idx, val in enumerate(["a", "b", "c"]):
    print(f"{idx}: {val}")

# while loop
count = 0
while count < 5:
    count += 1

# match (Python 3.10+)
match command:
    case "quit":
        exit()
    case _:
        print("Unknown")`}</pre>
            </div>
          </section>

          {/* Functions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Functions</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Basic function
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Default arguments
def connect(host, port=5432, ssl=False):
    ...

# *args and **kwargs
def flexible(*args, **kwargs):
    print(args)    # tuple of positional args
    print(kwargs)  # dict of keyword args

# Lambda
square = lambda x: x ** 2

# Map, filter
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Decorator pattern
import functools
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.4f}s")
        return result
    return wrapper`}</pre>
            </div>
          </section>

          {/* Classes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Classes &amp; OOP</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Basic class
class Dog:
    def __init__(self, name: str, breed: str):
        self.name = name
        self.breed = breed

    def bark(self) -> str:
        return f"{self.name} says Woof!"

# Inheritance
class Puppy(Dog):
    def bark(self) -> str:
        return f"{self.name} says yap!"

# dataclass (Python 3.7+)
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x)**2 + (self.y - other.y)**2) ** 0.5

p1 = Point(0, 0)
p2 = Point(3, 4)
print(p1.distance_to(p2))  # 5.0`}</pre>
            </div>
          </section>

          {/* File I/O */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">File I/O &amp; Error Handling</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Read file
with open("data.txt", "r") as f:
    content = f.read()           # entire file as string
    lines = f.readlines()        # list of lines

# Write file
with open("output.txt", "w") as f:
    f.write("Hello, world!\\n")

# Append
with open("log.txt", "a") as f:
    f.write("new entry\\n")

# JSON
import json
data = {"users": [{"name": "Alice"}]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    loaded = json.load(f)

# try / except / finally
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError):
    print("Type or value error")
finally:
    print("Always runs")`}</pre>
            </div>
          </section>

          {/* Standard Library */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Standard Library Highlights</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# os — file system
import os
os.listdir(".")
os.path.exists("file.txt")
os.makedirs("new/dir", exist_ok=True)

# pathlib — modern path handling
from pathlib import Path
p = Path("data") / "output.csv"
p.write_text("hello")
p.read_text()

# datetime
from datetime import datetime, timedelta
now = datetime.now()
yesterday = now - timedelta(days=1)
print(now.strftime("%Y-%m-%d %H:%M"))

# collections — specialized containers
from collections import Counter, defaultdict, deque
Counter(["a", "b", "a"])        # Counter({'a': 2, 'b': 1})
dd = defaultdict(list)          # auto-creates empty list
dq = deque([1, 2, 3])
dq.appendleft(0)

# itertools
from itertools import chain, islice, groupby
flattened = chain([1, 2], [3, 4])  # 1, 2, 3, 4

# re — regular expressions
import re
re.findall(r"\\d+", "abc123def456")  # ['123', '456']
re.sub(r"\\s+", "-", "hello world")  # "hello-world"`}</pre>
            </div>
          </section>

          {/* Related posts */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-700 mb-4">Related Cheat Sheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/json-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">JSON Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Syntax, types, and common patterns</span>
              </Link>
              <Link href="/blog/docker-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">Docker Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Containers, images, and compose</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}