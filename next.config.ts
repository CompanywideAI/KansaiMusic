import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/music/eat-the-spam",
        destination: "/music/the-meat-beat",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.kansaimusic.com",
        pathname: "/images/covers/**",
      },
    ],
  },
};

export default nextConfig;
