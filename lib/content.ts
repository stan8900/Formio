export type ImageCredit = {
  src: string; alt: string; caption: string; photographer: string; source: string; licence: string;
};

export type Landmark = {
  slug: "registan" | "gur-e-amir" | "bibi-khanym";
  name: string; eyebrow: string; date: string; introduction: string; story: string;
  image: ImageCredit; lookFor: { title: string; text: string }[]; related: string;
};

// GitHub Pages hosts this project at /Formio; local development remains at the root.
const assetPath = process.env.GITHUB_ACTIONS === "true" ? "/Formio" : "";
const imagePath = (name: string) => `${assetPath}/images/${name}`;

// Single image map: replace src / credit metadata here when an editor supplies licensed assets.
export const images = {
  hero: { src: imagePath("samarkand-hero.jpeg"), alt: "Registan Square at sunset, its central portal reflected in water", caption: "Registan at sunset.", photographer: "Unknown", source: "Local project asset: Samarkand.jpeg", licence: "Stan Jurabekov" },
  courtyard: { src: imagePath("registan-courtyard.jpeg"), alt: "Tiled facade and courtyard at Registan Square", caption: "The rhythm of the Registan courtyard.", photographer: "Unknown", source: "Local project asset: Registan Square in Samarkand Uzbekistan Travel Guide.jpeg", licence: "Stan Jurabekov" },
  minaret: { src: imagePath("registan-minaret.jpeg"), alt: "A turquoise tiled minaret detail in Samarkand", caption: "Minaret detail, Samarkand.", photographer: "Unknown", source: "Local project asset: Samarkand, Uzbekistan.jpeg", licence: "Stan Jurabekov" },
  gur: { src: imagePath("gur-e-amir-provisional.jpeg"), alt: "Golden ornamental interior, provisionally associated with Gur-e-Amir", caption: "Provisional visual match; attribution to Gur-e-Amir requires confirmation.", photographer: "Unknown", source: "Local project asset: Golden Muqarnas of Samarkand.jpeg", licence: "Stan Jurabekov" },
  bibi: { src: imagePath("bibi-khanym-provisional.jpeg"), alt: "Samarkand architectural view, provisionally associated with Bibi-Khanym", caption: "Provisional visual match; attribution to Bibi-Khanym requires confirmation.", photographer: "Unknown", source: "Local project asset: _ (1).jpeg", licence: "Stan Jurabekov" },
  mood: { src: imagePath("dreamslight-mood.jpeg"), alt: "Atmospheric Samarkand architecture at dusk", caption: "Mood reference only — not assigned to a landmark.", photographer: "Unknown", source: "Local project asset: The Timeless Beauty of Samarkand _ Dreamslight Editorial.jpeg", licence: "Stan Jurabekov" },
  intro: { src: imagePath("formio-intro.png"), alt: "Samarkand architectural detail", caption: "Samarkand, in detail.", photographer: "Unknown", source: "Local project asset: formio.png", licence: "Stan Jurabekov" },
  turquoise: { src: imagePath("gur-e-amir-dome.jpeg"), alt: "Turquoise tiled Islamic dome detail", caption: "Turquoise dome detail.", photographer: "Unknown", source: "Local project asset: Turquoise Blue Dome Islamic Wallpaper _ Intricate Mosque Mosaic Architecture.jpeg", licence: "Stan Jurabekov" },
  bibiDetail: { src: imagePath("bibi-khanym-detail.jpeg"), alt: "Architectural detail provisionally associated with Bibi-Khanym", caption: "Architectural detail, Samarkand.", photographer: "Unknown", source: "Local project asset: pic.jpeg", licence: "Stan Jurabekov" },
  khiva: { src: imagePath("khiva-reserved.jpeg"), alt: "Khiva architectural image", caption: "Reserved for Khiva; not used in this Samarkand edit.", photographer: "Unknown", source: "Local project asset: _.jpeg", licence: "Stan Jurabekov" }
} as const;

export const landmarks: Landmark[] = [
  { slug: "registan", name: "Registan Square", eyebrow: "The civic room", date: "15th–17th centuries", introduction: "Three madrasas make a public room at an almost unbelievable scale. Registan is best read slowly: portal, courtyard, tile, shadow — then the city beyond.", story: "Registan means “sandy place”. Over time, this open ground became the ceremonial and intellectual centre of Timurid Samarkand. The three madrasas do not match; that is part of their force. Each carries its own blue, ochre and cream geometry while holding a single, generous square.", image: images.hero, lookFor: [{ title: "Tiled arches", text: "Look at the deep pointed arches around the courtyards. Their surfaces turn structure into a field of blue, white and warm brick." }, { title: "The three façades", text: "Ulugh Beg, Sher-Dor and Tilla-Kori face the square like a measured conversation, built across more than two centuries." }, { title: "Distance and detail", text: "Stand back for the skyline, then move close: the smallest mosaic pieces sharpen the larger geometry." }], related: "gur-e-amir" },
  { slug: "gur-e-amir", name: "Gur-e-Amir Mausoleum", eyebrow: "A blue dome over memory", date: "Early 15th century", introduction: "A mausoleum of remarkable concentration: an octagonal chamber, a fluted turquoise dome, and an interior that gathers light into gold.", story: "Gur-e-Amir — “Tomb of the King” — became closely associated with Timur and his dynasty. Its compact mass and ribbed dome established a visual language that travelled far beyond Samarkand. Inside, decoration does not flatten the room; it makes its height and stillness legible.", image: images.gur, lookFor: [{ title: "The ribbed dome", text: "From outside, the tall turquoise dome is shaped by vertical ribs. It reads differently as daylight changes." }, { title: "Gilded vaulting", text: "Look upward for gilded, deeply worked vaulting. The layered ornament helps the ceiling feel both intricate and spacious." }, { title: "Measured colour", text: "Blue tile, warm plaster and gold accents keep the eye moving between surface and volume." }], related: "bibi-khanym" },
  { slug: "bibi-khanym", name: "Bibi-Khanym Mosque", eyebrow: "Ambition in brick and tile", date: "Late 14th–early 15th centuries", introduction: "Bibi-Khanym is a study in scale: a monumental portal, a vast courtyard and a dome that still anchors the surrounding neighbourhoods.", story: "Built during Timur’s era, the mosque was conceived as an enormous congregational complex. Its history includes repair and reconstruction, but the elemental experience remains: huge masonry volumes broken by blue ceramic pattern, and a sequence of thresholds that make the visitor feel the changing measure of the place.", image: images.bibi, lookFor: [{ title: "The great portal", text: "The entry arch is designed to be felt from a distance. Its frame makes the sky part of the composition." }, { title: "Dome and drum", text: "Notice how the dome rises from its base: a transition from heavy masonry to a luminous blue silhouette." }, { title: "Courtyard scale", text: "Pause at the centre. The open ground helps you read the different structures as one ensemble." }], related: "registan" }
];

export const getLandmark = (slug: string) => landmarks.find((landmark) => landmark.slug === slug);
