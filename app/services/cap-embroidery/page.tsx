export const metadata = {
  title: "Cap Embroidery — Digital Patch Studio",
  description:
    "Production-ready cap embroidery digitizing: center-seam aware pathing, clean small text, 3D puff options, and fast turnaround.",
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
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Left_Chest-1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/3d.png",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Butter-Cup.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/exit-3d-puff1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Ball-Cap1.jpg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Cap Embroidery</span>
      </nav>

      {/* HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>DIGITIZING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Cap <span className="text-sky-400">Embroidery Digitizing</span>
            </h1>
            <Lead className="mt-4">
              Optimized stitch files for structured and unstructured caps — clean small type,
              seam-aware pathing, and optional 3D puff setup.
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
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/Left_Chest-1.jpg"
              alt="Cap embroidery sample"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* FEATURES (boxed grid) */}
      <Card>
        <H2>Built For Real Caps</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Center-Seam Aware</h3>
            <p className="text-white/70 mt-1">Pathing and compensation tuned to run clean across the seam.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Small Text Clarity</h3>
            <p className="text-white/70 mt-1">Minimum letter heights respected; density adjusted for crown fabric.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Curved Surface Travel</h3>
            <p className="text-white/70 mt-1">Smart entry/exit points to reduce flagging and thread breaks.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">3D Puff Ready</h3>
            <p className="text-white/70 mt-1">Puff underlay and capping for bold raised lettering and shapes.</p>
          </div>
        </div>
      </Card>

      {/* SIZE + VISUAL (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Recommended Sizes</H2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Front width: <strong>~2.0–2.5 in (50–64 mm)</strong> depending on cap profile</li>
              <li>Suggested letter height: <strong>≥ 5–6 mm</strong> for crisp readability</li>
              <li>Choose puff for bold sans letters; keep thin strokes in satin</li>
            </ul>
            <p className="mt-3 text-white/70">
              Share your cap style (low/high profile, structured/unstructured) and we’ll confirm ideal sizing.
            </p>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3d.png"
              alt="Cap sizing and placement visual"
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
          <Lead className="mt-3">EMB, DST, PES + PDF preview. Other formats on request.</Lead>
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
            Minor tweaks are included until it runs clean.
          </Lead>
        </Card>
      </div>

      {/* GALLERY (boxed grid) */}
      <Card>
        <H2>Cap Gallery</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <img src={src} alt={`Cap sample ${i + 1}`} className="w-full h-auto" loading="lazy" />
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
            <p className="text-white/70 mt-1">Send the logo with cap style/profile and target size.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">2) Digitize & Test</h3>
            <p className="text-white/70 mt-1">Seam-aware pathing; underlay/density tuned for fabric.</p>
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
            <h3 className="text-xl font-semibold">Simple Front Logos</h3>
            <p className="text-white/70 mt-2">from $15</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-6 border border-white/10 text-center">
            <h3 className="text-xl font-semibold">Detailed / Puff Logos</h3>
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

      {/* CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to digitize your cap logo?</H2>
            <Lead className="mt-2">Send your artwork—get a fast quote and ETA.</Lead>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-06-2.png"
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
