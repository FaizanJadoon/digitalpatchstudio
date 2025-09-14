export const metadata = {
  title: "Digital Marketing — Digital Patch Studio",
  description:
    "Affordable digital marketing for small businesses: strategy, content, social, and white-label support. Clear plans, fast execution, and measurable growth.",
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

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> /{" "}
        <a className="hover:text-white/90" href="/services">Services</a> /{" "}
        <span className="text-white">Digital Marketing</span>
      </nav>

      {/* 1) HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>MARKETING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Digital <span className="text-sky-400">Marketing</span> for Small Business
            </h1>
            <Lead className="mt-4">
              We plan and run practical campaigns—content, social, and paid—so your brand gets
              seen, remembered, and chosen. Built for small and mid-size teams.
            </Lead>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="/pricing" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png"
              alt="Marketing icons collage"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 2) TOP-QUALITY CONSULTING (boxed, text + image) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Top-Quality Digital Marketing Consulting</H2>
            <Lead className="mt-3">
              Old-school “blend in” doesn’t work. We help you stand out with positioning,
              messaging, and channel strategy that actually moves the needle.
              Expect practical plans, clear timelines, and results you can track.
            </Lead>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-03.png"
              alt="Multi-channel planning"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 3) GROWTH-DRIVEN APPROACH (boxed, text focus) */}
      <Card>
        <H2>Growth-Driven, Small-Business Friendly</H2>
        <Lead className="mt-3">
          Every tactic connects to revenue. We learn your business quickly, find friction,
          and design campaigns that increase visibility, leads, and conversion—without
          wasting your budget.
        </Lead>
        <img
          src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png"
          alt="" className="mt-6 w-full h-auto opacity-70" loading="lazy"
        />
      </Card>

      {/* 4) WHITE-LABEL SUPPORT (boxed, text + image) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Reliable White-Label Marketing</H2>
            <Lead className="mt-3">
              Agencies and busy teams plug us in to scale delivery under their brand.
              We handle production so you keep momentum—and margin.
            </Lead>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-02.png"
              alt="White-label marketing illustration"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 6) CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Get a Free Marketing Gameplan</H2>
            <Lead className="mt-2">
              Tell us your goals and channels—get timing, scope, and pricing same day.
            </Lead>
            <div className="mt-4 flex gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png"
              alt="Contact/quote illustration"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
