import Link from "next/link";
import { FadeImage } from "@/components/FadeImage";
import { getEditableLandmarks } from "@/lib/sanity";
export const metadata = { title: "Landmarks", description: "An editorial index of Samarkand’s most resonant monuments." };
export default async function LandmarksPage() { const landmarks = await getEditableLandmarks(); return <><section className="page-intro"><p className="eyebrow">The index</p><h1>Three structures,<br/>a larger city.</h1><p>Move between landmark and detail. Each story is a way into Samarkand’s material imagination.</p></section><section className="landmark-index">{landmarks.map((landmark, index) => <article className={`index-row row-${index}`} key={landmark.slug}><FadeImage image={landmark.image}/><div><p className="eyebrow">{landmark.date}</p><h2>{landmark.name}</h2><p>{landmark.introduction}</p><Link className="text-link" href={`/landmarks/${landmark.slug}`}>Open story</Link></div></article>)}</section></>; }
