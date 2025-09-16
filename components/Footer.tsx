import Link from "next/link";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm text-white/70">
        <div>
          <div className="font-extrabold text-white text-lg">DigitalPatchStudio</div>
          <p className="mt-3">Digitizing, vector, and web solutions built to move fast and look sharp.</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Company</div>
          <ul className="space-y-2">
            <li><Link href="/#work" className="hover:text-sky-300">Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-sky-300">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-sky-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Policies</div>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-sky-300">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-sky-300">Refund Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-sky-300">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Get in touch</div>
          <p>Email: <a className="underline decoration-dotted" href="mailto:hello@digitalpatchstudio.com">hello@digitalpatchstudio.com</a></p>
          <p>WhatsApp: <a className="underline decoration-dotted" href="https://wa.me/0000000000" target="_blank">+00 000 0000000</a></p>
        </div>
      </div>
      <div className="text-center text-white/50 text-xs py-6 border-t border-white/10">© {year} Digital Patch Studio — All rights reserved.</div>
    </footer>
  );
}
