import type { Metadata } from "next";
import LoginFormClient from "@/app/_components/LoginFormClient";

export const metadata: Metadata = {
  title: "Se connecter — Freaklus",
  description: "Connecte-toi à ton compte Freaklus et accède à tous tes contenus exclusifs.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.freaklus.com/login",
  },
  openGraph: {
    title: "Se connecter — Freaklus",
    description: "Connecte-toi à ton compte Freaklus et accède à tous tes contenus exclusifs.",
    url: "https://www.freaklus.com/login",
    siteName: "Freaklus",
  },
};

export default function LoginPage() {
  return <LoginFormClient />;
}
