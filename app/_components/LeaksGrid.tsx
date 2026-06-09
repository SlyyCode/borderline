"use client";

import Link from "next/link";
import { LEAKS, CATEGORIES } from "@/app/_lib/data";
import ContentCard from "./ContentCard";

type Props = {
  preview?: boolean;
};

const PREVIEW_MOBILE = 6;
const PREVIEW_TABLET = 9;
const PREVIEW_DESKTOP = 12;

export default function LeaksGrid({ preview = false }: Props) {
  const posts = preview ? LEAKS.slice(0, PREVIEW_DESKTOP) : LEAKS;

  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <span
          className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide"
          style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)", color: "#fff" }}
        >
          Communauté
        </span>
        <h2 className="text-xl font-bold" style={{ color: "var(--color-text-base)" }}>
          Vidéos des membres
        </h2>
      </div>
      <p className="text-xs mb-4" style={{ color: "var(--color-text-faint)" }}>
        Envoyées et partagées par la communauté
      </p>

      <div className="w-full flex items-center gap-3 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        <span className="text-xs font-medium flex-shrink-0" style={{ color: "var(--color-text-faint)" }}>Catégorie</span>
        <div className="w-px h-4 flex-shrink-0" style={{ backgroundColor: "var(--color-border)" }} />
        {[{ id: "all", label: "Tout" }, ...CATEGORIES.filter((c) => c.id !== "all")].map((cat, i) => (
          <span
            key={cat.id}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
            style={
              i === 0
                ? { background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)", color: "#fff" }
                : { backgroundColor: "var(--color-bg-card)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }
            }
          >
            {cat.label}
            {i !== 0 && (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0" style={{ color: "var(--color-primary-light)" }}>
                <path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z" />
              </svg>
            )}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {posts.map((post, i) => (
          <div
            key={post.id}
            className={
              preview
                ? i >= PREVIEW_TABLET
                  ? "hidden md:block"
                  : i >= PREVIEW_MOBILE
                    ? "hidden sm:block"
                    : ""
                : ""
            }
          >
            <ContentCard post={post} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/register"
          className="px-8 py-2.5 rounded-xl text-sm font-semibold"
          style={{ backgroundColor: "var(--color-bg-card)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
        >
          Charger plus
        </Link>
      </div>
    </section>
  );
}
