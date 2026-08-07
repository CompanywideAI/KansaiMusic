import { lyricsBySlug } from "@/src/data/lyrics";

export type Session =
  | "sicilia"
  | "italian"
  | "country"
  | "gospel"
  | "hollywood"
  | "london"
  | "surrey"
  | "leeds"
  | "new-orleans"
  | "tokyo"
  | "k-drama"
  | "big-top"
  | "world-cup"
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
  seoTitle?: string;
  seoDescription?: string;
  metaKeywords?: string[];
  lyrics?: string;
  coverImage: string;
  coverAlt?: string;
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
    slug: "summer-of-2026",
    title: "Summer of 2026",
    session: "country",
    sessionLabel: "The Country Sessions",
    album: "The Country Sessions",
    genre: "Pop",
    primaryGenre: "Pop",
    secondaryStyles: ["Country"],
    languages: ["English"],
    featured: true,
    songOfDay: true,
    releaseDate: "2026-07-10",
    moods: ["Pop", "Country", "Country Pop", "Feel-Good", "Nostalgic"],
    hook:
      "A timely summer escape song for calling in sick, turning off the scroll, and staying out late.",
    description:
      "A bright pop-country track about dodging the workday, chasing perfect weather, and letting the whole world wait in the summer of 2026.",
    story:
      "Summer of 2026 captures that first real day when sunshine beats responsibility: AirPods loud, notifications asleep, cheap sunglasses on, and tomorrow politely ignored. Built for a timely Country Sessions release, it turns work fatigue into a warm, easy anthem about friends, boardwalks, backseats, and the brief little miracle of a summer night that refuses to be wasted.",
    seoTitle: "Summer of 2026 - Pop Country Summer Song by Kansai Music",
    seoDescription:
      "Summer of 2026 by Kansai Music is a bright pop-country song about calling in sick, turning off the scroll, and making the most of a perfect summer day.",
    metaKeywords: [
      "Summer of 2026",
      "Kansai Music",
      "summer song 2026",
      "pop country song",
      "Country Sessions",
      "calling in sick song",
      "summer anthem",
      "feel good country pop",
    ],
    coverImage: cover("Summer-of-2026-r2.webp"),
    coverAlt:
      "Album cover for Summer of 2026 by Kansai Music, a bright pop-country summer song from The Country Sessions.",
    audioSrc: audio("Summer-of-2026-r2.mp3"),
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
    session: "milo",
    sessionLabel: "The Milo Sessions",
    album: "The Milo Sessions",
    genre: "Pop",
    primaryGenre: "Pop",
    secondaryStyles: ["Feel-Good Pop", "Indie Pop", "Sunshine Pop"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-11",
    runtime: "3:18",
    moods: ["Pop", "Indie Pop", "Feel-Good"],
    hook: "A bright Milo session for morning walks, lighter hearts, and everyday grace.",
    description:
      "An upbeat, optimistic pop song about stepping into the day with a lighter heart.",
    story:
      "Built around small moments, morning walks, everyday grace, and the feeling that things might just turn out alright, this Milo session keeps the emotional target simple and direct.",
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
    session: "london",
    sessionLabel: "The London Sessions",
    album: "The London Sessions",
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
    youtubeVideoId: "z5OleNEgw7g",
    credits: defaultCredits,
  },
  {
    slug: "my-brain-goes-boom",
    title: "My Brain Goes Boom",
    session: "london",
    sessionLabel: "The London Sessions",
    album: "The London Sessions",
    genre: "British Retro-Soul",
    primaryGenre: "British Retro-Soul",
    secondaryStyles: ["Jazz-Pop", "Vintage R&B", "Soul-Pop"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-28",
    moods: ["British Retro-Soul", "Jazz-Pop", "Vintage R&B", "Soul-Pop", "Humorous"],
    hook:
      "A cheeky London Sessions anxiety anthem where overthinking gets a smoky, soulful groove.",
    description:
      "A cheeky British retro-soul anxiety anthem for anyone whose brain keeps replaying old conversations long after the party ended.",
    story:
      "With smoky vocals, walking bass, brass stabs, vintage soul harmonies, and a catchy boom, boom hook, My Brain Goes Boom turns overthinking into something funny, soulful, and strangely danceable.",
    coverImage: cover("My-Brain-Goes-Boom.webp"),
    audioSrc: audio("My-Brain-Goes-Boom.mp3"),
    youtubeVideoId: "FFTulJtDVUY",
    credits: defaultCredits,
  },
  {
    slug: "optimisms-not-a-crime",
    title: "Optimism’s Not a Crime",
    session: "surrey",
    sessionLabel: "The Surrey Sessions",
    album: "The Surrey Sessions",
    genre: "Alternative",
    primaryGenre: "Alternative",
    secondaryStyles: ["Pop"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-08-07",
    moods: ["Alternative", "Pop", "Hopeful", "Reflective"],
    hook:
      "A defiant Surrey Sessions anthem that refuses to buy the latest end-of-the-world sales pitch.",
    description:
      "An alternative-pop track about choosing stubborn optimism in hard times, turning down doom prophets, and remembering that the world has always kept turning.",
    story:
      "Optimism’s Not a Crime pushes back against the endless market for fear: blue lights, breaking-news dread, old wars, romanticized hard times, and prophets selling sorrow by the pound. It does not deny the trouble in the world; it simply refuses to hand despair the microphone. The result is a Surrey Sessions release built around grit, perspective, and the plain rebellious pleasure of still being alive.",
    coverImage: cover("Optimisms-Not-a-Crime.webp"),
    coverAlt:
      "Album cover for Optimism’s Not a Crime by Kansai Music, an alternative-pop track from The Surrey Sessions.",
    audioSrc: audio("Optimisms-Not-a-Crime.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "bored",
    title: "Bored",
    session: "london",
    sessionLabel: "The London Sessions",
    album: "The London Sessions",
    genre: "British Retro-Soul",
    primaryGenre: "British Retro-Soul",
    secondaryStyles: ["Soul-Pop", "Comedy Pop"],
    languages: ["English"],
    releaseDate: "2026-08-05",
    moods: ["British Retro-Soul", "Soul-Pop", "Comedy Pop", "Humorous"],
    hook:
      "A dry British Retro-Soul sigh about content fatigue, perfect skies, and being bored of the song itself.",
    description:
      "A witty British Retro-Soul track about modern sameness, endless feeds, recycled memes, and the creeping boredom of being bored with yourself.",
    story:
      "Bored turns digital fatigue and everyday repetition into a self-aware London Sessions groove. It skewers brand-ambassador joy, secondhand memes, polished lifestyle fantasies, and the feeling that even the chorus knows it has overstayed its welcome.",
    coverImage: cover("Bored.webp"),
    coverAlt:
      "Album cover for Bored by Kansai Music, a British Retro-Soul track from The London Sessions.",
    audioSrc: audio("Bored.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "back-up-your-files",
    title: "Back Up Your Files",
    session: "new-orleans",
    sessionLabel: "The New Orleans Sessions",
    album: "The New Orleans Sessions",
    genre: "Blues",
    primaryGenre: "Blues",
    secondaryStyles: [
      "Spoken Word",
      "Soul Blues",
      "New Orleans Blues",
      "Junkyard Gospel",
      "Alternative Soul",
      "Cinematic Blues",
    ],
    languages: ["English"],
    releaseDate: "2026-06-03",
    moods: [
      "Blues",
      "Spoken Word",
      "Soul Blues",
      "New Orleans Blues",
      "Junkyard Gospel",
      "Alternative Soul",
      "Cinematic Blues",
      "Reflective",
    ],
    hook:
      "A gritty New Orleans Sessions sermon about backing up your files, and maybe your soul too.",
    description:
      "A spoken-word blues track built around one piece of practical advice for the modern age: back up your files, and maybe your soul while you are at it.",
    story:
      "With a gritty New Orleans-inspired delivery, crooked barroom piano, upright bass, brushed drums, handclaps, horn stabs, and ragged gospel backing vocals, the song turns digital-age anxiety into a street-corner sermon. It speaks to the pressure of timelines, algorithms, medical bills, career regret, aging bodies, AI, fractured attention, and the quiet human things still holding the world together.",
    coverImage: cover("Back-Up-Your-Files.webp"),
    audioSrc: audio("Back-Up-Your-Files.mp3"),
    youtubeVideoId: "8rRfN4rx0iM",
    credits: defaultCredits,
  },
  {
    slug: "tell-the-truth",
    title: "Tell the Truth",
    session: "new-orleans",
    sessionLabel: "The New Orleans Sessions",
    album: "The New Orleans Sessions",
    genre: "Protest Funk",
    primaryGenre: "Protest Funk",
    secondaryStyles: [
      "Gospel Soul",
      "Soul-Pop",
      "Rhythm & Blues",
      "Alternative Soul",
      "Social Commentary",
      "Contemporary Funk",
    ],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-06-04",
    moods: [
      "Protest Funk",
      "Gospel Soul",
      "Soul-Pop",
      "Rhythm & Blues",
      "Alternative Soul",
      "Social Commentary",
      "Contemporary Funk",
    ],
    hook:
      "A high-octane New Orleans Sessions protest funk track with gospel conviction and street-corner bite.",
    description:
      "A high-octane protest funk-soul track that calls out modern hypocrisy with gospel conviction and street-corner bite.",
    story:
      "Built on hard drums, slap bass, sharp horn stabs, dirty funk guitar, duet vocals, and punchy choir responses, Tell the Truth takes aim at flex culture, luxury worship, sexualized entertainment, violence-as-branding, streaming exploitation, and moral double-talk. With a call-and-response spirit rooted in classic soul protest music, the song challenges a culture that preaches justice while selling poison, asking a blunt question: if the song does not lift the people, why call it revolution?",
    coverImage: cover("Tell-The-Truth.webp"),
    audioSrc: audio("Tell-The-Truth.mp3"),
    youtubeVideoId: "3TggYsH_IwM",
    credits: defaultCredits,
  },
  {
    slug: "a-la-mode",
    title: "À La Mode",
    session: "new-orleans",
    sessionLabel: "The New Orleans Sessions",
    album: "The New Orleans Sessions",
    genre: "Jazz",
    primaryGenre: "Jazz",
    secondaryStyles: ["R&B/Soul", "Jazz-Funk / Cabaret Pop"],
    languages: ["English", "French"],
    featured: true,
    releaseDate: "2026-08-05",
    moods: ["Jazz", "R&B/Soul", "Jazz-Funk / Cabaret Pop", "Funky", "Cinematic"],
    hook:
      "A chic New Orleans Sessions cabaret-pop groove where taste, appetite, and status get served with a wink.",
    description:
      "A stylish jazz, soul, and cabaret-pop track about fashioning appetite, rebellion, and good taste into a performance that sells itself back to the room.",
    story:
      "À La Mode moves through the kitchen and the dining room with pearls at the pass, champagne manners, diner appetite, and a sharp eye for how trends are plated, priced, and renamed. It is playful, elegant, and quietly cutting: a New Orleans Sessions piece where everything changes except the game.",
    coverImage: cover("A-La-Mode.webp"),
    coverAlt:
      "Album cover for À La Mode by Kansai Music, a stylish jazz and cabaret-pop track from The New Orleans Sessions.",
    audioSrc: audio("A-La-Mode.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "clown-tax",
    title: "Clown Tax",
    session: "big-top",
    sessionLabel: "The Big Top Sessions",
    album: "The Big Top Sessions",
    genre: "Protest Rock",
    primaryGenre: "Protest Rock",
    secondaryStyles: ["Circus Rock", "Garage Rock", "Alternative Pop", "Political Satire"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-06-07",
    moods: [
      "Protest Rock",
      "Circus Rock",
      "Garage Rock",
      "Alternative Pop",
      "Political Satire",
      "Humorous",
    ],
    hook:
      "A darkly funny Big Top Sessions protest-rock track about paying for the show after the joke stops being funny.",
    description:
      "A darkly funny protest-rock track built around the idea that the public keeps paying for the show long after the joke stops being funny.",
    story:
      "With a driving bassline, smoky female vocal, fuzz guitar, handclaps, tambourine, brass stabs, and a sinister big-top atmosphere, Clown Tax turns modern politics into a traveling circus of ringmasters, parties, pundits, money games, war talk, medical bills, rocket-ship vanity projects, and spectacle-for-profit. Sharp, catchy, and cynical without picking a single side, the song asks what happens when everybody has a party, but ordinary people are still left with the bill.",
    coverImage: cover("Clown-Tax.webp"),
    audioSrc: audio("Clown-Tax.mp3"),
    youtubeVideoId: "Bz5XE84kqUA",
    credits: defaultCredits,
  },
  {
    slug: "bosnia-welcome-to-america",
    title: "Bosnia, Welcome to America",
    session: "world-cup",
    sessionLabel: "The World Cup Sessions",
    album: "The World Cup Sessions",
    genre: "Balkan Ska",
    primaryGenre: "Balkan Ska",
    secondaryStyles: [
      "Pop-Punk",
      "Football Anthem",
      "Comedy Rock",
      "World Music",
      "Stadium Rock",
      "Sports Song",
      "Parody / Response Song",
    ],
    languages: ["English"],
    releaseDate: "2026-06-26",
    moods: [
      "Balkan Ska",
      "Pop-Punk",
      "Football Anthem",
      "Comedy Rock",
      "World Music",
      "Stadium Rock",
      "Sports Song",
      "Parody / Response Song",
      "Feel-Good",
    ],
    hook:
      "A rowdy World Cup Sessions response song that turns a knockout match into a friendly American welcome.",
    description:
      "A rowdy, good-natured World Cup response song built for the USA vs. Bosnia and Herzegovina knockout match in Santa Clara.",
    story:
      "Inspired by Balkan football-party energy and filtered through a California pop-punk lens, Bosnia, Welcome to America flips the invitation into a friendly American welcome: accordion hooks, stomp-beat momentum, SoCal guitars, brass accents, and a stadium-ready chorus about football, friendship, memes, chowder, and two cultures turning a match into a celebration. Win or lose, the song is less about rivalry than hospitality; Bosnia came to America, so America wrote back.",
    coverImage: cover("Bosnia-Welcome-to-America.webp"),
    audioSrc: audio("Bosnia-Welcome-to-America-complete.mp3"),
    youtubeVideoId: "6cOhqv1Uczc",
    credits: defaultCredits,
  },
  {
    slug: "k-love-drama",
    title: "K-Love Drama",
    session: "k-drama",
    sessionLabel: "The K-Drama Sessions",
    album: "The K-Drama Sessions",
    genre: "Electro-Funk",
    primaryGenre: "Electro-Funk",
    secondaryStyles: ["K-Pop Inspired Pop", "Comedy Pop"],
    languages: ["English", "Korean"],
    featured: true,
    releaseDate: "2026-07-02",
    moods: [
      "Electro-Funk",
      "K-Pop Inspired Pop",
      "Comedy Pop",
      "Cheeky",
      "Funky",
      "Cinematic",
      "Playful",
      "Sarcastic",
      "Romantic Satire",
    ],
    hook:
      "A funky, tongue-in-cheek K-drama satire where one heroine rewrites the script for the second lead.",
    description:
      "A funky, tongue-in-cheek K-drama satire about wrist grabs, rainy scenes, childhood fate, soju dreams, and one heroine who finally rewrites the script for the second lead.",
    story:
      "K-Love Drama is a cheeky electro-funk pop track that turns classic Korean drama tropes into a sharp, danceable satire. Wrist grabs in the rain, childhood fate, rich-boy trauma, impossible parents, soju dreams, episode sixteen confessions, and second lead syndrome all collide in one over-the-top love triangle. But this heroine is not waiting around for destiny to behave. She knows the script, sees the product placement, and changes the ending herself. With a rubbery bass groove, sharp keyboard hits, Korean phrases, and a wink at every familiar K-drama cliche, K-Love Drama is part parody, part love letter, and part anthem for anyone who ever thought the second lead deserved better.",
    seoTitle: "K-Love Drama - Korean Drama Satire Song by Kansai Music",
    seoDescription:
      "K-Love Drama by Kansai Music is a funky, tongue-in-cheek pop song parodying classic Korean drama tropes, from wrist grabs in the rain to second lead syndrome.",
    metaKeywords: [
      "K-Love Drama",
      "Kansai Music",
      "K-drama song",
      "Korean drama parody",
      "K-drama satire",
      "second lead syndrome",
      "comedy pop",
      "electro funk",
      "K-pop inspired",
      "soju dream",
      "Korean drama tropes",
      "not another love song",
    ],
    coverImage: cover("K-Love-Drama.webp"),
    coverAlt:
      "Album cover for K-Love Drama by Kansai Music, styled like a dramatic Korean romance poster with a love triangle, rainy city lights, and playful K-drama satire.",
    audioSrc: audio("K-Love-Drama.mp3"),
    youtubeVideoId: "OVmy29u6vGg",
    credits: defaultCredits,
  },
  {
    slug: "nani",
    title: "Nani?",
    session: "tokyo",
    sessionLabel: "The Tokyo Sessions",
    album: "The Tokyo Sessions",
    genre: "Electro-Funk",
    primaryGenre: "Electro-Funk",
    secondaryStyles: [
      "Synth-Pop",
      "Alternative Dance",
      "Anime Pop",
      "Minimal Wave",
      "Comedy Funk",
      "Experimental Pop",
    ],
    languages: ["Japanese", "English"],
    releaseDate: "2026-06-04",
    moods: [
      "Electro-Funk",
      "Synth-Pop",
      "Alternative Dance",
      "Anime Pop",
      "Minimal Wave",
      "Comedy Funk",
      "Experimental Pop",
      "Humorous",
    ],
    hook:
      "A minimalist Tokyo Sessions electro-funk track where one perfectly timed question becomes the whole mood.",
    description:
      "A minimalist electro-funk track built around one of anime's most recognizable expressions: Nani?!",
    story:
      "Inspired by the strange, deadpan energy of 1980s synth grooves, Nani? turns a handful of vocal phrases into rhythm, attitude, and absurd cool. With rubbery bass, dry drum-machine hits, synth stabs, breathy callouts, playful anime-style reactions, and wide open space, the song leans into the idea that sometimes the hook is not a story; it is a sound, a mood, and a perfectly timed raised eyebrow.",
    coverImage: cover("Nani.webp"),
    audioSrc: audio("Nani.mp3"),
    credits: defaultCredits,
  },
  {
    slug: "love-doesnt-have-to-be-so-hard",
    title: "Love Doesn't Have to Be So Hard",
    session: "leeds",
    sessionLabel: "The Leeds Sessions",
    album: "The Leeds Sessions",
    genre: "Modern Acoustic Pop",
    primaryGenre: "Modern Acoustic Pop",
    secondaryStyles: ["Soul-Pop", "Adult Contemporary", "Singer-Songwriter"],
    languages: ["English"],
    featured: true,
    releaseDate: "2026-05-26",
    moods: [
      "Modern Acoustic Pop",
      "Soul-Pop",
      "Adult Contemporary",
      "Singer-Songwriter",
      "Romantic",
      "Reflective",
    ],
    hook:
      "A warm Leeds Sessions love song about steady devotion after decades of ordinary days.",
    description:
      "A heartfelt love song about the kind of marriage that lasts beyond first sparks, hard seasons, raising kids, quiet houses, and ordinary days.",
    story:
      "Written from the perspective of thirty years together, Love Doesn't Have to Be So Hard celebrates steady devotion, shared history, and the choice to keep coming home to one another. Blending intimate acoustic-pop storytelling with warm soul-pop emotion, the song is a reminder that love does not always need drama to prove its depth.",
    coverImage: cover("Love-Doesnt-Have-To-Be-So-Hard.webp"),
    audioSrc: audio("Love-Doesnt-Have-To-Be-So-Hard.mp3"),
    youtubeVideoId: "AQ0Z7xJRejU",
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
    slug: "piano-piano-americano",
    title: "Piano, Piano, Americano",
    session: "italian",
    sessionLabel: "The Italian Sessions",
    album: "The Italian Sessions",
    genre: "Mediterranean House Pop",
    primaryGenre: "Mediterranean House Pop",
    secondaryStyles: ["Dance Pop", "Italian Summer Pop", "Latin House", "Club Pop"],
    languages: ["English", "Italian"],
    releaseDate: "2026-05-21",
    moods: [
      "Mediterranean House Pop",
      "Dance Pop",
      "Italian Summer Pop",
      "Latin House",
      "Club Pop",
      "Comedy Pop",
    ],
    hook:
      "A sunlit Italian Sessions track where culture shock becomes a dance-floor lesson in slowing down.",
    description:
      "A playful Mediterranean dance-pop track built around the Italian phrase piano, piano, meaning slowly, easy, or take it easy.",
    story:
      "The song follows an American DNA tourist who arrives in Italy expecting instant belonging, only to be lovingly schooled by baristas, waiters, locals, nonnas, and pickpocket warnings. With a chant-ready chorus, Italian expressions, and sunny club-party energy, it turns culture shock into a comic celebration of heritage, humility, and learning to slow down.",
    coverImage: cover("Piano-Piano-Americano.webp"),
    audioSrc: audio("Piano-Piano-Americano.mp3"),
    youtubeVideoId: "DxE9cbXoJ9k",
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
    title: "小さなしあわせ (Little Happiness)",
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
    slug: "suki-ya-nen",
    title: "Suki ya nen (好きやねん)",
    session: "london",
    sessionLabel: "The London Sessions",
    album: "The London Sessions",
    genre: "R&B",
    primaryGenre: "R&B",
    secondaryStyles: ["Soul", "Jazz", "Rhythm and Blues", "Neo-Soul"],
    languages: ["English", "Japanese", "Osaka dialect"],
    releaseDate: "2026-05-19",
    moods: ["R&B", "Soul", "Jazz", "Neo-Soul", "Romantic"],
    hook:
      "A smoky Osaka soul-jazz track about finding the one phrase ordinary romance cannot quite say.",
    description:
      "A smoky, romantic soul-jazz track built around the Osaka phrase suki ya nen, a warmer, more personal way of saying I like you or I am into you.",
    story:
      "Set against the feeling of a late-night train ride, the song blends playful lyricism, vintage R&B atmosphere, and neo-soul smoothness into a cross-cultural love song.",
    coverImage: cover("Suki-Ya-Nen.webp"),
    audioSrc: audio("Suki-Ya-Nen.mp3"),
    youtubeVideoId: "2WzhIk2I9g0",
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
    slug: "the-meat-beat",
    title: "The Meat Beat",
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
    hook: "A satirical dance track about scams, AI fakes, spam, and the noise we keep consuming.",
    description:
      "A high-energy dance track with a satirical edge, taking aim at spam, scams, AI fakes, social media noise, and the digital nonsense we keep consuming anyway.",
    story:
      "Throbbing, catchy, and intentionally over-the-top, The Meat Beat turns digital noise, scams, AI fakes, social media churn, and inbox panic into a satirical Emi Sessions dance track.",
    coverImage: cover("The-Meat-Beat.webp"),
    audioSrc: audio("The-Meat-Beat.mp3"),
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
  { key: "italian", label: "Italian", title: "The Italian Sessions" },
  { key: "country", label: "Country", title: "The Country Sessions" },
  { key: "gospel", label: "Gospel", title: "The Gospel Sessions" },
  { key: "hollywood", label: "Hollywood", title: "The Hollywood Sessions" },
  { key: "london", label: "London", title: "The London Sessions" },
  { key: "surrey", label: "Surrey", title: "The Surrey Sessions" },
  { key: "leeds", label: "Leeds", title: "The Leeds Sessions" },
  { key: "new-orleans", label: "New Orleans", title: "The New Orleans Sessions" },
  { key: "tokyo", label: "Tokyo", title: "The Tokyo Sessions" },
  { key: "k-drama", label: "K-Drama", title: "The K-Drama Sessions" },
  { key: "big-top", label: "Big Top", title: "The Big Top Sessions" },
  { key: "world-cup", label: "World Cup", title: "The World Cup Sessions" },
  { key: "gothic", label: "Gothic", title: "The Gothic Sessions" },
  { key: "emi", label: "Emi", title: "The Emi Sessions" },
  { key: "osaka", label: "Osaka", title: "The Osaka Sessions" },
  { key: "milo", label: "Milo", title: "The Milo Sessions" },
] as const;

export const moods = [
  "Pop",
  "Alternative",
  "Indie Pop",
  "Dance Pop",
  "Country",
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
  "R&B",
  "Soul",
  "Jazz",
  "R&B/Soul",
  "Jazz-Funk / Cabaret Pop",
  "Neo-Soul",
  "Romantic",
  "Reflective",
  "Mediterranean House Pop",
  "Italian Summer Pop",
  "Latin House",
  "Club Pop",
  "Modern Acoustic Pop",
  "Soul-Pop",
  "Adult Contemporary",
  "Singer-Songwriter",
  "British Retro-Soul",
  "Jazz-Pop",
  "Vintage R&B",
  "Humorous",
  "Blues",
  "Spoken Word",
  "Soul Blues",
  "New Orleans Blues",
  "Junkyard Gospel",
  "Alternative Soul",
  "Cinematic Blues",
  "Protest Funk",
  "Gospel Soul",
  "Rhythm & Blues",
  "Social Commentary",
  "Contemporary Funk",
  "Electro-Funk",
  "K-Pop Inspired Pop",
  "Synth-Pop",
  "Anime Pop",
  "Minimal Wave",
  "Comedy Funk",
  "Experimental Pop",
  "Cheeky",
  "Funky",
  "Cinematic",
  "Playful",
  "Sarcastic",
  "Romantic Satire",
  "Protest Rock",
  "Circus Rock",
  "Garage Rock",
  "Alternative Pop",
  "Political Satire",
  "Balkan Ska",
  "Pop-Punk",
  "Football Anthem",
  "Comedy Rock",
  "World Music",
  "Stadium Rock",
  "Sports Song",
  "Parody / Response Song",
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
