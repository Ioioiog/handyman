import {
  Navbar,
  Hero,
  ServiceCard,
  TestimonialCard,
  Footer,
  FloatingWhatsApp,
} from "@/components/dlh";

/* ── Data ── */
const services = [
  { title: "General Repairs", desc: "Small or large jobs, we fix it right.", image: "/repair.png" },
  { title: "Painting", desc: "Interior & exterior with a perfect finish.", image: "/paint.png" },
  { title: "Plumbing", desc: "From leaks to full installations.", image: "/plumb.png" },
  { title: "Electrical Work", desc: "Safe installations, repairs & maintenance.", image: "/electrical.png" },
  { title: "Furniture Assembly", desc: "IKEA or custom — fast and precise.", image: "/furniture.png" },
  { title: "Air Conditioning", desc: "Installation, maintenance & repair.", image: "/ac.png" },
];

const rentals = [
  { title: "Car Rental", desc: "Reliable cars for exploring Curaçao.", image: "/car.png" },
  { title: "Jetski Rental", desc: "Hit the waves with our jetskis.", image: "/jet.png" },
  { title: "Quad Rental", desc: "Off-road adventures made easy.", image: "/quad.png" },
];

const testimonials = [
  { quote: "Fast service, top quality, and very friendly. Highly recommended in Curaçao!", name: "Michael, Willemstad" },
  { quote: "Very responsive on WhatsApp and easy to work with. Excellent local business.", name: "Sarah, Jan Thiel" },
  { quote: "Fixed our AC and plumbing in one visit. Professional and fair pricing.", name: "David, Blue Bay" },
];

const locations = ["Willemstad", "Jan Thiel", "Blue Bay", "Westpunt", "Banda Abou", "Punda"];

export default function Page() {
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
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Our Services</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                What can we help you with?
              </h2>
              <a href="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#FFC300]/40 px-6 py-2.5 text-xs font-bold text-white transition hover:border-[#FFC300] hover:text-[#FFC300]">
                View All Services &nbsp;›
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
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Vehicle Rentals</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Explore Curaçao your way
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Cars, jetskis, and quads with local support &amp; WhatsApp booking.
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
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Why Choose Us?</p>
              <h3 className="mt-4 text-3xl font-black leading-tight">
                Local. Reliable.<br /><span className="text-[#FFC300]">Skilled.</span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Diligence Local Handyman stands for quality, honesty, and clear communication. We treat your home or business like it&apos;s our own.
              </p>
              <ul className="mt-6 space-y-3">
                {["Local expertise in Curaçao", "Clear pricing — no surprises", "Fast response times", "Friendly & professional service"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-white">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC300] text-[10px] font-black text-black">✓</span>
                    {t}
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
                  <p className="text-sm font-bold text-white">Proudly serving all areas in Curaçao</p>
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
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#FFC300]">Reviews</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">What our <span className="text-[#FFC300]">clients say</span></h2>
          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/[.07] bg-[#111627]">
            <div className="flex flex-col items-center gap-6 p-6 text-center sm:p-10 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:p-14 lg:text-left">
              <div className="hidden lg:block">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 rounded-full bg-[#FFC300]/25 blur-3xl" />
                  <img src="/action.png" alt="Toolbox" className="relative h-full w-full object-contain" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">Ready to get your <span className="text-[#FFC300]">job done?</span></h2>
                <p className="mt-2 text-sm text-gray-400 sm:text-base">Contact us today for a free quote.</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <a href="https://wa.me/59995112097" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC300] px-6 py-3.5 text-sm font-extrabold text-black transition hover:bg-[#FFD54F] sm:px-7">
                  💬 WhatsApp Us Now ›
                </a>
                <a href="tel:+59995112097"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white sm:px-7">
                  📞 +5999 511 2097
                </a>
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
