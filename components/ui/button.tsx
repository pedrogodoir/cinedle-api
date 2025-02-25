import Link from "next/link"
import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "disabled" | "red",
  href?: string,
  size?: "default" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, className = "", variant = "default", href = "", size = "default", ...props }, ref) => {
    const baseStyles = "flex items-center justify-center rounded-full bg-black"

    const variants = {
      default: "bg-gradient-to-b from-zinc-700 to-zinc-50 hover:bg-gradient-to-b hover:from-zinc-50 hover:to-zinc-700",
      disabled: "bg-gradient-to-b from-zinc-700 to-zinc-900",
      red: " bg-gradient-to-b from-red-600 to-red-900 hover:bg-gradient-to-b hover:from-red-900 hover:to-red-600"
    }

    const spanVariants = {
        default: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent",
        disabled: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 text-transparent",
        red: "font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent"
    }

    const sizes = {
      default: "w-96 h-[72px]",
      icon: "w-[72px] h-[72px]",
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    const spanClass = `${spanVariants[variant]}`

    return (
        <Link href={href} className={classes}>
            <button ref={ref} {...props}>
                <span className={spanClass}>{children}</span>
            </button>
        </Link>
    )
  },
)
Button.displayName = "Button"

export { Button }

