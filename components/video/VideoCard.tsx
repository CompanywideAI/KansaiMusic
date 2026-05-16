import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Track } from "@/src/data/tracks";

export function VideoCard({ track }: { track: Track }) {
  const youtubeSrc = track.youtubeVideoId
    ? `https://www.youtube.com/embed/${track.youtubeVideoId}`
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
        </div>
      </Link>
      <div className="p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{track.sessionLabel}</p>
        <h2 className="mt-3 font-display text-3xl">{track.title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{track.description}</p>
        {youtubeSrc ? (
          <iframe
            className="mt-5 aspect-video w-full rounded-[6px] border border-border bg-black"
            src={youtubeSrc}
            title={`${track.title} lyric video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : track.videoSrc ? (
          <video
            className="mt-5 aspect-video w-full rounded-[6px] border border-border bg-black"
            controls
            preload="none"
            poster={track.videoPoster}
            aria-label={`${track.title} lyric video`}
          >
            <source src={track.videoSrc} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        ) : null}
      </div>
    </article>
  );
}
