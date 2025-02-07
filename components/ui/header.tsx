import { ChevronDown, EllipsisVertical } from "lucide-react"
import Link from "next/link"
import * as React from "react"

interface HeaderProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant?: "default" | "red" | "blue",
  href?: string,
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({children, className = "", variant = "default", href = "", ...props }, ref) => {
    const baseStyles = "flex items-center justify-center rounded-full bg-black"

    const variants = {
      default: "",
      red: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent",
      blue: "font-semibold text-7xl bg-clip-text bg-gradient-to-b from-sky-900 to-sky-600 text-transparent"
    }

    const classes = `${variants[variant]}`

    return (
        <div>
            {variant == "default" ? (
                <div className="flex flex-row justify-between items-center gap-4">
                    <div className="h-full">
                        <EllipsisVertical color="white" size={50} className="cursor-pointer"></EllipsisVertical>
                    </div>

                    <div className="flex flex-row">
                        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent">Cine</h1>
                        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-50 text-transparent">dle</h1>

                        <div className="w-[50px]">
                        </div>
                    </div>
                        
                </div>
            ) : (
                <div className="flex flex-row justify-between items-center gap-4">
                    <div className="h-full">
                        <EllipsisVertical color="white" size={50} className="cursor-pointer"></EllipsisVertical>
                    </div>

                    <div className="flex flex-row cursor-pointer items-center">
                        <h1 className={classes}>{children}</h1>

                        <div className="w-[50px]">
                            <ChevronDown size={50}></ChevronDown>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    )
  },
)
Header.displayName = "Button"

export { Header }

