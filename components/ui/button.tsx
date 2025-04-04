'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "red" | "disabled",
  href?: string,
  size?: "default" | "icon" | "box"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, className = "", variant = "default", href = "", size = "default", ...props }, ref) => {
    const router = useRouter()
    const baseStyles = "flex flex-col items-center justify-center rounded-[50px] bg-black"

    const variants = {
      default: "bg-gradient-to-b from-zinc-700 to-zinc-50 hover:bg-gradient-to-b hover:from-zinc-50 hover:to-zinc-700",
      disabled: "bg-gradient-to-b from-zinc-700 to-zinc-900 cursor-default",
      red: " bg-gradient-to-b from-red-600 to-red-900 hover:bg-gradient-to-b hover:from-red-900 hover:to-red-600"
    }

    const spanVariants = {
      default: "font-semibold text-4xl from-zinc-50",
      disabled: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 text-transparent cursor-default",
      red: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent"
    }

    const sizes = {
      default: "w-96 h-[72px]",
      box: "max-w-[275px] hover:items-start hover:justify-start p-5 gap-3 transition-[width,height] duration-300",
      icon: "w-[72px] h-[72px]",
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    const spanClass = `${spanVariants[variant]}`

    return (
      <div>
        {href ? (
            <button className={classes} ref={ref} onClick={() => router.push(href)} {...props}>
              {children}
            </button>
        ) : (
          <button className={classes} ref={ref} {...props}>
            {children}
          </button>
        )}
      </div>
    )
  },
)
Button.displayName = "Button"

export { Button }

