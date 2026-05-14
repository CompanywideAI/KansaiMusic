import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { DisclosureNote } from "@/components/music/DisclosureNote";
import { LyricsBlock } from "@/components/music/LyricsBlock";
import { MoodTag } from "@/components/music/MoodTag";
import { SessionBadge } from "@/components/music/SessionBadge";
import { ShareLinks } from "@/components/music/ShareLinks";
import { StreamingLinks } from "@/components/music/StreamingLinks";
import { TrackGrid } from "@/components/music/TrackGrid";
import { getRelatedTracks, getTrack, tracks } from "@/src/data/tracks";
import { siteUrl } from "@/src/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);

  if (!track) {
    return { title: "Song Not Found" };
  }

  return {
    title: track.title,
    description: track.description,
    alternates: { canonical: `/music/${track.slug}` },
    openGraph: {
      title: `${track.title} | Gintz Music`,
      description: track.description,
      url: `/music/${track.slug}`,
      type: "music.song",
      images: [{ url: track.coverImage, width: 1200, height: 1200 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${track.title} | Gintz Music`,
      description: track.description,
      images: [track.coverImage],
    },
  };
}

export default async function SongDetailPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);

  if (!track) {
    notFound();
  }

  const relatedTracks = getRelatedTracks(track);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: track.title,
    url: siteUrl(`/music/${track.slug}`),
    duration: track.runtime,
    byArtist: {
      "@type": "MusicGroup",
      name: "Gintz Music",
    },
    genre: track.sessionLabel,
    description: track.description,
    datePublished: track.releaseDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[8px] border border-border bg-panel-strong shadow-[var(--shadow)]">
              <Image
                src={track.coverImage}
                alt={`${track.title} cover artwork`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="self-center">
            <SessionBadge>{track.sessionLabel}</SessionBadge>
            <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{track.title}</h1>
            <p className="mt-5 text-xl leading-8 text-muted">{track.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {track.moods.map((mood) => (
                <MoodTag key={mood}>{mood}</MoodTag>
              ))}
            </div>
            <div className="mt-7">
              <AudioPlayer track={track} />
            </div>
            <div className="mt-6">
              <ShareLinks track={track} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-8">
          {track.videoSrc ? (
            <div>
              <h2 className="mb-4 font-display text-3xl">Lyric video</h2>
              <video
                className="aspect-video w-full rounded-[8px] border border-border bg-black"
                controls
                preload="metadata"
                poster={track.videoPoster}
                aria-label={`${track.title} lyric video`}
              >
                <source src={track.videoSrc} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          ) : null}
          <article>
            <h2 className="mb-4 font-display text-3xl">Story</h2>
            <p className="rounded-[8px] border border-border bg-panel/72 p-6 leading-7 text-muted">
              {track.story}
            </p>
          </article>
          <article>
            <h2 className="mb-4 font-display text-3xl">Lyrics</h2>
            <LyricsBlock lyrics={track.lyrics} />
          </article>
        </div>
        <aside className="grid content-start gap-6">
          <div className="rounded-[8px] border border-border bg-panel/72 p-6">
            <h2 className="font-display text-3xl">Credits</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              {track.credits?.lyrics ? (
                <div>
                  <dt className="text-muted">Lyrics</dt>
                  <dd className="mt-1 font-semibold">{track.credits.lyrics}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-muted">Creative direction</dt>
                <dd className="mt-1 font-semibold">{track.credits?.creativeDirection || "Gintz Music"}</dd>
              </div>
              <div>
                <dt className="text-muted">Production</dt>
                <dd className="mt-1 font-semibold">{track.credits?.production || "Human-directed, AI-assisted production"}</dd>
              </div>
            </dl>
          </div>
          <DisclosureNote />
          <div className="rounded-[8px] border border-border bg-panel/72 p-6">
            <h2 className="mb-5 font-display text-3xl">Streaming links</h2>
            <StreamingLinks track={track} />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-display text-4xl">Related songs</h2>
        <TrackGrid tracks={relatedTracks} />
      </section>
    </>
  );
}
