import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "dark", className, priority = false }: LogoProps) {
  const src =
    variant === "dark"
      ? "/images/logos/logo-gintz-music-white.svg"
      : "/images/logos/logo-gintz-music.svg";

  return (
    <Link href="/" className={cn("focus-ring inline-flex items-center", className)} aria-label="Gintz Music home">
      <Image
        src={src}
        alt="Gintz Music"
        width={188}
        height={56}
        priority={priority}
        className="h-auto max-h-14 w-auto"
      />
    </Link>
  );
}
