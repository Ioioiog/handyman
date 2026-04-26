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
    { ...t.services.items.repairs, slug: "repairs", image: "/repair.png" },
    { ...t.services.items.painting, slug: "painting", image: "/paint.png" },
    { ...t.services.items.plumbing, slug: "plumbing", image: "/plumb.png" },
    { ...t.services.items.electrical, slug: "electrical", image: "/electrical.png" },
    { ...t.services.items.furniture, slug: "furniture", image: "/furniture.png" },
    { ...t.services.items.ac, slug: "ac", image: "/ac.png" },
  ];
  const rentals = [
    { ...t.rentals.items.car, slug: "car", image: "/car.png" },
    { ...t.rentals.items.jet, slug: "jet", image: "/jet.png" },
    { ...t.rentals.items.quad, slug: "quad", image: "/quad.png" },
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
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">
                <span className="font-display text-muted-soft">01</span>
                <span className="h-px w-8 bg-[#FFC300]/40" />
                {t.services.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
                {t.services.heading}
              </h2>
            </div>
            <a href="/services"
              className="inline-flex items-center gap-2 border-b border-[#FFC300]/60 pb-1 text-[11px] font-semibold uppercase tracking-[.18em] text-[#FFC300] transition hover:border-[#FFC300] hover:gap-3">
              {t.services.viewAll}
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-16 lg:grid-cols-3">
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
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">
              <span className="font-display text-muted-soft">02</span>
              <span className="h-px w-8 bg-[#FFC300]/40" />
              {t.rentals.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
              {t.rentals.heading}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {t.rentals.subtitle}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16">
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
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">
                <span className="font-display text-muted-soft">03</span>
                <span className="h-px w-8 bg-[#FFC300]/40" />
                {t.why.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
                {t.why.title1} <span className="italic text-fg/60">{t.why.title2}</span>
              </h3>
              <p className="mt-6 text-sm leading-7 text-muted">
                {t.why.body}
              </p>
              <ul className="mt-8 space-y-4">
                {t.why.points.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 border-t border-border pt-4 text-sm text-fg-soft">
                    <span className="font-display text-xs text-muted-soft">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
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
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">
              <span className="font-display text-muted-soft">04</span>
              <span className="h-px w-8 bg-[#FFC300]/40" />
              {t.reviews.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-normal leading-[1.1] text-fg sm:text-5xl">
              {t.reviews.heading1} <span className="italic text-fg/60">{t.reviews.heading2}</span>
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
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#FFC300]">
                <span className="font-display text-muted-soft">05</span>
                <span className="h-px w-8 bg-[#FFC300]/40" />
                {t.cta.badge}
              </p>
              <h2 className="mt-5 font-display text-4xl font-normal leading-[1.05] text-fg sm:text-5xl lg:text-6xl">
                {t.cta.title1} <span className="italic text-fg/60">{t.cta.title2}</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
                {t.cta.body}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-md">
                <div>
                  <div className="font-display text-3xl text-fg">500+</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-muted-soft">{t.cta.stats.jobs}</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-fg">5.0</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-muted-soft">{t.cta.stats.rating}</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-fg">24h</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-muted-soft">{t.cta.stats.response}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-4 lg:col-span-5">
              <a
                href="https://wa.me/59995112097"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FFC300] px-7 py-4 text-sm font-semibold tracking-wide text-black transition hover:bg-[#FFD54F]"
              >
                {t.cta.whatsapp}
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a
                href="tel:+59995112097"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-fg/40 px-7 py-4 text-sm font-semibold tracking-wide text-fg transition hover:border-fg/60"
              >
                +5999 511 2097
              </a>
              <p className="mt-1 text-center text-[11px] leading-relaxed text-muted-soft">
                {t.cta.disclaimer}
              </p>
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
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFC300] text-black shadow-xl shadow-yellow-500/40 transition hover:scale-110 sm:h-28 sm:w-28">
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
