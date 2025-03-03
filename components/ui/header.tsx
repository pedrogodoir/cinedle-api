'use client'

import { EllipsisVertical } from "lucide-react"
import * as React from "react"
import { Modal } from "./modal"
import { useState } from "react"

interface HeaderProps {
  xColor?: "disabled" | "default" | "red",
  children?: React.ReactNode,
  className?: React.ReactNode
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({children, className = "", xColor = "default", ...props }, ref) => {
    const [openModal, isOpenModal] = useState(false)

    return (
        <div className="flex flex-row justify-between items-center gap-4">
          <Modal title="Settings" isOpen={openModal} onClose={() => {isOpenModal(false)}} color={xColor}>{null}</Modal>
          <button onClick={() => isOpenModal(true)}>
            <EllipsisVertical color="white" size={50} className="cursor-pointer"></EllipsisVertical>
          </button>
            <div className="flex flex-row justify-between items-center">
              {children}
            </div>
        </div>
    )
  },
)
Header.displayName = "Button"

export { Header }

