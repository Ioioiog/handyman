import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["300", "400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Diligence Local Handyman",
  description: "Cars, jetski, quad rentals and repair services in Curaçao.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F1A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased"><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
