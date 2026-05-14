import { ExternalLink } from "lucide-react";
import { Track } from "@/src/data/tracks";

const platforms = [
  ["spotify", "Spotify"],
  ["appleMusic", "Apple Music"],
  ["youtubeMusic", "YouTube Music"],
  ["amazonMusic", "Amazon Music"],
  ["bandcamp", "Bandcamp"],
] as const;

export function StreamingLinks({ track }: { track: Track }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {platforms.map(([key, label]) => {
        const href = track.streamingLinks?.[key];
        if (!href) {
          return (
            <button
              key={key}
              type="button"
              disabled
              className="rounded-full border border-border px-4 py-3 text-left text-sm text-muted opacity-70"
            >
              {label} coming soon
            </button>
          );
        }

        return (
          <a
            key={key}
            href={href}
            className="focus-ring inline-flex items-center justify-between rounded-full border border-border px-4 py-3 text-sm font-semibold hover:border-accent"
          >
            {label}
            <ExternalLink className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
