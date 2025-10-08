# 🌍 Level 1 – Part 2: Routing in Next.js (App Router)

---

## 🚦 What is Routing?

Routing decides **which page (component)** to show when a user visits a URL.  
In Next.js (App Router), **every folder inside the `app/` directory** automatically becomes a **route** — no need for React Router or manual configuration.

---

## 🗂 Folder-Based Routing Overview

```
src/
 ┗ app/
    ┣ page.js                → Route: "/"
    ┣ about/
    ┃  ┗ page.js             → Route: "/about"
    ┣ contact/
    ┃  ┗ page.js             → Route: "/contact"
    ┗ blog/
       ┣ page.js             → Route: "/blog"
       ┗ first-post/
          ┗ page.js          → Route: "/blog/first-post"
```

👉 Each folder = one route segment  
👉 Each `page.js` = actual page to render  
👉 Routes are **generated automatically** from folder names.

---

## 🧱 Example: Static Routes

### 📁 Folder Structure
```
src/
 ┗ app/
    ┣ page.js
    ┣ about/
    ┃  ┗ page.js
    ┗ contact/
       ┗ page.js
```

### 🧩 Code Example

```jsx
// src/app/page.js
export default function Home() {
  return <h1>🏠 Home Page</h1>;
}

// src/app/about/page.js
export default function About() {
  return <h1>ℹ️ About Page</h1>;
}

// src/app/contact/page.js
export default function Contact() {
  return <h1>📞 Contact Page</h1>;
}
```

✅ Visit:
- `/` → Home  
- `/about` → About  
- `/contact` → Contact  

No router setup needed — Next.js handles it automatically!

---

## 🧭 Nested Routes

Nested routes are created by **nesting folders** inside the `app/` directory.

### 📁 Example
```
src/
 ┗ app/
    ┗ blog/
       ┣ page.js             → "/blog"
       ┗ first-post/
          ┗ page.js          → "/blog/first-post"
```

### 🧩 Code Example

```jsx
// src/app/blog/page.js
export default function Blog() {
  return (
    <div>
      <h1>📝 Blog Page</h1>
      <p>All blog posts are listed here.</p>
    </div>
  );
}

// src/app/blog/first-post/page.js
export default function FirstPost() {
  return (
    <div>
      <h1>📰 My First Blog Post</h1>
      <p>This is a nested route in Next.js</p>
    </div>
  );
}
```

✅ Visit:
- `/blog`
- `/blog/first-post`

---

## 🔄 Dynamic Routes

Dynamic routes are created using **square brackets** `[ ]`.

### 📁 Folder Example
```
src/
 ┗ app/
    ┗ blog/
       ┣ page.js
       ┗ [slug]/
          ┗ page.js
```

### 🧩 Code Example

```jsx
// src/app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>📖 Blog Post: {params.slug}</h1>
      <p>This is a dynamic route page.</p>
    </div>
  );
}
```

✅ Try visiting:
- `/blog/hello-world`
- `/blog/nextjs-routing`

🧠 Output:
```
Blog Post: hello-world
Blog Post: nextjs-routing
```

Each `[slug]` folder dynamically matches part of the URL.

---

## ⚙️ Optional Catch-All Routes

If you want to handle **multiple segments** dynamically (like `/blog/2025/10/09/post`),  
you can use `[...slug]`.

### 📁 Folder Example
```
src/app/blog/[...slug]/page.js
```

### 🧩 Code Example

```jsx
export default function BlogCatchAll({ params }) {
  return <h1>Path: {params.slug.join(" / ")}</h1>;
}
```

✅ `/blog/a/b/c` → “Path: a / b / c”

---

## 🔗 Navigation with `<Link>`

Next.js provides a built-in `Link` component for **client-side navigation** (no reload).

### 🧩 Example

```jsx
// src/app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <nav>
        <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link> |{" "}
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
}
```

✅ Navigation happens instantly without reloading the page.

---

## 💡 Using `layout.js` in Routes

Each folder can have its **own layout.js**, which wraps only that route and its children.

### 📁 Example
```
src/app/blog/layout.js
```

### 🧩 Code Example

```jsx
export default function BlogLayout({ children }) {
  return (
    <section style={{ padding: "1rem", border: "2px solid #333" }}>
      <h2>📰 Blog Section</h2>
      {children}
    </section>
  );
}
```

✅ All pages under `/blog` will now share this layout.

---

## 📦 Route Groups (Optional Advanced)

You can group routes without affecting the URL using parentheses.

### 📁 Example
```
src/app/(public)/
 ┣ about/page.js     → /about
 ┣ contact/page.js   → /contact
```

The `(public)` folder name won’t appear in the URL.

---

## 🧠 Recap

✅ You learned:  
- Static routes  
- Nested routes  
- Dynamic routes (`[slug]`)  
- Catch-all routes (`[...slug]`)  
- Client-side navigation with `<Link>`  
- Layout per route  

---

## 💪 Assignment

1️⃣ Create a folder `/blog` with:
- `page.js` → Blog list  
- `[slug]/page.js` → Dynamic blog post  

2️⃣ Create another folder `/services` with:
- `page.js` → Services list  
- `web/page.js` → Nested route  

3️⃣ Add navigation links using `<Link>` on the homepage.

---

## 📚 References

- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)  
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)  

---

> 🧭 **Next Step → Level 2: Data Fetching & Rendering (SSR, SSG, ISR, CSR)**  
> You’ll learn how to load data on server and client efficiently.
