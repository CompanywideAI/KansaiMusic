import { cn } from "@/src/lib/utils";

export function SessionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border bg-panel/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
