import Link from "next/link";
import { LeakPost, formatNumber } from "@/app/_lib/data";

type Props = {
  post: LeakPost;
  size?: "normal" | "featured";
};

export default function ContentCard({ post, size = "normal" }: Props) {
  return (
    <Link
      href="/register"
      className="card-hover block rounded-xl overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {post.verified && (
          <span
            className="absolute top-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-semibold"
            style={{ backgroundColor: "rgba(249,115,22,0.9)", color: "#fff" }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Vérifié
          </span>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.45)", border: "1.5px solid rgba(255,255,255,0.6)" }}
          >
            <svg className="w-4 h-4 ml-0.5" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>

        <span
          className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-semibold"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", color: "#fff" }}
        >
          {post.duration}
        </span>
      </div>

      <div className="p-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
            style={{ backgroundColor: post.avatarColor, color: "#fff" }}
          >
            {post.username.charAt(0).toUpperCase()}
          </span>
          <span
            className={`font-medium truncate ${size === "featured" ? "text-sm" : "text-xs"}`}
            style={{ color: "var(--color-text-base)" }}
          >
            {post.username}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-text-faint)" }}>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {formatNumber(post.likes)}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {formatNumber(post.views)}
          </span>
        </div>
      </div>
    </Link>
  );
}
