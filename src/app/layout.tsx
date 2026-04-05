import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Geist, Oswald } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const bebas = Bebas_Neue({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-poster",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Michail Kokkinos · The Kokkinos Villa",
  description:
    "Michail Kokkinos — a high-end personal portfolio: curated spaces for work, memory, and craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable} ${bebas.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0b] font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}
