export const metadata = {
  title: "Left Chest Embroidery — Digital Patch Studio",
  description:
    "Premium left chest embroidery digitizing: crisp small text, balanced density, clean pathing, and production-ready machine files with quick turnaround.",
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
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Left Chest Embroidery</span>
      </nav>

      {/* HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>DIGITIZING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Left Chest <span className="text-sky-400">Embroidery Digitizing</span>
            </h1>
            <Lead className="mt-4">
              Clean lettering and smooth curves at compact sizes. We tune underlay, density,
              and travel so your logo stitches beautifully on polos and uniforms.
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
              src="/images/Left_Chest 1.jpg"
              alt="Left chest embroidery sample on fabric"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* BENEFITS (boxed grid) */}
      <Card>
        <H2>Why Left Chest Logos From DPS Run Clean</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Legible Small Text</h3>
            <p className="text-white/70 mt-1">Letter heights down to ~4–5 mm with tuned pull-comp & underlay.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Efficient Pathing</h3>
            <p className="text-white/70 mt-1">Smart entry/exit points and minimized trims keep runs tidy.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Satin & Fill Balance</h3>
            <p className="text-white/70 mt-1">Satins for fine strokes; fills for solids—angles aligned for shine.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Machine-Ready Files</h3>
            <p className="text-white/70 mt-1">Delivered in EMB, DST, PES with a PDF preview and color list.</p>
          </div>
        </div>
      </Card>

      {/* SIZE + VISUAL (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Recommended Sizes</H2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Typical width: <strong>3.0–3.5 in (75–90 mm)</strong></li>
              <li>Minimum letter height: <strong>4–5 mm</strong> for crisp readability</li>
              <li>Satin for outlines/small type; fill for thicker strokes and solids</li>
            </ul>
            <p className="mt-3 text-white/70">
              Share your garment and we’ll confirm ideal sizing and stitch plan.
            </p>
          </div>
          <div>
            <img
              src="/images/left chess 2.jpg"
              alt="Left chest sizing and placement visual"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* FORMATS + TURNAROUND (boxed two-up) */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2>Formats & Deliverables</H2>
          <Lead className="mt-3">EMB, DST, PES + PDF preview. Other formats upon request.</Lead>
          <div className="mt-4 flex items-center gap-4">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-10 h-10" loading="lazy" />
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-10 h-10" loading="lazy" />
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-10 h-10" loading="lazy" />
          </div>
        </Card>
        <Card>
          <H2>Turnaround & Revisions</H2>
          <Lead className="mt-3">
            Typical delivery in <strong>4–6 hours</strong>. Same-day rush available.
            Minor tweaks are included until it stitches clean.
          </Lead>
        </Card>
      </div>

      {/* GALLERY (boxed, equal look) */}
      <Card>
        <H2>Left Chest Gallery</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/TGOD-Left-Chest1.jpg",
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg",
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg",
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/HSA-Small-Lettering1.jpg",
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/3.jpg",
            "https://www.xtremeemb.com/wp-content/uploads/2022/10/Griffins-Applique1.jpg",
          ].map((src, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <img src={src} alt={`Left chest sample ${i + 1}`} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </Card>

      {/* PROCESS (boxed steps) */}
      <Card>
        <H2>How It Works</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">1) Share Artwork</h3>
            <p className="text-white/70 mt-1">Send your logo with size and garment details.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">2) Digitize & Test</h3>
            <p className="text-white/70 mt-1">Underlay, density, and pathing tuned for your fabric.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">3) Preview & Revise</h3>
            <p className="text-white/70 mt-1">PDF preview with quick tweaks if needed.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">4) Deliver Files</h3>
            <p className="text-white/70 mt-1">Final machine formats + color breakdown.</p>
          </div>
        </div>
      </Card>

      {/* PRICING TEASER (boxed) */}
      <Card>
        <H2>Simple, Fair Pricing</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/[0.04] p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold">Simple Logos</h3>
            <p className="text-white/70 mt-2">from $15</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold">Detailed Logos</h3>
            <p className="text-white/70 mt-2">from $25</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold">Rush Service</h3>
            <p className="text-white/70 mt-2">same-day available</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">
            See Full Pricing
          </a>
          <a href="/contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">
            Get Custom Quote
          </a>
        </div>
      </Card>

      {/* TECH NOTES (boxed two-up) */}
      <Card>
        <H2>Technical Notes</H2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li><strong>Underlay</strong>: edge-run for satins; zigzag/mesh for fills.</li>
              <li><strong>Density</strong>: tuned for pique vs smooth knits.</li>
              <li><strong>Compensation</strong>: pull/push balanced to keep outlines true.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li><strong>Min letter height</strong>: ~4–5 mm for readability.</li>
              <li><strong>Entry/Exit</strong>: minimize trims; logical travel points.</li>
              <li><strong>Deliverables</strong>: EMB, DST, PES + PDF preview.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to digitize your left chest logo?</H2>
            <Lead className="mt-2">Send your artwork—get a fast quote and ETA.</Lead>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
            </div>
          </div>
          <div>
            <img
              src="/images/Left_Chest 3.jpg"
              alt="Digitizing preview mockup"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
