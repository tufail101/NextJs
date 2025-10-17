# 🧭 Navigation in Next.js (App Router)

---

## 🚀 What is Navigation?

**Navigation** means moving between different pages of a website —  
for example, from the **Home Page → About Page → Contact Page**, etc.  

In normal HTML or React apps, every navigation reloads the full page.  
But **Next.js** uses a special system called **Client-Side Navigation**, which means:

✅ The page changes instantly (no full reload).  
✅ Common parts like Navbar and Footer stay the same.  
✅ It feels fast like a single-page app (SPA).  

---

## ⚙️ Built-in Navigation with `<Link>`

Next.js provides a special component called **`<Link>`** from `"next/link"` for fast navigation.

### 🧠 Syntax
```jsx
import Link from "next/link";

<Link href="/about">Go to About Page</Link>
```

When a user clicks this link, Next.js:
1. Changes the URL to `/about`
2. Loads the **About page** instantly  
3. Does **not** reload the full site  

That’s why navigation in Next.js feels smooth and instant ⚡

---

## 📁 Folder Setup Example

Assume this folder structure:

```
src/
 ┗ app/
    ┣ page.js            → Home Page
    ┣ about/
    ┃  ┗ page.js         → About Page
    ┣ contact/
    ┃  ┗ page.js         → Contact Page
    ┣ layout.js          → Common layout for all pages
    ┗ components/
       ┗ Navbar.js        → Navigation bar component
```

---

## 🧱 Example Pages

### `app/page.js`
```jsx
export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}
```

### `app/about/page.js`
```jsx
export default function About() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}
```

### `app/contact/page.js`
```jsx
export default function Contact() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Contact Page</h1>
      <p>This is the Contact Page.</p>
    </div>
  );
}
```

---

## 🧭 Create a Navigation Bar

We’ll make a **Navbar** that allows us to move between pages easily.

### 📄 `src/components/Navbar.js`
```jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // gives the current route

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href
              ? "text-blue-800 font-bold underline"
              : "text-blue-600 hover:underline"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
```

### 🧠 Explanation
- `usePathname()` → a hook that gives you the **current URL path** (like `/about`, `/contact`, etc.)
- We check if the current `pathname` equals a link’s `href`
  - If yes → apply active style (`font-bold`, `underline`)
  - Else → normal style  
- This way, the **current page is highlighted** in the navbar.

---

## 🧩 Add Navbar to Layout

### `app/layout.js`
```jsx
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Navigation Example",
  description: "Learn Navigation in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="p-6">{children}</main>
        <footer className="text-center mt-10 text-gray-500">
          © 2025 Next.js Navigation Demo
        </footer>
      </body>
    </html>
  );
}
```

✅ Now your Navbar appears on all pages.  
✅ You can click any link to move between pages **instantly**.

---

## ⚡ How Client-Side Navigation Works

When you click on `<Link>`:
1. The browser URL changes.  
2. Next.js **loads only the new content** (`page.js`).  
3. The `layout.js` and `Navbar` stay the same.  
4. The experience feels fast and smooth.  

---

## ⚙️ Prefetching

Next.js automatically **preloads** the next pages linked with `<Link>`.  
So when you hover on a link, the next page is loaded silently in the background.  

This is why navigation feels **instant**.

Example:
```jsx
<Link href="/about" prefetch={false}>About</Link>
```
👉 `prefetch={false}` disables this behavior.

---

## 🔁 Navigation vs Routing (Quick Recap)

| Feature | Routing | Navigation |
|----------|----------|-------------|
| **Meaning** | Defines what page shows for each URL | Moves between those pages |
| **Example** | `/about → app/about/page.js` | Clicking a Link to open `/about` |
| **Used By** | File structure | `<Link>` component |
| **Reloads Page?** | ❌ No | ❌ No |

---

## 🧠 Summary

✅ Use `<Link>` for internal navigation.  
✅ Add your Navbar in `layout.js` for global use.  
✅ Use `usePathname()` to highlight the active page.  
✅ Navigation is **client-side**, fast, and seamless.  
✅ Pages are preloaded automatically for performance.  

---

## 💪 Practice Task

Create your own navigation bar with:
1. Home, About, and Contact pages.  
2. Active link highlight.  
3. Global layout (Navbar + Footer).  
4. Try turning off prefetching for one link.  

---

## 📚 Reference Docs

- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [Next.js usePathname Hook](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
- [Next.js Navigation Overview](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

---

✨ **Next Lesson → Styling & Assets**
We study about Styling Options Global CSS etc.
