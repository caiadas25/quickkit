import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Svelte Cheat Sheet — Svelte 5 Syntax, Runes & Common Patterns | QuickKit",
  description:
    "Complete Svelte 5 cheat sheet with copy-paste code. Runes ($state, $derived, $effect), reactivity, components, stores, transitions, and common patterns.",
  openGraph: {
    title: "Svelte Cheat Sheet — Svelte 5 Syntax, Runes & Common Patterns",
    description:
      "Complete Svelte 5 cheat sheet with copy-paste code. Runes, reactivity, components, stores, transitions, and common patterns.",
    type: "article",
  },
};

const sections = [
  {
    title: "Basic Reactivity with Runes",
    code: `<script>
  // $state creates reactive state
  let count = $state(0);

  // $derived creates computed values
  let doubled = $derived(count * 2);

  // $effect runs when dependencies change
  $effect(() => {
    console.log('Count changed:', count);
  });

  function increment() {
    count += 1;
  }
</script>

<button onclick={increment}>
  Count: {count} (doubled: {doubled})
</button>`,
  },
  {
    title: "Arrays & Objects with $state",
    code: `<script>
  // Arrays — use $state for reactive arrays
  let items = $state(['apple', 'banana', 'cherry']);

  function addItem() {
    items.push('date');
    // Svelte 5 detects mutations automatically
  }

  function removeFirst() {
    items.shift();
  }

  // Objects
  let user = $state({
    name: 'Nuno',
    age: 28,
  });

  function birthday() {
    user.age += 1;
  }
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
<button onclick={addItem}>Add Item</button>
<button onclick={removeFirst}>Remove First</button>
<p>User: {user.name}, age {user.age}</p>
<button onclick={birthday}>Birthday</button>`,
  },
  {
    title: "$derived — Computed Values",
    code: `<script>
  let firstName = $state('Ada');
  let lastName = $state('Lovelace');

  // Simple derived
  let fullName = $derived(\`\${firstName} \${lastName}\`);

  // Derived with complex logic
  let stats = $derived({
    nameLength: fullName.length,
    isShort: fullName.length < 10,
    initials: firstName[0] + lastName[0],
  });

  // $derived.by for complex derivations
  let sortedItems = $derived.by(() => {
    let raw = [3, 1, 4, 1, 5, 9];
    return [...raw].sort((a, b) => a - b);
  });
</script>

<p>Full name: {fullName}</p>
<p>Initials: {stats.initials}</p>
<p>Short name? {stats.isShort ? 'Yes' : 'No'}</p>
<p>Sorted: {sortedItems.join(', ')}</p>`,
  },
  {
    title: "Event Handling",
    code: `<script>
  let value = $state('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Submitted: ' + value);
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      console.log('Enter pressed');
    }
  }
</script>

<!-- Inline handler -->
<button onclick={() => alert('clicked')}>Click Me</button>

<!-- Form submit -->
<form onsubmit={handleSubmit}>
  <input
    type="text"
    bind:value={value}
    onkeydown={handleKeydown}
    placeholder="Type something..."
  />
  <button type="submit">Submit</button>
</form>

<!-- Event modifiers -->
<div onclickcapture={() => console.log('captured')}>
  Parent
</div>`,
  },
  {
    title: "Conditional Rendering",
    code: `<script>
  let loggedIn = $state(false);
  let role = $state('user');
</script>

<!-- {#if} block -->
{#if loggedIn}
  <p>Welcome back!</p>
{:else if role === 'admin'}
  <p>Welcome, admin!</p>
{:else}
  <p>Please log in.</p>
{/if}

<!-- {#unless} — inverse of {#if} -->
{#unless loggedIn}
  <button onclick={() => loggedIn = true}>Log In</button>
{/unless}

<!-- Inline ternary -->
<span class={loggedIn ? 'text-green' : 'text-red'}>
  {loggedIn ? 'Online' : 'Offline'}
</span>`,
  },
  {
    title: "Each Blocks & Keyed Iteration",
    code: `<script>
  let fruits = $state([
    { id: 1, name: 'Apple', color: 'red' },
    { id: 2, name: 'Banana', color: 'yellow' },
    { id: 3, name: 'Cherry', color: 'red' },
  ]);

  function remove(id) {
    fruits = fruits.filter(f => f.id !== id);
  }
</script>

<!-- Basic each -->
<ul>
  {#each fruits as fruit}
    <li>{fruit.name} ({fruit.color})</li>
  {/each}
</ul>

<!-- With index -->
{#each fruits as fruit, i}
  <p>{i + 1}. {fruit.name}</p>
{/each}

<!-- Keyed each — more efficient updates -->
{#each fruits as fruit (fruit.id)}
  <div>
    {fruit.name}
    <button onclick={() => remove(fruit.id)}>×</button>
  </div>
{/each}

<!-- Each with else -->
{#each fruits as fruit}
  <p>{fruit.name}</p>
{:else}
  <p>No fruits found.</p>
{/each}`,
  },
  {
    title: "Components & Props",
    code: `<script>
  import Counter from './Counter.svelte';
  import Card from './Card.svelte';

  let count = $state(0);
</script>

<!-- Passing props -->
<Counter
  bind:count={count}
  label="Click counter"
  max={10}
/>

<!-- Passing children as content -->
<Card>
  <h2 slot="header">Card Title</h2>
  <p slot="default">Card body content goes here.</p>
  <p slot="footer">Card footer</p>
</Card>

<!-- $props rune -->
<!-- In Counter.svelte: -->
<script>
  let { count = $bindable(0), label = 'Counter', max = Infinity } = $props();

  function increment() {
    if (count < max) count += 1;
  }
</script>

<p>{label}: {count}</p>
<button onclick={increment}>+1</button>`,
  },
  {
    title: "Stores (Writable, Derived, Readable)",
    code: `import { writable, derived, readable } from 'svelte/store';

// Writable store
export const count = writable(0);

// Derived store
export const doubled = derived(count, $count => $count * 2);

// Readable store (auto-updating)
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

// Usage in components:
<script>
  import { count, doubled, time } from './stores.js';

  function increment() {
    count.update(n => n + 1);
  }
</script>

<p>Count: {$count}</p>
<p>Doubled: {$doubled}</p>
<p>Time: {$time.toLocaleTimeString()}</p>
<button onclick={increment}>+1</button>`,
  },
  {
    title: "Transitions & Animations",
    code: `<script>
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { crossfade } from 'svelte/transition';

  let visible = $state(true);
  let items = $state(['one', 'two', 'three']);
</script>

<!-- Basic transitions -->
{#if visible}
  <div transition:fade>Fades in and out</div>
{/if}

{#if visible}
  <div transition:fly={{ y: 200, duration: 1000 }}>
    Flies in from below
  </div>
{/if}

<!-- Each block transitions -->
{#each items as item (item)}
  <div transition:slide>{item}</div>
{/each}

<!-- In/Out — different enter/exit -->
{#if visible}
  <div in:fly={{ y: -50 }} out:fade>
    Different enter and exit
  </div>
{/if}

<!-- Scale transition -->
{#if visible}
  <div transition:scale={{ start: 0.5 }}>
    Scales in from 50%
  </div>
{/if}`,
  },
  {
    title: "Bind — Two-Way Binding",
    code: `<script>
  let name = $state('');
  let agreed = $state(false);
  let color = $state('red');
  let numbers = $state([1, 2, 3]);
</script>

<!-- Text input binding -->
<input bind:value={name} placeholder="Enter name" />
<p>Hello, {name || 'stranger'}!</p>

<!-- Checkbox binding -->
<label>
  <input type="checkbox" bind:checked={agreed} />
  I agree to the terms
</label>

<!-- Select binding -->
<select bind:value={color}>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
<p>Selected: {color}</p>

<!-- Multiple select -->
<select bind:value={numbers} multiple>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>
<p>Selected: {numbers.join(', ')}</p>`,
  },
  {
    title: "$effect — Side Effects",
    code: `<script>
  let searchQuery = $state('');
  let results = $state([]);

  // Basic effect — runs when searchQuery changes
  $effect(() => {
    console.log('Search query:', searchQuery);
  });

  // Async effect with cleanup
  $effect(() => {
    const controller = new AbortController();

    async function fetchResults() {
      if (!searchQuery) {
        results = [];
        return;
      }

      try {
        const res = await fetch(
          \`/api/search?q=\${encodeURIComponent(searchQuery)}\`,
          { signal: controller.signal }
        );
        results = await res.json();
      } catch (e) {
        if (e.name !== 'AbortError') throw e;
      }
    }

    fetchResults();

    // Cleanup function
    return () => controller.abort();
  });

  // $effect.root — runs once, not reactive
  $effect.root(() => {
    console.log('Runs once on mount');
  });
</script>

<input bind:value={searchQuery} placeholder="Search..." />
{#each results as result}
  <p>{result.title}</p>
{/each}`,
  },
  {
    title: "Snippets (Svelte 5 Slot Alternative)",
    code: `<script>
  // Define a snippet
  let { children, items } = $props();
</script>

<!-- Using snippets as slots -->
{#snippet header()}
  <h1>Default Header</h1>
{/snippet}

<!-- Passing snippets -->
<List items={['a', 'b', 'c']}>
  {#snippet itemTemplate(item)}
    <li class="custom">{item}</li>
  {/snippet}
</List>

<!-- List.svelte -->
<script>
  let { items, itemTemplate } = $props();
</script>

<ul>
  {#each items as item}
    {@render itemTemplate(item)}
  {/each}
</ul>

<!-- Fallback content with snippet -->
<Card>
  {#snippet fallback()}
    <p>Loading...</p>
  {/snippet}
</Card>`,
  },
  {
    title: "SvelteKit Routing (File-Based)",
    code: `// File structure:
// src/routes/
//   +page.svelte          → /
//   +layout.svelte        → wraps all pages
//   about/+page.svelte    → /about
//   blog/
//     +page.svelte        → /blog (list)
//     [slug]/
//       +page.svelte      → /blog/:slug

// src/routes/blog/[slug]/+page.svelte
<script>
  let { data } = $props();
  // data comes from +page.server.js
</script>

<h1>{data.title}</h1>
<article>{@html data.content}</article>

// src/routes/blog/[slug]/+page.server.js
export async function load({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    content: post.content,
  };
}

// Server-side form actions
// src/routes/login/+page.server.js
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    // handle login
    return { success: true };
  },
};`,
  },
  {
    title: "Fetch Data with +page.server.js",
    code: `// src/routes/posts/+page.server.js
import { db } from '$lib/database';

// Load function runs server-side
export async function load({ url, fetch }) {
  const page = Number(url.searchParams.get('page')) || 1;

  // Parallel fetches
  const [posts, total] = await Promise.all([
    db.posts.findMany({
      skip: (page - 1) * 10,
      take: 10,
      orderBy: { createdAt: 'desc' },
    }),
    db.posts.count(),
  ]);

  return {
    posts,
    total,
    page,
    totalPages: Math.ceil(total / 10),
  };
}

// src/routes/posts/+page.svelte
<script>
  let { data } = $props();
</script>

{#each data.posts as post}
  <a href="/posts/{post.slug}">{post.title}</a>
{/each}

<p>Page {data.page} of {data.totalPages}</p>`,
  },
  {
    title: "Tailwind CSS + Svelte",
    code: `<!-- Tailwind classes work directly in Svelte -->
<script>
  let dark = $state(false);
</script>

<div class={dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
  <h1 class="text-2xl font-bold p-4">
    Hello World
  </h1>

  <!-- Conditional classes -->
  <button
    class="px-4 py-2 rounded font-medium transition-colors
      {dark
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white'}"
    onclick={() => dark = !dark}
  >
    Toggle Dark Mode
  </button>

  <!-- Iterating with classes -->
  {#each ['red', 'blue', 'green'] as color}
    <span class="inline-block px-3 py-1 m-1 rounded-full bg-{color}-100 text-{color}-800">
      {color}
    </span>
  {/each}
</div>`,
  },
  {
    title: "Error Handling & Loading States",
    code: `<script>
  import { onMount } from 'svelte';

  let data = $state(null);
  let loading = $state(true);
  let error = $state(null);

  onMount(async () => {
    try {
      const res = await fetch('/api/data');
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      data = await res.json();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="animate-pulse">
    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
    <div class="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
  </div>
{:else if error}
  <div class="p-4 bg-red-50 border border-red-200 rounded">
    <p class="text-red-800 font-medium">Error: {error}</p>
    <button
      class="text-red-600 underline mt-2"
      onclick={() => { loading = true; error = null; }}
    >
      Retry
    </button>
  </div>
{:else}
  <div>
    {#each data.items as item}
      <p>{item.name}</p>
    {/each}
  </div>
{/if}`,
  },
];

export default function SvelteCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Svelte Cheat Sheet</span>
      </nav>

      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Svelte Cheat Sheet — Svelte 5 Syntax, Runes & Common Patterns
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Complete Svelte 5 cheat sheet with copy-paste code. Runes ($state, $derived, $effect), reactivity, components, stores, transitions, and common patterns.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-stone-400">
            <span>Last updated July 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">{section.title}</h2>
              <pre className="bg-stone-900 text-stone-100 p-5 rounded-lg overflow-x-auto text-sm leading-relaxed">
                <code>{section.code}</code>
              </pre>
            </section>
          ))}
        </div>

        {/* Related */}
        <section className="mt-12 mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Related Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/vue-cheat-sheet"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Vue.js Cheat Sheet</span>
              <p className="text-stone-500 mt-1">Vue 3 Composition API and reactivity.</p>
            </Link>
            <Link
              href="/blog/react-hooks-cheat-sheet"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">React Hooks Cheat Sheet</span>
              <p className="text-stone-500 mt-1">useState, useEffect, useRef, and more.</p>
            </Link>
            <Link
              href="/blog/javascript-cheat-sheet"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">JavaScript Cheat Sheet</span>
              <p className="text-stone-500 mt-1">ES6+, async/await, and modern JS patterns.</p>
            </Link>
            <Link
              href="/blog/typescript-cheat-sheet"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">TypeScript Cheat Sheet</span>
              <p className="text-stone-500 mt-1">Types, generics, and TypeScript patterns.</p>
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Svelte Cheat Sheet — Svelte 5 Syntax, Runes & Common Patterns",
            description:
              "Complete Svelte 5 cheat sheet with copy-paste code. Runes, reactivity, components, stores, transitions, and common patterns.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: { "@type": "Organization", name: "QuickKit" },
            publisher: { "@type": "Organization", name: "QuickKit" },
            mainEntityOfPage: "https://quickkit-nine.vercel.app/blog/svelte-cheat-sheet",
          }),
        }}
      />
    </div>
  );
}
