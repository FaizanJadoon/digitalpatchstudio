"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceItem = { href: string; label: string };
type ServiceCategory = {
  key: string;
  label: string;
  href?: string;
  children?: ServiceItem[];
};

const serviceCategories: ServiceCategory[] = [
  {
    key: "digitizing",
    label: "Digitizing Services",
    children: [
      { href: "/services/left-chest-embroidery", label: "Left Chest Embroidery" },
      { href: "/services/cap-embroidery", label: "Cap Embroidery" },
      { href: "/services/jacketback-embroidery", label: "Jacketback Embroidery" },
      { href: "/services/towel-embroidery", label: "Towel Embroidery" },
    ],
  },
  { key: "vector", label: "Raster To Vector Services", href: "/services/raster-to-vector" },
  { key: "marketing", label: "Digital Marketing", href: "/services/digital-marketing" },
  { key: "seo", label: "SEO / Social Media Marketing", href: "/services/seo-smm" },
  { key: "webapps", label: "Web & App Development", href: "/services/web-and-app-development" },
];

const apparelsLinks: ServiceItem[] = [
  { href: "/apparels/lanyards", label: "Lanyards" },
  { href: "/apparels/woven-labels", label: "Woven Labels" },
  { href: "/apparels/t-shirts", label: "T-Shirts" },
  { href: "/apparels/caps", label: "Caps" },
  { href: "/apparels/hoodies", label: "Hoodies" },
  { href: "/apparels/beanies", label: "Beanies" },
  { href: "/apparels/sports-jerseys", label: "Sports Jerseys" },
  { href: "/apparels/gym-wears", label: "Gym Wears" },
  { href: "/apparels/towels", label: "Towels" },
];

const topNav = [
  { href: "/", label: "Home" },
  { label: "Services", mega: true },
  { href: "/pricing", label: "Pricing" },
  { href: "/patches", label: "Patches" },
  { label: "Apparels", dropdown: true },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);          // Services mega
  const [activeKey, setActiveKey] = useState<string>("digitizing");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openApparel, setOpenApparel] = useState(false); // Apparels dropdown
  const menuRef = useRef<HTMLDivElement>(null);
  const apparelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
      if (apparelRef.current && !apparelRef.current.contains(e.target as Node)) setOpenApparel(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const activeCat = serviceCategories.find((c) => c.key === activeKey);
  const hasChildren = !!activeCat?.children?.length;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">
          <span className="text-white">Digital</span>
          <span className="text-sky-400">Patch</span>
          <span className="text-white">Studio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {topNav.map((item) =>
            (item as any).mega ? (
              <div key="services" className="relative" onMouseEnter={() => setOpen(true)}>
                <button
                  className="hover:text-sky-300"
                  onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
                  aria-haspopup="true" aria-expanded={open}
                >
                  Services ▾
                </button>

                {open && (
                  <div
                    ref={menuRef}
                    className="absolute left-0 top-full pt-3 w-[680px]"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-3 shadow-xl">
                      <div className={`grid ${hasChildren ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                        {/* LEFT: categories */}
                        <div className="rounded-2xl bg-white/5 p-2">
                          {serviceCategories.map((cat) => {
                            const active = activeKey === cat.key;
                            const isNested = !!cat.children?.length;
                            return (
                              <div key={cat.key} className="mb-1 last:mb-0">
                                {isNested ? (
                                  <button
                                    onMouseEnter={() => setActiveKey(cat.key)}
                                    onFocus={() => setActiveKey(cat.key)}
                                    onClick={() => setActiveKey(cat.key)}
                                    className={`w-full text-left px-3 py-2 rounded-xl ${active ? "bg-sky-600/70 text-white" : "hover:bg-white/10"}`}
                                  >
                                    {cat.label} <span className="float-right">›</span>
                                  </button>
                                ) : (
                                  <Link
                                    href={cat.href!}
                                    className={`block px-3 py-2 rounded-xl ${active ? "bg-white/10" : "hover:bg-white/10"}`}
                                    onMouseEnter={() => setActiveKey(cat.key)}
                                    onClick={() => setOpen(false)}
                                  >
                                    {cat.label}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* RIGHT: sub items */}
                        {hasChildren && (
                          <div className="rounded-2xl bg-white/5 p-2">
                            {activeCat!.children!.map((sub) => (
                              <Link key={sub.href} href={sub.href} className="block px-3 py-2 rounded-xl hover:bg-white/10" onClick={() => setOpen(false)}>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (item as any).dropdown ? (
              <div key="apparels" className="relative" ref={apparelRef} onMouseEnter={() => setOpenApparel(true)}>
                <button
                  className="hover:text-sky-300"
                  onClick={(e) => { e.stopPropagation(); setOpenApparel((v)=>!v); }}
                  aria-haspopup="true" aria-expanded={openApparel}
                >
                  Apparels ▾
                </button>
                {openApparel && (
                  <div
                    className="absolute left-0 top-full pt-3 w-64"
                    onMouseEnter={() => setOpenApparel(true)}
                    onMouseLeave={() => setOpenApparel(false)}
                  >
                    <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-2 shadow-xl">
                      {apparelsLinks.map((a)=>(
                        <Link key={a.href} href={a.href} className="block px-3 py-2 rounded-xl hover:bg-white/10" onClick={()=>setOpenApparel(false)}>
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={(item as any).href} href={(item as any).href!} className="hover:text-sky-300">
                {(item as any).label}
              </Link>
            )
          )}
          <Link href="/contact" className="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">☰</button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-6 py-3 space-y-2">
            <Link href="/" className="block py-2 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Home</Link>
            <details className="group">
              <summary className="cursor-pointer py-2">Services</summary>
              <div className="pl-4 py-2 space-y-2">
                <details open>
                  <summary className="cursor-pointer py-2">Digitizing Services</summary>
                  <div className="pl-4 space-y-1">
                    <Link href="/services/left-chest-embroidery" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Left Chest Embroidery</Link>
                    <Link href="/services/cap-embroidery" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Cap Embroidery</Link>
                    <Link href="/services/jacketback-embroidery" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Jacketback Embroidery</Link>
                    <Link href="/services/towel-embroidery" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Towel Embroidery</Link>
                  </div>
                </details>
                <Link href="/services/raster-to-vector" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Raster To Vector Services</Link>
                <Link href="/services/digital-marketing" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Digital Marketing</Link>
                <Link href="/services/seo-smm" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>SEO / Social Media Marketing</Link>
                <Link href="/services/web-and-app-development" className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Web & App Development</Link>
              </div>
            </details>

            <Link href="/pricing" className="block py-2 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Pricing</Link>
            <Link href="/patches" className="block py-2 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Patches</Link>

            <details className="group">
              <summary className="cursor-pointer py-2">Apparels</summary>
              <div className="pl-4 py-2 space-y-1">
                {apparelsLinks.map(a=>(
                  <Link key={a.href} href={a.href} className="block py-1 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>{a.label}</Link>
                ))}
              </div>
            </details>

            <Link href="/contact" className="block py-2 hover:text-sky-300" onClick={()=>setMobileOpen(false)}>Contact</Link>
            <Link href="/contact" className="inline-block px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold" onClick={()=>setMobileOpen(false)}>Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
