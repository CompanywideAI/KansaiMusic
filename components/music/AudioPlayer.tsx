"use client";

import { useRef } from "react";
import { PlayCircle } from "lucide-react";
import { Track } from "@/src/data/tracks";

export function AudioPlayer({ track }: { track: Track }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  function handlePlay() {
    document.querySelectorAll("audio").forEach((audio) => {
      if (audio !== audioRef.current) {
        audio.pause();
      }
    });
  }

  return (
    <div className="rounded-[8px] border border-border bg-panel/82 p-4 shadow-[var(--shadow)]">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-accent/18 p-2 text-accent">
          <PlayCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold">{track.title}</p>
          <p className="text-xs text-muted">{track.sessionLabel}</p>
        </div>
      </div>
      <audio
        ref={audioRef}
        controls
        preload="metadata"
        onPlay={handlePlay}
        aria-label={`Audio player for ${track.title}`}
        className="h-10 w-full accent-[var(--accent)]"
      >
        <source src={track.audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
