"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
}

export function Dropdown({ trigger, children, align = "left" }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown className={` transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={50} />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 py-2 w-full bg-black rounded-md shadow-lg ring-2 ring-zinc-600 ring-opacity-5`}
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export function DropdownItem({ children, icon, className = "", ...props }: DropdownItemProps) {
  return (
    <button
      className={`w-full text-left px-4 py-2 flex items-center gap-2 ${className}`}
      role="menuitem"
      {...props}
    >
      {children}
    </button>
  )
}

interface DropdownLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function DropdownLink({ href, children, className = "" }: DropdownLinkProps) {
  return (
    <Link
      href={href}
      className={` ${className}`}
      role="menuitem"
    >
      <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent">
        {children}
      </h1>
    </Link>
  )
}

