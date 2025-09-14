/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Beanies — Digital Patch Studio",
  description:
    "Beanies by Digital Patch Studio — quality materials, clean finishing, friendly support, and fair pricing.",
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
        <span className="text-white">Beanies</span>
      </nav>

      {/* HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>APPARELS</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Beanies</h1>
            <Lead className="mt-4">
              Custom Beanies – Warm, Stylish & Personalized

Custom beanies are snug-fitting knitted hats, typically made from wool or acrylic yarn, designed to keep the head and ears warm during colder months. Beyond their practicality, they are a stylish and effective way to promote a brand, team, or event. With options for embroidery or printing, beanies can showcase your logo, design, or message in a fashionable way.
<br></br>
Popular Styles Include:
<br></br><br></br>
Cuff Beanies – Featuring a folded edge for a classic, cozy look.
<br></br>
Pom-Pom Beanies – Topped with a decorative pom-pom for added personality.
<br></br>
Slouchy Beanies – Longer in length with a relaxed, unstructured fit.
<br></br><br></br>
Available in a wide range of colors, patterns, and styles, custom beanies can be tailored to match your brand identity or personal taste. They’re especially popular among sports teams, outdoor enthusiasts, and fashion-conscious individuals.

Simply share your material, design, size, and quantity details, and we’ll provide you with a personalized estimate.
            </Lead>
            <CTA />
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2023/03/CAP-06-1149x1536.png"
              alt="Beanies"
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
