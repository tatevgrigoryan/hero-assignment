import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white/70 text-slate-900 shadow-sm ring-1 ring-white/40 hover:bg-white/90",
  secondary:
    "bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/10",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-900/5"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base"
};

/**
 * ShadCN-inspired button primitive.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
