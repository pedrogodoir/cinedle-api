'use client'

import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  data?: Array<[]>,
}

export function Input({ children, data, ...props }: InputProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  React.useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
  
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
  
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  if(data) {
    setIsOpen(true)
  }

  return (
    <div>
      <input className=" w-96 h-[72px] font-semibold text-3xl py-2 px-6 bg-black rounded-full shadow-lg ring-2 ring-zinc-900 placeholder:text-zinc-700" {...props} />

      {isOpen && (
        <div
          className={`absolute mt-2 py-2 w-full bg-black rounded-md shadow-lg ring-2 ring-zinc-900 z-0`}
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
    )
}