import * as React from "react";

import { cn } from "../../lib/cn";

/**
 * Animated skeleton block for loading states.
 */
export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse rounded-2xl bg-slate-900/5", className)}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";
