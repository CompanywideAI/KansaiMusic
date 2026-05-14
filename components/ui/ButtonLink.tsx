import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  const primaryStyle =
    variant === "primary"
      ? {
          backgroundColor: "#f5efe3",
          color: "#101010",
        }
      : undefined;

  return (
    <Link
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        variant === "primary" &&
          "shadow-[var(--shadow)] hover:bg-accent",
        variant === "secondary" &&
          "border border-border bg-panel/70 text-foreground hover:border-accent hover:bg-panel-strong",
        variant === "ghost" && "text-muted hover:text-foreground",
        className,
      )}
      style={primaryStyle}
      {...props}
    />
  );
}
