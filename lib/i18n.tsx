"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "es" | "nl" | "pap";

export const LANG_META: Record<Lang, { label: string; flag: string; name: string }> = {
  en: { label: "EN", flag: "🇬🇧", name: "English" },
  es: { label: "ES", flag: "🇪🇸", name: "Español" },
  nl: { label: "NL", flag: "🇳🇱", name: "Nederlands" },
  pap: { label: "PAP", flag: "🇨🇼", name: "Papiamentu" },
};

/* ─────────────── TRANSLATIONS ─────────────── */
type Dict = {
  nav: { home: string; services: string; about: string; reviews: string; contact: string };
  hero: { eyebrow: string; title1: string; title2: string; subtitle: string; whatsapp: string; services: string };
  services: {
    eyebrow: string; heading: string; viewAll: string; learnMore: string;
    items: {
      repairs: { title: string; desc: string };
      painting: { title: string; desc: string };
      plumbing: { title: string; desc: string };
      electrical: { title: string; desc: string };
      furniture: { title: string; desc: string };
      ac: { title: string; desc: string };
    };
  };
  rentals: {
    eyebrow: string; heading: string; subtitle: string;
    items: {
      car: { title: string; desc: string };
      jet: { title: string; desc: string };
      quad: { title: string; desc: string };
    };
  };
  why: { eyebrow: string; title1: string; title2: string; body: string; points: string[]; locations: string };
  reviews: {
    eyebrow: string; heading1: string; heading2: string;
    items: { quote: string; name: string }[];
  };
  cta: {
    badge: string; title1: string; title2: string; body: string;
    stats: { jobs: string; rating: string; response: string };
    whatsapp: string; disclaimer: string;
  };
  footer: {
    tagline: string; company: string; servicesCol: string; contactCol: string;
    callUs: string; email: string; basedIn: string; location: string; rights: string;
  };
  servicesPage: {
    breadcrumb: string; eyebrow: string; title1: string; title2: string; subtitle: string;
    handyHeading: string; rentalsHeading: string;
    pricingEyebrow: string; pricingHeading: string; pricingPoints: string[];
    freeQuote: string; myFreeQuote: string;
  };
  common: { whatsappNow: string };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { home: "Home", services: "Services", about: "About Us", reviews: "Reviews", contact: "Contact" },
    hero: {
      eyebrow: "Repairs · Painting · Plumbing · Electrical",
      title1: "We fix it.",
      title2: "You enjoy it.",
      subtitle: "Your trusted local handyman for all jobs in Curaçao.",
      whatsapp: "WhatsApp Us",
      services: "Our Services",
    },
    services: {
      eyebrow: "Our Services",
      heading: "What can we help you with?",
      viewAll: "View All Services & Prices",
      items: {
        repairs: { title: "General Repairs", desc: "Small or large jobs, we fix it right." },
        painting: { title: "Painting", desc: "Interior & exterior with a perfect finish." },
        plumbing: { title: "Plumbing", desc: "From leaks to full installations." },
        electrical: { title: "Electrical Work", desc: "Safe installations, repairs & maintenance." },
        furniture: { title: "Furniture Assembly", desc: "IKEA or custom — fast and precise." },
        ac: { title: "Air Conditioning", desc: "Installation, maintenance & repair." },
      },
      learnMore: "Learn more",
    },
    rentals: {
      eyebrow: "Vehicle Rentals",
      heading: "Explore Curaçao your way",
      subtitle: "Cars, jetskis, and quads with local support & WhatsApp booking.",
      items: {
        car: { title: "Car Rental", desc: "Reliable cars for exploring Curaçao." },
        jet: { title: "Jetski Rental", desc: "Hit the waves with our jetskis." },
        quad: { title: "Quad Rental", desc: "Off-road adventures made easy." },
      },
    },
    why: {
      eyebrow: "Why Choose Us?",
      title1: "Local. Reliable.",
      title2: "Skilled.",
      body: "Diligence Local Handyman stands for quality, honesty, and clear communication. We treat your home or business like it's our own.",
      points: ["Local expertise in Curaçao", "Clear pricing — no surprises", "Fast response times", "Friendly & professional service"],
      locations: "Proudly serving all areas in Curaçao",
    },
    reviews: {
      eyebrow: "Reviews",
      heading1: "What our",
      heading2: "clients say",
      items: [
        { quote: "Fast service, top quality, and very friendly. Highly recommended in Curaçao!", name: "Michael, Willemstad" },
        { quote: "Very responsive on WhatsApp and easy to work with. Excellent local business.", name: "Sarah, Jan Thiel" },
        { quote: "Fixed our AC and plumbing in one visit. Professional and fair pricing.", name: "David, Blue Bay" },
      ],
    },
    cta: {
      badge: "Available Today",
      title1: "Ready to get your",
      title2: "job done right?",
      body: "Get a free, no-obligation quote in minutes. Message us on WhatsApp with a photo and quick description — we'll get back to you fast with a clear price.",
      stats: { jobs: "Jobs done", rating: "Avg rating", response: "Response" },
      whatsapp: "WhatsApp Us Now",
      disclaimer: "Free quote · No obligation · Fast response",
    },
    footer: {
      tagline: "Your trusted local handyman in Curaçao. Quality repairs, honest pricing, and fast response — every time.",
      company: "Company",
      servicesCol: "Services",
      contactCol: "Get in Touch",
      callUs: "Call us",
      email: "Email",
      basedIn: "Based in",
      location: "Willemstad, Curaçao",
      rights: "© 2026 Diligence Local Handyman. All rights reserved. Built in Curaçao 🇨🇼",
    },
    servicesPage: {
      breadcrumb: "Services",
      eyebrow: "All Services",
      title1: "Everything we do,",
      title2: "in one place.",
      subtitle: "Transparent pricing for all our handyman services and rentals in Curaçao. All prices are starting points — WhatsApp us any time for a free, no-obligation estimate.",
      handyHeading: "Home & business repairs",
      rentalsHeading: "Explore Curaçao your way",
      pricingEyebrow: "Pricing Notes",
      pricingHeading: "How our pricing works",
      pricingPoints: [
        "All prices are in Caribbean guilders (Cg) and are starting points.",
        "OB (sales tax) of 6% applies on top of labor & materials.",
        "Final quotes depend on job size, complexity and material costs.",
        "An inspection / evaluation quotation may be required before starting a job.",
        "Transportation fee (Cg 25–50) depends on quantity and distance.",
        "Free quotes via WhatsApp — just send us a photo and description.",
      ],
      freeQuote: "Get a Free Quote",
      myFreeQuote: "Get My Free Quote",
    },
    common: { whatsappNow: "WhatsApp Us Now" },
  },

  es: {
    nav: { home: "Inicio", services: "Servicios", about: "Nosotros", reviews: "Reseñas", contact: "Contacto" },
    hero: {
      eyebrow: "Reparaciones · Pintura · Plomería · Electricidad",
      title1: "Nosotros lo arreglamos.",
      title2: "Tú lo disfrutas.",
      subtitle: "Tu handyman local de confianza para todo trabajo en Curazao.",
      whatsapp: "Escríbenos",
      services: "Nuestros Servicios",
    },
    services: {
      eyebrow: "Nuestros Servicios",
      heading: "¿En qué podemos ayudarte?",
      viewAll: "Ver Todos los Servicios y Precios",
      items: {
        repairs: { title: "Reparaciones", desc: "Trabajos grandes o pequeños, lo hacemos bien." },
        painting: { title: "Pintura", desc: "Interior y exterior con acabado perfecto." },
        plumbing: { title: "Plomería", desc: "Desde fugas hasta instalaciones completas." },
        electrical: { title: "Electricidad", desc: "Instalaciones seguras, reparaciones y mantenimiento." },
        furniture: { title: "Montaje de Muebles", desc: "IKEA o personalizado — rápido y preciso." },
        ac: { title: "Aire Acondicionado", desc: "Instalación, mantenimiento y reparación." },
      },
      learnMore: "Saber más",
    },
    rentals: {
      eyebrow: "Alquiler de Vehículos",
      heading: "Explora Curazao a tu manera",
      subtitle: "Autos, jetskis y quads con soporte local y reserva por WhatsApp.",
      items: {
        car: { title: "Alquiler de Autos", desc: "Autos confiables para explorar Curazao." },
        jet: { title: "Alquiler de Jetski", desc: "Siente las olas con nuestros jetskis." },
        quad: { title: "Alquiler de Quad", desc: "Aventuras todoterreno con facilidad." },
      },
    },
    why: {
      eyebrow: "¿Por qué elegirnos?",
      title1: "Local. Confiable.",
      title2: "Profesional.",
      body: "Diligence Local Handyman significa calidad, honestidad y comunicación clara. Tratamos tu hogar o negocio como si fuera nuestro.",
      points: ["Experiencia local en Curazao", "Precios claros — sin sorpresas", "Respuesta rápida", "Servicio amable y profesional"],
      locations: "Atendemos todas las zonas de Curazao",
    },
    reviews: {
      eyebrow: "Reseñas",
      heading1: "Lo que dicen",
      heading2: "nuestros clientes",
      items: [
        { quote: "Servicio rápido, calidad superior y muy amables. ¡Muy recomendado en Curazao!", name: "Michael, Willemstad" },
        { quote: "Muy atentos por WhatsApp y fáciles de trabajar. Excelente negocio local.", name: "Sarah, Jan Thiel" },
        { quote: "Arreglaron el aire y la plomería en una sola visita. Profesional y justo.", name: "David, Blue Bay" },
      ],
    },
    cta: {
      badge: "Disponibles Hoy",
      title1: "¿Listo para que tu",
      title2: "trabajo esté bien hecho?",
      body: "Recibe un presupuesto gratis y sin compromiso en minutos. Envíanos un WhatsApp con una foto y breve descripción — te responderemos rápido con un precio claro.",
      stats: { jobs: "Trabajos", rating: "Valoración", response: "Respuesta" },
      whatsapp: "WhatsApp Ahora",
      disclaimer: "Presupuesto gratis · Sin compromiso · Respuesta rápida",
    },
    footer: {
      tagline: "Tu handyman local de confianza en Curazao. Reparaciones de calidad, precios honestos y respuesta rápida — siempre.",
      company: "Empresa",
      servicesCol: "Servicios",
      contactCol: "Contáctanos",
      callUs: "Llámanos",
      email: "Correo",
      basedIn: "Ubicados en",
      location: "Willemstad, Curazao",
      rights: "© 2026 Diligence Local Handyman. Todos los derechos reservados. Hecho en Curazao 🇨🇼",
    },
    servicesPage: {
      breadcrumb: "Servicios",
      eyebrow: "Todos los Servicios",
      title1: "Todo lo que hacemos,",
      title2: "en un solo lugar.",
      subtitle: "Precios transparentes para todos nuestros servicios y alquileres en Curazao. Todos los precios son puntos de partida — escríbenos por WhatsApp para un presupuesto gratis.",
      handyHeading: "Reparaciones para hogar y negocio",
      rentalsHeading: "Explora Curazao a tu manera",
      pricingEyebrow: "Notas de Precios",
      pricingHeading: "Cómo funciona nuestro precio",
      pricingPoints: [
        "Todos los precios están en florines caribeños (Cg) y son puntos de partida.",
        "Se aplica un 6% de OB (impuesto a las ventas) sobre mano de obra y materiales.",
        "El precio final depende del tamaño, la complejidad y los materiales.",
        "Puede requerirse una inspección o cotización previa antes de iniciar el trabajo.",
        "Cargo de transporte (Cg 25–50) según cantidad y distancia.",
        "Presupuestos gratis por WhatsApp — solo envía una foto y descripción.",
      ],
      freeQuote: "Pide Presupuesto Gratis",
      myFreeQuote: "Pedir Mi Presupuesto",
    },
    common: { whatsappNow: "WhatsApp Ahora" },
  },

  nl: {
    nav: { home: "Home", services: "Diensten", about: "Over Ons", reviews: "Reviews", contact: "Contact" },
    hero: {
      eyebrow: "Reparaties · Schilderen · Loodgieterij · Elektra",
      title1: "Wij repareren het.",
      title2: "U geniet ervan.",
      subtitle: "Uw betrouwbare lokale klusjesman voor elke klus op Curaçao.",
      whatsapp: "WhatsApp Ons",
      services: "Onze Diensten",
    },
    services: {
      eyebrow: "Onze Diensten",
      heading: "Waarmee kunnen we u helpen?",
      viewAll: "Bekijk Alle Diensten & Prijzen",
      items: {
        repairs: { title: "Reparaties", desc: "Kleine of grote klussen, wij doen het goed." },
        painting: { title: "Schilderwerk", desc: "Binnen en buiten met een perfecte afwerking." },
        plumbing: { title: "Loodgieterij", desc: "Van lekkages tot volledige installaties." },
        electrical: { title: "Elektra", desc: "Veilige installaties, reparaties en onderhoud." },
        furniture: { title: "Meubelmontage", desc: "IKEA of maatwerk — snel en nauwkeurig." },
        ac: { title: "Airconditioning", desc: "Installatie, onderhoud en reparatie." },
      },
      learnMore: "Meer info",
    },
    rentals: {
      eyebrow: "Voertuigverhuur",
      heading: "Ontdek Curaçao op uw manier",
      subtitle: "Auto's, jetski's en quads met lokale ondersteuning & boeking via WhatsApp.",
      items: {
        car: { title: "Autoverhuur", desc: "Betrouwbare auto's om Curaçao te verkennen." },
        jet: { title: "Jetskiverhuur", desc: "De golven op met onze jetski's." },
        quad: { title: "Quadverhuur", desc: "Off-road avontuur, makkelijk gemaakt." },
      },
    },
    why: {
      eyebrow: "Waarom Kiezen Voor Ons?",
      title1: "Lokaal. Betrouwbaar.",
      title2: "Vakkundig.",
      body: "Diligence Local Handyman staat voor kwaliteit, eerlijkheid en duidelijke communicatie. We behandelen uw huis of bedrijf als ons eigen.",
      points: ["Lokale expertise op Curaçao", "Duidelijke prijzen — geen verrassingen", "Snelle reactietijden", "Vriendelijk & professioneel"],
      locations: "Wij bedienen alle gebieden van Curaçao",
    },
    reviews: {
      eyebrow: "Reviews",
      heading1: "Wat onze",
      heading2: "klanten zeggen",
      items: [
        { quote: "Snelle service, topkwaliteit en erg vriendelijk. Zeker aanbevolen op Curaçao!", name: "Michael, Willemstad" },
        { quote: "Snel te bereiken via WhatsApp en prettig samenwerken. Uitstekend lokaal bedrijf.", name: "Sarah, Jan Thiel" },
        { quote: "Airco en loodgieterswerk in één bezoek gerepareerd. Professioneel en eerlijke prijs.", name: "David, Blue Bay" },
      ],
    },
    cta: {
      badge: "Vandaag Beschikbaar",
      title1: "Klaar om uw klus",
      title2: "goed te laten doen?",
      body: "Ontvang binnen enkele minuten een gratis offerte zonder verplichtingen. Stuur ons een WhatsApp met een foto en korte beschrijving — we reageren snel met een duidelijke prijs.",
      stats: { jobs: "Klussen", rating: "Beoordeling", response: "Reactie" },
      whatsapp: "Nu WhatsApp",
      disclaimer: "Gratis offerte · Geen verplichting · Snelle reactie",
    },
    footer: {
      tagline: "Uw betrouwbare lokale klusjesman op Curaçao. Kwaliteitswerk, eerlijke prijzen en snelle reactie — altijd.",
      company: "Bedrijf",
      servicesCol: "Diensten",
      contactCol: "Neem Contact Op",
      callUs: "Bel ons",
      email: "E-mail",
      basedIn: "Gevestigd in",
      location: "Willemstad, Curaçao",
      rights: "© 2026 Diligence Local Handyman. Alle rechten voorbehouden. Gemaakt op Curaçao 🇨🇼",
    },
    servicesPage: {
      breadcrumb: "Diensten",
      eyebrow: "Alle Diensten",
      title1: "Alles wat we doen,",
      title2: "op één plek.",
      subtitle: "Transparante prijzen voor al onze diensten en verhuur op Curaçao. Alle prijzen zijn richtprijzen — WhatsApp ons altijd voor een gratis, vrijblijvende offerte.",
      handyHeading: "Reparaties voor huis & bedrijf",
      rentalsHeading: "Ontdek Curaçao op uw manier",
      pricingEyebrow: "Prijsnotities",
      pricingHeading: "Hoe onze prijzen werken",
      pricingPoints: [
        "Alle prijzen zijn in Caribische guldens (Cg) en richtprijzen.",
        "6% OB (omzetbelasting) komt bovenop arbeid & materialen.",
        "De uiteindelijke prijs hangt af van omvang, complexiteit en materiaal.",
        "Een inspectie / beoordelingsofferte kan vereist zijn voor de start.",
        "Transportvergoeding (Cg 25–50) afhankelijk van hoeveelheid en afstand.",
        "Gratis offertes via WhatsApp — stuur ons een foto en beschrijving.",
      ],
      freeQuote: "Vraag Gratis Offerte",
      myFreeQuote: "Mijn Gratis Offerte",
    },
    common: { whatsappNow: "Nu WhatsApp" },
  },

  pap: {
    nav: { home: "Kas", services: "Servisio", about: "Tokante Nos", reviews: "Opinion", contact: "Kontakto" },
    hero: {
      eyebrow: "Drechamentu · Pintura · Plombería · Elèktrisidat",
      title1: "Nos ta drecha.",
      title2: "Bo ta gosa.",
      subtitle: "Bo handyman lokal di konfiansa pa tur trabou na Kòrsou.",
      whatsapp: "WhatsApp Nos",
      services: "Nos Servisionan",
    },
    services: {
      eyebrow: "Nos Servisionan",
      heading: "Kiko nos por yuda bo ku?",
      viewAll: "Mira Tur Servisio i Preis",
      items: {
        repairs: { title: "Drechamentu General", desc: "Trabou chikí of grandi, nos ta hasi bon." },
        painting: { title: "Pintura", desc: "Paden i pafó ku un akabamentu perfekto." },
        plumbing: { title: "Plombería", desc: "Di lek te instalashon kompleto." },
        electrical: { title: "Trabou Elèktriko", desc: "Instalashon sigur, drechamentu i mantenshon." },
        furniture: { title: "Montahe di Mueble", desc: "IKEA of personalisá — lihé i eksakto." },
        ac: { title: "Aire Kondishoná", desc: "Instalashon, mantenshon i drechamentu." },
      },
      learnMore: "Sa mas",
    },
    rentals: {
      eyebrow: "Alkiler di Vehíkulo",
      heading: "Eksplorá Kòrsou na bo manera",
      subtitle: "Outo, jetski i quad ku sosten lokal i reservashon pa WhatsApp.",
      items: {
        car: { title: "Alkiler di Outo", desc: "Outo konfiabel pa eksplorá Kòrsou." },
        jet: { title: "Alkiler di Jetski", desc: "Disfrutá di e olanan ku nos jetski." },
        quad: { title: "Alkiler di Quad", desc: "Aventura den tera, fásil i diverti." },
      },
    },
    why: {
      eyebrow: "Pakiko Skohe Nos?",
      title1: "Lokal. Konfiabel.",
      title2: "Ekspert.",
      body: "Diligence Local Handyman ta nifiká kalidat, onestidat i komunikashon kla. Nos ta trata bo kas of negoshi manera ta di nos.",
      points: ["Eksperensia lokal na Kòrsou", "Preis kla — sin sorpresa", "Tempu di reakshon rápido", "Servisio amigable i profesional"],
      locations: "Nos ta sirbi tur área di Kòrsou",
    },
    reviews: {
      eyebrow: "Opinion",
      heading1: "Kiko nos",
      heading2: "klientenan ta bisa",
      items: [
        { quote: "Servisio rápido, kalidat superior i masha amigable. Rekomendá na Kòrsou!", name: "Michael, Willemstad" },
        { quote: "Masha rápido via WhatsApp i fásil pa traha kuné. Un bon negoshi lokal.", name: "Sarah, Jan Thiel" },
        { quote: "Nan a drecha nos aire i plombería den un bishita. Profesional i preis hustu.", name: "David, Blue Bay" },
      ],
    },
    cta: {
      badge: "Disponibel Awe",
      title1: "Kla pa hasi",
      title2: "bo trabou bon?",
      body: "Haña un presupuesto grátis i sin kompromiso den minüt. Mandá nos un WhatsApp ku un foto i deskripshon kòrtiku — nos ta kontestá bo lihé ku un preis kla.",
      stats: { jobs: "Trabou", rating: "Kalifikashon", response: "Reakshon" },
      whatsapp: "WhatsApp Awor",
      disclaimer: "Presupuesto grátis · Sin kompromiso · Reakshon rápido",
    },
    footer: {
      tagline: "Bo handyman lokal di konfiansa na Kòrsou. Drechamentu di kalidat, preis onesto i reakshon lihé — semper.",
      company: "Empresa",
      servicesCol: "Servisio",
      contactCol: "Tuma Kontakto",
      callUs: "Yama nos",
      email: "Email",
      basedIn: "Situá na",
      location: "Willemstad, Kòrsou",
      rights: "© 2026 Diligence Local Handyman. Tur derecho reservá. Trahá na Kòrsou 🇨🇼",
    },
    servicesPage: {
      breadcrumb: "Servisio",
      eyebrow: "Tur Servisio",
      title1: "Tur loke nos ta hasi,",
      title2: "den un solo lugá.",
      subtitle: "Preis transparente pa tur nos servisio i alkiler na Kòrsou. Tur preis ta punto di salida — mandá WhatsApp pa un presupuesto grátis.",
      handyHeading: "Drechamentu pa kas i negoshi",
      rentalsHeading: "Eksplorá Kòrsou na bo manera",
      pricingEyebrow: "Nota di Preis",
      pricingHeading: "Kon nos preis ta funshoná",
      pricingPoints: [
        "Tur preis ta den florin karibense (Cg) i ta punto di salida.",
        "OB (belasting di benta) di 6% ta apliká riba trabou i material.",
        "Preis final ta dependé di tamaño, kompleksidat i kosto di material.",
        "Un inspekshon of evaluashon por ta nesesario promer di kuminsa.",
        "Kosto di transporte (Cg 25–50) dependé di kantidat i distansia.",
        "Presupuesto grátis pa WhatsApp — mandá un foto i deskripshon.",
      ],
      freeQuote: "Pidi Presupuesto Grátis",
      myFreeQuote: "Pidi Mi Presupuesto",
    },
    common: { whatsappNow: "WhatsApp Awor" },
  },
};

/* ─────────────── CONTEXT / HOOK ─────────────── */
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dlh_lang") as Lang | null;
      if (stored && stored in translations) setLangState(stored);
      else {
        const browser = navigator.language.toLowerCase();
        if (browser.startsWith("es")) setLangState("es");
        else if (browser.startsWith("nl")) setLangState("nl");
        else if (browser.startsWith("pap")) setLangState("pap");
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("dlh_lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
