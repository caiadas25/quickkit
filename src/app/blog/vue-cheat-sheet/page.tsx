import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vue.js Cheat Sheet — Vue 3 Syntax, Composition API & Common Patterns | QuickKit",
  description:
    "Complete Vue.js 3 cheat sheet with copy-paste code. Composition API, reactivity, components, routing, state management, and common patterns.",
  openGraph: {
    title: "Vue.js Cheat Sheet — QuickKit",
    description: "Vue 3 Composition API, reactivity, components, and common patterns with copy-paste examples.",
    type: "article",
  },
};

export default function VueCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Vue.js Cheat Sheet",
    description: "Complete Vue.js 3 cheat sheet covering Composition API, reactivity, components, and patterns.",
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
          <span className="text-slate-500">Vue.js Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Vue.js Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Vue 3 Composition API, reactivity, components, and common patterns with copy-paste code examples.
            </p>
          </header>

          {/* Setup & Reactivity */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Setup &amp; Reactivity</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// ref — reactive primitive
import { ref } from 'vue'
const count = ref(0)
console.log(count.value)  // 0
count.value++             // 1

// reactive — reactive object
import { reactive } from 'vue'
const state = reactive({ name: 'Alice', age: 30 })
state.age++               // 31

// computed — derived value
import { computed } from 'vue'
const double = computed(() => count.value * 2)

// watch — side effect on changes
import { watch } from 'vue'
watch(count, (newVal, oldVal) => {
  console.log(\`\${oldVal} -> \${newVal}\`)
})

// watchEffect — auto-tracks dependencies
import { watchEffect } from 'vue'
watchEffect(() => {
  console.log(\`Count is: \${count.value}\`)
})

// toRef / toRefs — extract from reactive
import { toRef, toRefs } from 'vue'
const age = toRef(state, 'age')
const { name, age } = toRefs(state)`}</pre>
            </div>
          </section>

          {/* Template Syntax */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Template Syntax</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`<!-- Text interpolation -->
<h1>{{ title }}</h1>

<!-- Raw HTML -->
<div v-html="rawHtml"></div>

<!-- Attributes -->
<a :href="url" :class="{ active: isActive }">
  Link
</a>

<!-- Conditional rendering -->
<div v-if="show">Visible</div>
<div v-else-if="error">Error</div>
<div v-else>Default</div>
<div v-show="show">Toggle display</div>

<!-- List rendering -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }}: {{ item.name }}
  </li>
</ul>

<!-- Event handling -->
<button @click="increment">+1</button>
<button @click.prevent="submit">Submit</button>
<input @keyup.enter="search" />

<!-- Two-way binding -->
<input v-model="query" />
<textarea v-model="text"></textarea>
<select v-model="selected">
  <option value="a">A</option>
  <option value="b">B</option>
</select>

<!-- Slot content -->
<template>
  <slot></slot>
  <slot name="header">Default header</slot>
</template>`}</pre>
            </div>
          </section>

          {/* Composition API Components */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Composition API Components</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Child component (script setup)
<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  title: String,
  count: { type: Number, default: 0 }
})

const emit = defineEmits(['update', 'delete'])

const localCount = ref(props.count)
const doubled = computed(() => localCount.value * 2)

function increment() {
  localCount.value++
  emit('update', localCount.value)
}

onMounted(() => {
  console.log('Component mounted')
})
</script>

// Parent usage
<ChildComponent
  :title="title"
  :count="localCount"
  @update="handleUpdate"
  @delete="handleDelete"
/>`}</pre>
            </div>
          </section>

          {/* Lifecycle Hooks */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Lifecycle Hooks</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from 'vue'

// Equivalent to Options API hooks
onBeforeMount(() => {
  // Before DOM insertion
})

onMounted(() => {
  // DOM is ready, API calls go here
})

onBeforeUpdate(() => {
  // Before re-render
})

onUpdated(() => {
  // After re-render
})

onBeforeUnmount(() => {
  // Cleanup: timers, event listeners
})

onUnmounted(() => {
  // Component destroyed
})

onErrorCaptured((err, instance, info) => {
  // Catch child component errors
  console.error('Captured:', err)
  return false // stop propagation
})`}</pre>
            </div>
          </section>

          {/* Provide / Inject */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Provide / Inject</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Parent: provide values
import { provide, ref } from 'vue'

const theme = ref('dark')
provide('theme', theme)
provide('appName', 'MyApp')

// Child (any depth): inject values
import { inject } from 'vue'

const theme = inject('theme')
const appName = inject('appName', 'Default') // with default
const user = inject('user', () => null)       // factory default`}</pre>
            </div>
          </section>

          {/* Vue Router */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Vue Router</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// router.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User, props: true },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'settings', component: Settings },
      { path: 'profile', component: Profile }
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation
router.push('/about')
router.push({ name: 'User', params: { id: 123 } })
router.replace('/login')
router.go(-1)

// In component
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.params.id)
console.log(route.query.search)`}</pre>
            </div>
          </section>

          {/* Pinia State Management */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Pinia (State Management)</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    async fetchCount() {
      const res = await fetch('/api/count')
      this.count = await res.json()
    },
  },
})

// In component
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

console.log(counter.count)
console.log(counter.double)
counter.increment()

// Reset
counter.$reset()`}</pre>
            </div>
          </section>

          {/* Common Patterns */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Patterns</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Composable (reusable logic)
import { ref, onMounted, onUnmounted } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  fetch(url)
    .then(res => res.json())
    .then(json => { data.value = json })
    .catch(err => { error.value = err })
    .finally(() => { loading.value = false })

  return { data, error, loading }
}

// Usage in component
const { data, error, loading } = useFetch('/api/users')

// Transition
<Transition name="fade" mode="out-in">
  <div v-if="show" key="content">Hello</div>
</Transition>

// .fade-enter-active, .fade-leave-active { transition: opacity 0.3s }

// Suspense (async components)
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>`}</pre>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-700 mb-4">Related Cheat Sheets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/react-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">React Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Components, hooks, and patterns</span>
              </Link>
              <Link href="/blog/typescript-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">TypeScript Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Types, generics, and utility types</span>
              </Link>
              <Link href="/blog/javascript-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">JavaScript Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">ES6+, async/await, and common patterns</span>
              </Link>
              <Link href="/blog/css-flexbox-cheat-sheet" className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-medium text-slate-800">CSS Flexbox Cheat Sheet</span>
                <span className="block text-xs text-slate-500 mt-1">Layout patterns for Vue components</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
