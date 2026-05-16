# Kansai Music

A premium music website for Kansai Music, a human-directed, AI-assisted music project built around original lyrics, story-driven songwriting, vocal character, and carefully shaped production.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components by default
- Framer Motion for subtle interface motion
- Lucide React icons
- Local TypeScript data for track content

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run typecheck
npm run lint
```

## Deploying To Vercel

Import the repository in Vercel and deploy with the default Next.js settings. No database or external service is required for the initial version.

Recommended environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://kansaimusic.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/kansaimusic
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/KansaiMusic/
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/@kansaimusic
NEXT_PUBLIC_SPOTIFY_URL=
NEXT_PUBLIC_APPLE_MUSIC_URL=
CONTACT_EMAIL=hello@kansaimusic.com
```

The site runs without these variables; they are placeholders for production links and future integrations.

## Adding A Song

Edit `src/data/tracks.ts` and add a new `Track` object:

- `slug` controls the URL at `/music/[slug]`
- `session` controls filtering
- `moods` controls mood filters
- `coverImage` should use the CloudFront cover path configured in `src/data/tracks.ts`
- `audioSrc` should use the CloudFront audio path configured in `src/data/tracks.ts`
- `videoSrc` and `videoPoster` are optional
- `streamingLinks` can be filled in later without changing the page code

Use session language such as “session,” “voice,” “vocal character,” or “vocal version.” Do not invent performer biographies for named vocal characters.

## Asset Locations

- Logos: `public/images/logos`
- Cover art: `https://media.kansaimusic.com/images/covers`
- Video posters: `public/images/posters`
- Audio files: `https://media.kansaimusic.com/audio/distribution`
- Lyric videos / visualizers: `public/videos`

The `Logo` component supports:

```tsx
<Logo variant="dark" />
<Logo variant="light" />
```

## Future Integrations

The current email signup is intentionally static. It can later connect to ConvertKit, Mailchimp, Supabase, Resend, or another provider. Streaming buttons are also placeholders until official distribution links are available.
