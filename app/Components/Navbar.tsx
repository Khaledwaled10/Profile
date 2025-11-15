'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Khaled Waled</h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span className={`cursor-pointer transition-all hover:text-black ${pathname === link.href ? 'font-bold underline' : 'text-gray-600'}`}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
