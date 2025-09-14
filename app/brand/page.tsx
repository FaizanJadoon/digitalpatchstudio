/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/Logo";

export const metadata = {
  title: "Brand — Digital Patch Studio",
  description: "Logos, colors, typography, and assets for Digital Patch Studio.",
};

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">{children}</div>;
}

export default function BrandPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      <Card>
        <h1 className="text-4xl md:text-5xl font-extrabold">Brand Guidelines</h1>
        <p className="mt-3 text-white/80">Use these assets to represent Digital Patch Studio consistently.</p>
      </Card>

      {/* Logos */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">Logo — Light (for dark backgrounds)</h2>
          <div className="mt-4 rounded-xl p-6 bg-primary-800 border border-white/10">
            <Logo variant="light" className="w-full h-auto" />
          </div>
          <div className="mt-4 flex gap-3">
            <a className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold" href="/branding/logo-light.svg" download>Download SVG</a>
            <a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 font-semibold" href="/branding/logo-mark.svg" download>Icon Mark</a>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold">Logo — Dark (for light backgrounds)</h2>
          <div className="mt-4 rounded-xl p-6 bg-white text-black border border-white/10">
            <img src="/branding/logo-dark.svg" alt="Logo dark" className="w-full h-auto" />
          </div>
          <div className="mt-4 flex gap-3">
            <a className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold" href="/branding/logo-dark.svg" download>Download SVG</a>
            <a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 font-semibold" href="/favicon.svg" download>Favicon</a>
          </div>
        </Card>
      </div>

      {/* Colors */}
      <Card>
        <h2 className="text-2xl font-bold">Colors</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          {[
            {name:"Primary 900",hex:"#0B1230"},
            {name:"Primary 800",hex:"#0F1A46"},
            {name:"Primary 700",hex:"#1B3F8A"},
            {name:"Accent 400",hex:"#38BDF8"},
            {name:"Ink",hex:"#FFFFFF"},
          ].map((c)=>(
            <div key={c.hex} className="rounded-xl overflow-hidden border border-white/10">
              <div className="h-20" style={{background:c.hex}} />
              <div className="p-3 text-sm">
                <div className="font-semibold">{c.name}</div>
                <div className="text-white/70">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Typography */}
      <Card>
        <h2 className="text-2xl font-bold">Typography</h2>
        <p className="text-white/80 mt-2">Headings use Manrope (800/700). Body uses Inter (400/500).</p>
        <div className="mt-4 space-y-2">
          <div className="text-4xl font-extrabold" style={{fontFamily:"var(--font-manrope)"}}>The quick brown fox</div>
          <div className="text-base" style={{fontFamily:"var(--font-inter)"}}>The quick brown fox jumps over the lazy dog.</div>
        </div>
      </Card>

      {/* Social Cover */}
      <Card>
        <h2 className="text-2xl font-bold">Social & OG</h2>
        <p className="text-white/80 mt-2">Edit <code>/public/branding/social-cover.svg</code> then export to PNG 1200×630.</p>
        <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-white">
          <img src="/branding/social-cover.svg" alt="Social cover" className="w-full h-auto" />
        </div>
        <a className="mt-4 inline-block px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold" href="/branding/social-cover.svg" download>Download SVG</a>
      </Card>
    </main>
  );
}
