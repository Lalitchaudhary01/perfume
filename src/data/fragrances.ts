export interface Fragrance {
  id: string;
  slug: string;
  name: string;
  number: string;
  size: string;
  concentration: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  campaignImage?: string;
  kraftImage?: string;
  heroImage?: string;
  washColor: string;
  inkColor: string;
  liquidColorThree: number;
  olfactoryFamily: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  mood: string;
  season: string;
  sillage: string;
  inStock: boolean;
  featured?: boolean;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "mandarin-melons",
    slug: "mandarin-melons",
    name: "Mandarin Melons",
    number: "N°01",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "Sun-warmed mornings, poured slowly.",
    description: "Sunlight streaming through tall curtains. Crisp Sicilian mandarin peeled slowly at dawn, meeting the dewy sweetness of ripe cantaloupe and morning air.",
    price: 165,
    currency: "$",
    image: "/assets/mandarin-studio.jpg",
    campaignImage: "/assets/mandarin-campaign.jpg",
    heroImage: "/assets/hero-cinematic.jpg",
    washColor: "#f2dfc6",
    inkColor: "#b05f24",
    liquidColorThree: 0xf5ba72,
    olfactoryFamily: "Solar Citrus & Dewy Melon",
    topNotes: ["Sicilian Mandarin", "Sunlit Bergamot", "Morning Dew"],
    heartNotes: ["Charentais Melon", "Neroli Petals", "White Peach"],
    baseNotes: ["Golden Amber", "Solar Musks", "Cedar Driftwood"],
    mood: "Sunlit Mornings & Effortless Radiance",
    season: "Spring / Summer",
    sillage: "Intimate to Moderate · 8–10 Hours",
    inStock: true,
    featured: true,
  },
  {
    id: "oody-raspberry",
    slug: "oody-raspberry",
    name: "Oody Raspberry",
    number: "N°02",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "A soft blush of berry in the afternoon light.",
    description: "The subtle contradiction of tart wild raspberry crushed against aged smoke and velvet Cambodian oud. Warm, magnetic, and quietly daring.",
    price: 175,
    currency: "$",
    image: "/assets/oody-raspberry.jpg",
    campaignImage: "/assets/oody-raspberry.jpg",
    washColor: "#eed9d3",
    inkColor: "#9d4a4f",
    liquidColorThree: 0xc8646b,
    olfactoryFamily: "Velvet Woods & Wild Berries",
    topNotes: ["Crushed Wild Raspberry", "Pink Peppercorn", "Blackcurrant Leaf"],
    heartNotes: ["Damask Rose Absolute", "Smoked Saffron", "Orris Concrete"],
    baseNotes: ["Cambodian Oud Wood", "Bourbon Leather", "Patchouli Coeur"],
    mood: "Twilight Enigma & Velvet Elegance",
    season: "Autumn / Winter",
    sillage: "Expansive · 10–12 Hours",
    inStock: true,
    featured: true,
  },
  {
    id: "fruits-of-love",
    slug: "fruits-of-love",
    name: "Fruits of Love",
    number: "N°03",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "Gathered fruit, kept for the one you keep.",
    description: "A tender harvest of orchard fruits preserved with raw honeycomb and fresh vanilla bean. An embrace held just a little longer than expected.",
    price: 160,
    currency: "$",
    image: "/assets/fruits-of-love.jpg",
    campaignImage: "/assets/fruits-of-love.jpg",
    washColor: "#f0dcc9",
    inkColor: "#a3543a",
    liquidColorThree: 0xe89762,
    olfactoryFamily: "Warm Nectar & Golden Amber",
    topNotes: ["Golden Apricot", "Sun-Drenched Fig", "Blood Orange"],
    heartNotes: ["Orange Blossom", "Wild Honeycomb", "Magnolia Silk"],
    baseNotes: ["Madagascar Vanilla Pod", "Sandalwood", "Creamy Tonka"],
    mood: "Intimate Warmth & Fond Remembrance",
    season: "All Season",
    sillage: "Moderate · 8–10 Hours",
    inStock: true,
    featured: false,
  },
  {
    id: "cherry-you-lost",
    slug: "cherry-you-lost",
    name: "Cherry You Lost",
    number: "N°04",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "A memory that lingers after the season turns.",
    description: "Deep black cherry liqueur warmed with roasted bitter almond and smoked tonka bean. A nostalgic ode to beauty that was felt once and remembered forever.",
    price: 170,
    currency: "$",
    image: "/assets/cherry-you-lost.jpg",
    campaignImage: "/assets/cherry-you-lost.jpg",
    washColor: "#e9dbd2",
    inkColor: "#7c2f33",
    liquidColorThree: 0x822634,
    olfactoryFamily: "Gourmand Liqueur & Dark Floral",
    topNotes: ["Dark Morello Cherry", "Bitter Almond", "Plum Liqueur"],
    heartNotes: ["Turkish Rose Absolute", "Jasmine Sambac", "Roasted Tonka"],
    baseNotes: ["Smoked Sandalwood", "Vetiver Root", "Ambergris Accord"],
    mood: "Nostalgic Romance & Poetic Longing",
    season: "Autumn / Evening",
    sillage: "Pronounced · 10–12 Hours",
    inStock: true,
    featured: true,
  },
  {
    id: "yours-pine",
    slug: "yours-pine",
    name: "Yours Pine",
    number: "N°05",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "Quiet evergreen, folded into cream.",
    description: "The crisp stillness of a high-altitude alpine grove wrapped in whipped iris cream and warm Frankincense smoke. Grounding, clean, and architecturally poised.",
    price: 165,
    currency: "$",
    image: "/assets/yours-pine-studio.jpg",
    campaignImage: "/assets/yours-pine-studio.jpg",
    kraftImage: "/assets/yours-pine-kraft.jpg",
    washColor: "#e6e1cd",
    inkColor: "#5d6f47",
    liquidColorThree: 0x93a26a,
    olfactoryFamily: "Alpine Evergreen & Creamy Resins",
    topNotes: ["Siberian Pine Needles", "Crisp Juniper Berry", "Cardamom"],
    heartNotes: ["White Birch Bark", "Silver Fir Balsam", "Iris Cream"],
    baseNotes: ["Hojari Frankincense", "Atlas Cedar", "Warm Cashmeran"],
    mood: "Quiet Contemplation & Forest Solitude",
    season: "Winter / All Season",
    sillage: "Moderate · 9–11 Hours",
    inStock: true,
    featured: true,
  },
  {
    id: "autumn-hugs",
    slug: "autumn-hugs",
    name: "Autumn Hugs",
    number: "N°06",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "Amber light on wool, held a little longer.",
    description: "Heavy wool coats in late October. Spiced cardamom pods, roasted chestnut, and golden liquid amber poured over aged cashmere.",
    price: 165,
    currency: "$",
    image: "/assets/autumn-hugs.jpg",
    campaignImage: "/assets/autumn-hugs.jpg",
    washColor: "#ecd7ba",
    inkColor: "#9a5f28",
    liquidColorThree: 0xcf8f48,
    olfactoryFamily: "Tactile Amber & Spiced Cashmere",
    topNotes: ["Cracked Green Cardamom", "Cinnamon Bark", "Bergamot Rind"],
    heartNotes: ["Roasted Chestnut", "Golden Amber Resins", "Caramelized Wool Accord"],
    baseNotes: ["White Musks", "Sandalwood", "Madagascar Vanilla"],
    mood: "Cozy Fireside & Tactile Comfort",
    season: "Autumn / Winter",
    sillage: "Comforting & Persistent · 8–10 Hours",
    inStock: true,
    featured: true,
  },
  {
    id: "dancing-cherry",
    slug: "dancing-cherry",
    name: "Dancing Cherry",
    number: "N°07",
    size: "55 ml",
    concentration: "Eau de Parfum",
    tagline: "Petals in motion, a slow spin in the sun.",
    description: "Delicate Yoshino cherry blossoms caught in a warm spring breeze. Crisp Nashi pear slices with sparkling pink pepper and sheer white musks.",
    price: 170,
    currency: "$",
    image: "/assets/dancing-cherry.jpg",
    campaignImage: "/assets/dancing-cherry.jpg",
    washColor: "#edded6",
    inkColor: "#8a3a42",
    liquidColorThree: 0xd97e88,
    olfactoryFamily: "Sunlit Cherry Blossom & Silk Peony",
    topNotes: ["Pink Pepper", "Nashi Pear", "Bergamot Sparkle"],
    heartNotes: ["Yoshino Cherry Blossom", "Peony Petals", "Dewy Violet"],
    baseNotes: ["Sheer White Musk", "Blonde Woods", "Subtle Amber"],
    mood: "Carefree Joy & Sunlit Grace",
    season: "Spring / Summer",
    sillage: "Luminous & Airy · 7–9 Hours",
    inStock: true,
    featured: false,
  },
];

export const BRAND_STORY = {
  headline: "SCENT IS AN ART. MEMORY IS ITS MASTERPIECE.",
  subheadline: "Slow Perfumery Art · Founded on Patience, Reverence, and Intention",
  statement:
    "Maison Kiyora composes fragrance the way a letter is written — without hurry, with intention. We believe a scent should not announce itself; it should stay, quietly, in the rooms and seasons of a life.",
  pillars: [
    {
      number: "01",
      title: "The Slow Extraction",
      desc: "Each concentrate is rested in oak casks and glass carboys for 90 days of silent maceration before filtration, allowing the notes to fuse naturally without haste.",
    },
    {
      number: "02",
      title: "Architectural Glass",
      desc: "Custom heavy-base rectangular glass forged in high-clarity crystal, designed to refract natural sunlight into soft amber beams across your morning vanity.",
    },
    {
      number: "03",
      title: "The Black Crown",
      desc: "Our signature sculpted cap is cast in obsidian black with undulating organic facets, providing a tactile ritual with every deliberate application.",
    },
    {
      number: "04",
      title: "Tactile Kraft Travel Case",
      desc: "Every 55 ml bottle arrives cushioned inside a debossed unbleached kraft cylinder, made to protect the fragrance from light and accompany you across years.",
    },
  ],
};

export function getFragranceBySlug(slug: string): Fragrance | undefined {
  return FRAGRANCES.find((f) => f.slug === slug);
}
