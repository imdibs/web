import Image from "next/image";
import { seoImages } from "@/lib/seo/images";
import type { SEOImageKey } from "@/lib/seo/types";

export function SEOImage({ imageKey, priority = false }: { imageKey: SEOImageKey; priority?: boolean }) {
  const image = seoImages[imageKey];
  return (
    <div className={`seo-image seo-image--${imageKey}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 760px) 92vw, 48vw"
      />
    </div>
  );
}