"use client";
import { useRef, useState } from "react";
import {
  Navbar,
  Hero,
  ServiceCard,
  TestimonialCard,
  Footer,
  FloatingWhatsApp,
} from "@/components/dlh";
import { useT } from "@/lib/i18n";

const locations = [
  "Willemstad",
  "Punda",
  "Otrobanda",
  "Pietermaai",
  "Scharloo",
  "Saliña",
  "Mahaai",
  "Jan Thiel",
  "Caracasbaai",
  "Spanish Water",
  "Blue Bay",
  "Piscadera",
  "Sint Michiel",
  "Julianadorp",
  "Brakkeput",
  "Nieuwpoort",
  "Sint Willibrordus",
  "Soto",
  "Barber",
  "Lagun",
  "Westpunt",
  "Banda Abou",
  "Bándariba",
];

export default function Page() {
  const { t } = useT();
  const services = [
    { ...t.services.items.repairs, slug: "repairs", image: "/repair1.png" },
    { ...t.services.items.painting, slug: "painting", image: "/paint1.png" },
    { ...t.services.items.plumbing, slug: "plumbing", image: "/plumb1.png" },
    { ...t.services.items.electrical, slug: "electrical", image: "/electrical11.png" },
    { ...t.services.items.furniture, slug: "furniture", image: "/furniture11.png" },
    { ...t.services.items.ac, slug: "ac", image: "/ac11.png" },
  ];
  const rentals = [
    { ...t.rentals.items.car, slug: "car", image: "/car11.png" },
    { ...t.rentals.items.jet, slug: "jet", image: "/jet1.png" },
    { ...t.rentals.items.quad, slug: "quad", image: "/quad1.png" },
  ];
  const testimonials = t.reviews.items;
  return (
    <main className="min-h-screen bg-bg text-fg">
      <Navbar />
      <Hero />

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="border-b border-border py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
                <span className="font-display text-[#0057B8]">01</span>
                <span className="h-px w-8 bg-[#FFD100]/40" />
                {t.services.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
                {t.services.heading}
              </h2>
            </div>
            <a href="/services"
              className="inline-flex items-center gap-2 border-b border-[#FFD100]/60 pb-1 text-[11px] font-semibold uppercase tracking-[.18em] text-[#FFD100] transition hover:border-[#FFD100] hover:gap-3">
              {t.services.viewAll}
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 lg:mt-16">
            {services.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.desc} slug={s.slug} image={s.image} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RENTALS ═══════ */}
      <section className="border-b border-border bg-surface-2 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
              <span className="font-display text-[#0057B8]">02</span>
              <span className="h-px w-8 bg-[#FFD100]/40" />
              {t.rentals.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
              {t.rentals.heading}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {t.rentals.subtitle}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 lg:mt-16">
            {rentals.map((r, i) => (
              <ServiceCard key={r.title} title={r.title} description={r.desc} slug={r.slug} image={r.image} index={i + 1} imagePosition="object-bottom" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section id="aboutus" className="border-b border-border py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
                <span className="font-display text-[#0057B8]">03</span>
                <span className="h-px w-8 bg-[#FFD100]/40" />
                {t.why.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
                {t.why.title1} <span className="italic text-[#0057B8]">{t.why.title2}</span>
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                {t.why.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <h4 className="mt-8 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
                {t.why.processHeading}
              </h4>
              <ul className="mt-4 space-y-3">
                {t.why.process.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-fg-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD100]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 space-y-4">
                {t.why.points.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 border-t border-border pt-4 text-sm text-fg-soft">
                    <span className="font-display text-xs text-[#0057B8]">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-display text-lg italic leading-snug text-fg sm:text-xl">
                {t.why.tagline}
              </p>
            </div>

            <div className="lg:col-span-7">
              <VideoCard locations={locations} caption={t.why.locations} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MORE REVIEWS ═══════ */}
      <section id="reviews" className="border-b border-border bg-surface-2 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
              <span className="font-display text-[#0057B8]">04</span>
              <span className="h-px w-8 bg-[#FFD100]/40" />
              {t.reviews.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
              {t.reviews.heading1} <span className="italic text-[#0057B8]">{t.reviews.heading2}</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3">
            {testimonials.map((r) => (
              <TestimonialCard key={r.name} quote={r.quote} name={r.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-sm bg-[#002D72] p-8 dark:bg-[#0057B8] sm:p-12 lg:p-16">
            {/* subtle radial glow */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#0057B8] opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#FFD100] opacity-10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFD100]">
                  <span className="font-display text-white/70">05</span>
                  <span className="h-px w-8 bg-[#FFD100]/60" />
                  {t.cta.badge}
                </p>
                <h2 className="mt-5 font-display text-4xl font-normal leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  {t.cta.title1} <span className="italic text-[#FFD100]">{t.cta.title2}</span>
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/75">
                  {t.cta.body}
                </p>

                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 sm:max-w-md">
                  <div>
                    <div className="font-display text-3xl text-white">500+</div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/60">{t.cta.stats.jobs}</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-white">5.0</div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/60">{t.cta.stats.rating}</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-white">24h</div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/60">{t.cta.stats.response}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-4 lg:col-span-5">
                <a
                  href="https://wa.me/59995112097"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FFD100] px-7 py-4 text-sm font-semibold tracking-wide text-[#002D72] transition hover:bg-[#FFE166]"
                >
                  {t.cta.whatsapp}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a
                  href="tel:+59995112097"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/40 px-7 py-4 text-sm font-semibold tracking-wide text-white transition hover:border-white"
                >
                  +5999 511 2097
                </a>
                <p className="mt-1 text-center text-[11px] leading-relaxed text-white/55">
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

/* ── About-us video card with big yellow play button ── */
function VideoCard({ locations, caption }: { locations: string[]; caption: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-2">
        <video
          ref={ref}
          src="/0426.mp4"
          playsInline
          preload="metadata"
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        />
        {/* Play button overlay */}
        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/20"
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD100] text-black shadow-xl shadow-yellow-500/40 transition hover:scale-110 sm:h-28 sm:w-28">
              <svg viewBox="0 0 24 24" className="ml-1 h-10 w-10 sm:h-12 sm:w-12" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {/* Caption stacked below video on all devices */}
      <div className="mt-4 sm:mt-5">
        <p className="text-sm font-bold text-fg">{caption}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {locations.map((l) => (
            <span key={l} className="rounded-full border border-border bg-fg/5 px-3 py-1 text-xs text-fg-soft">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
