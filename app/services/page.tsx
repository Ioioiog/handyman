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
