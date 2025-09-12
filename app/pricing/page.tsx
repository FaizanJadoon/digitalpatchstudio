export const metadata = {
  title: "Pricing — Digital Patch Studio",
  description:
    "Transparent pricing for patches, embroidery digitizing & vector art, and web development packages.",
};

function Card(props: any) {
  const { className = "", children } = props;
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

const Check = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={`w-5 h-5 ${className}`} fill="none" aria-hidden>
    <circle cx="10" cy="10" r="9" stroke="currentColor" className="opacity-60" />
    <path d="M6 10.5l2.4 2.4L14 7.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Cross = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={`w-5 h-5 ${className}`} fill="none" aria-hidden>
    <circle cx="10" cy="10" r="9" stroke="currentColor" className="opacity-60" />
    <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function Ribbon({ text = "25% OFF" }: { text?: string }) {
  return (
    <div className="absolute -right-1.5 top-3 rotate-45 select-none rounded bg-sky-500 px-3 py-1 text-[10px] font-bold tracking-wider">
      {text}
    </div>
  );
}

function PriceCard({
  title,
  subtitle,
  price,
  features,
  negatives = [],
  ribbon = false,
}: {
  title: string;
  subtitle?: string;
  price: string;
  features: string[];
  negatives?: string[];
  ribbon?: boolean;
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0b1230]">
      <div className="relative p-6 md:p-8 bg-[#0f1a46] text-center">
        {ribbon && <Ribbon />}
        <div className="text-4xl md:text-5xl font-extrabold tracking-wide text-white uppercase">{title}</div>
        {subtitle && <div className="mt-2 text-center text-white/80 tracking-wide">{subtitle}</div>}
      </div>
      <div className="p-6 md:p-8 bg-[#1b3f8a]">
        <div className="text-4xl md:text-5xl font-extrabold text-white text-center">{price}</div>
      </div>
      <ul className="divide-y divide-white/10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 px-6 md:px-8 py-3">
            <Check className="text-sky-400" />
            <span className="text-white/90">{f}</span>
          </li>
        ))}
        {negatives.map((f, i) => (
          <li key={`n-${i}`} className="flex items-center gap-3 px-6 md:px-8 py-3 opacity-80">
            <Cross className="text-rose-400" />
            <span className="line-through">{f}</span>
          </li>
        ))}
      </ul>
      {/* Order Now button */}
      <div className="p-6 md:p-8 bg-[#0b1230] border-t border-white/10">
        <a
          href="/contact"
          className="block w-full text-center px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const patchFeatures = [
    "Turnaround 8 to 10 days",
    "Free Sample",
    "Free Shipping",
    "No Tax Fees",
    "Max Quantity Less Price",
    "Free Artwork and Setup",
    "All Kind of Backing",
    "No Minimum Quantity",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-12 md:space-y-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <a className="hover:text-white/90" href="/">Home</a> / <span className="text-white">Pricing</span>
      </nav>

      {/* SECTION: PATCHES — now uses the same PriceCard component */}
      <section className="space-y-6">
        <div className="max-w-md mx-auto">
          <PriceCard
            title="All Kind of Patches"
            price="Starting From $1"
            features={patchFeatures}
          />
        </div>
      </section>

      {/* SECTION: DIGITIZING & VECTOR */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Digitizing &amp; Vector</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard
            ribbon
            title="Logo Digitizing"
            subtitle="UNDER 5 INCHES"
            price="Flat $15"
            features={[
              "Turnaround 4 to 5 hrs.",
              "Free Editing",
              "Free Revisions",
              "Quality Assurance",
              "All Formats",
              "Minor Edits",
              "Major Edits",
              "Source File",
              "Size Change",
            ]}
          />
          <PriceCard
            ribbon
            title="JACKET BACK"
            subtitle="DEPENDS ON THE COMPLEXITY"
            price="$25 to $75"
            features={[
              "Unlimited Stitches",
              "Free Editing",
              "List Free Revisions#3",
              "Quality Assurance",
              "All Formats",
              "Minor Edits",
              "Major Edits",
              "Source File",
              "Size Change",
            ]}
          />
          <PriceCard
            ribbon
            title="VECTOR ART"
            subtitle="DEPENDS ON THE COMPLEXITY"
            price="$15 to $75"
            features={[
              "Detail Oriented Designs",
              "Highly Detailed",
              "Tricky Color Requirements",
              "Shading Within Design",
              "Color Separation",
              "Highly Defined, Detailed Art",
              "Facial Features",
              "Color Gradation and Definition",
              "Color Separation Files",
            ]}
          />
        </div>
      </section>

      {/* SECTION: WEB DEVELOPMENT */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Web Development</h2>

        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard
            ribbon
            title="BASIC PACKAGE"
            subtitle="STARTER MOBILE FRIENDLY WEBSITE"
            price="$250"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
            ]}
            negatives={[
              "Hosting Setup",
              "Plug-in Integrations",
              "E-commerce Functionality",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
          <PriceCard
            ribbon
            title="STANDARD PACKAGE"
            subtitle="ADVANCE MOBILE FRIENDLY WEBSITE"
            price="$450"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
              "Plug-in Integrations",
              "E-commerce Functionality",
            ]}
            negatives={[
              "Hosting Setup",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
          <PriceCard
            ribbon
            title="PREMIUM PACKAGE"
            subtitle="ECOMMERCE MOBILE FRIENDLY WEBSITE"
            price="$750"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
              "Hosting Setup",
              "Plug-in Integrations",
              "E-commerce Functionality",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
        </div>

        {/* Row 2 (PHP website packages) */}
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard
            ribbon
            title="BASIC PACKAGE"
            subtitle="FOR PHP WEBSITE"
            price="$350"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
            ]}
            negatives={[
              "Hosting Setup",
              "Plug-in Integrations",
              "E-commerce Functionality",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
          <PriceCard
            ribbon
            title="STANDARD PACKAGE"
            subtitle="FOR PHP WEBSITE"
            price="$750"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
            ]}
            negatives={[
              "Hosting Setup",
              "Plug-in Integrations",
              "E-commerce Functionality",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
          <PriceCard
            ribbon
            title="PREMIUM PACKAGE"
            subtitle="FOR PHP WEBSITE"
            price="$1250"
            features={[
              "Functional Website",
              "Responsive Design",
              "Content Upload",
              "Opt-in Form",
              "Social Media Icons",
              "Speed Optimization",
              "Hosting Setup",
              "Plug-in Integrations",
              "E-commerce Functionality",
              "Payment Gateway Integration",
              "Unlimited Revisions",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
