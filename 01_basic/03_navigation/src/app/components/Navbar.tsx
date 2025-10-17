"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  type Links = {
    href: string;
    label: string;
  };
  const links: Links[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="bg-amber-100 text-black flex items-center text-center p-3 justify-between">
      <div className="log text-xl font-bold">Navigation</div>
      <div className="links">
        <ul className="flex gap-5">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                pathname === link.href ? "underline text-blue-500" : ""
              } `}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
