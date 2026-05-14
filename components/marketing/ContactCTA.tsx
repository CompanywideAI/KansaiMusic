import { ArrowRight, Mail } from "lucide-react";
import { contactEmail } from "@/src/lib/utils";

export function ContactCTA() {
  return (
    <section className="rounded-[8px] border border-border bg-panel/75 p-6 shadow-[var(--shadow)] sm:p-8">
      <Mail className="h-6 w-6 text-accent" />
      <h2 className="mt-5 font-display text-3xl">Licensing, sync, playlists, and collaborations.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-muted">
        For licensing, sync, playlist, or collaboration inquiries, please include the song title and
        intended use.
      </p>
      <a
        href={`mailto:${contactEmail()}`}
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-accent"
      >
        {contactEmail()} <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}
