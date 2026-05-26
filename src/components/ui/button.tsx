"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md hover:-translate-y-0.5",
        secondary:
          "bg-white text-foreground border border-border hover:border-accent/30 hover:bg-accent-light/40",
        ghost:
          "text-foreground hover:bg-accent-light/40",
        outline:
          "border-2 border-accent text-accent hover:bg-accent hover:text-white",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-xl",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-sm",
        xl: "h-13 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "rounded",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
