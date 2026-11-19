import Image from "next/image";
import type { ImageCredit } from "@/lib/content";

export function FadeImage({ image, priority = false, className = "" }: { image: ImageCredit; priority?: boolean; className?: string }) {
 return <figure className={`image-reveal ${className}`}><Image src={image.src} alt={image.alt} width={736} height={1308} priority={priority} sizes="(max-width: 700px) 100vw, 50vw"/><figcaption>{image.caption}</figcaption></figure>;
}
