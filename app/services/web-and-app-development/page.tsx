export const metadata = {
  title: "Web & App Development — Digital Patch Studio",
  description:
    "Full-stack web & mobile development: fast, reliable builds, performance monitoring, and integrations. A senior team that ships polished apps for iOS, Android, and the web.",
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
        <span className="text-white">Web & App Development</span>
      </nav>

      {/* 1) HERO (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Pill>DEVELOPMENT SERVICES</Pill>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Web & <span className="text-sky-400">Mobile App</span> Development
            </h1>
            <Lead className="mt-4">
              Digital Patch Studio designs and ships modern websites and apps—built for speed,
              reliability, and growth. We pair clean code with ongoing performance monitoring so
              your product keeps getting better after launch.
            </Lead>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="/pricing" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png"
              alt="Web & mobile development hero visual"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 2) TOP-RATED COMPANY (boxed + icons) */}
      <Card>
        <H2>Top-Rated Web & App Development Company</H2>
        <Lead className="mt-3">
          We work across 30+ languages and frameworks and integrate with the tools you already use:
          GitHub, Slack, Jira and more. Our developers ship quickly without sacrificing quality.
        </Lead>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {icon:"seo-icon.png", title:"Full-Stack", text:"Frontend, backend, cloud—end-to-end delivery."},
            {icon:"web-icon.png", title:"Tooling-Ready", text:"GitHub, Slack, Jira, CI/CD pipelines."},
            {icon:"content-icon.png", title:"Clean Code", text:"Patterns, tests, and docs baked in."},
            {icon:"fb-ins-icon.png", title:"Performance", text:"Monitoring and profiling from day one."},
          ].map((b,i)=>(
            <div key={i} className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
              <img src={`https://www.xtremeemb.com/wp-content/uploads/2022/10/${b.icon}`} alt="" className="w-12 h-12 mb-3" loading="lazy" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-white/70 mt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 3) TEAM STORY (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>A Competent Team That Cares</H2>
            <Lead className="mt-3">
              We started as a small engineering group with a simple goal: make it easier to build and
              maintain great software. Today, our distributed team ships production apps for clients
              worldwide—staying humble, helpful, and hungry to improve.
            </Lead>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Proven engineers across web, iOS, Android, and cloud</li>
              <li>Designers who understand UX, accessibility, and conversion</li>
              <li>Project leads who keep scope realistic and timelines honest</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/mob-and-app-3.png"
              alt="Product and engineering collaboration"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 4) TECHNICAL EXPERTISE (boxed) */}
      <Card>
        <H2>Technical Expertise</H2>
        <Lead className="mt-3">
          We build cross-platform and hybrid applications that run beautifully on iOS, Android, and the web.
          One codebase where it makes sense—native when you need it.
        </Lead>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">Cross-Platform</h3>
            <p className="text-white/70 mt-1">
              React Native, Flutter, Capacitor—shared UI systems and native modules where needed.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">Modern Web</h3>
            <p className="text-white/70 mt-1">
              Next.js, TypeScript, Tailwind, Node—SSR/SSG, APIs, and edge-ready deployments.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-5 border border-white/10">
            <h3 className="font-semibold">Cloud & Data</h3>
            <p className="text-white/70 mt-1">
              AWS/GCP, SQL/NoSQL, queues, caching, observability, and CI/CD.
            </p>
          </div>
        </div>
      </Card>

      {/* 5) CLIENT-FACING SOLUTIONS (boxed split) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <H2>Solutions for Client-Facing Apps</H2>
            <Lead className="mt-3">
              We follow agile practices and ship in tight loops so your customer-facing apps stay flexible,
              interoperable, and easy to evolve—no brittle, off-the-shelf limitations.
            </Lead>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
              <li>Revenue-driven roadmaps with measurable milestones</li>
              <li>API-first architectures for partner integrations</li>
              <li>Accessibility and internationalization from the start</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/mob-and-app-6.png"
              alt="Agile product delivery"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>

      {/* 6) VALUES (boxed + divider) */}
      <Card>
        <H2>Why Customers Stay With Us</H2>
        <Lead className="mt-3">
          Our values are simple: client satisfaction, innovation, openness, team unity, and growth.
          We use digital to move your business forward—clearly and consistently.
        </Lead>
        <img
          src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png"
          alt="" className="mt-6 w-full h-auto opacity-70" loading="lazy"
        />
      </Card>

      {/* 7) ALWAYS-ON SUPPORT (boxed) */}
      <Card>
        <H2>Always-On Support</H2>
        <Lead className="mt-3">
          We’re responsive and available. Tell us your goals, constraints, and deadlines—then lean on
          a team that’s easy to reach and easy to work with.
        </Lead>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Talk to Engineering</a>
          <a href="mailto:hello@digitalpatchstudio.com" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
        </div>
      </Card>

      {/* 8) CTA (boxed) */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <H2>Ready to build your next product?</H2>
            <Lead className="mt-2">
              Share your ideas and requirements—get a scoped plan, estimate, and timeline.
            </Lead>
            <div className="mt-4 flex gap-3">
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">Get Quote</a>
              <a href="/pricing" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">See Pricing</a>
            </div>
          </div>
          <div>
            <img
              src="https://www.xtremeemb.com/wp-content/uploads/2022/11/mob-and-app-4.png"
              alt="Product showcase"
              className="w-full h-auto rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
