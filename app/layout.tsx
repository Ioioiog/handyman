import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diligence Local Handyman",
  description: "Cars, jetski, quad rentals and repair services in Curaçao.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
