import type { Metadata } from "next";
import { ContactCTA } from "@/components/marketing/ContactCTA";

export const metadata: Metadata = {
  title: "Contact / Licensing",
  description: "Contact Kansai Music for general, licensing, sync, playlist, or collaboration inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact / Licensing | Kansai Music",
    description: "Reach Kansai Music for licensing, sync, playlist, or collaboration inquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
      <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">Let the song travel.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
        For general notes, licensing, sync, playlist, or collaboration inquiries, include the song
        title, intended use, timeline, and the best way to reply.
      </p>
      <div className="mt-10 grid gap-5">
        {["General contact", "Licensing inquiry", "Collaboration inquiry"].map((title) => (
          <div key={title} className="rounded-[8px] border border-border bg-panel/72 p-6">
            <h2 className="font-display text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-muted">
              Send a concise note with context, links, and any song titles involved.
            </p>
          </div>
        ))}
        <ContactCTA />
      </div>
    </section>
  );
}
