import { TrackCard } from "@/components/music/TrackCard";
import { Track } from "@/src/data/tracks";

export function TrackGrid({ tracks, priorityFirst = false }: { tracks: Track[]; priorityFirst?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track, index) => (
        <TrackCard key={track.slug} track={track} priority={priorityFirst && index < 2} />
      ))}
    </div>
  );
}
