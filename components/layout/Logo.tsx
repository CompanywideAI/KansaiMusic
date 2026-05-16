import Link from "next/link";
import { cn } from "@/src/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({ variant = "dark", className, imageClassName, priority = false }: LogoProps) {
  const src =
    variant === "dark"
      ? "/images/logos/logo-kansai-music-white.svg"
      : "/images/logos/logo-kansai-music.svg";

  return (
    <Link href="/" className={cn("focus-ring inline-flex items-center", className)} aria-label="Kansai Music home">
      {/* The supplied SVG artboard needs native intrinsic rendering to stay visible at nav sizes. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Kansai Music"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-[58px] w-auto sm:h-[72px]", imageClassName)}
      />
    </Link>
  );
}
