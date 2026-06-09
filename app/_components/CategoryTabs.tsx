"use client";

import { useState } from "react";
import { CATEGORIES } from "@/app/_lib/data";

type Props = {
  onSelect: (id: string) => void;
  selected: string;
};

export default function CategoryTabs({ onSelect, selected }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {CATEGORIES.map((cat) => {
        const active = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all"
            style={
              active
                ? {
                    background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                    color: "#fff",
                  }
                : {
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--color-text-muted)",
                    border: "1px solid var(--color-border)",
                  }
            }
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: active ? "#fff" : cat.color }}
            />
            {cat.label}
            {!active && (
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-primary-light)" }}>
                <path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}
