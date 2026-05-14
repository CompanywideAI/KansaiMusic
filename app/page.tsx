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

export const metadata: Metadata = {
  description:
    "Songs from somewhere between memory and signal. Original lyrics, human direction, and AI-assisted production.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gintz Music",
    description:
      "Original lyrics, story-driven songwriting, vocal character, and human-directed, AI-assisted production.",
    url: "/",
  },
};

export default function HomePage() {
  const songOfDay = getSongOfDay();
  const videos = tracks.filter((track) => track.videoSrc).slice(0, 2);

  return (
    <>
      <section className="texture relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.78),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.8)),url('/images/covers/after-the-last-train.svg')] bg-cover bg-center opacity-90" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl content-end px-4 py-16 sm:px-6 lg:px-8">
          <MotionReveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Original lyrics. Human direction. AI-assisted production.
            </p>
            <h1 className="max-w-5xl font-display text-5xl leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              Songs from somewhere between memory and signal.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Gintz Music is a human-directed music project built around original lyrics,
              vocal character, and AI-assisted production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/music">Listen Now</ButtonLink>
              <ButtonLink href="/videos" variant="secondary" className="bg-white/9 text-white hover:text-white">
                Watch Lyrics
              </ButtonLink>
            </div>
          </MotionReveal>
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
        <TrackGrid tracks={tracks.slice(0, 6)} priorityFirst />
      </section>

      <section className="border-y border-border bg-panel/38 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Videos</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Lyric videos and visualizers.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((track) => (
              <VideoCard key={track.slug} track={track} />
            ))}
          </div>
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
            <h2 className="font-display text-3xl">Follow Gintz Music</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ["Instagram", Instagram],
                ["TikTok", Music2],
                ["YouTube", Youtube],
                ["Spotify / Apple Music", PlayCircle],
              ].map(([label, Icon]) => (
                <a key={String(label)} href="#" className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-accent hover:text-foreground">
                  <Icon className="h-4 w-4" /> {String(label)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
