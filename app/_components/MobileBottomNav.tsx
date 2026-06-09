"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS = [
  { label: "Accueil", icon: "home",   href: "/",       id: "accueil"  },
  { label: "Vidéo",   icon: "play",   href: "/#videos", id: "video"   },
  { label: "Premium", icon: "crown",  href: "/register", id: "premium", isPremium: true },
  { label: "Plan cul",icon: "heart",  href: "/register", id: "plancul" },
  { label: "Nudeuse", icon: "flame",  href: "/register", id: "nudeuse" },
] as const;

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [videosVisible, setVideosVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("videos");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVideosVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  function isActive(id: string) {
    if (id === "video")   return pathname === "/" && videosVisible;
    if (id === "accueil") return pathname === "/" && !videosVisible;
    return false;
  }

  return (
    <nav
      className="md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl"
      style={{
        backgroundColor: "rgba(20, 18, 16, 0.94)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-stretch justify-between px-2 py-2">
        {ITEMS.map((item) => {
          const active = isActive(item.id);
          const premium = "isPremium" in item && item.isPremium;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex-1 mx-0.5 flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-all duration-300${premium ? " premium-pulse" : ""}`}
              style={
                premium
                  ? {
                      background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                      color: "#fff",
                    }
                  : active
                  ? { color: "var(--color-primary-light)", backgroundColor: "rgba(249,115,22,0.12)" }
                  : { color: "var(--color-text-muted)" }
              }
            >
              <NavIcon name={item.icon} active={active || premium} />
              <span
                className="text-[11px] font-semibold transition-all duration-300"
                style={active ? { color: "var(--color-primary-light)" } : undefined}
              >
                {item.label}
              </span>
              {active && (
                <span
                  className="absolute bottom-2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function NavIcon({ name, active }: { name: string; active?: boolean }) {
  const cls = `w-5 h-5 transition-all duration-300${active ? " scale-110" : ""}`;
  switch (name) {
    case "home":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H15v-5H9v5H4a1 1 0 01-1-1V9.75z" />
        </svg>
      );
    case "play":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5.5v13a1 1 0 001.5.87l11-6.5a1 1 0 000-1.74l-11-6.5A1 1 0 005 5.5z" />
        </svg>
      );
    case "crown":
      return (
        <svg className={`${cls} crown-animate`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "flame":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c1 3-2 4.5-2 7.5a2 2 0 004 0c1.5 1 2.5 3 2.5 5a4.5 4.5 0 11-9 0c0-3.5 2.5-5.5 4.5-12.5z" />
        </svg>
      );
    default:
      return null;
  }
}
