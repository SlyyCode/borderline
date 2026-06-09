import type { Metadata } from "next";
import LoginFormClient from "@/app/_components/LoginFormClient";

export const metadata: Metadata = {
  title: "Se connecter — Borderline",
  description: "Connecte-toi à ton compte Borderline et accède à tous tes contenus exclusifs.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.borderline.com/login",
  },
  openGraph: {
    title: "Se connecter — Borderline",
    description: "Connecte-toi à ton compte Borderline et accède à tous tes contenus exclusifs.",
    url: "https://www.borderline.com/login",
    siteName: "Borderline",
  },
};

export default function LoginPage() {
  return <LoginFormClient />;
}
