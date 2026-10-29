import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navigation from "@/components/Navigation";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import ScentFinderModal from "@/components/ScentFinderModal";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonkiyora.com"),
  title: "Maison Kiyora — The Art of Slow Perfumery",
  description:
    "Fragrances crafted to linger. Memories made to stay. Seven fragrances, 55 ml each.",
  keywords: [
    "Maison Kiyora",
    "Slow Perfumery Art",
    "Mandarin Melons",
    "Yours Pine",
    "Cherry You Lost",
    "Autumn Hugs",
    "Oody Raspberry",
    "Luxury Perfume",
    "55 ml Eau de Parfum",
  ],
  openGraph: {
    title: "Maison Kiyora — The Art of Slow Perfumery",
    description:
      "Fragrances crafted to linger. Memories made to stay. Seven fragrances, 55 ml each.",
    images: ["/assets/mandarin-campaign.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@300;400;500;600&family=Karla:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-cream text-espresso selection:bg-beige selection:text-espresso">
        <CartProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <ScentFinderModal />
          <SearchModal />
        </CartProvider>
      </body>
    </html>
  );
}
