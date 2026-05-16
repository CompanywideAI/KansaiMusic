import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteUrl } from "@/src/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const previewImage = "https://media.kansaimusic.com/images/covers/Brittany-a-Mascalucia.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Kansai Music",
    template: "%s | Kansai Music",
  },
  description:
    "Original lyrics, story-driven songwriting, vocal character, and human-directed, AI-assisted production.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kansai Music",
    description:
      "Songs from somewhere between memory and signal. Original lyrics, human direction, AI-assisted production.",
    url: "/",
    siteName: "Kansai Music",
    type: "website",
    images: [{ url: previewImage, width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansai Music",
    description: "Original lyrics. Human direction. AI-assisted production.",
    images: [previewImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Kansai Music",
    url: siteUrl(),
    description:
      "A human-directed music project built around original lyrics, vocal character, and AI-assisted production.",
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_TIKTOK_URL,
      process.env.NEXT_PUBLIC_YOUTUBE_URL,
      process.env.NEXT_PUBLIC_SPOTIFY_URL,
      process.env.NEXT_PUBLIC_APPLE_MUSIC_URL,
    ].filter(Boolean),
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
