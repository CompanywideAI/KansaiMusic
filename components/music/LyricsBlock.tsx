export function LyricsBlock({ lyrics }: { lyrics?: string }) {
  if (!lyrics) {
    return <p className="text-muted">Lyrics will be added with the final release notes.</p>;
  }

  return (
    <div className="whitespace-pre-line rounded-[8px] border border-border bg-panel/72 p-6 font-display text-xl leading-9">
      {lyrics}
    </div>
  );
}
