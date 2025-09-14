/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Towels — Digital Patch Studio",
  description:
    "Towels by Digital Patch Studio — quality materials, clean finishing, friendly support, and fair pricing.",
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
        <span className="text-white">Towels</span>
      </nav>

      {/* HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>APPARELS</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Towels</h1>
            <Lead className="mt-4">
              <br></br>
              At Digital Patch Studio, we create customized towels designed to match your unique style or business needs. Whether you want a monogram or name for personal use, or a logo or message for branding and events, our towels combine function with personalization.
<br></br>
Available in cotton, microfiber, or bamboo, our custom towels are versatile and suitable for:
<br></br><br></br>
Bath & Hand Towels
<br></br>
Beach & Gym Towels
<br></br>
Kitchen & Guest Towels
<br></br>
Sports & Rally Towels
<br></br>
Promotional Giveaways
<br></br><br></br>
We offer both sublimation printing and embroidery customization, giving you the flexibility to design a towel that’s truly one of a kind.

<br></br> Share your material, design, size, and quantity requirements, and we’ll provide you with a tailored estimate.
            </Lead>
            <CTA />
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2023/05/towel-03.png"
              alt="Towels"
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
