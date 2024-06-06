import Modal from "@/components/Modal"
import { DEMO_IMAGES } from "@/demo/images"
import Image from "next/image"

type Props = {
  params: {
    id: string
  }
}

export default function ModalPhoto({ params }: Props) {
  const photo = DEMO_IMAGES.find(image => image.id === params.id)

  if (!photo) return <></>

  return (
    <Modal>
      <h1 className="text-3xl mb-4">Hello {params.id}</h1>
      <div className="relative aspect-video">
        <Image src={photo.src} fill alt="" />
      </div>
      <p className="text-2xl py-4">{photo.description}</p>
        <p className="text-xl py-4">Author: {photo.author}</p>
    </Modal>
  )
}
