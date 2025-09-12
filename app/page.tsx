import Link from "next/link";

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-3xl font-extrabold">{k}</div>
      <div className="text-white/60 text-sm">{v}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* HERO */}
      <section className="py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            Premium <span className="text-sky-400">Embroidery Digitizing</span>{" "}
            & <span className="text-sky-400">Vector Art Services</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Digital Patch Studio delivers fast, accurate, and production-ready
            embroidery files and vector graphics. Trusted by decorators and print
            shops worldwide.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 transition font-semibold">See Pricing</Link>
            <Link href="/contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 transition font-semibold">Get Free Sample</Link>
          </div>
        </div>
        <div>
          <img
            src="https://www.xtremeemb.com/wp-content/uploads/2022/08/photo-5-3.jpg"
            alt="Banner artwork"
            className="rounded-xl w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* “EXPLORE / FEATURED” STRIP (mirrors their two image row) */}
      <section className="mt-6 grid md:grid-cols-2 gap-6">
        <img
          src="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-06-2.png"
          alt="T-shirt mockup"
          className="rounded-2xl w-full h-auto"
          loading="lazy"
        />
        <img
          src="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-07-1-2.png"
          alt="Digitized design"
          className="rounded-2xl w-full h-auto"
          loading="lazy"
        />
      </section>

      {/* WHY / SERVICES ICON GRID (mirrors their icons row) */}
      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Why Choose Digital Patch Studio?</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="Web/App" className="mx-auto w-20 h-auto mb-3" loading="lazy" />
            <h4 className="font-semibold">Web & App Portfolio</h4>
            <p className="text-white/70 mt-1">Modern, responsive builds for brand sites and portals.</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/web-icon.png" alt="Web Dev" className="mx-auto w-20 h-auto mb-3" loading="lazy" />
            <h4 className="font-semibold">Web Development</h4>
            <p className="text-white/70 mt-1">Clean code, fast performance, production-ready.</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/content-icon.png" alt="Content" className="mx-auto w-20 h-auto mb-3" loading="lazy" />
            <h4 className="font-semibold">Content Writing</h4>
            <p className="text-white/70 mt-1">On-brand copy that’s clear, concise, and SEO-aware.</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/fb-ins-icon.png" alt="Social" className="mx-auto w-20 h-auto mb-3" loading="lazy" />
            <h4 className="font-semibold">Facebook & Instagram Marketing</h4>
            <p className="text-white/70 mt-1">Creatives and campaigns that actually convert.</p>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png" alt="SEO" className="mx-auto w-20 h-auto mb-3" loading="lazy" />
            <h4 className="font-semibold">SEO Services</h4>
            <p className="text-white/70 mt-1">Technical, on-page, and content optimization.</p>
          </div>
          {/* feel free to add more tiles if you want to mirror every card; this keeps layout clean */}
        </div>
      </section>

      {/* STATS */}
      <section className="mt-20 grid md:grid-cols-3 gap-6">
        <Stat k="1000+" v="Logos Digitized" />
        <Stat k="10+ Years" v="Experience" />
        <Stat k="24/7" v="Support" />
      </section>

      {/* PORTFOLIO GRID (exact images they show in “Our Recent Work.”) */}
      <section id="portfolio" className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Digitizing & Vector Portfolio</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {/* Digitizing samples */}
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg" alt="The Jerk (Digitizing)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/2.jpg" alt="Trinity (Digitizing)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg" alt="Holy Jesus (Digitizing)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg" alt="Acrophobia (Digitizing)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          {/* Vector samples */}
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/1.jpg" alt="Ranchero (Vector)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/3.jpg" alt="Knight (Vector)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg" alt="Chihuahua (Vector)" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
        </div>
      </section>

      {/* PATCHES STRIP (their “Quality Custom Patches” gallery) */}
      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Quality Custom Patches</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/4-2.jpg" alt="PVC Patch 1" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/1-2.jpg" alt="PVC Patch 2" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/12-3.jpg" alt="PVC Patch 3" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/2-1-1.jpg" alt="Patch 4" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/14-1.jpg" alt="Patch 5" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
          <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/13-2.jpg" alt="Patch 6" className="rounded-2xl border border-white/15 w-full h-auto" loading="lazy" />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold">Production-Ready Embroidery & Vectors</h3>
          <p className="mt-2 text-white/80">
            We help brands, decorators, and shops deliver premium embroidery and
            print results with accurate files and flawless stitch work.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/pricing" className="px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">View Pricing</Link>
            <Link href="/contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 font-semibold">Contact Us</Link>
          </div>
        </div>
        <div>
          {/* they don’t have a single dedicated CTA image in uploads matching our earlier guess,
             so we keep the section clean; if you want I’ll add a specific CTA asset later. */}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Get a Quote</h2>
        <p className="mt-2 text-white/80">
          Send us your artwork — we’ll provide a quick quote and turnaround time.
        </p>
        <a href="mailto:hello@digitalpatchstudio.com" className="inline-block mt-6 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 font-semibold">
          hello@digitalpatchstudio.com
        </a>
      </section>
    </main>
  );
}
