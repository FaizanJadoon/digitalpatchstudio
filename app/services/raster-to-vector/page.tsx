export const metadata = {
  title: "Raster to Vector — Digital Patch Studio",
  description:
    "Hand-traced raster to vector conversion for crisp, scalable artwork. Clean Beziers, organized layers, print-ready formats (AI, EPS, SVG, PDF), and fast turnaround.",
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
  // Hot-linked images so you see the full design immediately (swap to your assets before launch).
  const gallery = [
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/1.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/3.jpg",
    "https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Raster to Vector</span>
      </nav>

      {/* HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>VECTOR CONVERSION</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Raster to <span className="text-sky-400">Vector</span> Conversion
            </h1>
            <Lead className="mt-4">
              We redraw your bitmap (JPG/PNG) as clean, scalable vector art.
              Manual tracing ensures smooth Beziers, accurate corners, tidy layers, and production-ready color separation.
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
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg"
              alt="Raster to vector result preview"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* BENEFITS (boxed grid) */}
      <Card>
        <H2>Why Our Vectors Print Clean</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Hand-Traced Paths</h3>
            <p className="text-white/70 mt-1">No auto-trace junk: smooth Beziers and accurate corners.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Organized Layers</h3>
            <p className="text-white/70 mt-1">Clean layer/group structure for easy edits and color swaps.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Print-Ready Colors</h3>
            <p className="text-white/70 mt-1">Spot/solid colors separated and labeled for screen/vinyl.</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="" className="w-12 h-12 mb-3" loading="lazy" />
            <h3 className="font-semibold">Native Formats</h3>
            <p className="text-white/70 mt-1">AI, EPS, SVG, PDF delivered—open anywhere at any size.</p>
          </div>
        </div>
      </Card>

      {/* USE-CASES (boxed two-up) */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <H2>Where You’ll Use It</H2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
            <li>Screen printing & color separations</li>
            <li>Heat transfer & vinyl cutting</li>
            <li>Large-format signage & decals</li>
            <li>Embroidery art clean-ups (for patch artwork)</li>
          </ul>
        </Card>
        <Card>
          <H2>What You’ll Get</H2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
            <li>AI, EPS, SVG, PDF (native vectors)</li>
            <li>Organized layers/groups, named colors</li>
            <li>Optional black/white or spot-color variants</li>
            <li>Quick revisions if something looks off</li>
          </ul>
        </Card>
      </div>

      {/* BEFORE/AFTER or Visual (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Manual Redraw = Better Results</H2>
            <Lead className="mt-3">
              Auto-trace tools leave wobbly curves and messy shapes. We redraw paths by hand to
              keep curves smooth, corners crisp, and letterforms true—so your print/cut comes out clean.
            </Lead>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg"
              alt="Vector detail preview"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* GALLERY (boxed) */}
      <Card>
        <H2>Vector Gallery</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <img src={src} alt={`Vector sample ${i + 1}`} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </Card>

      {/* PRICING / CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Simple, Fair Pricing</H2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Basic logos & text: from <strong>$12</strong></li>
              <li>Detailed artwork: from <strong>$20</strong></li>
              <li>Complex illustrations: custom quote</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">See Full Pricing</a>
              <a href="/contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Get Custom Quote</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg"
              alt="High-detail vector sample"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
