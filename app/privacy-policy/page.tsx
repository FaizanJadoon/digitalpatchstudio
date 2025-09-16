export const metadata = {
  title: "Privacy Policy — Digital Patch Studio",
  description: "How Digital Patch Studio collects, uses, and protects your information.",
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
        <H1>Privacy Policy</H1>
        <P>Last updated: September 2025</P>
        <P>Digital Patch Studio (“DPS”, “we”, “our”) respects your privacy. This Policy explains what we collect, how we use it, and your rights.</P>

        <H2>Information We Collect</H2>
        <ul className="list-disc pl-6">
          <LI><b>Contact data</b> (name, email, phone) when you inquire or place orders.</LI>
          <LI><b>Project files</b> (logos/art, instructions) you provide to deliver Services.</LI>
          <LI><b>Usage data</b> (cookies/analytics) to improve our site and Services.</LI>
        </ul>

        <H2>How We Use Information</H2>
        <ul className="list-disc pl-6">
          <LI>Provide quotes, proofs, production, delivery, and support.</LI>
          <LI>Improve quality, troubleshoot issues, and develop new offerings.</LI>
          <LI>Send important notices about your orders; optional marketing with your consent.</LI>
        </ul>

        <H2>Sharing</H2>
        <ul className="list-disc pl-6">
          <LI>Trusted vendors (e.g., shipping, payment, production partners) strictly to fulfill your order.</LI>
          <LI>Legal requests when required by law.</LI>
        </ul>

        <H2>Cookies & Analytics</H2>
        <P>We may use cookies/analytics to understand site performance. You can adjust your browser settings to limit cookies.</P>

        <H2>Data Retention</H2>
        <P>We keep records as needed for operational, legal, and accounting purposes. You may request deletion where applicable.</P>

        <H2>Your Rights</H2>
        <P>Subject to your location’s laws, you may request access, correction, or deletion of your data. Contact us to exercise these rights.</P>

        <H2>Security</H2>
        <P>We use reasonable safeguards to protect personal data. No method of transmission or storage is 100% secure.</P>

        <H2>Children</H2>
        <P>Our Services are not directed to children under 13. We do not knowingly collect their data.</P>

        <H2>Changes</H2>
        <P>We may update this Policy from time to time. Continued use of our site after changes means you accept the revised Policy.</P>

        <H2>Contact</H2>
        <P>Email: <a className="text-sky-400 hover:underline" href="mailto:contact@digitalpatchstudio.com">contact@digitalpatchstudio.com</a></P>
      </Card>
    </main>
  );
}
