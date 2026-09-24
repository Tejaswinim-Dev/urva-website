import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urvaa.in"),
  title: "URVAA — Rooted in Nature. Crafted with Purpose.",
  description:
    "URVAA brings traditional rural craftsmanship and naturally sourced products to modern life. Wild honey, biodegradable areca & siali leaf tableware, and heritage grains directly from rural Indian artisan clusters.",
  keywords: [
    "URVAA",
    "sustainable tableware",
    "areca palm leaf plates",
    "siali leaf plates",
    "wild honey",
    "deep forest honey",
    "natural rural products",
    "compostable plates 90 GSM",
    "rural craftsmanship India",
  ],
  authors: [{ name: "URVAA Rural Collective" }],
  openGraph: {
    title: "URVAA — Rooted in Nature. Crafted with Purpose.",
    description:
      "Sustainable products inspired by nature, traditional knowledge, and rural craftsmanship.",
    url: "https://urvaa.in",
    siteName: "URVAA",
    images: [
      {
        url: "/images/hero-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "URVAA Rural Craftsmanship & Natural Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${cinzel.variable} antialiased no-scrollbar`}
    >
      <body className="font-sans bg-[#F8F5EE] text-[#1C1E1B] selection:bg-[#2A4535] selection:text-[#F8F5EE] overflow-x-hidden min-h-screen no-scrollbar">
        {children}
      </body>
    </html>
  );
}
