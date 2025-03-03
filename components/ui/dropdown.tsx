"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Title } from "./title"

interface DropdownProps {
  variant?: 'default' | 'red' | 'blue' | 'white' | 'disabled'
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Dropdown({ trigger, children, variant = 'default' }: DropdownProps) {
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
        <Title variant={variant} size="xl"> {trigger}</Title>
        <ChevronDown className={` transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={50} />
      </button>

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

interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'red' | 'blue' | 'white' | 'disabled'
  icon?: React.ReactNode
}

export function DropdownItem({ children, icon, className = "", variant = "default", ...props }: DropdownItemProps) {
  return (
    <button
      className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-zinc-950 ${className}`}
      role="menuitem"
      {...props}
    >
      <Title variant={variant} size="lg"> {children}</Title>
    </button>
  )
}

interface DropdownLinkProps {
  variant?: 'default' | 'red' | 'blue' | 'white' | 'disabled'
  href: string
  children: React.ReactNode
  className?: string
}

export function DropdownLink({ href, children, className = "", variant = "default" }: DropdownLinkProps) {
  return (
    <Link
      href={href}
      className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-zinc-950 ${className}`}
      role="menuitem"
    >
      <Title variant={variant} size="lg"> {children}</Title>
    </Link>
  )
}

