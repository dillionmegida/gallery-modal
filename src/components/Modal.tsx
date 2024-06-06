"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useState } from "react"
import ReactModal from "react-modal"

const customStyles = {
  content: {
    backgroundColor: "black",
    height: "max-content",
    width: "90%",
    margin: "0 auto"
  },
}

if (ReactModal.defaultStyles.overlay)
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.9)"

ReactModal.setAppElement("#modal")

type Props = { children: ReactNode }

export default function Modal({ children }: Props) {
  const [modalIsOpen, setIsOpen] = useState(true)
  const router = useRouter()

  function closeModal() {
    setIsOpen(false)
    router.back()
  }

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      <button className="mt-5 mb-5 bg-red-400 text-white py-1 px-2" onClick={closeModal}>
        close
      </button>
        {children}
      </ReactModal>
    </div>
  )
}
