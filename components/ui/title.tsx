import * as React from "react"

interface TitleProps {
  variant?: "default" | "red" | "blue" | "white" | "disabled",
  size?: "default" | "lg" | "xl",
  href?: string,
  children: React.ReactNode,
  className?: React.ReactNode
}

const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({children, className = "", variant = "default", href = "",size = "default", ...props }, ref) => {

    const variants = {
      default: " bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent",
      red: " bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
      blue: " bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent",
      white: " bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-50 text-transparent",
      disabled: " bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 text-transparent"
    }

    const sizes = {
      default: "font-semibold text-xl",
      lg: "font-semibold text-4xl",
      xl: "font-semibold text-7xl"
    }

    const classes = `${sizes[size]} ${variants[variant]} ${className}`

    return (
        <span className={classes}>
            {children}
        </span>
    )
  },
)
Title.displayName = "Title"

export { Title }

