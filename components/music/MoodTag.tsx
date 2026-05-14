import { cn } from "@/src/lib/utils";

export function MoodTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-full bg-panel-strong px-2.5 py-1 text-xs text-muted", className)}>
      {children}
    </span>
  );
}
