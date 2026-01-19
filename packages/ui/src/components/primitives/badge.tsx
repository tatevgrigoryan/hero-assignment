import * as React from "react";

import { cn } from "../../lib/cn";

export type BadgeVariant = "soft" | "solid";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  soft: "bg-slate-900/5 text-slate-700",
  solid: "bg-slate-900 text-white"
};

/**
 * ShadCN-inspired badge for metadata.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "soft", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
