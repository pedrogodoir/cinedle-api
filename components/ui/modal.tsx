"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "./button"
import { Title } from "./title"

interface ModalProps {
  color: "disabled" | "default" | "red",
  isOpen: boolean,
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, className = "", color = "default" }: ModalProps) {
  // Ref para o conteúdo do modal
  const modalRef = React.useRef<HTMLDivElement>(null)

  // Fechar modal ao pressionar ESC
  React.useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden" // Previne scroll do body
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Fechar ao clicar fora do modal
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`bg-black rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] border-2 border-zinc-900 overflow-auto animate-slide-up ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 border-b">
          {title && <Title variant="white" size="lg">{title}</Title>}
          <Button variant={color} size="icon" onClick={onClose} aria-label="Close modal">
            <X color="white" size={50}/>
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

