"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { TrackGrid } from "@/components/music/TrackGrid";
import { moods, sessions, Track } from "@/src/data/tracks";
import { cn } from "@/src/lib/utils";

type Sort = "newest" | "featured" | "title";

export function TrackFilters({ tracks }: { tracks: Track[] }) {
  const [session, setSession] = useState("all");
  const [style, setStyle] = useState("all");
  const [sort, setSort] = useState<Sort>("newest");

  const filteredTracks = useMemo(() => {
    return tracks
      .filter((track) => session === "all" || track.session === session)
      .filter((track) => style === "all" || track.moods.includes(style))
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "featured") return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        return (b.releaseDate || "").localeCompare(a.releaseDate || "");
      });
  }, [session, sort, style, tracks]);

  return (
    <div>
      <div className="mb-8 rounded-[8px] border border-border bg-panel/72 p-4">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          <SlidersHorizontal className="h-4 w-4" />
          Browse catalog
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1.4fr_0.7fr]">
          <FilterGroup label="Session">
            <FilterButton active={session === "all"} onClick={() => setSession("all")}>All</FilterButton>
            {sessions.map((item) => (
              <FilterButton key={item.key} active={session === item.key} onClick={() => setSession(item.key)}>
                {item.label}
              </FilterButton>
            ))}
          </FilterGroup>
          <FilterGroup label="Genre / Style">
            <FilterButton active={style === "all"} onClick={() => setStyle("all")}>All</FilterButton>
            {moods.map((item) => (
              <FilterButton key={item} active={style === item} onClick={() => setStyle(item)}>
                {item}
              </FilterButton>
            ))}
          </FilterGroup>
          <label className="grid content-start gap-2 text-sm text-muted">
            <span className="font-semibold text-foreground">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="focus-ring rounded-full border border-border bg-background px-4 py-3 text-foreground"
            >
              <option value="newest">Newest</option>
              <option value="featured">Featured</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      </div>
      <TrackGrid tracks={filteredTracks} priorityFirst />
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm font-semibold text-foreground">{label}</legend>
      <div className="flex flex-wrap items-start gap-2">{children}</div>
    </fieldset>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm leading-none text-muted transition",
        active && "border-accent bg-accent text-[#101010]",
      )}
    >
      {children}
    </button>
  );
}
