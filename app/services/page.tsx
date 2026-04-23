"use client";
import Link from "next/link";
import { Navbar, Footer, FloatingWhatsApp } from "@/components/dlh";
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
      { name: "Minor repair (up to 1 hour)", price: "From ƒ60" },
      { name: "Standard repair (up to 3 hours)", price: "From ƒ150" },
      { name: "Full-day handyman service", price: "From ƒ400" },
      { name: "Door / lock repair or replacement", price: "From ƒ120" },
    ],
  },
  {
    title: t.services.items.painting.title,
    image: "/paint.png",
    intro: t.services.items.painting.desc,
    items: [
      { name: "Single room (walls, 1 coat)", price: "From ƒ350" },
      { name: "Single room (walls, 2 coats)", price: "From ƒ500" },
      { name: "Exterior wall (per m²)", price: "From ƒ35/m²" },
      { name: "Touch-ups & small areas", price: "From ƒ150" },
    ],
  },
  {
    title: t.services.items.plumbing.title,
    image: "/plumb.png",
    intro: t.services.items.plumbing.desc,
    items: [
      { name: "Leak diagnosis & fix", price: "From ƒ120" },
      { name: "Toilet / sink installation", price: "From ƒ200" },
      { name: "Water heater installation", price: "From ƒ350" },
      { name: "Drain unclogging", price: "From ƒ150" },
    ],
  },
  {
    title: t.services.items.electrical.title,
    image: "/electrical.png",
    intro: t.services.items.electrical.desc,
    items: [
      { name: "Outlet / switch replacement", price: "From ƒ80" },
      { name: "Light fixture installation", price: "From ƒ120" },
      { name: "Ceiling fan installation", price: "From ƒ200" },
      { name: "Electrical troubleshooting", price: "From ƒ150" },
    ],
  },
  {
    title: t.services.items.furniture.title,
    image: "/furniture.png",
    intro: t.services.items.furniture.desc,
    items: [
      { name: "Small item (chair, stool, shelf)", price: "From ƒ60" },
      { name: "Medium item (desk, dresser)", price: "From ƒ120" },
      { name: "Large item (wardrobe, bed)", price: "From ƒ250" },
      { name: "Bulk assembly (3+ items)", price: "Custom quote" },
    ],
  },
  {
    title: t.services.items.ac.title,
    image: "/ac.png",
    intro: t.services.items.ac.desc,
    items: [
      { name: "AC cleaning & service", price: "From ƒ150" },
      { name: "AC installation (split unit)", price: "From ƒ500" },
      { name: "Gas recharge", price: "From ƒ250" },
      { name: "Diagnostic visit", price: "From ƒ100" },
    ],
  },
];

const rentalsData = (t: ReturnType<typeof useT>["t"]): Category[] => [
  {
    title: t.rentals.items.car.title,
    image: "/car.png",
    intro: t.rentals.items.car.desc,
    items: [
      { name: "Economy car — daily", price: "From ƒ80/day" },
      { name: "Economy car — weekly", price: "From ƒ500/week" },
      { name: "SUV — daily", price: "From ƒ130/day" },
      { name: "SUV — weekly", price: "From ƒ800/week" },
    ],
  },
  {
    title: t.rentals.items.jet.title,
    image: "/jet.png",
    intro: t.rentals.items.jet.desc,
    items: [
      { name: "30 minutes", price: "From ƒ150" },
      { name: "1 hour", price: "From ƒ250" },
      { name: "2 hours", price: "From ƒ450" },
      { name: "Half-day package", price: "From ƒ700" },
    ],
  },
  {
    title: t.rentals.items.quad.title,
    image: "/quad.png",
    intro: t.rentals.items.quad.desc,
    items: [
      { name: "1 hour", price: "From ƒ120" },
      { name: "Half-day (4 hours)", price: "From ƒ350" },
      { name: "Full day (8 hours)", price: "From ƒ550" },
      { name: "Group tours (3+ quads)", price: "Custom quote" },
    ],
  },
];

function FreeQuoteBtn() {
  const { t } = useT();
  return (
    <a
      href="https://wa.me/59995112097"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC300] px-5 py-2.5 text-xs font-extrabold text-black transition hover:bg-[#FFD54F]"
    >
      {t.servicesPage.freeQuote} ›
    </a>
  );
}

function PriceCard({ cat }: { cat: Category }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[.07] bg-[#111627] transition hover:-translate-y-1 hover:border-[#FFC300]/30 hover:shadow-[0_8px_40px_rgba(255,195,0,.1)]">
      <div className="flex h-36 items-center justify-center overflow-hidden border-b border-white/[.05] bg-[#0B0F1A] sm:h-40">
        <img src={cat.image} alt={cat.title} className="h-full w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
        <FreeQuoteBtn />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useT();
  const handyman = handymanData(t);
  const rentals = rentalsData(t);
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />

      <section className="border-b border-white/[.06] bg-[#111627] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <Link href="/" className="hover:text-[#FFC300]">{t.nav.home}</Link>
            <span>›</span>
            <span className="text-white">{t.servicesPage.breadcrumb}</span>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[.3em] text-[#FFC300] sm:mt-6">{t.servicesPage.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {t.servicesPage.title1} <br /><span className="text-[#FFC300]">{t.servicesPage.title2}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-5 sm:text-base">
            {t.servicesPage.subtitle}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC300] px-6 py-3.5 text-sm font-extrabold text-black transition hover:bg-[#FFD54F]"
            >
              💬 {t.common.whatsappNow} ›
            </a>
            <a href="tel:+59995112097"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white"
            >
              📞 +5999 511 2097
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">{t.servicesPage.handyHeading}</h2>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {handyman.map((c) => (
              <PriceCard key={c.title} cat={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[.06] bg-[#111627] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.rentals.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">{t.servicesPage.rentalsHeading}</h2>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {rentals.map((c) => (
              <PriceCard key={c.title} cat={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-3xl border border-white/[.07] bg-[#111627] p-6 sm:p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.servicesPage.pricingEyebrow}</p>
            <h3 className="mt-3 text-2xl font-black sm:text-3xl">{t.servicesPage.pricingHeading}</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-300">
              {t.servicesPage.pricingPoints.map((p) => (
                <li key={p} className="flex gap-3"><span className="text-[#FFC300]">✓</span> {p}</li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/59995112097"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC300] px-7 py-3.5 text-sm font-extrabold text-black transition hover:bg-[#FFD54F]"
              >
                💬 {t.servicesPage.myFreeQuote} ›
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
