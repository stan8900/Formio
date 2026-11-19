import { landmarks, type Landmark } from "./content";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const landmarkQuery = `*[_type == "landmark"] | order(orderRank asc) {"slug": slug.current, name, eyebrow, date, introduction, story, "image": {"src": cover.asset->url, alt: cover.alt, caption: cover.caption, photographer: cover.photographer, source: cover.source, licence: cover.licence}, lookFor[]{title, text}, related}`;

/** Content stays usable without a CMS. Add the two public Sanity env vars to make landmark records editorial. */
export async function getEditableLandmarks(): Promise<Landmark[]> {
  if (!projectId || !dataset) return landmarks;
  try {
    const endpoint = `https://${projectId}.api.sanity.io/v2025-01-01/data/query/${dataset}?query=${encodeURIComponent(landmarkQuery)}`;
    const response = await fetch(endpoint, { next: { revalidate: 60 } });
    const { result } = await response.json() as { result: Landmark[] };
    return result?.length ? result : landmarks;
  } catch { return landmarks; }
}

export async function getEditableLandmark(slug: string) { return (await getEditableLandmarks()).find((item) => item.slug === slug); }
