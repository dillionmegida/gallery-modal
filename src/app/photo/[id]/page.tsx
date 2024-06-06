import ImagesGrid from "@/components/ImagesGrid"
import { DEMO_IMAGES } from "@/demo/images"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: { id: string }
}

export default function PhotoPage({ params }: Props) {
  const photo = DEMO_IMAGES.find(image => image.id === params.id)

  if (!photo) return <></>

  return (
    <main className="p-10">
      <div className="flex justify-between items-center py-5 px-10 border mb-5">
        <h1 className="text-4xl">{photo.title}</h1>
        <Link
          className="bg-red-400 p-3 hover:bg-red-600 hover:text-white transition-colors"
          href="/"
        >
          All photos
        </Link>
      </div>
      <div className="relative aspect-video">
        <Image src={photo.src} fill alt="" />
      </div>
      <div className="p-5">
        <p className="text-2xl py-4">{photo.description}</p>
        <p className="text-xl py-4">Author: {photo.author}</p>
      </div>
      <hr className="my-10 border-gray-950" />
      <h2 className="text-3xl mb-4">More Images like this:</h2>
      <ImagesGrid
        images={DEMO_IMAGES.concat(DEMO_IMAGES).concat(DEMO_IMAGES)}
      />
    </main>
  )
}
