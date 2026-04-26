"use client";
import Link from "next/link";
import { Navbar, FloatingWhatsApp } from "@/components/dlh";
import { useT } from "@/lib/i18n";

/* ── Pricing data ── */
type Item = { name: string; price: string };
type Category = { title: string; image: string; intro: string; items: Item[] };

const handymanData = (t: ReturnType<typeof useT>["t"]): Category[] => [
  {
    title: t.services.items.repairs.title,
    image: "/repair.png",
    intro: t.services.items.repairs.desc,
    items: [
      { name: "Inspection fee", price: "Cg 55" },
      { name: "Installation & service (per hour)", price: "Cg 75 + OB 6%" },
      { name: "Transportation fee", price: "Cg 25–50" },
    ],
  },
  {
    title: t.services.items.painting.title,
    image: "/paint.png",
    intro: t.services.items.painting.desc,
    items: [
      { name: "Painting (per m² — depending on area)", price: "Cg 35–75 + OB 6%" },
    ],
  },
  {
    title: t.services.items.plumbing.title,
    image: "/plumb.png",
    intro: t.services.items.plumbing.desc,
    items: [
      { name: "Plumbing work (per hour)", price: "Cg 75 + OB 6%" },
      { name: "Bathroom service (per hour)", price: "Cg 75 + OB 6%" },
    ],
  },
  {
    title: t.services.items.electrical.title,
    image: "/electrical.png",
    intro: t.services.items.electrical.desc,
    items: [
      { name: "Outlets & switches (per outlet)", price: "Cg 10–15 + OB 6%" },
    ],
  },
  {
    title: "Windows & Doors",
    image: "/furniture.png",
    intro: "Installation of standard and aluminum windows and doors.",
    items: [
      { name: "Standard door installation", price: "Cg 175 + OB 6%" },
      { name: "Standard window installation", price: "Cg 150 + OB 6%" },
      { name: "Aluminum door installation", price: "Cg 275 + OB 6%" },
      { name: "Aluminum window installation", price: "Cg 225 + OB 6%" },
    ],
  },
  {
    title: t.services.items.ac.title,
    image: "/ac.png",
    intro: t.services.items.ac.desc,
    items: [
      { name: "Installation & service (per hour)", price: "Cg 75 + OB 6%" },
      { name: "Custom quote", price: "Depending on materials" },
    ],
  },
];

const rentalsData = (t: ReturnType<typeof useT>["t"]): Category[] => [
  {
    title: t.rentals.items.car.title,
    image: "/car.png",
    intro: t.rentals.items.car.desc,
    items: [
      { name: "Daily rental", price: "Price on request" },
      { name: "Weekly rental", price: "Price on request" },
    ],
  },
  {
    title: t.rentals.items.jet.title,
    image: "/jet.png",
    intro: t.rentals.items.jet.desc,
    items: [
      { name: "Hourly rental", price: "Price on request" },
      { name: "Half-day / full-day", price: "Price on request" },
    ],
  },
  {
    title: t.rentals.items.quad.title,
    image: "/quad.png",
    intro: t.rentals.items.quad.desc,
    items: [
      { name: "Hourly rental", price: "Price on request" },
      { name: "Half-day / full-day", price: "Price on request" },
      { name: "Group tours", price: "Price on request" },
    ],
  },
];

function CompactCard({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/[.07] bg-[#111627] p-3 transition hover:border-[#FFC300]/30">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0B0F1A]">
          <img src={cat.image} alt="" className="h-6 w-6 object-contain" />
        </div>
        <h3 className="text-[13px] font-bold text-white leading-tight">{cat.title}</h3>
      </div>
      <ul className="mt-2 space-y-1 border-t border-white/[.05] pt-2">
        {cat.items.map((it) => (
          <li key={it.name} className="flex items-start justify-between gap-2 text-[11px] leading-snug">
            <span className="text-gray-400">{it.name}</span>
            <span className="whitespace-nowrap font-bold text-[#FFC300]">{it.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useT();
  const handyman = handymanData(t);
  const rentals = rentalsData(t);
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#0B0F1A] text-white">
      <Navbar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[.06] bg-[#111627] px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[11px] font-medium text-gray-400 hover:text-[#FFC300]">
              ‹ {t.nav.home}
            </Link>
            <span className="text-gray-600">·</span>
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#FFC300]">{t.servicesPage.eyebrow}</p>
            <h1 className="text-base font-black leading-none sm:text-lg">
              {t.servicesPage.title1} <span className="text-[#FFC300]">{t.servicesPage.title2}</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+59995112097"
              className="hidden rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-bold text-white transition hover:border-white sm:inline-flex">
              📞 +5999 511 2097
            </a>
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC300] px-3.5 py-1.5 text-[11px] font-extrabold text-black transition hover:bg-[#FFD54F]">
              💬 {t.common.whatsappNow}
            </a>
          </div>
        </div>

        {/* Main grid: handyman (left, larger) + rentals (right, smaller) */}
        <div className="grid flex-1 grid-cols-1 gap-3 overflow-auto px-5 py-4 lg:grid-cols-12 lg:gap-4 lg:overflow-hidden lg:px-8">
          <section className="flex flex-col lg:col-span-8">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-sm font-black uppercase tracking-wide">{t.servicesPage.handyHeading}</h2>
              <span className="text-[10px] text-gray-500">{handyman.length} {t.services.eyebrow}</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {handyman.map((c) => <CompactCard key={c.title} cat={c} />)}
            </div>
          </section>

          <section className="flex flex-col lg:col-span-4">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-sm font-black uppercase tracking-wide">{t.servicesPage.rentalsHeading}</h2>
              <span className="text-[10px] text-gray-500">{rentals.length} {t.rentals.eyebrow}</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-2">
              {rentals.map((c) => <CompactCard key={c.title} cat={c} />)}
            </div>
          </section>
        </div>

        {/* Footer strip: pricing notes */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[.06] bg-[#111627] px-5 py-2.5 text-[11px] text-gray-400 lg:px-8">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {t.servicesPage.pricingPoints.slice(0, 3).map((p) => (
              <li key={p} className="flex items-center gap-1.5"><span className="text-[#FFC300]">✓</span> {p}</li>
            ))}
          </ul>
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FFC300] hover:text-[#FFD54F]">
            {t.servicesPage.myFreeQuote} ›
          </a>
        </div>
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
