import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:ring-offset-2",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-blue-400",
          "text-white",
          "hover:enabled:bg-blue-700",
          "active:enabled:bg-blue-800",
        ],
        secondary: [
          "bg-transparent",
          "text-blue-400",
          "hover:enabled:bg-blue-400",
          "hover:enabled:text-white",
          "active:enabled:bg-blue-500",
        ],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
      loading: { true: ["cursor-wait"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
      loading: false,
    },
  }
)

interface BaseButtonProps extends VariantProps<typeof button> {
  className?: string
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  underline?: boolean
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never
}

interface ButtonAsAnchor extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string
}

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, intent, size, underline, loading, disabled, children, ...props }, ref) => {
    const isLink = (props as ButtonAsAnchor).href !== undefined;
    const Comp = isLink ? 'a' : 'button';
    
    return (
      <Comp
        ref={ref as (isLink extends true ? React.RefObject<HTMLAnchorElement> : React.RefObject<HTMLButtonElement>)}
        className={twMerge(button({ intent, size, className, underline, loading }))}
        disabled={!isLink && (disabled || loading)}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        role={isLink ? undefined : 'button'}
        {...(props as any)}
      >
        {loading && <Spinner />}
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
