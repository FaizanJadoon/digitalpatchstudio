export const metadata = {
  title: "Jacketback Embroidery — Digital Patch Studio",
  description:
    "Large-format jacketback embroidery digitizing: balanced fills, crisp outlines, clean sequencing, and production-ready files with fast turnaround.",
};

function H2(props: any) {
  return <h2 className="text-2xl md:text-3xl font-bold">{props.children}</h2>;
}
function Lead(props: any) {
  return <p className="text-white/80">{props.children}</p>;
}
function Card(props: any) {
  const { className = "", children } = props;
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
function Pill(props: any) {
  return (
    <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">
      {props.children}
    </span>
  );
}

export default function Page() {
  const gallery = [
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/3.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Jacketback Embroidery</span>
      </nav>

      {/* HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>DIGITIZING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Jacketback <span className="text-sky-400">Embroidery Digitizing</span>
            </h1>
            <Lead className="mt-4">
              Large-format stitch plans with balanced fills, crisp outlines, and minimized trims.
              Built for visibility and clean runs on heavyweight garments.
            </Lead>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">
                Get Quote
              </a>
              <a href="/pricing" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">
                See Pricing
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg"
              alt="Jacketback embroidery sample"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* FEATURES */}
      <Card>
        <H2>Designed For Big, Bold Artwork</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Balanced Fill Coverage</h3>
            <p className="text-white/70 mt-1">Fill angles & densities tuned to reduce puckering and shine streaks.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Crisp Outlines</h3>
            <p className="text-white/70 mt-1">Pull/push compensation keeps borders sharp around large fills.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Smart Sequencing</h3>
            <p className="text-white/70 mt-1">Logical block order minimizes color changes and travel stitches.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Machine-Ready Files</h3>
            <p className="text-white/70 mt-1">EMB, DST, PES + PDF preview and color breakdown.</p>
          </div>
        </div>
      </Card>

      {/* SIZE + VISUAL */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Recommended Sizes</H2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Common width range: <strong>9–12 in (230–305 mm)</strong></li>
              <li>Use fills for large solids; satins for borders/lettering accents</li>
              <li>Break complex art into sequenced blocks for stability</li>
            </ul>
            <p className="mt-3 text-white/70">
              Share garment details (leather, denim, varsity, softshell) and we’ll tailor density and underlay.
            </p>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg"
              alt="Jacketback sizing/placement visual"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* FORMATS + TURNAROUND */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2>Formats & Deliverables</H2>
          <Lead className="mt-3">Delivered in <strong>EMB, DST, PES</strong> with a PDF preview. Other formats on request.</Lead>
          <div className="mt-4 flex items-center gap-4">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-10 h-10" loading="lazy" />
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-10 h-10" loading="lazy" />
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-10 h-10" loading="lazy" />
          </div>
        </Card>
        <Card>
          <H2>Turnaround & Revisions</H2>
          <Lead className="mt-3">
            Typical delivery in <strong>6–12 hours</strong> (size & complexity dependent). Rush available.
            Minor tweaks included until it runs clean.
          </Lead>
        </Card>
      </div>

      {/* GALLERY */}
      <Card>
        <H2>Jacketback Gallery</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <img src={src} alt={`Jacketback sample ${i + 1}`} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </Card>

      {/* PROCESS */}
      <Card>
        <H2>How It Works</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">1) Share Artwork</h3>
            <p className="text-white/70 mt-1">Send your art, garment type, and target size.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">2) Digitize & Block</h3>
            <p className="text-white/70 mt-1">We plan fills/outlines and sequence large areas for stability.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">3) Preview & Revise</h3>
            <p className="text-white/70 mt-1">PDF preview + quick tweaks if needed.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">4) Deliver Files</h3>
            <p className="text-white/70 mt-1">Final machine formats + color breakdown.</p>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to digitize your jacketback?</H2>
            <Lead className="mt-2">Send your artwork—get a fast quote and ETA.</Lead>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-07-1-2.png"
              alt="Large-format embroidery mockup"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
