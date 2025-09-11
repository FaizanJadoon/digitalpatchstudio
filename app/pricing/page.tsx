export const metadata = { title: "Pricing — Digital Patch Studio" };
const tiers = [
  { name: "Patches", price: "From $15", desc: "Clean borders, accurate colors, iron-on or sew-on." },
  { name: "Digitizing / Vector", price: "From $15", desc: "Small text optimization, multi-format export." },
  { name: "Web Development", price: "From $299", desc: "1-page landing or starter site. Custom quotes available." },
];
export default function Pricing(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {tiers.map(t=>(
          <div key={t.name} className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="text-xl font-semibold">{t.name}</div>
            <div className="text-3xl font-extrabold mt-2">{t.price}</div>
            <p className="text-white/70 mt-2">{t.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
