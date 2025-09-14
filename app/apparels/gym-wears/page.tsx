/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Gym Wears — Digital Patch Studio",
  description:
    "Gym Wears by Digital Patch Studio — quality materials, clean finishing, friendly support, and fair pricing.",
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
function CTA() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a href="/contact" className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold">Order Now</a>
      <a href="/pricing" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/apparels">Apparels</a> /{" "}
        <span className="text-white">Gym Wears</span>
      </nav>

      {/* HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>APPARELS</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Gym Wears</h1>
            <Lead className="mt-4">
              <br></br>
              Welcome to Digital Patch Studio, your destination for high-quality personalized gym apparel designed for every fitness enthusiast. Our activewear is crafted from durable, breathable, and comfortable materials, built to keep you performing at your best.

We offer a wide selection of customizable gym wear, including t-shirts, tank tops, leggings, and shorts. With our easy-to-use design options, you can create a bespoke workout outfit that reflects your unique style and fits your exact needs.
<br></br><br></br>
Why Choose Digital Patch Studio Gym Wear?
<br></br>
Customizable Designs – Choose your colors, images, logos, and fonts.
<br></br>
Performance Fabrics – Moisture-wicking, quick-drying, and breathable to keep you cool and dry.
<br></br>
Comfort & Flexibility – Designed for full range of motion, so nothing holds you back.
<br></br>
Versatility – Perfect for personal workouts, sports teams, or promotional fitness branding.
<br></br><br></br>
In a crowded gym, our custom gym apparel helps you stand out, feel confident, and push harder toward your goals.

<br></br> Share your material, design, size, and quantity requirements, and we’ll provide a personalized estimate. Start designing your unique Digital Patch Studio activewear today.
            </Lead>
            <CTA />
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2023/05/Gym-Wears.png"
              alt="Gym Wears"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>


      {/* CTA */}
      <Card>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to get started?</H2>
            <Lead className="mt-2">Send your artwork and quantities—get a same-day quote with timing and options.</Lead>
            <CTA />
          </div>
          <div>
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png" alt="" className="w-full h-auto opacity-70" loading="lazy" />
          </div>
        </div>
      </Card>
    </main>
  );
}
