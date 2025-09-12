export const metadata = {
  title: "Custom Patches — Digital Patch Studio",
  description:
    "Embroidery, chenille, leather, woven, printed, sublimation and PVC patches — quality craft, friendly support, and fair pricing.",
};

function H2(props: any) { return <h2 className="text-2xl md:text-3xl font-bold">{props.children}</h2>; }
function Lead(props: any) { return <p className="text-white/80">{props.children}</p>; }
function Card(props: any) {
  const { className = "", children } = props;
  return <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>{children}</div>;
}
function Pill(props: any) {
  return <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">{props.children}</span>;
}
function OrderBtn() {
  return (
    <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold">
      Order Now
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* 1) HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>PATCHES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Quality <span className="text-sky-400">Custom Patches</span>
            </h1>
            <Lead className="mt-4">
              We focus on tight stitching, balanced density, and clear edges—plus helpful, always-on support.
              From PVC to sublimation, printing, chenille, leather and classic embroidery, we deliver
              durable patches with a friendly process and a satisfaction guarantee.
            </Lead>
            <div className="mt-6 flex gap-3"><OrderBtn /><a href="/pricing" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/08/photo-5-3.jpg"
              alt="Custom patches showcase"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 2) Embroidery Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Embroidery Patches</H2>
            <Lead className="mt-3">
              Meticulous digitizing and a three-step QA workflow give you crisp lettering and smooth fills.
              We review every logo for clarity, stitch order, and underlay so it runs cleanly on press.
              Need a sample stitch-out? We can provide one and refine until it’s right—then deliver in your
              requested format.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg"
              alt="Embroidery patch detail"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 3) Chenille Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Chenille Patches</H2>
            <Lead className="mt-3">
              Soft, elevated texture using short yarn tufts bound between base threads. We tune yarn density
              to prevent bald spots and combine chenille + embroidery for small details where needed—perfect
              for large varsity styles and statement pieces.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg"
              alt="Chenille patch texture"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 4) Leather Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Leather Patches</H2>
            <Lead className="mt-3">
              Debossed or engraved leather with clean edges and reliable backing options. We use quality hides
              and production methods so your mark looks sharp on hats, bags, and outerwear—built to age beautifully.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg"
              alt="Leather patch example"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 5) Woven Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Woven Patches</H2>
            <Lead className="mt-3">
              For designs too detailed for embroidery. Woven threads create fine lines and readable small type,
              producing photographic realism while keeping edges tidy and the hand feel slim.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg"
              alt="Woven patch with fine detail"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 6) Printed Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Printed Patches</H2>
            <Lead className="mt-3">
              Budget-friendly and highly flexible. We print artwork directly onto the substrate so gradients and
              tiny elements stay intact. Ideal when you want lots of color and intricate illustration without the
              limits of stitch density.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png"
              alt="Printed patch graphic"
              className="w-full h-auto rounded-2xl border border-white/10 opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 7) Sublimation Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Sublimation Patches</H2>
            <Lead className="mt-3">
              Full-color coverage with durable, fade-resistant output. Great for teams, events, and merch where
              timing and consistency matter—vivid results, fast turnarounds.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png"
              alt="Sublimation color sample"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 8) PVC Patches */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>PVC Patches</H2>
            <Lead className="mt-3">
              Tough, weather-proof PVC for outdoor and tactical use. Flexible, easy to clean, and highly legible—
              perfect for morale patches and gear that has to survive the elements.
            </Lead>
            <div className="mt-6"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-03.png"
              alt="PVC patch set"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 9) Recent Work */}
      <Card>
        <H2>Recent Work</H2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {src:"https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg", title:"Skull"},
            {src:"https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg", title:"FFDL"},
            {src:"https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg", title:"Lucky"},
          ].map((c,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03]">
              <img src={c.src} alt={c.title} className="w-full h-auto" loading="lazy" />
              <div className="p-4">
                <div className="font-semibold">{c.title}</div>
                <div className="text-white/60 text-sm">Best Quality • Starting from $1</div>
                <div className="mt-3"><OrderBtn /></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 10) CTA */}
      <Card>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <H2>Get a Quick Quote</H2>
            <Lead className="mt-2">
              Share your artwork and quantity—get pricing, backing options, and timing the same day.
            </Lead>
            <div className="mt-4"><OrderBtn /></div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png"
              alt=""
              className="w-full h-auto opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
