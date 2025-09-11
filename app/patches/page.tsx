export const metadata = { title: "Custom Patches — Digital Patch Studio" };
export default function Patches(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Custom Patches</h1>
      <p className="text-white/80 mt-2">Durable threads, tidy edges, and consistent color matching. Send your artwork and we’ll recommend sizes and backing options.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} className="aspect-square rounded-2xl border border-white/10 bg-white/5 grid place-content-center text-white/40">
            Patch {i}
          </div>
        ))}
      </div>
    </main>
  );
}
