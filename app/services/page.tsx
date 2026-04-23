import Link from "next/link";
import { Navbar, Footer, FloatingWhatsApp } from "@/components/dlh";

/* ── Pricing data ── */
type Item = { name: string; price: string };
type Category = { title: string; image: string; intro: string; items: Item[] };

const handyman: Category[] = [
  {
    title: "General Repairs",
    image: "/repair.png",
    intro: "Small and large fixes around the home or business.",
    items: [
      { name: "Minor repair (up to 1 hour)", price: "From ƒ60" },
      { name: "Standard repair (up to 3 hours)", price: "From ƒ150" },
      { name: "Full-day handyman service", price: "From ƒ400" },
      { name: "Door / lock repair or replacement", price: "From ƒ120" },
    ],
  },
  {
    title: "Painting",
    image: "/paint.png",
    intro: "Clean, professional interior and exterior paintwork.",
    items: [
      { name: "Single room (walls, 1 coat)", price: "From ƒ350" },
      { name: "Single room (walls, 2 coats)", price: "From ƒ500" },
      { name: "Exterior wall (per m²)", price: "From ƒ35/m²" },
      { name: "Touch-ups & small areas", price: "From ƒ150" },
    ],
  },
  {
    title: "Plumbing",
    image: "/plumb.png",
    intro: "From leaks to full installations — licensed work.",
    items: [
      { name: "Leak diagnosis & fix", price: "From ƒ120" },
      { name: "Toilet / sink installation", price: "From ƒ200" },
      { name: "Water heater installation", price: "From ƒ350" },
      { name: "Drain unclogging", price: "From ƒ150" },
    ],
  },
  {
    title: "Electrical Work",
    image: "/electrical.png",
    intro: "Safe installations, repairs and maintenance.",
    items: [
      { name: "Outlet / switch replacement", price: "From ƒ80" },
      { name: "Light fixture installation", price: "From ƒ120" },
      { name: "Ceiling fan installation", price: "From ƒ200" },
      { name: "Electrical troubleshooting", price: "From ƒ150" },
    ],
  },
  {
    title: "Furniture Assembly",
    image: "/furniture.png",
    intro: "IKEA or custom — fast and precise assembly.",
    items: [
      { name: "Small item (chair, stool, shelf)", price: "From ƒ60" },
      { name: "Medium item (desk, dresser)", price: "From ƒ120" },
      { name: "Large item (wardrobe, bed)", price: "From ƒ250" },
      { name: "Bulk assembly (3+ items)", price: "Custom quote" },
    ],
  },
  {
    title: "Air Conditioning",
    image: "/ac.png",
    intro: "Installation, maintenance and repair.",
    items: [
      { name: "AC cleaning & service", price: "From ƒ150" },
      { name: "AC installation (split unit)", price: "From ƒ500" },
      { name: "Gas recharge", price: "From ƒ250" },
      { name: "Diagnostic visit", price: "From ƒ100" },
    ],
  },
];

const rentals: Category[] = [
  {
    title: "Car Rental",
    image: "/car.png",
    intro: "Reliable cars for exploring all of Curaçao.",
    items: [
      { name: "Economy car — daily", price: "From ƒ80/day" },
      { name: "Economy car — weekly", price: "From ƒ500/week" },
      { name: "SUV — daily", price: "From ƒ130/day" },
      { name: "SUV — weekly", price: "From ƒ800/week" },
    ],
  },
  {
    title: "Jetski Rental",
    image: "/jet.png",
    intro: "Hit the waves with our well-maintained jetskis.",
    items: [
      { name: "30 minutes", price: "From ƒ150" },
      { name: "1 hour", price: "From ƒ250" },
      { name: "2 hours", price: "From ƒ450" },
      { name: "Half-day package", price: "From ƒ700" },
    ],
  },
  {
    title: "Quad Rental",
    image: "/quad.png",
    intro: "Off-road adventures made easy.",
    items: [
      { name: "1 hour", price: "From ƒ120" },
      { name: "Half-day (4 hours)", price: "From ƒ350" },
      { name: "Full day (8 hours)", price: "From ƒ550" },
      { name: "Group tours (3+ quads)", price: "Custom quote" },
    ],
  },
];

function PriceCard({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[.07] bg-[#111627] transition hover:-translate-y-1 hover:border-[#FFC300]/30 hover:shadow-[0_8px_40px_rgba(255,195,0,.1)]">
      <div className="flex h-40 items-center justify-center overflow-hidden border-b border-white/[.05] bg-[#0B0F1A]">
        <img src={cat.image} alt={cat.title} className="h-full w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-black text-white">{cat.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-400">{cat.intro}</p>
        <ul className="mt-5 flex-1 space-y-3 border-t border-white/[.05] pt-4">
          {cat.items.map((it) => (
            <li key={it.name} className="flex items-start justify-between gap-4 text-sm">
              <span className="text-gray-300">{it.name}</span>
              <span className="whitespace-nowrap font-bold text-[#FFC300]">{it.price}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/59995112097"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC300] px-5 py-2.5 text-xs font-extrabold text-black transition hover:bg-[#FFD54F]"
        >
          Get a Free Quote ›
        </a>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />

      {/* ── Page header ── */}
      <section className="border-b border-white/[.06] bg-[#111627] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <Link href="/" className="hover:text-[#FFC300]">Home</Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">All Services</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Everything we do, <br /><span className="text-[#FFC300]">in one place.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
            Transparent pricing for all our handyman services and rentals in Curaçao. All prices are starting points — final quote depends on the job. WhatsApp us any time for a free, no-obligation estimate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/59995112097"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC300] px-6 py-3 text-sm font-extrabold text-black transition hover:bg-[#FFD54F]"
            >
              💬 WhatsApp Us Now ›
            </a>
            <a
              href="tel:+59995112097"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white"
            >
              📞 +5999 511 2097
            </a>
          </div>
        </div>
      </section>

      {/* ── Handyman Services ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Handyman Services</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Home & business repairs</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {handyman.map((c) => (
              <PriceCard key={c.title} cat={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Rentals ── */}
      <section className="border-t border-white/[.06] bg-[#111627] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Vehicle Rentals</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Explore Curaçao your way</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentals.map((c) => (
              <PriceCard key={c.title} cat={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-3xl border border-white/[.07] bg-[#111627] p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Pricing Notes</p>
            <h3 className="mt-3 text-2xl font-black sm:text-3xl">How our pricing works</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-300">
              <li className="flex gap-3"><span className="text-[#FFC300]">✓</span> All prices are in Antillean guilders (ƒ) and are starting points.</li>
              <li className="flex gap-3"><span className="text-[#FFC300]">✓</span> Final quotes depend on job size, complexity and material costs.</li>
              <li className="flex gap-3"><span className="text-[#FFC300]">✓</span> Free quotes via WhatsApp — just send us a photo and description.</li>
              <li className="flex gap-3"><span className="text-[#FFC300]">✓</span> We serve all areas in Curaçao — some zones may include a small travel fee.</li>
              <li className="flex gap-3"><span className="text-[#FFC300]">✓</span> Weekend & emergency call-out rates may apply.</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/59995112097"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC300] px-7 py-3.5 text-sm font-extrabold text-black transition hover:bg-[#FFD54F]"
              >
                💬 Get My Free Quote ›
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
