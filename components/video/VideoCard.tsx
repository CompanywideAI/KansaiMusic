import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Track } from "@/src/data/tracks";

export function VideoCard({ track }: { track: Track }) {
  const youtubeUrl = track.youtubeVideoId
    ? `https://www.youtube.com/watch?v=${track.youtubeVideoId}`
    : undefined;

  return (
    <article className="overflow-hidden rounded-[8px] border border-border bg-panel/76 shadow-[var(--shadow)]">
      <Link href={`/music/${track.slug}`} className="focus-ring group block">
        <div className="relative aspect-video bg-panel-strong">
          <Image
            src={track.videoPoster || track.coverImage}
            alt={`${track.title} lyric video poster`}
            fill
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <PlayCircle className="h-4 w-4" />
            Lyric video
          </span>
          <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[6px] bg-black/58 px-4 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            Open song page
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
      <div className="p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{track.sessionLabel}</p>
        <h2 className="mt-3 font-display text-3xl">{track.title}</h2>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{track.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={`/music/${track.slug}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-foreground"
          >
            Song page
          </Link>
          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-strong"
            >
              Watch on YouTube
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : track.videoSrc ? (
            <a
              href={track.videoSrc}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-strong"
            >
              Watch video
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
