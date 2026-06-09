import type { Metadata } from "next";
import RegisterFormClient from "@/app/_components/RegisterFormClient";

export const metadata: Metadata = {
  title: "S'inscrire — Freaklus",
  description: "Rejoins la plus grande communauté de France. Accès immédiat à des milliers de contenus exclusifs dès 1,04€ par semaine.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.freaklus.com/register",
  },
  openGraph: {
    title: "S'inscrire — Freaklus",
    description: "Rejoins la plus grande communauté de France. Accès immédiat à des milliers de contenus exclusifs.",
    url: "https://www.freaklus.com/register",
    siteName: "Freaklus",
  },
};

export default function RegisterPage() {
  return <RegisterFormClient />;
}
