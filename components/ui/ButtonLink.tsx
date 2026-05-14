import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-foreground text-background shadow-[var(--shadow)] hover:bg-accent hover:text-background",
        variant === "secondary" &&
          "border border-border bg-panel/70 text-foreground hover:border-accent hover:bg-panel-strong",
        variant === "ghost" && "text-muted hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
