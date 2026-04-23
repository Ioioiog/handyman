"use client";
import React from "react";
import Link from "next/link";

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
  const links = ["Home", "Services", "About Us", "Reviews", "Contact"];
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-xl font-black tracking-tight text-[#FFC300] sm:text-2xl">DLH</span>
          <span className="text-[10px] font-bold uppercase leading-tight tracking-widest text-white sm:text-[11px]">Diligence<br/>Local Handyman</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const href = l === "Services" ? "/services" : l === "Home" ? "/" : `/#${l.toLowerCase().replace(/\s/g,"")}`;
            return (
              <a key={l} href={href} className="text-[13px] font-semibold text-gray-300 transition hover:text-[#FFC300]">{l}</a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border-2 border-[#FFC300] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#FFC300] hover:text-black lg:px-5">
            <WhatsAppSVG cls="h-4 w-4" /> +5999 511 2097
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden">
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0B0F1A] px-5 pb-6 pt-4 lg:hidden">
          {links.map((l) => {
            const href = l === "Services" ? "/services" : l === "Home" ? "/" : `/#${l.toLowerCase().replace(/\s/g,"")}`;
            return (
              <a key={l} href={href} onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold text-gray-300 transition hover:text-[#FFC300]">{l}</a>
            );
          })}
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FFC300] py-3 text-sm font-bold text-black">
            <WhatsAppSVG cls="h-4 w-4" /> WhatsApp +5999 511 2097
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────────── HERO ─────────────────── */
export function Hero() {
  return (
    <section id="home" className="relative bg-[#0B0F1A]">
      <div className="relative w-full overflow-hidden">
        <img src="/hero.png" alt="Diligence Local Handyman — Cars, Jetski, Quad Rentals & Repair Services in Curaçao"
          className="w-full h-auto min-h-[360px] sm:min-h-[420px] object-cover object-center" />

        {/* Gradient — stronger on mobile so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/60 to-transparent sm:via-transparent pointer-events-none" />

        {/* Text + CTA — full width on mobile (centered), bottom-right on desktop */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-6 sm:left-auto sm:w-1/2 sm:px-6 sm:pb-12 lg:px-16 sm:text-right">
          <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#FFC300] sm:text-xs sm:tracking-[.3em]">Repairs · Painting · Plumbing · Electrical</p>
          <h1 className="mt-2 text-[26px] font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            We fix it.<br />
            <span className="text-[#FFC300]">You enjoy it.</span>
          </h1>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-300 sm:mt-3 sm:ml-auto sm:text-sm">
            Your trusted local handyman for all jobs in Curaçao.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-3">
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC300] px-6 py-3 text-sm font-extrabold text-black shadow-lg shadow-yellow-500/25 transition hover:bg-[#FFD54F] hover:scale-[1.03] sm:w-auto sm:px-7 sm:py-3.5">
              <WhatsAppSVG cls="h-5 w-5" /> WhatsApp Us Now ›
            </a>
            <a href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#FFC300] hover:text-[#FFC300] sm:w-auto sm:px-7 sm:py-3.5">
              Our Services ›
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
      <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">{description}</p>}
    </div>
  );
}

/* ─────────────────── SERVICE CARD ─────────────────── */
export function ServiceCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
      className="group block overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(255,195,0,.15)]">
      <img src={image} alt={title} className="block w-full h-auto" />
    </a>
  );
}

/* ─────────────────── COMPAT EXPORTS ─────────────────── */
export function HighlightCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm text-gray-400">{text}</p></div>;
}
export function MiniFeature({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-bold text-white">{title}</p><p className="mt-1 text-sm text-gray-400">{subtitle}</p></div>;
}
export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="rounded-2xl border border-white/[.07] bg-[#111627] p-8">
      <div className="text-[#FFC300] text-lg tracking-wider mb-4">★ ★ ★ ★ ★</div>
      <p className="text-[17px] leading-8 text-gray-200">&ldquo;{quote}&rdquo;</p>
      <p className="mt-5 text-sm font-semibold text-gray-500">— {name}</p>
    </div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-[#060911] to-[#030508]">
      {/* subtle gold top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC300]/40 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="text-3xl font-black tracking-tight text-[#FFC300]">DLH</span>
            <span className="text-[11px] font-bold uppercase leading-tight tracking-widest text-white">Diligence<br/>Local Handyman</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
            Your trusted local handyman in Curaçao. Quality repairs, honest pricing, and fast response — every time.
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

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-white">Company</p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="transition hover:text-[#FFC300]">Home</Link></li>
            <li><Link href="/services" className="transition hover:text-[#FFC300]">Services</Link></li>
            <li><a href="/#aboutus" className="transition hover:text-[#FFC300]">About Us</a></li>
            <li><a href="/#reviews" className="transition hover:text-[#FFC300]">Reviews</a></li>
            <li><a href="/#contact" className="transition hover:text-[#FFC300]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-white">Services</p>
          <ul className="space-y-3 text-sm text-gray-400">
            {["General Repairs","Painting","Plumbing","Electrical Work","Furniture Assembly","Air Conditioning"].map((s)=>(
              <li key={s}><Link href="/services" className="transition hover:text-[#FFC300]">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-white">Get in Touch</p>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="tel:+59995112097" className="group flex items-start gap-3 transition hover:text-white">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#FFC300] transition group-hover:bg-[#FFC300] group-hover:text-black">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-gray-500">Call us</span>
                  <span className="font-semibold">+5999 511 2097</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:Lokalhandyman84@gmail.com" className="group flex items-start gap-3 transition hover:text-white">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#FFC300] transition group-hover:bg-[#FFC300] group-hover:text-black">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-gray-500">Email</span>
                  <span className="break-all font-semibold">Lokalhandyman84@gmail.com</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#FFC300]">
                <PinIcon />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-wider text-gray-500">Based in</span>
                <span className="font-semibold text-gray-300">Willemstad, Curaçao</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[.07]">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-gray-500 lg:px-8">
          © 2026 Diligence Local Handyman. All rights reserved. Built in Curaçao 🇨🇼
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
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.03] text-gray-400 transition hover:border-[#FFC300] hover:bg-[#FFC300] hover:text-black"
    >
      {children}
    </a>
  );
}

/* ─────────────────── FLOATING WHATSAPP ─────────────────── */
export function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer" aria-label="WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition hover:scale-110 sm:bottom-5 sm:right-5">
      <WhatsAppSVG cls="h-7 w-7" />
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
