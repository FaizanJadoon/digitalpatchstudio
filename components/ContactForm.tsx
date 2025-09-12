"use client";

export default function ContactForm() {
  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const name = (data.get("name") as string || "").trim();
    const email = (data.get("email") as string || "").trim();
    const phone = (data.get("phone") as string || "").trim();
    const service = (data.get("service") as string || "").trim();
    const message = (data.get("message") as string || "").trim();

    if (!name || !email || !message) {
      alert("Please fill your name, email and message.");
      return;
    }

    const to = "contact@digitalpatchstudio.com"; // change to your real inbox
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={send} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name *</label>
          <input name="name" required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-sky-500" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email *</label>
          <input name="email" type="email" required className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-sky-500" placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input name="phone" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-sky-500" placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label className="block text-sm mb-1">Service</label>
          <select name="service" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-sky-500" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Custom Patches</option>
            <option>Left Chest / Cap / Jacketback / Towel</option>
            <option>Raster to Vector</option>
            <option>Digital Marketing</option>
            <option>SEO / Social Media Marketing</option>
            <option>Web & App Development</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Message *</label>
        <textarea name="message" required rows={6} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 outline-none focus:border-sky-500" placeholder="Tell us about your project, sizes/quantities, deadline, etc." />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold">Send Message</button>
        <a href="mailto:contact@digitalpatchstudio.com" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 font-semibold">Email Us</a>
      </div>

      <p className="text-xs text-white/50 mt-1">
        Submitting opens your email client. Prefer a backend? I can wire this to an API route with Nodemailer or Formspree.
      </p>
    </form>
  );
}
