export type Session =
  | "sicilia"
  | "country"
  | "gospel"
  | "duet"
  | "emi"
  | "osaka"
  | "milo";

export type Track = {
  slug: string;
  title: string;
  session: Session;
  sessionLabel: string;
  album: string;
  genre: string;
  featured?: boolean;
  songOfDay?: boolean;
  releaseDate?: string;
  runtime?: string;
  moods: string[];
  hook: string;
  description: string;
  story?: string;
  lyrics?: string;
  coverImage: string;
  audioSrc: string;
  videoSrc?: string;
  videoPoster?: string;
  credits?: {
    lyrics?: string;
    creativeDirection?: string;
    production?: string;
  };
  streamingLinks?: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
    amazonMusic?: string;
    bandcamp?: string;
  };
};

const audioBase = "https://media.gintzmusic.com/audio/distribution";
const imageBase = "https://media.gintzmusic.com/images/covers";

function audio(file: string) {
  return `${audioBase}/${encodeURI(file)}`;
}

function cover(file: string) {
  return `${imageBase}/${encodeURI(file)}`;
}

const defaultCredits = {
  creativeDirection: "Gintz Music",
  production: "Human-directed, AI-assisted production",
};

export const tracks: Track[] = [
  {
    slug: "brittany-a-mascalucia",
    title: "Brittany a Mascalucia",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "Pop",
    featured: true,
    songOfDay: true,
    releaseDate: "2026-05-14",
    runtime: "3:42",
    moods: ["Romantic", "Nostalgic", "Cinematic"],
    hook: "A sunlit Sicilia session with a pop pulse, a travel-story glow, and a name that feels like a postcard.",
    description:
      "A polished pop session from the Sicilia catalog, shaped around place, memory, and the charged little details that make a song feel lived-in.",
    story:
      "Part of The Sicilia Sessions, this track leans into Mediterranean color, melodic immediacy, and a story-forward vocal character without turning the session into a fictional biography.",
    coverImage: cover("Brittany-a-Mascalucia.jpg"),
    audioSrc: audio("Brittany-a-Mascalucia.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "all-american-cowboy",
    title: "All American Cowboy",
    session: "country",
    sessionLabel: "The Country Sessions",
    album: "The Country Sessions",
    genre: "Country",
    featured: true,
    releaseDate: "2026-05-13",
    runtime: "3:34",
    moods: ["Hopeful", "Upbeat", "Nostalgic"],
    hook: "A big-hearted country session built around open-road confidence and plainspoken charm.",
    description:
      "A country-leaning Gintz Music track with warm storytelling, a direct chorus, and a broad Americana frame.",
    story:
      "The Country Sessions collect grounded, narrative songs that favor character, place, and direct emotional turns over artist backstory.",
    coverImage: cover("All-American-Cowboy.jpg"),
    audioSrc: audio("All-American-Cowboy.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "satisfied-in-him",
    title: "Satisfied in Him",
    session: "gospel",
    sessionLabel: "The Gospel Sessions",
    album: "The Gospel Sessions",
    genre: "Christian",
    featured: true,
    releaseDate: "2026-05-12",
    runtime: "4:02",
    moods: ["Spiritual", "Hopeful", "Reflective"],
    hook: "A gospel session centered on gratitude, steadiness, and devotional warmth.",
    description:
      "A Christian/Gospel release from Gintz Music, shaped for uplift without losing intimacy.",
    story:
      "The Gospel Sessions focus on devotional writing, choir-like textures, and songs that keep faith at the center of the emotional experience.",
    coverImage: cover("Satisfied-in-Him.jpg"),
    audioSrc: audio("Satisfied-in-Him.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "good-day-coming-on",
    title: "Good Day Coming On",
    session: "duet",
    sessionLabel: "Milo & Emi Sessions",
    album: "Milo & Emi Sessions",
    genre: "Pop",
    featured: true,
    releaseDate: "2026-05-11",
    runtime: "3:18",
    moods: ["Hopeful", "Upbeat", "Romantic"],
    hook: "A bright Milo & Emi pop session about catching the first real light after a rough stretch.",
    description:
      "A buoyant vocal-character pairing with a clean chorus, warm momentum, and an easy morning-drive lift.",
    story:
      "Milo & Emi Sessions are organized around contrast and blend: two vocal textures, one story lane, and arrangements selected for emotional clarity.",
    coverImage: cover("Good-Day-Coming-On.jpg"),
    audioSrc: audio("Good-Day-Coming-On.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "diceva-he-used-to-say",
    title: "Diceva (he used to say)",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "Pop",
    releaseDate: "2026-05-10",
    runtime: "3:26",
    moods: ["Reflective", "Nostalgic", "Cinematic"],
    hook: "A reflective Sicilia pop session about inherited sayings, memory, and the voices that linger.",
    description:
      "A story-driven track with Italian color and a quiet emotional arc built around what someone used to say.",
    story:
      "This Sicilia session treats language and memory as musical texture, keeping the named voice as a vocal character rather than a claimed performer identity.",
    coverImage: cover("Diceva-He-Used-to-Say.jpg"),
    audioSrc: audio("Diceva-He-Used-to-Say.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "a-prayer-for-the-lost",
    title: "A Prayer for the Lost",
    session: "gospel",
    sessionLabel: "The Gospel Sessions",
    album: "The Gospel Sessions",
    genre: "Christian",
    releaseDate: "2026-05-09",
    runtime: "4:10",
    moods: ["Spiritual", "Reflective", "Hopeful"],
    hook: "A prayerful gospel session for people still trying to find the road back.",
    description:
      "A quiet, compassionate Christian track with devotional pacing and a gentle lift.",
    story:
      "A Prayer for the Lost sits in the more intimate side of The Gospel Sessions, leaning on restraint and sincerity.",
    coverImage: cover("A-Prayer-for-the-Lost.jpg"),
    audioSrc: audio("A-Prayer-for-the-Lost.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "little-victories",
    title: "小さな優勝 (Little Victories)",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "J-Pop",
    releaseDate: "2026-05-08",
    runtime: "3:09",
    moods: ["Hopeful", "Upbeat", "Cinematic"],
    hook: "A J-Pop-leaning Emi session celebrating the tiny wins that keep a person moving.",
    description:
      "Bright, quick-footed, and emotionally generous, this track frames everyday resilience as something worth singing about.",
    story:
      "The Emi Sessions explore melodic pop, lighter vocal colors, and story ideas with a clear emotional hook.",
    coverImage: cover("Little-Victories.jpg"),
    audioSrc: audio("Little-Victories.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "otousan",
    title: "お父さん (Otousan)",
    session: "osaka",
    sessionLabel: "The Osaka Sessions",
    album: "The Osaka Sessions",
    genre: "Funk",
    releaseDate: "2026-05-07",
    runtime: "3:37",
    moods: ["Nostalgic", "Upbeat", "Reflective"],
    hook: "A funk-colored Osaka session with a family-story center and a rhythmic grin.",
    description:
      "A groove-forward track from The Osaka Sessions, balancing playful movement with an affectionate narrative core.",
    story:
      "The Osaka Sessions make room for funk, humor, and regional color while keeping the catalog language centered on sessions and vocal versions.",
    coverImage: cover("Otousan.png"),
    audioSrc: audio("Otousan.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "capybara-rush-hour",
    title: "カピバラ・ラッシュアワー (Capybara Rush Hour)",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "J-Pop",
    releaseDate: "2026-05-06",
    runtime: "2:55",
    moods: ["Humorous", "Upbeat", "Cinematic"],
    hook: "A playful J-Pop Emi session with commuter chaos, bright movement, and a wink.",
    description:
      "Fast, colorful, and lightly surreal, this song keeps the energy high without pretending the vocal character is a traditional performer.",
    story:
      "A comic entry in The Emi Sessions, built for speed, visual language, and a chorus that should feel animated.",
    coverImage: cover("Capybara-Rush-Hour.png"),
    audioSrc: audio("Capybara-Rush-Hour.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "disaster-the-uber-back-song",
    title: "Disaster (The \"Uber Back Song\")",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "J-Pop",
    featured: true,
    releaseDate: "2026-05-05",
    runtime: "3:22",
    moods: ["Humorous", "Upbeat", "Nostalgic"],
    hook: "A catchy, chaotic Emi session about the ride home after everything goes sideways.",
    description:
      "A glossy J-Pop-leaning track with comic timing, melodic punch, and a title that already knows the night went wrong.",
    story:
      "This featured Emi session uses humor as the engine: one bad decision, one ride back, and a chorus built to stick.",
    coverImage: cover("Uber-Back-Song.jpg"),
    audioSrc: audio("Uber-Back-Song.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "the-best-thing-going-tonight",
    title: "The Best Thing Going Tonight",
    session: "milo",
    sessionLabel: "The Milo Sessions",
    album: "The Milo Sessions",
    genre: "Pop",
    releaseDate: "2026-05-04",
    runtime: "3:33",
    moods: ["Romantic", "Reflective", "Cinematic"],
    hook: "A smooth Milo session about finding one bright thing in a room full of noise.",
    description:
      "A pop track shaped around a lower-register vocal texture, late-night polish, and a direct emotional frame.",
    story:
      "The Milo Sessions lean into weathered vocal character, compact scenes, and songs that feel overheard rather than overexplained.",
    coverImage: cover("The-Best-Thing-Going-Tonight.jpg"),
    audioSrc: audio("The-Best-Thing-Going-Tonight.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "sciupafimmini-player",
    title: "Sciupafìmmini (player)",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "Pop",
    releaseDate: "2026-05-03",
    runtime: "3:21",
    moods: ["Humorous", "Upbeat", "Nostalgic"],
    hook: "A Sicilia session with swagger, local color, and a title that already has a smirk.",
    description:
      "A character-forward pop track with Sicilian flavor, rhythmic confidence, and a playful edge.",
    story:
      "This Sicilia entry is built around attitude and idiom, treating the vocal version as a narrative lens rather than a biography.",
    coverImage: cover("Sciupafìmmini-Player.png"),
    audioSrc: audio("Sciupafìmmini-Player.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "riding-the-bowl-pissing-my-life-away",
    title: "Riding the Bowl (Pissing My Life Away)",
    session: "milo",
    sessionLabel: "The Milo Sessions",
    album: "The Milo Sessions",
    genre: "Pop",
    featured: true,
    releaseDate: "2026-05-02",
    runtime: "3:12",
    moods: ["Humorous", "Reflective", "Cinematic"],
    hook: "A Milo session with dark humor, bathroom philosophy, and a surprisingly tender edge.",
    description:
      "A comic-confessional pop track that turns an absurd image into a broader feeling of drift and self-recognition.",
    story:
      "The Milo voice works well for songs that can hold a straight face while the lyric does something risky, strange, or painfully honest.",
    coverImage: cover("Riding-the-Bowl-Pissing-My-Life-Away.jpg"),
    audioSrc: audio("Riding-the-Bowl-Pissing-My-Life-Away.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "eat-the-spam",
    title: "Eat the Spam",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "Pop",
    releaseDate: "2026-05-01",
    runtime: "2:48",
    moods: ["Humorous", "Upbeat"],
    hook: "A bright Emi pop session that turns a strange little phrase into a sticky hook.",
    description:
      "Playful, compact, and intentionally odd, this track keeps the catalog’s comic lane light on its feet.",
    story:
      "A reminder that the sessions can make room for novelty and still be curated with taste.",
    coverImage: cover("Kiss-the-Spam.jpg"),
    audioSrc: audio("Kiss-the-Spam.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "asobi-nin-player",
    title: "Asobi-nin (Player)",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "J-Pop",
    releaseDate: "2026-04-30",
    runtime: "3:05",
    moods: ["Humorous", "Upbeat", "Romantic"],
    hook: "A J-Pop Emi session with flirtation, motion, and a sharp little grin.",
    description:
      "A playful pop cut that sits beside the catalog’s character songs without inventing a performer mythology.",
    story:
      "Asobi-nin keeps the Emi lane colorful and kinetic, using title and tone as the character frame.",
    coverImage: cover("Asobi-nin-Player.jpg"),
    audioSrc: audio("Asobi-nin-Player.mp3"),
    credits: defaultCredits,
  },
];

export const sessions = [
  { key: "sicilia", label: "Sicilia", title: "The Sicilia Sessions" },
  { key: "country", label: "Country", title: "The Country Sessions" },
  { key: "gospel", label: "Gospel", title: "The Gospel Sessions" },
  { key: "duet", label: "Milo & Emi", title: "Milo & Emi Sessions" },
  { key: "emi", label: "Emi", title: "The Emi Sessions" },
  { key: "osaka", label: "Osaka", title: "The Osaka Sessions" },
  { key: "milo", label: "Milo", title: "The Milo Sessions" },
] as const;

export const moods = [
  "Reflective",
  "Hopeful",
  "Romantic",
  "Nostalgic",
  "Humorous",
  "Spiritual",
  "Cinematic",
  "Upbeat",
] as const;

export function getTrack(slug: string) {
  return tracks.find((track) => track.slug === slug);
}

export function getSongOfDay() {
  return tracks.find((track) => track.songOfDay) ?? tracks.find((track) => track.featured) ?? tracks[0];
}

export function getRelatedTracks(track: Track, limit = 3) {
  return tracks
    .filter((candidate) => candidate.slug !== track.slug)
    .map((candidate) => ({
      track: candidate,
      score:
        (candidate.session === track.session ? 3 : 0) +
        (candidate.genre === track.genre ? 1 : 0) +
        candidate.moods.filter((mood) => track.moods.includes(mood)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ track: related }) => related);
}
