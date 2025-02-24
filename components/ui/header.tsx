import { EllipsisVertical } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import { Dropdown, DropdownItem } from "./dropdown"
import { Modal } from "./modal"

interface HeaderProps {
  variant?: "default" | "red" | "blue",
  href?: string,
  children: React.ReactNode,
  className: React.ReactNode
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({children, className = "", variant = "default", href = "", ...props }, ref) => {

    const variants = {
      default: "",
      red: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
      blue: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent"
    }

    const classes = `${variants[variant]}`

    return (
        <div>
            <div className="flex flex-row justify-between items-center gap-4">
              {children}
            </div>
        </div>
    )
  },
)
Header.displayName = "Button"

export { Header }

