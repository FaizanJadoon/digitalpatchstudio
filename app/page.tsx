import Link from "next/link";

function Stat({k,v}:{k:string;v:string}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-3xl font-extrabold">{k}</div>
      <div className="text-white/60 text-sm">{v}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* HERO */}
      <section className="py-16 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs tracking-wide border border-white/20">
          DIGITAL PATCH STUDIO
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          Picture-perfect <span className="text-sky-400">vector art</span> &
          <span className="text-sky-400"> embroidery digitizing</span>.
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          We turn rough logos into crisp stitches and clean curves — export-ready files, fast turnaround, and friendly revisions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 transition font-semibold">See Pricing</Link>
          <Link href="/contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 transition font-semibold">Get Free Sample</Link>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section id="services" className="mt-4 grid md:grid-cols-3 gap-6">
        {[
          { title: "Digitizing", desc: "Left chest, caps, jacket backs, towels — tidy pathing & production-ready files." },
          { title: "Raster → Vector", desc: "Rebuild low-res logos into sharp, scalable artwork for print or merch." },
          { title: "Web & Marketing", desc: "Next.js sites, SEO, and social setup that actually supports your business." }
        ].map((s) => (
          <div key={s.title} className="rounded-2xl p-6 border border-white/15 bg-white/5">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Why teams choose Digital Patch Studio</h2>
        <ul className="mt-6 grid md:grid-cols-3 gap-6 text-white/80">
          <li className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="font-semibold text-white mb-1">4–6 hr turnaround</div>
            <p>Most orders ship same-day. Complex work? We’ll confirm ETA up front.</p>
          </li>
          <li className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="font-semibold text-white mb-1">Free, friendly revisions</div>
            <p>Tighten small text, tweak density, or adjust colors — included.</p>
          </li>
          <li className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="font-semibold text-white mb-1">All formats</div>
            <p>EMB, DST, PES, PDF previews, SVG, AI, EPS — ready for your machine and printer.</p>
          </li>
        </ul>
      </section>

      {/* STATS */}
      <section className="mt-12 grid grid-cols-3 gap-4">
        <Stat k="0+" v="Regular Customers" />
        <Stat k="0 Y" v="Experience" />
        <Stat k="24/7" v="Support" />
      </section>

      {/* PORTFOLIO PLACEHOLDER */}
      <section id="work" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Recent Work</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=>(
            <div key={i} className="aspect-square rounded-2xl border border-white/15 bg-white/5 grid place-content-center text-white/40">
              Portfolio {i}
            </div>
          ))}
        </div>
        <p className="mt-4 text-white/60 text-sm">Replace these with your own images later.</p>
      </section>

      {/* PATCHES CTA */}
      <section className="mt-16 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold">Quality Custom Patches</h3>
          <p className="mt-2 text-white/80">Embroidery that looks great off the screen — durable threads, clean borders, true colors.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">View Pricing</Link>
            <Link href="/patches" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Explore More</Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 aspect-video grid place-content-center text-white/40">Patches Image</div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Get a Quote</h2>
        <p className="mt-2 text-white/80">Email us your logo and notes — we'll reply fast with price & ETA.</p>
        <a href="mailto:hello@digitalpatchstudio.com" className="inline-block mt-6 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Email hello@digitalpatchstudio.com</a>
      </section>
    </main>
  );
}
