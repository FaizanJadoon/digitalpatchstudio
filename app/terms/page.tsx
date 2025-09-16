export const metadata = {
  title: "Terms & Conditions — Digital Patch Studio",
  description: "Terms that govern using Digital Patch Studio services.",
};

function Card({ children, className="" }: any) {
  return <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>{children}</div>;
}
function H1({ children }: any) { return <h1 className="text-4xl md:text-5xl font-extrabold">{children}</h1>; }
function H2({ children }: any) { return <h2 className="text-2xl md:text-3xl font-bold mt-8">{children}</h2>; }
function P({ children }: any)  { return <p className="text-white/80 mt-3">{children}</p>; }
function LI({ children }: any) { return <li className="mt-2 text-white/80">{children}</li>; }

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-8">
      <Card>
        <H1>Terms &amp; Conditions</H1>
        <P>Last updated: September 2025</P>
        <P>Welcome to Digital Patch Studio (“DPS”, “we”, “our”, “us”). These Terms govern your access to and use of our website and services, including embroidery digitizing, custom patches, raster-to-vector artwork, digital marketing, SEO/SMM, and web & app development (“Services”). By using our Services, you agree to these Terms.</P>

        <H2>1) Quotes, Orders & Approvals</H2>
        <ul className="list-disc pl-6">
          <LI><b>Quotes</b> are estimates based on art, sizes, stitch count/complexity, techniques, materials, and quantities.</LI>
          <LI><b>Proofs</b>: We send digital proofs for approval. Production (or final file delivery) starts after your written approval.</LI>
          <LI><b>Revisions</b>: Unless otherwise stated, quotes include up to 2 minor revisions. Major reworks or scope changes may incur fees.</LI>
        </ul>

        <H2>2) Pricing & Payment</H2>
        <ul className="list-disc pl-6">
          <LI>Prices exclude taxes/shipping unless noted. Currency and payment terms appear on your invoice.</LI>
          <LI>For custom physical goods, partial or full prepayment may be required.</LI>
        </ul>

        <H2>3) Turnaround & Delivery</H2>
        <ul className="list-disc pl-6">
          <LI>Turnaround begins after proof approval and payment (if required).</LI>
          <LI>Shipping timelines are estimates. We aren’t liable for carrier delays once items leave our facility.</LI>
        </ul>

        <H2>4) Intellectual Property</H2>
        <ul className="list-disc pl-6">
          <LI>You represent you have rights to any logos/art supplied. You retain your IP; you grant DPS a limited license to use supplied assets to fulfill your order.</LI>
          <LI>Digitized files, vectors, and developed code delivered under your invoice are for your use per agreed scope. DPS may showcase non-confidential work in our portfolio unless you request otherwise in writing.</LI>
        </ul>

        <H2>5) Acceptable Use</H2>
        <ul className="list-disc pl-6">
          <LI>No infringing, unlawful, hateful, or misleading content. We may refuse projects at our discretion.</LI>
        </ul>

        <H2>6) Warranties & Disclaimers</H2>
        <ul className="list-disc pl-6">
          <LI>Services are provided “as is”. For apparel/patches, minor variations in color, thread dye lots, or sizing may occur.</LI>
          <LI>For digital deliverables, we test standard environments but can’t guarantee compatibility with all systems.</LI>
        </ul>

        <H2>7) Limitation of Liability</H2>
        <P>To the fullest extent permitted by law, DPS shall not be liable for indirect, incidental, or consequential damages. Our aggregate liability shall not exceed the amount you paid for the specific order giving rise to the claim.</P>

        <H2>8) Returns & Refunds</H2>
        <P>See our <a className="text-sky-400 hover:underline" href="/refund-policy">Refund Policy</a> for details.</P>

        <H2>9) Changes to Terms</H2>
        <P>We may update these Terms from time to time. Continued use of our Services means you accept the updated Terms.</P>

        <H2>10) Contact</H2>
        <P>Email: <a className="text-sky-400 hover:underline" href="mailto:contact@digitalpatchstudio.com">contact@digitalpatchstudio.com</a></P>
      </Card>
    </main>
  );
}
