"use client";
import Link from "next/link";
import { Navbar, FloatingWhatsApp, SERVICE_ICONS } from "@/components/dlh";
import { useT } from "@/lib/i18n";

/* ── Pricing data ── */
type Item = { name: string; price: string };
type Category = { title: string; slug: string; image: string; intro: string; items: Item[] };

const handymanData = (t: ReturnType<typeof useT>["t"]): Category[] => [
  {
    title: t.services.items.repairs.title,
    slug: "repairs",
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
    slug: "painting",
    image: "/paint.png",
    intro: t.services.items.painting.desc,
    items: [
      { name: "Painting (per m² — depending on area)", price: "Cg 35–75 + OB 6%" },
    ],
  },
  {
    title: t.services.items.plumbing.title,
    slug: "plumbing",
    image: "/plumb.png",
    intro: t.services.items.plumbing.desc,
    items: [
      { name: "Plumbing work (per hour)", price: "Cg 75 + OB 6%" },
      { name: "Bathroom service (per hour)", price: "Cg 75 + OB 6%" },
    ],
  },
  {
    title: t.services.items.electrical.title,
    slug: "electrical",
    image: "/electrical.png",
    intro: t.services.items.electrical.desc,
    items: [
      { name: "Outlets & switches (per outlet)", price: "Cg 10–15 + OB 6%" },
    ],
  },
  {
    title: "Windows & Doors",
    slug: "furniture",
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
    slug: "ac",
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
    slug: "car",
    image: "/car.png",
    intro: t.rentals.items.car.desc,
    items: [
      { name: "Daily rental", price: "Price on request" },
      { name: "Weekly rental", price: "Price on request" },
    ],
  },
  {
    title: t.rentals.items.jet.title,
    slug: "jet",
    image: "/jet.png",
    intro: t.rentals.items.jet.desc,
    items: [
      { name: "Hourly rental", price: "Price on request" },
      { name: "Half-day / full-day", price: "Price on request" },
    ],
  },
  {
    title: t.rentals.items.quad.title,
    slug: "quad",
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
    <div className="flex flex-col rounded-sm border border-border bg-surface-2 p-3 transition hover:border-[#0057B8]/50">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-border text-[#FFD100]">
          <span className="block h-5 w-5">{SERVICE_ICONS[cat.slug] ?? null}</span>
        </div>
        <h3 className="font-display text-[14px] font-normal text-fg leading-tight">{cat.title}</h3>
      </div>
      <ul className="mt-2 space-y-1 border-t border-border pt-2">
        {cat.items.map((it) => (
          <li key={it.name} className="flex items-start justify-between gap-2 text-[11px] leading-snug">
            <span className="text-muted">{it.name}</span>
            <span className="whitespace-nowrap font-semibold text-[#FFD100]">{it.price}</span>
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
    <main className="flex h-screen flex-col overflow-hidden bg-bg text-fg">
      <Navbar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted transition hover:text-fg">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              {t.nav.home}
            </Link>
            <span className="text-muted-soft">/</span>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">{t.servicesPage.eyebrow}</p>
            <h1 className="font-display text-base font-normal leading-none text-fg sm:text-lg">
              {t.servicesPage.title1} <span className="italic text-fg/60">{t.servicesPage.title2}</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+59995112097"
              className="hidden items-center gap-1.5 rounded-sm border border-fg/20 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-fg transition hover:border-fg/60 sm:inline-flex">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +5999 511 2097
            </a>
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#FFD100] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-black transition hover:bg-[#FFE166]">
              {t.common.whatsappNow}
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>

        {/* Main grid: handyman (left, larger) + rentals (right, smaller) */}
        <div className="grid flex-1 grid-cols-1 gap-3 overflow-auto px-5 py-4 lg:grid-cols-12 lg:gap-4 lg:overflow-hidden lg:px-8">
          <section className="flex flex-col lg:col-span-8">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-sm font-black uppercase tracking-wide">{t.servicesPage.handyHeading}</h2>
              <span className="text-[10px] text-muted-soft">{handyman.length} {t.services.eyebrow}</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {handyman.map((c) => <CompactCard key={c.title} cat={c} />)}
            </div>
          </section>

          <section className="flex flex-col lg:col-span-4">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-sm font-black uppercase tracking-wide">{t.servicesPage.rentalsHeading}</h2>
              <span className="text-[10px] text-muted-soft">{rentals.length} {t.rentals.eyebrow}</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-2">
              {rentals.map((c) => <CompactCard key={c.title} cat={c} />)}
            </div>
          </section>
        </div>

        {/* Footer strip: pricing notes */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-5 py-2.5 text-[11px] text-muted lg:px-8">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {t.servicesPage.pricingPoints.slice(0, 3).map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#FFD100]" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
                {p}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#FFD100] hover:text-[#FFE166]">
            {t.servicesPage.myFreeQuote}
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>

      <FloatingWhatsApp />
    </main>
  );
}
