"use client";
import React from "react";
import Link from "next/link";
import { useT, LANG_META, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

/* ─────────────────── COLORS ─────────────────── */
const C = {
  bg: "#0B0F1A",
  card: "#111627",
  card2: "#161C2E",
  gold: "#FFC300",
  goldHover: "#FFD54F",
  green: "#25D366",
  text: "#CBD5E1",
  dim: "#64748B",
};

/* ─────────────────── NAVBAR ─────────────────── */
export function TopBar() { return null; }

export function Navbar() {
  const { t } = useT();
  const [open, setOpen] = React.useState(false);
  const navLinks: { key: string; label: string; href: string }[] = [
    { key: "home", label: t.nav.home, href: "/" },
    { key: "services", label: t.nav.services, href: "/services" },
    { key: "about", label: t.nav.about, href: "/#aboutus" },
    { key: "reviews", label: t.nav.reviews, href: "/#reviews" },
    { key: "contact", label: t.nav.contact, href: "/#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#FFC300] font-display text-[12px] font-semibold tracking-tight text-black">DLH</span>
          <span className="hidden text-[11px] font-medium uppercase leading-tight tracking-[.18em] text-fg/90 sm:block">Diligence Local Handyman</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.key} href={l.href} className="text-[13px] font-medium tracking-wide text-fg-soft transition hover:text-fg">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-[12px] font-semibold tracking-wide text-fg transition hover:border-[#FFC300] hover:text-[#FFC300]">
            <WhatsAppSVG cls="h-4 w-4" /> +5999 511 2097
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg lg:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-5 pb-6 pt-4 lg:hidden">
          {navLinks.map((l) => (
            <a key={l.key} href={l.href} onClick={() => setOpen(false)}
              className="block border-b border-fg/5 py-3 text-sm font-medium text-fg-soft transition hover:text-fg">{l.label}</a>
          ))}
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-[#FFC300] py-3 text-sm font-semibold text-black">
            <WhatsAppSVG cls="h-4 w-4" /> +5999 511 2097
          </a>
        </div>
      )}
    </header>
  );
}

/* ── Theme Toggle ── */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-fg/15 text-fg transition hover:border-fg/40"
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

/* ── Language Switcher ── */
function LanguageSwitcher() {
  const { lang, setLang } = useT();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-sm border border-fg/15 px-2.5 py-1.5 text-[11px] font-semibold tracking-wider text-fg transition hover:border-fg/40"
      >
        <span>{LANG_META[lang].label}</span>
        <svg viewBox="0 0 24 24" className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-sm border border-border bg-surface shadow-xl">
          {(Object.keys(LANG_META) as Lang[]).map((code) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-fg/5 ${lang === code ? "text-fg" : "text-muted"}`}
            >
              <span className="font-medium">{LANG_META[code].name}</span>
              <span className="text-[10px] tracking-[.15em] text-muted-soft">{LANG_META[code].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────── HERO ─────────────────── */
export function Hero() {
  const { t } = useT();
  return (
    <section id="home" className="relative bg-bg">
      <div className="relative w-full overflow-hidden">
        <img
          src="/hero.png"
          alt="Diligence Local Handyman"
          className="w-full h-auto min-h-[360px] sm:min-h-[420px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-8 sm:left-auto sm:w-1/2 sm:px-8 sm:pb-14 lg:px-16 lg:pb-20 sm:text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-fg/70 sm:text-[11px] sm:tracking-[.28em]">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-[34px] font-normal leading-[1.05] text-fg sm:text-5xl lg:text-[64px]">
            {t.hero.title1}<br />
            <span className="italic text-fg/60">{t.hero.title2}</span>
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-soft sm:ml-auto">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-row flex-wrap items-center gap-4 sm:justify-end sm:gap-6">
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#FFC300] px-5 py-3 text-[12px] font-semibold tracking-wide text-black transition hover:bg-[#FFD54F] sm:px-7 sm:text-[13px]">
              <WhatsAppSVG cls="h-4 w-4" /> {t.hero.whatsapp}
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 border-b border-fg/60 pb-1 text-[12px] font-semibold tracking-wide text-fg transition hover:border-[#FFC300] hover:text-[#FFC300] sm:text-[13px]">
              {t.hero.services}
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TRUST STRIP ─────────────────── */
export function TrustStrip() { return null; }

/* ─────────────────── SECTION HEADING ─────────────────── */
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-normal leading-[1.1] text-fg sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}

/* ─────────────────── SERVICE ICON MAP ─────────────────── */
export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  repairs: <WrenchIcon />,
  painting: <PaintIcon />,
  plumbing: <DropletIcon />,
  electrical: <PlugIcon />,
  furniture: <SofaIcon />,
  ac: <SnowflakeIcon />,
  car: <CarIcon />,
  jet: <JetskiIcon />,
  quad: <QuadIcon />,
};

/* ─────────────────── SERVICE CARD ─────────────────── */
export function ServiceCard({ title, description, image, imagePosition = "object-center" }: { title: string; description: string; slug?: string; index?: number; image?: string; imagePosition?: string }) {
  const { t } = useT();
  return (
    <a
      href="https://wa.me/59995112097"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-bg transition hover:-translate-y-0.5 hover:border-[#FFC300]/60 hover:shadow-[0_10px_40px_-12px_rgba(255,195,0,.25)]"
    >
      {image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 h-full w-full object-cover ${imagePosition} transition-transform duration-500 group-hover:scale-[1.04]`}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-normal leading-snug text-fg sm:text-xl">{title}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{description}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-[#FFC300] transition group-hover:gap-2.5">
          {t.services.learnMore}
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </div>
      </div>
    </a>
  );
}

/* ─────────────────── COMPAT EXPORTS ─────────────────── */
export function HighlightCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-fg/20 p-5"><h3 className="text-lg font-bold text-fg">{title}</h3><p className="mt-2 text-sm text-muted">{text}</p></div>;
}
export function MiniFeature({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="rounded-xl border border-fg/20 p-4"><p className="font-bold text-fg">{title}</p><p className="mt-1 text-sm text-muted">{subtitle}</p></div>;
}
export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="flex flex-col rounded-sm border border-border bg-bg p-7 sm:p-8">
      <div className="flex gap-1 text-fg">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M12 2l2.9 7h7l-5.7 4.3 2.2 7L12 16l-6.4 4.3 2.2-7L2 9h7z" />
          </svg>
        ))}
      </div>
      <p className="mt-5 font-display text-lg leading-[1.5] text-fg-soft">&ldquo;{quote}&rdquo;</p>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.18em] text-muted-soft">— {name}</p>
    </div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
export function Footer() {
  const { t } = useT();
  return (
    <footer id="contact" className="relative border-t border-border bg-surface-2 dark:bg-[#060911]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 sm:gap-12 sm:py-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#FFC300] font-display text-[14px] font-semibold tracking-tight text-black">DLH</span>
            <span className="font-display text-base text-fg">Diligence Local Handyman</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            {t.footer.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIconLink href="https://instagram.com/diligencelocalhandyman" label="Instagram">
              <InstagramIcon />
            </SocialIconLink>
            <SocialIconLink href="https://wa.me/59995112097" label="WhatsApp">
              <WhatsAppSVG cls="h-4 w-4" />
            </SocialIconLink>
            <SocialIconLink href="mailto:Lokalhandyman84@gmail.com" label="Email">
              <MailIcon />
            </SocialIconLink>
            <SocialIconLink href="tel:+59995112097" label="Phone">
              <PhoneIcon />
            </SocialIconLink>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-fg">{t.footer.company}</p>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link href="/" className="transition hover:text-[#FFC300]">{t.nav.home}</Link></li>
            <li><Link href="/services" className="transition hover:text-[#FFC300]">{t.nav.services}</Link></li>
            <li><a href="/#aboutus" className="transition hover:text-[#FFC300]">{t.nav.about}</a></li>
            <li><a href="/#reviews" className="transition hover:text-[#FFC300]">{t.nav.reviews}</a></li>
            <li><a href="/#contact" className="transition hover:text-[#FFC300]">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-fg">{t.footer.servicesCol}</p>
          <ul className="space-y-3 text-sm text-muted">
            {[t.services.items.repairs.title, t.services.items.painting.title, t.services.items.plumbing.title, t.services.items.electrical.title, t.services.items.furniture.title, t.services.items.ac.title].map((s)=>(
              <li key={s}><Link href="/services" className="transition hover:text-[#FFC300]">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-fg">{t.footer.contactCol}</p>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <a href="tel:+59995112097" className="group flex items-start gap-3 transition hover:text-fg">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-fg/5 text-[#FFC300] transition group-hover:bg-[#FFC300] group-hover:text-black">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-muted-soft">{t.footer.callUs}</span>
                  <span className="font-semibold">+5999 511 2097</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:Lokalhandyman84@gmail.com" className="group flex items-start gap-3 transition hover:text-fg">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-fg/5 text-[#FFC300] transition group-hover:bg-[#FFC300] group-hover:text-black">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-muted-soft">{t.footer.email}</span>
                  <span className="break-all font-semibold">Lokalhandyman84@gmail.com</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-fg/5 text-[#FFC300]">
                <PinIcon />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-wider text-muted-soft">{t.footer.basedIn}</span>
                <span className="font-semibold text-fg-soft">{t.footer.location}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-muted-soft lg:px-8">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

/* ── Modern social icon wrapper ── */
function SocialIconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-fg/[.03] text-muted transition hover:border-[#FFC300] hover:bg-[#FFC300] hover:text-black"
    >
      {children}
    </a>
  );
}

/* ─────────────────── FLOATING WHATSAPP ─────────────────── */
export function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer" aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#1FB559]">
      <WhatsAppSVG cls="h-6 w-6" />
    </a>
  );
}

/* ─────────────────── SVG ICONS ─────────────────── */
function WhatsAppSVG({ cls = "h-5 w-5" }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${cls} fill-current`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a3.04 3.04 0 00-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 16l1.5-4.5A2 2 0 018.4 10h7.2a2 2 0 011.9 1.5L19 16"/>
      <path d="M4 16h16v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z"/>
      <circle cx="7.5" cy="16.5" r="1.2"/><circle cx="16.5" cy="16.5" r="1.2"/>
    </svg>
  );
}

export function JetskiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M4 15c2.2 0 2.2 1 4.4 1s2.2-1 4.4-1 2.2 1 4.4 1 2.2-1 4.4-1"/>
      <path d="M6 13h7l2-3h2l1 3"/><path d="M12 10l-1-2h2"/>
    </svg>
  );
}

export function QuadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/>
      <path d="M8 17h8l-1.5-4H10l-2 4z"/><path d="M9 12l2-2h3l1 2"/><path d="M15 10l2-1"/>
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

export function PaintIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M19 3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
      <path d="M12 11v4"/><path d="M8 15h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2z"/>
    </svg>
  );
}

export function PlugIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v2a6 6 0 01-12 0V8h12z"/>
    </svg>
  );
}

export function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
    </svg>
  );
}

export function SofaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3"/>
      <path d="M2 11v5a2 2 0 002 2h16a2 2 0 002-2v-5a2 2 0 00-4 0v2H6v-2a2 2 0 00-4 0z"/>
      <path d="M4 18v2"/><path d="M20 18v2"/>
    </svg>
  );
}

export function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M12 2v20M2 12h20"/><path d="M20 16l-4-4 4-4"/><path d="M4 8l4 4-4 4"/><path d="M16 4l-4 4-4-4"/><path d="M8 20l4-4 4 4"/>
    </svg>
  );
}
