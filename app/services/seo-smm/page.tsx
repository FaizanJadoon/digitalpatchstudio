export const metadata = {
  title: "SEO & Social Media Marketing — Digital Patch Studio",
  description:
    "Search + social that actually grows your brand: technical SEO, on-page, content, and always-on social publishing with clear reporting and fast tweaks.",
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
        <span className="text-white">SEO / Social Media Marketing</span>
      </nav>

      {/* 1) HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>MARKETING SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              SEO & <span className="text-sky-400">Social Media</span> Marketing
            </h1>
            <Lead className="mt-4">
              We blend search visibility with social reach. Practical plans, consistent posting,
              and on-site fixes that move rankings and engagement together.
            </Lead>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="/pricing" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png"
              alt="SEO and social marketing hero visual"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 2) SEO (boxed, icon grid) */}
      <Card>
        <H2>Search Engine Optimization</H2>
        <Lead className="mt-3">
          Technical hygiene + on-page structure + valuable content. We fix crawl issues, shape pages for
          relevance, and publish pieces that deserve to rank.
        </Lead>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {icon:"seo-icon.png", title:"Technical SEO", text:"Speed, indexing, sitemaps, schema—clean foundations for rankings."},
            {icon:"web-icon.png", title:"On-Page Structure", text:"Titles, headings, internal links, and topical clusters."},
            {icon:"content-icon.png", title:"Content Plan", text:"Briefs and articles targeting demand with genuine value."},
            {icon:"fb-ins-icon.png", title:"Local SEO", text:"GMB/NAP polish, local pages, and reviews workflow."},
          ].map((b,i)=>(
            <div key={i} className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
              <img src={`https://www.xtremeemb.com/wp-content/uploads/2022/10/${b.icon}`} alt="" className="w-12 h-12 mb-3" loading="lazy" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-white/70 mt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 3) SOCIAL (boxed, image + bullets) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Social Media Marketing</H2>
            <Lead className="mt-3">
              Consistent, brand-true publishing. We plan monthly calendars, design assets,
              and ship posts that earn saves, clicks, and DMs.
            </Lead>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Monthly calendars with copy + art</li>
              <li>Platform-native formats (Reels/Shorts/Stories)</li>
              <li>Comment and DM light community management</li>
              <li>Boosting & dark posts for conversion testing</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-02.png"
              alt="Social media content examples"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

       <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Digital Patch Studio – Proven Local SEO Services</H2>
            <Lead className="mt-3">
              Customers no longer rely on newspapers or yellow pages — they search online, instantly, for local businesses the moment they need them. If your business doesn’t appear in those searches, you’re losing valuable customers to your competitors.

At Digital Patch Studio, we provide cost-effective Local SEO solutions designed to put your business on the map — literally. Our strategies make sure your brand shows up at the exact moment potential clients are ready to visit, call, or make a purchase.

With us, you’re not just gaining visibility — you’re gaining customers.
            </Lead>
            
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/seo-smm-4.png"
              alt="Social media content examples"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

       <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Local SEO Services – Works for Every Business</H2>
            <Lead className="mt-3">
              While many organizations thrive on clients from across the globe, a large share of customers still prefer to work with local businesses they can trust. If your brand isn’t optimized for “local SEO services near me”, you’re missing out on a loyal customer base that’s already looking for what you offer.

At Digital Patch Studio, we integrate local SEO strategies into both the front end and back end of your website. This ensures your business appears where it matters most — in front of nearby customers who are ready to connect. People naturally want to engage with businesses they can reach in person, and by not investing in professional local SEO services, you’re leaving that market — and its loyalty — on the table.
            </Lead>
            
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/seo-smm-2.png"
              alt="Social media content examples"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

       <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Why Choose Digital Patch Studio as Your SMM Agency</H2>
            <Lead className="mt-3">
              We Help You Truly Connect With Clients
In today’s digital world, success starts with understanding your audience. We don’t just market — we build genuine connections that turn customers into loyal communities.

We Make Your Brand Stand Out Creatively
At Digital Patch Studio, we dive deep into your business, think like your customers, and craft creative campaigns that spark engagement, generate leads, and drive real sales.

We Position You as the Only Choice
With intelligent strategy and bold creativity, we ensure your brand isn’t just another option — it becomes the option. Choosing Digital Patch Studio means choosing an SMM partner that communicates with your audience on a deeper, lasting level.

            </Lead>
            
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/seo-smm-10.png"
              alt="Social media content examples"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 4) SEO + SMM Together (boxed, text focus) */}
      <Card>
        <H2>One Plan, Two Channels</H2>
        <Lead className="mt-3">
          Topics that attract search also power social. We repurpose the best ideas across both channels,
          so blogs feed carousels and reels, while social insights inform new SEO targets.
        </Lead>
        <img
          src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png"
          alt="" className="mt-6 w-full h-auto opacity-70" loading="lazy"
        />
      </Card>

      

      {/* 6) CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Get a Free SEO + Social Action Plan</H2>
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
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-03.png"
              alt="Marketing illustration"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
