'use client'

import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  open?: boolean
}

export function Input({ children, open, ...props }: InputProps) {
  const [isOpen, setIsOpen] = React.useState(open || false)
  const inputRef = React.useRef<HTMLDivElement>(null)
  
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

  React.useEffect(() => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    if(children == ''){
      setIsOpen(false)
    }else {
      setIsOpen(true)
    }
    delay(1000)
  }, [])

  function handleOnSelect() {
    if(children == ''){
      setIsOpen(false)
    }else {
      setIsOpen(true)
    }
  }

  return (
    <div ref={inputRef} className="relative">
      <input className=" font-semibold text-xl py-4 px-6 bg-black rounded-full shadow-lg ring-2 ring-zinc-900 placeholder:text-zinc-700" onSelect={handleOnSelect} {...props} />

      {isOpen && (
        <div
          className={`absolute max-h-96 mt-2 py-2 bg-black rounded-md shadow-lg ring-2 ring-zinc-900 z-0 overflow-auto`}
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
    )
}