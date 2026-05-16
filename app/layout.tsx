import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { defaultShareImage, shareImage } from "@/src/lib/seo";
import { officialSocialUrls } from "@/src/lib/social";
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

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KT5NGVS1JT";

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
    images: shareImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansai Music",
    description: "Original lyrics. Human direction. AI-assisted production.",
    images: [defaultShareImage],
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
    sameAs: officialSocialUrls(),
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
        <GoogleAnalytics measurementId={googleAnalyticsId} />
      </body>
    </html>
  );
}
