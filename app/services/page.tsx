export const metadata = { title: "Services — Digital Patch Studio" };

function Section({
  id,
  title,
  body,
  img,
}: {
  id: string;
  title: string;
  body: string;
  img?: string;
}) {
  return (
    <section id={id} className="mt-12 grid md:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-white/80">{body}</p>
      </div>
      {img ? (
        <div>
          <img src={img} alt={title} className="rounded-2xl w-full h-auto border border-white/10" loading="lazy" />
        </div>
      ) : (
        <div className="rounded-2xl w-full aspect-video border border-white/10 bg-white/5 grid place-content-center text-white/40">
          Add image later
        </div>
      )}
    </section>
  );
}

export default function Services(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-white/80 mt-2">
        Digitizing, vector conversion, and web/marketing — production-ready files with fast, friendly support.
      </p>

      {/* Digitizing Services — sub-sections */}
      <Section
        id="left-chest"
        title="Left Chest Embroidery"
        body="Clear lettering and smooth curves at compact sizes. Optimized underlay, density, and travel for polos and uniforms."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg"
      />
      <Section
        id="cap"
        title="Cap Embroidery"
        body="Center-seam aware pathing, tuned density for structured/unstructured crowns, and optional 3D puff setup."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/2.jpg"
      />
      <Section
        id="jacketback"
        title="Jacketback Embroidery"
        body="Large-format stitch plans with balanced fills, crisp outlines, and minimized trims — sized for visibility."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg"
      />
      <Section
        id="towel"
        title="Towel Embroidery"
        body="Loft-friendly density and underlay choices that keep small text readable on terry and plush fabrics."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg"
      />

      {/* Other service categories */}
      <Section
        id="vector"
        title="Raster To Vector Services"
        body="We redraw low-res artwork to sharp, scalable vector files (AI, SVG, EPS, PDF) ready for print and merch."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/08/service-2.jpg"
      />
      <Section
        id="marketing"
        title="Digital Marketing"
        body="Launch pages, ad creatives, and analytics setup that support real campaigns."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-06-2.png"
      />
      <Section
        id="seo"
        title="SEO / Social Media Marketing"
        body="On-page SEO, technical checks, and consistent social profiles for discoverability."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/seo-icon.png"
      />
      <Section
        id="webapps"
        title="Web & App Development"
        body="Modern Next.js sites and lightweight apps tailored to your workflow."
        img="https://www.xtremeemb.com/wp-content/uploads/2022/10/mockup-07-1-2.png"
      />
    </main>
  );
}
