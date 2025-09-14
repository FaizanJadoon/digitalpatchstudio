export const metadata = {
  title: "Towel Embroidery — Digital Patch Studio",
  description:
    "Towel embroidery digitizing optimized for terry: proper underlay, density, and topping guidance for clean, raised stitches on plush fabrics.",
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
  // Hot-linked images from xtremeemb.com so you see a full page immediately.
  // Replace with your own assets before launch.
  const gallery = [
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Towel-1-e1666742567201.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Chenille-2-e1666742517346.jpeg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Cross-Stitch.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Rattlers-Chenille-2.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Sweet-Pea-Towel-1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/Duck-cross-stitch-1.jpg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Towel Embroidery</span>
      </nav>

      {/* HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>DIGITIZING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Towel <span className="text-sky-400">Embroidery Digitizing</span>
            </h1>
            <Lead className="mt-4">
              We set up stitch files to handle terry pile: stable underlay, proper density,
              and topping guidance for crisp, raised results on towels, robes, and bath sets.
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
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/Towel-1-e1666742567201.jpg"
              alt="Towel embroidery sample"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* FEATURES (boxed grid) */}
      <Card>
        <H2>Built For Terry & Plush Fabrics</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Pile Control</h3>
            <p className="text-white/70 mt-1">Underlay and density tailored to hold stitches above the pile.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Topping Guidance</h3>
            <p className="text-white/70 mt-1">Water-soluble topping recommended for crisp letters and edges.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Readable Letters</h3>
            <p className="text-white/70 mt-1">Min heights respected; satin widths kept above sink-in threshold.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Machine-Ready Files</h3>
            <p className="text-white/70 mt-1">EMB, DST, PES + PDF preview and color breakdown.</p>
          </div>
        </div>
      </Card>

      {/* SIZE + VISUAL (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Recommended Approaches</H2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Use satins for letters/lines where possible; switch to fills for bold areas.</li>
              <li>Letter height target: <strong>≥ 6–7&nbsp;mm</strong> for plush towels.</li>
              <li>Edge-run or double zigzag underlay to stabilize atop pile.</li>
            </ul>
            <p className="mt-3 text-white/70">
              Tell us towel GSM and weave; we’ll tune density, underlay, and compensation.
            </p>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/Chenille-2-e1666742517346.jpeg"
              alt="Towel embroidery sizing/coverage visual"
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
            Typical delivery in <strong>6–12 hours</strong>. Rush available.
            Minor tweaks included until it stitches clean.
          </Lead>
        </Card>
      </div>

      {/* GALLERY (boxed) */}
      <Card>
        <H2>Towel Gallery</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <img src={src} alt={`Towel sample ${i + 1}`} className="w-full h-auto" loading="lazy" />
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
            <p className="text-white/70 mt-1">Send logo + towel type (GSM, weave) and target size.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">2) Digitize & Test</h3>
            <p className="text-white/70 mt-1">Underlay/density tuned to sit above pile; topping recommended.</p>
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

      {/* CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to digitize your towel logo?</H2>
            <Lead className="mt-2">Send your artwork—get a fast quote and ETA.</Lead>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-06-2.png"
              alt="Embroidery preview mockup"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
