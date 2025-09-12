/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Digital Patch Studio",
  description:
    "Get a quick quote for patches, digitizing, vector art, and web/app development. Fast responses and friendly support.",
};

function Card(props: any) {
  const { className = "", children } = props;
  return <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>{children}</div>;
}
function H2({ children }: { children: React.ReactNode }) { return <h2 className="text-2xl md:text-3xl font-bold">{children}</h2>; }
function Lead({ children }: { children: React.ReactNode }) { return <p className="text-white/80">{children}</p>; }

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/60">
        <Link className="hover:text-white/90" href="/">Home</Link> / <span className="text-white">Contact</span>
      </nav>

      {/* Hero */}
      <Card>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">GET A QUOTE</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Contact <span className="text-sky-400">Digital Patch Studio</span></h1>
            <Lead className="mt-4">Share your artwork and quantity. We’ll reply fast with pricing, options, and timeline.</Lead>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white/60 text-sm">Email</div>
                <a href="mailto:contact@digitalpatchstudio.com" className="font-semibold">contact@digitalpatchstudio.com</a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-white/60 text-sm">Phone / WhatsApp</div>
                <a href="tel:+15551234567" className="font-semibold">+1 (555) 123-4567</a>
              </div>
            </div>
          </div>
          <div>
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/08/line-1.png" alt="" className="w-full h-auto rounded-2xl border border-white/10 opacity-80" loading="lazy" />
          </div>
        </div>
      </Card>

      {/* Form */}
      <Card>
        <H2>Tell us about your project</H2>
        <Lead className="mt-2">Files welcome (PNG, JPG, PDF, AI). Include sizes, placement, colors, and any deadlines.</Lead>
        <div className="mt-6">
          <ContactForm />
        </div>
      </Card>

      {/* Map / Office (optional visuals) */}
      <Card>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <H2>We work worldwide</H2>
            <Lead className="mt-2">Remote-first with fast turnaround. Shipments to US, CA, UK, EU, and beyond.</Lead>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <img src="https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg" alt="Studio" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </Card>
    </main>
  );
}
