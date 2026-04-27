import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider, ThemeScript } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["300", "400", "500", "600"], style: ["normal", "italic"] });

const SITE_URL = "https://diligencelocalhandyman.com";
const SITE_NAME = "Diligence Local Handyman";
const SITE_DESC =
  "Trusted handyman services and vehicle rentals in Curaçao — repairs, painting, plumbing, electrical, AC, and car / jetski / quad rentals. Reply within 24h.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Repairs & Rentals in Curaçao`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "handyman Curaçao",
    "Curaçao repairs",
    "AC repair Curaçao",
    "plumbing Curaçao",
    "car rental Curaçao",
    "jetski rental Curaçao",
    "quad rental Curaçao",
    "Diligence Local Handyman",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Repairs & Rentals in Curaçao`,
    description: SITE_DESC,
    locale: "en_US",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Curaçao handyman & rentals`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Repairs & Rentals in Curaçao`,
    description: SITE_DESC,
    images: ["/hero.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: false, email: true },
  category: "Local services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#002D72" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head><ThemeScript /></head>
      <body className="font-sans antialiased bg-bg text-fg">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
