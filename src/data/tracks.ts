export type Session = "milo" | "emi" | "duet" | "gospel" | "country" | "other";

export type Track = {
  slug: string;
  title: string;
  session: Session;
  sessionLabel: string;
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

export const tracks: Track[] = [
  {
    slug: "after-the-last-train",
    title: "After the Last Train",
    session: "duet",
    sessionLabel: "Milo & Emi Sessions",
    featured: true,
    songOfDay: true,
    releaseDate: "2026-05-14",
    runtime: "3:42",
    moods: ["Reflective", "Nostalgic", "Cinematic"],
    hook: "A late-night duet about the choices that keep glowing after the city goes quiet.",
    description:
      "A cinematic vocal version shaped around memory, distance, and the small courage of saying what stayed unsaid.",
    story:
      "This song began as a lyric fragment about two people leaving a station in opposite directions. The final version keeps the scene small: platform lights, a phone that never rings, and the feeling that some goodbyes keep moving long after the train is gone.",
    lyrics: `I kept your name in a paper sleeve
Under the map of a town we would leave
After the last train, the signal was low
But some lights follow wherever you go

If memory calls from a borrowed line
Tell it I waited past closing time
Not for the answer, not for the blame
Just for the echo that sounded like rain`,
    coverImage: "/images/covers/after-the-last-train.svg",
    audioSrc: "/audio/after-the-last-train.mp3",
    videoSrc: "/videos/after-the-last-train.mp4",
    videoPoster: "/images/posters/after-the-last-train.svg",
    credits: {
      lyrics: "Douglas Gintz",
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
  {
    slug: "paper-moon-radio",
    title: "Paper Moon Radio",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    featured: true,
    releaseDate: "2026-04-28",
    runtime: "3:16",
    moods: ["Hopeful", "Romantic", "Upbeat"],
    hook: "A bright, wistful pop cut about hearing the right song at exactly the wrong hour.",
    description:
      "Warm synths, clean melodic phrasing, and a vocal character built for a hopeful chorus.",
    story:
      "Paper Moon Radio is built like a postcard from a drive after midnight, when a familiar melody turns the dashboard into a tiny theater.",
    lyrics: `Paper moon on the radio
Silver static in stereo
You laughed once and the whole street knew
The night had turned its face toward you`,
    coverImage: "/images/covers/paper-moon-radio.svg",
    audioSrc: "/audio/paper-moon-radio.mp3",
    credits: {
      lyrics: "Douglas Gintz",
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
  {
    slug: "chapel-light",
    title: "Chapel Light",
    session: "gospel",
    sessionLabel: "Gospel Sessions",
    releaseDate: "2026-04-10",
    runtime: "4:05",
    moods: ["Spiritual", "Hopeful", "Cinematic"],
    hook: "A reverent gospel session about finding a light that does not need a spotlight.",
    description:
      "An intimate devotional arrangement with choir-like textures and a slow-build emotional arc.",
    story:
      "Written around the image of a small chapel staying lit after everyone has gone home, this track focuses on quiet faith rather than spectacle.",
    lyrics: `There is a light in the back of the room
Soft as a prayer and steady as noon
I came with my questions, I left them there
Folded like hands in the midnight air`,
    coverImage: "/images/covers/chapel-light.svg",
    audioSrc: "/audio/chapel-light.mp3",
    videoSrc: "/videos/chapel-light.mp4",
    videoPoster: "/images/posters/chapel-light.svg",
    credits: {
      lyrics: "Douglas Gintz",
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
  {
    slug: "highway-27",
    title: "Highway 27",
    session: "country",
    sessionLabel: "Country Sessions",
    releaseDate: "2026-03-19",
    runtime: "3:31",
    moods: ["Nostalgic", "Humorous", "Reflective"],
    hook: "A country-leaning story song about a wrong turn that becomes the whole point.",
    description:
      "Acoustic textures, plainspoken lyrics, and a little smile at the edge of regret.",
    story:
      "Highway 27 is a road song for anyone who has pretended to be lost longer than they needed to.",
    lyrics: `I missed the sign for the interstate
Called it fate at a quarter to eight
You said turn around, I said not just yet
The sun was doing things we should not forget`,
    coverImage: "/images/covers/highway-27.svg",
    audioSrc: "/audio/highway-27.mp3",
    credits: {
      lyrics: "Douglas Gintz",
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
  {
    slug: "milo-in-blue",
    title: "Milo in Blue",
    session: "milo",
    sessionLabel: "The Milo Sessions",
    releaseDate: "2026-02-22",
    runtime: "2:58",
    moods: ["Reflective", "Cinematic"],
    hook: "A smoky, restrained vocal version about holding the line when the room gets quiet.",
    description:
      "A lower-register vocal character framed by minimal keys, muted percussion, and negative space.",
    story:
      "The Milo Sessions explore weathered vocal textures and compact stories that feel overheard rather than announced.",
    lyrics: `Blue was the color of almost home
Blue was the number you left on my phone
I do not answer, I do not erase
Some things need silence to stay in place`,
    coverImage: "/images/covers/milo-in-blue.svg",
    audioSrc: "/audio/milo-in-blue.mp3",
    credits: {
      lyrics: "Douglas Gintz",
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
  {
    slug: "signal-for-sleepwalkers",
    title: "Signal for Sleepwalkers",
    session: "other",
    sessionLabel: "Afterglow Sessions",
    releaseDate: "2026-01-30",
    runtime: "3:08",
    moods: ["Cinematic", "Upbeat", "Hopeful"],
    hook: "A nocturnal instrumental sketch built for motion, headlights, and second chances.",
    description:
      "A lyric-light visualizer piece for the Afterglow catalog, designed around rhythm and atmosphere.",
    story:
      "A studio sketch for late roads and early mornings, with the vocal treated more as texture than narrator.",
    lyrics: "",
    coverImage: "/images/covers/signal-for-sleepwalkers.svg",
    audioSrc: "/audio/signal-for-sleepwalkers.mp3",
    videoSrc: "/videos/signal-for-sleepwalkers.mp4",
    videoPoster: "/images/posters/signal-for-sleepwalkers.svg",
    credits: {
      creativeDirection: "Gintz Music",
      production: "Human-directed, AI-assisted production",
    },
  },
];

export const sessions = [
  { key: "milo", label: "Milo", title: "The Milo Sessions" },
  { key: "emi", label: "Emi", title: "The Emi Sessions" },
  { key: "duet", label: "Duet", title: "Milo & Emi Sessions" },
  { key: "gospel", label: "Gospel", title: "Gospel Sessions" },
  { key: "country", label: "Country", title: "Country Sessions" },
  { key: "other", label: "Instrumental / Other", title: "Afterglow Sessions" },
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
  return tracks.find((track) => track.songOfDay) ?? tracks[0];
}

export function getRelatedTracks(track: Track, limit = 3) {
  return tracks
    .filter((candidate) => candidate.slug !== track.slug)
    .map((candidate) => ({
      track: candidate,
      score:
        (candidate.session === track.session ? 3 : 0) +
        candidate.moods.filter((mood) => track.moods.includes(mood)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ track: related }) => related);
}
