import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { MoodTag } from "@/components/music/MoodTag";
import { SessionBadge } from "@/components/music/SessionBadge";
import { Track } from "@/src/data/tracks";

export function FeaturedTrack({ track }: { track: Track }) {
  const excerpt = track.lyrics?.split("\n").filter(Boolean).slice(0, 2).join(" / ");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Song of the Day</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{track.title}</h2>
        </div>
        <Link
          href={`/music/${track.slug}`}
          className="focus-ring hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-foreground sm:inline-flex"
        >
          Song page <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-8 rounded-[8px] border border-border bg-panel/70 p-4 shadow-[var(--shadow)] lg:grid-cols-[0.85fr_1.15fr] lg:p-6">
        <div className="relative aspect-square overflow-hidden rounded-[6px] bg-panel-strong">
          <Image src={track.coverImage} alt={`${track.title} cover artwork`} fill priority sizes="(min-width: 1024px) 40vw, 92vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center p-2 lg:p-4">
          <SessionBadge>{track.sessionLabel}</SessionBadge>
          <p className="mt-5 text-lg leading-8 text-muted">{track.description}</p>
          {excerpt ? (
            <blockquote className="mt-6 border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-foreground">
              {excerpt}
            </blockquote>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {track.moods.map((mood) => (
              <MoodTag key={mood}>{mood}</MoodTag>
            ))}
          </div>
          <div className="mt-7">
            <AudioPlayer track={track} />
          </div>
          <Link
            href={`/music/${track.slug}`}
            className="focus-ring mt-5 inline-flex items-center gap-2 self-start rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Go to song <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
