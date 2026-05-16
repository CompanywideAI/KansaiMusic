import type { Metadata } from "next";
import { DisclosureNote } from "@/components/music/DisclosureNote";
import { defaultShareImage, shareImage } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "What Kansai Music is, how the songs are made, and what human-directed means.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Kansai Music",
    description: "A transparent look at the human-directed, AI-assisted Kansai Music process.",
    url: "/about",
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kansai Music",
    description: "A transparent look at the human-directed, AI-assisted Kansai Music process.",
    images: [defaultShareImage],
  },
};

const sections = [
  {
    title: "What is Kansai Music?",
    body: "Kansai Music is a human-directed music project built around original lyrics, story-driven songwriting, vocal character, and AI-assisted production. The songs are the center of the project: scenes, hooks, emotional turns, and recordings shaped to feel worth returning to.",
  },
  {
    title: "How the songs are made",
    body: "A song begins with a human concept, lyric direction, and editorial taste. From there, production tools help explore vocal textures, arrangements, and versions. The final release is selected, edited, and shaped by human judgment.",
  },
  {
    title: "Why AI-assisted production is used",
    body: "AI-assisted production makes it possible to explore more vocal colors, genre treatments, and arrangement paths while keeping the process centered on original writing and curation. It is a studio tool, not the story.",
  },
  {
    title: "What is human-directed",
    body: "Lyrics, song concepts, curation, editing, arrangement decisions, and final selection are human-directed. The process values taste, restraint, and emotional clarity over novelty.",
  },
  {
    title: "What not to assume",
    body: "Session names such as Milo or Emi are used for vocal character and catalog organization. They should not be read as claims that traditional human vocalists performed every part, and Kansai Music does not invent performer biographies around those names.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
      <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">Human, transparent, music first.</h1>
      <div className="mt-12 grid gap-5">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[8px] border border-border bg-panel/72 p-6">
            <h2 className="font-display text-3xl">{section.title}</h2>
            <p className="mt-4 leading-7 text-muted">{section.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <DisclosureNote />
      </div>
    </section>
  );
}
