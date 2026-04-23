"use client";
import React from "react";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="text-2xl font-black tracking-tight text-[#FFC300]">DLH</span>
          <span className="hidden text-[11px] font-bold uppercase leading-tight tracking-widest text-white sm:block">Diligence<br/>Local Handyman</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const href = l === "Services" ? "/services" : l === "Home" ? "/" : `/#${l.toLowerCase().replace(/\s/g,"")}`;
            return (
              <a key={l} href={href} className="text-[13px] font-semibold text-gray-300 transition hover:text-[#FFC300]">{l}</a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border-2 border-[#FFC300] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#FFC300] hover:text-black">
            <WhatsAppSVG cls="h-4 w-4" /> +5999 511 2097
          </a>
          <button onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden">
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
          className="w-full h-auto min-h-[420px] object-cover object-center" />

        {/* Bottom fade only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent pointer-events-none" />

        {/* Text + CTA — pinned to bottom-right, never covering the handyman */}
        <div className="absolute bottom-0 right-0 z-10 w-full sm:w-1/2 px-6 pb-8 sm:pb-12 lg:px-16 sm:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#FFC300] sm:text-xs">Cars · Jetski · Quad Rentals · Repair Services</p>
          <h1 className="mt-2 text-2xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            We fix it.<br />
            <span className="text-[#FFC300]">You enjoy it.</span>
          </h1>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-300 sm:ml-auto sm:text-sm">
            Your trusted local handyman for all jobs in Curaçao.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:justify-end">
            <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC300] px-6 py-3 text-xs font-extrabold text-black shadow-lg shadow-yellow-500/25 transition hover:bg-[#FFD54F] hover:scale-[1.03] sm:px-7 sm:py-3.5 sm:text-sm">
              <WhatsAppSVG cls="h-4 w-4 sm:h-5 sm:w-5" /> WhatsApp Us Now ›
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:border-[#FFC300] hover:text-[#FFC300] sm:px-7 sm:py-3.5 sm:text-sm">
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
    <footer id="contact" className="border-t border-white/10 bg-[#060911]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-2xl font-black text-[#FFC300]">DLH</span>
            <span className="text-[11px] font-bold uppercase leading-tight tracking-widest text-white">Diligence<br/>Local Handyman</span>
          </div>
          <p className="text-sm leading-7 text-gray-400">Your trusted partner for vehicle rentals and repair services in Curaçao.</p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href="https://instagram.com/diligencelocalhandyman" label="IG" />
            <SocialIcon href="https://wa.me/59995112097" label="WA" />
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Home","Services","About Us","Reviews","Contact"].map((l)=>(
              <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g,"")}`} className="transition hover:text-[#FFC300]">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</p>
          <ul className="space-y-3 text-sm text-gray-400">
            {["General Repairs","Painting","Plumbing","Electrical Work","Furniture Assembly","Air Conditioning","Car Rental","Jetski Rental","Quad Rental"].map((s)=>(
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</p>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#FFC300]">📞</span>
              <a href="tel:+59995112097" className="hover:text-[#FFC300]">+5999 511 2097</a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#FFC300]">✉️</span>
              <a href="mailto:Lokalhandyman84@gmail.com" className="hover:text-[#FFC300]">Lokalhandyman84@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#FFC300]">📷</span>
              <a href="https://instagram.com/diligencelocalhandyman" target="_blank" rel="noreferrer" className="hover:text-[#FFC300]">@diligencelocalhandyman</a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#FFC300]">📍</span>
              <span>Willemstad, Curaçao</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Diligence Local Handyman. All rights reserved. Built with pride in Curaçao 🇨🇼💛
      </div>
    </footer>
  );
}

/* ─────────────────── FLOATING WHATSAPP ─────────────────── */
export function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition hover:scale-110">
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

function SocialIcon({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-gray-400 transition hover:border-[#FFC300] hover:text-[#FFC300]">
      {label}
    </a>
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
