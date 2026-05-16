import Link from "next/link";
import { Instagram, Music2, PlayCircle, Youtube } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { contactEmail } from "@/src/lib/utils";

const socialLinks = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, icon: Instagram },
  { label: "TikTok", href: process.env.NEXT_PUBLIC_TIKTOK_URL, icon: Music2 },
  { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL, icon: Youtube },
  { label: "Spotify", href: process.env.NEXT_PUBLIC_SPOTIFY_URL, icon: PlayCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo variant="dark" imageClassName="h-[78px] sm:h-[92px]" />
          <p className="mt-5 max-w-md text-sm leading-6 text-muted">
            Original lyrics, vocal character, story-driven songwriting, and human-directed,
            AI-assisted production.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <Link href="/music" className="hover:text-foreground">Music</Link>
            <Link href="/videos" className="hover:text-foreground">Videos</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact / Licensing</Link>
            <Link href="/copyright" className="hover:text-foreground">Copyright & Usage</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Follow</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="focus-ring rounded-full border border-border p-3 text-muted transition hover:border-accent hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={`${label} coming soon`}
                  className="rounded-full border border-border p-3 text-muted opacity-60"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ),
            )}
          </div>
          <p className="mt-5 text-sm text-muted">
            Licensing and collaboration:{" "}
            <a className="text-foreground hover:text-accent" href={`mailto:${contactEmail()}`}>
              {contactEmail()}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
