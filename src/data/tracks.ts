import { lyricsBySlug } from "@/src/data/lyrics";

export type Session =
  | "sicilia"
  | "country"
  | "gospel"
  | "duet"
  | "hollywood"
  | "gothic"
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
  primaryGenre: string;
  secondaryStyles: string[];
  languages: string[];
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
  youtubeVideoId?: string;
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

const audioBase = "https://media.kansaimusic.com/audio/distribution";
const imageBase = "https://media.kansaimusic.com/images/covers";

function audio(file: string) {
  return `${audioBase}/${file}`;
}

function cover(file: string) {
  return `${imageBase}/${file}`;
}

const defaultCredits = {
  creativeDirection: "Kansai Music",
  production: "Human-directed, AI-assisted production",
};

const trackCatalog: Track[] = [
  {
    slug: "brittany-a-mascalucia",
    title: "Brittany a Mascalucia",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "International Pop",
    primaryGenre: "International Pop",
    secondaryStyles: ["Dance Pop", "Mediterranean Pop", "Comedy Pop"],
    languages: ["English", "Italian", "Sicilian dialect"],
    featured: true,
    songOfDay: true,
    releaseDate: "2026-05-14",
    runtime: "3:42",
    moods: ["International Pop", "Dance Pop", "Mediterranean Pop", "Comedy Pop"],
    hook: "A Sicilian homecoming turns into a whole-village campaign for romance.",
    description:
      "A humorous, high-energy international pop track about a Sicilian guy who brings his girlfriend back to his small hometown, only to find the whole village pushing them toward marriage.",
    story:
      "Playful, catchy, and full of Mediterranean party flavor, this Sicilia session uses comedy and local color as the story engine while keeping the vocal presentation framed as a session, not a fictional performer biography.",
    coverImage: cover("Brittany-a-Mascalucia.webp"),
    audioSrc: audio("Brittany-a-Mascalucia.mp3"),
    youtubeVideoId: "Iw3kaXv2c9o",
    credits: defaultCredits,
  },
  {
    slug: "all-american-cowboy",
    title: "All American Cowboy",
    session: "country",
    sessionLabel: "The Country Sessions",
    album: "The Country Sessions",
    genre: "Country Pop",
    primaryGenre: "Country Pop",
    secondaryStyles: ["Comedy Country", "Americana Pop", "Story Song"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-13",
    runtime: "3:34",
    moods: ["Country Pop", "Story Song", "Comedy Pop"],
    hook: "A Malibu makeover turns a small-town cowboy into a glossy cautionary tale.",
    description:
      "A tongue-in-cheek country pop story about a small-town cowboy who moves to Malibu, trades grit for glamour, and maybe sells a little too much of himself along the way.",
    story:
      "Funny, catchy, and just sharp enough to sting, this Country Sessions track treats the cowboy image as both character comedy and a story about losing the thread of yourself.",
    coverImage: cover("All-American-Cowboy.webp"),
    audioSrc: audio("All-American-Cowboy.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "satisfied-in-him",
    title: "Satisfied in Him",
    session: "gospel",
    sessionLabel: "The Gospel Sessions",
    album: "The Gospel Sessions",
    genre: "Contemporary Christian",
    primaryGenre: "Contemporary Christian",
    secondaryStyles: ["Worship", "Gospel Pop", "Inspirational"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-12",
    runtime: "4:02",
    moods: ["Contemporary Christian", "Worship", "Feel-Good"],
    hook: "A worshipful Gospel Sessions track about joy that runs deeper than circumstance.",
    description:
      "A contemporary Christian song centered on the truth that the soul is most satisfied in God when He is most glorified in us.",
    story:
      "Worshipful and reflective, this release is built around joy that is deeper than circumstance and a lyric center that keeps the Gospel Sessions reverent rather than showy.",
    coverImage: cover("Satisfied-in-Him.webp"),
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
    primaryGenre: "Pop",
    secondaryStyles: ["Feel-Good Pop", "Indie Pop", "Sunshine Pop"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-11",
    runtime: "3:18",
    moods: ["Pop", "Indie Pop", "Feel-Good"],
    hook: "A bright Milo & Emi session for morning walks, lighter hearts, and everyday grace.",
    description:
      "An upbeat, optimistic pop song about stepping into the day with a lighter heart.",
    story:
      "Built around small moments, morning walks, everyday grace, and the feeling that things might just turn out alright, this duet session keeps the emotional target simple and direct.",
    coverImage: cover("Good-Day-Coming-On.webp"),
    audioSrc: audio("Good-Day-Coming-On.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "hollywoods-burning",
    title: "Hollywood's Burning",
    session: "hollywood",
    sessionLabel: "The Hollywood Sessions",
    album: "The Hollywood Sessions",
    genre: "Glam Metal",
    primaryGenre: "Glam Metal",
    secondaryStyles: ["Rock", "Hair Metal", "Hard Rock"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-15",
    moods: ["Glam Metal", "Rock", "Hard Rock"],
    hook: "A loud Hollywood session built on Sunset Strip flash, big choruses, and neon guitar heat.",
    description:
      "An homage to the 1980s era of big hair bands, glam metal, hard rock, and the Sunset Strip in Hollywood.",
    story:
      "The Hollywood Sessions channel the theatrical side of rock: oversized hooks, electric swagger, and the memory of a scene where the guitars were loud, the lights were bright, and subtlety stayed outside the club door.",
    coverImage: cover("Hollywood-Is-Burning.webp"),
    audioSrc: audio("Hollywood-Is-Burning.mp3"),
    youtubeVideoId: "7pgZfCxQuYQ",
    credits: defaultCredits,
  },
  {
    slug: "seventy-summers",
    title: "Seventy Summers",
    session: "hollywood",
    sessionLabel: "The Hollywood Sessions",
    album: "The Hollywood Sessions",
    genre: "Retro Pop",
    primaryGenre: "Retro Pop",
    secondaryStyles: ["Indie Pop", "Ska-Pop", "Sophisti-Pop"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-18",
    moods: ["Retro Pop", "Indie Pop", "Ska-Pop", "Sophisti-Pop", "Feel-Good"],
    hook:
      "A sunny retro-pop reflection on growing older, staying grounded, and enjoying the ride.",
    description:
      "A witty, upbeat retro-pop song about growing older without taking yourself too seriously.",
    story:
      "Built around the idea that, if we are lucky, we only get seventy-something summers, the song balances humor, faith, doubt, love, and everyday wisdom with a sunny singalong feel.",
    coverImage: cover("Seventy-Summers.webp"),
    audioSrc: audio("Seventy-Summers.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "vice-and-virtue",
    title: "Vice and Virtue",
    session: "gothic",
    sessionLabel: "The Gothic Sessions",
    album: "The Gothic Sessions",
    genre: "Synth-pop",
    primaryGenre: "Synth-pop",
    secondaryStyles: [
      "Gothic",
      "Rock",
      "New Wave",
      "Darkwave",
      "Alternative Dance",
      "Industrial Pop",
    ],
    languages: ["English"],
    releaseDate: "2026-05-18",
    moods: ["Synth-pop", "Gothic", "New Wave", "Darkwave", "Alternative Dance"],
    hook:
      "Dark synth-pop with a gothic new wave edge, exploring the tension between innocence, image, and temptation.",
    description:
      "A dark synth-pop track with pulsing electronic bass, cold analog textures, and a moody new wave atmosphere.",
    story:
      "Set against the glow of a late-night club, Vice and Virtue follows a glamorous fictional figure caught between image, temptation, loneliness, and the struggle to stay true.",
    coverImage: cover("Vice-And-Virtue.webp"),
    audioSrc: audio("Vice-And-Virtue.mp3"),
    youtubeVideoId: "xOWkKutS_bA",
    credits: defaultCredits,
  },
  {
    slug: "diceva-he-used-to-say",
    title: "Diceva (He Used to Say)",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "International Pop",
    primaryGenre: "International Pop",
    secondaryStyles: ["Nostalgic Pop", "Italian Pop", "Mediterranean Pop"],
    languages: ["English", "Italian"],
    releaseDate: "2026-05-10",
    runtime: "3:26",
    moods: ["International Pop", "Mediterranean Pop", "Nostalgic"],
    hook: "A nostalgic Sicilia session shaped by family sayings and 1990s childhood memory.",
    description:
      "A nostalgic look back at growing up in Sicily in the 1990s, shaped by memories, family sayings, and the kind of wisdom that stays with you long after childhood ends.",
    story:
      "This Sicilia session treats language and memory as musical texture, keeping the named voice as a vocal character rather than a claimed performer identity.",
    coverImage: cover("Diceva-He-Used-to-Say.webp"),
    audioSrc: audio("Diceva-He-Used-to-Say.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "a-prayer-for-the-lost",
    title: "A Prayer for the Lost",
    session: "gospel",
    sessionLabel: "The Gospel Sessions",
    album: "The Gospel Sessions",
    genre: "Contemporary Christian",
    primaryGenre: "Contemporary Christian",
    secondaryStyles: ["Prayer Song", "Worship", "Mission-Themed Christian"],
    languages: ["English"],
    releaseDate: "2026-05-09",
    runtime: "4:10",
    moods: ["Contemporary Christian", "Worship"],
    hook: "A reverent prayer for distant places where the Gospel may still sound unfamiliar.",
    description:
      "A prayerful Christian song for those in distant lands where the Gospel may sound unfamiliar or foreign.",
    story:
      "Reverent and hopeful, it asks God to do what human words and effort cannot do alone, sitting in the more intimate side of The Gospel Sessions.",
    coverImage: cover("A-Prayer-for-the-Lost.webp"),
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
    primaryGenre: "J-Pop",
    secondaryStyles: ["Cute Pop", "Lifestyle Pop", "Feel-Good Pop"],
    languages: ["Japanese"],
    releaseDate: "2026-05-08",
    runtime: "3:09",
    moods: ["J-Pop", "Feel-Good", "Pop"],
    hook: "A cheerful Emi session for cake, coffee, routines, and tiny daily wins.",
    description:
      "A bright J-Pop celebration of small daily wins: a fluffy slice of cake, a hot latte, a favorite routine, and the quiet happiness hiding in ordinary moments.",
    story:
      "A cheerful anthem for collecting little victories, this Emi session keeps its joy compact, domestic, and easy to return to.",
    coverImage: cover("Little-Victories.webp"),
    audioSrc: audio("Little-Victories.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "otousan",
    title: "お父さん (Otousan)",
    session: "osaka",
    sessionLabel: "The Osaka Sessions",
    album: "The Osaka Sessions",
    genre: "Funk Pop",
    primaryGenre: "Funk Pop",
    secondaryStyles: ["Japanese Funk", "Comedy Pop", "Story Song"],
    languages: ["English", "Japanese", "Osaka dialect"],
    releaseDate: "2026-05-07",
    runtime: "3:37",
    moods: ["Funk Pop", "Comedy Pop", "Story Song", "Nostalgic"],
    hook: "A funky Osaka session about family stories, affection, and beautiful absurdity.",
    description:
      "A humorous and affectionate look back at stories and memories of a Japanese father-in-law in Osaka.",
    story:
      "Funky, nostalgic, and slightly ridiculous in the best way, this song is told from the perspective of a foreign son-in-law and keeps the Osaka session lane warm and character-driven.",
    coverImage: cover("Otousan.webp"),
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
    primaryGenre: "J-Pop",
    secondaryStyles: ["Novelty Pop", "Comedy Pop", "Osaka Pop"],
    languages: ["Japanese"],
    releaseDate: "2026-05-06",
    runtime: "2:55",
    moods: ["J-Pop", "Comedy Pop", "Pop"],
    hook: "A cute, absurd Emi session about a capybara disrupting Osaka commuter life.",
    description:
      "A playful J-Pop story about a capybara causing unexpected chaos on Osaka's Midosuji Line.",
    story:
      "Cute, absurd, and full of commuter-life energy, this track leans into novelty pop without losing the catalog's sense of curation.",
    coverImage: cover("Capybara-Rush-Hour.webp"),
    audioSrc: audio("Capybara-Rush Hour.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "disaster-the-uber-back-song",
    title: "Disaster (The \"Uber Back Song\")",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "Dance Pop",
    primaryGenre: "Dance Pop",
    secondaryStyles: ["Club Pop", "J-Pop", "Party Pop"],
    languages: ["English", "Japanese"],
    featured: true,
    releaseDate: "2026-05-05",
    runtime: "3:22",
    moods: ["Dance Pop", "J-Pop", "Pop"],
    hook: "A late-night dance-pop Emi session for bad decisions and the ride back home.",
    description:
      "A pulsing dance-pop track built for late nights, bad decisions, and the inevitable ride back home.",
    story:
      "High-energy, playful, and made for a party playlist, this featured Emi session uses chaos as the chorus engine.",
    coverImage: cover("Uber-Back-Song.webp"),
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
    primaryGenre: "Pop",
    secondaryStyles: ["Indie Pop", "Sarcastic Pop", "Relationship Song"],
    languages: ["English"],
    releaseDate: "2026-05-04",
    runtime: "3:33",
    moods: ["Pop", "Indie Pop"],
    hook: "A sharp Milo session about knowing you are being used and staying anyway.",
    description:
      "A sharp, slightly sarcastic pop song about a flawed relationship where the singer knows he is being used, but still admits it may be the best thing he has going tonight.",
    story:
      "The Milo Sessions lean into weathered vocal character, compact scenes, and songs that can hold romance and self-awareness in the same room.",
    coverImage: cover("The-Best-Thing-Going-Tonight.webp"),
    audioSrc: audio("The-Best-Thing-Going-Tonight.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "sciupafimmini-player",
    title: "Sciupafìmmini (Player)",
    session: "sicilia",
    sessionLabel: "The Sicilia Sessions",
    album: "The Sicilia Sessions",
    genre: "International Pop",
    primaryGenre: "International Pop",
    secondaryStyles: ["Italian Pop", "Mediterranean Pop", "Comedy Pop"],
    languages: ["English", "Italian", "Sicilian dialect"],
    releaseDate: "2026-05-03",
    runtime: "3:21",
    moods: ["International Pop", "Mediterranean Pop", "Comedy Pop"],
    hook: "A stylish Sicilia session about charm, swagger, and a dangerous kind of player.",
    description:
      "A playful English and Italian pop track about a charming Italian womanizer, flavored with Sicilian attitude and Mediterranean swagger.",
    story:
      "Funny, stylish, and a little dangerous, this Sicilia entry uses attitude and idiom as the character frame rather than a performer biography.",
    coverImage: cover("Sciupafìmmini-Player.webp"),
    audioSrc: audio("Sciupafìmmini-Player.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "riding-the-bowl-pissing-my-life-away",
    title: "Riding the Bowl (Pissing My Life Away)",
    session: "milo",
    sessionLabel: "The Milo Sessions",
    album: "The Milo Sessions",
    genre: "Indie Pop",
    primaryGenre: "Indie Pop",
    secondaryStyles: ["Alt Pop", "Office-Life Satire", "Coming-of-Age Reflection"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-02",
    runtime: "3:12",
    moods: ["Indie Pop", "Social Satire", "Nostalgic"],
    hook: "An uptempo Milo session about childhood freedom colliding with corporate routine.",
    description:
      "An uptempo but bittersweet indie pop track about drifting from childhood freedom into corporate routine.",
    story:
      "It begins with memories of skateboards, pellet guns, and teenage imagination, then lands in the adult world of badges, cubicles, automation, and quiet resignation.",
    coverImage: cover("Riding-the-Bowl-Pissing-My-Life-Away.webp"),
    audioSrc: audio("Riding-the-Bowl-Pissing-My-Life-Away.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "eat-the-spam",
    title: "Eat the Spam",
    session: "emi",
    sessionLabel: "The Emi Sessions",
    album: "The Emi Sessions",
    genre: "Dance Pop",
    primaryGenre: "Dance Pop",
    secondaryStyles: ["Electro Pop", "Social Satire", "Party Pop"],
    languages: ["English"],
    releaseDate: "2026-05-01",
    runtime: "2:48",
    moods: ["Dance Pop", "Social Satire", "Pop"],
    hook: "A satirical dance track about scams, AI fakes, spam, and the noise we keep eating.",
    description:
      "A high-energy dance track with a satirical edge, taking aim at spam, scams, AI fakes, social media noise, and the digital nonsense we keep consuming anyway.",
    story:
      "Throbbing, catchy, and intentionally over-the-top, this Emi session keeps the public title as Eat the Spam while retaining the current Kiss-the-Spam media filenames.",
    coverImage: cover("Kiss-the-Spam.webp"),
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
    primaryGenre: "J-Pop",
    secondaryStyles: ["Dance Pop", "Japanese Pop", "Comedy Pop"],
    languages: ["English", "Japanese"],
    releaseDate: "2026-04-30",
    runtime: "3:05",
    moods: ["J-Pop", "Dance Pop", "Comedy Pop"],
    hook: "A cheeky English-Japanese Emi session about a smooth-talking player.",
    description:
      "A playful English-Japanese J-Pop track about an asobi-nin, a smooth-talking player who knows exactly how charming he is.",
    story:
      "Stylish, cheeky, and built around the fun of the character, Asobi-nin keeps the Emi lane colorful and kinetic.",
    coverImage: cover("Asobi-nin-Player.webp"),
    audioSrc: audio("Asobi-nin-Player.mp3"),
    credits: defaultCredits,
  },
];

export const tracks: Track[] = trackCatalog.map((track) => ({
  ...track,
  lyrics: lyricsBySlug[track.slug],
}));

export const sessions = [
  { key: "sicilia", label: "Sicilia", title: "The Sicilia Sessions" },
  { key: "country", label: "Country", title: "The Country Sessions" },
  { key: "gospel", label: "Gospel", title: "The Gospel Sessions" },
  { key: "duet", label: "Milo & Emi", title: "Milo & Emi Sessions" },
  { key: "hollywood", label: "Hollywood", title: "The Hollywood Sessions" },
  { key: "gothic", label: "Gothic", title: "The Gothic Sessions" },
  { key: "emi", label: "Emi", title: "The Emi Sessions" },
  { key: "osaka", label: "Osaka", title: "The Osaka Sessions" },
  { key: "milo", label: "Milo", title: "The Milo Sessions" },
] as const;

export const moods = [
  "Pop",
  "Indie Pop",
  "Dance Pop",
  "Country Pop",
  "Contemporary Christian",
  "Worship",
  "J-Pop",
  "International Pop",
  "Mediterranean Pop",
  "Comedy Pop",
  "Story Song",
  "Social Satire",
  "Nostalgic",
  "Feel-Good",
  "Funk Pop",
  "Glam Metal",
  "Rock",
  "Hard Rock",
  "Synth-pop",
  "Gothic",
  "New Wave",
  "Darkwave",
  "Alternative Dance",
  "Retro Pop",
  "Ska-Pop",
  "Sophisti-Pop",
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
        (candidate.primaryGenre === track.primaryGenre ? 2 : 0) +
        candidate.moods.filter((mood) => track.moods.includes(mood)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ track: related }) => related);
}
