export const socialUrls = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/kansaimusic",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/KansaiMusic/",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@kansaimusic",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL,
  spotify: process.env.NEXT_PUBLIC_SPOTIFY_URL,
  appleMusic: process.env.NEXT_PUBLIC_APPLE_MUSIC_URL,
};

export function officialSocialUrls() {
  return [
    socialUrls.instagram,
    socialUrls.facebook,
    socialUrls.youtube,
    socialUrls.tiktok,
    socialUrls.spotify,
    socialUrls.appleMusic,
  ].filter(Boolean);
}
