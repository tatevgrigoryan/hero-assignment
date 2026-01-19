import * as React from "react";

import { cn } from "../../lib/cn";

/**
 * Glass input field primitive.
 */
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-2xl border border-white/40 bg-white/70 px-4 text-sm text-slate-900",
        "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
