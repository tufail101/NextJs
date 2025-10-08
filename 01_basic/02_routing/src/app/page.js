import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main px-6 py-10">
     
      <h1 className="text-4xl font-bold text-center my-6">🏠 Home Page</h1>
      <h2 className="text-2xl font-semibold text-center mb-5 text-gray-700">
        Welcome to the Home Page of our Next.js App 🚀
      </h2>

   
      <section className="text-center mx-auto max-w-3xl leading-relaxed">
        <p>
          This simple application is built using <strong>Next.js 14 App Router</strong>. 
          It demonstrates the use of <strong>client-side routing</strong> to navigate between 
          different pages without reloading the entire page. The goal is to provide 
          a smooth, fast, and modern web experience.
        </p>
      </section>

      <br />

   
      <section className="mx-auto max-w-3xl mt-6 leading-relaxed">
        <h3 className="font-bold text-xl mb-2 text-gray-800">🔍 What is Routing?</h3>
        <p>
          Routing in Next.js means showing different components or pages 
          depending on the URL path. For example:
        </p>
        <ul className="list-disc ml-8 mt-3">
          <li>
            <code>"/"</code> → Renders the <strong>Home Page</strong>
          </li>
          <li>
            <code>"/about"</code> → Renders the <strong>About Page</strong>
          </li>
          <li>
            <code>"/blog"</code> → Renders the <strong>Blog Page</strong>
          </li>
          <li>
            <code>"/contact"</code> → Renders the <strong>Contact Page</strong>
          </li>
        </ul>

        <p className="mt-3">
          Each route corresponds to a specific folder inside the 
          <code> app/ </code> directory, and the <code>page.js</code> file 
          inside that folder is automatically treated as a route component.
        </p>
      </section>

      <br />

     
      <section className="mx-auto max-w-3xl bg-gray-100 p-5 rounded-xl mt-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">📂 Folder Structure</h3>
        <pre className="text-sm bg-gray-900 text-white p-4 rounded-lg text-left">
{`src/
 └── app/
     ├── page.js           → Home page
     ├── about/
     │   └── page.js       → About page
     ├── blog/
     │   └── page.js       → Blog page
     └── contact/
         └── page.js       → Contact page`}
        </pre>
        <p className="mt-3 text-gray-700">
          ✅ Each folder automatically becomes a route.  
          No need to manually set up a router file!
        </p>
      </section>

      <br />

     
      <section className="mx-auto max-w-3xl mt-6 leading-relaxed">
        <h3 className="font-bold text-xl mb-2 text-gray-800">💡 Tips for Beginners</h3>
        <ul className="list-disc ml-8 space-y-2">
          <li>
            Use the <code>&lt;Link&gt;</code> component for navigation — it provides client-side routing.
          </li>
          <li>
            Keep each page’s UI inside its own <code>page.js</code> file for better organization.
          </li>
          <li>
            Add a <code>layout.js</code> file in the <code>app/</code> folder for global layout (Navbar, Footer, etc.).
          </li>
          <li>
            You don’t need <code>react-router-dom</code> in Next.js — it’s built-in!
          </li>
        </ul>
      </section>

      <br />

  
      <section className="text-center mt-10">
        <p className="text-lg text-gray-700">
          You're now ready to explore more about Next.js routing and layouts! 🎯
        </p>
      </section>
    </div>
  );
}
