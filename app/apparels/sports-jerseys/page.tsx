/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Sports Jerseys — Digital Patch Studio",
  description:
    "Sports Jerseys by Digital Patch Studio — quality materials, clean finishing, friendly support, and fair pricing.",
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
        <span className="text-white">Sports Jerseys</span>
      </nav>

      {/* HERO */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>APPARELS</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Sports Jerseys</h1>
            <Lead className="mt-4">
              <br></br>
              Welcome to Digital Patch Studio, where we create a wide range of personalized sports jerseys perfect for teams, clubs, and individual athletes.

Our jerseys are made from premium, breathable fabrics that keep you cool and comfortable during even the most intense games. With endless customization options, you can personalize your jersey with team colors, logos, names, numbers, fonts, and graphics — ensuring a unique design that matches your identity.

Built for Every Sport:
From basketball, soccer, and football to baseball and beyond, our custom jerseys help you stand out, showcase team spirit, and promote your organization in style.
<br></br><br></br>
Why Choose Digital Patch Studio Jerseys?
<br></br>
High-quality materials designed for durability and performance.
<br></br>
Fully customizable designs tailored to your team or personal style.
<br></br>
Breathable fabrics that ensure comfort in every match.
<br></br>
Suitable for both individual orders and full team outfits.
<br></br><br></br>
Whether you need jerseys for an entire team or a single customized sports shirt, we’ve got you covered.

 Share your material, design, size, and quantity details, and we’ll provide a personalized estimate. Don’t wait — bring your team’s identity to life with Digital Patch Studio custom jerseys today!
            </Lead>
            <CTA />
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2023/05/sports-04-2048x1455.png"
              alt="Sports Jerseys"
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
