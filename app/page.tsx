"use client";
import {
  Navbar,
  Hero,
  ServiceCard,
  TestimonialCard,
  Footer,
  FloatingWhatsApp,
} from "@/components/dlh";
import { useT } from "@/lib/i18n";

const locations = ["Willemstad", "Jan Thiel", "Blue Bay", "Westpunt", "Banda Abou", "Punda"];

export default function Page() {
  const { t } = useT();
  const services = [
    { ...t.services.items.repairs, image: "/repair.png" },
    { ...t.services.items.painting, image: "/paint.png" },
    { ...t.services.items.plumbing, image: "/plumb.png" },
    { ...t.services.items.electrical, image: "/electrical.png" },
    { ...t.services.items.furniture, image: "/furniture.png" },
    { ...t.services.items.ac, image: "/ac.png" },
  ];
  const rentals = [
    { ...t.rentals.items.car, image: "/car.png" },
    { ...t.rentals.items.jet, image: "/jet.png" },
    { ...t.rentals.items.quad, image: "/quad.png" },
  ];
  const testimonials = t.reviews.items;
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />
      <Hero />

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-10">
            {/* Left heading */}
            <div className="flex flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.services.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                {t.services.heading}
              </h2>
              <a href="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#FFC300]/40 px-6 py-2.5 text-xs font-bold text-white transition hover:border-[#FFC300] hover:text-[#FFC300]">
                {t.services.viewAll} &nbsp;›
              </a>
            </div>

            {/* Right cards — 3 per row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.title} title={s.title} description={s.desc} image={s.image} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RENTALS ═══════ */}
      <section className="border-y border-white/[.06] bg-[#111627] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-10">
            <div className="flex flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.rentals.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                {t.rentals.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {t.rentals.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {rentals.map((r) => (
                <ServiceCard key={r.title} title={r.title} description={r.desc} image={r.image} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section id="aboutus" className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left */}
            <div className="rounded-2xl border border-white/[.07] bg-[#111627] p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.why.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-black leading-tight">
                {t.why.title1}<br /><span className="text-[#FFC300]">{t.why.title2}</span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {t.why.body}
              </p>
              <ul className="mt-6 space-y-3">
                {t.why.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC300] text-[10px] font-black text-black">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — locations */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[.07]"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative flex h-full min-h-[300px] flex-col justify-between p-5 sm:min-h-[380px] sm:p-6">
                <div className="flex items-center justify-center flex-1">
                  <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#FFC300] text-black shadow-lg transition hover:scale-110">
                    <span className="ml-1 text-2xl font-bold">▶</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.why.locations}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {locations.map((l) => (
                      <span key={l} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MORE REVIEWS ═══════ */}
      <section id="reviews" className="border-t border-white/[.06] bg-[#111627] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">{t.reviews.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">{t.reviews.heading1} <span className="text-[#FFC300]">{t.reviews.heading2}</span></h2>
          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {testimonials.map((r) => (
              <TestimonialCard key={r.name} quote={r.quote} name={r.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#FFC300]/20 bg-gradient-to-br from-[#111627] via-[#141a2e] to-[#0B0F1A] shadow-2xl shadow-black/40">
            {/* decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FFC300]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FFC300]/5 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-16">
              {/* Left: heading + trust */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC300]/30 bg-[#FFC300]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.2em] text-[#FFC300]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC300] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFC300]" />
                  </span>
                  {t.cta.badge}
                </div>
                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {t.cta.title1} <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#FFC300] to-[#FFD54F] bg-clip-text text-transparent">{t.cta.title2}</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  {t.cta.body}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6 sm:max-w-md">
                  <div>
                    <div className="text-2xl font-black text-[#FFC300] sm:text-3xl">500+</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">{t.cta.stats.jobs}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#FFC300] sm:text-3xl">5★</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">{t.cta.stats.rating}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#FFC300] sm:text-3xl">24h</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">{t.cta.stats.response}</div>
                  </div>
                </div>
              </div>

              {/* Right: CTA buttons */}
              <div className="flex w-full flex-col gap-3 sm:max-w-xs lg:w-auto">
                <a
                  href="https://wa.me/59995112097"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFC300] to-[#FFD54F] px-6 py-4 text-sm font-extrabold text-black shadow-lg shadow-yellow-500/20 transition hover:shadow-yellow-500/40 hover:-translate-y-0.5 sm:px-8 sm:py-5 sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a3.04 3.04 0 00-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.cta.whatsapp}
                  <span className="transition group-hover:translate-x-1">›</span>
                </a>
                <a
                  href="tel:+59995112097"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/15 bg-white/[.02] px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-5 sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +5999 511 2097
                </a>
                <p className="mt-1 text-center text-[11px] leading-relaxed text-gray-500">
                  {t.cta.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
