export const metadata = { title: "Services — Digital Patch Studio" };
export default function Services(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <section id="digitizing" className="mt-8">
        <h2 className="text-xl font-semibold">Embroidery Digitizing</h2>
        <p className="text-white/80 mt-2">Left chest, caps, jacket backs, towels. Clean pathing, minimal trims, readable small text.</p>
      </section>
      <section id="vector" className="mt-8">
        <h2 className="text-xl font-semibold">Raster → Vector</h2>
        <p className="text-white/80 mt-2">We rebuild low-res logos to crisp, print-ready vectors (AI, EPS, SVG, PDF).</p>
      </section>
      <section id="marketing" className="mt-8">
        <h2 className="text-xl font-semibold">Digital Marketing</h2>
        <p className="text-white/80 mt-2">Launch pages, tracking, and ad-ready creatives to support your campaigns.</p>
      </section>
      <section id="seo" className="mt-8">
        <h2 className="text-xl font-semibold">SEO & Social</h2>
        <p className="text-white/80 mt-2">Foundational on-page SEO, technical checks, and social profile setup that matches your brand.</p>
      </section>
      <section id="webapps" className="mt-8">
        <h2 className="text-xl font-semibold">Web & App Development</h2>
        <p className="text-white/80 mt-2">Modern Next.js sites and simple apps tailored to your workflow.</p>
      </section>
    </main>
  );
}
