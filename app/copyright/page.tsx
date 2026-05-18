import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { copyrightShareImage, shareImage } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Copyright & Usage",
  description:
    "Copyright, usage, licensing, attribution, and takedown information for Kansai Music songs, recordings, lyrics, artwork, and site content.",
  alternates: { canonical: "/copyright" },
  openGraph: {
    title: "Copyright & Usage | Kansai Music",
    description:
      "Copyright, usage, licensing, attribution, and takedown information for Kansai Music songs, recordings, lyrics, artwork, and site content.",
    url: "/copyright",
    images: shareImage(copyrightShareImage),
  },
  twitter: {
    card: "summary_large_image",
    title: "Copyright & Usage | Kansai Music",
    description: "Copyright, usage, licensing, attribution, and takedown information for Kansai Music.",
    images: [copyrightShareImage],
  },
};

const effectiveDate = "May 16, 2026";
const legalOwner = "Kansai Music";
const contactEmail = "contact@kansaimusic.com";
const licensingEmail = "licensing@kansaimusic.com";
const copyrightEmail = "copyright@kansaimusic.com";
const mailingAddress = "Los Angeles, California, USA";

const ownedMaterials = [
  "Original songs and musical compositions",
  "Sound recordings and audio files",
  "Lyrics",
  "Album, single, and promotional artwork",
  "Music videos, lyric videos, visualizers, and related video content",
  "Artist, album, and song descriptions",
  "Logos, branding, graphics, and website design elements",
  "Photographs, illustrations, and promotional materials",
];

const permittedUses = [
  "Share links to official Kansai Music pages",
  "Share links to official streaming platforms, videos, or social posts",
  "Use official embed tools from authorized platforms when available",
  "Quote short excerpts for commentary, review, editorial discussion, or other legally permitted uses",
];

const prohibitedUses = [
  "Re-upload Kansai Music songs, videos, artwork, lyrics, or other content to another website, platform, or service",
  "Sell, license, distribute, or commercially exploit Kansai Music content",
  "Use Kansai Music recordings in videos, ads, podcasts, games, apps, films, live streams, broadcasts, or other media",
  "Create remixes, samples, edits, covers, AI covers, voice clones, stem extractions, or derivative works from Kansai Music songs or recordings",
  "Use Kansai Music artwork, logos, song titles, album titles, or branding on merchandise or promotional materials",
  "Scrape, archive, clone, mass-download, or mirror content from this website",
  "Use Kansai Music content to train, fine-tune, test, develop, or improve AI models, datasets, synthetic media systems, or generative tools",
  "Register, upload, distribute, monetize, claim, or fingerprint Kansai Music content through any third-party platform without permission",
];

const aiRestrictions = [
  "AI model training",
  "Dataset creation",
  "Voice cloning",
  "Style imitation",
  "Synthetic performances",
  "Automated lyric generation based on Kansai Music lyrics",
  "Stem separation for reuse",
  "AI-generated covers, remixes, or derivative recordings",
  "Any system designed to imitate, reproduce, transform, or commercially exploit Kansai Music content",
];

const licensingDetails = [
  "The song, recording, artwork, lyric, video, or other content you want to use",
  "A description of your project",
  "Where and how the content will be used",
  "Whether the use is commercial or non-commercial",
  "The expected distribution, audience, territory, and duration of use",
  "Any relevant deadlines",
];

const claimDetails = [
  "Your name and contact information",
  "A description of the copyrighted work you believe has been infringed",
  "The URL or location of the material you believe is infringing",
  "A statement that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law",
  "A statement that the information in your notice is accurate",
  "Your physical or electronic signature",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-9">
      <h2 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-7 text-muted">{children}</div>
    </section>
  );
}

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Copyright & Usage
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
          Clear rights for songs, stories, and artwork.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          This page explains how Kansai Music content may and may not be used. It is intended as
          practical public guidance, not legal advice.
        </p>
      </div>

      <div className="mt-10 rounded-[8px] border border-accent/45 bg-accent/10 p-6 shadow-[var(--shadow)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-3xl">Need permission for a project?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              For sync, licensing, remix, sample, media, playlist, or commercial use requests,
              include the song title, intended use, distribution, and deadline.
            </p>
          </div>
          <a
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent-strong"
            href={`mailto:${licensingEmail}`}
          >
            <Mail className="h-4 w-4" />
            Licensing
          </a>
        </div>
      </div>

      <div className="mt-12 space-y-10">
        <div className="rounded-[8px] border border-border bg-panel/72 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Effective Date
          </p>
          <p className="mt-3 text-lg text-foreground">{effectiveDate}</p>
          <p className="mt-5 leading-7 text-muted">
            Copyright © {currentYear} Kansai Music. All rights reserved.
          </p>
          <p className="mt-4 leading-7 text-muted">
            All music, recordings, lyrics, artwork, images, videos, written content, branding,
            logos, graphics, and other materials published on this website are owned by or licensed
            to <strong className="font-semibold text-foreground">Kansai Music</strong>, unless
            otherwise stated.
          </p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted">Legal owner</dt>
              <dd className="mt-1 font-semibold text-foreground">{legalOwner}</dd>
            </div>
            <div>
              <dt className="text-muted">Mailing address</dt>
              <dd className="mt-1 font-semibold text-foreground">{mailingAddress}</dd>
            </div>
          </dl>
        </div>

        <Section title="What We Own">
          <p>The content on this site may include, but is not limited to:</p>
          <BulletList items={ownedMaterials} />
          <p>
            Unless clearly stated otherwise, these materials may not be copied, redistributed,
            modified, uploaded, sold, licensed, sampled, remixed, synchronized, used in AI-generated
            works, or used commercially without prior written permission from Kansai Music.
          </p>
        </Section>

        <Section title="Permitted Use">
          <p>You are welcome to:</p>
          <BulletList items={permittedUses} />
          <p>
            Please do not imply that Kansai Music endorses you, your product, your service, your
            channel, your project, or your organization unless we have given written permission.
          </p>
        </Section>

        <Section title="Prohibited Use">
          <p>Without prior written permission, you may not:</p>
          <BulletList items={prohibitedUses} />
        </Section>

        <Section title="Licensing Requests">
          <p>
            For licensing, synchronization, remix, sample, commercial use, media use, or other
            permission requests, contact{" "}
            <a className="text-foreground hover:text-accent" href={`mailto:${licensingEmail}`}>
              {licensingEmail}
            </a>
            .
          </p>
          <p>Please include:</p>
          <BulletList items={licensingDetails} />
          <p>
            No permission is granted unless confirmed in writing by Kansai Music or its authorized
            representative.
          </p>
        </Section>

        <Section title="Attribution">
          <p>
            Attribution does not replace permission. Crediting Kansai Music is appreciated when
            content is lawfully shared, embedded, reviewed, or referenced, but attribution alone does
            not authorize copying, uploading, remixing, sampling, commercial use, distribution, or
            derivative works.
          </p>
          <div className="rounded-[8px] border border-border bg-panel/72 p-5 text-foreground">
            <p className="font-semibold">Suggested attribution:</p>
            <p className="mt-3">Kansai Music</p>
            <p>kansaimusic.com</p>
          </div>
        </Section>

        <Section title="Third-Party Platforms">
          <p>
            Kansai Music may distribute content through third-party platforms such as streaming
            services, video platforms, social networks, digital music stores, and promotional
            channels.
          </p>
          <p>
            Use of Kansai Music content on those platforms is also subject to the terms, licenses,
            and restrictions of those services. Downloading, accessing, streaming, embedding, or
            sharing Kansai Music content through a third-party platform does not grant ownership or
            additional rights beyond those provided by that platform and applicable law.
          </p>
        </Section>

        <Section title="Artificial Intelligence and Synthetic Media">
          <p>Kansai Music content may not be used without written permission for:</p>
          <BulletList items={aiRestrictions} />
          <p>
            This restriction applies whether the use is commercial, experimental, internal,
            educational, or personal, unless otherwise permitted by law.
          </p>
        </Section>

        <Section title="Fan Sharing and Social Media">
          <p>
            We appreciate listeners sharing Kansai Music with others. You may share official links,
            posts, videos, embeds, or streaming links from authorized Kansai Music channels. Please
            share from the original source whenever possible.
          </p>
          <p>
            Please do not upload full songs, full videos, lyric sheets, artwork files, or
            downloadable copies of Kansai Music content to your own account, page, channel,
            repository, or platform without permission.
          </p>
        </Section>

        <Section title="Copyright Claims / Takedown Requests">
          <p>
            This section is provided for copyright claims and takedown requests. It is not presented
            as an official DMCA designated agent notice unless and until that designation is
            confirmed.
          </p>
          <p>
            If you believe content on this website infringes your copyright, contact{" "}
            <a className="text-foreground hover:text-accent" href={`mailto:${copyrightEmail}`}>
              {copyrightEmail}
            </a>
            .
          </p>
          <p>Please include the following information:</p>
          <BulletList items={claimDetails} />
          <p>We may remove or restrict access to content while we review a claim.</p>
        </Section>

        <Section title="Counter-Notices">
          <p>
            If you believe content was removed or restricted by mistake, contact{" "}
            <a className="text-foreground hover:text-accent" href={`mailto:${copyrightEmail}`}>
              {copyrightEmail}
            </a>
            . Please include enough information for us to identify the material, review the issue,
            and contact you if additional information is needed.
          </p>
        </Section>

        <Section title="Repeat Infringers">
          <p>
            Where appropriate, Kansai Music may restrict access, block users, remove content, or
            take other action against parties who repeatedly infringe or misuse Kansai Music
            content.
          </p>
        </Section>

        <Section title="No Transfer of Rights">
          <p>
            Nothing on this website transfers ownership of any intellectual property rights to
            visitors, users, listeners, platforms, partners, or third parties. All rights not
            expressly granted are reserved.
          </p>
        </Section>

        <Section title="Changes to This Page">
          <p>
            Kansai Music may update this Copyright & Usage page from time to time. Updates will be
            reflected by the effective date listed above.
          </p>
        </Section>

        <Section title="Contact">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["General questions", contactEmail],
              ["Licensing and media requests", licensingEmail],
              ["Copyright notices", copyrightEmail],
            ].map(([label, email]) => (
              <a
                key={email}
                className="focus-ring rounded-[8px] border border-border bg-panel/72 p-5 text-foreground transition hover:border-accent"
                href={`mailto:${email}`}
              >
                <span className="block text-sm text-muted">{label}</span>
                <span className="mt-2 flex items-center gap-2 font-semibold">
                  {email}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </Section>

        <div className="rounded-[8px] border border-border bg-panel/72 p-6">
          <p className="leading-7 text-muted">
            Looking for permission to use a song? Start with the{" "}
            <Link className="text-foreground hover:text-accent" href="/contact">
              Contact / Licensing page
            </Link>{" "}
            or email{" "}
            <a className="text-foreground hover:text-accent" href={`mailto:${licensingEmail}`}>
              {licensingEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
