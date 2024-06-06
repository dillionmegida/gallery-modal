import type { ImageType } from "@/types/Image"
import Image from "next/image"
import Link from "next/link"

type Props = {
  images: ImageType[]
}

export default function ImagesGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <Link
          href={`/photo/${image.id}`}
          className="aspect-video relative group overflow-hidden border-4 border-transparent transition-colors hover:border-yellow-500"
          key={image.id}
          scroll={false}
        >
          <Image
            fill
            src={image.src}
            className="group-hover:scale-125 transition-transform"
            alt=""
          />
        </Link>
      ))}
    </div>
  )
}
