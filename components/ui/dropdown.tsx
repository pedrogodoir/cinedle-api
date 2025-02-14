"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DropdownProps {
  variant: 'default' | 'red' | 'blue'
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Dropdown({ trigger, children, variant = 'default' }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const variants = {
    default: "",
    red: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
    blue: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent"
  }

  const classes = `${variants[variant]}`

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
        <span className="flex items-center gap-1">
          <h1 className={classes}>{trigger}</h1>
        </span>
        <ChevronDown className={` transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={50} />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 py-2 w-full bg-black rounded-md shadow-lg ring-2 ring-zinc-600 ring-opacity-5`}
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
  variant?: 'default' | 'red' | 'blue' | 'disabled'
  icon?: React.ReactNode
}

export function DropdownItem({ children, icon, className = "", variant = "default", ...props }: DropdownItemProps) {

  const variants = {
    default: "",
    red: "font-semibold text-3xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
    blue: "font-semibold text-3xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent",
    disabled: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 text-transparent",
  }

  const classes = `${variants[variant]}`

  return (
    <button
      className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-zinc-950 ${className}`}
      role="menuitem"
      {...props}
    >
      <span className={classes}>
        {children}
      </span>
    </button>
  )
}

interface DropdownLinkProps {
  variant?: 'default' | 'red' | 'blue' | 'disabled'
  href: string
  children: React.ReactNode
  className?: string
}

export function DropdownLink({ href, children, className = "", variant = "default" }: DropdownLinkProps) {

  const variants = {
    default: "",
    red: "font-semibold text-3xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
    blue: "font-semibold text-3xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent",
    disabled: "font-semibold text-3xl bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 text-transparent",
  }

  const classes = `${variants[variant]}`

  return (
    <Link
      href={href}
      className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-zinc-950 ${className}`}
      role="menuitem"
    >
      <span className={classes}>
        {children}
      </span>
    </Link>
  )
}

