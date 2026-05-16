import type { Metadata } from "next";
import { Suspense } from "react";
import { VideoCard } from "@/components/video/VideoCard";
import { tracks } from "@/src/data/tracks";
import { defaultShareImage, shareImage } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Videos",
  description: "Lyric videos and visualizers from Kansai Music sessions.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "Videos | Kansai Music",
    description: "A gallery of lyric videos and visualizers for Kansai Music songs.",
    url: "/videos",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | Kansai Music",
    description: "A gallery of lyric videos and visualizers for Kansai Music songs.",
    images: [defaultShareImage],
  },
};

export default function VideosPage() {
  const videos = tracks.filter((track) => track.videoSrc || track.youtubeVideoId);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Visuals</p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">Lyric videos</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Posters load first, full media stays out of the first paint, and video players use
          metadata-free lazy loading until a listener chooses to play.
        </p>
      </div>
      {videos.length > 0 ? (
        <Suspense fallback={<p className="text-muted">Loading videos...</p>}>
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((track) => (
              <VideoCard key={track.slug} track={track} />
            ))}
          </div>
        </Suspense>
      ) : (
        <div className="rounded-[8px] border border-border bg-panel/72 p-6 text-muted">
          Lyric videos and visualizers are not published yet. The music catalog is live now, and this
          page is ready for MP4 releases when they are added.
        </div>
      )}
    </section>
  );
}
