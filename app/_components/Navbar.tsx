"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_LINKS: { href: string; label: string }[] = [];

export default function Navbar() {
  const router = useRouter();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(12, 10, 20, 0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-14 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Freaklus" width={120} height={40} className="h-9 w-auto" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-base)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-bg-elevated)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex justify-center">
          <div
            className="w-full max-w-xs flex items-center gap-2 px-3 py-2 rounded-xl text-sm cursor-pointer"
            style={{ backgroundColor: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}
            onClick={() => router.push('/register')}
          >
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-text-faint)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-transparent outline-none cursor-pointer"
              style={{ color: "var(--color-text-base)" }}
              onFocus={() => router.push('/register')}
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Link
            href="/register"
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          <Link
            href="/login"
            className="p-2 rounded-lg"
            style={{ color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          <Link
            href="/register"
            className="px-3 py-1.5 rounded-lg text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
              color: "#fff",
            }}
          >
            S'inscrire
          </Link>
        </div>
      </div>

    </header>
  );
}
