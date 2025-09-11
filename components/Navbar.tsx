"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { label: "Services", children: [
      { href: "/services#digitizing", label: "Digitizing" },
      { href: "/services#vector", label: "Raster → Vector" },
      { href: "/services#marketing", label: "Digital Marketing" },
      { href: "/services#seo", label: "SEO & Social" },
      { href: "/services#webapps", label: "Web & App Dev" },
    ]
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/patches", label: "Patches" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">
          <span className="text-white">Digital</span><span className="text-sky-400">Patch</span><span className="text-white">Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => n.children ? (
            <div key={n.label} className="relative group">
              <button className="hover:text-sky-300">{n.label}</button>
              <div className="absolute left-0 mt-3 hidden group-hover:block">
                <div className="min-w-[240px] rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-2">
                  {n.children.map((c)=>(
                    <Link key={c.href} href={c.href} className="block px-3 py-2 rounded-lg hover:bg-white/10">{c.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={n.href} href={n.href!} className="hover:text-sky-300">{n.label}</Link>
          ))}
          <a href="/contact" className="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-6 py-3 space-y-2">
            {nav.map((n)=> n.children ? (
              <details key={n.label} className="group">
                <summary className="cursor-pointer py-2">{n.label}</summary>
                <div className="pl-4 py-2 space-y-1">
                  {n.children.map((c)=>(
                    <Link key={c.href} href={c.href} className="block py-1 hover:text-sky-300">{c.label}</Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link key={n.href} href={n.href!} className="block py-2 hover:text-sky-300">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
