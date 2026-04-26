"use client";

import React from "react";
import Link from "next/link";
import { useT, LANG_META, type Lang } from "@/lib/i18n";

/* =========================================================
   HOME 2 — Professional / Minimal Style
   Light theme · Generous whitespace · Restrained palette
   ========================================================= */

const PHONE = "+59995112097";
const WHATSAPP = "https://wa.me/59995112097";
const EMAIL = "info@diligencelocalhandyman.com";

export default function Home2() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─────────────────── NAV ─────────────────── */
function Nav() {
  const { t, lang, setLang } = useT();
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/home2" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-neutral-900 text-[11px] font-bold tracking-tight text-white">
            DLH
          </div>
          <span className="hidden text-sm font-medium tracking-wide text-neutral-900 sm:block">
            Diligence Local Handyman
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {[
            { href: "#services", label: t.nav.services },
            { href: "#about", label: t.nav.about },
            { href: "#contact", label: t.nav.contact },
            { href: "/services", label: t.servicesPage.pricingHeading.split(" ")[0] || "Pricing" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] font-medium tracking-wide text-neutral-600 transition hover:text-neutral-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} />
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="hidden rounded-sm bg-neutral-900 px-4 py-2 text-[12px] font-semibold tracking-wide text-white transition hover:bg-neutral-700 md:inline-block">
            {t.hero.whatsapp}
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            className="md:hidden text-neutral-900">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="flex flex-col px-6 py-3">
            {[
              { href: "#services", label: t.nav.services },
              { href: "#about", label: t.nav.about },
              { href: "#contact", label: t.nav.contact },
              { href: "/services", label: "Pricing" },
            ].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3 text-sm text-neutral-700">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-sm border border-neutral-200 bg-white px-1 py-1">
      {(Object.keys(LANG_META) as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className={`rounded-[3px] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide transition ${
            lang === l ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"
          }`}>
          {LANG_META[l].label}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────── HERO ─────────────────── */
function Hero() {
  const { t } = useT();
  return (
    <section className="relative border-b border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        <div className="lg:col-span-6 xl:col-span-5">
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-500">
            <span className="h-px w-8 bg-neutral-400" />
            {t.hero.eyebrow}
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-neutral-900 md:text-6xl lg:text-[64px]">
            {t.hero.title1}
            <br />
            <span className="italic text-neutral-500">{t.hero.title2}</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-600">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-neutral-900 px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-neutral-700">
              {t.hero.whatsapp}
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link href="/services"
              className="inline-flex items-center gap-2 border-b border-neutral-900 px-1 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 transition hover:text-neutral-600 hover:border-neutral-400">
              {t.hero.services}
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
            <Stat n={t.cta.stats.jobs} l={t.cta.stats.jobs.toLowerCase().replace(/\d|\+/g, "").trim() || "Jobs"} />
            <Stat n={t.cta.stats.rating} l="Rating" />
            <Stat n={t.cta.stats.response} l="Response" />
          </div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 lg:aspect-[5/6]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85"
              alt="Professional handyman at work"
              className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden bg-white px-6 py-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-500">Curaçao</p>
            <p className="mt-1 font-serif text-xl text-neutral-900">{t.why.locations}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-neutral-900">{n}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-[.15em] text-neutral-500">{l}</div>
    </div>
  );
}

/* ─────────────────── TRUST STRIP ─────────────────── */
function Trust() {
  const items = [
    "Licensed & Insured",
    "10+ Years Experience",
    "Local Curaçao Team",
    "Free Quotes",
  ];
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-6 lg:px-10">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[.16em] text-neutral-600">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {it}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── SERVICES ─────────────────── */
const ICON: Record<string, React.ReactNode> = {
  repairs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-.5-.5-2 2.9-2.9z" />
    </svg>
  ),
  painting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h12v4H4z" />
      <path d="M16 6h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-9v3" />
      <path d="M8 14h4v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-3z" />
    </svg>
  ),
  plumbing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4v6a4 4 0 0 0 4 4h1v6" />
      <path d="M19 4v4h-4" />
      <path d="M15 4h4" />
      <path d="M8 20h4" />
    </svg>
  ),
  electrical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  furniture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M3 17a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h-2v-2H5v2H3v-3z" />
      <path d="M7 11h10" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="9" rx="1.5" />
      <path d="M7 14v2M12 14v3M17 14v2" />
      <path d="M6 9h12" />
    </svg>
  ),
};

function Services() {
  const { t } = useT();
  const items = [
    { key: "repairs", ...t.services.items.repairs },
    { key: "painting", ...t.services.items.painting },
    { key: "plumbing", ...t.services.items.plumbing },
    { key: "electrical", ...t.services.items.electrical },
    { key: "furniture", ...t.services.items.furniture },
    { key: "ac", ...t.services.items.ac },
  ];
  return (
    <section id="services" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-500">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-neutral-900 md:text-5xl">
              {t.services.heading}
            </h2>
          </div>
          <Link href="/services"
            className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-semibold tracking-wide text-neutral-900 transition hover:border-neutral-400 hover:text-neutral-600">
            {t.services.viewAll}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <article key={s.key} className="group flex flex-col bg-white p-8 transition hover:bg-neutral-50">
              <div className="flex h-12 w-12 items-center justify-center border border-neutral-200 text-neutral-900 transition group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                <span className="block h-6 w-6">{ICON[s.key]}</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="font-serif text-sm text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl text-neutral-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
              <Link href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[.14em] text-neutral-900 transition group-hover:gap-2.5">
                {t.services.learnMore}
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── ABOUT ─────────────────── */
function About() {
  const { t } = useT();
  return (
    <section id="about" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        <div className="lg:col-span-7">
          <div className="aspect-video w-full overflow-hidden bg-neutral-200">
            <video
              src="/0426.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-500">
            {t.why.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-neutral-900 md:text-5xl">
            {t.why.title1} <span className="italic text-neutral-500">{t.why.title2}</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600">{t.why.body}</p>

          <ul className="mt-10 grid grid-cols-1 gap-y-4">
            {t.why.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 border-t border-neutral-200 pt-4">
                <span className="mt-1 font-serif text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-neutral-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONTACT ─────────────────── */
function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className="bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-32">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-500">
            {t.cta.badge}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight md:text-6xl">
            {t.cta.title1} <span className="italic text-neutral-400">{t.cta.title2}</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400">{t.cta.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-200">
              {t.cta.whatsapp}
            </a>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-semibold tracking-wide text-white transition hover:text-neutral-300 hover:border-neutral-500">
              {PHONE}
            </a>
          </div>

          <p className="mt-8 text-xs text-neutral-500">{t.cta.disclaimer}</p>
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-8 border-t border-neutral-800 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <ContactRow label={t.footer.callUs} value={PHONE} href={`tel:${PHONE}`} />
            <ContactRow label={t.footer.email} value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow label={t.footer.basedIn} value={t.footer.location} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-500">{label}</p>
      <p className="mt-2 font-serif text-xl text-white transition group-hover:text-neutral-300">{value}</p>
    </>
  );
  return href ? (
    <a href={href} className="group block">{Inner}</a>
  ) : (
    <div>{Inner}</div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs sm:flex-row sm:items-center lg:px-10">
        <p>© {new Date().getFullYear()} Diligence Local Handyman. {t.footer.rights}</p>
        <p className="text-neutral-500">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
