export const metadata = {
  title: "Apparels — Digital Patch Studio",
  description: "Lanyards, woven labels, tees, caps, hoodies, beanies, sports jerseys, gym wears, towels.",
};

function Card(props: any) {
  const { className = "", children } = props;
  return <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 ${className}`}>{children}</div>;
}

const items = [
  { href: "/apparels/lanyards", title: "Lanyards", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg" },
  { href: "/apparels/woven-labels", title: "Woven Labels", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/6.jpg" },
  { href: "/apparels/t-shirts", title: "T-Shirts", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg" },
  { href: "/apparels/caps", title: "Caps", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/3-1.jpg" },
  { href: "/apparels/hoodies", title: "Hoodies", img: "https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-03.png" },
  { href: "/apparels/beanies", title: "Beanies", img: "https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-01.png" },
  { href: "/apparels/sports-jerseys", title: "Sports Jerseys", img: "https://www.xtremeemb.com/wp-content/uploads/2022/11/digi-mark-02.png" },
  { href: "/apparels/gym-wears", title: "Gym Wears", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/1-1.jpg" },
  { href: "/apparels/towels", title: "Towels", img: "https://www.xtremeemb.com/wp-content/uploads/2022/10/4.jpg" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10 md:space-y-12">
      <Card>
        <h1 className="text-4xl md:text-5xl font-extrabold">Apparels</h1>
        <p className="mt-3 text-white/80">Quality garments & accessories with clean branding and reliable turnarounds.</p>
      </Card>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((x) => (
          <a key={x.href} href={x.href} className="group block rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:border-white/20">
            <img src={x.img} alt={x.title} className="w-full h-auto" loading="lazy" />
            <div className="p-4 flex items-center justify-between">
              <div className="font-semibold">{x.title}</div>
              <span className="text-sky-400 group-hover:translate-x-1 transition">→</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
