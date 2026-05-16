import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Instagram, Music2, PlayCircle, Youtube } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FeaturedTrack } from "@/components/music/FeaturedTrack";
import { TrackGrid } from "@/components/music/TrackGrid";
import { VideoCard } from "@/components/video/VideoCard";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { getSongOfDay, sessions, tracks } from "@/src/data/tracks";
import { defaultShareImage, shareImage } from "@/src/lib/seo";

export const metadata: Metadata = {
  description:
    "Songs from somewhere between memory and signal. Original lyrics, human direction, and AI-assisted production.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kansai Music",
    description:
      "Original lyrics, story-driven songwriting, vocal character, and human-directed, AI-assisted production.",
    url: "/",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansai Music",
    description: "Songs from somewhere between memory and signal.",
    images: [defaultShareImage],
  },
};

export default function HomePage() {
  const songOfDay = getSongOfDay();
  const featuredTrackOrder = [
    "brittany-a-mascalucia",
    "all-american-cowboy",
    "hollywoods-burning",
    "good-day-coming-on",
    "satisfied-in-him",
    "disaster-the-uber-back-song",
  ];
  const featuredTracks = featuredTrackOrder
    .map((slug) => tracks.find((track) => track.slug === slug))
    .filter((track) => track !== undefined);
  const videos = tracks.filter((track) => track.videoSrc).slice(0, 2);
  const socialLinks = [
    ["Instagram", process.env.NEXT_PUBLIC_INSTAGRAM_URL, Instagram],
    ["TikTok", process.env.NEXT_PUBLIC_TIKTOK_URL, Music2],
    ["YouTube", process.env.NEXT_PUBLIC_YOUTUBE_URL, Youtube],
    ["Spotify / Apple Music", process.env.NEXT_PUBLIC_SPOTIFY_URL || process.env.NEXT_PUBLIC_APPLE_MUSIC_URL, PlayCircle],
  ] as const;

  return (
    <>
      <section className="texture relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(103,180,255,0.20),transparent_28rem),radial-gradient(circle_at_78%_24%,rgba(228,90,79,0.15),transparent_24rem),linear-gradient(115deg,rgba(7,8,10,0.98),rgba(31,26,24,0.92)_48%,rgba(10,10,10,0.98))] opacity-95" />
        <div className="relative mx-auto grid min-h-[min(760px,calc(100svh-5.5rem))] max-w-7xl content-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Original lyrics. Human direction. AI-assisted production.
            </p>
            <h1 className="max-w-5xl text-balance font-display text-5xl leading-[1.03] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Songs from somewhere between memory and signal.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Kansai Music is a human-directed music project built around original lyrics,
              vocal character, and AI-assisted production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/music">Listen Now</ButtonLink>
              <ButtonLink href="/videos" variant="secondary" className="bg-white/9 text-white hover:text-white">
                Watch Lyrics
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <MotionReveal>
        <FeaturedTrack track={songOfDay} />
      </MotionReveal>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Music</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Current sessions</h2>
          </div>
          <Link href="/music" className="focus-ring hidden items-center gap-2 text-sm font-semibold text-muted hover:text-foreground sm:inline-flex">
            All tracks <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <TrackGrid tracks={featuredTracks} priorityFirst />
      </section>

      <section className="border-y border-border bg-panel/38 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Videos</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Lyric videos and visualizers.</h2>
          </div>
          {videos.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {videos.map((track) => (
                <VideoCard key={track.slug} track={track} />
              ))}
            </div>
          ) : (
            <div className="rounded-[8px] border border-border bg-panel/72 p-6 text-muted">
              Lyric videos and visualizers will appear here as they are released.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The Sessions</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Voices, sessions, stories.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              The catalog is organized by session: vocal character, mood, arrangement language, and
              story world. The names guide the listening experience; they are not presented as
              traditional performer biographies.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sessions.slice(0, 5).map((session) => (
              <div key={session.key} className="rounded-[8px] border border-border bg-panel/72 p-5">
                <h3 className="font-display text-2xl">{session.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  A curated lane for vocal texture, narrative tone, and arrangement choices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[8px] border border-border bg-panel/75 p-6 shadow-[var(--shadow)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
          <h2 className="mt-3 font-display text-4xl">Made with tools. Shaped by taste.</h2>
          <p className="mt-5 leading-7 text-muted">
            The songs are developed through original lyrics, creative direction, editing,
            arrangement choices, and AI-assisted production. The point is not the tool. The point is
            whether the song stays with you.
          </p>
          <Link href="/about" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted hover:border-accent hover:text-foreground">
            Read the story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <NewsletterSignup />
          <div className="rounded-[8px] border border-border bg-panel/75 p-6">
            <h2 className="font-display text-3xl">Follow Kansai Music</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(([label, href, Icon]) =>
                href ? (
                  <a key={label} href={href} className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-accent hover:text-foreground">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ) : (
                  <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted opacity-60">
                    <Icon className="h-4 w-4" /> {label} soon
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
