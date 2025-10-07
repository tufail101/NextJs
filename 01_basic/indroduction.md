# 🌐 Level 1 - Introduction to Next.js (App Router)

---

## 🧠 What is Next.js?

Next.js is a **React framework** built on top of React that enables you to create:
- Server-side rendered (SSR) apps  
- Static websites (SSG)  
- Full-stack apps (with built-in APIs)  
- SEO-optimized and blazing-fast web apps  

It is developed and maintained by **Vercel**.

---

## ⚡ Why Use Next.js?

| Feature | React | Next.js |
|----------|--------|----------|
| Routing | Manual (React Router) | **Automatic File-based (App Router)** |
| SEO | Poor (CSR only) | **Excellent (SSR + SSG)** |
| Data Fetching | Client-only | **SSR, SSG, ISR, CSR** |
| API Support | External (Express, etc.) | **Built-in API Routes** |
| Performance | Client-side | **Optimized by Default** |

---

## 🏗 Folder Structure Overview (App Router)

When you create a new Next.js 13+ project, the structure looks like this 👇

```
my-next-app/
 ┣ src/
 ┃ ┗ app/
 ┃    ┣ layout.js          → Root layout (shared for all pages)
 ┃    ┣ page.js            → Home page (route "/")
 ┃    ┣ about/
 ┃    ┃  ┗ page.js         → "/about"
 ┃    ┣ contact/
 ┃    ┃  ┗ page.js         → "/contact"
 ┃    ┗ globals.css        → Global styles
 ┣ public/                 → Static assets (images, icons)
 ┣ package.json
 ┣ next.config.mjs
 ┗ README.md
```

---

## 🚀 Getting Started

### 1️⃣ Create a New Next.js App
```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

### 2️⃣ Open Your App
Visit 👉 [http://localhost:3000](http://localhost:3000)

You’ll see your brand-new **Next.js App Router** project running!

---

## 🧩 How Next.js Works

Next.js 13+ combines both **frontend and backend** features in one place:
- React Components → UI  
- File-based Routing → Automatic routes  
- SSR & SSG → Pre-rendered HTML for SEO  
- Client Components → Interactive parts  
- Server Components → Optimized performance  
- API Routes → Full-stack functionality  

---

## ⚙️ Next.js Lifecycle (Simplified)

```
Request → Server Rendering (SSR/SSG) → Hydration → Client Navigation
```

- **Server Rendering:** HTML is generated before sending to browser  
- **Hydration:** React activates the interactive UI  
- **Client Navigation:** Switching routes happens instantly without reload  

---

## 🧩 Example: Home Page

```jsx
// src/app/page.js
export default function Home() {
  return <h1>Welcome to Next.js 15 🚀</h1>;
}
```

---

## 🧱 Example: Layout

```jsx
// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js from scratch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>🌐 My Navbar</header>
        <main>{children}</main>
        <footer>© 2025 My Next.js App</footer>
      </body>
    </html>
  );
}
```

---

## 🧠 Key Concepts You’ll Learn Next
1. ✅ **Routing System** (Static, Dynamic, Nested)  
2. 🧭 **Navigation** with `<Link>`  
3. 🧩 **Layouts** and **Templates**  
4. ⚙️ **Server vs Client Components**

---

## 💡 Assignment

✅ Create a new project named `next-basics-app-router`  
✅ Inside `src/app/`, create:
- `/` → `page.js` → Home Page  
- `/about/page.js` → About Page  
- `/contact/page.js` → Contact Page  

✅ Add a simple `layout.js` with header & footer  
✅ Run the app and verify all routes are working  

---

## 📚 References

- [Official Docs (Next.js 15)](https://nextjs.org/docs)  
- [Learn Next.js (Official Tutorial)](https://nextjs.org/learn)  
- [Vercel Deployment Guide](https://vercel.com/docs)

---

> 🧭 **Next Step:** [Level 1 – Routing → Static & Dynamic Routes](../02-routing/README.md)
