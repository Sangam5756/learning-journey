---
date: 2025-08-01
topics: [nextjs, restapi, api-routes, async, db-handling, ssr, seo]
day: 16
---

# 📘 Day 16 – REST API Handlers, Async Fetching, SSR & SEO Mastery in Next.js

## ✅ What I Worked On

- Revisited how `useEffect()` and `async` functions differ and where to use them
- Implemented `loading` states for better UX during fetch
- Refactored API routes using `GET`, `POST`, `PUT`, `DELETE` inside App Router
- Used `NextRequest` and `NextResponse` for request/response handling
- Practiced reading `req.body` and connecting to a mock DB
- Explored **SSR (Server-Side Rendering)** and **SEO** in Next.js
- Added static and dynamic metadata for enhanced SEO

---

## 📚 What I Learned

### ⚙️ `useEffect()` vs `async` Function

| Concept            | `useEffect()`                            | `async` Function                        |
|-------------------|-------------------------------------------|-----------------------------------------|
| Purpose           | React side-effect (client-side logic)     | Run async logic with `await`            |
| Usage Context     | Inside React components                   | Anywhere (backend, frontend, utilities) |
| Direct Async Use? | ❌ No – wrap `async` inside `useEffect`    | ✅ Yes, use freely                      |
| Common Use        | Fetching, DOM updates                     | Fetching, DB queries, file I/O          |

```tsx
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('/api/data');
    const data = await res.json();
    setData(data);
  };
  fetchData();
}, []);
````

---

### 🔄 Loading State in Next.js

```tsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchSomething = async () => {
    setLoading(true);
    await fetch('/api/data');
    setLoading(false);
  };
  fetchSomething();
}, []);
```

* `loading` is toggled to show UI feedback (e.g., spinner/skeleton)
* Common for client-side fetches in CSR apps

---

### 🧩 What is an API Route?

* **Pages Router:**

```js
export default function handler(req, res) { ... }
```

* **App Router:**

```ts
export async function GET(req) { ... }
export async function POST(req) { ... }
```

---

### 🧵 REST API with `GET`, `POST`, `PUT`, `DELETE`

```ts
// app/api/users/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json({ message: 'GET request success' });
}

export async function POST(req) {
  const body = await req.json();
  return NextResponse.json({ message: 'User created', data: body }, { status: 201 });
}

export async function PUT(req) {
  const body = await req.json();
  return NextResponse.json({ message: 'User updated', data: body });
}

export async function DELETE(req) {
  return NextResponse.json({ message: 'User deleted' }, { status: 204 });
}
```

---

### 🧠 `NextRequest` & `NextResponse`

* Modern way to access request data and send JSON response in App Router

```ts
export async function POST(req) {
  const body = await req.json();
  return NextResponse.json({ message: 'Posted', data: body });
}
```

---

### 🛠️ Handling DB Calls (Example)

```ts
import connectDB from '@/lib/db';
import User from '@/models/user';

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}
```

* Must `await connectDB()` before running queries
* Data fetched and returned in SSR-friendly format

---

### ⚡ SSR (Server-Side Rendering)

* HTML is rendered on server per request
* Improves SEO, performance, and first-page load time

#### ✅ Pages Router – `getServerSideProps()`

```ts
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return { props: { posts: data } };
}
```

#### ✅ App Router – Fetch directly inside component

```tsx
export default async function BlogPage() {
  const res = await fetch('https://api.example.com/posts', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      {data.map((post) => <h2 key={post.id}>{post.title}</h2>)}
    </div>
  );
}
```

---

### 🔍 SEO (Search Engine Optimization)

#### ✅ Static Metadata

```ts
export const metadata = {
  title: "DevFlow – Ask and Answer Questions",
  description: "A developer Q&A platform built with Next.js",
};
```

#### ✅ Dynamic Metadata

```ts
export async function generateMetadata({ params }) {
  const post = await fetchPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

* Metadata is injected into `<head>`, improves Google ranking
* `generateMetadata()` enables dynamic SEO per page (slug-based)

---

## ❌ Blockers

* Initially confused between client-side and server-side behavior, especially how rendering and data access differ
* Didn't understand why on the server you can directly call the database and return HTML to the browser — now clear that SSR prepares the full HTML before sending it
*Took time to realize why enterprise apps often use Next.js or plain HTML/CSS/JS for landing pages — it's mainly for performance, SEO, and faster Time To First Byte (TTFB)
* Was overusing useState/useEffect to manage state, but learned that in SSR or server components, minimal state management is needed
* Forgot to await req.json() in POST handler — caused req.body to be undefined
* Missed { cache: 'no-store' } in App Router SSR fetch — led to stale data issues

---

## 🧠 Reflection

Today I finally connected all the pieces of full-stack Next.js – RESTful API building, request handling, SSR optimization, and SEO best practices. I now fully understand when to use `useEffect` vs `SSR`, how to manage state during fetch, and how to serve optimized pages for both users and crawlers. This makes my future apps more **performant**, **scalable**, and **searchable**.
