import type { Metadata } from "next";
import { TrackFilters } from "@/components/music/TrackFilters";
import { tracks } from "@/src/data/tracks";

export const metadata: Metadata = {
  title: "Music",
  description: "Browse Kansai Music tracks by session, mood, and release.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "Music | Kansai Music",
    description: "Browse original songs, vocal sessions, lyric excerpts, and audio previews.",
    url: "/music",
  },
};

export default function MusicPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Catalog</p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">Music</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Browse the current Kansai Music sessions by vocal character, mood, and story. Each track is
          defined in a local data file so the catalog can grow cleanly.
        </p>
      </div>
      <TrackFilters tracks={tracks} />
    </section>
  );
}
