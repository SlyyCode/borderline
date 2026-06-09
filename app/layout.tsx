import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import MobileBottomNav from "./_components/MobileBottomNav";
import ScriptPreloader from "./_components/ScriptPreloader";
import TrackingPersistor from "./_components/TrackingPersistor";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freaklus - La plateforme de leaks #1",
  description: "Rejoignez le n°1 de l'échange en France. Des milliers de membres partagent et échangent chaque jour. Nudes, sextapes et plans cul : la plus grande communauté du pays vous attend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable} style={{ overflowX: "hidden", width: "100%" }}>
      <body className="min-h-screen flex flex-col w-full" style={{ overflowX: "hidden" }}>
        <Navbar />
        <div className="flex-1 w-full min-w-0 pb-24 md:pb-0">{children}</div>
        <Footer />
        <MobileBottomNav />
        <ScriptPreloader />
        <TrackingPersistor />
      </body>
    </html>
  );
}
