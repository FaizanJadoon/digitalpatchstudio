export const metadata = {
  title: "Refund Policy — Digital Patch Studio",
  description: "How refunds, revisions, and replacements work at Digital Patch Studio.",
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
        <H1>Refund Policy</H1>
        <P>Last updated: September 2025</P>

        <H2>Eligibility</H2>
        <ul className="list-disc pl-6">
          <LI>For custom digitizing/vector files: refunds are available before final file delivery if we cannot meet the approved proof/spec.</LI>
          <LI>For physical goods (patches/apparel): replacements or partial refunds apply for manufacturing defects reported within 7 days of delivery with photos.</LI>
        </ul>

        <H2>Non-Refundable</H2>
        <ul className="list-disc pl-6">
          <LI>Approved proofs that were produced correctly to spec.</LI>
          <LI>Customer-provided errors (spelling, wrong sizes/quantities) after approval.</LI>
          <LI>Normal tolerances: minor color variance, thread dye tolerances, and sizing within industry standards.</LI>
        </ul>

        <H2>Revisions</H2>
        <ul className="list-disc pl-6">
          <LI>Most quotes include up to 2 minor revisions. Additional or scope-changing edits may be billed.</LI>
        </ul>

        <H2>Cancellations</H2>
        <ul className="list-disc pl-6">
          <LI>Before work starts: full refund of any prepayment.</LI>
          <LI>After work has begun: refund minus any completed work/materials.</LI>
        </ul>

        <H2>How to Request</H2>
        <ul className="list-disc pl-6">
          <LI>Email <a className="text-sky-400 hover:underline" href="mailto:contact@digitalpatchstudio.com">contact@digitalpatchstudio.com</a> with your order #, issue details, and clear photos (if applicable).</LI>
          <LI>We typically respond within 1 business day with next steps (rework, replacement, or refund).</LI>
        </ul>

        <H2>Chargebacks</H2>
        <P>Please contact us first—we can usually resolve issues faster than a card dispute.</P>
      </Card>
    </main>
  );
}
