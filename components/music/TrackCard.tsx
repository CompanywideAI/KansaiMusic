import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { MoodTag } from "@/components/music/MoodTag";
import { SessionBadge } from "@/components/music/SessionBadge";
import { Track } from "@/src/data/tracks";

export function TrackCard({ track, priority = false }: { track: Track; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-border bg-panel/76 shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-accent/70">
      <Link href={`/music/${track.slug}`} className="focus-ring block" aria-label={`Open ${track.title}`}>
        <div className="relative aspect-square overflow-hidden bg-panel-strong">
          <Image
            src={track.coverImage}
            alt={`${track.title} cover artwork`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/72 to-transparent p-4 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/13 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Play className="h-3.5 w-3.5" />
              {track.runtime}
            </span>
            <ArrowUpRight className="h-5 w-5 opacity-80" />
          </div>
        </div>
      </Link>
      <div className="p-5">
        <SessionBadge>{track.sessionLabel}</SessionBadge>
        <h3 className="mt-4 font-display text-2xl leading-tight">{track.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{track.hook}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {track.moods.map((mood) => (
            <MoodTag key={mood}>{mood}</MoodTag>
          ))}
        </div>
      </div>
    </article>
  );
}
