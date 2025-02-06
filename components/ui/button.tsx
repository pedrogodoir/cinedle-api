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
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      disabled: "bg-gradient-to-b from-zinc-700 to-zinc-900",
      link: "text-primary underline-offset-4 hover:underline",
      red: "transition duration-1000 bg-gradient-to-b from-red-600 to-red-900 hover:bg-gradient-to-b hover:from-red-900 hover:to-red-600"
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

