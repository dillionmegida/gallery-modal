import ImagesGrid from "@/components/ImagesGrid"
import { DEMO_IMAGES } from "@/demo/images"

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-5 text-4xl">Some Unsplash Images</h1>
      <ImagesGrid
        images={DEMO_IMAGES.concat(DEMO_IMAGES).concat(DEMO_IMAGES)}
      />
    </main>
  )
}
